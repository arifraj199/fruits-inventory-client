import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./MyItem.css";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://fast-sierra-89206.herokuapp.com/myitem?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getItems();
  }, [user]);

  const handleItemDelete = (id) => {
    const proceed = window.confirm("Are you want to delete this item?");
    if (proceed) {
      console.log("deleted", id);

      //delete data send to server
      const url = `https://fast-sierra-89206.herokuapp.com/myitem/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center mt-5 mb-3 my-item-title">
        My items: {items?.length}
      </h2>
      <div className="my-item-container mb-5">
        {items?.map((item) => (
          <div key={item?._id}>
            <Card className="my-item-card">
              <div className="my-item-img">
                <img src={item.picture} alt="" />
              </div>
              <Card.Body className="text-center">
                <Card.Title className="fs-4">{item.name}</Card.Title>
                <Card.Text>
                  <p>
                    <small>{item.description.slice(0, 130)} ....</small>
                  </p>

                  <p className="bg-light py-1 fs-6">
                    <span className="fw-bold">Price: </span>
                    {item.price}tk (per kg)
                  </p>

                  <p className="bg-light py-1 fs-6">
                    <span className="fw-bold">Quantity: </span>
                    {item.quantity} (kg)
                  </p>

                  <p className="bg-light py-1 fs-6">
                    <span className="fw-bold">Supplier: </span>
                    {item.supplier_name}
                  </p>
                </Card.Text>
                <Button
                  className="w-100"
                  onClick={() => handleItemDelete(item._id)}
                  variant="danger"
                >
                  DELETE
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
