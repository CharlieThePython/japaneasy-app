import PracticeHiraganaComponent from "@/src/components/PracticeHiraganaComponent/PracticeHiraganaComponent";
import japaneasyIcon from "@/src/images/japanese_flag.png";

export const metadata = {
  title: "Japaneasy - Practice Hiragana",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};

function PracticeHiragana() {
  return <PracticeHiraganaComponent />;
}

export default PracticeHiragana;
