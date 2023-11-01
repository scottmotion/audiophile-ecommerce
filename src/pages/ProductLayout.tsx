import { useState, useEffect } from "react";

import { fetchProduct } from "../api/fetchApi";
import { ProductData } from "../types/ProductType";

import CategoryNav from "../Components/CategoryNav";
import BestGear from "../Components/BestGear";

type ProductLayoutProps = {
  id: number;
};

export default function ProductLayout({ id }: ProductLayoutProps) {
  // TEST
  const productId = 1;
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    null,
  );
  // Get single product data
  useEffect(() => {
    async function startFetching() {
      setCurrentProduct(null);
      const result = await fetchProduct(productId);
      if (!ignore && result) {
        setCurrentProduct(result);
      } else {
        setCurrentProduct(null);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [productId]);

  console.log("currentProduct: ", currentProduct);

  return (
    <>
      <header className="mb-[4rem] flex w-full flex-col items-center bg-black md:mb-[7.5rem]">
        <div className="flex w-full flex-col items-center justify-center bg-black py-8 md:py-24">
          <h1 className="text-3xl text-white md:text-4xl">
            {currentProduct?.name}
          </h1>
        </div>
      </header>

      <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] px-6 md:px-10 lg:mb-[12.5rem] lg:gap-[10rem]">
        <CategoryNav />
        <BestGear />
      </main>
    </>
  );
}
