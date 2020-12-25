import React, { Component } from "react";
import { Form, Button ,Dropdown} from 'react-bootstrap';
import './company.css'


function UpdateCompany(){
   
        return (
            <div className="col-md-4 offset-4 card card-body mt-5">
                <form>
                    <h3>Update Company</h3>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="number" className="form-control" placeholder="enter your phone number" />
                    </div>

                    <div className="form-group">
                        <label>Company Address</label>
                        <textarea type="textarea" className="form-control" placeholder="enter your address" />
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    
                    <div className="form-group">
                        <input type="radio" className="rad form-control" value="Manager" checked name="role"/>
                    </div>
                
                   <div className="form-group">
                        <input type="radio" className="rad form-control" value="Manager" checked name="role"/>
                    </div>
                    
                    <div >
                    <Button variant="outline-primary">Update</Button>{' '}
                     <Button variant="outline-secondary">cancel</Button>{' '}
                    </div>

                </form>
            </div>
        );
    }
export default UpdateCompany;