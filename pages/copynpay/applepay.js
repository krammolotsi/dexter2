import Script from "next/script";
import { useState } from "react";
import React from 'react'

function applepay() {
    const [widget, setWidget] = useState("");

    //dynamic variables for widget
    let lnk = "";
    let ndc = "";
    let redirect = "";
    let wpw = ` var wpwlOptions = {${applePay}:{
        displayName: "MyStore",
        total: { label: "COMPANY, INC." }}
    }`
  //set link for script
  lnk = `https://eu-prod.oppwa.com/v1/paymentWidgets.js?checkoutId=1D0B019DAF32BBD1DD4950DB3EEC280B.prod01-vm-tx18`;

  redirect = `https://www.peachpayments.com/`;

  //update card widget
  setWidget(
    <div className="">
      <Script src={lnk} />
      <form
        action={redirect}
        className="paymentWidgets"
        data-brands="APPLEPAY"
      ></form>
      <Script src={wpw}>
      </Script>
    </div>
  );

  /*
  

   <form action="https://www.peachpayments.com/" class="paymentWidgets" data-brands="APPLEPAY"></form>
        <script src="https://eu-prod.oppwa.com/v1/paymentWidgets.js?checkoutId=FECF7EF6422012758550B7744D49E25A.prod01-vm-tx18"></script> 
        
        <script src="https://code.jquery.com/jquery.js" type="text/javascript"></script>
<script type="text/javascript"> 
 var wpwlOptions = {
  applePay: {
    displayName: "MyStore",
    total: { label: "COMPANY, INC." }
  }
}
       
</script> 
  
  */

  return (
    <div>{widget}</div>
  )
}

export default applepay