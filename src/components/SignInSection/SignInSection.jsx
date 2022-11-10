import React, { useState } from 'react'
// import tetheart from '../../assets/tetheart.png'
import logimg from '../../assets/log.svg'
import registerimg from '../../assets/register.svg'
import styles from "../../styles";
import './SignInSection.css'
import { useRef } from 'react'

function SignInSection() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [regPasswordShown, setRegPasswordShown] = useState(false);
    const [signInFormData, setSignInFormData] = useState({
        email: "",
        password: ""
    });
    const ref_container = useRef(null);

    const registerAnimation = (clicked) => {
        //const root = window.document.documentElement;
        const container = ref_container.current;

        if (clicked === "sign-up-btn") {
            container.classList.add("sign-up-mode");
        }
        if (clicked === "sign-in-btn") {
            container.classList.remove("sign-up-mode");
        }
    }
    const toggleLoginPassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    const toggleSignupPassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setRegPasswordShown(!regPasswordShown);
    };

    return (
        // <section className={`flex md:flex-row flex-col ${styles.paddingY} transition duration-500 dark:bg-[#00040f]`}>
        //     <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        //         <img src={tetheart} alt="sign in" className="w-[100%] h-[100%] relative z-[5]" />
        //     </div>

        //     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        //         {/* gradient start */}
        //         {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient hidden dark:block" />
        //         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 hidden dark:block" />
        //         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient hidden dark:block" /> */}
        //         {/* gradient end */}
        //     </div>
        // </section>
        <section>

            <div ref={ref_container} className="container">

                <div className="forms-container">
                    <div className="signin-signup">
                        <form className="sign-in-form">
                            <h2 className="title dark:text-white">Sign in</h2>
                            <div className="input-field">
                                <input type="text" placeholder="Email Address" onChange={(e) => { setSignInFormData({ ...signInFormData, email: e.target.value }) }} />
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="input-field">

                                <input type={passwordShown ? "text" : "password"} placeholder="Password" onChange={(e) => { setSignInFormData({ ...signInFormData, password: e.target.value }) }} />
                                {passwordShown && <i className="fas fa-eye-slash" onClick={() => { toggleLoginPassword() }}></i>}
                                {!passwordShown && <i className="fas fa-eye" onClick={() => { toggleLoginPassword() }}></i>}
                            </div>
                            {/* <input type="submit" value="Login" className="btn solid" /> */}
                            <button className="btn transparent border-2 border-redcolor text-redcolor">
                                Login
                            </button>
                            <p className="social-text dark:text-white">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="google.com" className="social-icon">
                                    <i className="fab fa-facebook-f dark:text-dimWhite"></i>
                                </a>
                                <a href="google.com" className="social-icon">
                                    <i className="fab fa-twitter dark:text-dimWhite"></i>
                                </a>
                                <a href="google.com" className="social-icon">
                                    <i className="fab fa-google dark:text-dimWhite"></i>
                                </a>
                                <a href="google.com" className="social-icon">
                                    <i className="fab fa-linkedin-in dark:text-dimWhite"></i>
                                </a>
                            </div>
                        </form>
                        <form className="sign-up-form">
                            <h2 className="title dark:text-white">Sign up</h2>
                            <div className="input-field">
                                <input type="text" placeholder="Username" />
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="input-field">
                                <input type="email" placeholder="Email" />
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="input-field">
                                <input type={regPasswordShown ? "text" : "password"} placeholder="Password" />
                                {regPasswordShown && <i className="fas fa-eye-slash" onClick={() => { toggleSignupPassword() }}></i>}
                                {!regPasswordShown && <i className="fas fa-eye" onClick={() => { toggleSignupPassword() }}></i>}
                            </div>
                            {/* <input type="submit" className="btn" value="Sign up" /> */}
                            <button className="btn transparent border-2 border-redcolor text-redcolor">
                                Sign Up
                            </button>
                            <p className="social-text dark:text-white">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="google.com" className="social-icon">
                                    <i className="fab fa-facebook-f dark:text-dimWhite"></i>
                                </a>
                                <a href="google.com" className="social-icon">
                                    <i className="fab fa-twitter dark:text-dimWhite"></i>
                                </a>
                                <a href="google.com" className="social-icon">
                                    <i className="fab fa-google dark:text-dimWhite"></i>
                                </a>
                                <a href="google.com" className="social-icon">
                                    <i className="fab fa-linkedin-in dark:text-dimWhite"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            {/* <p className={`${styles.paragraph} max-w-[470px] mt-5 dark:text-dimWhite`}>
                                With the right credit card, you can improve your financial life by
                                building credit, earning rewards and saving money. But with hundreds
                                of credit cards on the market.
                            </p> */}
                            <h3 className={`font-semibold md:text-[45px] text-[37px] ss:leading-[49.8px] leading-[49px] text-white`}>New here ?</h3>
                            <p className={`${styles.paragraph} text-white`}>
                                Dont have an account? Sign Up below.
                            </p>
                            {/* <li className="cursor-pointer nav__item nav__link__signupbtn transform transition-all">
                                <span className="nav__link">
                                    Sign Up
                                </span>
                            </li> */}
                            <button className="btn transparent border-2  bg-redcolor border-white text-white" id="sign-up-btn" onClick={() => registerAnimation("sign-up-btn")}>
                                Sign Up
                            </button>
                        </div>
                        <img src={registerimg} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3 className={`font-semibold md:text-[45px] text-[37px] ss:leading-[49.8px] leading-[49px] text-white`}>One of us ?</h3>
                            <p className={`${styles.paragraph} text-white`}>
                                Already have an account? sign in below.
                            </p>
                            <button className="btn transparent border-2 bg-redcolor border-white text-white" id="sign-in-btn" onClick={() => registerAnimation("sign-in-btn")}>
                                Sign In
                            </button>
                        </div>
                        <img src={logimg} className="image" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignInSection