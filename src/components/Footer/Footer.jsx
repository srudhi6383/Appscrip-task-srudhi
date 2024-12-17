"use client";
import React, { useState } from "react";
import Image from "next/image";
import GpayIcon from "../../../public/icons/g-pay.svg";
import MasterCardIcon from "../../../public/icons/mastercard.svg";
import OpayIcon from "../../../public/icons/Opay.svg";
import PayPalIcon from "../../../public/icons/paypal.svg";
import AmexIcon from "../../../public/icons/amex.svg";
import ApplePayIcon from "../../../public/icons/apple-pay.svg";
import LangIcon from "../../../public/icons/Language.svg";
import Arrow from "../../../public/icons/arrow-right.svg";
import InstaIcon from "../../../public/icons/Insta.svg";
import LinkedInIcon from "../../../public/icons/linkedin.svg";

import "./Footer.css";

const Footer = () => {
  const [mettaMuse, setMettaMuse] = useState(false);
  const [quickLinks, setQuickLinks] = useState(false);
  const [followUs, setFollowUs] = useState(false);

  return (
    <footer>
      <div>
        <div className="letterAndcontact">
          <div className="newsLetter">
            <p className="footHead">Be the first to know</p>
            <p>Sign up for updates from mettā muse.</p>
            <div className="inputsBtn">
              <input type="email" placeholder="Enter your e-mail..." />
              <button className="subscribeBtn">Subscribe</button>
            </div>
          </div>

          <div className="contactDetails">
            <div className="contactUs">
              <p className="footHead">Contact Us</p>
              <div className="contactUsdetails">
                <p>+44 221 133 5360</p>
                <span className="diamond mdsrc">&diams;</span>
                <p>customercare@mettamuse.com</p>
              </div>
            </div>
            <div className="currency">
              <p className="footHead">Currency</p>
              <Image src={LangIcon} alt="Language Icon" />
              <p className="smallText lgsrc">
                Transactions will be completed in Euros, and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="actionsLinksContainer">
          {/* Metta Muse Links */}
          <div className="mettaMuse lgsrc">
            <div className="footHeadCont">
              <p className="metta-muse">mettā muse</p>
            </div>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className="mettaMuse mdsrc">
            <div
              className="footHeadCont"
              onClick={() => setMettaMuse((prev) => !prev)}
            >
              <p className="metta-muse">mettā muse</p>
              <Image
                src={Arrow}
                alt="Arrow Icon"
                height={20}
                width={20}
                style={{
                  transform: mettaMuse ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.15s ease-in-out",
                }}
              />
            </div>
            {mettaMuse && (
              <ul className="mt20">
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            )}
          </div>

          {/* Quick Links */}
          <div className="quickLinks lgsrc">
            <div className="footHeadCont">
              <p className="footHead">Quick Links</p>
            </div>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="quickLinks mdsrc">
            <div
              className="footHeadCont"
              onClick={() => setQuickLinks((prev) => !prev)}
            >
              <p className="footHead">Quick Links</p>
              <Image
                src={Arrow}
                alt="Arrow Icon"
                height={20}
                width={20}
                style={{
                  transform: quickLinks ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.15s ease-in-out",
                }}
              />
            </div>
            {quickLinks && (
              <ul className="mt20">
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            )}
          </div>
        </div>

        {/* Social Media and Payment Options */}
        <div className="socialAndPayments">
          <div className="socialMedia">
            <div
              className="footHeadCont"
              onClick={() => setFollowUs((prev) => !prev)}
            >
              <p className="footHead">Follow Us</p>
              <Image
                src={Arrow}
                alt="Arrow Icon"
                height={20}
                width={20}
                style={{
                  transform: followUs ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.15s ease-in-out",
                }}
              />
            </div>
            {followUs && (
              <div className="socialIcons">
                <Image src={InstaIcon} alt="Instagram Icon" />
                <Image src={LinkedInIcon} alt="LinkedIn Icon" />
              </div>
            )}
          </div>

          <div className="paymentOptions">
            <p className="footHead">mettā muse ACCEPTS</p>
            <div className="paymentIcons">
              <Image src={GpayIcon} alt="Google Pay Icon" />
              <Image src={MasterCardIcon} alt="MasterCard Icon" />
              <Image src={PayPalIcon} alt="PayPal Icon" />
              <Image src={AmexIcon} alt="Amex Icon" />
              <Image src={ApplePayIcon} alt="Apple Pay Icon" />
              <Image src={OpayIcon} alt="Opay Icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
