"use client";

import { fetchSpecificKanji, getSpecificKanjiInfo } from "@/src/apiCalls/kanji";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function KanjiSymbolComponent() {
  const router = useRouter();
  const [pathname, setPathname] = useState("");
  const [kanjiInfo, setKanjiInfo] = useState([]);
  const [kanji, setKanji] = useState("");
  const [grade, setGrade] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  scroll(0, 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, [router]);

  useEffect(() => {
    const kanjiStringArray = pathname.split("/");
    const decodedKanji = decodeURIComponent(kanjiStringArray[3]);
    setKanji(decodedKanji);
    setGrade(decodeURIComponent(kanjiStringArray[2]));
  }, [pathname]);

  useEffect(() => {
    const fetchKanjiInfo = async () => {
      const kanjiInfo = await getSpecificKanjiInfo(kanji, grade);
      if (kanjiInfo) {
        setKanjiInfo(kanjiInfo[0]);
      } else {
        //Para modo dev:
        // console.error("No se pudo obtener la información del kanji");
      }
    };

    if (kanji !== "" && grade !== "") {
      fetchKanjiInfo();
      setIsVisible(true); // Marca la sección como visible una vez que se cargan los datos
    }
  }, [kanji, grade]);
  return (
    <div className={`kanji-symbol-main ${isVisible ? "visible" : ""}`}>
      <div className="kanji-symbol-div flex justify-center">
        <section className="kanji-symbol">{kanji !== "" && kanji}</section>
      </div>
      <div className="flex justify-center">
        <section className="kanji-info bg-red-400 rounded-xl">
          {kanjiInfo && (
            <p className="kanji-paragraph flex justify-center">
              <b className="kanji-paragraph-b">
                {kanjiInfo["meanings"] && kanjiInfo["meanings"][0]}
              </b>
            </p>
          )}
          {kanjiInfo && (
            <>
              <p className="kanji-paragraph flex justify-center">
                <span className="kanji-span">Onyomi:</span>&nbsp;
              </p>
              {kanjiInfo.on_readings && kanjiInfo.on_readings.length > 0 ? (
                kanjiInfo.on_readings.map((onReading, index) => (
                  <p
                    key={index}
                    className="kanji-paragraph flex justify-center"
                  >
                    {onReading}
                  </p>
                ))
              ) : (
                <p className="kanji-paragraph flex justify-center">
                  This kanji has no onyomi readings
                </p>
              )}
            </>
          )}
          {kanjiInfo && (
            <>
              <p className="kanji-paragraph flex justify-center">
                <span className="kanji-span">Kunyomi:</span>&nbsp;
              </p>

              {kanjiInfo.kun_readings && kanjiInfo.kun_readings.length > 0 ? (
                kanjiInfo.kun_readings.map((kunReading, index) => (
                  <p
                    key={index}
                    className="kanji-paragraph flex justify-center"
                  >
                    {kunReading}
                  </p>
                ))
              ) : (
                <p className="kanji-paragraph flex justify-center">
                  This kanji has no kunyomi readings
                </p>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default KanjiSymbolComponent;
