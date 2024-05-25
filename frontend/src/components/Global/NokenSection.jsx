'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";

function NokenSection(props) {
  const { kanjiGrade, text } = props;
  const [kanji, setKanji] = useState(null);

  useEffect(() => {
    const fetchKanji = async () => {
      try {
        const response = await axios.get(
          `https://kanjiapi.dev/v1/kanji/${kanjiGrade}`
        );
        const limitedKanji = response.data.slice(0, 80); // Limit to first 80 characters
        setKanji(limitedKanji);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchKanji();
  }, [kanjiGrade]);

  return (
    <div className="flex justify-between">
      <section className="kanji-noken-link">
      <h1 className="kanji-noken-header">{text}</h1>
      <a className="kanji-noken-anchor">LEARN {text}</a>
      </section>

      <p className="kanji-noken-section">{kanji}</p>
    </div>
  );
}

export default NokenSection;
