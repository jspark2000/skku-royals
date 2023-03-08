import { Prisma, PrismaClient } from '@prisma/client'
import { getBandUserSeed, getReviews } from './band'
const prisma = new PrismaClient()
async function main() {
  const bandUserSeed = await getBandUserSeed()
  const userSeedingResult: Prisma.BatchPayload =
    await prisma.bandUser.createMany({
      data: bandUserSeed
    })
  console.log(userSeedingResult.count)

  const gameReviews = await getReviews()
  const reviewSeedingResult: Prisma.BatchPayload =
    await prisma.gameReview.createMany({
      data: gameReviews
    })
  console.log(reviewSeedingResult.count)
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
