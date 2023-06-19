import { ChekoutProduct } from "@/components/ChekoutProduct";
import { Header } from "@/components/Header";
import { selectItems, selectTotal } from "@/slices/basketSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";

const stirpePromise = loadStripe(process.env.stripe_public_key===undefined?"":process.env.stripe_public_key)



function Checkout() {
  const session = useSession()
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)

  const createChekoutSession = async ()=>{
    const stripe = await stirpePromise;


    // Call the backend to create a checout session...
  if(session.status==="authenticated"){
    const chekoutSession = await axios.post("/api/create-checkout-session",
    {
      items:items,
      email:session.data?.user?.email,

    })
     // Redirect user to Stripe checkout
     const result = await stripe?.redirectToCheckout({
      sessionId:chekoutSession.data.id
     })
   
  }

  }
  
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* LEFT */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src={"https://links.papareact.com/ikj"}
            style={{ objectFit: "contain" }}
            height={250}
            width={1020}
            alt="banner"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white mt-5 " >
            <h1 className="text-2xl md:text-3xl border-b pb-4">{items.length===0?'Your Amazon Basket is Empty':'Your Shopping Basket'}</h1>
           {items.map((item,index)=>(
              <ChekoutProduct key={index} index={index} item={item} />
           ))}
          </div>
        </div>

        {/* RIGHT */}
        {items.length>0 &&
        <div className="flex flex-col p-10  m-5 space-y-4 text-center  bg-white lg:w-[600px]">
          <h2 className="text-sm">Subtotal  ({items.length} products)  <span className="font-semibold">{Math.floor(total)}$</span></h2>
        <button onClick={createChekoutSession} role="link" className={`button ${session.status==="unauthenticated"&& "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed" }`} disabled={session.status==="unauthenticated"}>
          {session.status==="unauthenticated"?"Sign in to checkout":"Proceed to chekout"}
        </button>
        </div>
        }
      </main>
    </div>
  );
}
export default Checkout;
