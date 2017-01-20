# Wallet
Capillary APIs now support payments through third party payment gateway services such as RazorPay. These third party services support different wallet payments such as RuPay, Amex, Mobikwik, PayZapp, PayUMoney and so on. Wallets are configured at TILL level and not at store level. Hence, within a store, each TILL can have different wallets.

Unlike other entities, `wallet` APIs are not version dependent. The following is the standard url for `wallet` APIs

`https://<cluster url>/walletApp/payment/<method>`

Entry | Value
----- | -----
Request URL  | `https://<cluster url>/walletApp/payment/<method>`
Cluster URL | The server to which the API calls are made. This usually depends on your cluster as mentioned below:<br>APAC: apac.sharingan.capillarytech.com<br>APAC2: apac.sharingan.capillarytech.com<br>EU: eu.sharingan.capillarytech.com<br>US: us.sharingan.capillarytech.com
HTTP Methods | Capillary Sharingan APIs support the standard HTTP methods GET,  and POST
Response Format | Sharingan APIs return information in json format



<aside class="notice"> Wallet APIs are not version dependent. Hence, there is no need to specify API versions for these APIs. XML format is not supported for wallet APIs</aside>

## Get Wallets Configured for a TILL
```html
# Sample Request
https://apac.sharingan.capillarytech.com/walletApp/till/wallets
```

> Sample Response

```json
{  
   "wallets":[  
      {  
         "provider_id":"577a065b07cd440f0f8b4568",
         "wallet_label":"mobikwik",
         "wallet_id":1
      },
      {  
         "provider_id":"577a065b07cd440f0f8b4568",
         "wallet_label":"payumoney",
         "wallet_id":2
      },
      {  
         "provider_id":"577a065b07cd440f0f8b4568",
         "wallet_label":"payzapp",
         "wallet_id":3
      }
   ],
   "suceess":true
}
```


Use the API to fetch the details of wallets configured for the current TILL. Each wallet details consist of wallet provider id,  wallet name, and wallet id.


###	Resource Information
Attribute | Value
--------- | -----
URI | wallet/payment
Rate Limited? | Yes
Content-Type | application/json
Accept | application/json
Authentication | Yes
Response Formats | JSON 
HTTP Method | GET
Batch Support | No

### Request URL
`https://<cluster URL>/walletApp/till/wallets`

### Error Messages
Code | Description
---- | -----------
401 | Authentication failed/Invalid authentication <br>	Invalid TILL


## Authorize Payments
```html
# Sample Request
https:// apac.sharingan.capillarytech.com/walletApp/payment/authorize
```

> Sample POST Request

```json
{
 "amount": 100,
 "currency": "INR",
 "mobile": "919876543210",
 "email": "daniel.vettori@gmaill.com",
 "description": "",
 "address": "",
 "refId": "5214674014704128150",
 "wallet_id": 1,
 "provider_id": "577a065b07cd440f0f8b4568"
}

```

> Sample Response

```json
{  
   "refId":"5214674014704128150",
   "success":true
}

```

This API allows you to validate customer’s wallet details and wallet balance and generate OTP which is used for processing the transaction. That is, if a customer wants to make a payment for a transaction through a wallet service, you need to validate the customer’s registered mobile number/email id including the transaction amount. Only if the validation is successful OTP is generated.

### Resource Information
Attribute | Value
--------- | -----
URI | wallet/payment/authorize
Rate Limited? | Yes
Content-Type | application/json
Accept | application/json
Authentication | Yes
Response Formats | JSON 
HTTP Method | POST
Batch Support | No

### Request URL
`https://<Cluster URL>/walletApp/payment/authorize`

### Request Attributes
Attribute | Description
--------- | -----------
amount* | Transaction amount or the amount that the customer wants to pay through wallet 
wallet_id or wallet_label* | The respective wallet id or wallet name. Any one of the following parameter is mandatory
Email* | Email id of the customer registered with the wallet
Description | Short description about the transaction
Address | Address of the customer
Currency | Base currency of the wallet service
provider_id | ID of the wallet service provider. For example, RazorPay’s provider id is
Mobile* | Mobile number of the customer registered with the wallet  
refId* | A unique reference id for the current transaction
TransactionNumber* | Transaction number for which the wallet details are validated

### Error Messages
Code | Description
---- | -----------
401 | Authentication failed/Invalid authentication
	| Invalid TILL
	| Invalid params
	| Invalid reference id
	| Unexpected response or error from the payment gateway



## Process Payments
```html
# Sample Request
https:// apac.sharingan.capillarytech.com/walletApp/payment/validate
```

> Sample POST Request
 
```json
{

 "refId": "5214674014704128150",
 "otp":12313
}

```

> Sample Response

```json
{  
   "success":true,
   "refId":"5214674014704128150",
   "message":"payment captured",
   "payment_id":"pay_6rx8LlO6mCIcra"
}
```

This API allows you to process the authorized payments based on the reference id and OTP passed.

### Resource Information
Attribute | Value
--------- | -----
URI | walletApp/payment/validate
Rate Limited? | Yes
Content-Type | application/json
Accept | application/json
Authentication | Yes
Response Formats | JSON 
HTTP Method | POST
Batch Support | No

### Request URL
`https://<Cluster URL>/walletApp/payment/validate`

### Request Parameters

Parameter | Description
--------- | -----------
refId* | Reference id provided for the transaction during authorization 
otp | OTP received by the customer for that transaction

### Error Messages
Code | Description
---- | -----------
401 | Authentication failed
	| Invalid TILL
	| Invalid params
	| Invalid reference id

