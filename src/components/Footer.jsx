import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

import { Element } from "react-scroll";

import aos from "aos";
import "aos/dist/aos.css";

import bgImg1 from "../images/contactbg1.jpg";
import bgImg2 from "../images/officebg.jpeg";
import bgImg3 from "../images/malaysiabg.jpeg";

import "./Footer.css";
import FormComponent from "./FormComponent";

export default function Footer() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <footer>
        <FormComponent />

        <div className="bottom--container">
          <div className="bottom--info">
            <div className="contact">
              <h2 className="bold--text">Contact Us</h2>
              <p>
                Reach out to us today, and let's kickstart your social presence
                together, guided by our exceptional team.
              </p>
            </div>
            <div className="copyright">
              <p>Copyright By@ SAMP IT - 2024</p>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhfdCxWfzzPRjbDPgqgxXzDLvZsZXwhPXfNvZcNSSngTlZkcqfMbHqZgJkJxWltkwlSV">
                Get Support
              </a>
            </div>
          </div>
          <a className="scroll--top" href="#header">
            <Icon icon="bxs:home" color="#ef3f38" width="50" />
          </a>
        </div>
      </footer>
    </>
  );
}
