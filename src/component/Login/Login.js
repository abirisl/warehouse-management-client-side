import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle  } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import facebook from '../../images/auth-img/facebook.png';
import google from '../../images/auth-img/google.png';
import github from '../../images/auth-img/github.png';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
   
    const [
        signInWithEmailAndPassword,
        user,loading
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, user2, error2] = useSignInWithGoogle(auth);
    const [signInWithGithub, error3] = useSignInWithGithub(auth);
    
    let errorMessage;
    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const resetPassword =async () =>{
        await sendPasswordResetEmail(email);
          alert('Sent email');
    }
    if (user) {
        navigate('/home')
        
    }
    if(user2){
        navigate('/home')
    }
    if(error2){
        errorMessage= <p className='text-danger'>{error2?.message}</p>
    }
    if(error3){
        errorMessage= <p className='text-danger'>{error3?.message}</p>
    }
    if(loading){
       return <Loading></Loading>
    }

    const handleSignIn = event =>{
        event.preventDefault()
        if(!user){
            setError('Please create an register')
        }
        signInWithEmailAndPassword(email, password)
        
    }
    let from = location.state?.from?.pathname || "/home";

    if (user) {
      navigate(from, { replace: true });
    }
    return (
        <>
            <Container>
                <Row>
                    <Col lg={5} md={6} sm={12} className='p-5 m-auto shadow-sm rounded-lg mt-3 mb-3'>
                        <h1 className='text-success p-3 text-center mb-3'>Sign In</h1>
                        <Form onSubmit={handleSignIn}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
                            </Form.Group>
                            <Button className='w-100' variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <div className='mt-3'>
                            <p>
                                <small>New to Company?</small> <Link to='/register'>Create a new Account</Link>
                            </p>
                            <p>
                                <small>Forget Password? </small><Link to='register'>reset password</Link>
                            </p>
                            <p className='text-danger'>{error}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div style={{ height: '1px' }} className='w-50 bg-success'></div>
                            <p className='mt-3 px-2'>OR</p>
                            <div style={{ height: '1px' }} className='w-50 bg-success'></div>
                        </div>
                        {errorMessage}
                        <div className='d-flex p-2 ms-3'>
                        <div><img height={50} src={facebook} className='ms-5' alt="" /></div>
                        <div onClick={() => signInWithGoogle()}><img height={50} src={google} className='ms-5' alt="" /></div>
                        <div onClick={() => signInWithGithub()}><img height={50} src={github} className='ms-5' alt="" /></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
