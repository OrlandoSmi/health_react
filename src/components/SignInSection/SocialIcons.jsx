import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { toast } from 'react-toastify';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../../firebase";
import { useNavigate } from 'react-router-dom';

function SocialIcons() {
    const navigate = useNavigate()
    const onGoogleClick = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider)
            const user = result.user;
            //console.log(user)

            //chrck for user
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef)

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    country: "",
                    dob: "",
                    email: user.email,
                    firstname: user.displayName,
                    lastname: "",
                    id: user.uid,
                    phoneNumber: "",
                    profileImage: '',
                    timestamp: serverTimestamp()
                })
            }
            //navigate to the dashboard
            navigate("/dashboard")
        } catch (error) {
            toast.error("Error: Could not authorize with google")
        }
    }
    return (
        <>
            <div className="social-media">
                <a href="google.com" className="social-icon">
                    <i className="fab fa-facebook-f dark:text-dimWhite"></i>
                </a>
                <span className="social-icon">
                    <i className="fab fa-twitter dark:text-dimWhite"></i>
                </span>
                <span onClick={onGoogleClick} href="google.com" className="social-icon">
                    <i className="fab fa-google dark:text-dimWhite"></i>
                </span>
                <a href="google.com" className="social-icon">
                    <i className="fab fa-linkedin-in dark:text-dimWhite"></i>
                </a>
            </div>
        </>
    )
}

export default SocialIcons