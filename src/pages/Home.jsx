import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero';
import styles from "../styles";
import Stats from '../components/stats/Stats';
// import HomeFirstSection from './components/HomeFirstSection/HomeFirstSection';
import Features from '../components/Features/Features';
import InfoSection from '../components/InfoSection/InfoSection';
import CommunityInfo from '../components/CommunityInfo/CommunityInfo';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion'

function Home() {
    return (
        <motion.div className="w-full overflow-hidden transition duration-[500] dark:bg-darkprimary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            /*exit={{ x: window.innerWidth, transition: { duration: 0.3 }  }}*/>
            <div className="myherobg transition duration-[500] bg-[url('./assets/hero_bg1.png')] dark:bg-none">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>

                <div className={`${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero />
                    </div>
                </div>
            </div>
            <Stats />
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Features />
                    <InfoSection />
                    <CommunityInfo />
                    <Testimonials />
                    {/* <HomeFirstSection /> */}
                    {/* <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer /> */}
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Home