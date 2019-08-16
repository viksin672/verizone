import React, { Component } from "react";
import "./Cart.css";
import Cartext from "./Cartext";



class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    
      componentDidMount(){
        fetch("/data.json")
          .then(r => r.json())
          .then(data => {
              console.log(data);
            this.setState(data);
          })
      };
      
render(){
  
    if(this.state[0] != undefined){
        return(
            <div >
               <div className="container">
               <Cartext
        activationfee= {this.state[0].activationfee}
        activationfeetext= {this.state[0].activationfeetext}
        capacity={this.state[0].capacity}
        colorname={this.state[0].colorname}
        contractterm={this.state[0].contractterm}
        deliverymethod={this.state[0].deliverymethod}
        deviceimageUrl={this.state[0].deviceimageUrl}
        deviceimageurllarge={this.state[0].deviceimageurllarge}
        devicemanufacturename={this.state[0].devicemanufacturename}
        devicenickname={this.state[0].devicenickname}
        devicenrodid={this.state[0].devicenrodid}
        deviceproductdisplayname= {this.state[0].deviceproductdisplayname}
        devicesorid={this.state[0].devicenrodid}
        devicetype={this.state[0].devicetype}
        discountededgeretailprice={this.state[0].discountededgeretailprice}
        edgeitemdownpaymentamount={this.state[0].edgeitemdownpaymentamount}
        editdeviceurl={this.state[0].editdeviceurl}
        fullretailprice={this.state[0].fullretailprice}
        installmentbalance={this.state[0].installmentbalance}
        inventorystatus={this.state[0].inventorystatus}
        lacprice={this.state[0].lacprice}
        lactext={this.state[0].lactext}
        loanterm={this.state[0].loanterm}
        monthlypriceafterdownpaymentbeforediscount={this.state[0].monthlypriceafterdownpaymentbeforediscount}
        originalprice={this.state[0].originalprice}
        price={this.state[0].price}
        priceforfullretailpricelistid={this.state[0].priceforfullretailpricelistid}
        pricesubtitle={this.state[0].pricesubtitle}
        pricetext={this.state[0].pricetext}
        
        />
                 </div>
             </div>  
       );
       
    }
    return(
    <div>
        <h1>Loading..</h1>
    </div>
    );
    }
}


export default Cart;
