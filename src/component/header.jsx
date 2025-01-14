import React, {useEffect, useState} from 'react';
import {data, NavLink} from "react-router";

function Header(props) {
    const [state,setState] = useState([])

    useEffect(() => {
        const data = require('../categories.json');
        setState(data);
    }, []);

    return (
        < >
            <section id="header">
                <NavLink><img src={require('../assets/images/logo.png')} className="logo" alt=""/></NavLink>
                <div>
                    <ul id="navbar">
                        {
                            state.map((item, i) => (
                                <li key={i}><NavLink to={`/partner/${item.id}`}>{item.label}</NavLink></li>
                            ))
                        }
                        <NavLink to={'/card'}><i className="far fa-shopping-bag"></i></NavLink>
                    </ul>
                </div>
                <div id="mobile">
                    <a><i className="far fa-shopping-bag"></i></a>
                    <i id="bar" className="fas fa-outdent"></i>
                </div>
            </section>
        </>
    );
}

export default Header;