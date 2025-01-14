import React from 'react';
import {NavLink} from "react-router";

function Hero(props) {
    return (

        <section id="hero">
            <h4>Trade-in-offer</h4>
            <h2>New Items</h2>
            <h1> products</h1>
            <p>Save more with coupons & up to 70% off!</p>
            <NavLink to={'bestSellers'}>
                <button>Shop Now</button>
            </NavLink>
        </section>
    );
}

export default Hero;