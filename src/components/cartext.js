import React from "react";
import { Link } from "react-router-dom";

const Cartext = ({
    activationfee,
    capacity,
    activationfeetext,
    deviceimageUrl,
    deviceimageurllarge,
    devicemanufacturename,
    devicenickname,
    discountededgeretailprice,
    fullretailprice,
    pricesubtitle,
    pricetext,
    colorname
}) => (
     
    <div className="row con">
    <div className="col-sm-3">
       
        <h4>Line 1</h4>
    </div>
    <div className="col-sm-5">
        
    </div>
    <div className="col-sm-2">
       
       <p>Monthly Payment*</p>
   </div>
   <div className="col-sm-2">
       
        <p>Due today*</p>
    </div>
    <div className="col-sm-12">
    <hr/>
    </div>
    <div className="col-sm-3">
       
       <img src={deviceimageUrl}/>
       <p>425,478,654</p>
   </div>
   <div className="col-sm-5">
       <h4>{devicemanufacturename} {devicenickname}</h4>
       <p>{capacity} {colorname}</p>
       <p>Retail price:<span className="price1">${fullretailprice}</span><span className="price2">${fullretailprice}</span></p>
       <h5>Monthly Device Payment</h5>
       <p>You'll see the first installment in your next billing cycle.For 24months,0% ARP.Retail Price:$249.99</p>
       <p><i className="fas fa-tag"></i><span className="clb">congratulations you're saving on this device.</span></p>
       <p><a>EDIT</a>  |  <a>REMOVE</a></p>
       <p className="clb">Get $20 off your $40 upgrade free.<i className="fas fa-info-circle"></i></p>
  
   </div>
   <div className="col-sm-2">
      
      <h5 className="pd1">$8.33</h5>
      <p className="price1">$10.41</p>
      <h5 className="pd2">---</h5>
  </div>
  <div className="col-sm-2">
       <h5 className="pd1">---</h5>
       <p className="pd2">$20.00</p>
       <p className="sm1">was$40</p>
   </div>
</div>
    


  );


export default Cartext;
