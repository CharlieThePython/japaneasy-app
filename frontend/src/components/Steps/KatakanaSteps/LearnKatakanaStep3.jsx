"use client";

import { katakanaMapStep3 } from "../../../kanas/kanas";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/src/styles/Learn.css";
import "@/src/styles/Hiragana.css";
import "../../../styles/LearnHiragana.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function LearnKatakanaStep3() {
  scroll(0, 0);
  return (
    <div  className="main-step-body">
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
        {katakanaMapStep3.map((element, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="card-box animated">
                <section id="kana-card-box">
                  <div className="kana-box card-box">
                    {element.character[0]}
                  </div>
                  <span className="small-text">
                    {element.character[3]}
                    {element.character[4] !== ")" && element.character[4]}
                    {element.character[5] !== ")" && element.character[5]}
                  </span>
                </section>
              </div>

              <p className="description-box bg-red-400 rounded-xl">
                {element.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LearnKatakanaStep3;
