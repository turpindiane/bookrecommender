import React from "react";
import "./layout.css";
import { navLinks, navLinkItem, navImage } from "./styles.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Layout({ children }) {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/">
              <StaticImage
                className={navImage}
                alt="A blue and green home button"
                src="../images/home-button.png"
                placeholder="Home"
              />
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/credit">
              <StaticImage
                className={navImage}
                alt="A blue and green heart button"
                src="../images/love.png"
                placeholder="Credit"
              />
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="https://github.com/turpindiane/bookrecommender">
              <StaticImage
                className={navImage}
                alt="A purple image of the Github cat icon"
                src="../images/github.png"
                placeholder="GitHub Repo"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
