import { Link } from "react-router-dom";

type MobileMenuProps = {
  toggleMobileMenu: React.MouseEventHandler;
};

export default function MobileMenu({ toggleMobileMenu }: MobileMenuProps) {
  return (
    <>
      <div
        id="mobileBackdrop"
        className="fixed left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-black opacity-50"
        onClick={e => toggleMobileMenu(e)}
      ></div>
      <nav className="fixed top-20 z-40 flex max-h-[calc(100vh-8rem)] w-full flex-col justify-start gap-20 overflow-y-auto rounded-b-lg bg-white p-6 pt-24 md:flex-row md:justify-center md:gap-3">
        <Link
          to={"/headphones"}
          onClick={toggleMobileMenu}
          className="flex basis-1/3 flex-col items-center rounded-lg bg-light-grey p-5"
        >
          <img
            src={
              import.meta.env.BASE_URL +
              "/assets/shared/thumbnails/image-category-thumbnail-headphones.png"
            }
            alt="Headphones"
            className="-mt-[5rem] w-40"
          ></img>
          <p className="heading-8 pb-3 text-center text-black opacity-100 lg:heading-7">
            Headphones
          </p>
          <button className="btn btn-4">Shop</button>
        </Link>

        <Link
          to={"/speakers"}
          onClick={toggleMobileMenu}
          className="flex basis-1/3 flex-col items-center rounded-lg bg-light-grey p-5"
        >
          <img
            src={
              import.meta.env.BASE_URL +
              "/assets/shared/thumbnails/image-category-thumbnail-speakers.png"
            }
            alt="Headphones"
            className="-mt-[5rem] w-40"
          ></img>
          <p className="heading-8 pb-3 text-center text-black opacity-100 lg:heading-7">
            Speakers
          </p>
          <button className="btn btn-4">Shop</button>
        </Link>

        <Link
          to={"/earphones"}
          onClick={toggleMobileMenu}
          className="flex basis-1/3 flex-col items-center rounded-lg bg-light-grey p-5"
        >
          <img
            src={
              import.meta.env.BASE_URL +
              "/assets/shared/thumbnails/image-category-thumbnail-earphones.png"
            }
            alt="Headphones"
            className="-mt-[5rem] w-48"
          ></img>
          <p className="heading-8 pb-3 text-center text-black opacity-100 lg:heading-7">
            Earphones
          </p>
          <button className="btn btn-4">Shop</button>
        </Link>
      </nav>
    </>
  );
}
