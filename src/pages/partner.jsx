import React, {useEffect, useState} from 'react';
import {partners} from "../info/info";
import {NavLink, useParams} from "react-router";

function Partner(props) {
    let {slug} = useParams();
    const [state, setState] = useState(partners)
    const  [partner,setPartner] = useState([])

    useEffect(() => {
        setState(partners.filter(res =>res.category_id.includes(+slug) ))
        console.log(slug)
    },[slug])

    useEffect(() => {
        console.log(partner)
    },[partner])

    return (
        <>
            <section id="page-header" className="blog-header">
                <h2>#readmore</h2>
                <p>Read all case studies about our products!</p>
            </section>

            <section id="blog">
                {
                    state.map((res,i) => (
                        <div className="blog-box" key={i}>
                            <div className="blog-img">
                                <img src={res.logo} alt=""/>
                            </div>
                            <div className="blog-details">
                                <h4>{res.name}</h4>
                                <NavLink to={`shop/${res.id}`}>Go To Products</NavLink>
                            </div>
                            <h1>13/01</h1>
                        </div>
                    ))
                }
            </section>


        </>
    );
}

export default Partner;