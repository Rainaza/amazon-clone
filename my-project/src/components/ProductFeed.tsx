import { Products } from "@/types/types";
import { Product } from "./Product";

interface Props {
  products: Products[];
}
export const ProductFeed = ({ products }: Props) => {
  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} product={product}/>
      })}
    </div>
  );
};
