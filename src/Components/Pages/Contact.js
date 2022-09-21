

import React from "react";

const Contact=()=>{
    return(
        
            <div className="py-4">
                

            <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
    </div>
  <br/>

  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <br/>
  <br/>

  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>


  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Maharastra</option>
      <option>Andhra Pradesh</option>
      <option>Arunachal Pradesh</option>
      <option>Assam</option>
      <option>Bihar</option>
      <option>Chhattisgarh</option>
      <option>Goa</option>
      <option>Gujarat</option>
      <option>Haryana</option>
      <option>Himachal Pradesh</option>
      <option>Jharkhand</option>
      <option>Karnataka</option>
      <option>Kerala</option>
      <option>Madhya Pradesh</option>  
      <option>Manipur</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>


  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>


  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>


            </div>
       
    );
}

export default Contact;