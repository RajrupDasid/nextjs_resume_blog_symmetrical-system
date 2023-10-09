import React from "react";
import Image from "next/image"; // Import the Image component from "next/image"
import "@/public/assets/css/fourthsection.scss";
import Nodejs from "@/public/assets/images/nodejs.png";

const FourthSection: React.FC = () => {
  return (
    <>
      <div className="seperatorx">
        <span className="textgrey">Read Some Latest blog</span>
        <h1>Current Status</h1>
      </div>
      <div className="card-container">
        <div className="cardz">
          <div className="card-image">
            <Image
              src={Nodejs}
              alt="Blog Image 1"
              width={400} // Set width and height attributes as needed
              height={300}
            />
          </div>
          <div className="card-content">
            <h2>Blog Post Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod auctor ante, vel interdum ante. Donec ut urna a purus
              bibendum rhoncus.
            </p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
