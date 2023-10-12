import React from "react";
import ServiceCard from "./servicecard/page";

const services = [
  {
    title: "Web Development",
    description:
      "We create modern and responsive websites tailored to your needs.",
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
    title: "Front-end Development",
    description:
      "We specialize in building interactive and user-friendly interfaces.",
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
    title: "Front-end Development",
    description:
      "We specialize in building interactive and user-friendly interfaces.",
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
    title: "Front-end Development",
    description:
      "We specialize in building interactive and user-friendly interfaces.",
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
