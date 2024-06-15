"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import Animals from "../../images/vocabulary/animals.png";
import Food from "../../images/vocabulary/food.png";
import Countries from "../../images/vocabulary/countries.png";
import CityPlaces from "../../images/vocabulary/cityPlaces.png";
import Hobbies from "../../images/vocabulary/hobbies.png";
import HouseParts from "../../images/vocabulary/houseParts.png";

import "@/src/styles/Vocabulary.css";
import "@/src/styles/Hiragana.css";

function VocabularyComponent() {
  scroll(0, 0);
  return (
    <>
      <h1 className="big-header bg-red-500 rounded-r-full">
        LEARN NEW VOCABULARY | <span className="japanese-text">語彙</span>
      </h1>

      <div className="flex justify-evenly mt-10 vocabulary-section-row">
        <Link
          href="/vocabulary/animals"
          className="vocabulary-div bg-yellow-100 rounded-3xl shadow-xl no-underline animated"
        >
          <img
            src={Animals.src}
            alt="animals-section"
            className="vocabulary-img"
          />
          <h1 className="vocabulary-h1">ANIMALS</h1>
        </Link>
        <Link
          href="/vocabulary/food"
          className="vocabulary-div bg-purple-100 rounded-3xl shadow-xl no-underline animated"
        >
          <img src={Food.src} alt="food-section" className="vocabulary-img" />
          <h1 className="vocabulary-h1">FOOD</h1>
        </Link>
        <Link
          href="/vocabulary/countries"
          className="vocabulary-div bg-orange-100 rounded-3xl shadow-xl no-underline animated"
        >
          <img
            src={Countries.src}
            alt="countries-section"
            className="vocabulary-img"
          />
          <h1 className="vocabulary-h1">COUNTRIES</h1>
        </Link>
      </div>
      <div className="flex justify-evenly mt-10 vocabulary-section-row">
        <Link
          href="/vocabulary/cityPlaces"
          className="vocabulary-div bg-cyan-100 rounded-3xl shadow-xl no-underline animated"
        >
          <img
            src={CityPlaces.src}
            alt="city-places-section"
            className="vocabulary-img"
          />
          <h1 className="vocabulary-h1">CITY&nbsp;PLACES</h1>
        </Link>
        <Link
          href="/vocabulary/hobbies"
          className="vocabulary-div bg-amber-100 rounded-3xl shadow-xl no-underline animated"
        >
          <img
            src={Hobbies.src}
            alt="hobbies-section"
            className="vocabulary-img"
          />
          <h1 className="vocabulary-h1">HOBBIES</h1>
        </Link>
        <Link
          href="/vocabulary/houseParts"
          className="vocabulary-div bg-teal-100 rounded-3xl shadow-xl no-underline animated"
        >
          <img
            src={HouseParts.src}
            alt="houseParts-section"
            className="vocabulary-img"
          />
          <h1 className="vocabulary-h1">HOUSE&nbsp;PARTS</h1>
        </Link>
      </div>
    </>
  );
}

export default VocabularyComponent;
