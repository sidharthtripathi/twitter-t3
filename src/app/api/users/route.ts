import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const payload = await req.json();
  const users = await db.user.findMany({
    where: {
      OR: [{ username: payload.input }, { name: payload.input }],
    },
    select: {
      image: true,
      name: true,
      username: true,
    },
  });
  if (!users) return NextResponse.json([]);
  else return NextResponse.json(users);
}
