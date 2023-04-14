import axios from "axios";

//POST REQUEST
export async function cnpPost (enteredData){

    //get data from post form
    let amount = enteredData.amount;
    let currency = enteredData.currency;
    let paymentType = enteredData.paymentType;
    let bearer = enteredData.bearerToken;
    let entityId = enteredData.entityId;
    let baseUrl = enteredData.environment;


  const response = await axios.post(
    `https://${baseUrl}/v1/checkouts`,
    new URLSearchParams({
      entityId: entityId,
      amount: amount,
      currency: currency,
      paymentType: paymentType,
    }),
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );

return response.data.ndc

}

//GET PAYMENT
export async function cnpGet(obj){

 //get data from local storage
let checkoutId = obj.checkoutId;
let entityId = obj.entityId;
let bearer = obj.bearer;

console.log(checkoutId);
console.log(entityId);
console.log(bearer);

  // const response = await axios.get(
  //   `https://${baseUrl}/v1/checkouts`,
  //   new URLSearchParams({
  //     checkout:checkoutId,
  //     entityId: entityId
  //   }),
  //   {
  //     headers: {
  //       Authorization: `Bearer ${bearer}`,
  //     },
  //   }
  // );
  // return response.data

}

//SEARCH PAYMENT
export async function cnpSearch(enteredData){

    //get data from search form
    let bearer = "OGFjN2E0Yzk4MDI1OTdiMjAxODAyODJlZGQwZjA1YTJ8cDRzUGdjcFpZaA==";
    let entityId = "8ac7a4c7802597b10180282ee66c0bb4";
    let baseUrl = "eu-test.oppwa.com"
    let paymentID = "8ac7a4a2876808f301876dbc2e692950";

console.log(enteredData);

  const response = await axios.get(
    `https://${baseUrl}/v1/query/`,
    new URLSearchParams({
      paymentID: paymentID,
      entityId: entityId,
    }),
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
//  return response.data
console.log("THis is response " + response.data);
}


//sandbox
//8ac7a4c7802597b10180282ee66c0bb4
//OGFjN2E0Yzk4MDI1OTdiMjAxODAyODJlZGQwZjA1YTJ8cDRzUGdjcFpZaA==

//live
//8a8394c44863dc75014868c40bce10ce
//OGE4Mzk0YzU0MDcyN2E1MDAxNDA3ZDFiNWU5MzE2Yjd8cUQ2YUZtWlI=