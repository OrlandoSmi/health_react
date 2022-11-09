import React from 'react'
import styles, { layout } from "../../styles";
///////////////////////////////////////////////////////////////////////////
//import { features } from "../constants";
//import Button from "./Button";

const FeatureCard = ({ icon, title, content }) => (
    <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const HomeFirstSection = () => (
    <section id="features" className={`${layout.section} mt-[80px]`}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                You do the business, <br className="sm:block hidden" /> we’ll handle
                the money.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
            </p>

            {/* <Button styles={`mt-10`} /> */}
            <button className='mt-10'>butoon</button>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            <FeatureCard icon="" title="test" content="With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market." />

            <FeatureCard icon="" title="test" content="With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market." />

            <FeatureCard icon="" title="test" content="With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market." />


            {/* {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))} */}
        </div>
    </section>
);

export default HomeFirstSection;