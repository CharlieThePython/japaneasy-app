"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchAllNokenKanji } from "@/src/apiCalls/kanji";
import Link from "next/link";

function NokenSection(props) {
  const { kanjiGrade, text } = props;
  const [kanji, setKanji] = useState(null);

  useEffect(() => {
    fetchAllNokenKanji();
  }, []);
  useEffect(() => {
    const fetchKanji = async () => {
      try {
        const response = await axios.get(
          `https://kanjiapi.dev/v1/kanji/${kanjiGrade}`
        );
        const limitedKanji = response.data.slice(0, 75);
        //Para modo dev:
        // console.log("limitedKanji", limitedKanji);
        setKanji(limitedKanji);
      } catch (error) {
        //Para modo dev:
        // console.error("Error fetching data:", error);
      }
    };

    fetchKanji();
  }, [kanjiGrade]);

  return (
    <div className="flex justify-between">
      <section className="kanji-noken-link">
        <h1 className="kanji-noken-header">{text}</h1>
        <Link
          href={`kanji/${text.toLowerCase()}`}
          className="kanji-noken-anchor"
        >
          LEARN {text}
        </Link>
      </section>

      <p className="kanji-noken-section">{kanji}</p>
    </div>
  );
}

export default NokenSection;
