import Image from "next/image";
import { Search } from "./Search";
import ListBulletIcon from "@heroicons/react/24/solid/ListBulletIcon";
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";
import amazon from "./../assets/images/amazon_PNG11.png"

export const Header = () => {
  const session = useSession();
  const router = useRouter();
  const products = useSelector(selectItems);

  const handleSignupSignIn = async () =>{
    if(session.status==="unauthenticated"){
      signIn()
    }else{
      signOut()
    }
  }

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 space-x-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src={amazon}
            alt="header-image"
            width={150}
            height={40}
            className="cursor-pointer"
          />
        </div>
        <Search />

        <div className="text-white flex items-center text-xs space-x-6 px-4 whitespace-nowrap">
          <div
            onClick={
              handleSignupSignIn
            }
            className="cursor-pointer link"
          >
            <p>{` ${
              session?.data?.user !== undefined
                ? "Hello, " + session.data?.user?.email
                : "Log in"
            }`}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="cursor-pointer link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            className="cursor-pointer link flex items-center md:gap-2 w-8 md:w-full relative"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center rounded-full text-black bg-yellow-400">
              {products.length}
            </span>

            <ShoppingCartIcon className="w-6 h-9" />

            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 lg:space-x-6 p-2 pl-6">
        <div className="flex gap-1">
          <p className="link flex items-center ">All</p>
          <ListBulletIcon className="w-5 h-5" />
        </div>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Todays Deals</p>
        <p className="link hidden lg:inline-flex">Elektronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};
