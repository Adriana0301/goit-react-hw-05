import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar = () => (
  <>
    <nav className={css.nav}>
      <NavLink to="/" end className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="movies" className={buildLinkClass}>
        Movie
      </NavLink>
    </nav>
  </>
);

export default AppBar;
