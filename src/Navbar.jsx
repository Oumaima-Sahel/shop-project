import React from 'react';
import { NavLink } from 'react-router-dom';
import image from './Logo.jpeg';

function Navbar() {
    const changeLink = ({isActive}) => {
        return isActive ? "active" : "NavLink";
    }
    return ( 
        <div className='col-3 row' style={{backgroundColor:'rgb(1, 30, 36)',width:"400px",height:"100%"}}>
            <h6 className='col-12 text-center mt-2'><img src={image}/></h6>
            <nav className='col-12 m-auto shadow-3' style={{height:"100%"}}>
                <div className='row align-self-center'>
                    <NavLink end to='/' className={changeLink}>Catégories</NavLink>   
                    <NavLink  to='/ProductList' className={changeLink}>Produits</NavLink>
                    <NavLink  to='/CommandList' className={changeLink}>Commandes</NavLink>
                    <NavLink  to='/Utilisateur' className={changeLink}>Utilisateur</NavLink>
                </div>
            </nav>
        </div>
     );
}

export default Navbar;





























// import { NavLink } from "react-router-dom";
// import image from "";
// import Drop from "./Drop";
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Navbar() {

//   const [Profile,setProfile] = useState(false);

//   return (
//     <div className="row">
      
//       <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
//       <ing src={image} className="d-inline-block align-top" />
//         <button><span className="navbar-toggler-icon"></span></button>
//           <div className="navbar-nav ms-auto text-center">
//             <NavLink to="/Login" className="nav-link text-dark">Login</NavLink>
//             <NavLink to="/Dachbord" className="nav-link">Dachbord</NavLink>
//             <NavLink to="/" className="nav-link">List of Products</NavLink>
//             <NavLink to="/" className="nav-link">Catigories</NavLink>
//             <NavLink to="/" className="nav-link">Writer</NavLink>
//           </div>
//           <NavLink className="siteName" onClick={()=>setProfile((prev) => !prev)}>Profile</NavLink>
          
//           {
//             Profile && <Drop />
//           }
//       </nav>
      
//     </div>
//   );
// }
// export default Navbar;
