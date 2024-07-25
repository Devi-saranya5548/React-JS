import {useEffect, useRef,useState} from "react";
function Login() {
    //const firstRef = useRef(null);
    const clgid="22b01a4265";
    const password ="saranya";
    const id = useRef(null);
    const pwd = useRef(null);
    const [textDisplay,display] = useState('');
    useEffect(()=>{
        id.current.focus();
    })
    
    const formSubmitted =(event)=>{
        event.preventDefault();
        if(clgid===id.current.value && password===pwd.current.value){
            console.log("Successful Login");
            display("Successful Login");
        }
        else{
            console.log("Unsuccessful Login");
            display("Unsuccessful Login")
        }
        
    }

    return (
        <div className="card mx-auto" style={{width:"300px" ,margin:"20px"}}>
            <form onSubmit={formSubmitted} className="card-body">
                <h3>Login</h3>
                <p style={{fontSize:'20px', color:"grey"}}>Provide your details to login</p>
                <br></br>
                <h4>College Id</h4>
                <input type="/text" style={{width:"80%"}} ref={id} placeholder="College id"/>
                <br></br>
                <br></br>
                <h4>Password</h4>
                <input type="/text" style={{width:"80%"}} ref={pwd} placeholder="Password"/>
                <br></br>
                <br></br>
                <button className="btn btn-dark" style={{marginLeft:"70%"}}>Login</button>
                <p>{textDisplay}</p>
            </form>            

        </div>
    )
}

export default Login;