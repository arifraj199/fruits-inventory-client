import { useEffect, useState } from "react"

const useProductDetail = id =>{
    const [product,setProduct] = useState([]);

    useEffect( ()=>{
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[id])

    return [product]
};

export default useProductDetail;