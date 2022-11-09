import React from "react";
import styles from "../../styles";
import globe from '../../assets/globe.png'

const Features = () => {
    return (
        <section className={`justify-center flex-wrap items-center flex flex-col ${styles.paddingY} mt-[50px] sm:flex-row`}>
            <div className="flex justify-center items-center flex-col text-center w-auto sm:w-1/2 md:w-auto md:mr-8 lg:mr-20 md:text-left md:items-start">
                <h2 className="mt-16 flex-1 font-poppins font-semibold ss:text-[37px] text-[37px] text-black ss:leading-[45.8px] leading-[45px] dark:text-dimWhite">
                    The Smart Way<br />{" "}
                    {/* <span className="text-redcolor">Take Your</span>{" "} */}
                    <span className="text-redcolor">To Your Health</span>{" "}
                </h2>
                <p className="mt-4 mb-16 px-[0px] text-center text-[#A0A0A0] md:text-left md:pl-2">A variety of benefits when<br /> using this service</p>
            </div>

            <div className="flex justify-center items-center flex-col mb-16 sm:mb-0  w-auto sm:w-1/2 md:w-auto md:mr-8 lg:mr-20 md:items-start">
                <img alt="globe" src={globe} className="w-[52px] h-[52px] m-auto sm:m-[0px]" />
                <h3 className="font-bold text-[20px] text-center py-2 dark:text-dimWhite">Global Reach</h3>
                <p className="px-[0px] text-center text-[#A0A0A0] md:text-start">Doctors and health<br /> centres across the world</p>
            </div>

            <div className="flex justify-center items-center flex-col mb-16 sm:mb-0  w-auto sm:w-1/2 md:w-auto md:mr-8 lg:mr-20  md:items-start">
                <img alt="globe" src={globe} className="w-[52px] h-[52px] m-auto sm:m-[0px]" />
                <h3 className="font-bold text-[20px] text-center py-2 dark:text-dimWhite">Global Reach</h3>
                <p className="px-[0px] text-center text-[#A0A0A0] md:text-start">Doctors and health<br /> centres across the world</p>
            </div>

            <div className="flex justify-center items-center flex-col mb-16 sm:mb-0  w-auto sm:w-1/2 md:w-auto  md:items-start">
                <img alt="globe" src={globe} className="w-[52px] h-[52px] m-auto sm:m-[0px]" />
                <h3 className="font-bold text-[20px] text-center py-2 dark:text-dimWhite">Global Reach</h3>
                <p className="px-[0px] text-center text-[#A0A0A0] md:text-start">Doctors and health<br /> centres across the world</p>
            </div>
        </section>
    )
}
export default Features