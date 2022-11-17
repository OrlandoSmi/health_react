import React, { useState } from 'react'
// import tetheart from '../../assets/tetheart.png'
import logimg from '../../assets/log.svg'
import registerimg from '../../assets/register.svg'
import styles from "../../styles";
import './SignInSection.css'
import { useRef } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { db } from "../../firebase"
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialIcons from './SocialIcons';

function SignInSection() {
    const navigate = useNavigate()
    const [passwordShown, setPasswordShown] = useState(false);
    const [regPasswordShown, setRegPasswordShown] = useState(false);

    const [resetPwdFormData, setResetPwdFormData] = useState({
        email: "",
    });
    const [signInFormData, setSignInFormData] = useState({
        email: "",
        password: ""
    });
    const [signUpFormData, setSignUpFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const ref_container = useRef(null);
    const ref_forgotcontainer = useRef(null)
    const ref_signincontainer = useRef(null)

    const forgotAnimation = (clicked) => {
        const forgot_container = ref_forgotcontainer.current;
        const signin_container = ref_signincontainer.current;

        if (clicked === "sign-in") {
            forgot_container.classList.add("scale-remove");
            forgot_container.classList.remove("scale-add");

            signin_container.classList.add("scale-add");
            signin_container.classList.remove("scale-remove");
        }
        if (clicked === "forgot-pwd") {
            signin_container.classList.add("scale-remove");
            signin_container.classList.remove("scale-add");

            forgot_container.classList.add("scale-add");
            forgot_container.classList.remove("scale-remove");
        }
    }

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

    const onForgorSubmit = async (e) => {
        e.preventDefault();

        if (resetPwdFormData.email === "") {
            toast.error("Please enter your email address.")
            return;
        }

        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, resetPwdFormData.email)
            toast.success("Success! Password reset link was sent to your email")
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/invalid-email") {
                toast.error("Please enter a valid email address.")
            }
            else if (error.code === "auth/user-not-found") {
                toast.error("Email address not found on our server.")
            }
            else {
                toast.error("Something went wrong, could not send password.")
            }

        }
    }
    const onSigninSubmit = async (e) => {
        e.preventDefault();

        try {
            if (signInFormData.email === "") {
                toast.error("Please enter your email address")
                return;
            }
            else if (signInFormData.password === "") {
                toast.error("Please enter a strong password")
                return;
            }
            const auth = getAuth();
            const userCredentials = await signInWithEmailAndPassword(auth, signInFormData.email, signInFormData.password)
            console.log(userCredentials)
            if (userCredentials.user) {
                navigate("/dashboard");
                toast.success("Signin successful")
            } else {
                toast.error("Incorrect credentials")
            }
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/invalid-email") {
                toast.error("Please enter a valid email address")
            }
            else if (error.code === "auth/user-not-found") {
                toast.error("No user found, please check credentials")
            }
            else {
                toast.error("Something went wrong with the signin")
            }

        }
    }
    const onSignupSubmit = async (e) => {
        e.preventDefault();
        if (signUpFormData.firstName === "") {
            toast.error("Please enter your first name")
            return;
        }
        else if (signUpFormData.lastName === "") {
            toast.error("Please enter your last name")
            return;
        }
        else if (signUpFormData.password === "") {
            toast.error("Please enter a strong password")
            return;
        }
        else if (signUpFormData.email === "") {
            toast.error("Please enter your email address")
            return;
        }
        try {
            const auth = getAuth();
            const userCredentials = await createUserWithEmailAndPassword(auth, signUpFormData.email, signUpFormData.password)
            updateProfile(auth.currentUser, {
                displayName: signUpFormData.firstName + ' ' + signUpFormData.lastName
            })
            const user = userCredentials.user;
            console.log(user)
            //write new account to the users database
            await setDoc(doc(db, "Users", user.uid),
                {
                    country: "",
                    dob: "",
                    email: signUpFormData.email,
                    firstname: signUpFormData.firstName,
                    lastname: signUpFormData.lastName,
                    id: user.uid,
                    phoneNumber: "",
                    profileImage: '',
                    timestamp: serverTimestamp()

                });
            toast.success("Signup was successful")
            //navigate to the dashboard
            navigate("/dashboard")
        } catch (error) {
            console.log(error.code);
            console.log(error.message);
            if (error.code === "auth/invalid-email") {
                toast.error("Please enter a valid email address.")
            }
            else if (error.code === "auth/weak-password") {
                toast.error("Please enter a stronger password with at least 6 characters.")
            }
            else if (error.code === "auth/email-already-in-use") {
                toast.error("Sorry, Email address already registered.")
            }
            else {
                toast.error("Something went wrong with the registration.")
            }
            //toast.error("Something went wrong with the registration.")
        }
    }

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
                        <form onSubmit={onSigninSubmit} className="sign-in-form">
                            <div className='form-body flex flex-col justify-center items-center w-full ss:w-[380px]' ref={ref_signincontainer}>
                                <h2 className="title dark:text-white">Sign in</h2>
                                <div className="input-field">
                                    <input type="text" placeholder="Email Address" onChange={(e) => { setSignInFormData({ ...signInFormData, email: e.target.value }) }} />
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="input-field">

                                    <input type={passwordShown ? "text" : "password"} placeholder="Password" onChange={(e) => { setSignInFormData({ ...signInFormData, password: e.target.value }) }} />
                                    <i className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"} onClick={() => { toggleLoginPassword() }}></i>

                                </div>
                                <button className="btn transparent border-2 border-redcolor text-redcolor">
                                    Login
                                </button>
                                <p className="social-text dark:text-white">Or Sign in with social platforms</p>
                                <SocialIcons />
                                <div className='mt-4 cursor-pointer hover:text-greencolor dark:text-whiteprimary'>
                                    <span onClick={() => forgotAnimation("forgot-pwd")}>Forgot Password?</span>
                                </div>
                            </div>
                        </form>
                        <form onSubmit={onForgorSubmit} className='forgot_password z-[2] scale-remove' ref={ref_forgotcontainer}>
                            <h2 className="title dark:text-white">Forgot Password</h2>
                            <div className="input-field">
                                <input type="text" placeholder="Email Address" onChange={(e) => { setResetPwdFormData({ ...resetPwdFormData, email: e.target.value }) }} />
                                <i className="fas fa-user"></i>
                            </div>
                            <button className="forgotbtn transparent border-2 border-redcolor text-redcolor">
                                Send Reset Email
                            </button>
                            <p className="social-text dark:text-white">Or Sign in with social platforms</p>
                            <SocialIcons />
                            <span className='mt-4 cursor-pointer hover:text-greencolor dark:text-whiteprimary' onClick={() => forgotAnimation("sign-in")}>Login Here Instead!</span>
                        </form>
                        <form onSubmit={onSignupSubmit} className="sign-up-form">
                            <h2 className="title dark:text-white">Sign up</h2>
                            <div className="input-field">
                                <input type="text" placeholder="First Name" onChange={(e) => { setSignUpFormData({ ...signUpFormData, firstName: e.target.value }) }} />
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Last Name" onChange={(e) => { setSignUpFormData({ ...signUpFormData, lastName: e.target.value }) }} />
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="input-field">
                                <input type="email" placeholder="Email" onChange={(e) => { setSignUpFormData({ ...signUpFormData, email: e.target.value }) }} />
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="input-field">
                                <input type={regPasswordShown ? "text" : "password"} placeholder="Password" onChange={(e) => { setSignUpFormData({ ...signUpFormData, password: e.target.value }) }} />
                                {regPasswordShown && <i className="fas fa-eye-slash" onClick={() => { toggleSignupPassword() }}></i>}
                                {!regPasswordShown && <i className="fas fa-eye" onClick={() => { toggleSignupPassword() }}></i>}
                            </div>
                            {/* <input type="submit" className="btn" value="Sign up" /> */}
                            <button className="btn transparent border-2 border-redcolor text-redcolor">
                                Sign Up
                            </button>
                            <p className="social-text dark:text-white">Or Sign up with social platforms</p>
                            <SocialIcons />
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
                            <button className="btn transparent border-2  bg-redcolor border-white text-white" id="sign-up-btn" onClick={() => { registerAnimation("sign-up-btn"); setTimeout(() => { forgotAnimation("sign-in") }, 500) }}>
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