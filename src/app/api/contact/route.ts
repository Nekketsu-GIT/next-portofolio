import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const res = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: {
          email: process.env.MAILERSEND_FROM_EMAIL,
          name: "Portfolio — José DACOSTA",
        },
        to: [{ email: "josedacosta339@gmail.com", name: "José DACOSTA" }],
        reply_to: { email, name },
        subject: subject || `[Portfolio] Message de ${name}`,
        text: `Nom : ${name}\nEmail : ${email}\nSujet : ${subject}\n\n${message}`,
        html: `<p><strong>Nom :</strong> ${name}</p><p><strong>Email :</strong> ${email}</p><p><strong>Sujet :</strong> ${subject}</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("MailerSend error:", res.status, body);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
