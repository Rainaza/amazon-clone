import { Header } from "@/components/Header"
import { useSession,getSession } from "next-auth/react"


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



export async function getServerSideProps(context:any){
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

    // Get the users logged in credentials..

    const session = getSession(context)
    if(!session){
        return{
            props:{

            }
        }
 
    }
}