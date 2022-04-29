import React from "react";
import useProducts from "../../hooks/useProducts";
import "./Home.css";

const Home = () => {
  const [products] = useProducts();
  console.log(products);

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
            <div className="product" key={product.id}>
              <h3>{product.name}</h3>
              <h5>Price: {product.price}</h5>
              <p><small>{product.description}</small></p>
              <p>Quantity: {product.quantity}</p>
              <p>Supplier: {product.supplier_name}</p>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
