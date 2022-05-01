import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items,setItems] = useState([]);
    useEffect( ()=>{
        const email = user?.email;
        fetch(`http://localhost:5000/additem?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            setItems(data);
        })
    },[user]);

    return (
        <div>
            <h2>order by this email:{items.length}</h2>
            <div className="my-item-container">
            {
                items.map(item=>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.picture} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    <p><span className='fw-bold'>Price: </span>{item.price}</p>
                                    <p><span className='fw-bold'>Quantity: </span>{item.quantity}</p>
                                    <p><small>{item.description}</small></p>
                                </Card.Text>
                                <Button variant="danger">DELETE</Button>
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