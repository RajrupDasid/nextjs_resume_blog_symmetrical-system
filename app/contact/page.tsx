"use client";
import React, { useState } from "react";
import "@/public/assets/css/contact.scss";
// import { Metadata } from "next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export const metadata: Metadata = {
//   title: "Contact us | Webstackpros.net",
//   description:
//     "We are a team of professionals here to turn your digital dreams into reality. You imagine it, and we'll develop it. Thank you for visiting our site.",
// };

const apk = process.env.NEXT_PUBLIC_API_KEY;
const apl = process.env.NEXT_PUBLIC_API_PARAMS;
const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_API_URL;
    const api = `${url}/api/contacts/`;

    try {
      const response = await axios.post(api, formData, {
        timeout: 90000000,
        headers: {
          Authorization: `${apl} ${apk}`,
        },
      });
      // Handle success or error here
      // console.log("API response:", response.data);
      toast.success("Thank you for contacting we will contact with you soon");
      setFormData({
        username: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Handle the API request error
      // console.error("API request error:", error);
      toast.error("Error submitting form. Please try again after some time");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Name:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
