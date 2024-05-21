'use client'

import { vocabularyData } from "@/src/vocabularySections/vocabularyData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/LearnHiragana.css";
import "../../styles/Vocabulary.css";
import "../../styles/Learn.css";
import "@/src/styles/Hiragana.css";

function VocabularyLessonComponent({name}) {

  console.log(name)
  // Obtiene el array de items del JSON
  const dataSet = vocabularyData.find((item) => item.key === name);
  const vocabulary = dataSet ? dataSet.value : [];
  console.log('vocabulary',vocabulary)
  console.log("dataSet", dataSet ? dataSet.value : "Data not found");


  return (
    <>
      <Swiper
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
        loop
      >
        {vocabulary.map((element, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="card-box animated">
                <section id="kana-card-box">
                  <div className="kana-box card-box">{element.kanji}</div>
                  <span className="small-text">{element.hiragana}</span>
                </section>
              </div>
              <p className="description-box bg-red-400 rounded-xl">
                {element.english}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default VocabularyLessonComponent;
