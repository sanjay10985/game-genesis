import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Optional: Verify webhook secret for security
    const secret = request.headers.get("sanity-webhook-secret");
    if (
      process.env.SANITY_WEBHOOK_SECRET &&
      secret !== process.env.SANITY_WEBHOOK_SECRET
    ) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Log the webhook payload for debugging
    console.log("Revalidation triggered:", {
      type: body._type,
      id: body._id,
      timestamp: new Date().toISOString(),
    });

    // Revalidate all pages (you can make this more specific if needed)
    revalidatePath("/", "layout");

    // If you want to revalidate specific pages based on content type:
    // if (body._type === 'page') {
    //   revalidatePath(`/${body.slug?.current}`, 'page');
    // }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: "Content revalidated successfully",
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: err.message,
      },
      { status: 500 },
    );
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({
    message:
      "Revalidation endpoint is working. Use POST to trigger revalidation.",
  });
}
