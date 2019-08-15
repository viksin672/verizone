import React, {Component} from 'react';
import Product from "./product"
import "./prodlist.css"


class ProdList extends Component {
  render() {
    var data = 	[
        { 
            "name": "iphone10", 
            "description" : "njdhashui d  ndsaindui sa nsadjaisu", 
            "image": "https://images.sg.content-cdn.io/cdn//in-resources/0211f4bd-ce6a-4162-95a2-f801e5ae9176/Images/ProductImages/Source/Iphone%20X%2064GB%20Silver%20-%20Apple.jpg" ,
             "price":"$1,234.00"
        },
        { 
            "name": "samsung s10", 
            "description" : "dnsajdhi jdhsihfa dfhuiaf jdjoajsoih f", 
            "image": "https://image-us.samsung.com/SamsungUS/mobile/phones/06102019-new/FIRST_S10_Lockup1_White_gallery.jpg?$product-details-jpg$" ,
            "price":"$1,034.00"
        },	
        { 
            "name": "iphone10s", 
            "description" : "njdhashui d  ndsaindui sa nsadjaisu", 
            "image": "https://images.sg.content-cdn.io/cdn//in-resources/0211f4bd-ce6a-4162-95a2-f801e5ae9176/Images/ProductImages/Source/Iphone%20X%2064GB%20Silver%20-%20Apple.jpg" ,
            "price":"$1,334.00"
        }
    ];

    let product = data.map(d=>(
       <Product
       name={d.name}
       description={d.description}
       image={d.image}
       price={d.price}
       />
    ));
     
    return(
        <>
        <div className="container1">
         <div className="row">
 {product}
 
</div>
</div>
        </>
    );

  }  
}
export default ProdList;
