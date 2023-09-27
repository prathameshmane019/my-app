import connectMongoDB from "../../libs/mongodb";
import University from "../../models/university";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    await connectMongoDB();
    const newUniversity = await University.create({ username, password });

    // Check if the user was successfully created
    if (newUniversity) {
      return NextResponse.json({ message: "University Created" }, { status: 201 });
    } else {
      throw new Error("Failed to create a University");
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create University" }, { status: 500 });
  }
}