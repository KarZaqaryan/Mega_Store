import React from 'react';
import {NavLink} from "react-router";

function HomeNew({state}) {
    return (
        <section id="sm-banner" className="section-p1">
            <div className="banner-box">
                <h4>New Items</h4>
                <h2>See Over New Items</h2>
                <span>The best classic dress is on sale at cara</span>
                <NavLink to={'newItems'}>
                    <button className="white">Learn more</button>
                </NavLink>
            </div>

            <div className="banner-box">
                <h4>Best Sellers</h4>
                <h2>Best Products</h2>
                <span>The best classic dress is on sale at cara</span>
                <NavLink to={'bestSellers'}>
                    <button className="white">Collection</button>
                </NavLink>
            </div>
        </section>
    );
}

export default HomeNew;