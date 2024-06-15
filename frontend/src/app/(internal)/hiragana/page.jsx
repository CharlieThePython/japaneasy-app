import HiraganaComponent from "@/src/components/HiraganaComponent/HiraganaComponent";

import "@/src/styles/Index.css";
import "@/src/styles/Menu.css";
import japaneasyIcon from "@/src/images/japanese_flag.png";
import { useSession } from "next-auth/react";

export const metadata = {
  title: "Japaneasy - Hiragana",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};

function Hiragana() {
  return (
    <>
      <HiraganaComponent />
    </>
  );
}

export default Hiragana;
