import { ReactComponent as SiteLogo } from "/src/assets/logo.svg";
import { ReactComponent as CartIcon } from "/src/assets/icons/icon-cart.svg";
import { ReactComponent as MobileMenuIcon } from "/src/assets/icons/icon-hamburger.svg";
import { Link, useMatch } from "react-router-dom";

export default function Navbar() {
  const match = useMatch("/");

  const backgroundColor = match ? "" : "bg-black";
  return (
    <nav
      className={`${backgroundColor} sticky top-0 z-50 flex flex-row items-center justify-between gap-3 border-b border-white/[.10] px-6 py-8 text-white`}
    >
      <div className="flex shrink basis-1/5 flex-row items-center gap-3">
        <MobileMenuIcon className="lg:hidden" />
        <SiteLogo className="hidden md:block" />
      </div>
      <SiteLogo className="overflow-visible md:hidden" />

      <ul className="hidden shrink-0 basis-3/4 flex-row items-center justify-center gap-3 lg:flex">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/headphones">Headphones</Link>
        </li>
        <li className="nav-item">
          <Link to="/speakers">Speakers</Link>
        </li>
        <li className="nav-item">
          <Link to="/earphones">Earphones</Link>
        </li>
      </ul>
      <div className="flex shrink basis-1/5 flex-row justify-end">
        <CartIcon />
      </div>
    </nav>
  );
}
