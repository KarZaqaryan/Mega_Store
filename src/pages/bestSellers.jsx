import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router";
import products from '../products.json';

function BestSellers(props) {
    const [state, setState] = useState([]);

    useEffect(() => {
        const bestSellers = products
            .filter(product => product.action?.best)
            .slice(0, 28);
        setState(bestSellers);
    }, []);

    return (
        <section className="bestSellers">
            <div className="bestSellers_header">
                <h1>Best Sellers Products</h1>
            </div>

            <div className="bestSellers_products">
                {state.map(partner => (
                    <div className="card" style={{ width: "18rem" }} key={partner.id}>
                        <img src={partner.thumbImg} className="card-img-top" alt={partner.name} />
                        <div className="card-body">
                            <h5 className="card-title">{partner.name}</h5>
                            <p className="card-text">{partner.action?.buy_count}</p>
                            <NavLink to={`/catalog/${partner.active_card}`} className="btn btn-primary">
                                Go To Card
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BestSellers;
