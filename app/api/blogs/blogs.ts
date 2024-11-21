import { NextResponse } from 'next/server';
import { db } from "@/lib/db";

export async function GET() {
    const blogs = await db.blog.findMany();
    return NextResponse.json(blogs);
}

