import React from "react";
import "@/public/assets/css/footer.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="user-name">Webstackpros.net</div>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
        <div className="newsletter">
          <div className="newslabel">
            <label htmlFor="email">News Letter</label>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <div className="send-icon">
            <BiMailSend />
          </div>
        </div>

        <div className="footer-links">
          <div className="openweb">
            <div className="opensource">
              <Link href="/">We are opensource</Link>
            </div>
          </div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
        <div className="copyright">
          © 2023 Webstackpros.net. All rights reserved.
        </div>
      </footer>
    </>
  );
}
