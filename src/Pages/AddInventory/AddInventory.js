import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import './AddInventory.css';

const AddInventory = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data,event) => {
      console.log(data)

       //send data to the server
    const url = `https://fast-sierra-89206.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });

      event.target.reset();
      
    };

  return (
    <div className="add-item-container">
      <h2 className="text-center mb-4 add-item-title">Add Items</h2>
      <form
        className="d-flex flex-column add-item-form-container"
        onSubmit={handleSubmit(onSubmit)}
      >
         <span className="fw-bold">Email: </span>
          <input
            className="mb-2"
            type="email"
            value={user?.email}
            readOnly
            {...register("email", { required: true })}
          />

         <span className="fw-bold">Item Name: </span>
          <input
            className="mb-2"
            placeholder="items name"
            {...register("name", { required: true, maxLength: 20 })}
          />
        
        
       
      <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-bold ">Price: </span>
            <input
              className=" add-item-price ms-2"
              placeholder="price"
              type="number"
              {...register("price", { min: 5, max: 150 })}
            />
            <span className="fw-bold ms-3">Quantity: </span>
            <input
              className=" add-item-quantity ms-2"
              placeholder="quantity"
              type="number"
              {...register("quantity", { min: 5, max: 99 })}
            />
      </div>

      <span className="fw-bold">Supplier Name: </span>
          <input
            className="mb-2"
            placeholder="supplier name"
            {...register("supplier_name", { required: true, maxLength: 20 })}
          />

      <span className="fw-bold ">Photo URL:</span>
          <input
            className="mb-2"
            placeholder="items photo url"
            {...register("picture")}
          />

        <span className="fw-bold">Item Description:</span>
        <textarea
          className="mb-3"
          placeholder="short description"
          {...register("description", { required: true, maxLength: 150 })}
        />
        <input
          className="mb-2 btn add-item-button"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddInventory;
