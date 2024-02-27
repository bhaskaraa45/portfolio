import React, { useState, useEffect } from "react";
import '../styles/header.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Header() {
    const [activeNavItem, setActiveNavItem] = useState("/");
    const location = useLocation();

    const handleNavItemClick = (path) => {
        setActiveNavItem(path);
    };
    useEffect(() => {
        setActiveNavItem(location.pathname);
    }, [location]);

    return (
        <div className="header">
            <div className="headerContent">
                <div className="homePageBtn">
                    Bhaskar
                </div>
                <div className="navList">
                    <ul>
                        <li className="about">
                            <Link
                                to="/about"
                                className={activeNavItem === "/about" ? "active" : ""}
                                onClick={() => handleNavItemClick("/about")}
                            >
                                About
                            </Link>
                        </li>
                        <li className="education">
                            <Link
                                to="/education"
                                className={activeNavItem === "/education" ? "active" : ""}
                                onClick={() => handleNavItemClick("/education")}
                            >
                                Education
                            </Link>
                        </li>
                        <li className="experience">
                            <Link
                                to="/experience"
                                className={activeNavItem === "/experience" ? "active" : ""}
                                onClick={() => handleNavItemClick("/experience")}
                            >
                                Experience
                            </Link>
                        </li>
                        <li className="projects">
                            <Link
                                to="/projects"
                                className={activeNavItem === "/projects" ? "active" : ""}
                                onClick={() => handleNavItemClick("/projects")}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="contact">
                            <Link
                                to="/contact"
                                className={activeNavItem === "/contact" ? "active" : ""}
                                onClick={() => handleNavItemClick("/contact")}
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
