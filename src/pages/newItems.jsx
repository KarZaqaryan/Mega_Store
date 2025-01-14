import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router";

function NewItems(props) {
    const [state,setState] = useState([])

    useEffect(()=>{
        new Promise(resolve => {
            resolve(require('../products.json'))
        }).then(res => {
            setState(res.filter(item => item.action.new).slice(0,24));
        })
    },[])



    return (
        <>
            <section className={'NewItems'}>
                <h1>This Is Over New Items</h1>
            </section>

            <section className={'NewItems_cards'}>
                {
                    state.map((partner, i) => (
                        <div className="card" style={{width: "18rem"}}>
                            <img src={partner.thumbImg} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{partner.name}</h5>
                                <NavLink to={`/catalog/${partner.active_card}`}> <a className="btn btn-primary">Go To Card</a></NavLink>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>

    );
}

export default NewItems;

// to={`/catalog/${partner.active_card}`