"use client";

import React, { useEffect } from "react";
import samurai from "@/src/images/hiragana/samurai.png";
import knight from "../../images/hiragana/knight.png";
import cat from "../../images/hiragana/cat.png";
import ramen from "../../images/hiragana/ramen.png";
import sushi from "../../images/hiragana/sushi.png";
import miso from "../../images/hiragana/miso.png";
import temple from "../../images/hiragana/temple.png";
import sakura from "../../images/hiragana/sakura.png";
import laptop from "../../images/hiragana/laptop.png";
import hamburger from "../../images/hiragana/hamburger.png";
import hotel from "../../images/hiragana/hotel.png";
import cola from "../../images/hiragana/cola.png";

//CSS
import "@/src/styles/Hiragana.css";
import { useSession } from "next-auth/react";
import Link from "next/link";

function HiraganaComponent() {
  const { data: session } = useSession();
  //Para modo dev:
  // console.log(session);
  scroll(0, 0);
  useEffect(() => {
    // Cuando la página se haya cargado completamente
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }); // Hacer scroll al principio de la página
  }, []); // Se ejecuta solo una vez después del montaje inicial

  return (
    <>
      <h1 className="big-header bg-red-500 rounded-r-full">
        HIRAGANA? KATAKANA? WHAT IS THIS?
      </h1>
      <div className="card-box animated">
        <section className="card-box-in-section">
          <img width="50%" height="auto" src={samurai.src} />
          ひらがな
        </section>
        <section className="card-box-in-section">
          <img width="50%" height="auto" src={knight.src} />
          カタカナ
        </section>
      </div>
      <div className="content-box bg-red-400 animated">
        <p>
          <b>Hiragana</b> and <b>Katakana</b> are two of the primary writing
          systems used in the Japanese language.
          <br />
          <b>Hiragana</b> characters are typically more rounded and cursive,
          while <b>Katakana</b> characters have more angular and straight
          strokes. <b>Hiragana</b> is mainly used for native Japanese words,
          verb endings, and grammatical particles. <b>Katakana</b>, on the other
          hand, is often used for foreign loanwords, technical terms, and names
          of foreign people or places. Both systems consist of characters
          representing syllables rather than individual consonants or vowels.
          Mastering both is crucial for understanding written Japanese and
          expanding vocabulary beyond native terms.
        </p>
      </div>

      <h1 className="big-header bg-red-500 rounded-r-full animated">
        TALK ME MORE ABOUT HIRAGANA |{" "}
        <span className="japanese-text">ひらがな</span>
      </h1>
      <div className="hiragana-card-box animated">
        <section>
          <img width="40%" height="auto" src={cat.src} />
          ねこ
        </section>
        <section>
          <img width="40%" height="auto" src={sakura.src} />
          さくら
        </section>
        <section>
          <img width="40%" height="auto" src={sushi.src} />
          すし
        </section>
      </div>
      <div className="hiragana-card-box animated">
        <section>
          <img
            width="40%"
            height="auto"
            src={miso.src}
            className="higher-image"
          />
          みそ
        </section>
        <section>
          <img
            width="40%"
            height="auto"
            src={temple.src}
            className="higher-image"
          />
          てら
        </section>
      </div>
      <div className="content-box bg-red-400 animated">
        <p>
          <b>Hiragana</b> is like your starter pack for reading and writing in
          Japanese. It's made up of <b>cute, curvy characters</b> that represent
          sounds. Think of it as your personal map through the language jungle.
          With <b>Hiragana</b>, you unlock the secrets of everyday Japanese
          words, like saying "hello" (<b>こんにちは</b>) or "thank you" (
          <b>ありがとう</b>).
          <br />
          It's like learning the ABCs all over again, but this time with a
          sprinkle of Japanese charm.
        </p>
      </div>
      <div className="list-box animated">
        <section className="first-box">
          <h2>HIRAGANA IS MAINLY USE FOR...</h2>
        </section>
        <section className="second-box">
          <ul>
            <li>Traditional Words &nbsp;✅</li>
            <li>Basic Vocabulary &nbsp;✅</li>
            <li>Language Particles&nbsp;✅</li>
          </ul>
        </section>
      </div>
      <h1 className="big-header bg-red-500 rounded-r-full animated">
        WHAT ABOUT KATAKANA? | <span className="japanese-text">カタカナ</span>
      </h1>
      <div className="hiragana-card-box animated">
        <section>
          <img width="40%" height="auto" src={ramen.src} />
          ラーメン
        </section>
        <section>
          <img width="40%" height="auto" src={laptop.src} />
          パソコン
        </section>
        <section>
          <img width="40%" height="auto" src={cola.src} />
          コーラ
        </section>
      </div>
      <div className="hiragana-card-box animated">
        <section>
          <img
            width="40%"
            height="auto"
            src={hamburger.src}
            className="higher-image"
          />
          ハンバーガー
        </section>
        <section>
          <img
            width="40%"
            height="auto"
            src={hotel.src}
            className="higher-image"
          />
          ホテル
        </section>
      </div>
      <div className="content-box bg-red-400 animated">
        <p>
          <b>Katakana</b> is like your cool passport to the world of foreign
          words in Japanese.
          <br />
          It's made up of <b>bold, angular characters</b> that often represent
          sounds borrowed from other languages.
          <br />
          Think of it as your adventurous guide through the world of
          international terms and global communication!
          <br />
          With <b>Katakana</b>, you dive into the realm of loanwords, technical
          words, and the names of foreign places.
        </p>
      </div>
      <div className="list-box animated">
        <section className="first-box">
          <h2>KATAKANA IS MAINLY USE FOR...</h2>
        </section>
        <section className="second-box">
          <ul>
            <li>Loanwords &nbsp;✅</li>
            <li>Onomatopoeia &nbsp;✅</li>
            <li>Technical Terms&nbsp;✅</li>
          </ul>
        </section>
      </div>
      <div className="info-box animated">
        <h2>NOW IS YOUR TURN! | がんばって!</h2>
      </div>
      <div className="main-info-box animated">
        <div className="left-info-box">
          <section className="left-info-box-header">
            <h2>WANT TO LEARN SOME MORE?</h2>
          </section>
          <section className="button-box">
            <Link href={"hiragana/learn/hiragana"} className="hiragana-link">
              LEARN HIRAGANA
            </Link>
          </section>
          <section className="button-box">
            <Link href={"hiragana/learn/katakana"} className="hiragana-link">
              LEARN KATANA
            </Link>
          </section>
        </div>

        <div className="left-info-box">
          <section className="left-info-box-header">
            <h2>WANT TO PRACTICE LIKE A NINJA?</h2>
          </section>
          <section className="button-box">
            <Link href={"hiragana/practice/hiragana"} className="hiragana-link">
              PRACTICE HIRAGANA
            </Link>
          </section>
          <section className="button-box">
            <Link href={"hiragana/practice/katakana"} className="hiragana-link">
              PRACTICE KATANA
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

export default HiraganaComponent;
