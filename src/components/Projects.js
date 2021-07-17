import React from 'react'
import './Projects.css'
import { ChangeTitle } from './Home.js'
import Bloggy from './images/bloggy.png';
import SecuroChat from './images/securochat.png';
import WeatherWizard from './images/weatherwiz.png';
import Todos from './images/todos.png';
import Website from './images/website.png';
import YTClone from './images/ytclone.png';


function Projects() {

    ChangeTitle()

    return (
        <div className="font-sans antialiased">
            <div className="projects">
                <div className="flex flex-col justify-center items-center pt-36 pb-24 lg:px-16 px-6">
                    <p className="projects-header md:text-3xl text-2xl mb-4 font-medium">Projects</p>

                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col mx-3 my-3">
                            <p className="text-xl text-center font-light mb-2">Bloggy</p>
                            <img src={Bloggy} />
                            <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">Python</p>
                                </div>
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">Socket.io</p>
                                </div>
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">PostgreSQL</p>
                                </div>
                            </div>
                        </div>
                        <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col mx-3 my-3">
                            <p className="text-xl text-center font-light mb-2">SecuroChat</p>
                            <img src={SecuroChat} />
                            <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">React.js</p>
                                </div>
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">Node.js</p>
                                </div>
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">Socket.io</p>
                                </div>
                            </div>
                        </div>
                        <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col mx-3 my-3">
                            <p className="text-xl text-center font-light mb-2">Weather Wizard</p>
                            <img src={WeatherWizard} />
                            <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">React.js</p>
                                </div>
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">OpenWeatherMap API</p>
                                </div>
                            </div>
                        </div>
                        <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col mx-3 my-3">
                            <p className="text-xl text-center font-light mb-2">Todos</p>
                            <img src={Todos} />
                            <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">Python</p>
                                </div>
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">HTML/CSS</p>
                                </div>
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">SQLite</p>
                                </div>
                            </div>
                        </div>
                        <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col mx-3 my-3">
                            <p className="text-xl text-center font-light mb-2">This Website</p>
                            <img src={Website} />
                            <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">React.js</p>
                                </div>
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                        <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col mx-3 my-3">
                            <p className="text-xl text-center font-light mb-2">YouTube Clone</p>
                            <img src={YTClone} />
                            <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">React.js</p>
                                </div>
                                <div className="tool p-1 rounded-lg m-1">
                                    <p className="font-light text-center">Firebase</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
