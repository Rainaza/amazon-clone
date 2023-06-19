import { Header } from "@/components/Header";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Router, { useRouter } from "next/router";
function Success() {
  const router = useRouter()
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white mt-10 space-y-2">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-xl lg:text-3xl font-semibold">
              Thank you , your order has been confirmed
            </h1>
          </div>
          <p className="p-4 text-sm lg:text-base">
            Thank you for your recent purchase. We are honored to gain you as a
            customer and hope to serve you for a long time. Hey, [customer
            name], just want to drop a quick note to express our genuine
            gratitude. Your purchase allows us at [company name] to continue to
            do what we love and provide you with quality products.
          </p>
          <button className="button" onClick={()=>router.push('/orders')}>Go to my orders</button>
        </div>
      </main>
    </div>
  );
}

export default Success;
