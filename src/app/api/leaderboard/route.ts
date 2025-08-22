// app/api/leaderboard/route.ts
import { prisma } from "@/lib/db";
export const revalidate = 10; // ISR optional

export async function GET() {
  const rows = await prisma.user.findMany({
    orderBy: [{ elo: "desc" }, { xp: "desc" }],
    select: {
      id: true,
      username: true,
      displayName: true,
      avatarUrl: true,
      elo: true,
      xp: true,
      wins: true,
      losses: true,
    },
    take: 100,
  });
  return Response.json({ rows });
}
