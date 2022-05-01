import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddInventory = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data)

       //send data to the server
    const url = `http://localhost:5000/inventory`;
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
      
    };

  return (
    <div>
      <h2 className="text-center mt-3">Add New Items</h2>
      <form
        className="d-flex flex-column border border-2 rounded-3 p-5 w-50 mx-auto mt-3 mb-5"
        onSubmit={handleSubmit(onSubmit)}
      >
         <input
          className="mb-2"
          type="email"
          value={user?.email}
          readOnly
          {...register("email", { required: true })}
        />
        
        <span className="fw-bold ">Item Name:</span>
        <input
          className="mb-2"
          placeholder="items name"
          {...register("name", { required: true, maxLength: 20 })}
        />
       
       <span className="fw-bold ">Item Price:</span>
        <input
          className="mb-2"
          placeholder="items price"
          type="number"
          {...register("price", { min: 5, max: 150 })}
        />
        <span className="fw-bold ">Quantity:</span>
        <input
          className="mb-2"
          placeholder="items quantity"
          type="number"
          {...register("quantity", { min: 5, max: 99 })}
        />
        <span className="fw-bold ">Photo URL:</span>
        <input
          className="mb-2"
          placeholder="items photo url"
          {...register("picture")}
        />
        <span className="fw-bold">Item Description:</span>
        <textarea
          className="mb-2"
          placeholder="short description"
          {...register("description", { required: true, maxLength: 150 })}
        />
        <input
          className="mb-2 btn btn-success"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddInventory;
