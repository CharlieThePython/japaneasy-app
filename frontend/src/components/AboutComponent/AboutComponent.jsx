"use client";

import Image from "next/image";

//Images
import twitterIco from "@/src/images/global/twitter.svg";
import facebookIco from "@/src/images/global/facebook.svg";
import instagramIco from "@/src/images/global/instagram.svg";

//Styles
import "@/src/styles/Hiragana.css";
import Link from "next/link";

function AboutComponent() {
  return (
    <>
      <div className="about-form-box-container flex justify-center">
        <section className="about-form-section-container flex shadow-2xl rounded-xl">
          <h2 className="about-form-section-container-h2">CONTACT US</h2>
          <form
            className="form-box"
            action={"https://formspree.io/f/xnqekdgj"}
            method="POST"
          >
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="form-input shadow-xl"
                name="name"
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                className="form-input shadow-xl"
                name="email"
                placeholder="tanakasan@gmail.com"
                required
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="How you managed to make this outstanding website?"
                className="about-form-textarea shadow-xl"
                required
              ></textarea>
            </div>
            <button type="submit" className="rounded-2xl shadow-xl">
              SUBMIT
            </button>
          </form>
        </section>
      </div>
      <div className="info-box">
        <h2>FOLLOW US FOR MORE | フォローしてね !</h2>
      </div>
      <div className="about-div flex justify-around">
        <section className="about-section rounded-full bg-red-300 shadow-xl animated">
          <Link href="https://x.com/japaneasylearn" target="_blank">
            <Image
              src={twitterIco}
              alt="twitter icon"
              className="about-icons"
            />
          </Link>
        </section>
        <section className="about-section rounded-full bg-red-300 shadow-xl animated">
          <Link
            href="https://www.facebook.com/profile.php?id=61560014206955"
            target="_blank"
          >
            <Image
              src={facebookIco}
              alt="facebook icon"
              className="about-icons"
            />
          </Link>
        </section>
        <section className="about-section rounded-full bg-red-300 shadow-xl animated">
          <Link
            href="https://www.instagram.com/japaneasylearning/"
            target="_blank"
          >
            <Image
              src={instagramIco}
              alt="instagram icon"
              className="about-icons"
            />
          </Link>
        </section>
      </div>
    </>
  );
}

export default AboutComponent;
