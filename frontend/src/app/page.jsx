import React from "react";
import { Login } from "../components/Global/Login";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import Menu from "../components/Global/Menu";
import Carousel from "../components/Global/Carousel";

//CSS IMPORTS
import "@/src/styles/Index.css";
import "@/src/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import japaneasyIcon from "@/src/images/japanese_flag.png";

export const metadata = {
  title: "Japaneasy - Home",
  description: "Created by JapaneasyTeam",
  icons: japaneasyIcon.src,
};

function page() {
  return (
    <>
      <Carousel />
    </>
  );
}

export default page;
