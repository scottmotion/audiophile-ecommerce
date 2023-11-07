import { Link } from "react-router-dom";

export default function CategoryNav() {
  return (
    <section className="max-w-content flex w-full flex-col justify-start gap-20 pt-[3.75rem] md:flex-row md:justify-center md:gap-3">
      <Link
        to={"/headphones"}
        className="group flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5"
      >
        <img
          src="/assets/shared/thumbnails/image-category-thumbnail-headphones.png"
          alt="Headphones"
          className="-mt-[5rem] w-40"
        ></img>
        <p className="heading-8 pb-3 text-center text-black opacity-100 lg:heading-7">
          Headphones
        </p>
        <button className="btn btn-4 group-hover:text-dark-orange">Shop</button>
      </Link>

      <Link
        to={"/speakers"}
        className="group flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5"
      >
        <img
          src="/assets/shared/thumbnails/image-category-thumbnail-speakers.png"
          alt="Headphones"
          className="-mt-[5rem] w-40"
        ></img>
        <p className="heading-8 pb-3 text-center text-black opacity-100 lg:heading-7">
          Speakers
        </p>
        <button className="btn btn-4 group-hover:text-dark-orange">Shop</button>
      </Link>

      <Link
        to={"/earphones"}
        className="group flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5"
      >
        <img
          src="/assets/shared/thumbnails/image-category-thumbnail-earphones.png"
          alt="Headphones"
          className="-mt-[5rem] w-48"
        ></img>
        <p className="heading-8 pb-3 text-center text-black opacity-100 lg:heading-7">
          Earphones
        </p>
        <button className="btn btn-4 group-hover:text-dark-orange">Shop</button>
      </Link>
    </section>
  );
}
