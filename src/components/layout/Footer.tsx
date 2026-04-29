import { Link } from "react-router-dom";
import { CopticMark } from "../ornaments/CopticMark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span className="site-footer__mark" aria-hidden="true">
          <CopticMark width={20} height={20} />
        </span>
        <span className="site-footer__copy">© {year} Coptic Heritage</span>
        <span className="site-footer__links">
          <Link to="/about#sources">Source policy</Link>
          <Link to="/about">Editorial principles</Link>
        </span>
      </div>
    </footer>
  );
}
