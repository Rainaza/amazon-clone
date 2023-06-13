import { Products } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import primeImage from "./../assets/images/5f7f75fa3dd424000436e50e.png";
interface Props {
  product: Products;
}
const MAX_RATING = 5;
const MIN_RATING = 1;
export const Product = ({ product }: Props) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 items-center ">
      <p className="absolute top-2 right-2 italic text-xs text-grey-400">
        {product.category}
      </p>
      <div className="flex items-center">
        <Image
          src={product.image}
          height={120}
          width={120}
          style={{ objectFit: "contain" }}
          alt="store_supply_image"
        />
      </div>
      <h4 className="my-3">{product.title}</h4>
      <div>
        <div className="flex">
          {Array(rating)
            .fill("")
            .map((element, index) => {
              return (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              );
            })}
        </div>
        <p className="text-xs my-2 line-clamp-2">{product.description}</p>
        <p className="mb-5">{product.price} $</p>
        {hasPrime && (
          <div className="flex items-end space-x-2 ">
            <Image src={primeImage} alt="" width={80} height={80} />
            <p className="text-xs italic">FREE Next-day Delivery</p>
          </div>
        )}
        <div className=" mt-5">
          {" "}
          <button className="button">Add to basket</button>
        </div>
      </div>
    </div>
  );
};
