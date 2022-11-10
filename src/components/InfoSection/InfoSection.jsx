import React from "react";
import styles, { layout } from "../../styles";
import map from '../../assets/map.png';
import { motion } from 'framer-motion';

const InfoSection = () => {
    return (
        <section className={`justify-center items-center flex flex-col ${styles.paddingY} mt-[50px] mb-[50px] md:flex-row`}>
            <div className={`flex-1 ${styles.flexStart} flex-col`}>
                <img src={map} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative md:pl-16 lg:pl-32`}>
                <div className={layout.sectionInfo}>
                    <h2 className={`font-semibold md:text-[45px] text-[37px] ss:leading-[49.8px] leading-[49px] dark:text-dimWhite`}>
                        Transform Your World, <br className="block md:hidden lg:block" />With
                        <span className="text-redcolor"> Telemedicine</span>{" "}
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 dark:text-dimWhite`}>
                        With the right credit card, you can improve your financial life by
                        building credit, earning rewards and saving money. But with hundreds
                        of credit cards on the market.
                    </p>


                    <motion.button className={`mt-[35px] redBtnShadow ${styles.redButton} hover:bg-black dark:border-2 dark:border-redcolor`}
                        whileHover={{ scale: 1.1, originX: 0 }}
                        transition={{ type: 'spring', stiffness: 700 }}>
                        REGISTER NOW
                    </motion.button>
                </div>
            </div>
        </section>
    )
}

export default InfoSection;