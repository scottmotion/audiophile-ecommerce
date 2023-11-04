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
      className="flex max-w-[1100px] flex-col items-center"
      key={product.id}
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:grid-rows-1">
        <picture
          className={`col-span-1 lg:row-start-1 ${
            reverseOrder ? "lg:col-start-2" : "lg:col-start-1"
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
          <img src={product.categoryImage.mobile} className="rounded-lg" />
        </picture>

        <div
          className={`col-span-1 flex flex-col items-center gap-6 text-center lg:row-start-1 lg:items-start lg:text-left ${
            reverseOrder ? "lg:col-start-1" : "lg:col-start-2"
          }`}
        >
          {product.new && <div className="text-overline">New Product</div>}
          <p>{product.name}</p>
          <p>{product.description}</p>
          <Link to={`${product.slug}`}>
            <button className="btn btn-1">See Product</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
