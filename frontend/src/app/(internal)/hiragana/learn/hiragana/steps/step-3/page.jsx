import LearnHiraganaStep3 from "@/src/components/Steps/HiraganaSteps/LearnHiraganaStep3";
import React from "react";

import japaneasyIcon from "@/src/images/japanese_flag.png";

export const metadata = {
  title: "Japaneasy - Learn Hiragana Step 3",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};

function Step3() {
  return <LearnHiraganaStep3 />;
}

export default Step3;
