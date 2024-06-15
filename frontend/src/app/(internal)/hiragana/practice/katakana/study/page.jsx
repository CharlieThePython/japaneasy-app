import StudyKatakanaComponent from "@/src/components/StudyKatakanaComponent/StudyKatakanaComponent";
import japaneasyIcon from "@/src/images/japanese_flag.png";
export const metadata = {
  title: "Japaneasy - Study Hiragana",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};
function StudyKatakana() {
  return <StudyKatakanaComponent />;
}

export default StudyKatakana;
