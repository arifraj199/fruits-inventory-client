import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer,toast  } from "react-toastify";
import auth from "../../../firebase.init";
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import axios from "axios";

const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
    auth
  );

  const location = useLocation();
  const navigate = useNavigate();
  let errorElement;
  const emailRef = useRef('');

  const from = location.state?.from?.pathname || '/';

  if(error || error1 || error2){
    errorElement = <p>Error: {error?.message} {error1?.message} {error2?.message}</p>
  }

  if(loading || loading1 || sending){
    return <LoadingSpinner></LoadingSpinner>
  }

  if(user || user1){
    // console.log(user);
    // 
  }

  const handleLoginForm = async event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    await signInWithEmailAndPassword(email,password);
    const {data} = await axios.post('https://fast-sierra-89206.herokuapp.com/login',{email});
    console.log(data);
    localStorage.setItem('accessToken',data.accessToken);
    navigate(from,{replace:true});
    
  }

  const handleReset = async ()=> {
    const email = emailRef.current.value
    // console.log(email);
    await sendPasswordResetEmail(email);
    if(email){
      toast('send email for reset password');
      
    }else{
      toast('please enter your email for reset');
    }
  }

  return (
    <div className="w-25 mx-auto my-5 border border-2 p-4">
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleLoginForm}> 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p className="text-danger">{errorElement}</p>
      <p><small>Don't have any account? <span><Link className="text-decoration-none" to='/register'>Create Account</Link></span></small></p>

      <p><small>Forget Your Password? <span><Link onClick={handleReset} to='/login' className="text-decoration-none">Reset</Link></span></small></p>
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
