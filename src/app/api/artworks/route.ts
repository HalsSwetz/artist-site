import { NextResponse } from "next/server";

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME!;
const API_KEY = process.env.CLOUDINARY_API_KEY!;
const API_SECRET = process.env.CLOUDINARY_API_SECRET!;

export async function GET(req: Request) {
  if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    return NextResponse.json(
      {
        error: "Cloudinary env vars missing",
        have: {
          CLOUD_NAME: Boolean(CLOUD_NAME),
          API_KEY: Boolean(API_KEY),
          API_SECRET: Boolean(API_SECRET),
        },
      },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");
  const tag = searchParams.get("tag"); 


  const parts: string[] = ['resource_type:image', 'type:upload'];
  if (folder && folder.trim()) parts.push(`folder:"${folder.trim()}"`);
  if (tag && tag.trim()) parts.push(`tags="${tag.trim()}"`);
  const expression = parts.join(' AND ');

  const results: any[] = [];
  let next_cursor: string | undefined;

  try {
    for (let i = 0; i < 5; i++) {
      const body = {
        expression,
        with_field: ["context", "tags"],
        max_results: 100,
        next_cursor,
        sort_by: [{ public_id: "desc" }],
      };

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic " + Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64"),
          },
          body: JSON.stringify(body),
          cache: "no-store",
        }
      );

      if (!res.ok) {
        const text = await res.text();
        return NextResponse.json(
          { error: "Cloudinary search failed", status: res.status, details: text, expression },
          { status: res.status }
        );
      }

      const json = await res.json();
      results.push(...(json.resources || []));
      next_cursor = json.next_cursor;
      if (!next_cursor) break;
    }

    const artworks = results.map((r) => {
      const ctx = r.context?.custom || {};
      return {
        id: r.public_id as string,
        alt: (ctx.alt as string) || (r.public_id as string),
        title: (ctx.title as string) || (r.public_id as string),
        year: ctx.year ? Number(ctx.year) : undefined,
        medium: (ctx.medium as string) || undefined,
        dimensions: (ctx.dimensions as string) || undefined,
        collection: (ctx.collection as string) || (r.folder as string) || undefined,
        width: r.width as number,
        height: r.height as number,
        // tags: r.tags as string[] | undefined,
        folder: r.folder as string | undefined, 
      };
    });

    return NextResponse.json(
      { count: artworks.length, expression, sample: artworks.slice(0, 3), artworks },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Unknown error", expression },
      { status: 500 }
    );
  }
}