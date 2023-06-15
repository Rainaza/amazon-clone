import { Products } from "@/types/types";
import Image from "next/image";
import StarIcon from "@heroicons/react/24/solid/StarIcon";
import { useState } from "react";
import primeImage from "./../assets/images/5f7f75fa3dd424000436e50e.png";
import {
  addToBasket,
  removeFromBasket,
} from "@/slices/basketSlice";
import { useDispatch } from "react-redux";
interface Props {
  item: Products;
  index: number;
}

export const ChekoutProduct = ({ item, index }: Props) => {
  const [hasPrime] = useState(Math.random() < 0.5);
  const dispach = useDispatch();
  const removeItemFromBasket = () => {
    dispach(removeFromBasket(index));
  };

  const addtoBasket = () => {
    const value = item;
    // Sending the product as an action to the REDUX store.. the basket slice
    dispach(addToBasket(value));
  };
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
      <div className="flex flex-col space-y-2 my-auto justify-self-end ">
        <button
          onClick={addtoBasket}
          className="button text-xs md:text-base p-1 "
        >
          Add to basket
        </button>
        <button
          onClick={removeItemFromBasket}
          className="button text-xs md:text-base p-1"
        >
          Remove from basket{" "}
        </button>
      </div>
    </div>
  );
};
