import { useEffect, useState } from "react"

const useProductDetail = id =>{
    const [products,setProducts] = useState([]);

    useEffect( ()=>{
        fetch(`https://fast-sierra-89206.herokuapp.com/inventory/${id}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[id])

    return [products]
};

export default useProductDetail;