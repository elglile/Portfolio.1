"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();

  const Menu = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {Menu.map((item, index) => (
          <li className="navbar-item" key={index}>
            <Link href={item.path}>
              <button
                className={`navbar-link ${
                  pathname === item.path ? "active" : ""
                }`}
                data-nav-link
              >
                {item.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
