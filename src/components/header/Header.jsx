import "./Header.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Header() {
  return (
    <header className="header">
      {/* MENÚ */}
      <button className="header__menu">
        <HiOutlineMenuAlt3 />
      </button>

      {/* LOGO */}
      <h1 className="header__logo">
        GODDESSES TAROT
      </h1>
    </header>
  );
}