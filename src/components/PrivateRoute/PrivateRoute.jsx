import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../../hook/useAuthStatus';

function PrivateRoute() {

    const { loggedIn, checkingStatus } = useAuthStatus();

    if (checkingStatus) {
        return <h3>LOADING...</h3>
    }
    return loggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />
}

export default PrivateRoute