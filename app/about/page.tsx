import React from "react";
import "@/public/assets/css/about.scss";
import coder from "@/public/assets/images/coder.jpeg";
import Image from "next/image";
import type { Metadata } from "next";
import TechStack from "../techstack/page";
import ServiceCard from "./sitecard/servicecard";

export const metadata: Metadata = {
  title: "Webstackpros.net | About Us",
  description:
    "Webstackpros.net about us - Who we are? what we do? What is our motto ? Get full information about our workflows follow us on github",
};
const services = [
  {
    title: "Security System",
    description:
      "We have experience developing robust security system that can prevent cloud to application exploit",
    imageUrl:
      "https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png", // Add the path to your image
  },
  {
    title: "Ecommerce Management with CMS",
    description: "We took experties making of automatic ecommerce application",
    imageUrl:
      "https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png", // Add the path to your image
  },
  {
    title: "Phishing detection tool",
    description:
      "We have develop phishing and malware detection tool that can help to prevent any users from going into phishing or malware website",
    imageUrl:
      "https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png", // Add the path to your image
  },
  {
    title: "Opensource contribution",
    description:
      "We have developed and contributed to opensource projects to help opensource users and members",
    imageUrl:
      "https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png", // Add the path to your image
  },
  {
    title: "Machine Learning and Analytics",
    description:
      "We have develop complex machinelearning model that can detect cloud configuration issues prior any exploit breach the system",
    imageUrl:
      "https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png", // Add the path to your image
  },
  // Add more services as needed
];
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
      <hr className="hori" />
      <div className="py-10">
        <TechStack />
      </div>
      <hr className="hori" />
      <section className="dessec">
        <div className="below">
          <div className="services-page">
            <h1>Our Services</h1>
            <div className="service-cards">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
