import React from "react";
import Home from "pages/home";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const user = useSelector(state => state.auth.user); // auth yazımını kontrol edin
    const location = useLocation();

    if (!user) {
        return (
            <Navigate
                to="/auth/login"
                replace={true}
                state={{ return_url: location.pathname }}
            />
        );
    }

    return children;
}

<PrivateRoute>
    <Home />
</PrivateRoute>