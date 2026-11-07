import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service } = body;

    // Strict input validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a message or project description (at least 5 characters)." },
        { status: 400 }
      );
    }

    // Input sanitization
    const sanitize = (str: string) =>
      str.replace(/[<>]/g, "").trim().substring(0, 2000);

    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: phone ? sanitize(phone) : "Not provided",
      service: service ? sanitize(service) : "General Inquiry",
      message: sanitize(message),
      receivedAt: new Date().toISOString(),
    };

    console.log("[INBOUND CONTACT LEAD - Bulbul Bahar Portfolio]:", sanitizedData);

    // Optional environment variable dispatch hook (e.g. RESEND_API_KEY)
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Bulbul Bahar Leads <onboarding@resend.dev>",
            to: ["info@bulbulbahar.cloud", "Mdbulbul1015@gmail.com"],
            subject: `New SEO Lead from ${sanitizedData.name}`,
            text: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nPhone: ${sanitizedData.phone}\nService: ${sanitizedData.service}\n\nMessage:\n${sanitizedData.message}`,
          }),
        });
      } catch (emailErr) {
        console.error("Resend notification error (non-fatal):", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting Bulbul Bahar! Your inquiry has been received successfully. We will review your website details and respond within 12 hours.",
        data: {
          name: sanitizedData.name,
          receivedAt: sanitizedData.receivedAt,
        },
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Contact API exception:", message);
    return NextResponse.json(
      { error: "Internal server error while processing your request." },
      { status: 500 }
    );
  }
}
