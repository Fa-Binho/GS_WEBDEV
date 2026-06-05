function FooterIcon() {
  return (
    <svg
      className="footer__brand-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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

function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <FooterIcon />
          AgroOrbit
        </div>
        <p className="footer__text">Global Solution 2026 · FIAP · Engenharia de Software</p>
        <p className="footer__text">
          &copy; <span className="footer__year">{ano}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
