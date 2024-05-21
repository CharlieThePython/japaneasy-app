import React from "react";
import "@/src/styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="container footer-container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">&copy; 2024 Company, Inc</p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"></svg>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/hiragana" className="nav-link px-2 text-muted">
                Hiragana/Katakana
              </a>
            </li>
            <li className="nav-item">
              <a href="/kanji" className="nav-link px-2 text-muted">
                Kanji
              </a>
            </li>
            <li className="nav-item">
              <a href="/vocabulary" className="nav-link px-2 text-muted">
                Vocabulary
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
