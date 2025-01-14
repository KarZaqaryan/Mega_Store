import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Paginate from '../component/paginate';
import { NavLink } from "react-router";
import { partners } from "../info/info";
import {logDOM} from "@testing-library/react";

function Shop() {
    const { id, pageNumber } = useParams();
    const [state, setState] = useState([]); // Array to hold filtered products
    const itemsPerPage = 20;
    const currentPage = parseInt(pageNumber, 10) || 1;


    useEffect(() => {
        console.log(id);
       new Promise((resolve) => {
            resolve(require('../products.json'));
        })
           .then((data) => {

               setState(data.filter(item => item.partner_id === +id))
           })


    }, [id]);

    useEffect(() => {
        console.log(state)
    }, [state]);

    const totalPages = Math.ceil(state.length / itemsPerPage);

    return (
        <>
            <section className="section-p1 product1">
                <div className="pro-container">
                    {state.length === 0 ? (
                        <p>No products available in this category.</p>
                    ) : (
                        state
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((partner, i) => (
                                <div className="pro" key={partner.id}>
                                    <img src={partner.thumbImg} alt={partner.name} />
                                    <div className="des">
                                        <h5>{partner.name}</h5>
                                    </div>
                                    <NavLink to={`/catalog/${partner.active_card}`}>
                                        <button type="button" className="btn btn-lg btn-primary">
                                            Add To Cart
                                        </button>
                                    </NavLink>
                                </div>
                            ))
                    )}
                </div>
            </section>
            <Paginate currentPage={currentPage} totalPages={totalPages} shopId={id} />
            <Outlet />
        </>
    );
}

export default Shop;
