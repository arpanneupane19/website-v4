import React from "react";
import { ChangeTitle } from "./Home.js";
import {
  AiFillYoutube,
  AiFillMail,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./Contact.css";
import Tooltip from "@material-ui/core/Tooltip";

function Contact() {
  ChangeTitle();

  return (
    <div className="font-sans antialiased bg-white">
      <div className="projects">
        <div className="flex flex-col justify-center items-center pt-36 pb-24 lg:px-16 px-6">
          <p className="contact-header md:text-3xl text-2xl mb-4 font-medium">
            Contact Me
          </p>
          <div className="contact-links flex flex-row text-center">
            <Tooltip title="Email">
              <div className="contact-item email my-2 mx-2 text-3xl">
                <a href="mailto:arpanneupane19@gmail.com" target="__blank">
                  <AiFillMail />
                </a>
              </div>
            </Tooltip>

            <Tooltip title="GitHub">
              <div className="contact-item github my-2 mx-2 text-3xl">
                <a href="https://github.com/arpanneupane19" target="__blank">
                  <AiFillGithub />
                </a>
              </div>
            </Tooltip>

            <Tooltip title="YouTube">
              <div className="contact-item youtube my-2 mx-2 text-3xl">
                <a
                  href="https://youtube.com/ArpanNeupaneProductions"
                  target="__blank"
                >
                  <AiFillYoutube />
                </a>
              </div>
            </Tooltip>

            <Tooltip title="Twitter">
              <div className="contact-item twitter my-2 mx-2 text-3xl">
                <a href="https://twitter.com/arpanneupane07" target="__blank">
                  <AiFillTwitterCircle />
                </a>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
