import connectMongoDB from "../../libs/mongodb";
import AddUniversity from "../../models/adduniversity";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username , email, password } = await request.json();
    await connectMongoDB();
    const newUniversity = await User.create({ username,email, password });

    // Check if the user was successfully created
    if (newUniversity) {
      return NextResponse.json({ message: "University Created" }, { status: 201 });
    } else {
      throw new Error("Failed to create a user");
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}