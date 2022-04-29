import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
  
  
    if(user){
      navigate('/');
    }
  
    return (
      <div className="w-25 mx-auto my-5 border border-2 p-4">
        <h2 className="text-center mb-4">Register</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          
          <Button className="w-100" variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <p><small>Already have an account? <span><Link className="text-decoration-none" to='/login'>Login</Link></span></small></p>
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