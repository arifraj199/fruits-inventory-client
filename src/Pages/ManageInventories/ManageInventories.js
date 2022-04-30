import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './ManageInventories.css';

const ManageInventories = () => {
    const [products,setProducts] = useProducts();
    // console.log(products);

    const handleDelete = id =>{
        const proceedDelete = window.confirm("Are you want to delete?");
        if(proceedDelete){
            console.log('deleted',id);

            //delete data send to server
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
        }
    }
    
    return (
        <div>
            <h1>Manage All Products</h1>
            <div className='manage-products-container'>
            {
                products?.map(product=>
                <div key={product?._id}>
                        <div className="manage-products">
                            <img src={product?.picture} alt="" />
                            <div className="manage-product-detail">
                                <h5>{product?.name}</h5>
                                <p className='price'><span className='fw-bold'>Price</span>: {product?.price}</p>
                                <p><small><span className='fw-bold'>Quantity</span> : {product?.quantity}</small></p>
                                <p><small>{product?.description}</small></p>
                                <button onClick={()=>handleDelete(product?._id)} className='btn btn-danger'>DELETE</button>
                            </div>
                        </div>
                </div>
                )
            }
            </div>

            <div className="manage-inventory my-5 text-end">
                <Link to='/add'><button className="btn btn-success me-1">Add New Item</button></Link>
            </div>
        </div>
    );
};

export default ManageInventories;