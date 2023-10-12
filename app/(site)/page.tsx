"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import softwareDevelopment from "../../public/assets/images/software-development.png";
import "@/public/assets/css/master.scss";
import "@/public/assets/css/loader.scss";
import SecondSection from "../secondsection/page";
import TechStack from "../techstack/page";
import ThirdSection from "../thirdsection/page";
import FourthSection from "../fourthsection/page";

export default function Home() {
  return (
    <>
      <main>
        <section className="firstSection">
          <div className="leftSection">
            Greetings
            <span className="purple">Visitors</span>
            <div>We are here to achieve </div>
            <span className="mxxu">your digital dreams</span>
          </div>
          <div className="rightSection">
            <Image src={softwareDevelopment} alt="softwaredevelopment" />
          </div>
        </section>
        <hr />
        <section className="techsection">
          <TechStack />
        </section>
        <hr />
        <SecondSection />
        <hr />

        <ThirdSection />

        <hr />
        <section className="fourthSection">
          <FourthSection />
        </section>
        <hr />
      </main>
    </>
  );
}
