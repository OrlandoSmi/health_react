import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles, { layout } from "../../styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonials.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import SliderContent from "./SliderContent";


const Testimonials = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [testimonialNumber, setTestimonialNumber] = useState(3)
    const detectWindowSize = () => {
        setWindowWidth(window.innerWidth)
        // show 1 testimonial on small screens
        if (window.innerWidth <= 620) {
            setTestimonialNumber(1)
        }
        if (window.innerWidth > 620 && window.innerWidth <= 1060) {
            setTestimonialNumber(2)
        }
        if (window.innerWidth > 1060) {
            setTestimonialNumber(3)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', detectWindowSize)

        return () => {
            window.removeEventListener('resize', detectWindowSize)
        }
    }, [windowWidth]);

    useEffect(() => {
        detectWindowSize();
    }, []);

    return (
        <section className={`flex flex-col ${styles.paddingY} mt-[50px] mb-[50px]`}>
            <div className={`flex ${styles.flexCenter} mb-16`}>
                <div className={layout.sectionInfo}>
                    <h2 className={`font-semibold md:text-[45px] text-[37px] ss:leading-[49.8px] leading-[49px] dark:text-dimWhite`}>
                        Testimonials, We Care <br className="hidden ss:block" />For Our
                        <span className="text-redcolor"> Customers</span>{" "}
                    </h2>
                    {/* <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
                        With the right credit card, you can improve your financial life by
                        building credit, earning rewards and saving money. But with hundreds
                        of credit cards on the market.
                    </p> */}
                </div>
            </div>
            <div className="testimonials">
                <Swiper
                    slidesPerView={testimonialNumber}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="card p-16 flex flex-col justify-center items-center">
                        <SliderContent title="Doctor" name="Rayvon Stewart" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </SwiperSlide>

                    <SwiperSlide className="card p-16 flex flex-col">
                        <SliderContent title="Doctor" name="Rayvon Stewart" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </SwiperSlide>

                    <SwiperSlide className="card p-16 flex flex-col">
                        <SliderContent title="Doctor" name="Rayvon Stewart" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </SwiperSlide>

                    <SwiperSlide className="card p-16 flex flex-col">
                        <SliderContent title="Doctor" name="Rayvon Stewart" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </SwiperSlide>

                    <SwiperSlide className="card p-16 flex flex-col">
                        <SliderContent title="Doctor" name="Rayvon Stewart" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </SwiperSlide>

                </Swiper>

            </div>
        </section>
    )
}

export default Testimonials