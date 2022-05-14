import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyItem = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    const [user] = useAuthState(auth);

    
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
    };
    const navigate = useNavigate();

    useEffect(() =>{
    
        const getItem = async () =>{
            const email = user?.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                setProducts(data);
            }
            catch(error){
                if(error.response.status ===403 || error.response.status === 401){
                    signOut(auth);
                    navigate("/login")
                }
            }
        }
        getItem()
    }, [user]);
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
        
</Table>
    );
};

export default MyItem;