import React from "react";
// import "../assets/css/card.scss";
import "@/public/assets/css/card.scss";

export default function ThirdSection() {
  return (
    <>
      <section className="thirdSection">
        <span className="textgrey">Projects</span>
        <h1>Some of our recent projects</h1>
        <div className="project-cards">
          <div className="project-card">
            <h2>Ecommerce</h2>
            <p>
              Leveraging our expertise across various technologies, we
              successfully resolved a client&apos;s e-commerce challenge. We
              transformed their outdated PHP site by rebuilding it from the
              ground up, using cutting-edge technologies. We replaced legacy
              code with a fresh design implemented in React and powered the
              platform with Django.
            </p>
          </div>
          <div className="project-card">
            <h2>Cybersecurity project</h2>
            <p>
              We have developed a cybersecurity project that includes a malware
              and phishing detection web tool. This tool allows users to scan
              any URL, and our machine learning models determine whether the
              site is safe or not. One of our clients has purchased and
              integrated this project into one of their tools.
            </p>
          </div>
          <div className="project-card">
            <h2>Cloud scanner</h2>
            <p>
              We&apos;ve created a cloud server vulnerability detection tool for
              a cybersecurity company, a challenging project that harnesses the
              power of FastAPI and the flexibility of Django. Our tool
              efficiently detects and fixes server configuration issues,
              ensuring your cloud environment remains secure.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
