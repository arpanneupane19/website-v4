import React from "react";
import "./Modal.css";

export function BloggyModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Bloggy</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            Bloggy is a blog-posting platform created using{" "}
            <a href="https://python.org" target="__blank">
              Python
            </a>{" "}
            &{" "}
            <a
              href="https://flask.palletsprojects.com/en/2.0.x/"
              target="__blank"
            >
              Flask
            </a>{" "}
            for the backend and HTML/CSS for the frontend along with{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="__blank"
            >
              JavaScript
            </a>
            . It also uses{" "}
            <a href="https://www.postgresql.org/" target="__blank">
              PostgreSQL
            </a>{" "}
            to store data. It also has its own API for users to display their
            data on other apps.
            <br></br>
            <br></br>
            Users can login/register, make posts, update posts, delete posts,
            comment, like posts, search for users, follow users, and message
            users using{" "}
            <a href="https://socket.io" target="__blank">
              Socket.io
            </a>
            ! Check out the git repository{" "}
            <a
              href="https://github.com/arpanneupane19/bloggy-webapp"
              target="__blank"
            >
              here
            </a>{" "}
            and the app{" "}
            <a href="https://bloggyweb.herokuapp.com" target="__blank">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}

export function ChattrModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Chattr</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            Chattr is a team communication platform. It was created using{" "}
            <a href="https://python.org" target="__blank">
              Python
            </a>{" "}
            &{" "}
            <a
              href="https://flask.palletsprojects.com/en/2.0.x/"
              target="__blank"
            >
              Flask
            </a>{" "}
            for the backend and{" "}
            <a href="https://getuikit.com" target="__blank">
              UIkit
            </a>{" "}
            for the frontend. It also uses{" "}
            <a href="https://www.postgresql.org" target="__blank">
              PostgreSQL
            </a>{" "}
            to store data.
            <br></br>
            <br></br>
            Users can login/register, create teams, invite others, and
            communicate with each other! Check out the git repository{" "}
            <a href="https://github.com/arpanneupane19/Chattr" target="__blank">
              here
            </a>{" "}
            and the app{" "}
            <a href="https://chattrweb.herokuapp.com" target="__blank">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}

export function SecuroChatModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">SecuroChat</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            SecuroChat is a private messaging platform created using{" "}
            <a href="https://reactjs.org" target="__blank">
              React
            </a>{" "}
            &{" "}
            <a href="https://ant.design/" target="__blank">
              Ant Design
            </a>{" "}
            for the frontend,{" "}
            <a href="https://socket.io" target="__blank">
              Socket.io
            </a>{" "}
            for chatting, and{" "}
            <a href="https://nodejs.org" target="__blank">
              Node.js
            </a>{" "}
            for the backend.
            <br></br>
            <br></br>
            Users can create chat rooms and invite friends to join and chat with
            them. There are also pop-up notifications for certain events
            happening in the chat room. Check out the git repository{" "}
            <a
              href="https://github.com/arpanneupane19/SecuroChat"
              target="__blank"
            >
              here
            </a>{" "}
            and the app{" "}
            <a href="https://securochat.herokuapp.com/" target="__blank">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}

export function WeatherWizModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Weather Wizard</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            Weather Wizard is a weather app created using{" "}
            <a href="https://reactjs.org" target="__blank">
              React
            </a>{" "}
            for the web version and{" "}
            <a href="https://reactnative.dev" target="__blank">
              React Native
            </a>{" "}
            for the mobile version. It uses the{" "}
            <a href="https://openweathermap.org/api" target="__blank">
              OpenWeatherMap API
            </a>{" "}
            to retrieve weather data.
            <br></br>
            <br></br>
            You can enter in any city and the app will instantly return the
            weather data for that city. There's also a Recents page where you
            can view recent searches. Check out the web version{" "}
            <a href="https://weatherwiz.herokuapp.com" target="__blank">
              here
            </a>{" "}
            and the mobile version{" "}
            <a href="https://expo.dev/@arpanneupane/weather-wizard">here</a>!
            The git repository for the{" "}
            <a
              href="https://github.com/arpanneupane19/Weather-Wizard-Web"
              target="__blank"
            >
              web app
            </a>{" "}
            and the git repository for the{" "}
            <a
              href="https://github.com/arpanneupane19/Weather-Wizard-Mobile"
              target="__blank"
            >
              mobile app
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export function TodosModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Todos</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            Todos is an app you can use to manage tasks. It was created using{" "}
            <a href="https://python.org" target="__blank">
              Python
            </a>{" "}
            &{" "}
            <a
              href="https://flask.palletsprojects.com/en/2.0.x/"
              target="__blank"
            >
              Flask
            </a>{" "}
            for the backend and HTML/CSS for the frontend. It uses{" "}
            <a href="https://www.postgresql.org/" target="__blank">
              PostgreSQL
            </a>{" "}
            to store data.
            <br></br>
            <br></br>
            Users can login/register, create tasks, edit tasks, mark tasks as
            completed, and delete tasks. Check out the git repository{" "}
            <a href="https://github.com/arpanneupane19/Todos" target="__blank">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}

export function SiteModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">This Website</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            This is the fourth iteration of my personal website. I built this
            website using{" "}
            <a href="https://reactjs.org" target="__blank">
              React
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com/" target="__blank">
              Tailwind CSS
            </a>
            . Check out the git repository{" "}
            <a
              href="https://github.com/arpanneupane19/website-v4"
              target="__blank"
            >
              here
            </a>
            !<br></br>
            <br></br>
            <a href="mailto:arpanneupane19@gmail.com" target="__blank">
              Feel free to leave any feedback!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export function YTModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">YouTube Clone</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            This is a YouTube frontend clone. It looks similar to what you would
            see on the YouTube home page. I did this project to expand my skills
            with{" "}
            <a href="https://reactjs.org" target="__blank">
              React
            </a>
            .<br></br>
            <br></br>
            This was created using{" "}
            <a href="https://reactjs.org" target="__blank">
              React
            </a>{" "}
            and was deployed to{" "}
            <a href="https://firebase.google.com/" target="__blank">
              Firebase
            </a>{" "}
            for hosting. Check out the git repository{" "}
            <a
              href="https://github.com/arpanneupane19/youtube-clone"
              target="__blank"
            >
              here
            </a>{" "}
            and the app{" "}
            <a href="https://clone-46a97.firebaseapp.com/" target="__blank">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}
