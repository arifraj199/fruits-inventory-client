import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";
import LoadingSpinner from '../../Pages/Shared/LoadingSpinner/LoadingSpinner';
import CustomersReviews from "../CustomersReviews/CustomersReviews";
import FastDelivery from "../FastDelivery/FastDelivery";
import AboutFarm from "../LookFarm/AboutFarm";
import "./Home.css";

const Home = () => {
  const [user] = useAuthState(auth);
  const [products,setProducts] = useState([]);
  const [Loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch('https://fast-sierra-89206.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>{
          setProducts(data);
          setLoading(false);
        })
    },[])



  const navigate = useNavigate();

  const handleNavigate = id =>{
    navigate(`/inventory/${id}`);
  }

  return (
    <div>
      <div className="banner-container mb-5">
        <div className="banner-title">
          <h1>
            Organic Fruits & Vegetable <br /> For Live Healthy
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim
            sint laboriosam error.
          </p>
          <button className="btn btn-outline-success fs-5 px-5  fw-bold">
            Know More
          </button>
        </div>
      </div>
      <div className="mb-5 text-center">
        <h2 className="item-title">Fruits Stoke</h2>
        <hr className="item-hr"/>
        
        {
        Loading ? <LoadingSpinner></LoadingSpinner>
        :
        <div className="product-container">
        {
 
                      
            products?.slice(0,6).map(product=>
              <div className="product" key={product._id}>
  
                <CardGroup>
                  <Card className="border border-0">
                    <Card.Img variant="top" src={product.picture} />
                    <Card.Body>
                      <Card.Title className="fs-3 mb-3">{product.name}</Card.Title>
                      <Card.Text>
                      <h5 className="mb-1"><span className="fw-bold">Price:</span> {product.price}</h5>
                      <p className=" mb-0"> <small><span className="fw-bold">Quantity:</span> {product.quantity}</small></p>
                      <p><small><span className="fw-bold"> Suppier: </span>{product.supplier_name}</small></p>
                      
                      <small>{product.description}</small>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="w-50 mx-auto border border-0 footer">
                      <button onClick={()=>handleNavigate(product._id)} className="btn btn-primary ">Update</button>
                    </Card.Footer>
                </Card>
                </CardGroup>
                
                {/* <img src={product.picture} alt="" />
                <h3>{product.name}</h3>
                <h5>Price: {product.price}</h5>
                <p><small>{product.description}</small></p>
                <p>Quantity: {product.quantity}</p>
                <p>Supplier: {product.supplier_name}</p>
                <button onClick={()=>handleNavigate(product._id)} className="btn btn-success">Stock Update</button> */}
                
              </div>
              )
            }
             </div>
        }
        
          
       
      </div>

      <div className="manage-inventory my-5 text-end manage-button">
        <Link to='/manageitem'><button className="btn me-3 ">Manage Inventories</button></Link>
      </div>
      <AboutFarm></AboutFarm>
      <CustomersReviews></CustomersReviews>
      <FastDelivery></FastDelivery>
    </div>
  );
};

export default Home;
