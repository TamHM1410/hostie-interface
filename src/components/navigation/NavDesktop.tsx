import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "./constants/NavigationConstant";

const NavDesktop: React.FC = () => (
  <nav className="nav-desktop">
    <ul
      style={{
        display: "flex",
        gap: "2rem",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            to={item.href}
            style={{ textDecoration: "none", color: "#333", fontWeight: 500 }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavDesktop;
