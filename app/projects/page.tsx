import React from "react";
import ServiceCard from "./servicecard/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Projects | Webstackpros.net",
  description:
    "We are a team of professionals here to turn your digital dreams into reality. You imagine it, and we'll develop it. Thank you for visiting our site.",
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
    description:
      "We have build a full operational ecommerce management system.",
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

const ServicesPage: React.FC = () => {
  return (
    <>
      <div className="services-page">
        <h1>Our Projects</h1>
        <div className="service-cards">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
