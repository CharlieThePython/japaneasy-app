"use client";

import {
  fetchSpecificKanji,
  fetchSpecificNokenSection,
} from "@/src/apiCalls/kanji";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function KanjiLessonComponent() {
  const router = useRouter();
  const [pathname, setPathname] = useState("");
  const [level, setLevel] = useState("");
  const [kanjiGradeArray, setKanjiGradeArray] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  scroll(0, 0);
  useEffect(() => {
    // La condición asegura que solo se ejecuta en el cliente
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, [router]);
  //Para modo dev:
  // console.log("pathname", pathname);

  const gradeStringArray = pathname.split("/");
  const grade = gradeStringArray[2];
  //Para modo dev:
  // console.log("grade", grade);

  useEffect(() => {
    if (grade) {
      const gradeArrayFetch = async () => {
        const gradeArray = await fetchSpecificNokenSection(grade);
        //Para modo dev:
        // console.log("gradeArray", gradeArray);
        setKanjiGradeArray(
          gradeArray.flatMap((objeto) => Object.values(objeto))
        );
      };
      gradeArrayFetch();
    }
  }, [grade]);

  useEffect(() => {
    if (grade) {
      const gradeArrayFetch = async () => {
        const gradeArray = await fetchSpecificNokenSection(grade);
        //Para modo dev:
        // console.log("gradeArray", gradeArray);
        setKanjiGradeArray(
          gradeArray.flatMap((objeto) => Object.values(objeto))
        );
        setIsVisible(true); // Marca la sección como visible una vez que se cargan los datos
      };
      gradeArrayFetch();
    }
  }, [grade]);

  return (
    <div className="kanji-table" id="kanji-table">
      <section className={`kanji-table-section ${isVisible ? "visible" : ""}`}>
        {kanjiGradeArray.length > 0 ? (
          kanjiGradeArray.map((kanji, index) => (
            <Link
              key={index}
              className="kanji-link bg-red-500 shadow-2xl"
              href={`${pathname}/${encodeURIComponent(kanji)}`}
            >
              {kanji}
            </Link>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </div>
  );
}

export default KanjiLessonComponent;
