import React from 'react'
import gift from '../assets/gift-box.png';
import docnurse from '../assets/doc-nurse.png'
import styles from "../styles";

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} transition duration-500 dark:bg-[#00040f]`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={gift} alt="discount" className="w-[32px] h-[32px]" />
                    <p className="ml-2">
                        <span className="text-white">20% Discount For{" "}</span>
                        <span className="text-white">1 Month Account</span>
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[80.8px] leading-[55px] mt-10  duration-500 dark:text-dimWhite">
                        It’s Time To<br className="sm:block hidden" />{" "}
                        <span className="text-redcolor">Take Your</span>{" "}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        {/* <GetStarted /> */}
                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[80.8px] leading-[55px] w-full  duration-500 dark:text-dimWhite">
                    <span className="text-gradient">Health</span> Seriously!
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 duration-500 dark:text-dimWhite`}>
                    Our team of experts doctors are always ready to help. Our passion
                    is to improve the health of every individual through proper health care.
                </p>
                {/* Add free consultation button here */}
                <button className={`mt-[35px] redBtnShadow ${styles.redButton} hover:bg-black transition-all duration-500`}>GET A FREE CONSULTATION</button>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={docnurse} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient hidden dark:block" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 hidden dark:block" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient hidden dark:block" />
                {/* gradient end */}
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                {/* <GetStarted /> */}
            </div>
        </section>
    )
}
export default Hero