import { getAuth } from 'firebase/auth'
import React from 'react'

function Dashboard() {
    const auth = getAuth();
    return (
        <div>
            Dashboard<br></br>
            {auth.currentUser.email}
            {auth.currentUser.displayName}
        </div>
    )
}

export default Dashboard