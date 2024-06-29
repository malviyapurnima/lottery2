import React from 'react';
import PropTypes from "prop-types";
import AdminSidebar from './Navigation/AdminSidebar';

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className='flex'>
                <div className='bg-gradient-to-r from-primary-dark to-primary-light h-[100vh]'><AdminSidebar /></div>
                <div className='w-full h-[100vh] overflow-auto p-8 '>{children}</div>
            </div>
        </>
    )
};

AdminLayout.propTypes = {
    children: PropTypes.node,
};


export default AdminLayout;