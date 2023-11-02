import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchCategory } from "../api/fetchApi";
import { ProductData } from "../types/ProductType";

import CategoryNav from "../Components/CategoryNav";
import BestGear from "../Components/BestGear";

type CategoryLayoutProps = {
  category: string;
};

export default function CategoryLayout({ category }: CategoryLayoutProps) {
  const [products, setProducts] = useState<ProductData[] | null>(null);

  // Get category products data
  useEffect(() => {
    async function startFetching() {
      setProducts(null);
      const result = await fetchCategory(category);
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

  console.log("products: ", products);

  return (
    <>
      <header className="mb-[4rem] flex w-full flex-col items-center bg-black md:mb-[7.5rem]">
        <div className="flex w-full flex-col items-center justify-center bg-black py-8 md:py-24">
          <h1 className="text-center text-3xl text-white md:text-4xl">
            {category}
          </h1>
        </div>
      </header>

      <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] px-6 md:px-10 lg:mb-[12.5rem] lg:gap-[10rem]">
        {products?.map(product => (
          <section
            className="flex max-w-[1100px] flex-col items-center"
            key={product.id}
          >
            <div className="grid grid-cols-1 grid-rows-2 items-center gap-8 lg:grid-cols-2 lg:grid-rows-1">
              <picture
                className={`col-span-1 lg:row-start-1 ${
                  products.indexOf(product) % 2 == 0
                    ? "lg:col-start-1"
                    : "lg:col-start-2"
                }`}
              >
                <source
                  media="(min-width: 1024px)"
                  srcSet={product.categoryImage.desktop}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={product.categoryImage.tablet}
                />
                <img
                  src={product.categoryImage.mobile}
                  className="rounded-lg"
                />
              </picture>

              <div
                className={`col-span-1 flex flex-col items-center gap-6 text-center lg:row-start-1 lg:items-start lg:text-left ${
                  products.indexOf(product) % 2 == 0
                    ? "lg:col-start-2"
                    : "lg:col-start-1"
                }`}
              >
                {product.new && <p>New Product</p>}
                <p>{product.name}</p>
                <p>{product.description}</p>
                <Link to={`${product.id}`}>
                  <button className="btn btn-1">See Product</button>
                </Link>
              </div>
            </div>
          </section>
        ))}
        <CategoryNav />
        <BestGear />
      </main>
    </>
  );
}
