import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [product,setProduct] = useState({});
  const restockRef = useRef(0);

  useEffect( ()=>{
    const url = `https://fast-sierra-89206.herokuapp.com/inventory/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data);
    })
  },[id]);

    const handleDeliver = id => {
        if(product.quantity > 0){
          const {quantity,...rest} = product;
          const newQuantity = parseInt(quantity) - 1;
          const newItem = {quantity:newQuantity,...rest};
          setProduct(newItem);


            //send data to the server
          fetch(`https://fast-sierra-89206.herokuapp.com/inventory/${id}`,{
          method:"PUT",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify(newItem)
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
          })

        }else{}
    }

    const handleRestockButton = () =>{
        const restockQuantity = restockRef.current.value;
        const {quantity,...rest} = product;
        const newQuantity = parseInt(quantity) + parseInt(restockQuantity);
        const newItem = {quantity:newQuantity,...rest};
        setProduct(newItem);


        //send data to the server
        fetch(`https://fast-sierra-89206.herokuapp.com/inventory/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newItem)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

        restockRef.current.value = "";
    }

  return (
    <div className="inventory-product-container">
      <div className="product-div">
        <div className="product-img">
          <img src={product.picture} alt="" />
        </div>
        <div className="product-detail">
          <h1>
            {product.name}
          </h1>

          <h4>
            Price: {product.price}
          </h4>
          <hr />
          <div className="mt-2 mb-4">
            <p>
              <small className="fw-bold">
                Quick Overview
              </small>
            </p>
            <p>
              <small>
                {product.description}
              </small>
            </p> 
          </div>
          <p>
            <span className="fw-bold">Quantity :</span> <input className="border border-0 bg-light" type="text"  value={product.quantity} readOnly/>
          </p>

          <p>
            <small>
              <span className="fw-bold">Supplier Name: </span>{product.supplier_name}
            </small>
          </p>
          
          <p><small><span className="fw-bold">Stock : </span>{product.quantity <= 0 ? <span className="fw-bold text-danger">Stock Out</span> :<span >Available</span>}</small></p>
          
          <div className="button-field">
            <button onClick={handleDeliver} className="btn ">Delivered</button>
            <div className="d-flex">
              <input className="border border-0 bg-light" ref={restockRef} type="number" name="restockNumber" placeholder="restoke item"  />
              <button onClick={handleRestockButton} className="btn ms-1"> Restock</button>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div className="manage-inventory text-end">
        <Link to='/manageitem'><button className="btn btn-success ">Manage Inventories</button></Link>
      </div>
    </div>
  );
};

export default Inventory;
