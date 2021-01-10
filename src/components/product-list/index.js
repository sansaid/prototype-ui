import React from 'react';
import { products } from './products';
import './product-list.css';

function share() {
    window.alert('The product has been shared!');
}

function getProduct(product, index) {
    return (
        <div key={index}>
            <h3>
                <a title={product.name + ' details'} href="/">{product.name}</a>
            </h3>
            <p>Description: {product.description} </p>
            <button className="btn" onClick={share}>Share</button>
        </div>
    )
}

export default function ProductList() {
    return (
        <>
            <h2>Products</h2>
            <br/>
            <div>
                {
                    products.map((product, index) => {
                        return getProduct(product, index);
                    })
                }
            </div>
        </>
    )
}