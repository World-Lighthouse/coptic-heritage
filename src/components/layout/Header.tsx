import { NavLink, Link } from "react-router-dom";
import { CopticMark } from "../ornaments/CopticMark";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="wordmark" aria-label="Coptic Heritage — home">
          <CopticMark width={36} height={36} />
          <span className="wordmark__text">
            <span>Coptic Heritage</span>
            <span className="wordmark__divider" aria-hidden="true" />
            <span className="wordmark__arabic" lang="ar" dir="rtl">
              التراث القبطي
            </span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <NavLink to="/ask" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Ask
          </NavLink>
          <NavLink to="/sources" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Sources
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
