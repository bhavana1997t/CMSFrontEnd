import React from "react";
import { Form, Button, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import './charge.css'
// import axios from  'axios';
// import { withRouter } from "react-router";

function UpdateCharge(props){
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
                    <h3>Update Charge </h3>

                    <div className="form-group">
                        <label> strategy Name</label>
                        <input type="text" className="form-control" name="strategyname"  placeholder="enter strategy cost"  required/>
                    </div>

                    <div className="form-group">
                        <label> Charge Type</label>
                        <input type="text" className="form-control" name="strategyname"  placeholder="enter Recuring/OneTime charge"  required/>
                    </div>

                    <div className="form-group">
                        <label>charge Decription</label>
                        <input type="text" className="form-control" name="chargedesc" placeholder="enter charge Description" />
                    </div>
                   <br></br>

                   <div className="form-group">
                        <label>strategyCost</label>
                        <input type="number" className="form-control" name="cost" placeholder="Enter Strategy cost" />
                    </div>

                    <div className="form-group">
                        <label>validity In  Days</label>
                        <input type="number" className="form-control" name="cost" placeholder="Enter Strategy cost" />
                    </div>

                    <div className="form-group">
                        <label>Plan Id </label>
                        <input type="number" className="form-control" name="cost" placeholder="Enter Strategy cost" />
                    </div>
                    
                    
                <div>
                    <Button variant="outline-primary mr-5" type="submit" >Update </Button>{' '}
                     <Button variant="outline-secondary mr-5" className="offset-4 " type= "reset">cancel</Button>{' '}
                    </div>

                </form>
            </div>
     
        );
    }

export default UpdateCharge;