import connectMongoDB from "../../libs/mongodb";
import College from "../../models/college";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    await connectMongoDB();
    const newCollege = await College.create({ username, password });

    // Check if the user was successfully created
    if (newCollege) {
      return NextResponse.json({ message: "User Created" }, { status: 201 });
    } else {
      throw new Error("Failed to create a user");
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
