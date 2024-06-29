import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import loginUserData from "../store/loginUserData";

// const userRole = import.meta.env.VITE_ROLE;

const ProtectedRoute = ({ children, access }) => {

    const { userData } = loginUserData();
    const userRole = userData?.user_type;

    if (!userRole)
        return <Navigate replace to="/" />

    if (!access.includes(userRole))
        return <Navigate replace to="/" />

    if (userRole === "user") {
        return <MainLayout>{children}</MainLayout>
    } else if (userRole === "admin") {
        return <AdminLayout>{children}</AdminLayout>
    }
};

export default ProtectedRoute;