import React from 'react'
import styles from "../styles";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SignInSection from '../components/SignInSection/SignInSection';
import { motion } from 'framer-motion'

function SignIn() {
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

                <div className={`${styles.flexStart} mb-[-50px]`}>
                    <div className={`${styles.boxWidth}`}>
                        <SignInSection />
                    </div>
                </div>

            </div>
            <Footer />
        </motion.div>
    )
}

export default SignIn