import {
  AttendanceStatus,
  AttendanceType,
  Location,
  Prisma,
  PrismaClient,
  Role,
  TeamRole
} from '@prisma/client'
import { hash } from 'argon2'
const prisma = new PrismaClient()
async function main() {
  const bandUsers: Prisma.BandUserCreateManyInput[] = [
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.Newbie,
      username: 'user01',
      password: await hash('1234'),
      email: 'example1@example.com',
      realname: 'realname'
    },
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.Normal,
      username: 'user02',
      password: await hash('1234'),
      email: 'example2@example.com',
      realname: 'realname'
    },
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.Admin,
      username: 'user03',
      password: await hash('1234'),
      email: 'example3@example.com',
      realname: 'realname'
    },
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.SuperAdmin,
      username: 'user04',
      password: await hash('1234'),
      email: 'example4@example.com',
      realname: 'realname'
    },
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.Normal,
      username: 'user05',
      password: await hash('1234'),
      email: 'example5@example.com',
      realname: 'realname'
    },
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.Normal,
      username: 'user06',
      password: await hash('1234'),
      email: 'example6@example.com',
      realname: 'realname'
    },
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.Normal,
      username: 'user07',
      password: await hash('1234'),
      email: 'example7@example.com',
      realname: 'realname'
    },
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.Normal,
      username: 'user08',
      password: await hash('1234'),
      email: 'example8@example.com',
      realname: 'realname'
    },
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.Normal,
      username: 'user09',
      password: await hash('1234'),
      email: 'example9@example.com',
      realname: 'realname'
    },
    {
      profileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg',
      role: Role.Normal,
      username: 'user10',
      password: await hash('1234'),
      email: 'example10@example.com',
      realname: 'realname'
    }
  ]

  await prisma.bandUser.createMany({
    data: bandUsers,
    skipDuplicates: true
  })

  const people: Prisma.PeopleCreateManyInput[] = [
    {
      name: 'people01',
      studentNo: 2023,
      studentId: '2023310001',
      absence: false,
      attendanceTarget: true,
      teamRole: TeamRole.Athlete,
      year: 2015,
      newbie: false,
      offPosition: 'QB',
      defPosition: 'CB',
      splPosition: 'NORMAL'
    },
    {
      name: 'people02',
      studentNo: 2023,
      studentId: '2023310002',
      absence: false,
      attendanceTarget: true,
      teamRole: TeamRole.Athlete,
      year: 2019,
      newbie: false,
      offPosition: 'OL',
      defPosition: 'DL',
      splPosition: 'NORMAL'
    },
    {
      name: 'people03',
      studentNo: 2022,
      studentId: '2022310001',
      absence: false,
      attendanceTarget: true,
      teamRole: TeamRole.Athlete,
      year: 2021,
      newbie: false,
      offPosition: 'WR',
      defPosition: 'HYB',
      splPosition: 'NORMAL'
    },
    {
      name: 'people04',
      studentNo: 2020,
      studentId: '2020310001',
      absence: false,
      attendanceTarget: true,
      teamRole: TeamRole.Athlete,
      year: 2022,
      newbie: false,
      offPosition: 'RB',
      defPosition: 'LB',
      splPosition: 'KICKER'
    },
    {
      name: 'people05',
      studentNo: 2020,
      studentId: '2020310002',
      absence: false,
      attendanceTarget: true,
      teamRole: TeamRole.Staff,
      year: 2022,
      newbie: false,
      offPosition: 'STAFF',
      defPosition: 'STAFF',
      splPosition: 'STAFF'
    },
    {
      name: 'people06',
      studentNo: 2020,
      studentId: '2020310003',
      absence: true,
      attendanceTarget: true,
      teamRole: TeamRole.Athlete,
      year: 2020,
      newbie: false,
      offPosition: 'WR',
      defPosition: 'HYB',
      splPosition: 'NORMAL'
    },
    {
      name: 'people07',
      studentNo: 2020,
      studentId: '2020310004',
      absence: false,
      attendanceTarget: true,
      teamRole: TeamRole.Athlete,
      year: 2015,
      newbie: true,
      offPosition: 'OL',
      defPosition: 'LB',
      splPosition: 'NORMAL'
    },
    {
      name: 'people08',
      studentNo: 2020,
      studentId: '2020310005',
      absence: true,
      attendanceTarget: true,
      teamRole: TeamRole.Athlete,
      year: 2015,
      newbie: true,
      offPosition: 'OL',
      defPosition: 'DL',
      splPosition: 'Normal'
    }
  ]

  await prisma.people.createMany({
    data: people
  })

  const attendances: Prisma.AttendanceCreateInput[] = [
    {
      date: new Date('2023-03-09'),
      checked: false,
      isGame: false,
      survey: AttendanceStatus.Present,
      location: Location.Seoul,
      reason: '풀참',
      People: {
        connect: {
          id: 1
        }
      }
    },
    {
      date: new Date('2023-03-10'),
      checked: false,
      isGame: false,
      survey: AttendanceStatus.Present,
      location: Location.Seoul,
      reason: '풀참',
      People: {
        connect: {
          id: 1
        }
      }
    },
    {
      date: new Date('2023-03-11'),
      checked: false,
      isGame: false,
      survey: AttendanceStatus.Present,
      location: Location.Seoul,
      reason: '풀참',
      People: {
        connect: {
          id: 1
        }
      }
    },
    {
      date: new Date('2023-03-12'),
      checked: false,
      isGame: false,
      survey: AttendanceStatus.Present,
      location: Location.Seoul,
      reason: '풀참',
      People: {
        connect: {
          id: 1
        }
      }
    },
    {
      date: new Date('2023-03-09'),
      checked: false,
      isGame: false,
      survey: AttendanceStatus.Tardy,
      location: Location.Integrated,
      reason: '병원',
      People: {
        connect: {
          id: 2
        }
      }
    },
    {
      date: new Date('2023-03-10'),
      checked: false,
      isGame: false,
      survey: AttendanceStatus.Absent,
      location: Location.Integrated,
      reason: '약속',
      People: {
        connect: {
          id: 2
        }
      }
    },
    {
      date: new Date('2023-03-11'),
      checked: false,
      isGame: false,
      survey: AttendanceStatus.Present,
      location: Location.Suwon,
      reason: '',
      People: {
        connect: {
          id: 2
        }
      }
    },
    {
      date: new Date('2023-03-09'),
      checked: false,
      isGame: false,
      survey: AttendanceStatus.Present,
      location: Location.Suwon,
      reason: '풀참',
      People: {
        connect: {
          id: 3
        }
      }
    },
    {
      date: new Date('2023-03-10'),
      checked: false,
      isGame: false,
      survey: AttendanceStatus.Present,
      location: Location.Suwon,
      reason: '풀참',
      People: {
        connect: {
          id: 3
        }
      }
    }
  ]

  for (let i = 0; i < attendances.length; i++) {
    await prisma.attendance.create({
      data: attendances[i]
    })
  }

  const surveyGroups: Prisma.SurveyGroupCreateInput[] = [
    {
      name: '5월 1주차 출석조사',
      surveys: {
        createMany: {
          data: [
            {
              date: new Date('2023-05-01'),
              description: '월요일, 명륜 통합운동',
              type: AttendanceType.Integrated
            },
            {
              date: new Date('2023-05-01'),
              description: '수요일, 개별운동',
              type: AttendanceType.Integrated
            },
            {
              date: new Date('2023-05-01'),
              description: '금요일, 율전 통합운동',
              type: AttendanceType.Integrated
            }
          ]
        }
      }
    },
    {
      name: '5월 2주차 출석조사',
      surveys: {
        createMany: {
          data: [
            {
              date: new Date('2023-05-08'),
              description: '월요일, 명륜 통합운동',
              type: AttendanceType.Integrated
            },
            {
              date: new Date('2023-05-10'),
              description: '수요일, 개별운동',
              type: AttendanceType.Integrated
            },
            {
              date: new Date('2023-05-12'),
              description: '금요일, 율전 통합운동',
              type: AttendanceType.Integrated
            }
          ]
        }
      }
    },
    {
      name: '5월 3주차 출석조사',
      surveys: {
        createMany: {
          data: [
            {
              date: new Date('2023-05-15'),
              description: '월요일, 명륜 통합운동',
              type: AttendanceType.Integrated
            },
            {
              date: new Date('2023-05-17'),
              description: '수요일, 개별운동',
              type: AttendanceType.Integrated
            },
            {
              date: new Date('2023-05-19'),
              description: '금요일, 율전 통합운동',
              type: AttendanceType.Integrated
            }
          ]
        }
      }
    },
    {
      name: '5월 4주차 출석조사',
      surveys: {
        createMany: {
          data: [
            {
              date: new Date('2023-05-22'),
              description: '월요일, 명륜 통합운동',
              type: AttendanceType.Integrated
            },
            {
              date: new Date('2023-05-24'),
              description: '수요일, 개별운동',
              type: AttendanceType.Integrated
            },
            {
              date: new Date('2023-05-26'),
              description: '금요일, 율전 통합운동',
              type: AttendanceType.Integrated
            }
          ]
        }
      }
    },
    {
      name: '6월 1주차 출석조사',
      surveys: {
        createMany: {
          data: [
            {
              date: new Date('2023-06-01'),
              description: '월요일, 명륜 통합운동',
              type: AttendanceType.Integrated
            },
            {
              date: new Date('2023-06-02'),
              description: '수요일, 개별운동',
              type: AttendanceType.Dispersion
            },
            {
              date: new Date('2023-06-03'),
              description: '금요일, 율전 통합운동',
              type: AttendanceType.Integrated
            }
          ]
        }
      }
    }
  ]

  for (let i = 0; i < surveyGroups.length; i++) {
    await prisma.surveyGroup.create({ data: surveyGroups[i] })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
