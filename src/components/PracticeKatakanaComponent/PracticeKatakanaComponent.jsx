
'use client'

import KatakanaTable from "../Global/KatakanaTable";
import CheckList from "../Global/CheckList";
import { divideArrayIntoRows } from "@/src/kanas/practiceFunctions";
import { hiraganaSymbols } from "@/src/kanas/kanas";

import "@/src/styles/Hiragana.css";
import "../../styles/PracticeHiragana.css";
import Link from "next/link";
import { useEffect, useState } from "react";

function PracticeKatakanaComponent() {
  const [receivedData, setReceivedData] = useState('');

  const sendReceivedData = async () =>{
    return receivedData
  }

  console.log('receivedData',receivedData);

  useEffect(() => {
    console.log(receivedData)
  }, [receivedData]);

  // Uso de la función para dividir el array en filas
  const rows = divideArrayIntoRows(hiraganaSymbols, 5);
  console.log(rows);
  return (
  <>
    <Link
      href={{
        pathname: '/hiragana/practice-katakana/study',
        query: { receivedData: JSON.stringify(receivedData) },
      }}
      className="nav-link rounded-5"
      id="home-tab2"
      aria-selected="true"
    >
      <button
        type="submit"
        form="checklist-form-id"
        className="checklist-submit-button pop-animation rounded-bl-3xl rounded-br-3xl"
        id="checklist-submit-button-id"
      >
        LET&apos;S PRACTICE KATAKANA!
        <br />
        CLICK HERE
      </button>
    </Link>
    <h1 className="big-header bg-red-500 rounded-r-full">
      CHOOSE THE ROW LEVELS
    </h1>
    <section className="flex">
      <CheckList setReceivedData={setReceivedData} />
      <KatakanaTable />
    </section>
  </>
  )
}

export default PracticeKatakanaComponent;
