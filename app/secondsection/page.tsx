import React from "react";
import Developer from "@/public/assets/images/developer.webp";
import Image from "next/image";
import "@/public/assets/css/master.scss";
const SecondSection: React.FC = () => {
  return (
    <section className="secondSection">
      <span className="textgrey">What I have done till now</span>
      <h1>Work Experience</h1>
      <div className="box">
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">
            Fullstack Development (2020 SEP - Now)
          </div>
          <div className="verticle-desc">
            I had worked in 3 different companies as Fullstack Developer. As a
            Fullstack developer I have used React and Django as my primary tech
            stack.
          </div>
        </div>
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">
            Fullstack Development (2020 SEP - Now)
          </div>
          <div className="verticle-desc">
            I had worked in 3 different companies as Fullstack Developer. As a
            Fullstack developer I have used React and Django as my primary tech
            stack.
          </div>
        </div>
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">
            Fullstack Development (2020 SEP - Now)
          </div>
          <div className="verticle-desc">
            I had worked in 3 different companies as Fullstack Developer. As a
            Fullstack developer I have used React and Django as my primary tech
            stack.
          </div>
        </div>
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">
            Fullstack Development (2020 SEP - Now)
          </div>
          <div className="verticle-desc">
            I had worked in 3 different companies as Fullstack Developer. As a
            Fullstack developer I have used React and Django as my primary tech
            stack.
          </div>
        </div>
        {/* <div className="vertical">
          <img src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">
            Fullstack Development (2020 SEP - Now)
          </div>
          <div className="verticle-desc">
            I had worked in 3 different companies as Fullstack Developer. As a
            Fullstack developer I have used React and Django as my primary tech
            stack.
          </div>
        </div>
        <div className="vertical">
          <img src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">
            Fullstack Development (2020 SEP - Now)
          </div>
          <div className="verticle-desc">
            I had worked in 3 different companies as Fullstack Developer. As a
            Fullstack developer I have used React and Django as my primary tech
            stack.
          </div>
        </div>
        <div className="vertical">
          <img src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">
            Fullstack Development (2020 SEP - Now)
          </div>
          <div className="verticle-desc">
            I had worked in 3 different companies as Fullstack Developer. As a
            Fullstack developer I have used React and Django as my primary tech
            stack.
          </div>
        </div> */}
      </div>

      <div className="mobile-box">
        <div className="vertical">
          <Image src={Developer} alt="developer" className="image-top" />
          <div className="vertical-title">
            <h5>Fullstack Development (2020 SEP - Now)</h5>
          </div>
          <div className="verticle-desc">
            <p>
              I had worked in 3 different companies as Fullstack Developer. As a
              Fullstack developer I have used React and Django as my primary
              tech stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SecondSection;
