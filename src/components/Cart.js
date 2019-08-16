import React, { Component } from "react";
import "./Cart.css";
import Cartext from "./Cartext";



class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    
      componentDidMount(){
        fetch("/data.js")
          .then(r => r.json())
          .then(data => {
              console.log(data);
            this.setState(data);
          })
      };
      
render(){
  
    if(this.state[0] != undefined){
        var rows = [];
        var i;
for (i in this.state) {
    rows.push(<Cartext
        activationfee= {this.state[i].activationfee}
        activationfeetext= {this.state[i].activationfeetext}
        capacity={this.state[i].capacity}
        colorname={this.state[i].colorname}
        contractterm={this.state[i].contractterm}
        deliverymethod={this.state[i].deliverymethod}
        deviceimageUrl={this.state[i].deviceimageUrl}
        deviceimageurllarge={this.state[i].deviceimageurllarge}
        devicemanufacturename={this.state[i].devicemanufacturename}
        devicenickname={this.state[i].devicenickname}
        devicenrodid={this.state[i].devicenrodid}
        deviceproductdisplayname= {this.state[i].deviceproductdisplayname}
        devicesorid={this.state[i].devicenrodid}
        devicetype={this.state[i].devicetype}
        discountededgeretailprice={this.state[i].discountededgeretailprice}
        edgeitemdownpaymentamount={this.state[i].edgeitemdownpaymentamount}
        editdeviceurl={this.state[i].editdeviceurl}
        fullretailprice={this.state[i].fullretailprice}
        installmentbalance={this.state[i].installmentbalance}
        inventorystatus={this.state[i].inventorystatus}
        lacprice={this.state[i].lacprice}
        lactext={this.state[i].lactext}
        loanterm={this.state[i].loanterm}
        monthlypriceafterdownpaymentbeforediscount={this.state[i].monthlypriceafterdownpaymentbeforediscount}
        originalprice={this.state[i].originalprice}
        price={this.state[i].price}
        priceforfullretailpricelistid={this.state[i].priceforfullretailpricelistid}
        pricesubtitle={this.state[i].pricesubtitle}
        pricetext={this.state[i].pricetext}
        
        />);
    }
     return <tbody>
         <div className="container">
         {rows}
         </div>
     </tbody>;
         }
    return(
    <div>
        <h1>Loading..</h1>
    </div>
    );
    }
}


export default Cart;
