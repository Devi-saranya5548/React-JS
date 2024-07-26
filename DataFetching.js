import { useEffect, useState } from "react";

function DataFetching() {
    const [data,setData] = useState([]);
    useEffect(()=> {
        const fetchMyData = async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(res.ok);
            const resData = await res.json();
            setData(resData);
            console.log(resData);
            
        }
        fetchMyData();
    })
    return (
        <div>Fetching Data
            <table>
                <thead> 
                    <th scope="col">ID</th>
                    <th scope="col">USER_ID</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">BODY</th>
                </thead>
                <tbody>
                {data.map((dataItem,index)=>
                <tr key={index}>
                    <td>{dataItem.id}</td>
                    <td>{dataItem.userId}</td>
                    <td>{dataItem.title}</td>
                    <td>{dataItem.body}</td>
                </tr>)}

                </tbody>
           
            </table>
        </div>
    )
}

export default DataFetching;