import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Problema', end: true },
  { to: '/tecnologia', label: 'Tecnologia' },
  { to: '/objetivos', label: 'Objetivos' },
  { to: '/beneficios', label: 'Benefícios' },
  { to: '/aplicacao', label: 'Aplicação' },
];

function OrbitIcon({ size = 28 }) {
  return (
    <svg
      className="nav__logo-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
    </svg>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="nav" aria-label="Navegação principal">
        <Link to="/" className="nav__logo" onClick={closeMenu} aria-label="AgroOrbit página inicial">
          <OrbitIcon />
          AgroOrbit
        </Link>

        <ul className={`nav__menu${isOpen ? ' nav__menu--active' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`nav__toggle${isOpen ? ' nav__toggle--active' : ''}`}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
