import { NextRequest } from "next/server";
import connectToDb from "../../../../../lib/db";
import Component from "@/features/components/models/components.models";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectToDb();

    const component = await Component.findById(id);

    if (!component) {
      return Response.json({ message: "Component not found" }, { status: 404 });
    }

    return Response.json({
      message: "Component fetched successfully",
      data: component,
    });
  } catch (error) {
    console.error("Error fetching component:", error);
    return Response.json({ message: "Failed to fetch component" }, { status: 500 });
  }
}