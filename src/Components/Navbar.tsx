import { ReactComponent as SiteLogo } from "/src/assets/logo.svg";
import { ReactComponent as CartIcon } from "/src/assets/icons/icon-cart.svg";
import { ReactComponent as MobileMenuIcon } from "/src/assets/icons/icon-hamburger.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex flex-row items-center justify-between gap-3 border-b border-white/[.10] bg-black px-6 py-8 text-white">
      <div className="flex flex-row items-center gap-3">
        <MobileMenuIcon className="lg:hidden" />
        <SiteLogo className="hidden md:block" />
      </div>
      <SiteLogo className="md:hidden" />

      <ul className="hidden flex-row items-center gap-3 lg:flex">
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
      <CartIcon />
    </nav>
  );
}
