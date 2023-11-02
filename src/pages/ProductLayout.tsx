import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchProduct } from "../api/fetchApi";
import { ProductData } from "../types/ProductType";

import CategoryNav from "../Components/CategoryNav";
import BestGear from "../Components/BestGear";

// type ProductLayoutProps = {
//   id: number;
// };

export default function ProductLayout() {
  let params = useParams();
  // TEST
  const productId = Number(params.id);
  console.log("productId: ", productId);
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
  }, [params]);

  console.log("currentProduct: ", currentProduct);

  return (
    <>
      <header className="mb-[4rem] flex w-full flex-col items-center bg-black md:mb-[7.5rem]">
        <div className="flex w-full flex-col items-center justify-center bg-black py-8 md:py-24">
          <h1 className="text-center text-3xl text-white md:text-4xl">
            {currentProduct?.name}
          </h1>
        </div>
      </header>

      <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] px-6 md:px-10 lg:mb-[12.5rem] lg:gap-[10rem]">
        {currentProduct && (
          <section className="flex max-w-[1100px] flex-col items-center">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:grid-rows-1">
              <picture className="col-span-1 lg:col-start-2">
                <source
                  media="(min-width: 1024px)"
                  srcSet={currentProduct.image.desktop}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={currentProduct.image.tablet}
                />
                <img src={currentProduct.image.mobile} className="rounded-lg" />
              </picture>
              <div className="col-span-1 flex flex-col items-center gap-6 text-center lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left">
                {currentProduct.new && <p>New Product</p>}
                <p>{currentProduct.name}</p>
                <p>{currentProduct.description}</p>
                <button className="btn btn-1">Add to Cart</button>
              </div>
              <div>
                <p>Features</p>
                <p>{currentProduct.features}</p>
              </div>
              <div>
                <p>In the Box</p>
                <ul>
                  {currentProduct.includes.map(i => (
                    <li key={currentProduct.includes.indexOf(i)}>{i.item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={currentProduct.gallery.first.desktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={currentProduct.gallery.first.tablet}
                  />
                  <img
                    src={currentProduct.gallery.first.mobile}
                    className="rounded-lg"
                  />
                </picture>

                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={currentProduct.gallery.second.desktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={currentProduct.gallery.second.tablet}
                  />
                  <img
                    src={currentProduct.gallery.second.mobile}
                    className="rounded-lg"
                  />
                </picture>

                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={currentProduct.gallery.third.desktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={currentProduct.gallery.third.tablet}
                  />
                  <img
                    src={currentProduct.gallery.third.mobile}
                    className="rounded-lg"
                  />
                </picture>
              </div>
            </div>
          </section>
        )}

        <CategoryNav />
        <BestGear />
      </main>
    </>
  );
}
