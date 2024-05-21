import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Hiragana from "./Hiragana.jsx";
import Kanji from "./Kanji.jsx";
import Vocabulary from "./Vocabulary.jsx";
import About from "./About.jsx";
import LearnHiragana from "./learn/LearnHiragana.jsx";
import LearnKatakana from "./learn/LearnKatakana.jsx";
import PracticeHiragana from "./practice/PracticeHiragana.jsx";
import PracticeKatakana from "./practice/PracticeKatakana.jsx";
import LearnKanji from "./learn/LearnKanji.jsx";
import PracticeKanji from "./practice/PracticeKanji.jsx";
import { Login } from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LearnHiraganaStep1 from "./learn/steps/hiragana/LearnHiraganaStep1.jsx";
import LearnHiraganaStep2 from "./learn/steps/hiragana/LearnHiraganaStep2.jsx";
import LearnHiraganaStep3 from "./learn/steps/hiragana/LearnHiraganaStep3.jsx";
import LearnKatakanaStep1 from "./learn/steps/katakana/LearnKatakanaStep1.jsx";
import LearnKatakanaStep2 from "./learn/steps/katakana/LearnKatakanaStep2.jsx";
import LearnKatakanaStep3 from "./learn/steps/katakana/LearnKatakanaStep3.jsx";
import StudyHiragana from "./practice/study/StudyHiragana.jsx";
import StudyKatakana from "./practice/study/StudyKatakana.jsx";
import DynamicVocabulary from "./vocabulary/DynamicVocabulary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana",
    element: <Hiragana />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/learn-hiragana",
    element: <LearnHiragana />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/learn-hiragana/step-1",
    element: <LearnHiraganaStep1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/learn-hiragana/step-2",
    element: <LearnHiraganaStep2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/learn-hiragana/step-3",
    element: <LearnHiraganaStep3 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/learn-katakana",
    element: <LearnKatakana />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/learn-katakana/step-1",
    element: <LearnKatakanaStep1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/learn-katakana/step-2",
    element: <LearnKatakanaStep2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/learn-katakana/step-3",
    element: <LearnKatakanaStep3 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/practice-hiragana",
    element: <PracticeHiragana />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/practice-hiragana/study",
    element: <StudyHiragana />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/practice-katakana",
    element: <PracticeKatakana />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hiragana/practice-katakana/study",
    element: <StudyKatakana />,
    errorElement: <ErrorPage />,
  },
  {
    path: "kanji",
    element: <Kanji />,
    errorElement: <ErrorPage />,
  },
  {
    path: "kanji/learn-kanji",
    element: <LearnKanji />,
    errorElement: <ErrorPage />,
  },
  {
    path: "kanji/practice-kanji",
    element: <PracticeKanji />,
    errorElement: <ErrorPage />,
  },
  {
    path: "vocabulary",
    element: <Vocabulary />,
    errorElement: <ErrorPage />,
  },
  {
    path: "vocabulary/:id",  // Esta es la parte clave: :id indica un parámetro dinámico en la ruta
    element: <DynamicVocabulary />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

