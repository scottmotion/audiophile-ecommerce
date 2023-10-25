import { ReactComponent as SiteLogo } from "/src/assets/logo.svg";
import { ReactComponent as FacebookIcon } from "/src/assets/icons/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "/src/assets/icons/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "/src/assets/icons/icon-instagram.svg";

export default function Footer() {
  return (
    <>
      <footer className="grid justify-items-center gap-12 bg-darkest-grey px-6 pb-10 pt-[3.25rem] text-white md:grid-cols-2 md:justify-items-start md:gap-8 lg:gap-9">
        <SiteLogo className="md:col-span-2 lg:col-span-1" />
        <ul className="flex flex-col gap-4 text-center md:col-span-2 md:flex-row lg:col-span-1 lg:justify-self-end">
          <li className="nav-item">Home</li>
          <li className="nav-item">Headphones</li>
          <li className="nav-item">Speakers</li>
          <li className="nav-item">Earphones</li>
        </ul>
        <p className="text-center md:col-span-2 md:mb-12 md:text-left lg:col-span-1 lg:mb-5">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="text-center md:self-end md:text-left lg:col-span-2">
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </p>
        <div className="flex flex-row items-center gap-3 md:self-end md:justify-self-end lg:col-start-2 lg:row-start-2 lg:mb-5">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </footer>
    </>
  );
}
