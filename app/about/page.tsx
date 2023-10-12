import React from "react";
import "@/public/assets/css/about.scss";
import coder from "@/public/assets/images/coder.jpeg";
import Image from "next/image";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About us | Webstackpros.net",
  description:
    "We are a team of professionals here to turn your digital dreams into reality. You imagine it, and we'll develop it. Thank you for visiting our site.",
};
export default function About() {
  return (
    <>
      <header className="abouttop">
        <div className="aboutme">About Us :</div>
      </header>
      <section className="firstabout">
        <div className="circular--landscape">
          <Image src={coder} alt="coder" />
        </div>
        <div className="rightabout">
          <h1>Hello from Webstackpros team</h1>
          <p>
            <span className="leamon">
              We are a team of professional engineers
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
                  Unlocking Innovative Solutions with Webstackpros Professional
                  Engineers: Trust in our expert team of engineers to transform
                  your vision into reality. With a wealth of experience,
                  cutting-edge technology, and a commitment to excellence, we
                  design and deliver solutions that exceed expectations. From
                  concept to completion, our engineering prowess ensures your
                  project&aposs success. Partner with us for precision, quality,
                  and reliability in every endeavor.
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
