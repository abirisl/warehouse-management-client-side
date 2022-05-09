import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import useProduct from '../../Hooks/useProduct';


const Products = () => {

    const [products] = useProduct();
    return (
        <div className='p-5 text-center'>
            <Row xs={1} md={3} className="g-4 p-3 ">
            {
                products.map(product => <Product key={product._id} card= {product}></Product>)
            }
            </Row>
        </div>
    );
};

export default Products;