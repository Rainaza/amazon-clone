import { Products } from "@/types/types";
import Image from "next/image";
import StarIcon from "@heroicons/react/24/solid/StarIcon";
import { useState } from "react";
import primeImage from "./../assets/images/5f7f75fa3dd424000436e50e.png";
interface Props {
  item: Products;
}

export const ChekoutProduct = ({ item }: Props) => {
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="grid grid-cols-5 place-items-center">
      <Image src={item.image} alt="product" height={100} width={100} />
      <div className="col-span-3 mx-5">
        <p className="text-sm mb-2 line-clamp-2 font-semibold ">{item.title}</p>
        <div className="flex gap-1  ">
          {Array(Math.floor(item.rating.rate))
            .fill("")
            .map((element, index) => (
              <StarIcon key={index} className="w-4 h-4 text-yellow-400" />
            ))}
        </div>
        <p className="line-clamp-2 mt-2 mb-2 text-xs">{item.description}</p>
        <p>{item.price} $</p>
        {hasPrime && (
          <div className="flex items-end space-x-2 ">
            <Image src={primeImage} alt="" width={50} height={50} />
            <p className="text-[10px] text-gray-500 italic">
              FREE Next-day Delivery
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end text-xs">
        <button className="button">Add to basket</button>
        <button className="button">Remove from basket </button>
      </div>
    </div>
  );
};
