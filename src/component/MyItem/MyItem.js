import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useProduct from '../../Hooks/useProduct';
import ShowItems from '../ShowItems/ShowItems';

const MyItem = () => {
    const [products, setProducts] = useProduct();
    console.log(products)
    const [user] = useAuthState()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `https://salty-reef-38421.herokuapp.com/product/${id}`;
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

    useEffect(() =>{
        const email = user.email;

        const getItem = async () =>{
            const url = `https://salty-reef-38421.herokuapp.com/myItems?email=${email}`;
            try{
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("accessToken")}`,
                    },
                })

                setProducts(data);
            }
            catch(error){
                if(error.respose.status === 403 || error.respose.status === 401){
                    signOut(auth)
                    navigate('/login')
                }
            }
        };
        getItem()
    }, [user]);
    return (
        <div>
            <h1>{products.name}</h1>
            {
                products.map(item => <ShowItems item={item}></ShowItems>)
            }
        </div>
    );
};

export default MyItem;