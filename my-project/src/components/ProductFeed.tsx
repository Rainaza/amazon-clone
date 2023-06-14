import { Products } from "@/types/types";
import { Product } from "./Product";

interface Props {
  products: Products[];
}
export const ProductFeed = ({ products }: Props) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.slice(0,4).map((product) => {
        return <Product key={product.id} product={product} />;
      })}
     
       <img className="md:col-span-full mx-auto " src="https://links.papareact.com/dyz" />
       <div className=" md:col-span-full">
       {products.slice(4,5).map((product) => {
        return <Product key={product.id} product={product} />;
      })}
       </div>
       
       
       {products.slice(6,products.length).map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
   
  );
};
