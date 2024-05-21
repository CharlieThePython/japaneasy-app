'use client';

import React from "react";
import "../../styles/Menu.css";
import { usePathname } from "next/navigation";


function Menu() {
  const path= usePathname();
  return (
    <div>
      <ul
        className="main-menu nav nav-pills nav-fill gap-2 p-1 bg-red-400 rounded-5 shadow-xl"
        id="pillNav2"
        role="tablist"
        style={{
          "--bs-nav-link-color": "var(--bs-white)",
          "--bs-nav-pills-link-active-color": "var(--bs-secondary)",
          "--bs-nav-pills-link-active-bg": "var(--bs-white)",
        }}
      >
        <li className="nav-item" role="presentation">
            <a className={`nav-link rounded-5 p-3 ${path === '/' ? 'active' : ''}`} id="home-tab2" href="/">
              Home
            </a>
        </li>
        <li className="nav-item" role="presentation">
            <a className={`nav-link rounded-5 p-3 ${path === '/hiragana' ? 'active' : ''}`} id="profile-tab2"  href="/hiragana">
              Hiragana/Katakana
            </a>
        </li>
        <li className="nav-item" role="presentation">
            <a className={`nav-link rounded-5 p-3 ${path === '/kanji' ? 'active' : ''}`} id="contact-tab2" aria-selected="false"  href="/kanji">
              Kanji
            </a>
        </li>
        <li className="nav-item" role="presentation">
            <a className={`nav-link rounded-5 p-3 ${path === '/vocabulary' ? 'active' : ''}`} id="contact-tab2" aria-selected="false"  href="/vocabulary">
              Vocabulary
            </a>
        </li>
        <li className="nav-item" role="presentation">
            <a className={`nav-link rounded-5 p-3 ${path === '/about' ? 'active' : ''}`} id="contact-tab2" aria-selected="false"  href="/about">
              About
            </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
