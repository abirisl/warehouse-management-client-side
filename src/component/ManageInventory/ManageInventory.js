import React from 'react';
import { Table } from 'react-bootstrap';
import useProduct from '../../Hooks/useProduct';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [products, setProducts] = useProduct();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                })


        }
    }

    const navigate = useNavigate();

    const navigatorServiceDetail = id => {
        navigate('/additems');
    }
    return (
        <Table striped bordered hover variant="dark" className='w-100'>
                <thead>
                    <tr> 
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
               
                {
                    products.map(product =>
                        <tbody key={product._id}>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><img style={{ height: '50px', width: '50px' }} className='ms-3' src={product.img} alt="" /></td>
                                <td>{product.quantity}</td>
                                <td><button className='w-100 bg-success text-white' onClick={() => handleDelete(product._id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    )
                }
                <button className='mt-4 w-50 btn btn-link text-decoration-none fw-bold' style={{ marginLeft: '200px' }} onClick={() => navigatorServiceDetail()}>Add Product</button>
                
        </Table>
    );
};

export default ManageInventory;