import React from "react";
import { Form, Button, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import './company.css'
// import axios from  'axios';
// import { withRouter } from "react-router";

function AddCompany(props){
    // const handleSubmitClick = (e) => {
    //     e.preventDefault();
    //     let object = {};
    //     let formData=new FormData(e.target);
    //     formData.forEach((value,key)=>{
    //         object[key] = value;
            
    //     }
    //     );
    //     console.log(object);
    //     let json = JSON.stringify(object); 
    //     console.log(json); 


    //     const config = {     
    //         headers: { 'content-type' : "application/json" }
    //     }

        // axios.post('http://localhost:8080/StockManagement/company/register', json,config).then((response)=>{
        //      console.log(response);
        //    })
        //    .catch((error)=>{
        //      console.log(error);
        //   });
        //   props.history.push("/AddCompany");

        // }
        return (
            
            <div className="col-md-4 offset-4 card card-body mt-5">
                
                <form >
                    <h3>Add Company</h3>

                    <div className="form-group">
                        <label> Company Name</label>
                        <input type="text" className="form-control" name="userName"  placeholder="enter your full name"  required/>
                    </div>

                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="number" className="form-control" name="phone" placeholder="enter your mobile number" />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <textarea type="textarea" name="address" className="form-control" placeholder="enter your address" />
                    </div>
                   
                   <br></br>
                    
                <div>
                    <Button variant="outline-primary" type="submit" >Add </Button>{' '}
                     <Button variant="outline-danger" className="offset-4 " type= "reset">cancel</Button>{' '}
                    </div>

                </form>
            </div>
     
        );
    }

export default AddCompany;