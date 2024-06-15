"use client";

import { katakanaPracticeSymbols, kanaTranslations } from "@/src/kanas/kanas";
import React, { useEffect, useState } from "react";

import "@/src/styles/Study.css";
import { kanaRandomizer } from "@/src/kanaRandomizer/kanaRandomizer";

function StudyKatakanaComponent() {
  const [receivedData, setReceivedData] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [randomizedKanas, setRandomizedKanas] = useState([]);
  const [kanaError, setKanaError] = useState([]);
  const [errorCounter, setErrorCounter] = useState(0);
  const [rightCounter, setRightCounter] = useState(0);
  const [allCorrectFlag, setAllCorrectFlag] = useState(false);
  const [kanaIndex, setKanaIndex] = useState(0);
  const [randomizedTranslations, setRandomizedTranslations] = useState([]);
  const [kanaInput, setKanaInput] = useState("");

  scroll(0, 0);

  const checkKanaHandler = () => {
    if (currentRow < randomizedKanas.length) {
      checkKana();
    } else {
      checkErrors();
    }
    setKanaInput("");
  };

  const checkErrors = () => {
    const kanaValue = document.getElementById("section-textarea");
    // console.log("kanaValue", kanaValue.value);
    // console.log("kanaError", kanaError);
    // console.log("currentRow", currentRow);
    // console.log(
    //   "currentTranslation",
    //   randomizedTranslations[kanaError[kanaIndex]]
    // );
    if (kanaError.length > 0) {
      // console.log("ENTERED");
      // console.log("kanaError", kanaError);
      if (kanaValue.value === randomizedTranslations[kanaError[kanaIndex]]) {
        // console.log("ENTERED 2");
        // console.log("RIGHT!");
        setKanaIndex((prevIndex) => prevIndex + 1);
        setErrorCounter((prevCounter) => prevCounter - 1);
        // console.log("errorCounter", errorCounter);
        kanaValue.value = "";
      } else {
        // console.log("WRONG KANA!");
      }
    }
  };
  const checkKana = () => {
    const kanaValue = document.getElementById("section-textarea");
    // console.log("kanaValue", kanaValue.value);
    // console.log("currentRow", currentRow);
    // console.log("currentTranslation", randomizedTranslations[currentRow]);

    if (
      kanaInput === randomizedTranslations[currentRow] &&
      currentRow < randomizedKanas.length
    ) {
      // console.log("RIGHT!");
      setRightCounter((prevCounter) => prevCounter + 1);
      setCurrentRow((prevRow) => prevRow + 1);
    } else {
      // console.log("WRONG!");
      kanaError.push(currentRow);
      // console.log("kanaError", kanaError);
      setCurrentRow((prevRow) => prevRow + 1);
      setErrorCounter((prevCounter) => prevCounter + 1);
      kanaValue.innerHTML = "";
    }
  };

  // console.log("kanaError.length", kanaError.length);

  const initializeRandomizedData = () => {
    const filteredRows = katakanaPracticeSymbols.filter((element, index) =>
      receivedData.includes(index)
    );
    const filteredTranslations = kanaTranslations.filter((element, index) =>
      receivedData.includes(index)
    );
    const randomizedArray = kanaRandomizer(filteredRows, filteredTranslations);
    setRandomizedKanas(randomizedArray[0]);
    setRandomizedTranslations(randomizedArray[1]);
  };

  useEffect(() => {
    if (currentRow === randomizedKanas.length && errorCounter === 0) {
      setAllCorrectFlag(true);
    }
  });

  useEffect(() => {
    if (receivedData.length > 0) {
      initializeRandomizedData();
    }
  }, [receivedData]);

  useEffect(() => {
    // Obtenemos los datos almacenados en localStorage
    const storedData = localStorage.getItem("receivedData");
    // console.log("Datos almacenados en localStorage:", storedData);
    // Si hay datos almacenados, los establecemos en el estado
    if (storedData) {
      setReceivedData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <main className="main-study">
        <section className="correct-kana-section flex justify-evenly">
          <div className="bg-green-400 rounded-2xl p-2">
            Right: {rightCounter}
          </div>
          <div className="bg-red-400 rounded-2xl p-2">
            Wrong: {errorCounter}
          </div>
        </section>
        <section className="correct-kana-section flex justify-center mt-4"></section>
        <section className="random-kana-section flex justify-center">
          {receivedData.length > 0 &&
            currentRow < randomizedKanas.length &&
            randomizedKanas[currentRow]}
          {kanaError.length > 0 &&
            currentRow >= randomizedKanas.length &&
            errorCounter > 0 &&
            randomizedKanas[kanaError[kanaIndex]]}
          {currentRow >= randomizedKanas.length &&
            errorCounter == 0 &&
            allCorrectFlag && <p style={{ color: "green" }}>ALL CORRECT</p>}
        </section>
        <section className="flex justify-center">
          <input
            type="text"
            className="section-textarea bg-blue-200"
            id="section-textarea"
            value={kanaInput}
            onChange={(e) => setKanaInput(e.target.value)}
          />
        </section>
        <section className="flex justify-center">
          <button
            className="check-kana-button bg-slate-300"
            onMouseUp={checkKanaHandler}
          >
            CHECK
          </button>
        </section>
      </main>
    </>
  );
}

export default StudyKatakanaComponent;
