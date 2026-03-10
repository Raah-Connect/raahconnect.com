// app/api/waitlist/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // 1. Parse the request body
    const { email } = await request.json();

    // 2. Validate email
    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    // 3. Add to Resend audience
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      );
    }

    // 4. Send welcome email
    await resend.emails.send({
      from: 'Raah Connect <updates@raahconnect.com>',
      to: [email],
      subject: 'Thanks for joining the waitlist!',
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h2>Thanks for joining the waitlist!</h2>
          <p>We'll notify you the moment RaahConnect launches.</p>
          <p>In the meantime, join our community:</p>
          <ul>
            <li><a href="https://discord.gg/your-link">Discord</a></li>
            <li><a href="https://github.com/Raah-Connect">GitHub</a></li>
            <li><a href="https://t.me/raahconnect">Telegram</a></li>
          </ul>
          <p style="color: #666; font-size: 14px;">— The RaahConnect Team</p>
        </div>
      `,
    });

    // 5. Return success
    return Response.json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}