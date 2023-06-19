import { Products } from "@/types/types";
import { NextApiResponse, NextApiRequest } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items, email } = req.body;

  const transformedItems = items.map((item: Products) => ({
    
    quantity: 1,
   
    price_data: {
      currency: "gbp",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));
  

 const session = await stripe.checkout.sessions.create({
    payment_method_types:['card'],
  
    line_items:transformedItems,
    mode:'payment',
    shipping_options:[
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'gbp',
          },
          display_name: 'Free shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'gbp',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    success_url:`${process.env.HOST}/sucess`,
    cancel_url:`${process.env.HOST}/checkout`,
    metadata:{
      email:email,
      images:JSON.stringify(items.map((item:Products)=>item.image))
    },
    shipping_address_collection:{
      allowed_countries:['GB',"US",'PL'],
    },
 })
 res.status(200).json({id:session.id})
}
