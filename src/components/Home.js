import React, { useState, useEffect } from "react";
import homeImg from "./images/home-image.gif";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useLocation } from "react-router-dom";

export function ChangeTitle() {
  const location = useLocation();

  if (location.hash === "#about") {
    document.title = "Arpan Neupane - About";
  } else if (location.pathname === "/projects") {
    document.title = "Arpan Neupane - Projects";
  } else if (location.pathname === "/contact") {
    document.title = "Arpan Neupane - Contact";
  } else {
    document.title = "Arpan Neupane";
  }
}

function Home() {
  ChangeTitle();
  const [age, setAge] = useState(0)
  const [copyright, setCopyright] = useState('')

  useEffect(() => {
    const miliseconds = new Date() - new Date('11/03/2007')
    setAge(Math.floor(miliseconds / 1000 / 60 / 60 / 24 / 365))

    const year = new Date().getFullYear()
    setCopyright(year)
  }, [])

  // Strings for typewriter effect
  const strings = [
    "software development.",
    "music.",
    "content creation.",
    "business.",
  ];

  return (
    <div className="font-sans antialiased relative bg-white">
      <section id="home">
        <div className="flex lg:flex-row flex-col justify-evenly items-center lg:px-32 px-8 pt-40">
          <div className="intro-header lg:text-left text-center">
            <p className="lg:text-3xl md:text-2xl text-xl font-medium">
              Hi! I am
            </p>
            <p className="lg:text-4xl md:text-3xl text-2xl font-bold tracking-wide">
              ARPAN NEUPANE.
            </p>
            <p className="lg:text-xl md:text-lg text-base mt-2 font-light">
              I'm a programmer with a passion for{" "}
              <Typewriter
                options={{ strings: strings, autoStart: true, loop: true }}
              />
            </p>
          </div>
          <div className="gif">
            <img src={homeImg} alt="programmer-gif" width="500" />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex md:flex-row flex-col justify-between lg:px-16 px-6 pt-36 md:pb-24 sm:pb-28 pb-36">
          <div className="p-4 md:w-1/2 w-1/1 md:mx-4 md:mb-0 mb-6">
            <p className="about-header md:text-3xl text-2xl mb-4 font-medium">
              About Me
            </p>
            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
              Hello there! My name is Arpan Neupane and I am a {age}-year-old
              programmer. I enjoy creating apps and websites that can express my creativity and to build meaningful products.{" "}
            </p>
            <br></br>
            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
              During my free time, I create content surrounding technology and
              programming on{" "}
              <a
                href="https://youtube.com/c/ArpanNeupaneProductions"
                target="__blank"
              >
                YouTube
              </a>
              . When I'm not programming or making content, you can find me playing the guitar, spending time with people, cooking, or reading. I'm also an author at{" "}
              <a href="https://themorningnews.com/news/author/arpanneupane/" target="__blank">
                TheMorningNews
              </a>
              .
            </p>
            <br></br>
            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
              I'm always looking forward to learning new technologies and improving
              my work in any way possible. If you want to contact me regarding any of my products, any ideas, or just want to chat,
              you're welcome to email me at{" "}
              <a href="mailto:arpanneupane19@gmail.com" target="__blank">
                arpanneupane19@gmail.com
              </a>
              .
            </p>
          </div>
          <div className="p-4 md:w-1/2 w-1/1 md:mx-4">
            <p className="about-header md:text-3xl text-2xl mb-4 font-medium">
              Skills
            </p>
            <div className="lang-and-fw flex flex-col flex-wrap">
              {/* LANGUAGES */}
              <div className="languages mb-4">
                <p className="text-xl mb-2">Languages</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Python</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">JavaScript</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">HTML/CSS</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1">
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">TypeScript</p>
                  </div>
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">SQL</p>
                  </div>
                </div>

                {/* BEGINNER ROW */}
                <div className="beginner-row flex flex-wrap">
                  <div className="p-1 beginner rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Java</p>
                  </div>
                </div>
              </div>

              {/* FRAMEWORKS/LIBRARIES */}
              <div className="frameworks mb-4">
                <p className="text-xl mb-2">Frameworks/Libraries</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">React</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Flask</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Node</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Tailwind</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">UIkit</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1">
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">React Native</p>
                  </div>
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Chakra UI</p>
                  </div>
                </div>

                {/* BEGINNER ROW */}
                <div className="beginner-row flex flex-wrap">
                </div>
              </div>

              {/* Tools */}
              <div className="tools mb-4">
                <p className="text-xl mb-2">Tools</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Visual Studio Code</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Git</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Canva</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1">
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">MongoDB</p>
                  </div>
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Figma</p>
                  </div>

                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Autodesk Fusion 360</p>
                  </div>
                </div>

                {/* BEGINNER ROW */}
                <div className="beginner-row flex flex-wrap">
                  <div className="p-1 beginner rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Xcode</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ending-msg font-light text-center absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center">
        <p>Created with ❤️ by Arpan Neupane.</p>
        <p>© {copyright} Arpan Neupane. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
