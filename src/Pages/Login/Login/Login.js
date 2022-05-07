import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import axios from "axios";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  const navigate = useNavigate();
  let errorElement;
  const emailRef = useRef("");

  const from = location.state?.from?.pathname || "/";

  if (error || error1 || error2) {
    errorElement = (
      <p>
        Error: {error?.message} {error1?.message} {error2?.message}
      </p>
    );
  }

  if (loading || loading1 || sending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (user || user1) {
    // console.log(user);
    navigate(from, { replace: true });
    //
  }

  const handleLoginForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://fast-sierra-89206.herokuapp.com/login",
      { email }
    );
    console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
  };

  const handleReset = async () => {
    const email = emailRef.current.value;
    // console.log(email);
    await sendPasswordResetEmail(email);
    if (email) {
      toast("send email for reset password");
    } else {
      toast("please enter your email for reset");
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-img">
        <img src="https://i.ibb.co/5KZ4p42/4957136.jpg" alt="" />
      </div>
      <div className="login-form border-2 px-5">
        <h2 className="text-center mt-4 mb-4 text-white fs-1 fw-bold pt-4 login-form-title">
          Login
        </h2>
        <Form onSubmit={handleLoginForm}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control
              className=" login-form-input"
              type="email"
              ref={emailRef}
              name="email"
              placeholder="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control
              className="login-form-input"
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </Form.Group>
          <p className="login-form-reset-text text-end">
            <small>
              Forget Your Password?{" "}
              <span>
                <Link
                  onClick={handleReset}
                  to="/login"
                  className="text-decoration-none "
                >
                  Reset
                </Link>
              </span>
            </small>
          </p>
          <div className="login-form-button">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>

        <p className="text-danger error-text">{errorElement}</p>

        <div className="d-flex justify-content-center align-items-center">
          <hr className="bg-primary w-25" />
          <p className="text-center mt-1 text-white mx-2">Or</p>
          <hr className="bg-primary w-25" />
        </div>

        <div className="w-75 mx-auto">
          <button
            onClick={() => signInWithGoogle()}
            className="btn text-center w-100 rounded-3 justify-content-center align-items-center mx-auto d-flex btn-dark fw-bold"
          >
            <img src="https://i.ibb.co/WGjM94V/google.png" alt="" />
            <span className="ms-2">Google Sign In</span>
          </button>
        </div>

        <p className="login-form-create-account-text mt-4">
          <small>
            Don't have any account?{" "}
            <span>
              <Link className="text-decoration-none" to="/register">
                Create Account
              </Link>
            </span>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
