import Dash from "../dash"
import Script from "next/script";

export default function servertoserver() {
  return (
    <Dash children={ <div>
<form action="https://www.peachpayments.com" class="paymentWidgets" data-brands="VISA MASTER GOOGLEPAY"></form>
        
        <Script src="https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=1D2C53B006F94ECB041663B0FAED4635.uat01-vm-tx03"></Script>     
          <Script>
           onLoad={() => {
         wpwlOptions = {
           style:"card",
           disableCardExpiryDateValidation: true,
         googlePay: {
               gatewayMerchantId: "8acda4c78262a03d01828ce3db993865",
               merchantId: "BCR2DN4TXWQZX5BQ"
           }
       }
         }}
           </Script> 
    </div>} />
  )
}
