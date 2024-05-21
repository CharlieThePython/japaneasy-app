'use client'

import { hiraganaSymbols } from "../../kanas/kanas";

import "../../styles/Learn.css";
import "@/src/styles/Hiragana.css";

//IMAGES
import hiraganaGoblin from "../../images/hiragana/learn-hiragana/goblin.png";
import { kanaTranslate } from "../../kanas/LearnFunctions";
import Link from "next/link";

function LearnHiraganaComponent() {
  console.log(kanaTranslate(hiraganaSymbols.indexOf("へ")));
  return (
    <>
      <h1 className="big-header bg-red-500 rounded-r-full">
        HIRAGANA: YOUR FIRST BOSS
      </h1>
      <div className="card-box animated">
        <section>
        <img width="50%" height="auto" src={hiraganaGoblin.src} />
          ひらがな
        </section>
      </div>
      <div className="info-box animated">
        <h2>THE HIRAGANA SYMBOLS | 平仮名の文字!</h2>
      </div>
      <div className="w-9/12 mx-auto">
      <img src="https://i.etsystatic.com/31740315/r/il/0777d3/4421357122/il_fullxfull.4421357122_5t1o.jpg" />
      </div>
      <h1 className="big-header bg-red-500 rounded-r-full">
        AVAILABLE LESSONS
      </h1>
      <Link className="nav-link rounded-5" id="home-tab2"  href="/hiragana/learn/hiragana/steps/step-1">
          <div className="lesson-box bg-yellow-100 rounded-lg shadow-xl">
            HIRAGANA:&nbsp;STEP 1&nbsp;|&nbsp;
            <b className="strong-lesson-box-text">あ/か/さ/た</b>
          </div>
      </Link>
      <Link href="/hiragana/learn/hiragana/steps/step-2" className="nav-link rounded-5" id="home-tab2">
          <div className="lesson-box bg-yellow-100 rounded-lg shadow-xl">
            HIRAGANA:&nbsp;STEP 2&nbsp;|&nbsp;
            <b className="strong-lesson-box-text">な/は/ま/ら</b>
            </div>
      </Link>
      <Link className="nav-link rounded-5" id="home-tab2" href="/hiragana/learn/hiragana/steps/step-3">
          <div className="lesson-box bg-yellow-100 rounded-lg shadow-xl">
            HIRAGANA:&nbsp;STEP 3&nbsp;|&nbsp;
            <b className="strong-lesson-box-text">や/わ</b>
          </div>
      </Link>
    </>
  );
}

export default LearnHiraganaComponent;
