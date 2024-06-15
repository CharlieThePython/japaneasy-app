import { getAllUsers, postUser } from "@/src/apiCalls/user";
import AboutComponent from "@/src/components/AboutComponent/AboutComponent";
import japaneasyIcon from "@/src/images/japanese_flag.png";
import "@/src/styles/About.css";

export const metadata = {
  title: "Japaneasy - About",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};

async function About() {
  const getUsers = await getAllUsers();
  // const postUsers = await postUser();
  return <AboutComponent />;
}

export default About;
