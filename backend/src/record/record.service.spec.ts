import { Test, TestingModule } from '@nestjs/testing'
import { RecordService } from './record.service'
import { expect } from 'chai'
import { stub } from 'sinon'
import { PrismaService } from 'src/prisma/prisma.service'
import { Record, RecordEvent, RecordItem } from '@prisma/client'
import { RegisterRecordDTO } from './dto/registerRecord.dto'
import { UpdateRecordDTO } from './dto/updateRecord.dto'

const records: Record[] = [
  {
    id: 1,
    date: new Date(),
    uid: 'people01',
    item: RecordItem.Agility,
    event: RecordEvent.YardDash,
    eventValue: 8
  },
  {
    id: 2,
    date: new Date(),
    uid: 'people01',
    item: RecordItem.Power,
    event: RecordEvent.BenchPressMax,
    eventValue: 25
  },
  {
    id: 3,
    date: new Date(),
    uid: 'people02',
    item: RecordItem.Power,
    event: RecordEvent.SquatMax,
    eventValue: 30
  }
]

const people: Array<{ id: number; uid: string }> = [
  {
    id: 1,
    uid: 'people01'
  },
  {
    id: 2,
    uid: 'people02'
  },
  {
    id: 3,
    uid: 'people03'
  }
]

const mockPrismaService = {
  record: {
    findUnique: stub(),
    findMany: stub(),
    create: stub(),
    update: stub(),
    delete: stub()
  },
  people: {
    findFirstOrThrow: stub(),
    findFirst: stub(),
    findUnique: stub()
  }
}

describe('RecordService', () => {
  let service: RecordService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecordService,
        { provide: PrismaService, useValue: mockPrismaService }
      ]
    }).compile()

    service = module.get<RecordService>(RecordService)
  })

  it('should be defined', () => {
    expect(service).to.be.ok
  })

  describe('getPersonalRecords', () => {
    it('should return records corresponding to peopleId', async () => {
      //given
      const peopleId = 1
      mockPrismaService.people.findFirstOrThrow.resolves(people[0])
      mockPrismaService.record.findMany.resolves(records.slice(0, 2))

      //when
      const result = await service.getPersonalRecords(peopleId)

      //then
      expect(
        mockPrismaService.people.findFirstOrThrow.calledWith({
          where: {
            id: peopleId
          }
        })
      ).to.be.true
      expect(
        mockPrismaService.record.findMany.calledWith({
          where: {
            People: {
              uid: people[0].uid
            }
          }
        })
      ).to.be.true
      expect(mockPrismaService.people.findFirstOrThrow.calledOnce).to.be.true
      expect(mockPrismaService.record.findMany.calledOnce).to.be.true
      expect(result).to.deep.equal(records.slice(0, 2))
    })
  })

  describe('registerRecord', () => {
    it('should return created record id', async () => {
      //given
      const peopleId = 1
      const recordDTO: RegisterRecordDTO = {
        date: new Date(),
        item: RecordItem.Agility,
        event: RecordEvent.BenchPressMax,
        eventValue: 123
      }
      mockPrismaService.record.create.resolves({ id: 1 })

      // when
      const result = await service.registerRecord(peopleId, recordDTO)

      // then
      expect(
        mockPrismaService.record.create.calledWith({
          data: {
            People: {
              connect: {
                id: peopleId
              }
            },
            ...recordDTO
          },
          select: {
            id: true
          }
        })
      ).to.be.true
      expect(mockPrismaService.record.create.calledOnce).to.be.true
      expect(result).to.deep.equal({ id: 1 })
    })
  })

  describe('updateRecord', () => {
    it('should return updated record', async () => {
      // when
      const recordId = 1
      const recordDTO: UpdateRecordDTO = {
        eventValue: 123
      }
      mockPrismaService.record.update.resolves(records[0])

      // given
      const result = await service.updateRecord(recordId, recordDTO)

      // then
      expect(
        mockPrismaService.record.update.calledWith({
          where: {
            id: recordId
          },
          data: {
            ...recordDTO
          }
        })
      )
      expect(mockPrismaService.record.update.calledOnce).to.be.true
      expect(result).to.deep.equal(records[0])
    })
  })

  describe('deleteRecord', () => {
    it('should return deleted record id', async () => {
      // when
      const recordId = 1
      mockPrismaService.record.delete.resolves({ id: 1 })

      // given
      const result = await service.deleteRecord(recordId)

      // then
      expect(
        mockPrismaService.record.delete.calledWith({
          where: {
            id: recordId
          },
          select: {
            id: true
          }
        })
      ).to.be.true
      expect(mockPrismaService.record.delete.calledOnce).to.be.true
      expect(result).to.deep.equal({ id: 1 })
    })
  })
})
