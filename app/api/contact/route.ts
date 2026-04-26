import { NextRequest, NextResponse } from 'next/server';

// TODO: Send email via Resend or nodemailer to jd@fortituderoofing.co

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = (await request.json()) as {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    };

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    console.log('[Contact] New submission:', { name, email, phone, service, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact] Error processing submission:', err);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
