import Dash from "../dash"
import Script from "next/script";

export default function servertoserver() {
  return (
    <Dash children={ <div>
<form action="https://www.peachpayments.com" class="paymentWidgets" data-brands=" VISA APPLEPAY"></form>
        
        <Script src="https://eu-prod.oppwa.com/v1/paymentWidgets.js?checkoutId=D03D5BCB58FBFBFF64C3AE538998F89E.prod01-vm-tx11"></Script>     
          {/* <Script>
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
           </Script>  */}
    </div>} />
  )
}
