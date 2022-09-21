import React from "react";
import {NavLink} from "react-router-dom";

const Navbar=()=>{
    return(

 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container"> 

            {/* <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">React</NavLink> */}
 
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active"  exact to="/">Home</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink className="nav-link active"  exact to="/about">About</NavLink>
        </li>


        <li className="nav-item">
        <NavLink className="nav-link active"  exact to="/contact">Contact</NavLink>
        </li>

      </ul>
      
    </div>
  </div>

            {/* </div> */}
         </nav>




    );
}


export default Navbar;