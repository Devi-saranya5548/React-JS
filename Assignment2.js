import Assign2 from './Assignment2-1';
import Assign3 from './Assignment2-2';
function Assignment2() {
    return (
        <div className='card' style={{margin:"20px"}}>
            <h1 style={{fontWeight:"bolder"}}>Product Details</h1>
        <div style={{display:"flex",flexDirection:"row",gap:"0px"}}>
            <div>
                <img src='dress.jpg' style={{width:"400px",height:"400px"}} alt="dress"></img>
            </div>
            <div style={{width:"100%"}}>
                <Assign3/>
            </div>
        </div>
        <div>
            <div style={{marginLeft:"20px"}}>
            <br></br>
            <h9 style={{fontWeight:"bolder"}}>Project Specification</h9>
            <br></br><br></br>
                <p >product description product description product description product description product description product description product description product description product description product description product description product description product description product description </p>
            </div>
        </div>
        <div>
            <div>
                <Assign2/>
            </div>
        </div>
        </div>

    );
}
export default Assignment2;