import { Header } from "@/components/Header"
import { useSession,getSession } from "next-auth/react"
import {db} from "./../../firebase"
import moment from "moment"
import { resolve } from "path"
const Orders = ({orders}:any) => {
    const session = useSession()
  return (
    <div>
        <Header/>
        <main className="max-w-screen-lg mx-auto p-10">
            <h1 className="text-3xl font-semibold mb-2 border-b-2 pb-2 border-b-yellow-400">Your orders</h1>
            {session.status==="authenticated"?
            <h2>...Orders</h2>:<h2>Please sign in to see your orders</h2>
        }
        <div className="mt-5 space-y-4 ">

        </div>
        </main>
    </div>
  )
}

export default Orders



export async function getServerSideProps(){
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const session = getSession()
    // Get the users logged in credentials..
// const userSession =session.then((res)=>)
// console.log(userSession)
 
    // const stripeOrders = await db.collection('users').doc(session.user.email).collection('orders').orderBy("timestamp",'desc').get()

    // const orders = await Promise.all(
    //     stripeOrders.docs.map(async (order:any)=>({
    //         id:order.id,
    //         amount:order.data(),
    //         amountShipping: order.data().amount_shipping,
    //         images:order.data().images,
    //         timestamp: moment(order.data.timestamp.toDate().unix()),
    //         items:(
    //             await stripe.checkout.sessions.listLineitems(order.id,{
    //                 limit:100
    //             })
    //         ).data
    //     }))
    // )

        return{
            props:{
                orders:"xd"
            }
        } 
    
 
  
}