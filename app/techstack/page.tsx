import React from "react";
import "@/public/assets/css/buttontechstack.scss";
import { TbBrandPython } from "react-icons/tb";
import { SiCsharp } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
// import { SiBun } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { SiElixir } from "react-icons/si";
export default function TechStack() {
  return (
    <div className="tcontainer">
      <div className="techstack">
        <div className="weapon">
          <span className="textgrey">Our experties</span>
          <h1> We use latest Tech Stacks</h1>
        </div>
        <div className="toptech">
          <div className="top">
            <div className="tech1 icon-container">
              <p>
                <TbBrandNextjs size={40} />
              </p>
            </div>
          </div>
          <div className="top">
            <div className="tech2 icon-container">
              <p>
                <FaNode size={40} />
              </p>
            </div>
          </div>
          <div className="top">
            <div className="tech3 icon-container">
              <TbBrandPython size={40} />
            </div>
          </div>
          <div className="top">
            <div className="tech4 icon-container">
              <SiCsharp size={40} />
            </div>
          </div>
        </div>
        <div className="bottomtech">
          <div className="bottom">
            <div className="tech1 icon-container">
              <p>
                <FaRust size={40} />
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="tech1 icon-container">
              <p>
                <SiElixir size={40} />
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="tech1 icon-container">
              <p>
                <SiGithub size={40} />
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="tech1 icon-container">
              <p>
                <SiMongodb size={40} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
