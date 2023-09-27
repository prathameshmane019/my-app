import connectMongoDB from "../../../../libs/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    await connectMongoDB();
    const newUser = await User.create({ username, password });

    // Check if the user was successfully created
    if (newUser) {
      return NextResponse.json({ message: "User Created" }, { status: 201 });
    } else {
      throw new Error("Failed to create a user");
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}


