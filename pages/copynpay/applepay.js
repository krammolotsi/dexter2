import Script from "next/script";
import { useState, useEffect } from "react";
import React from 'react'

function applepay() {
    const [widget, setWidget] = useState("");

    //dynamic variables for widget
    let lnk = "";
    let ndc = "";
    let redirect = "";
   
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
    </div>
  );

  return (
    <div>{widget}</div>
  )
}

export default applepay