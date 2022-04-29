import {useEffect, useState} from 'react';

const useProducts = ()=>{
    const [products,setProducts] = useState();

    useEffect(()=>{
        fetch('https://fast-sierra-89206.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return [products]
};

export default useProducts;