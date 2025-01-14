import React from 'react';
import {NavLink} from "react-router";

function BestProduct({state}) {
    return (
        <>
            <section id="" className="section-p1 product1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    {
                        state.slice(0,8).map((res, i) => (
                            <div className="pro" key={i}>
                                <div className="des">
                                    <span>adidas</span>
                                    <h5>{res.name}</h5>
                                    <div className="star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <NavLink to={`/catalog/${res.active_card}`}><i className="fas fa-shopping-cart cart"></i></NavLink>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default BestProduct;