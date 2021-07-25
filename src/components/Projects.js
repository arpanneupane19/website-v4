import React, { useState } from 'react'
import './Projects.css'
import { ChangeTitle } from './Home.js'
import Bounce from 'react-reveal/Bounce'
import Bloggy from './images/bloggy.png';
import SecuroChat from './images/securochat.png';
import WeatherWizard from './images/weatherwiz.png';
import Todos from './images/todos.png';
import Website from './images/website.png';
import YTClone from './images/ytclone.png';
import { BloggyModal, SecuroChatModal, WeatherWizModal, TodosModal, SiteModal, YTModal } from './Modal'

function Projects() {

    ChangeTitle()

    // Bloggy hooks
    const [showBloggy, setShowBloggy] = useState(false);
    const closeBloggy = () => setShowBloggy(false);

    // SecuroChat hooks
    const [showSecuroChat, setShowSecuroChat] = useState(false);
    const closeSecuroChat = () => setShowSecuroChat(false);

    // Weather Wizard hooks
    const [showWeather, setShowWeather] = useState(false);
    const closeWeather = () => setShowWeather(false);

    // Todos hooks
    const [showTodos, setShowTodos] = useState(false);
    const closeTodos = () => setShowTodos(false);

    // Site hooks
    const [showSite, setShowSite] = useState(false);
    const closeSite = () => setShowSite(false);

    // YT Clone hooks
    const [showYT, setShowYT] = useState(false);
    const closeYT = () => setShowYT(false);

    return (
        <div className="font-sans antialiased">
            {showBloggy || showSecuroChat || showWeather || showTodos || showSite || showYT ? <div onClick={() => setShowBloggy(false) || setShowSecuroChat(false) || setShowWeather(false) || setShowTodos(false) || setShowSite(false) || setShowYT(false)} className='backdrop'></div> : null}
            <div className="projects">
                <div className="flex flex-col justify-center items-center pt-36 pb-24 lg:px-16 px-6">
                    <Bounce bottom cascade>
                        <p className="projects-header md:text-3xl text-2xl mb-4">Projects</p>
                        <div className="flex flex-row flex-wrap justify-center items-center">
                            <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3" onClick={() => setShowBloggy(true)}>
                                <p className="text-xl text-center font-light mb-2">Bloggy</p>
                                <img src={Bloggy} alt="Bloggy" />
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
                            <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3" onClick={() => setShowSecuroChat(true)}>
                                <p className="text-xl text-center font-light mb-2">SecuroChat</p>
                                <img src={SecuroChat} alt="SecuroChat" />
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
                            <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3" onClick={() => setShowWeather(true)}>
                                <p className="text-xl text-center font-light mb-2">Weather Wizard</p>
                                <img src={WeatherWizard} alt="Weather Wizard" />
                                <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                                    <div className="tool p-1 rounded-lg m-1">
                                        <p className="font-light text-center">React.js</p>
                                    </div>
                                    <div className="tool p-1 rounded-lg m-1">
                                        <p className="font-light text-center">OpenWeatherMap API</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3" onClick={() => setShowTodos(true)}>
                                <p className="text-xl text-center font-light mb-2">Todos</p>
                                <img src={Todos} alt="Todos" />
                                <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                                    <div className="tool p-1 rounded-lg m-1">
                                        <p className="font-light text-center">Python</p>
                                    </div>
                                    <div className="tool p-1 rounded-lg m-1">
                                        <p className="font-light text-center">HTML/CSS</p>
                                    </div>
                                    <div className="tool p-1 rounded-lg m-1">
                                        <p className="font-light text-center">PostgreSQL</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3" onClick={() => setShowSite(true)}>
                                <p className="text-xl text-center font-light mb-2">This Website</p>
                                <img src={Website} alt="Website" />
                                <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                                    <div className="tool p-1 rounded-lg m-1">
                                        <p className="font-light text-center">React.js</p>
                                    </div>
                                    <div className="tool p-1 rounded-lg m-1">
                                        <p className="font-light text-center">Tailwind CSS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3" onClick={() => setShowYT(true)}>
                                <p className="text-xl text-center font-light mb-2">YouTube Clone</p>
                                <img src={YTClone} alt="YouTube Clone" />
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
                    </Bounce>
                </div>
            </div>
            <BloggyModal
                showModal={showBloggy}
                closeModal={closeBloggy}
            />
            <SecuroChatModal
                showModal={showSecuroChat}
                closeModal={closeSecuroChat}
            />
            <WeatherWizModal
                showModal={showWeather}
                closeModal={closeWeather}
            />
            <TodosModal
                showModal={showTodos}
                closeModal={closeTodos}
            />
            <SiteModal
                showModal={showSite}
                closeModal={closeSite}
            />
            <YTModal
                showModal={showYT}
                closeModal={closeYT}
            />
        </div>
    )
}

export default Projects
