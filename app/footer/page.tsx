import React from "react";
import "@/public/assets/css/footer.scss";
import { FaSquareBehance, FaInstagram, FaDribbble } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="user-name">Webstackpros.net</div>
        <div className="social-icons">
          <Link href="https://www.behance.net/rajrupdas">
            <FaSquareBehance />
          </Link>
          <Link href="https://dribbble.com/Rajrup_official">
            <FaDribbble />
          </Link>
          <Link href="https://www.instagram.com/rajrupdasofficial/">
            <FaInstagram />
          </Link>
        </div>

        <div className="footer-links">
          <div className="openweb">
            <div className="opensource">
              <Link href="https://github.com/RajrupDasid/nextjs_resume_blog_symmetrical-system">
                We are opensource
              </Link>
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
