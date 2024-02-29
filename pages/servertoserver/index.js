import Dash from "../dash"
import Script from "next/script";

export default function servertoserver() {
  return (
    <Dash children={ <div>
<form action="https://www.peachpayments.com" class="paymentWidgets" data-brands="APPLEPAY"></form>
        
        <Script src="https://eu-prod.oppwa.com/v1/paymentWidgets.js?checkoutId=1C0E44AE887ED736818BBB1EA0EEC78D.prod01-vm-tx14"></Script>     
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
