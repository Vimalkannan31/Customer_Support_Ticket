
/*File: Sku Service
   Objective: The objective of this page is to list out API's for SKU flow.
   
   Description: This is commom file javascript files, it has a each API configuration.
             
                It has API url, method, content-type, authorization.

                

Initiated By: Jayasurya V on 7th September
Modification History

--------------------------------------------------------------------------------------------------------------------
DATE     |   AUTHOR   |  ModifiCation Request No.                  |      Remarks / Details of Changes
--------------------------------------------------------------------------------------------------------------------
07-Sep-2022  Jayasurya     Jayasurya on 7th September 2022...              Initial creation
08-Sep-2022  Jayasurya     Jayasurya on 08th September 2022...             Code updated to Mock API congifuration.
07-Mar-2023  Lavanya     Lavanya on 07th March 2023...             Code updated to myhrm API congifuration.

--------------------------------------------------------------------------------------------------------------------
*/

//Required Initialization
import { Http } from "../Http";
import axios from "axios";
import { baseURL } from "../config";


export const login = (email, password) => {
  const config = {
    method: 'post',
    url: baseURL()+'/users/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "username": email,
      "password": password
    },
  };

  return axios(config);

};
 //Get All sku API 
 export const getAllSupport = (token) => {
  const config = {
    method: 'get',
    // for enambling client server page numbering
     url: baseURL()+'/supportticket_api/support_ticket/',
    //url: '/users/?pageNumber='',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
      
    }
  };

  return axios(config);

};

//Get respective or individual sku deatails API
export const getSupport = (token, id) => {
    const config = {
      method: 'get',  
       url: baseURL()+'/supportticket_api/support_ticket/' + id + '/' ,
      //url: '/users/?pageNumber='',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    
      }

    };
  
    return axios(config);
  
  };



 

  //Post or Add API for support
  export const addSupport = (token, ticket = {}) => {
      const config = {
        method: 'post',
        url: baseURL()+'/supportticket_api/support_ticket/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        data:ticket,
      };
    
      return axios(config);
    
    };

    


   
 

  
  
   

   