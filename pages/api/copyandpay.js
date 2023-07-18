//import axios from "axios";
const axios = require('axios');
import qs from 'qs';

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

// const response = await axios(
//   `https://${baseUrl}/v1/query/${paymentID}?entityId=${entityId}`,
//   {
//     headers: {
//       Authorization: `Bearer ${bearer}`,
//     },
//   }
// );

}

//SEARCH PAYMENT
export async function cnpSearch(enteredData){
let bearer = "OGFjN2E0Yzk4MDI1OTdiMjAxODAyODJlZGQwZjA1YTJ8cDRzUGdjcFpZaA=="
let entityId = "8ac7a4c7802597b10180282ee66c0bb4"
    //get data from search form
    // let bearer = "OGFjN2E0Yzk4MDI1OTdiMjAxODAyODJlZGQwZjA1YTJ8cDRzUGdjcFpZaA==";
    // let entityId = "8ac7a4c7802597b10180282ee66c0bb4";
    // let baseUrl = "eu-test.oppwa.com"
    // let paymentID = "8ac7a4a1877ca1eb01877f170f5747ce";

    // const axios = require('axios');
    // const qs = require('qs');
    // let data = qs.stringify({
    //   'entityId': '8a8294174e735d0c014e78cf26461790' 
    // });
    
    // let config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: 'https://eu-test.oppwa.com/v1/query/8ac7a4a1877ca1eb01877f170f5747ce?entityId=8ac7a4c7802597b10180282ee66c0bb4',
    //   headers: { 
    //     'Acess-Control-Allow-Origin':'*',
    //     'Authorization': 'Bearer OGFjN2E0Yzk4MDI1OTdiMjAxODAyODJlZGQwZjA1YTJ8cDRzUGdjcFpZaA==', 
    //     'Content-Type': 'application/x-www-form-urlencoded', 
    //     'Cookie': 'ak_bmsc=6C3880CCA2EF8AD7CF1AC65376929B18~000000000000000000000000000000~YAAQPWIVArggfYqHAQAAy4P1jROi+3Ht9iNUKOFEijU7zCWCduC03RvhZzpYQHjWq1jJhD5MWOPCDZ67s4otI76SVmlETbf7aE2LDfliEIm6bcf0u4/JgfWPHBN1sipVj0qf3cuBjLkgLLupuP+zoJHiC53JgHPsWb/avS0BokmjmacdDBnU9GzOoEVqTPV5qbZy+Xa7Ugd+piBLflw1BdBpKb7IaJX7cJkAE+NjB5d7GtqcxBpkmBwMto/pevZ7IJvdreHYhHAYricZhpGno/EX03spHhuzwuK/FXrimnXNWa2F5ximXfjtZ73vSF6eKHhP5HICQHC2pGCbEM9ORS7p4xukkL39BovTAWVL0IGvnRVFdXqhbOEHl7I=; bm_sv=359A83826E67AB5E3B83C0B6CB5889AF~YAAQPWIVAvAofYqHAQAA38j1jROPM45m2XfrT32AfLsbQ8b4UNc8a58DH7/Vz3c5cDwPYlJwtidgnBCt4i/4vhcAmiPZQPvw49Hg7RdM3jsQ/EwE4ToizYvY25M1DupX6on6DJx1Ok75DuGk/3o/+2X5Lo4X3d8WaSEHmbQZHgYCpdVcgfzKn911TMYi5w+X1i9t/S5b3VEUNafZt/6l2eT3hyShJnRirr+jNgLVc9ADAuirZQlPD4nSQ9eGasI=~1'
    //   },
    //   data : data
    // };
    
    // axios.request(config)
    // .then((response) => {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    
// const response = await axios(
//   `https://eu-test.oppwa.com/v1/query/8ac7a49f8826958801882ae4780c5eea`,
//   {
//     headers: {
//       Authorization: `Bearer ${bearer}`,
//     },
//     params:{
// entityId: entityId
//     }
//   }
// );
axios.get('https://eu-test.oppwa.com/v1/query/8ac7a49f8826958801882ae4780c5eea?entityId=8ac7a4c7802597b10180282ee66c0bb4',{headers:{Authorization: `Bearer OGFjN2E0Yzk4MDI1OTdiMjAxODAyODJlZGQwZjA1YTJ8cDRzUGdjcFpZaA==`}})
    .then((result)=>{
        console.log(result.data);
        return result;
    }).catch((err)=>{
        console.log(err)
    })

}



//sandbox
//8ac7a4c7802597b10180282ee66c0bb4
//OGFjN2E0Yzk4MDI1OTdiMjAxODAyODJlZGQwZjA1YTJ8cDRzUGdjcFpZaA==

//live
//8a8394c44863dc75014868c40bce10ce
//OGE4Mzk0YzU0MDcyN2E1MDAxNDA3ZDFiNWU5MzE2Yjd8cUQ2YUZtWlI=