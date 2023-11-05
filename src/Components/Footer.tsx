import { ReactComponent as SiteLogo } from "/src/assets/logo.svg";
import { ReactComponent as FacebookIcon } from "/src/assets/icons/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "/src/assets/icons/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "/src/assets/icons/icon-instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="flex w-full flex-row items-center justify-center bg-darkest-grey px-6 md:px-10">
        <div className="pt-[3.25rem]font-bold grid max-w-[1100px] justify-items-center gap-12 pb-10 text-white md:grid-cols-2 md:justify-items-start md:gap-8 md:pb-[2.875rem] md:pt-[3.75rem] lg:gap-9 lg:pb-12 lg:pt-[4.75rem]">
          <Link to={"/"}>
            <SiteLogo className="md:col-span-2 lg:col-span-1" />
          </Link>
          <ul className="flex flex-col gap-4 text-center md:col-span-2 md:flex-row lg:col-span-1 lg:justify-self-end">
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
          <p className="text-center md:col-span-2 md:mb-12 md:text-left lg:col-span-1 lg:mb-5">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="text-center font-bold md:self-end md:text-left lg:col-span-2">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
          <div className="flex flex-row items-center gap-3 md:self-end md:justify-self-end lg:col-start-2 lg:row-start-2 lg:mb-5">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </footer>
    </>
  );
}
