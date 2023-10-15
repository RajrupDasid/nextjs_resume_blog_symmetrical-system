import React from "react";
import "@/public/assets/css/about.scss";
import coder from "@/public/assets/images/coder.jpeg";
import Image from "next/image";
import type { Metadata } from "next";
import { NextSeo } from "next-seo";

export const metadata: Metadata = {
  title: "Webstackpros.net | About Us",
  description:
    "Webstackpros.net about us - Who we are? what we do? What is our motto ? Get full information about our workflows follow us on github",
};
/*
  <NextSeo
        title="Webstackpros.net| about us"
        description="Webstackpros.net about us - Who we are? what we do? What is our motto ? Get full information about our workflows follow us on github"
        canonical="https://www.webstackpros.net/about"
        openGraph={{
          url: "https://www.webstackpros.net/about",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.webstackpros.net/image.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "Webstackpros.net",
        }}
        twitter={{
          handle: "@webstackpros",
          site: "@main",
          cardType: "summary_large_image",
        }}
      />
*/
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
                    Open Source - We love open source and support opensource
                    projects such as Linux Kernel,Python,Django,Nextjs and many
                    more.In our opinion opensource is the backbone of our
                    mordern techlife. We don&apos;t so much time to contribute
                    in all of them logically , but we alaws try to raise bugs
                    and possible fixes in their github or gitlab (depends)
                    repository if any of appear in our use case . We love open
                    source soo much that our website and much of our projects is
                    opensourced on github. You can check contribute or even use
                    them in your personal projects.
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
