"use client";

import React, { useEffect, useState } from "react";
import "../../styles/Hiragana.css";
import "../../styles/Kanji.css";

//IMAGES
import ogre from "../../images/kanji/ogre.png";
import chinese from "../../images/kanji/chinese.png";
import terracotta from "../../images/kanji/terracotta-army.png";
import calligraphy from "../../images/kanji/calligraphy.png";
import girl from "../../images/kanji/girl.png";
import ninja from "../../images/kanji/ninja.png";
import seed from "../../images/kanji/noken_levels/seed.png";
import sprout from "../../images/kanji/noken_levels/sprout.png";
import plant from "../../images/kanji/noken_levels/plant.png";
import tree from "../../images/kanji/noken_levels/tree.png";
import sakuraTree from "../../images/kanji/noken_levels/sakura_tree.png";
import NokenSection from "../Global/NokenSection";

function KanjiComponent() {
  const [selectedSection, setSelectedSection] = useState(null);
  const handleClick = (sectionId) => {
    setSelectedSection(sectionId);
    document.getElementById("n5-section").style.display = "none";
    document.getElementById("n4-section").style.display = "none";
    document.getElementById("n3-section").style.display = "none";
    document.getElementById("n2-section").style.display = "none";
    document.getElementById("n1-section").style.display = "none";

    // Mostrar la sección correspondiente
    document.getElementById(`${sectionId}-section`).style.display = "block";
  };

  return (
    <>
      <h1 className="big-header bg-red-500 rounded-r-full shadow-xl">
        WATCH OUT, STUDENT! THERE'S A FOE BLOCKING YOUR WAY!
      </h1>
      <div className="card-box animated">
        <section>
          <img width="50%" height="auto" src={ogre.src} />
          漢字
        </section>
      </div>
      <div className="content-box bg-red-400 animated">
        <p>
          For some people, <strong>Kanji</strong> is the final boss in the{" "}
          <strong>Japanese</strong> learning process. Nevertheless, we have to
          learn at least 2000 <strong>Kanji</strong> to be able to pass the N1,
          the highest level of the language. And all of them look so similar!
          But don’t panic. Remember that you’re the <strong>Japanese</strong>{" "}
          hero! Unsheath your sword or your Japanese katana and… fight!
        </p>
      </div>
      <h1 className="big-header bg-red-500 rounded-r-full animated shadow-xl">
        BUT... WHAT IS KANJI?
      </h1>
      <div className="animated no-border-card-box ">
        <div className="hiragana-card-box animated">
          <section>
            <img width="40%" height="auto" src={chinese.src} />
          </section>
          <section className="mt-40">
            <img width="40%" height="auto" src={terracotta.src} />
          </section>
          <section>
            <img width="40%" height="auto" src={calligraphy.src} />
          </section>
        </div>
      </div>
      <div className="content-box bg-red-400 animated">
        <p>
          <b>Kanjis</b> are logographic characters borrowed from Chinese
          characters and used in the Japanese writing system.
          <br />
          Each <b>Kanji</b> character represents a concept, idea or word.
          <b> Kanji</b> characters can be quite complex, as each character has
          its own unique shape and meaning. Learning <b>Kanji</b> is essential
          for reading and writing in Japanese, as they are used for nouns, stems
          of adjectives and verbs, and to express complex ideas.
          <b> Kanji</b> characters are commonly found in written materials such
          as books, newspapers, signs and official documents in Japan.
        </p>
      </div>
      <h1 className="big-header bg-red-500 rounded-r-full shadow-xl">
        TWO READINGS, ONE CONCEPT
      </h1>
      <div className="card-box animated">
        <section className="hover-box">
          <img width="50%" height="auto" src={girl.src} alt="Girl" />
          ONYOMI
          <div className="overlay">
            <p>
              Sino-Japanese reading of Kanji characters, primarily used in more
              formal contexts and in character combinations.
            </p>
          </div>
        </section>
        <section className="hover-box">
          <img width="50%" height="auto" src={ninja.src} alt="Ninja" />
          KUNYOMI
          <div className="overlay">
            <p>
              Native Japanese reading of Kanji characters, often employed in
              names and commonly used words in daily conversation. Typically preferred for its simplicity and familiarity.
            </p>
          </div>
        </section>
      </div>
      <h1 className="big-header bg-red-500 rounded-r-full shadow-xl">
        KANJI LEVELS
      </h1>
      <div className="animated no-border-card-box ">
        <div className="hiragana-card-box animated">
          <section
            id="n5"
            className={selectedSection === "n5" ? "selected" : ""}
            href="#"
            onLoad={() => handleClick("n5")}
            onClick={(e) => {
              e.preventDefault(); // Evitar el desplazamiento hacia arriba
              handleClick("n5");
            }}
          >
            <img width="60%" height="auto" src={seed.src} />
            <h1 className="font-bold mt-2 kanjiHeader">N5</h1>
          </section>
          <section
            id="n4"
            className={selectedSection === "n4" ? "selected" : ""}
            onClick={() => handleClick("n4")}
          >
            <img width="60%" height="auto" src={sprout.src} />
            <h1 className="font-bold mt-2 kanjiHeader">N4</h1>
          </section>
          <section
            id="n3"
            className={selectedSection === "n3" ? "selected" : ""}
            onClick={() => handleClick("n3")}
          >
            <img width="60%" height="auto" src={plant.src} />
            <h1 className="font-bold mt-2 kanjiHeader">N3</h1>
          </section>
          <section
            id="n2"
            className={selectedSection === "n2" ? "selected" : ""}
            onClick={() => handleClick("n2")}
          >
            <img width="60%" height="auto" src={tree.src} />
            <h1 className="font-bold mt-2 kanjiHeader">N2</h1>
          </section>
          <section
            id="n1"
            className={selectedSection === "n1" ? "selected" : ""}
            onClick={() => handleClick("n1")}
          >
            <img width="60%" height="auto" src={sakuraTree.src} />
            <h1 className="font-bold mt-2">N1</h1>
          </section>
        </div>
      </div>
      <div
        className={`bg-red-500 ${
          selectedSection === "n5" ? "fade-in" : "fade-out"
        }`}
        id="n5-section"
      >
        {selectedSection === "n5" && (
          <>
            <NokenSection
              image="https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n5-kanji-list-%E6%BC%A2%E5%AD%97-bg.png"
              text="N5"
              kanjiGrade="grade-1"
            />
          </>
        )}
      </div>
      <div
        className={`bg-red-500 ${
          selectedSection === "n4" ? "fade-in" : "fade-out"
        }`}
        id="n4-section"
      >
        {selectedSection === "n4" && (
          <>
            <NokenSection
              image="https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n5-kanji-list-%E6%BC%A2%E5%AD%97-bg.png"
              text="N4"
              kanjiGrade="grade-2"
            />
          </>
        )}
      </div>
      <div
        className={`bg-red-500 ${
          selectedSection === "n3" ? "fade-in" : "fade-out"
        }`}
        id="n3-section"
      >
        {selectedSection === "n3" && (
          <>
            <NokenSection
              image="https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n5-kanji-list-%E6%BC%A2%E5%AD%97-bg.png"
              text="N3"
              kanjiGrade="grade-3"
            />
          </>
        )}
      </div>
      <div
        className={`bg-red-500 ${
          selectedSection === "n2" ? "fade-in" : "fade-out"
        }`}
        id="n2-section"
      >
        {selectedSection === "n2" && (
          <>
            <NokenSection
              image="https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n5-kanji-list-%E6%BC%A2%E5%AD%97-bg.png"
              text="N2"
              kanjiGrade="grade-4"
            />
          </>
        )}
      </div>
      <div
        className={`bg-red-500 ${
          selectedSection === "n1" ? "fade-in" : "fade-out"
        }`}
        id="n1-section"
      >
        {selectedSection === "n1" && (
          <>
            <NokenSection
              image="https://jlptsensei.com/wp-content/uploads/2019/11/jlpt-n5-kanji-list-%E6%BC%A2%E5%AD%97-bg.png"
              text="N1"
              kanjiGrade="grade-5"
            />
          </>
        )}
      </div>
    </>
  );
}

export default KanjiComponent;
