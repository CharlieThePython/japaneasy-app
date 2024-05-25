'use client';

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import gatosImage from "../../images/cats.png"; // Importa la imagen
import ninjaImage from "../../images/ninja.png";
import mouseImage from "../../images/mouse.png";
import vocabImage from "../../images/vocabulary.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "../../styles/Carousel.css";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper rounded-3xl"
        loop
      >
        <SwiperSlide className="slide">
            <a href="/hiragana">
              <div>
                <section className="bg-slate-500">
                  <h3>THE BEGINNING OF THE JOURNEY...</h3>
                </section>
                <Image  width="100%" height="auto" src={gatosImage} alt="Cats" />
              </div>
            </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
            <a href="/kanji">
              <div>
                <section className="bg-slate-500">
                  <h3>LEARN KANJI AS FAST AS A NINJA!</h3>
                </section>
                <Image  width="100%" height="auto" src={ninjaImage} alt="Ninja" />
              </div>
            </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
            <a href="/vocabulary">
              <div>
                <section className="bg-slate-500">
                  <h3>START LEARNING VOCABULARY!</h3>
                </section>
                <Image  width="100%" height="auto" src={vocabImage} alt="Vocabulary" />
              </div>
            </a>
        </SwiperSlide>
        <SwiperSlide className="slide">
            <a href="/about">
              <div>
                <section className="bg-slate-500">
                  <h3>WANT MORE INFO? CONTACT WITH US!</h3>
                </section>
                <Image  width="100%" height="auto" src={mouseImage} alt="Mouse" />
              </div>
            </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
