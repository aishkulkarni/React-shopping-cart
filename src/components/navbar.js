import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
// import cartReducer from "./reducer/cartreducer";


const Navbar=({addedItems})=> {
    console.log(addedItems);
    const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    addedItems.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [addedItems, cartCount]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">E-shopping</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link" to="/">Shop</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/cart" >My cart{cartCount}</Link>
        </li>
        <li class="nav-item">
        <Link  className="nav-link" to="/shopping"><i class="fas fa-shopping-cart"></i>shopping</Link>       
         </li>
      </ul>
    </div>
 
            </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.shop.addedItems,
    };
  };

//   const mapDispatchToProps = () =>{
//     cartReducer : crat
// }
  
  export default connect(mapStateToProps )(Navbar);
  
