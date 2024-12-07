// app/api/send-confirmation/route.ts
import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, date, time, meetingType, joinUrl } = await request.json();

    const msg = {
      to: email,
      from: {
        email: 'smartstackmg@gmail.com',
        name: 'SmartStack'
      },
      cc: 'smartstackmg@gmail.com', // Adding CC to receive a copy
      subject: `Appointment Confirmation: ${meetingType} on ${date}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Your Appointment is Confirmed!</h2>
          <p>Hello ${name},</p>
          <p>Your ${meetingType} has been scheduled for:</p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Date:</strong> ${date}</p>
            <p style="margin: 10px 0;"><strong>Time:</strong> ${time}</p>
            <p style="margin: 10px 0;"><strong>Client Email:</strong> ${email}</p>
          </div>
          <p>You can join your meeting using this link:</p>
          <p><a href="${joinUrl}" style="display: inline-block; background-color: #0066cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Join Meeting</a></p>
          <p>Please add this event to your calendar and join the meeting a few minutes early.</p>
          <p>If you need to reschedule or cancel your appointment, please contact us as soon as possible.</p>
          <p>Best regards,<br>SmartStack</p>
        </div>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Send email error:', error);
    return NextResponse.json(
      { error: 'Failed to send confirmation email' },
      { status: 500 }
    );
  }
}