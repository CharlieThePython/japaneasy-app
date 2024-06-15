import PracticeKatakanaComponent from "@/src/components/PracticeKatakanaComponent/PracticeKatakanaComponent";
import japaneasyIcon from "@/src/images/japanese_flag.png";

export const metadata = {
  title: "Japaneasy - Practice Katakana",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};
function PracticeKatakana() {
  return <PracticeKatakanaComponent />;
}

export default PracticeKatakana;
