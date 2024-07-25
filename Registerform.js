import { useState } from "react";

function RegisterForm() {
    //user object
    const [collegeIdValue,setCollegeId] = useState('');
    const [passwordValue,setPassword] = useState('');
    const [emailValue,setEmail] = useState('');
    const [branchValue,setBranch] = useState('');
    const [yearValue,setYear] = useState('');
    const [genderValue,setGender]=useState('');



    const getCollegeId = (event) =>{
        setCollegeId(event.target.value);
        console.log(event.target.value);
    }
    const getPassword = (event) =>{
        setPassword(event.target.value);
        console.log(event.target.value);
    }
    const getEmail = (event) =>{
        setEmail(event.target.value);
        console.log(event.target.valuee);
    }
    const getBranch = (event) =>{
        setBranch(event.target.value);
        console.log(event.target.value);
    }
    const getYear = (event) =>{
        setYear(event.target.value);
        console.log(event.target.value);
    }
    const getGender =(event) =>{
        setGender(event.target.value);
        console.log(event.target.value);                 
    }
    
    const submitData = (event) => {
        event.preventDefault();
        const obj = {
            collegeIdValue,passwordValue,emailValue,branchValue,yearValue,genderValue
        }
        
        console.log(obj);
        
    }

    return (
        <div className="card mx-auto" style={{width:"400px" ,margin:"30px"}}>
            <form className="card-body" style={{display:'flex',flexDirection:'column'}}>
                <h3>Register</h3>
                <p>Provide your details to register</p><br></br>

                <h5>College Id</h5>
                <input type="/text" placeholder="College id" style={{width:"100%"}} onChange={getCollegeId}/>
                <br></br>
                <h5>Password</h5>
                <input type="password" placeholder="Password" style={{width:"100%"}} onChange={getPassword}/>
                <br></br>
                <h5>Email Address</h5>
                <input type="email" placeholder="Email address" style={{width:"100%"}} onChange={getEmail}/>
                <br></br>
                <h5>Branch</h5>
                <select class="form-select" value={branchValue} onChange={getBranch}>
                    <option >Select a branch</option>
                    <option value="CSE">CSE</option>
                    <option value="AIML">AIML</option>
                    <option value="AIDS">AIDS</option>
                </select>
                <h5>Year</h5>
                <select class="form-select" onChange={getYear}>
                    <option >Select a year</option>
                    <option value="1">I</option>
                    <option value="2">II</option>
                    <option value="3">III</option>
                    <option value="4">IV</option>
                </select>
                <h5>Gender</h5>
                <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Male" onChange={getGender}/>
                        <label class="form-check-label" for="exampleRadios1">
                            Male
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Female" onChange={getGender}/>
                        <label class="form-check-label" for="exampleRadios2">
                            Female
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Prefer not to say" onChange={getGender}/>
                        <label class="form-check-label" for="exampleRadios3">
                            Prefer not to say
                        </label>
                        </div>
                        <button className="btn btn-dark" onClick={submitData} style={{marginLeft:"60%"}}>Register</button>
            </form>


        </div>
    )
}

export default RegisterForm;