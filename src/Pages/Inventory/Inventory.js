import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [product] = useProductDetail(id);
  const quantityRef = useRef(0);
  const restockRef = useRef(0);

    const updateButton = () => {
        const productQuantity = quantityRef.current.value;
        const quantity = productQuantity-1;
        const updateQuantity = {quantity}

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
        })

        window.location.reload();
    }

    const handleRestockButton = () =>{
        const restockQuantity = restockRef.current.value;
        const productQuantity = quantityRef.current.value;

        const updateRestockQuantity = parseInt(restockQuantity) + parseInt(productQuantity);
        console.log(updateRestockQuantity);

        const quantityUpdated = {quantity:updateRestockQuantity};


        //send data to the server
        fetch(`http://localhost:5000/inventory/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(quantityUpdated)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

        window.location.reload();
    }

  return (
    <div>
      <div className="product-div">
        <div className="product-img">
          <img src={product.picture} alt="" />
        </div>
        <div className="product-detail">
          <p>
            Products Id: {id}
          </p>
          <h1>
            {product.name}
          </h1>
          <h4>
            Price: {product.price}
          </h4>
          <p>
            <span className="fw-bold">Quantity :</span> <input className="border border-1" type="text" ref={quantityRef}  value={product.quantity} readOnly/>
          </p>
          <p>
            <small>
              {product.description}
            </small>
          </p> 
          <p>Stock : <span className="fw-bold">Available</span></p>
          <p>
            <small>
              Supplier Name: {product.supplier_name}
            </small>
          </p>
          <div className="button-field">
            <button onClick={updateButton} className="btn btn-success">Delivered</button>
            <div className="d-flex">
              <input ref={restockRef} type="number" name="restockNumber"  />
              <button onClick={handleRestockButton} className="btn btn-success ms-1"> Restock</button>
            </div>
          </div>
          
        </div>
      </div>
      <div className="manage-inventory my-5 text-end">
        <Link to='/manageitem'><button className="btn btn-success me-1">Manage Inventories</button></Link>
      </div>
    </div>
  );
};

export default Inventory;
