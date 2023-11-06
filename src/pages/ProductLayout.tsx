import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchProduct } from "../api/fetchApi";
import { ProductData } from "../types/ProductType";

import ProductOthers from "../Components/ProductOthers";
import CategoryNav from "../Components/CategoryNav";
import BestGear from "../Components/BestGear";

type ProductLayoutParams = {
  slug: string;
};

export default function ProductLayout() {
  const params = useParams() as ProductLayoutParams;
  const productSlug = params.slug;
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    null,
  );

  // Get single product data
  useEffect(() => {
    async function startFetching() {
      setCurrentProduct(null);
      const result = await fetchProduct(productSlug);
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

  return (
    <>
      <nav className="flex w-full flex-col items-center justify-center px-6 md:px-10">
        <div className="flex w-full max-w-[1100px] flex-row pb-6 pt-4 md:pt-8 lg:pb-14 lg:pt-20">
          <Link to={".."} relative="path">
            <button>
              <p className="hover:text-dark-orange">Go Back</p>
            </button>
          </Link>
        </div>
      </nav>

      <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] px-6 md:px-10 lg:mb-[12.5rem] lg:gap-[10rem]">
        {currentProduct && (
          <section className="flex max-w-[1100px] flex-col items-center gap-20">
            <div
              id="productDescription"
              className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:grid-rows-1"
            >
              <picture className="col-span-1 col-start-1">
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
              <div className="col-span-1 flex flex-col gap-6 md:col-start-2 md:row-start-1 md:items-start md:text-left">
                {currentProduct.new && (
                  <p className="text-overline opacity-100">New Product</p>
                )}
                <h2 className="heading-5 lg:heading-2">
                  {currentProduct.name}
                </h2>
                <p>{currentProduct.description}</p>
                <p className="heading-7 opacity-100">${currentProduct.price}</p>
                <div className="flex flex-row items-start gap-4">
                  <div className="flex flex-row items-center justify-center bg-light-grey">
                    <button className="btn">-</button>
                    <p className="btn">1</p>
                    <button className="btn">+</button>
                  </div>
                  <button className="btn btn-1">Add to Cart</button>
                </div>
              </div>
            </div>

            <div id="productFeatures" className="flex w-full flex-col gap-6">
              <h3 className="heading-6 md:heading-4">Features</h3>
              <p>{currentProduct.features}</p>
            </div>

            <div id="productIncludes" className="flex w-full flex-col gap-6">
              <h3 className="heading-6 md:heading-4">In the Box</h3>
              <ul className="flex flex-col gap-2">
                {currentProduct.includes.map(i => (
                  <li
                    key={currentProduct.includes.indexOf(i)}
                    className="flex flex-row gap-2"
                  >
                    <p className="font-bold text-dark-orange opacity-100">1X</p>
                    <p className="font-bold">{i.item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div id="productGallery">
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
          </section>
        )}
        {currentProduct && <ProductOthers products={currentProduct.others} />}

        <CategoryNav />
        <BestGear />
      </main>
    </>
  );
}
