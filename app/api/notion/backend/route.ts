import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

const notionSecret = process.env.NOTION_SECRET!;
const notionDatabaseId = process.env.DATABASE_ID!;
const notion = new Client({ auth: notionSecret });

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    console.log(notionDatabaseId, notionSecret);

    if (!notionDatabaseId || !notionSecret) {
      console.log("Notion secret or database id missing");
    } else console.log(notionDatabaseId, notionSecret);

    const response = await notion.databases.query({
      database_id: notionDatabaseId!,
    });
    // return NextResponse.json({
    //   results: response.results,
    // });
    return NextResponse.json({
      results: response.results,
    });
  } catch (error) {
    //   console.log(notionDatabaseId, notionSecret);
    //   console.log(error);
    return NextResponse.json({
      error: error,
    });
  }
}
