import { Link } from "react-router-dom";
type ProductOthersProps = {
  products: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
};

export default function ProductOthers({ products }: ProductOthersProps) {
  return (
    <section className="flex max-w-content flex-col items-center gap-10 md:gap-14">
      <h4 className="heading-6 md:heading-4">You May Also Like</h4>
      <div className="grid grid-cols-1 gap-x-3 gap-y-14 md:grid-cols-3">
        {products.map(other => (
          <div key={other.slug} className="flex flex-col gap-8 lg:gap-10">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={other.image.desktop}
              />
              <source media="(min-width: 768px)" srcSet={other.image.tablet} />
              <img src={other.image.mobile} className="rounded-lg" />
            </picture>
            <div className="flex flex-col items-center gap-8">
              <h5 className="heading-6">{other.name}</h5>
              <Link to="/">
                <button className="btn btn-1">See Product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
