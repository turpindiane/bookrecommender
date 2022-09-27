import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import * as Styles from "../components/styles.module.css";

const CreditPage = () => {
  return (
    <Layout>
      <main>
        <StaticImage
          src="../images/profile-photo.png"
          width={150}
        ></StaticImage>
        <h2>
          My name is Diane Turpin, and I'm the developer behind this site!
        </h2>
        <div className={Styles.creditText}>
          Like this site might suggest, I'm a software engineer with a love for
          literature. I can be found on{" "}
          <Link to="https://www.linkedin.com/in/diane-turpin-982b0364/">
            LinkedIn
          </Link>
          .
        </div>
        <h2>
          Development is always a process of learning from other talented
          creators. Credit goes to the following resources for helping me build
          and style this site. 💕
        </h2>
        <div id="creditText" className={Styles.creditText}>
          <ul>
            <li>
              This site was developed using{" "}
              <a href="https://www.gatsbyjs.com/">Gatsby</a> and is hosted on
              GatsbyCloud{" "}
              <img
                alt="Gatsby G Logo"
                src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
              />
            </li>
            <br />
            <li>
              I referenced{" "}
              <a href="https://get.foundation/index.html">Foundation CSS</a> for
              the component styling of my buttons
            </li>
            <br />
            <li>
              The navigation icons were provided by Flaticon
              <ul>
                <li>
                  <a
                    href="https://www.flaticon.com/free-icons/home-button"
                    title="home button icons"
                  >
                    Iconmas - Home Button
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flaticon.com/free-icons/heart"
                    title="heart icons"
                  >
                    Iconmas - Heart Icon
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flaticon.com/free-icons/github"
                    title="github icons"
                  >
                    Pixel Perfect - GitHub Icon
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default CreditPage;

export const Head = () => <title>Credit</title>;
