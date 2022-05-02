import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-item-one">
            <h5>
              FRUIT & <br /> VEGETABLE STOCK
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              suscipit quasi, accusantium maiores consectetur perspiciatis
              facilis optio.{" "}
            </p>
            <p>
              temporibus unde tempora possimus ipsum aspernatur eligendi, quidem
              id. A architecto corrupti facilis.
            </p>
          </div>
          <div className="footer-item-two">
            <h6>KEEP IN TOUCH</h6>
            <hr />
            <p>Address: Monipur Bazar,Gazipur Sadar,Gazipur.</p>
            <p>Phone: +9977865748</p>
            <p>Email: karif9514@gmail.com</p>
          </div>
          <div className="footer-item-three">
            <h6>FEATURED LINKS</h6>
            <hr />
            <p>
              <a href="#">BLOG</a>
            </p>
            <p>
              <a href="#">ABOUT</a>
            </p>
            <p>
              <a href="#">CONTACT</a>
            </p>
            <p>
              <a href="#">FAQ</a>
            </p>
          </div>
          <div className="footer-item-four">
            <h6>NewsLetter</h6>
            <hr />
            <h6>Sign Up For Newletters</h6>
            <p>Be the First to Know. Sign up for newsletter today !</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Sign Up
              </Button>
            </InputGroup>
          </div>
        </div>
        <div className="footer-bottom">
          <p>copyright @2022 || All Right Reserve Fruit Inventory</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
