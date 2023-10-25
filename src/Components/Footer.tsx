import { ReactComponent as SiteLogo } from "/src/assets/logo.svg";
import { ReactComponent as FacebookIcon } from "/src/assets/icons/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "/src/assets/icons/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "/src/assets/icons/icon-instagram.svg";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center gap-3 bg-darkest-grey text-white">
        <SiteLogo />
        <ul className="flex flex-col text-center">
          <li className="nav-item">Home</li>
          <li className="nav-item">Headphones</li>
          <li className="nav-item">Speakers</li>
          <li className="nav-item">Earphones</li>
        </ul>
        <p className="text-center">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="text-center">Copyright 2021. All Rights Reserved</p>
        <div className="flex flex-row gap-3">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </footer>
    </>
  );
}
