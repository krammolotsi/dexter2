import Dash from "../dash"
import Head from "next/head";
import Script from "next/script";
import { useState, useEffect } from "react";
export default function checkout() {

  const [widget, setWidget] = useState(null);
  //dynamic variables for widget
  let lnk = "";
  let ndc = "84B0186553156D1FDD51253D0178F42C.uat01-vm-tx02";
  let redirect = "www.google.com";
 

   const postPayments =  () => {
    //update card widget
    setWidget(
      <div className="">
      <Script src="https://paypal.com/sdk/js?client-id=AZyg5t_u9-DSdkbjYage4pKycmnsDMLtWtHx8OCBH0bcCtEfN2fd0ptB-XdWNOAIqfE7X-Jfke2A23AH&currency=EUR&intent=order&commit=false&vault=true"/>
       <form
         action={redirect}
         className="paymentWidgets"
         data-brands="PAYPAL"
       ></form>
     </div>
    );
  };

  //run function
  postPayments();

  return (
   <>
  {widget}
   </>
  )
}

