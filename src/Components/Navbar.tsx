import { ReactComponent as SiteLogo } from "/src/assets/logo.svg";
import { ReactComponent as CartIcon } from "/src/assets/icons/icon-cart.svg";
import { ReactComponent as MobileMenuIcon } from "/src/assets/icons/icon-hamburger.svg";
import { Link, useMatch } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import MobileMenu from "./MobileMenu";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuVisibility = showMobileMenu ? "visible" : "invisible";

  const [showCart, setShowCart] = useState(false);
  const cartVisibility = showCart ? "visible" : "invisible";

  const match = useMatch("/");
  const scrollPosition = useScrollPosition();
  const backgroundColor =
    !match || scrollPosition > 0 || showMobileMenu ? "bg-black" : "";

  function toggleMobileMenu() {
    console.log("Toggle Mobile Menu");
    setShowMobileMenu(!showMobileMenu);
  }

  function toggleCart() {
    console.log("Toggle Cart");
    setShowCart(!showCart);
  }

  // hide overflow on body when mobile menu / modal is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMobileMenu]);

  return (
    <>
      <nav
        className={`${backgroundColor} sticky top-0 z-50 flex flex-row items-center justify-between gap-3 border-b border-white/[.10] px-6 py-8 text-white`}
      >
        <div className="flex shrink basis-1/5 flex-row items-center gap-3">
          <MobileMenuIcon className="lg:hidden" onClick={toggleMobileMenu} />
          <Link to={"/"}>
            <SiteLogo
              className="hidden md:block"
              onClick={() => setShowMobileMenu(false)}
            />
          </Link>
        </div>
        <Link to={"/"}>
          <SiteLogo className="overflow-visible md:hidden" />
        </Link>
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
          <CartIcon onClick={toggleCart} />
        </div>
      </nav>
      <div className={`${mobileMenuVisibility} z-40 w-full lg:invisible`}>
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      </div>
    </>
  );
}
