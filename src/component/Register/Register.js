import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import facebook from '../../images/auth-img/facebook.png';
import google from '../../images/auth-img/google.png';
import github from '../../images/auth-img/github.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';


const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [comfirmPassword,setComfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const navigate = useNavigate();
  
      const [
          createUserWithEmailAndPassword,
          user,
          loading,
        ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
        const [signInWithGoogle, error3] = useSignInWithGoogle(auth);
        const [signInWithGithub ] = useSignInWithGithub(auth);
       
  
  
        let errorElement;
        const handleEmailBlur = event =>{
            setEmail(event.target.value)
        }
        const handlePasswordBlur = event =>{
            setPassword(event.target.value)
        }
        const handleComfirmPassword = event =>{
            setComfirmPassword(event.target.value)
        }
        if(user){
            navigate('/home')
        }
        if(loading){
            return <Loading></Loading>
        }
       
      if(error2){
          errorElement = <p className='text-danger'>{error2?.message}</p>
      }
      if(error3){
          errorElement = <p className='text-danger'>{error3?.message}</p>
      }
        const createUser = event =>{
            event.preventDefault()
            if(password !== comfirmPassword){
              setError('Password No Matching')
              return
          }
          if(password <6){
              setError2('You give me long password')
              return
          }
            createUserWithEmailAndPassword(email,password,comfirmPassword)
        }
    return (
        <>
        <Container>
            <Row>
                <Col lg={5} md={6} sm={12} className='p-5 m-auto shadow-sm rounded-lg mt-3 mb-3'>
                    <h1 className='text-info p-3 text-center mb-3'>Sign Up</h1>
                    <Form onSubmit={createUser}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>New password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="New password" required/>
                        </Form.Group>
                        <p className='text-danger'>{error2}</p>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Comfirm password</Form.Label>
                            <Form.Control onBlur={handleComfirmPassword } type="password" placeholder="Comfirm Password" required/>
                        </Form.Group>
                        <p className='text-danger'>{error}</p>
                        <Button className='w-100' variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <p className='text-danger'>{error}</p>
                    <div className='mt-3'>
                        <p>
                            <small>Already Have an Account?</small> <Link to='/login'>Login</Link>
                        </p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div style={{ height: '1px' }} className='w-50 bg-success'></div>
                        <p className='mt-3 px-2'>OR</p>
                        <div style={{ height: '1px' }} className='w-50 bg-success'></div>
                    </div>
                    {errorElement}
                    <div className='d-flex p-2 ms-3'>
                    <div><img height={50} src={facebook} className='ms-5' alt="" /></div>
                    <div><img height={50} src={google} className='ms-5' alt="" /></div>
                    <div><img height={50} src={github} className='ms-5' alt="" /></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    );
};

export default Register;