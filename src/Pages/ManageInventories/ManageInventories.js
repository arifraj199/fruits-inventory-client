import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [products, setProducts] = useProducts();
  // console.log(products);

  const handleDelete = (id) => {
    const proceedDelete = window.confirm("Are you want to delete?");
    if (proceedDelete) {
      console.log("deleted", id);

      //delete data send to server
      const url = `https://fast-sierra-89206.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-center mt-3 manage-product-title">
        Manage Items:{products?.length}
      </h1>
      <div className="manage-inventory text-center my-3">
        <Link to="/additem">
          <button className="btn btn-success me-1">Add New Item</button>
        </Link>
      </div>
      <div className="manage-products-container">
        <div className="manage-product-table my-5 text-center">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price (per item)</th>
                <th>Price (total)</th>
                <th>Supplier Name</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product?._id}>
                  <td>{product?.name}</td>
                  <td>{product?.quantity}</td>
                  <td>{product?.price}</td>
                  <td>
                    {parseInt(product?.quantity) * parseInt(product?.price)}
                  </td>
                  <td>{product?.supplier_name}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(product?._id)}
                      className="btn btn-danger h-5 w-5 text-white"
                    >
                      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
