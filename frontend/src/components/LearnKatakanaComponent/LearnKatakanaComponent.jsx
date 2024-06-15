"use client";
import { hiraganaSymbols } from "../../kanas/kanas";

import "../../styles/Learn.css";
import "@/src/styles/Hiragana.css";

//IMAGES
import katakanaGoblin from "../../images/hiragana/learn-katakana/orc.png";
import Link from "next/link";

function LearnKatakanaComponent() {
  scroll(0, 0);
  return (
    <>
      <h1 className="big-header bg-red-500 rounded-r-full">
        KATAKANA: A FOREIGN BOSS IS WAITING FOR YOU
      </h1>
      <div className="card-box animated">
        <section>
          <img width="50%" height="auto" src={katakanaGoblin.src} />
          カタカナ
        </section>
      </div>
      <div className="info-box animated">
        <h2>THE KATAKANA SYMBOLS | 片仮名の文字!</h2>
      </div>
      <div className="w-9/12 mx-auto">
        <img src="https://i.etsystatic.com/31740315/r/il/0777d3/4421357122/il_fullxfull.4421357122_5t1o.jpg" />
      </div>
      <h1 className="big-header bg-red-500 rounded-r-full">
        AVAILABLE LESSONS
      </h1>
      <Link
        href="/hiragana/learn/katakana/steps/step-1"
        className="nav-link rounded-5"
        id="home-tab2"
        aria-selected="true"
      >
        <div className="lesson-box bg-yellow-100 rounded-lg shadow-xl">
          KATAKANA:&nbsp;STEP 1&nbsp;|&nbsp;
          <b className="strong-lesson-box-text">ア/カ/サ/タ</b>
        </div>
      </Link>
      <Link
        href="/hiragana/learn/katakana/steps/step-2"
        className="nav-link rounded-5"
        id="home-tab2"
        aria-selected="true"
      >
        <div className="lesson-box bg-yellow-100 rounded-lg shadow-xl">
          KATAKANA:&nbsp;STEP 2&nbsp;|&nbsp;
          <b className="strong-lesson-box-text">ナ/ハ/マ/ラ</b>
        </div>
      </Link>
      <Link
        href="/hiragana/learn/katakana/steps/step-3"
        className="nav-link rounded-5"
        id="home-tab2"
        aria-selected="true"
      >
        <div className="lesson-box bg-yellow-100 rounded-lg shadow-xl">
          KATAKANA:&nbsp;STEP 3&nbsp;|&nbsp;
          <b className="strong-lesson-box-text">ヤ/ワ</b>
        </div>
      </Link>
    </>
  );
}

export default LearnKatakanaComponent;
