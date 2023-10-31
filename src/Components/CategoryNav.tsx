import { Link } from "react-router-dom";

export default function CategoryNav() {
  return (
    <section className="flex w-full max-w-[1100px] flex-col justify-start gap-20 pt-[3.75rem] md:flex-row md:justify-center md:gap-3">
      <Link
        to={"/headphones"}
        className="flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5"
      >
        <img
          src="src/assets/shared/thumbnails/image-category-thumbnail-headphones.png"
          alt="Headphones"
          className="-mt-[5rem] w-40"
        ></img>
        <p className="pb-3 text-center font-bold uppercase tracking-[1.07px] text-black opacity-100">
          Headphones
        </p>
        <button className="btn btn-4">Shop</button>
      </Link>

      <Link
        to={"/speakers"}
        className="flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5"
      >
        <img
          src="src/assets/shared/thumbnails/image-category-thumbnail-speakers.png"
          alt="Headphones"
          className="-mt-[5rem] w-40"
        ></img>
        <p className="pb-3 text-center font-bold uppercase tracking-[1.07px] text-black opacity-100">
          Speakers
        </p>
        <button className="btn btn-4">Shop</button>
      </Link>

      <Link
        to={"/earphones"}
        className="flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5"
      >
        <img
          src="src/assets/shared/thumbnails/image-category-thumbnail-earphones.png"
          alt="Headphones"
          className="-mt-[5rem] w-48"
        ></img>
        <p className="pb-3 text-center font-bold uppercase tracking-[1.07px] text-black opacity-100">
          Earphones
        </p>
        <button className="btn btn-4">Shop</button>
      </Link>
    </section>
  );
}
