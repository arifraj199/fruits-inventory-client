import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";

const Login = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if(user){
    console.log(user);
    navigate(from,{replace:true});
  }

  return (
    <div className="w-25 mx-auto mt-5 border border-2 p-4">
      <h2 className="text-center mb-4">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p><small>Don't have any account? <span><Link className="text-decoration-none" to='/register'>Create Account</Link></span></small></p>
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

export default Login;
