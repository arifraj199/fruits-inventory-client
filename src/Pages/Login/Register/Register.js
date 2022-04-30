import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
  
    if(error || error1){
        errorElement = <p>Error: {error?.message} {error1?.message}</p>
    }

    if(user || user1){
      navigate('/');
    }

    const handleRegisterForm = async event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if(password === confirmPassword){
            await createUserWithEmailAndPassword(email,password);
        }else{
            alert("password didn't matched");
            event.target.password.reset();
            event.target.confirmPassword.reset();
        }
    }
  
    return (
      <div className="w-25 mx-auto my-5 border border-2 p-4">
        <h2 className="text-center mb-4">Register</h2>
        <Form onSubmit={handleRegisterForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" />
          </Form.Group>
          
          <Button className="w-100" variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <p><small>Already have an account? <span><Link className="text-decoration-none" to='/login'>Login</Link></span></small></p>
        
        <p className='text-danger'>{errorElement}</p>
        <p className="text-center mt-3">Or</p>
        <div>
        <button onClick={()=> signInWithGoogle()} className="btn text-center w-100 rounded-3 justify-content-center align-items-center mx-auto d-flex btn-info fw-bold">
            <img src='https://i.ibb.co/WGjM94V/google.png' alt="" />
            <span className="ms-2">Google Sign In</span>
          </button>
        </div>
      </div>
    );
  };
  

export default Register;