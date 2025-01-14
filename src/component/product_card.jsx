import React from 'react';
import {NavLink} from "react-router";

function ProductCard({value,active}) {
    return (
        <div className={`cardProduct ${active&&'cardActive'}`}>
            <NavLink  to={`/catalog/${value.id}`}>> <img src={value.images[0]} alt=""/></NavLink>

        </div>
    );
}

export default ProductCard;