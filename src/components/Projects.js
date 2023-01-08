import React, { useState } from "react";
import "./Projects.css";
import { ChangeTitle } from "./Home.js";
import Bloggy from "./images/bloggy.png";
import Chattr from "./images/chattr.png";
import PodMaster from "./images/podmaster.png";
import NodeLink from "./images/nodelink.png";
import PasswordProtect from "./images/password-protect.png";
import WeatherWizard from "./images/weatherwiz.png";
import SecuroChat from "./images/securochat.png";
import Todos from "./images/todos.png";
import Website from "./images/website.png";
import {
  BloggyModal,
  ChattrModal,
  PodMasterModal,
  NodeLinkModal,
  PasswordProtectModal,
  WeatherWizModal,
  SecuroChatModal,
  TodosModal,
  SiteModal,
} from "./Modal";

function Projects() {
  ChangeTitle();

  // Bloggy hooks
  const [showBloggy, setShowBloggy] = useState(false);
  const closeBloggy = () => setShowBloggy(false);

  // Chattr hooks
  const [showChattr, setShowChattr] = useState(false);
  const closeChattr = () => setShowChattr(false);

  // PodMaster hooks
  const [showPodMaster, setShowPodMaster] = useState(false);
  const closePodMaster = () => setShowPodMaster(false);

  // NodeLink hooks
  const [showNodeLink, setShowNodeLink] = useState(false);
  const closeNodeLink = () => setShowNodeLink(false);

  // Password Protect hooks
  const [showPasswordProtect, setShowPasswordProtect] = useState(false);
  const closePasswordProtect = () => setShowPasswordProtect(false);

  // Weather Wizard hooks
  const [showWeather, setShowWeather] = useState(false);
  const closeWeather = () => setShowWeather(false);

  // SecuroChat hooks
  const [showSecuroChat, setShowSecuroChat] = useState(false);
  const closeSecuroChat = () => setShowSecuroChat(false);

  // Todos hooks
  const [showTodos, setShowTodos] = useState(false);
  const closeTodos = () => setShowTodos(false);

  // Site hooks
  const [showSite, setShowSite] = useState(false);
  const closeSite = () => setShowSite(false);

  return (
    <div className="font-sans antialiased bg-white">
      {showBloggy ||
        showChattr ||
        showPodMaster ||
        showNodeLink ||
        showPasswordProtect ||
        showWeather ||
        showSecuroChat ||
        showTodos ||
        showSite ? (
        <div
          onClick={() =>
            setShowBloggy(false) ||
            setShowChattr(false) ||
            setShowPodMaster(false) ||
            setShowNodeLink(false) ||
            setShowPasswordProtect(false) ||
            setShowWeather(false) ||
            setShowSecuroChat(false) ||
            setShowTodos(false) ||
            setShowSite(false)
          }
          className="backdrop"
        ></div>
      ) : null}
      <div className="projects">
        <div className="flex flex-col justify-center items-center pt-36 pb-24 lg:px-16 px-6">
          <p className="projects-header md:text-3xl text-2xl mb-4 font-medium">
            Projects
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowBloggy(true)}
            >
              <p className="text-xl text-center font-light mb-2">Bloggy</p>
              <img src={Bloggy} alt="Bloggy" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Python</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Socket.io</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">PostgreSQL</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowChattr(true)}
            >
              <p className="text-xl text-center font-light mb-2">Chattr</p>
              <img src={Chattr} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Python</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Socket.io</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">UIkit</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowPodMaster(true)}
            >
              <p className="text-xl text-center font-light mb-2">PodMaster</p>
              <img src={PodMaster} alt="PodMaster" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Python</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Tailwind CSS</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowNodeLink(true)}
            >
              <p className="text-xl text-center font-light mb-2">NodeLink</p>
              <img src={NodeLink} alt="NodeLink" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Node</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Tailwind CSS</p>
                </div>
              </div>
            </div>

            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowSecuroChat(true)}
            >
              <p className="text-xl text-center font-light mb-2">
                SecuroChat
              </p>
              <img src={SecuroChat} alt="SecuroChat" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Node</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Socket.io</p>
                </div>
              </div>
            </div>

            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowWeather(true)}
            >
              <p className="text-xl text-center font-light mb-2">
                Weather Wizard
              </p>
              <img src={WeatherWizard} alt="Weather Wizard" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React Native</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Expo</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowPasswordProtect(true)}
            >
              <p className="text-xl text-center font-light mb-2">
                Password Protect
              </p>
              <img src={PasswordProtect} alt="Password Protect" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React Native</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Expo</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowSite(true)}
            >
              <p className="text-xl text-center font-light mb-2">
                This Website
              </p>
              <img src={Website} alt="Website" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Tailwind CSS</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowTodos(true)}
            >
              <p className="text-xl text-center font-light mb-2">Todos</p>
              <img src={Todos} alt="Todos" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Python</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">HTML/CSS</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BloggyModal showModal={showBloggy} closeModal={closeBloggy} />
      <ChattrModal showModal={showChattr} closeModal={closeChattr} />
      <PodMasterModal showModal={showPodMaster} closeModal={closePodMaster} />
      <NodeLinkModal showModal={showNodeLink} closeModal={closeNodeLink} />
      <PasswordProtectModal
        showModal={showPasswordProtect}
        closeModal={closePasswordProtect}
      />
      <WeatherWizModal showModal={showWeather} closeModal={closeWeather} />
      <SecuroChatModal
        showModal={showSecuroChat}
        closeModal={closeSecuroChat}
      />
      <TodosModal showModal={showTodos} closeModal={closeTodos} />
      <SiteModal showModal={showSite} closeModal={closeSite} />
    </div>
  );
}

export default Projects;
