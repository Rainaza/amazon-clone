// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {buffer} from 'micro'
import * as admin from 'firebase-admin'

// SECURE CONNECTION TO FIREBASE from the backend
const serviceAccount = require('../../../premissions.json')
const app = !admin.apps.length?admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
}):admin.app()

// Establish connection to Stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session:any) =>{
    console.log('fullfiliny order',session)

    return app.firestore().collection('users').doc(session.metadata.email).collection('orders').doc(session.id).set({
        amount:session.amount_total/100,
        amount_shipping:session.total_details.amount_shipping /100,
        images:JSON.parse(session.metadata.images),
        timestamp:admin.firestore.FieldValue.serverTimestamp()
    }).then(()=>{
        console.log("success: order has been adedd")
    })
}


// stripe listen --forward-to localhost:3000/api/webhook

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if(req.method==="POST"){
       const requestBuffer= await buffer(req) 
       const payload = requestBuffer.toString()
       const sig = req.headers['stripe-signature']

       let event;

       try{
        event= stripe.webhooks.constructEvent(payload,sig,endpointSecret)
       }catch (err){
        return res.status(400).send(`Webhook error:  ${err}`)
       }

       // Handle the checkout.session.completed event
       if(event.type==="checkout.session.completed"){
        const session =event.data.object

        return fulfillOrder(session).then(()=> res.status(200)).catch((err)=>res.status(400).send(`Webhook error`))
       }
    }
}

export const config = {
    api:{
        bodyParser:false,
        externalResolver:true,
    }
}
