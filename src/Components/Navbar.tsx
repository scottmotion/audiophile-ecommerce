import { ReactComponent as SiteLogo } from "/src/assets/logo.svg";
import { ReactComponent as CartIcon } from "/src/assets/icons/icon-cart.svg";
import { ReactComponent as MobileMenuIcon } from "/src/assets/icons/icon-hamburger.svg";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between gap-3 bg-darkest-grey text-white">
      <div className="flex flex-row items-center justify-center gap-3">
        <MobileMenuIcon className="lg:hidden" />
        <SiteLogo className="hidden md:block" />
      </div>
      <SiteLogo className="md:hidden" />

      <ul className="hidden flex-row items-center justify-center gap-3 lg:flex">
        <li className="nav-item">Headphones</li>
        <li className="nav-item">Speakers</li>
        <li className="nav-item">Earphones</li>
      </ul>
      <CartIcon />
    </nav>
  );
}
