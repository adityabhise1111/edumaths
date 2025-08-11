import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET - Fetch all users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch users: ${error.message}` }, 
      { status: 500 }
    );
  }
}

// POST - Create a new user
export async function POST(request) {
  try {
    const userData = await request.json();
    const user = await prisma.user.create({
      data: userData
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to create user: ${error.message}` }, 
      { status: 500 }
    );
  }
}