import React from "react";
import styles, { layout } from "../../styles";
import community from '../../assets/community.png';

const CommunityInfo = () => {
    return (
        <section className={`justify-center items-center flex flex-col ${styles.paddingY} mt-[50px] mb-[50px] md:flex-row`}>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <div className={layout.sectionInfo}>
                    <h2 className={`font-semibold md:text-[45px] text-[37px] ss:leading-[49.8px] leading-[49px] dark:text-dimWhite`}>
                        Become Apart of, <br className="block md:hidden lg:block" />A
                        <span className="text-redcolor"> Community</span>{" "}
                    </h2>
                    <p className={`${styles.paragraph} max-w-[520px] mt-5 dark:text-dimWhite`}>
                        With the right credit card, you can improve your financial life by
                        building credit, earning rewards and saving money. But with hundreds
                        of credit cards on the market.
                    </p>

                    {/* <Button styles={`mt-10`} /> */}
                    <button className={`mt-[35px] redBtnShadow ${styles.redButton} hover:bg-black transition-all duration-500`}>JOIN THE COMMUNITY</button>
                </div>
            </div>

            <div className={`flex-1 ${styles.flexStart} flex-col`}>
                <img src={community} alt="community" className="w-[100%] h-[100%] relative z-[5]" />
            </div>
        </section>
    )
}

export default CommunityInfo