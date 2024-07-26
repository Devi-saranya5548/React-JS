import { useEffect, useState } from "react";
import axios from "axios";

function DataFetching2() {
    const [data,setData] = useState([]);
    useEffect(()=> {
        const fetchMyData = async ()=>{
            const res = await axios.get('https://fakestoreapi.com/users');
            console.log(res);
            console.log(res.data);
            const resData = await res.data;
            setData(resData);
            console.log(resData);
            
        }
        fetchMyData();
    })
    return (
        <div>Fetching Data
            <table border="2" cellspacing="5" cellpadding="15">
                <thead style={{border:"2px solid"}}> 
                    <th scope="col" style={{border:"2px solid"}}>ID</th>
                    <th scope="col" style={{border:"2px solid"}}>USERNAME</th>
                    <th scope="col" style={{border:"2px solid"}}>EMAIL</th>
                    <th scope="col" style={{border:"2px solid"}}>FIRST NAME</th>
                    <th scope="col" style={{border:"2px solid"}}>LAST NAME</th>
                    <th scope="col" style={{border:"2px solid"}}>CITY</th>
                    <th scope="col" style={{border:"2px solid"}}>PHONE NO</th>
                    <th scope="col" style={{border:"2px solid"}}>ZIPCODE</th>
                </thead>
                <tbody>
                {data.map((dataItem,index)=>
                <tr key={index}>
                    <td style={{border:"2px solid"}}>{dataItem.id}</td>
                    <td style={{border:"2px solid"}}>{dataItem.username}</td>
                    <td style={{border:"2px solid"}}>{dataItem.email}</td>
                    <td style={{border:"2px solid"}}>{dataItem.name.firstname}</td>
                    <td style={{border:"2px solid"}}>{dataItem.name.lastname}</td>
                    <td style={{border:"2px solid"}}>{dataItem.address.city}</td>
                    <td style={{border:"2px solid"}}>{dataItem.phone}</td>
                    <td style={{border:"2px solid"}}>{dataItem.address.zipcode}</td>
                </tr>)}

                </tbody>
           
            </table>
        </div>
    )
}

export default DataFetching2;