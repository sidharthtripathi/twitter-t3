import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db'
import { hash } from "bcrypt";
interface User {
    name: string,
    email: string,
    password: string,
    username: string
}
export async function POST(req: NextRequest) {
    const data: User = await req.json();
    console.log(data)
    try {
        const newUser = await db.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: await hash(data.password, 10),
                username: data.username
            }
        })

        return NextResponse.json(newUser);
    }
    catch (err : any) {
        return NextResponse.json({error : `${err?.meta.target[0]} already exists`},{status : 401})
    }
}