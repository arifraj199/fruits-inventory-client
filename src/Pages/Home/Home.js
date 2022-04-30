import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import "./Home.css";

const Home = () => {
  const [products] = useProducts();
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
            sint laboriosam error. Eveniet sed illum ut perferendis dicta,
            voluptatem, quibusdam ipsam atque impedit cum delectus, aspernatur
            distinctio at nihil.
          </p>
          <button className="btn btn-outline-success fs-5 text-white fw-bold">
            Know More
          </button>
        </div>
      </div>
      <div className="mb-5 text-center">
        <h2>Stocks Item: {products?.length}</h2>
        <div className="product-container">
          {            
          products?.map(product=>
            <div className="product" key={product._id}>
              
              <img src={product.picture} alt="" />
              <h3>{product.name}</h3>
              <h5>Price: {product.price}</h5>
              <p><small>{product.description}</small></p>
              <p>Quantity: {product.quantity}</p>
              <p>Supplier: {product.supplier_name}</p>
              <button onClick={()=>handleNavigate(product._id)} className="btn btn-success">Stock Update</button>
            </div>
            )
          }
        </div>
      </div>

      <div className="manage-inventory my-5 text-end">
        <Link to='/manage'><button className="btn btn-success me-3">Manage Inventories</button></Link>
      </div>
    </div>
  );
};

export default Home;
