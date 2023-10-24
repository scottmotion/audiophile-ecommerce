import { ReactComponent as SiteLogo } from "/src/assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between gap-3 bg-black text-white">
      <SiteLogo />
      <ul className="flex flex-row gap-3">
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>
      <div>Cart</div>
    </nav>
  );
}
