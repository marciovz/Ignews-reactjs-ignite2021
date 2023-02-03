import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'
import Stripe from "stripe";

import { stripe } from "../../services/stripe";
import { saveSubscription } from '../../pages/api/_lib/manageSubscription';

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(
      typeof chunk === 'string' ? Buffer.from (chunk) : chunk
    )
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false
  }
}

const releventEvents = new Set([
  'checkout.session.completed',
/*  'customer.subscription.created',*/
  'customer.subscription.updated',
  'customer.subscription.deleted' 
])

const webHooks = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const secret = req.headers['stripe-signature'] as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET as string);

    } catch (err) {
      console.error(`Webhook-error: ${err}`);
      return res.status(400).send(`Webhook-error: ${err}`);
    }

    const { type } = event;

    if (releventEvents.has(type)) {
      try {
        switch (type) {
          /* case 'customer.subscription.created':*/
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            const subscription = event.data.object as Stripe.Subscription;

            await saveSubscription(
              subscription.id,
              subscription.customer.toString(),
              false  //type === 'customer.subscription.created'
            );

            break;
          case 'checkout.session.completed':
            
            const checkoutSession = event.data.object as Stripe.Checkout.Session;

            await saveSubscription(
              checkoutSession.subscription as string,
              checkoutSession.customer as string,
              true
            );

            break;
          default:
            console.error('Unhandled event');
            throw new Error('Unhandled event');
        }
      } catch (err) {
        console.error('Error: Webhook handler failed')
        return res.json({ error: 'Webhook handler failed'})
      }
    }    

    res.json({ received: true });
  } else {
    console.error("Method Not Allowed");
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}

export default webHooks;