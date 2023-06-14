import { Products } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import primeImage from "./../assets/images/5f7f75fa3dd424000436e50e.png";
import StarIcon from "@heroicons/react/24/solid/StarIcon";
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
    <div className="relative flex flex-col m-5  bg-white z-30 p-10 items-center   ">
      <p className="absolute top-2 right-2 italic text-xs text-grey-400">
        {product.category}
      </p>

      <div className="flex items-center">
        <img
          src={product.image}
          className="h-32 w-32 object-contain"
          alt="store_supply_image"
        />
      </div>
      <h4 className="my-3">{product.title}</h4>
      <div className="w-full h-full flex flex-col justify-end">
        <div className="flex">
          {Array(rating)
            .fill("")
            .map((element, index) => {
              return (
                <StarIcon key={index} className="w-6 h-6 text-yellow-400" />
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
        )
      }
        <div className=" mt-5">
          <button className="button">Add to basket</button>
        </div>
      </div>
    </div>
  );
};
