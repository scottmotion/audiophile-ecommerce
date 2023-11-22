import { Link } from "react-router-dom";

export default function CategoryNav() {
  return (
    <section className="flex w-full max-w-content flex-col justify-start gap-20 pt-[3.75rem] md:flex-row md:justify-center md:gap-3 lg:pt-20">
      <Link
        to={"/headphones"}
        className="group flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5 lg:p-7"
      >
        <img
          src={
            import.meta.env.BASE_URL +
            "/assets/shared/thumbnails/image-category-thumbnail-headphones.png"
          }
          alt="Headphones"
          className="-mt-20 w-40 lg:-mt-28 lg:w-[13.5rem]"
        ></img>
        <p className="heading-8 pb-3 text-center text-black opacity-100 lg:heading-7 lg:pb-4">
          Headphones
        </p>
        <button className="btn btn-4 group-hover:text-dark-orange">Shop</button>
      </Link>

      <Link
        to={"/speakers"}
        className="group flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5 lg:p-7"
      >
        <img
          src={
            import.meta.env.BASE_URL +
            "/assets/shared/thumbnails/image-category-thumbnail-speakers.png"
          }
          alt="Headphones"
          className="-mt-20 w-40 lg:-mt-28 lg:w-[13.5rem]"
        ></img>
        <p className="heading-8 pb-3 text-center text-black opacity-100 lg:heading-7 lg:pb-4">
          Speakers
        </p>
        <button className="btn btn-4 group-hover:text-dark-orange">Shop</button>
      </Link>

      <Link
        to={"/earphones"}
        className="group flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5 lg:p-7"
      >
        <img
          src={
            import.meta.env.BASE_URL +
            "/assets/shared/thumbnails/image-category-thumbnail-earphones.png"
          }
          alt="Headphones"
          className="-mt-20 w-48 lg:-mt-24 lg:w-56"
        ></img>
        <p className="heading-8 pb-3 text-center text-black opacity-100 lg:heading-7 lg:pb-4">
          Earphones
        </p>
        <button className="btn btn-4 group-hover:text-dark-orange">Shop</button>
      </Link>
    </section>
  );
}
