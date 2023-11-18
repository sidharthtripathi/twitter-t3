import { authOptions } from "@/lib/options";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return new Response("Invalid user", { status: 401 });
    const payload = await req.json();
    if (!payload.title) return new Response("Invalid request", { status: 400 });
    const newTweet = await db.tweet.create({
      data: {
        tweet: payload.title,
        authorId: session.user.id,
      },
    });
    return new Response("created");
  } catch (err) {
    console.log(err);
    return new Response("Something Wrong", { status: 400 });
  }
}
