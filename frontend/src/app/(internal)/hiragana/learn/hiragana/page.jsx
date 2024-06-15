import LearnHiraganaComponent from "@/src/components/LearnHiraganaComponent/LearnHiraganaComponent";
import React from "react";
import "@/src/styles/Index.css";
import "@/src/styles/Menu.css";

import japaneasyIcon from "@/src/images/japanese_flag.png";

export const metadata = {
  title: "Japaneasy - Learn Hiragana",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};

function LearnHiragana() {
  return <LearnHiraganaComponent />;
}

export default LearnHiragana;
