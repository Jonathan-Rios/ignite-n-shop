import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productList } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!productList.length) {
    return res.status(400).json({ error: "Price not found." });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  console.log(`-productList------------`, productList);

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    currency: "BRL",
    mode: "payment",
    line_items: productList.map((priceId: string) => ({
      price: priceId,
      quantity: 1,
    })),
    /*  line_items: [
      {
        price: "price_1N3kJHDe2tk3vkgud60Oonk8",
        quantity: 1,
      },
    ], */
  });

  /*
  
      line_items: productList.map((priceId: string) => ({
      price: priceId,
      quantity: 1,
    })),
    */
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
