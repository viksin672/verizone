import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cart.css"
class Cart1 extends Component {
    
render(){
    return(
        <div >
            <div className="d1">
             <h3 className="hed1"> Faster & save online <span className="di1">|</span> <span className="hed2"> Get it fast with In-Store Pickup or Same Day Delivery, plus reduced activation fees.
             <i class="fas fa-info-circle"></i></span> </h3>
             </div>
            <div className="container">
                
                  <div className="row con">
                   <div className="col-sm-12">
                   <hr/>
                   <p><i class="fas fa-shopping-cart"></i> <span>{this.props.match.params.id1}</span> <span className="price">{this.props.match.params.id3}</span></p>
                   <p>{this.props.match.params.id2}</p>
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

export default Cart1;