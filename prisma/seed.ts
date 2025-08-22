// prisma/seed.ts
import {
  PrismaClient,
  CountryCode,
  TeamSide,
  BattleMode,
  BattleStatus,
} from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Achievements
  const aFirstWin = await prisma.achievement.upsert({
    where: { slug: "first-win" },
    update: {},
    create: {
      slug: "first-win",
      name: "First Win",
      description: "Win your first battle",
      points: 50,
    },
  });

  // Users
  const users = await Promise.all(
    ["aarav", "ishita", "kunal", "zara", "riya"].map((u, i) =>
      prisma.user.upsert({
        where: { username: u },
        update: {},
        create: {
          clerkId: `dev_${u}`,
          email: `${u}@example.com`,
          username: u,
          displayName: u[0].toUpperCase() + u.slice(1),
          avatarUrl: `/avatars/${u}.jpg`,
          country: CountryCode.IN,
          xp: 200 * (i + 1),
          elo: 1500 + 80 * (5 - i),
          wins: 10 + i * 2,
          losses: i,
          gamesPlayed: 10 + i * 3,
          bestStreak: 5 + i,
        },
      })
    )
  );

  // Sample battle
  const battle = await prisma.battle.create({
    data: {
      status: BattleStatus.COMPLETED,
      mode: BattleMode.ONE_VS_ONE,
      problemKey: "sorting.quick",
      dataset: { n: 64, seed: 42 },
      startedAt: new Date(Date.now() - 1000 * 60),
      endedAt: new Date(),
      participants: {
        create: [
          {
            userId: users[0].id,
            team: TeamSide.A,
            algorithm: "quick-sort",
            isWinner: true,
            timeMs: 920,
            comparisons: 1024,
            swaps: 128,
            eloChange: +18,
          },
          {
            userId: users[1].id,
            team: TeamSide.B,
            algorithm: "merge-sort",
            isWinner: false,
            timeMs: 1100,
            comparisons: 1500,
            swaps: 140,
            eloChange: -18,
          },
        ],
      },
      winner: { connect: { id: users[0].id } },
    },
  });

  await prisma.userAchievement.upsert({
    where: {
      userId_achievementId: {
        userId: users[0].id,
        achievementId: aFirstWin.id,
      },
    },
    update: {},
    create: { userId: users[0].id, achievementId: aFirstWin.id },
  });

  console.log("Seed done:", { users: users.length, battle: battle.id });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
