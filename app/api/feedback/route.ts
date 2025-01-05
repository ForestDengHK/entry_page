import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || 'contact@swifttools.eu';
const toEmail = process.env.RESEND_TO_EMAIL || 'dgxiong2000@msn.com';

export async function POST(request: Request) {
  try {
    const { title, content, name, email } = await request.json();

    if (!title || !content || !name || !email) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Feedback from Swift Tools</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; }
            .content { margin: 20px 0; }
            .footer { font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Feedback Received</h2>
              <p>A new feedback has been submitted through Swift Tools.</p>
            </div>
            <div class="content">
              <h3>User Information:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              
              <h3>Feedback Details:</h3>
              <p><strong>Title:</strong> ${title}</p>
              <p><strong>Content:</strong></p>
              <p>${content}</p>
            </div>
            <div class="footer">
              <p>This email was sent from Swift Tools Feedback Form</p>
              <p>© ${new Date().getFullYear()} Swift Tools. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: `Swift Tools <${fromEmail}>`,
      to: [toEmail],
      subject: `Swift Tools Feedback: ${title}`,
      html: emailTemplate,
      replyTo: email,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Feedback sent successfully' 
    });
  } catch (error: any) {
    console.error('Feedback submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send feedback' },
      { status: 500 }
    );
  }
} 