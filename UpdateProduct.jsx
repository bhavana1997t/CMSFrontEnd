import React from "react";
import { Form, Button, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import './product.css'
// import axios from  'axios';
// import { withRouter } from "react-router";

function UpdateProduct(props){
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
                    <h3>Add Plan</h3>

                    <div className="form-group">
                        <label> Products Name</label>
                        <input type="text" className="form-control" name="userName"  placeholder="enter your full name"  required/>
                    </div>

                    <div className="form-group">
                        <label>Plan Decription</label>
                        <input type="number" className="form-control" name="phone" placeholder="enter your mobile number" />
                    </div>
                   <br></br>

                   <div className="form-group">
                        <label>company Id</label>
                        <input type="number" className="form-control" name="bundel" placeholder="Enter bundel Id" />
                    </div>
                    
                <div>
                    <Button variant="outline-primary" type="submit" >Add </Button>{' '}
                     <Button variant="outline-danger" className="offset-4 " type= "reset">cancel</Button>{' '}
                    </div>

                </form>
            </div>
     
        );
    }

export default UpdateProduct;