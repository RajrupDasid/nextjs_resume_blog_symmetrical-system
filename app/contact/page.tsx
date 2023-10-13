import React from "react";
import "@/public/assets/css/contact.scss";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact us | Webstackpros.net",
  description:
    "We are a team of professionals here to turn your digital dreams into reality. You imagine it, and we'll develop it. Thank you for visiting our site.",
};
const Contact: React.FC = () => {
  return (
    <>
      <div className="contact-page">
        <div className="contact-content">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14706.224702381181!2d88.33880808585887!3d22.855904187543864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8910f7fc2014d%3A0x90a4118279564abe!2sChandannagar%2C%20West%20Bengal%20712136!5e0!3m2!1sen!2sin!4v1696333720162!5m2!1sen!2sin"
          width="600"
          height="450"
          //   style={{  0} }
          //   allowfullscreen=""
          loading="lazy"></iframe>
      </div> */}
    </>
  );
};

export default Contact;
