"use server";

import { Resend } from "resend";

export async function contact(state: any, formData: FormData) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not defined");
    }

    const resend = new Resend(apiKey);
    const userEmail = formData.get("email") as string;
    const userName = formData.get("name") ?? "";
    const subject = formData.get("subject") ?? "";
    const message = formData.get("message") as string;

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_CONTACT_FROM || "info@example.com",
      to: [process.env.EMAIL_CONTACT_TO || "info@example.com"],
      subject: `${subject} - contact message from ${userName} <${userEmail}>`,
      text: message,
    });

    if (error) {
      console.error({ error });
      return { error: error.message };
    }

    console.log({ data });
    return { success: data?.id };
  } catch (error) {
    console.error({ error });
    return { error: error instanceof Error ? error.message : String(error) };
  }
}
