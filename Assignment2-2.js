import { useEffect, useState } from "react";
function Assign3(){
    const [count,setCount]= useState(0);
    useEffect(()=>{
        console.log("Once loaded....")
    })
    const btnUpdate=()=>{
        setCount(1);
    }
    const btnIncrease=()=>{
        setCount(count+1);
    }
    const btnDecrease=()=>{
        if(count<=0){
            return;
        }
        setCount(count-1);
    }
    return(
        <div className="card" style={{height:"400px"}}>
            <h5 style={{fontWeight:"bold",margin:"30px"}}>Product Name</h5>

            <p style={{marginLeft:"20px"}}>product description product description product description product description product description product description product description product description product description product description product description product description product description product description </p>            
            <h5 style={{marginTop:"110px",marginLeft:"20px",fontWeight:"bolder"}}>Rs.500.00</h5><br></br>
            {count>0?<pre> <button  className="btn btn-primary" style={{marginTop:"10px",width:"50px",height:"50px",marginLeft:"10px"}} onClick={btnDecrease}>-</button>   {count} <button className="btn btn-primary" style={{marginTop:"10px",width:"50px",height:"50px",marginLeft:"20px"}} onClick={btnIncrease}>+</button></pre>:<div><button className="btn btn-success" style={{width:"150px",height:"50px",marginLeft:"20px"}} onClick={btnUpdate}>Add To Cart</button></div>}
           
        </div>
    )
}
export default Assign3;