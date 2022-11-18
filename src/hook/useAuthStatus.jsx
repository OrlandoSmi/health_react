import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'

function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(() => {
        // checking if user is logged in
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
            }
            //end loading effect
            setCheckingStatus(false)
        })
    }, [])

    return { loggedIn, checkingStatus }
}

export default useAuthStatus