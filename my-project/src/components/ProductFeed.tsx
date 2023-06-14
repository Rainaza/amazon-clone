import { Products } from "@/types/types";
import { Product } from "./Product";

interface Props {
  products: Products[];
}
export const ProductFeed = ({ products }: Props) => {
  return (
    <div className="grid grdi-flow-row-dense md:grid-cols-2">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
