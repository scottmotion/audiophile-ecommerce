import { useState, useEffect } from "react";

import { fetchCategory } from "../api/fetchApi";
import { ProductData } from "../types/ProductType";

import CategoryNav from "../Components/CategoryNav";
import BestGear from "../Components/BestGear";

type CategoryLayoutProps = {
  category: string;
};

export default function CategoryLayout({ category }: CategoryLayoutProps) {
  const [products, setProducts] = useState<ProductData[] | null>(null);

  // Get category product data
  useEffect(() => {
    async function startFetching() {
      setProducts(null);
      const result = await fetchCategory(category);
      if (!ignore) {
        setProducts(result);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [category]);

  console.log("products: ", products);

  return (
    <>
      <header className="mb-[4rem] flex w-full flex-col items-center bg-black md:mb-[7.5rem]">
        <div className="flex w-full flex-col items-center justify-center bg-black py-8 md:py-24">
          <h1 className="text-3xl text-white md:text-4xl">{category}</h1>
        </div>
      </header>

      <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] px-6 md:px-10 lg:mb-[12.5rem] lg:gap-[10rem]">
        <CategoryNav />
        <BestGear />
      </main>
    </>
  );
}
