import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-title">The Triad</h1>
      <p className="footer-text">Created by Andreia Cifoni</p>
      <ul className="footer-social-links">
        <li>
          <a
            className="footer-link"
            href="mailto:andreiacifoni@gmail.com?subject='subject text'"
          >
            <ion-icon
              className="footer-social-icon"
              name="mail-outline"
            ></ion-icon>
          </a>
        </li>
        <li>
          <a
            className="footer-link"
            href="https://linkedin.com/in/andreiacifoni"
          >
            <ion-icon
              className="footer-social-icon"
              name="logo-linkedin"
            ></ion-icon>
          </a>
        </li>
        <li>
          <a className="footer-link" href="https://github.com/AndreiaCifoni">
            <ion-icon
              className="footer-social-icon"
              name="logo-github"
            ></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
