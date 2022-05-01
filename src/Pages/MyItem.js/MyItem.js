import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items,setItems] = useState([]);
    useEffect( ()=>{
        
        // const getItems = async ()=>{
        //     const email = user?.email;
        //     const url = `http://localhost:5000/myitem?email=${email}`;
        //     const {data} = await axios.get(url,{
        //         headers:{
        //             authorization: `Bearer ${localStorage.getItem("accessToken")}`
        //         }
        //     })
        //     setItems(data);
        // }

        // getItems();
        
        const email = user?.email;
        fetch(`http://localhost:5000/myitem?email=${email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setItems(data);
        })
    },[user]);

    const handleItemDelete = id =>{
        const proceed = window.confirm("Are you want to delete this item?");
        if(proceed){
            console.log('deleted',id);

            //delete data send to server
            const url = `http://localhost:5000/myitem/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h2>order by this email:{items?.length}</h2>
            <div className="my-item-container">
            {
                items?.map(item=>
                <div key={item?._id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.picture} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    <p><span className='fw-bold'>Price: </span>{item.price}</p>
                                    <p><span className='fw-bold'>Quantity: </span>{item.quantity}</p>
                                    <p><small>{item.description}</small></p>
                                </Card.Text>
                                <Button onClick={()=>handleItemDelete(item._id)} variant="danger">DELETE</Button>
                            </Card.Body>
                        </Card>
                </div>
                )
            }
            </div>
        </div>
    );
};

export default MyItem;