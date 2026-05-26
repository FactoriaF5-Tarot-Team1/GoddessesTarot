import { useState } from "react";
import "./Header.scss";

import starsIcon from "../../assets/icons/stars.png";
import bookIcon from "../../assets/icons/book.png";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* =========================
          HEADER
      ========================= */}
      <header className="header">
        {/* IZQUIERDA */}
        <div className="header__left">
          {/* HAMBURGUESA */}
          <button
            className="header__menu"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <HiOutlineMenuAlt3 />
          </button>

          {/* LOGO */}
          <h1 className="header__logo">GODDESSES TAROT</h1>
        </div>

        {/* NAV DESKTOP */}
        <nav className="header__nav">
          <a href="/">
            <span>Inicio</span>
          </a>

          <a href="/">Lecturas anteriores</a>
        </nav>
      </header>

      {/* =========================
          OVERLAY MENU (MOBILE)
      ========================= */}
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        {/* BOTÓN CERRAR */}
        <button
          className="menu__close"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <HiX />
        </button>

        {/* TÍTULO */}
        <h2 className="menu__title">PORTAL CÓSMICO</h2>

        <div className="menu__line"></div>

        {/* LINKS MOBILE */}
        <nav className="menu__nav">
          {/* Inicio */}
          <a
            href="/"
            className="menu__link--active"
            onClick={() => setMenuOpen(false)}
          >
            <img src={starsIcon} alt="stars icon" className="menu__icon" />

            <span>Inicio</span>

            <img src={bookIcon} alt="book icon" className="menu__icon" />
          </a>

          {/* Lecturas */}
          <a href="/" onClick={() => setMenuOpen(false)}>
            Lecturas anteriores
          </a>
        </nav>

        {/* DECORACIÓN INFERIOR */}
        <div className="menu__bottom">
          <span></span>✧<span></span>
        </div>
      </div>
    </>
  );
}
