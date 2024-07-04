import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Details from "../Component/Details";

const Article = () => {
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(true);

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

    const [scrollPosition, setScrollPosition] = useState(0);
    const [arrowUpVisible, setArrowUpVisible] = useState(false);

    // Handle scroll event
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        setArrowUpVisible(position > 100); // Tampilkan tombol panah jika scroll lebih dari 100px
    };

    // Effect to add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handle scroll to top
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
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/article">Article</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Regina</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/article">Article</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
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

            <div className="container mt-24 ml-4 lg:ml-20">
                <div className="justify-center text-center">
                    <a className="text-rose-600 text-[50px] font-bold leading-[50px]">Articles</a>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 mx-20">
                <div className="card w-full bg-base-100 shadow-xl mx-auto">
                    <figure><img src="src/assets/q.png" alt="Droid Game" className="w-full h-64 object-cover" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Droid Game</h2>
                        <p>A seek and hide game, which consists of search droids and evasion droids</p>
                        <div className="card-actions justify-start">
                            <Link to="/details">
                                <button className="btn btn-outline btn-info">Details</button>
                            </Link>
                            <button className="btn btn-outline btn-info">
                                <a href="https://github.com/Regina158/Project-PAA-2023" target="_blank" rel="noopener noreferrer">Repo</a>
                            </button>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Java</div>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl mx-auto">
                    <figure><img src="src/assets/ws.png" alt="WDJ" className="w-full h-64 object-cover" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Website Desa</h2>
                        <p>SISTEM INFORMASI DESA which functions as an information portal</p>
                        <div className="card-actions justify-start">
                            <Link to="/details">
                                <button className="btn btn-outline btn-info">Details</button>
                            </Link>
                            <button className="btn btn-outline btn-info">
                                <a href="https://github.com/Regina158/Web_Desa_Jurang" target="_blank" rel="noopener noreferrer">Repo</a>
                            </button>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">HTML</div>
                            <div className="badge badge-outline">CSS</div>
                            <div className="badge badge-outline">Bootstrap</div>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl mx-auto">
                    <figure><img src="src/assets/N.png" alt="Droid Game" className="w-full h-64 object-cover" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sistem Prediksi Persediaan Obat Menggunakan Metode Naive Bayes</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                            <Link to="/details">
                                <button className="btn btn-outline btn-info">Details</button>
                            </Link>
                            <button className="btn btn-outline btn-info">
                                <a href="https://github.com/Regina158/Naive-Bayes" target="_blank" rel="noopener noreferrer">Repo</a>
                            </button>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">HTML</div>
                            <div className="badge badge-outline">CSS</div>
                            <div className="badge badge-outline">Python</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tombol panah untuk scroll */}
            <div className="fixed bottom-10 right-10">
                <button
                    className={`btn btn-circle ${arrowUpVisible ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={scrollToTop}
                    style={{ transform: arrowUpVisible ? 'rotate(0deg)' : 'rotate(180deg)' }}
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
                </button>
            </div>
        </div>
    );
}

export default Article;
