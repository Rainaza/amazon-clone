import { ChekoutProduct } from "@/components/ChekoutProduct";
import { Header } from "@/components/Header";
import { selectItems } from "@/slices/basketSlice";
import Image from "next/image";
import { useSelector } from "react-redux";



function Checkout() {

  const items = useSelector(selectItems)

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

          <div className="flex flex-col p-5 space-y-10 bg-white mt-5" >
            <h1 className="text-2xl md:text-3xl border-b pb-4">{items.length===0?'Your Amazon Basket is Empty':'Your Shopping Basket'}</h1>
           {items.map(item=>(
              <ChekoutProduct key={item.id} item={item} />
           ))}
          </div>
        </div>

        {/* RIGHT */}
      </main>
    </div>
  );
}
export default Checkout;
