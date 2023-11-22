import { Link } from "react-router-dom";
import { ProductData } from "../types/ProductType";

type ProductCardProps = {
  product: ProductData;
  reverseOrder: boolean;
};

export default function ProductCard({
  product,
  reverseOrder,
}: ProductCardProps) {
  return (
    <section
      className="flex max-w-content flex-col items-center"
      key={product.id}
    >
      <div className="grid grid-cols-1 items-center gap-8 md:gap-[3.25rem] lg:grid-cols-2 lg:grid-rows-1 lg:gap-8">
        <picture
          className={`col-span-1 lg:row-start-1 ${
            reverseOrder ? "lg:col-start-2" : "lg:col-start-1"
          }`}
        >
          <source
            media="(min-width: 1024px)"
            srcSet={import.meta.env.BASE_URL + product.categoryImage.desktop}
          />
          <source
            media="(min-width: 768px)"
            srcSet={import.meta.env.BASE_URL + product.categoryImage.tablet}
          />
          <img
            src={import.meta.env.BASE_URL + product.categoryImage.mobile}
            className="rounded-lg"
          />
        </picture>

        <div
          className={`col-span-1 flex flex-col items-center gap-6 text-center lg:row-start-1 lg:items-start lg:text-left ${
            reverseOrder ? "lg:col-start-1 lg:pr-24" : "lg:col-start-2 lg:pl-24"
          }`}
        >
          {product.new && <div className="text-overline">New Product</div>}
          <h2 className="heading-5 max-w-[15ch] md:heading-2">
            {product.name}
          </h2>
          <p className="max-w-[61ch]">{product.description}</p>
          <Link to={`${product.slug}`}>
            <button className="btn btn-1">See Product</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
