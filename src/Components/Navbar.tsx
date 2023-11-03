import { useState, useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";

import { ReactComponent as SiteLogo } from "/src/assets/logo.svg";
import { ReactComponent as CartIcon } from "/src/assets/icons/icon-cart.svg";
import { ReactComponent as MobileMenuIcon } from "/src/assets/icons/icon-hamburger.svg";

import MobileMenu from "./MobileMenu";
import CartModal from "./CartModal";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuVisibility = showMobileMenu ? "visible" : "invisible";

  const [showCart, setShowCart] = useState(false);
  const cartVisibility = showCart ? "visible" : "invisible";

  const match = useMatch("/");
  const scrollPosition = useScrollPosition();
  const backgroundColor =
    !match || scrollPosition > 0 || showMobileMenu || showCart
      ? "bg-black"
      : "";
  const navBorder = scrollPosition > 0 ? "" : "border-b border-white/[.10]";

  function toggleMobileMenu() {
    setShowCart(false);
    setShowMobileMenu(!showMobileMenu);
  }

  function toggleCart() {
    setShowMobileMenu(false);
    setShowCart(!showCart);
  }

  // hide overflow on body when mobile menu / modal is open
  useEffect(() => {
    if (showMobileMenu || showCart) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMobileMenu, showCart]);

  return (
    <>
      <nav
        className={`${backgroundColor} sticky top-0 z-50 flex w-full flex-row items-center justify-center gap-3 px-6 text-white md:px-10`}
      >
        <div
          className={`${navBorder} flex w-full max-w-[1100px] flex-row items-center justify-between gap-3 py-8`}
        >
          <div className="flex shrink basis-1/5 flex-row items-center gap-3">
            <MobileMenuIcon
              className="hover:cursor-pointer lg:hidden"
              onClick={toggleMobileMenu}
            />
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
          <ul className="hidden shrink-0 basis-3/5 flex-row items-center justify-center gap-3 lg:flex">
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
            <CartIcon onClick={toggleCart} className="hover:cursor-pointer" />
          </div>
        </div>
      </nav>
      <div className={`${mobileMenuVisibility} z-40 w-full lg:invisible`}>
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      </div>
      <div className={`${cartVisibility} z-40 w-full`}>
        <CartModal toggleCart={toggleCart} />
      </div>
    </>
  );
}
