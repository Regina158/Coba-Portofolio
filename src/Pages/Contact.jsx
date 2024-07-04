import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [arrowUpVisible, setArrowUpVisible] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "synthwave" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        setArrowUpVisible(position > 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50">
                <div className="navbar-start ml-10">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/Home'>Home</Link>
                            </li>
                            <li>
                                <Link to='/Article'>Article</Link>
                            </li>
                            <li>
                                <Link to='/Contact' >Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Regina</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/Home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Article' >Article</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end mr-10">
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            className="theme-controller"
                            checked={theme === "synthwave"}
                            onChange={toggleTheme}
                        />
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>

            <div className="container mx-auto mt-28 px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <div className="avatar order-1 md:order-none">
                        <div className="w-60 h-60 rounded-full overflow-hidden">
                            <img src="./src/assets/S.jpeg" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start md:ml-12">
                        <p className="text-2xl font-normal font-LaoSansPro leading-[50px]">Interest With Me?</p>
                        <p className="text-2xl font-normal font-LaoSansPro leading-[50px]">If you are interested in me, you can see my social media accounts</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.instagram.com/157reginaa?igsh=NnlrMGl0c3cwc2Vl" target="_blank" rel="noopener noreferrer">
                                <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="mailto:reginantx5@gmail.com">
                                <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                            <a href="https://github.com/Regina158" target="_blank" rel="noopener noreferrer">
                                <svg className="h-8 w-8 fill-current text-blue-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.042-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.808 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.38 1.236-3.22-.123-.303-.536-1.526.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.65.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.623-5.48 5.922.43.372.814 1.102.814 2.222 0 1.606-.014 2.896-.014 3.293 0 .319.192.694.8.576C20.565 21.798 24 17.302 24 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container  mt-8 px-4 md:ml-55">
                    <form className="flex flex-col space-y-4  justify-center">
                        <p className="md:mx-80">Name</p>
                        <input type="text" placeholder="Name" className="input input-bordered w-50 md:mx-80" />
                        <p className="md:mx-80">Email</p>
                        <input type="email" placeholder="Email" className="input input-bordered md:mx-80" />
                        <p className="md:mx-80">Message</p>
                        <textarea placeholder="Message" rows="5" className="textarea textarea-bordered md:mx-80"></textarea>
                        <button type="submit" className="btn btn-primary md:mx-80">Submit</button>
                    </form>
                </div>

                {arrowUpVisible && (
                    <div
                        className="fixed bottom-4 right-4 p-2 bg-gray-500 text-white rounded-full cursor-pointer"
                        onClick={scrollToTop}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                )}
        </div>
    );
};

export default Contact;
