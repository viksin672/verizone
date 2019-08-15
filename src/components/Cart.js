import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cart.css"


class Cart extends Component {
render(){
    return(
         <div >
             <div className="d1">
             <h3 className="hed1"> Faster & save online <span className="di1">|</span> <span className="hed2"> Get it fast with In-Store Pickup or Same Day Delivery, plus reduced activation fees.
             <i class="fas fa-info-circle"></i></span> </h3>
             </div>
            <div className="container">
                  <h2 className="t1">Look's like your cart is empty. Take it on a shopping spree</h2>
                  <div className="row con">
                   <div className="col-sm-6">
                       <hr/>
                       <h1>$0.00</h1>
                       <p>Due today</p>
                   </div>
                   <div className="col-sm-6">
                       <hr/>
                       <h1>$0.00</h1>
                       <p>Due Monthly</p>
                   </div>
                  
                   <div className="col-sm-12">
                   <hr/>
                   </div>
                   <div className="col-sm-6">
                       <h3>Need to return or exchange a purchase? No problem.</h3>
                       
                   </div>
                   <div className="col-sm-6">
                       <h3>Purchase with confidence with our holiday return policy.</h3>
                       <p>A restocking fee of $50 applies to any return or exchange of a wireless device (excluding Hawaii).</p>
                   </div>
                   <div className="col-sm-12">
                   <hr/>
                   </div>
                   <div className="col-sm-6">
                       <h3>How soon could your order be ready?</h3>
                   </div>
                   <div className="col-sm-6">
                       <h3>Free in-store pickup</h3>
                       <p>You can pick up your order today at a store near you.</p>
                       <h4>or get your order with free 2-day shipping.</h4>
                   </div>
                   <div className="col-sm-12">
                   <hr/>
                   </div>
                   <Link to="/prodlist" type="button" class="btn btn-dark btn-lg b1">Add a line</Link>
                   <div className="col-sm-12">
                   <hr/>
                   </div>
                   </div>
                  <h6>Want to retrieve a saved cart?</h6>
                   <p className="sm1">Enter your email address*</p>
                    <div>
                        <input></input>
                        <span className="b2">
                        <button type="button" class="btn btn-dark btn-lg b1">        Go        </button>
                        </span>
                    </div>
            </div>
          </div>  
    )
}
}

export default Cart;