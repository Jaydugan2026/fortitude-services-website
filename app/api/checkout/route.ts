import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const maxDuration = 30;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICE_MAP: Record<string, Record<string, string | undefined>> = {
  essential: {
    monthly: process.env.STRIPE_ESSENTIAL_MONTHLY_PRICE_ID,
    annual: process.env.STRIPE_ESSENTIAL_ANNUAL_PRICE_ID,
  },
  premium: {
    monthly: process.env.STRIPE_PREMIUM_MONTHLY_PRICE_ID,
    annual: process.env.STRIPE_PREMIUM_ANNUAL_PRICE_ID,
  },
};

export async function POST(request: NextRequest) {
  try {
    const { planId, billing } = (await request.json()) as {
      planId: 'essential' | 'premium';
      billing: 'monthly' | 'annual';
    };

    const priceId = PRICE_MAP[planId]?.[billing];

    if (!priceId) {
      return NextResponse.json({ error: 'Invalid plan or billing period' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/plans`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[Checkout] Error creating session:', err);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
