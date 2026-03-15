import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: 'us-west-2' });
const RECIPIENT = 'kristiglbrt@gmail.com';

function response(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}

export async function handler(event) {
  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return response(400, { success: false, error: 'Missing required fields: name, email, subject, message' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return response(400, { success: false, error: 'Invalid email address' });
    }

    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      message,
    ].join('\n');

    await ses.send(new SendEmailCommand({
      Source: RECIPIENT,
      Destination: { ToAddresses: [RECIPIENT] },
      ReplyToAddresses: [email],
      Message: {
        Subject: { Data: `[Gilbert's Powersports] ${subject} from ${name}` },
        Body: { Text: { Data: emailBody } },
      },
    }));

    return response(200, { success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return response(500, { success: false, error: 'Failed to send message. Please try again.' });
  }
}
