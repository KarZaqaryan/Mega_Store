import React, {useEffect, useState} from 'react';
import Hero from "../component/hero";
import Feature from "../component/feature";
import BestProduct from "../component/bestProduct";
import {NavLink} from "react-router";
import HomeProducts from "../component/homeProducts";
import NewItems from "./newItems";
import HomeNew from "../component/newItems";

function HomePage(props) {
    const [state,setState] = useState([])

    useEffect(() => {
        new Promise(resolve => {
            resolve(require('../products.json'))
        }).then(res => {
            setState(res);

        });
    }, []);


    // useEffect(() => {
    //     setState(state.slice(0,8))
    //     console.log(state)
    // },[])

    return (
        <>
            <Hero />
            <Feature/>
            <BestProduct state={state}/>
            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% Off</span> - All t-Shirts & Accessories</h2>
                <button className="normal">Explore More</button>
            </section>

            <HomeProducts state={state}/>

           <HomeNew state={state}/>

            <section id="banner3">
                <div className="banner-box">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
                <div className="banner-box">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring / Summer 2023</h3>
                </div>
                <div className="banner-box">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </div>
            </section>

            <section id="newsletter" className="section-p1 section-m1">
                <div className="newstext">
                    <h4>Sign Up For Newsletter</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your email address"/>
                    <button className="normal">Sign Up</button>
                </div>
            </section>

        </>
    )
        ;
}

export default HomePage;