import { useEffect, useState } from "react"

const useProductDetail = id =>{
    const [product,setProduct] = useState([]);

    useEffect( ()=>{
        fetch(`https://fast-sierra-89206.herokuapp.com/inventory/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[id])

    return [product]
};

export default useProductDetail;