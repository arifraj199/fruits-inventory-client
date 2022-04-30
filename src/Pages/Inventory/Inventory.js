import React, { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [products] = useProductDetail(id);
  const quantityRef = useRef(0);
  const [quantity,setQuantity] = useState(0);
  const location = useLocation();

    const updateButton = () => {
        // event.preventDefault();
        const productQuantity = quantityRef.current.value;
        const quantity = productQuantity-1;
        // console.log(quantityDecrease);
        
        // console.log(quantity);

        const updateQuantity = {quantity}
        console.log(updateQuantity);
        // setQuantity(productQuantity);

        //send data to the server
        fetch(`http://localhost:5000/inventory/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0 ){
                console.log('quantity decrease')
                // setQuantity(updateQuantity);
            }

        })

        // location.reload();
    }

  return (
    <div>
      <div className="product-div">
        <div className="product-img">
          <img src={products.picture} alt="" />
        </div>
        <div className="product-detail">
          <p>
            Products Id: {id}
          </p>
          <h1>
            {products.name}
          </h1>
          <h4>
            Price: {products.price}
          </h4>
          <p>
            <span className="fw-bold">Quantity :</span> <input className="border border-1" type="text" ref={quantityRef}  value={products.quantity} readOnly/>
          </p>
          <p>
            <small>
              {products.description}
            </small>
          </p> 
          <p>Stock : <span className="fw-bold">Available</span></p>
          <p>
            <small>
              Supplier Name: {products.supplier_name}
            </small>
          </p>
          <button onClick={updateButton} className="btn btn-success">Delivered</button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
