"use client";
import React from "react";
import "@/public/assets/css/about.scss";
import coder from "@/public/assets/images/coder.jpeg";
// import Footer from "../footer/page";
import Image from "next/image";
export default function About() {
  return (
    <>
      <header className="abouttop">
        <div className="aboutme">About Me :</div>
      </header>
      <section className="firstabout">
        <div className="circular--landscape">
          <Image src={coder} alt="coder" />
        </div>
        <div className="rightabout">
          <h1>My Name is Rajrup Das</h1>
          <p>
            <span className="leamon">
              I am a professional Fullstack Engineer
            </span>
          </p>
        </div>
      </section>
      <section className="dessec">
        <div className="below">
          <div className="boxx">
            <div className="cardp">
              <div className="descrip">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  nisi neque iure praesentium in, laudantium itaque
                  necessitatibus doloremque enim ratione facilis veniam
                  similique facere sed, omnis porro quisquam blanditiis tenetur!
                </p>
              </div>
            </div>
          </div>
          <div className="onthe">
            <div className="boxx2">
              <div className="cardp">
                <div className="descrip">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit nisi neque iure praesentium in, laudantium itaque
                    necessitatibus doloremque enim ratione facilis veniam
                    similique facere sed, omnis porro quisquam blanditiis
                    tenetur!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
