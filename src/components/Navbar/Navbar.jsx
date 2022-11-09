import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import lightMode from '../../assets/light_mode.png'
import nightMode from '../../assets/night_mode.png'
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'
import './Switcher.css'
import useDarkMode from '../../hook/useDarkMode';

function Navbar() {
    const [colorTheme, setTheme] = useDarkMode()
    const location = useLocation();
    const navigate = useNavigate()
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");


    const pathMathRoute = (route) => {
        if (route === location.pathname) {
            return true;
        }
    }
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <span href="google.com" className="nav__brand">
                <img src={logo} alt="logo" className='w-[100px] cursor-pointer' onClick={() => navigate("/")} />
            </span>
            <ul className={active}>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <li className={`cursor-pointer nav__item br hover:scale-110 text-black hover:font-bold hover:text-redcolor ${pathMathRoute("/") &&
                    "text-redcolor font-bold scale-110 border-b-2 border-b-redcolor"} duration-500 dark:text-dimWhite dark:hover:text-redcolor`} onClick={() => navigate("/")}>
                    <span className="nav__link">
                        Home
                    </span>
                </li>
                <li className="nav__item br hover:scale-110 text-black hover:font-bold hover:text-redcolor  duration-500 dark:text-dimWhite dark:hover:text-redcolor">
                    <span className="nav__link">
                        About
                    </span>
                </li>
                <li className={`cursor-pointer nav__item br hover:scale-110 text-black hover:font-bold hover:text-redcolor 
                ${pathMathRoute("/offers") && "text-redcolor font-bold scale-110 border-b-2 border-b-redcolor duration-500 dark:text-dimWhite"}`} onClick={() => navigate("/offers")}>
                    <span className="nav__link  duration-500 dark:text-dimWhite dark:hover:text-redcolor">
                        Offers
                    </span>
                </li>
                <li className="nav__item br hover:scale-110 text-black hover:font-bold hover:text-redcolor  duration-500 dark:text-dimWhite">
                    <a href="google.com" className="nav__link">
                        Skills
                    </a>
                </li>
                <li className="nav__item br hover:scale-110 text-black hover:font-bold hover:text-redcolor  duration-500 dark:text-dimWhite">
                    <span className="nav__link dark:hover:text-redcolor">
                        Contact
                    </span>
                </li>
                {/* Show buttons on small screen */}
                <li className="cursor-pointer nav__item nav__link__loginbtn transform transition-all hover:scale-125 md:mr-2 sm:hidden" onClick={() => navigate("/sign-in")}>
                    <span className="nav__link">
                        Login
                    </span>
                </li>

                <li className="cursor-pointer nav__item nav__link__signupbtn transform transition-all hover:scale-125 sm:hidden" onClick={() => navigate("/sign-up")}>
                    <span className="nav__link">
                        Sign Up
                    </span>
                </li>
            </ul>
            {/* Show buttons on large screen */}
            <div className='hidden flex-col sm:flex-row sm:flex items-center'>
                <li className="cursor-pointer nav__item nav__link__loginbtn transform transition-all sm:mr-2" onClick={() => navigate("/sign-in")}>
                    <span className="nav__link">
                        Login
                    </span>
                </li>

                <li className="cursor-pointer nav__item nav__link__signupbtn transform transition-all" onClick={() => navigate("/sign-up")}>
                    <span className="nav__link">
                        Sign Up
                    </span>
                </li>
                {/* <li className="cursor-pointer nav__item nav__link__signupbtn transform transition-all" onClick={() => navigate("/sign-up")}> */}
                <div className='ml-2 rounded-full border-2 border-[#ccc] p-[3px] shadow-2xl'>
                    {colorTheme === "light" &&
                        <img src={lightMode} alt="lightMode" className='w-[20px] cursor-pointer' onClick={() => setTheme(colorTheme)} />
                    }

                    {colorTheme === "dark" &&
                        <img src={nightMode} alt="nightMode" className='w-[20px] cursor-pointer' onClick={() => setTheme(colorTheme)} />
                    }
                </div>
                {/* <span class="theme__toggle-wrap" onClick={() => { setTheme(colorTheme) }}>
                    <input
                        type="checkbox"
                        class="theme__toggle"
                        id="theme"
                        role="switch"
                        name="theme"
                        value="dark"

                    />
                    <span class="theme__fill"></span>
                    <span class="theme__icon">
                        <span class="theme__icon-part"></span>
                        <span class="theme__icon-part"></span>
                        <span class="theme__icon-part"></span>
                        <span class="theme__icon-part"></span>
                        <span class="theme__icon-part"></span>
                        <span class="theme__icon-part"></span>
                        <span class="theme__icon-part"></span>
                        <span class="theme__icon-part"></span>
                        <span class="theme__icon-part"></span>
                    </span>
                </span> */}

                {/* </li> */}
            </div>
            <div className='flex flex-row sm:hidden'>
                <div className='ml-2 mr-4 mt-[-5px] rounded-full border-2 border-[#ccc] p-[3px] shadow-2xl block sm:hidden'>
                    {colorTheme === "light" &&
                        <img src={lightMode} alt="lightMode" className='w-[20px] cursor-pointer' onClick={() => setTheme(colorTheme)} />
                    }

                    {colorTheme === "dark" &&
                        <img src={nightMode} alt="nightMode" className='w-[20px] cursor-pointer' onClick={() => setTheme(colorTheme)} />
                    }
                </div>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;