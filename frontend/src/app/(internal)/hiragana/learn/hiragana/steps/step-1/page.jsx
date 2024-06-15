import LearnHiraganaStep1 from "@/src/components/Steps/HiraganaSteps/LearnHiraganaStep1";
import React from "react";

import japaneasyIcon from "@/src/images/japanese_flag.png";

export const metadata = {
  title: "Japaneasy - Learn Hiragana: Step 1",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};

function Step1() {
  return <LearnHiraganaStep1 />;
}

export default Step1;
