import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

import { fetchProductBySlug } from "../api/fetchApi";
import { ProductData } from "../types/ProductType";

import ProductOthers from "../components/ProductOthers";
import CategoryNav from "../components/CategoryNav";
import BestGear from "../components/BestGear";

import BackButton from "../components/BackButton";

type ProductLayoutParams = {
  slug: string;
};

export default function ProductLayout() {
  const { addItemToCart } = useShoppingCart();
  const params = useParams() as ProductLayoutParams;
  const productSlug = params.slug;
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    null,
  );
  const [quantity, setQuantity] = useState(1);

  // Get single product data
  useEffect(() => {
    async function startFetching() {
      setCurrentProduct(null);
      const result = await fetchProductBySlug(productSlug);
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

  function incrementQuantity() {
    setQuantity(prev => prev + 1);
  }
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  function handleAddToCart() {
    if (currentProduct !== null) {
      addItemToCart(currentProduct.id, quantity);
      setQuantity(1);
    }
  }

  return (
    <>
      <nav className="flex w-full flex-col items-center justify-center px-6 md:px-10">
        <div className="flex w-full max-w-content flex-row pb-6 pt-4 md:pt-8 lg:pb-14 lg:pt-20">
          <BackButton />{" "}
        </div>
      </nav>

      <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] px-6 md:px-10 lg:mb-40 lg:mb-[12.5rem] lg:gap-[10rem]">
        {currentProduct && (
          <section className="flex max-w-content flex-col items-center gap-20 md:gap-[7.5rem] lg:gap-40">
            <div
              id="productDescription"
              className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:grid-rows-1 md:gap-0 lg:gap-5"
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
                <img
                  src={currentProduct.image.mobile}
                  className="rounded-lg md:w-[82%] lg:w-full"
                />
              </picture>
              <div className="col-span-1 flex flex-col gap-6 md:col-start-2 md:row-start-1 md:items-start md:text-left lg:pl-[6.5rem]">
                {currentProduct.new && (
                  <p className="text-overline opacity-100">New Product</p>
                )}
                <h2 className="heading-5 lg:heading-2">
                  {currentProduct.name}
                </h2>
                <p>{currentProduct.description}</p>
                <p className="heading-7 opacity-100">
                  $ {currentProduct.price.toLocaleString()}
                </p>
                <div className="flex flex-row items-start gap-4">
                  <div className="flex flex-row items-center justify-center bg-light-grey">
                    <button
                      className="btn-quantity opacity-50 hover:text-dark-orange hover:opacity-100"
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                    <p className="btn-quantity select-none opacity-100">
                      {quantity}
                    </p>
                    <button
                      className="btn-quantity opacity-50 hover:text-dark-orange hover:opacity-100"
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                  <button className="btn btn-1" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-20 md:gap-[7.5rem] lg:flex-row lg:gap-12">
              <div
                id="productFeatures"
                className="flex w-full basis-3/5 flex-col gap-6"
              >
                <h3 className="heading-6 md:heading-4">Features</h3>
                <p>{currentProduct.features}</p>
              </div>

              <div
                id="productIncludes"
                className="flex w-full basis-2/5 flex-col gap-6 md:flex-row lg:flex-col lg:pl-20"
              >
                <h3 className="heading-6 md:heading-4 md:basis-1/2 lg:basis-auto">
                  In the Box
                </h3>
                <ul className="flex flex-col gap-2 md:basis-1/2 lg:basis-auto">
                  {currentProduct.includes.map(i => (
                    <li
                      key={currentProduct.includes.indexOf(i)}
                      className="flex flex-row gap-5 lg:gap-6"
                    >
                      <p className="font-bold text-dark-orange opacity-100">
                        {i.quantity}X
                      </p>
                      <p className="font-bold">{i.item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              id="productGallery"
              className="flex flex-col gap-5 md:flex-row lg:gap-8"
            >
              <div className="flex flex-col gap-5 lg:gap-8">
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
              </div>

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
