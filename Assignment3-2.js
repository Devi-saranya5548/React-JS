import { useEffect, useState } from "react";
import Product from "./Assignment3-1";
import axios from "axios";

const ProductList = () =>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data); 
        };
        fetchProducts();
    });

    return (
        <div className="product-list">
            {products.map((product)=>(
                <Product key ={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ProductList;
