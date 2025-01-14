import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {card} from "../info/info";
import ProductCard from "../component/product_card";

function SinglePage() {
    const [state, setState] = useState({});
    const [single, setSingle] = useState({});
    const [size, setSize] = useState(null);
    const { id } = useParams();



    useEffect(() => {
        new Promise(resolve => {
            resolve(require('../products.json'));
        }).then((res) => {

            const product = res.find(inf => inf.card_lists.includes(+id) );
            if (product) {
                setState(product);
                setSingle(product.card.find(inf => inf.id === +id))
            }
        });
        console.log(id)
    }, [id]);

    function sizeCheck(e) {
        const selectedSize = e.target.value;
        const sizeInfo = state.card ? state.card.find(item => item.size === selectedSize) : null;
      setSize(sizeInfo.price);
    }

    function addToCard(){
        let data=card.find(item => item.parent_id === +id)
        if(data){
            data.qty++
        }else{
            card.push({
                parent_id:+id,
                qty: 1,
                price:single.price,
                image:single.images[0],
                parent_name:state.name,
            })
        }

        localStorage['cardLists'] = JSON.stringify(card);
    }


    return (
        <>
            <section id="productdetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={state.thumbImg || "images/products/default.jpg"} width="100%" id="MainImg" alt={state.name || "Product"} />
                </div>
                <div className="single-pro-details">
                    <h6>Home / {state.category || "Category"}</h6>
                    <h4>{state.name || "Product Name"}</h4>
                    <h4>{single.price || "Product Name"}</h4>





                      <div className={"d-flex"}>

                          {state.card && state.card.map((value, index) => (
                              <ProductCard key={index} active={value.id=== +id} value={value} />
                          ))}

                      </div>





                    <h2>{size}</h2>
                    <input type="number" defaultValue="1" />
                    <button className="normal" onClick={addToCard}>Add to Cart</button>
                    <h4>Product Details</h4>
                    <span>{state.description || "No details available for this product."}</span>
                </div>
            </section>
        </>
    );
}

export default SinglePage;
