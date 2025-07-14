import React, { useState } from "react";
import { navItems } from "./constants/NavigationConstant";


const NavMobile: React.FC<any> = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <button
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          fontSize: 24,
          cursor: "pointer",
        }}
      >
        ☰
      </button>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.5)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s",
          zIndex: 1000,
        }}
        onClick={() => setOpen(false)}
      >
        <div
          style={{
            background: "#fff",
            width: 250,
            height: "100%",
            padding: 24,
            boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
            opacity: open ? 1 : 0.95,
            transition: "opacity 0.3s",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {navItems.map((link) => (
              <li key={link.href} style={{ marginBottom: 16 }}>
                <a
                  href={link.href}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontSize: 18,
                    opacity: open ? 1 : 0.7,
                    transition: "opacity 0.3s",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
