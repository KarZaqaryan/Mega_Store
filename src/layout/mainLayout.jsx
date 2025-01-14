import React from 'react';
import Header from "../component/header";
import {Outlet} from "react-router";
import Footer from "../component/footer";

function MainLayout(props) {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer />
        </>

    );
}

export default MainLayout;