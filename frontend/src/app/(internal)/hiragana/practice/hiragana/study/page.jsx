import StudyHiraganaComponent from "@/src/components/StudyHiraganaComponent/StudyHiraganaComponent";
import japaneasyIcon from "@/src/images/japanese_flag.png";
export const metadata = {
  title: "Japaneasy - Study Hiragana",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};
function StudyHiragana() {
  return <StudyHiraganaComponent />;
}

export default StudyHiragana;
