import { Link } from "react-router-dom";

function Navigation1(){
return(
    <div>
        <Link to="/" >Home</Link>&nbsp;
        <Link to="/productList">Products</Link>
    </div>
);
}
export default Navigation1;