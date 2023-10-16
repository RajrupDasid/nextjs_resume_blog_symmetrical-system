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
    title: "Ecommerce",
    description:
      "We specialize in building interactive and customer engaging Ecommerce sites for clients",
    imageUrl:
      "https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png", // Add the path to your image
  },
  {
    title: "Front-end Development",
    description:
      "We specialize in building interactive and user-friendly interfaces.",
    imageUrl:
      "https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png", // Add the path to your image
  },
  {
    title: "Devops",
    description:
      "We specialize in managing and developing complex cicd pipeline for complex projecs",
    imageUrl:
      "https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png", // Add the path to your image
  },
  {
    title: "Machine Learning and Analytics",
    description:
      "We specialize in building large machine learning models that can be used with any applications",
    imageUrl:
      "https://www.crio.do/blog/content/images/2021/04/Full-stack-development-blueprint.png", // Add the path to your image
  },
  // Add more services as needed
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <div className="services-page">
        <h1>Our Services</h1>
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
