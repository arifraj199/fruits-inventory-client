import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});


    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
  
    if(error || error1){
        errorElement = <p>Error: {error?.message} {error1?.message}</p>
    }

    if(loading || loading1){
      return <LoadingSpinner></LoadingSpinner>
    }

    if(user || user1){
      console.log('verification email send',user);
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
            event.target.reset();
        }
    }
  
    return (
      <div className="login-form-container">
      <div className="login-img">
        <img src="https://i.ibb.co/pw6kGSR/Mobile-login.jpg" alt="" />
      </div>
      <div className="login-form register-form border-2 px-5">
      <h2 className="text-center mt-2 mb-4 text-white fs-1 fw-bold pt-4 login-form-title">Register</h2>
      <Form onSubmit={handleRegisterForm}> 
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Control className="login-form-input" type="email" name="email" placeholder="email" required />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Control className="login-form-input" type="password" name="password" placeholder="password" required />
        </Form.Group>
        
        <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control className="login-form-input" type="password" name='confirmPassword' placeholder="Confirm Password" required/>
        </Form.Group>

        <div className="login-form-button">
        <Button variant="primary" type="submit">
          Register
        </Button>
        </div>
      </Form>

      <p className="text-danger error-text">{errorElement}</p>
      

      <div className="d-flex justify-content-center align-items-center">
        <hr className="bg-primary w-25"/>
        <p className="text-center mt-1 text-white mx-2">Or</p>
        <hr className="bg-primary w-25"/>
      </div>
      
      <div className="w-75 mx-auto">
      <button onClick={()=> signInWithGoogle()} className="btn text-center w-100 rounded-3 justify-content-center align-items-center mx-auto d-flex btn-dark fw-bold">
          <img src='https://i.ibb.co/WGjM94V/google.png' alt="" />
          <span className="ms-2">Google Sign In</span>
        </button>
      </div>
     
      <p className="login-form-create-account-text mt-4"><small>Already have an account? <span><Link className="text-decoration-none" to='/login'>Login</Link></span></small></p>
      
      
      </div>
    </div>

      // <div className="w-25 mx-auto my-5 border border-2 p-4">
      //   <h2 className="text-center mb-4">Register</h2>
      //   <Form onSubmit={handleRegisterForm}>
      //     <Form.Group className="mb-3" controlId="formBasicEmail">
      //       <Form.Label>Email address</Form.Label>
      //       <Form.Control type="email" name='email' placeholder="Enter email" />
      //     </Form.Group>
  
      //     <Form.Group className="mb-3" controlId="formBasicPassword">
      //       <Form.Label>Password</Form.Label>
      //       <Form.Control type="password" name='password' placeholder="Password" />
      //     </Form.Group>

      //     <Form.Group className="mb-3" controlId="formBasicPassword">
      //       <Form.Label>Confirm Password</Form.Label>
      //       <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" />
      //     </Form.Group>
          
      //     <Button className="w-100" variant="primary" type="submit">
      //       Register
      //     </Button>
      //   </Form>
      //   <p><small>Already have an account? <span><Link className="text-decoration-none" to='/login'>Login</Link></span></small></p>
        
      //   <p className='text-danger'>{errorElement}</p>
      //   <p className="text-center mt-3">Or</p>
      //   <div>
      //   <button onClick={()=> signInWithGoogle()} className="btn text-center w-100 rounded-3 justify-content-center align-items-center mx-auto d-flex btn-info fw-bold">
      //       <img src='https://i.ibb.co/WGjM94V/google.png' alt="" />
      //       <span className="ms-2">Google Sign In</span>
      //     </button>
      //   </div>
      // </div>

      
    );
  };
  

export default Register;