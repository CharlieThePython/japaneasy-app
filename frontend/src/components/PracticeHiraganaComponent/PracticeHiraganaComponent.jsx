"use client";

import HiraganaTable from "../Global/HiraganaTable";
import CheckList from "../Global/CheckList";
import { divideArrayIntoRows } from "@/src/kanas/practiceFunctions";
import { hiraganaSymbols } from "@/src/kanas/kanas";
import { useEffect, useState } from "react";
import Link from "next/link";

import "@/src/styles/Hiragana.css";
import "../../styles/PracticeHiragana.css";

function PracticeHiraganaComponent() {
  const [receivedData, setReceivedData] = useState("");
  scroll(0, 0);

  const createQueryString = (data) => {
    const params = new URLSearchParams({ receivedData: JSON.stringify(data) });
    return params.toString();
  };

  const rows = divideArrayIntoRows(hiraganaSymbols, 5);
  //Para modo dev:
  // console.log(rows);
  return (
    <>
      <Link
        href={{
          pathname: "/hiragana/practice/hiragana/study",
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
          LET&apos;S PRACTICE HIRAGANA!
          <br />
          CLICK HERE
        </button>
      </Link>
      <h1 className="big-header bg-red-500 rounded-r-full">
        CHOOSE THE ROW LEVELS
      </h1>
      <section className="flex">
        <CheckList setReceivedData={setReceivedData} />
        <HiraganaTable />
      </section>
    </>
  );
}

export default PracticeHiraganaComponent;
