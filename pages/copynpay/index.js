import Script from "next/script";
import Dash from "../dash";
import { useState } from "react";
import CopynPayForm from "./copynpayform";
import CopynPaySearchForm from "./copynpaysearchform";
import {cnpPost} from '../api/copyandpay'

export default function CopynPay() {

  const [widget, setWidget] = useState("");

  //dynamic variables for widget
  let lnk = "";
  let ndc = "";
  let redirect = "";

  //post data
  function getFormData(enteredData) {
    localStorage.clear();


    const postPayments = async () => {
      //empty card widget
      setWidget("");

      //set url variable for widget
      let baseUrl = enteredData.environment;
     
      //Post request
      const makePayment = await cnpPost(enteredData);
  
      //checkout id
      ndc = makePayment;

      //assign values for local storage
      const myObj = {
       entityId: enteredData.entityId,
       baseUrl: enteredData.baseUrl,
       checkoutId: enteredData.ndc,
       bearer: enteredData.bearer,
      };
      const myJSON = JSON.stringify(myObj);
      localStorage.setItem("testJSON", myJSON);

      //set link for script
      lnk = `https://${baseUrl}/v1/paymentWidgets.js?checkoutId=${ndc}`;

      redirect = `https://dexter2.vercel.app/copynpay/${ndc}`;

      //update card widget
      setWidget(
        <div className="">
          <Script src={lnk} />
          <form
            action={redirect}
            className="paymentWidgets"
            data-brands="VISA MASTER AMEX"
          ></form>
        </div>
      );
    };

    //run function
    postPayments();
  }

  return (
    <Dash
      children={
        <div className="flex">

          <div className="flex-auto w-1/2 bg-white p-1">
            <CopynPayForm onEnteredData={getFormData} />
          </div>



          <div className="flex-auto w-1/2 bg-white">  
          <div className=" bg-white w-full"> {widget}</div>
            <CopynPaySearchForm />
          </div>
        </div>
      }
    />
  );
}
