import React, {useEffect, useState} from 'react';
import {card} from "../info/info";

function Cart(props) {
    const [state,setState] = useState({value:[],
        total:0})

    useEffect(() => {
        console.log(card)
        let item = card.filter(res => {
                state.value.map(inf => {
                    if (inf.parent_id===inf.parent_id){
                        inf.qty++
                    }
                })
        })
        console.log(item)
        update()
    },[card])

    function deleteItem(id){
        let ids = card.findIndex(res => res.parent_id === id)
       card.splice(ids, 1);
               localStorage['cardLists'] = JSON.stringify(card);
        update()
    }
function update(){
    setState({
        value: card,
        total:card.reduce((prev, current) => prev + parseFloat(current.price)*current.qty, 0)
    })
}
    return (
        <>
            <section id="page-header" className="about-header">
                <h2>#cart</h2>
                <p>Add your coupon code & SAVE upto 70%!</p>
            </section>

            <section id="cart" className="section-p1">
                <table width="100%">
                    <thead>
                    <tr>
                        <td>Remove</td>
                        <td>N</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        state.value.map((item, index) => (
                            <tr key={index}>
                                <td onClick={() => deleteItem(item.parent_id)}><i className="fas fa-times-circle"></i>
                                </td>
                                <td>{item.parent_id}</td>
                                <td><img src={item.image} alt=""/></td>
                                <td>{item.parent_name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td>{parseFloat(item.price) * item.qty}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </section>

            <section id="cart-add" className="section-p1">
                <div className="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon"/>
                        <button className="normal">Apply</button>
                    </div>
                </div>
                <div className="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$ 335</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>{state?.total}$</strong></td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="normal">Proceed to checkout</button>
                </div>
            </section>
        </>
    );
}

export default Cart;