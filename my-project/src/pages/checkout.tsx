import { Header } from "@/components/Header";
import Image from "next/image";

function Checkout() {
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
            <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
          </div>
        </div>

        {/* RIGHT */}
      </main>
    </div>
  );
}
export default Checkout;
