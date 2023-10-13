import React from "react";
import Developer from "@/public/assets/images/developer.webp";
import Image from "next/image";
import "@/public/assets/css/master.scss";
const SecondSection: React.FC = () => {
  return (
    <section className="secondSection">
      <span className="textgrey">Our surveys</span>
      <h1>Our surverys</h1>
      <div className="box">
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">Growth of digital presence</div>
          <div className="verticle-desc">
            Technology growth has been increasing since the early 1980s. After
            the advent of the internet, people began creating an online
            presence. Initially, they created their own websites using different
            programming languages such as C++, Perl. However, with the evolution
            of PHP and WordPress, technology and internet usage have been
            skyrocketing every year. Nowadays, most websites are powered by PHP,
            and since we established [our business], we have been receiving a
            high volume of requests to develop custom websites for online
            presence, which is very important in today&apos;s digital age.
          </div>
        </div>
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">Technology improvements</div>
          <div className="verticle-desc">
            Necessity is the mother of invention, and whenever someone creates
            something out of necessity, such as computers, remarkable
            innovations occur. Computers were initially developed to automate
            complex calculations that once required many people and days of
            effort, often resulting in error-prone outcomes. The evolution of
            computers began in the early 1970s, transforming from large,
            house-like machines to the compact devices we can now hold in our
            fingertips. Everything has been driven by necessity and curiosity.
          </div>
        </div>
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">Programming languages</div>
          <div className="verticle-desc">
            Programming languages have come a long way, offering enhanced
            productivity and versatility. They&apos;ve evolved with better
            syntax, extensive libraries, and support for parallel processing.
            These improvements empower developers to create faster, more robust,
            and innovative software solutions for an ever-expanding range of
            applications.
          </div>
        </div>
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">Cloud technology</div>
          <div className="verticle-desc">
            In the 1990s, cloud technology was in its infancy, with limited
            capabilities and storage. Today, it&apos;s a powerhouse, offering
            scalable, on-demand resources, revolutionizing how we store,
            process, and access data. The growth in cloud technology has enabled
            businesses and individuals to harness the full potential of the
            digital age.
          </div>
        </div>
      </div>

      <div className="mobile-box">
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">
            <h5>AI & Robots</h5>
          </div>
          <div className="verticle-desc">
            <p>
              Since the early 1990s, AI and robotics have undergone a remarkable
              evolution. We&apos;ve shifted from basic rule-based systems to
              advanced machine learning and neural networks. Robots have become
              more autonomous, agile, and integrated into various industries,
              from manufacturing to healthcare. The future promises even greater
              strides in AI and robotics, with potential impacts on society and
              the workforce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SecondSection;
