import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    
     const onSubmit = (data) => {
        
        const url = ` https://salty-reef-38421.herokuapp.com/additems`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
            },
   
        })
        .then(res=>res.json())
            .then(result => {
            console.log(result);
              reset()
        })
     };
    return (
        <>
            <Container>
                <Row>
                    <Col lg={5} md={6} sm={12} className='p-5 m-auto shadow-sm rounded-lg mt-3 mb-3'>
                        <h1 className='text-primary p-3 text-center mb-3'>Add Items</h1>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="text" placeholder="Product name" {...register("name", { required: true, maxLength: 20 })}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="text" placeholder="Suplier name" {...register("name", { required: true, maxLength: 20 })}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="email" defaultValue={user?.email} {...register("email")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="number" placeholder="Price"  {...register("price")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="number" placeholder="Quantity"  {...register("quantity")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Control type="text" placeholder="Description" {...register("description")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Control type="text" placeholder="Photo url" {...register("img")}/>
                            </Form.Group>
                            <Button className='w-100' variant="primary" type="submit">
                                Add Product
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddItems;