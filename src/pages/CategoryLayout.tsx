import { useState, useEffect } from "react";

import { fetchCategoryProducts } from "../api/fetchApi";
import { ProductData } from "../types/ProductType";

import ProductCard from "../components/ProductCard";
import CategoryNav from "../components/CategoryNav";
import BestGear from "../components/BestGear";

type CategoryLayoutProps = {
  category: string;
};

export default function CategoryLayout({ category }: CategoryLayoutProps) {
  const [products, setProducts] = useState<ProductData[] | null>(null);

  // Get category products data
  useEffect(() => {
    async function startFetching() {
      setProducts(null);
      const result = await fetchCategoryProducts(category);
      if (!ignore) {
        setProducts(result.reverse());
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [category]);

  return (
    <>
      <header className="mb-[4rem] flex w-full flex-col items-center bg-black md:mb-[7.5rem] lg:mb-40">
        <div className="flex w-full flex-col items-center justify-center bg-black py-8 md:py-[6.25rem]">
          <h1 className="heading-5 text-center text-white md:heading-2">
            {category}
          </h1>
        </div>
      </header>

      <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] px-6 md:px-10 lg:mb-[12.5rem] lg:gap-[10rem]">
        {products?.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            reverseOrder={products.indexOf(product) % 2 == 0 ? false : true}
          />
        ))}
        <CategoryNav />
        <BestGear />
      </main>
    </>
  );
}
