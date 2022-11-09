import React from "react";
import "./Footer.css";
import styles from "../../styles";
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'

const Footer = () => {
    return (
        <section className={`bg-black ${styles.flexCenter} ${styles.paddingY} flex-col mt-[50px]`}>
            <div className={`${styles.boxWidth} ${styles.paddingX}`}>
                <div className={`md:${styles.flexStart} flex items-center md:flex-row flex-col mb-8 w-full justify-between md:items-start`}>
                    <div className="flex flex-col justify-start md:mr-10 items-center md:items-start">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-[100px] object-contain"
                        />
                        <p className={`text-center font-poppins font-light text-[18px] leading-[30.8px] mt-4 max-w-[312px] text-white md:text-left`}>
                            Take your health serious at your own convenience.
                        </p>
                    </div>

                    <div className=" flex flex-col ss:flex-row justify-between md:mt-0 mt-10 w-full ss:w-auto">
                        <div className={`items-center flex flex-col ss:my-0 my-4 min-w-[100%] ss:min-w-[170px] md:min-w-[130px] lg:min-w-[150px] pr-[5px] md:items-start`}>
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                Useful Links
                            </h4>
                            <ul className="list-none mt-16">
                                <li className={`font-poppins font-light text-[16px] leading-[24px] text-dimWhite hover:text-redcolor cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                                <li className={`font-poppins font-light text-[16px] leading-[24px] text-dimWhite hover:text-redcolor cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                                <li className={`font-poppins font-light text-[16px] leading-[24px] text-dimWhite hover:text-redcolor cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                                <li className={`font-poppins font-light text-[16px] leading-[24px] text-dimWhite hover:text-redcolor cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                            </ul>
                        </div>

                        <div className={`items-center flex flex-col ss:my-0 my-4 min-w-[170px] md:min-w-[130px] lg:min-w-[150px] pr-[5px] md:items-start`}>
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                Community
                            </h4>
                            <ul className="list-none mt-16">
                                <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-redcolor cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                                <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-redcolor cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                                <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-redcolor cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                                <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-redcolor cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                            </ul>
                        </div>

                        <div className={`items-center flex flex-col ss:my-0 my-4 min-w-[170px] md:min-w-[130px] lg:min-w-[150px] md:items-start`}>
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                Resources
                            </h4>
                            <ul className="list-none mt-16">
                                <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                                <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                                <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                                <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                                    How It Works
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`flex flex-col md:ml-10 md:mt-0 mt-10 items-center md:items-start`}>
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white pb-4 md:pb-16">
                            Contact Us
                        </h4>
                        <p className="font-poppins font-normal font-[16px] text-white pb-4 text-center md:text-left">Get the latest health Tips,<br />Deals and Updates</p>
                        <div className="bg-white flex rounded-l-full rounded-r-full p-0">
                            <input placeholder="Email Address" type="text" name="fname" className="h-[50px] px-2 outline-0 rounded-l-full rounded-r-full"></input>
                            <button className="outline-0 text-white bg-redcolor rounded-l-full rounded-r-full px-8 hover:bg-black transition duration-500">SUBMIT</button>
                        </div>
                    </div>

                </div>

                <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                    <p className="font-poppins font-thin text-center text-[16px] leading-[27px] text-white">
                        Copyright Ⓒ 2022 WeThinkBinary. All Rights Reserved.
                    </p>

                    <div className="flex flex-row md:mt-0 mt-6">
                        <img src={instagram} alt="instagram" className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`} />
                        <img src={instagram} alt="instagram" className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`} />
                        <img src={instagram} alt="instagram" className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer