import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return (
        <div className='p-5 text-center'>
            <Row xs={1} md={3} className="g-4">
            {
                products.map(product => <Product key={product.id} card= {product}></Product>)
            }
            </Row>
        </div>
    );
};

export default Products;