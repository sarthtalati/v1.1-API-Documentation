---
title: API Doc v1.1

language_tabs:
  - json
  - xml
  

toc_footers:
  
  - <b>Other API Documents</b>
  - <a href="https://capillary.github.io/api-documentation/">CRM API Documentation v2.0</a>
  - <a href="https://capillary.github.io/ecom-api-document/">AnywhereCommerce API Documentation</a>
  


includes:
  - customer
  - transaction
  - points
  - coupon
  - communications
  - requests
  - task
  - organization
  - store
  - product
  - wallet
  - storeCare
  - rewards

search: true
---

# Release Updates
This section provides the quarterly breakup of existing API updates and new API releases.

## Q2 Releases (2020)

* OAuth supports posting data through store along with Till that was already supported. Two new headers are introduced `X-CAP-API-ATTRIBUTION-ENTITY-TYPE`, `X-CAP-API-ATTRIBUTION-ENTITY-CODE` replacing `X-CAP-API-ATTRIBUTION-TILL-CODE`.

## Q4 Releases (2019-20)

* **OAuth Support**: Besides Basic Authentication, Capillary APIs now support OAuth and access tokens for more secured API calls. For more details, see support portal. 
* **Points Reversal**: Allows reversing redeemed points directly if the transaction - for which the points are redeemed - is returned. A new redemption ID is introduced. 
	* POST <a href="https://capillary.github.io/v1.1-API-Documentation/#redeem-points">v1.1/points/redeem</a>: Introduced a new parameter `redemption_id` which can be used to reverse points if the transaction is returned.
	* POST <a href="https://capillary.github.io/api-documentation/#reverse-redeemed-points" target="_blank">v2/points/reverse</a>: Uses `redemptionId` to reverse points of a specific transaction.
	* GET <a href="https://capillary.github.io/v1.1-API-Documentation/#get-customer-redemptions">v1.1/customer/redemptions</a>: Shows `total_points_reversed` and points reversal history.
* **Event Notification**: Allows building integrations with Capillary events that originate either through Capillary products or APIs. For more details, see  <a href="https://capillary.github.io/api-documentation/#event-notifications" target="_blank">Event Notification APIs</a>.
* **Redemption across loyalty programs**: With this release, you can redeem points earned in one program in another loyalty program of the org. 
	* POST <a href="https://capillary.github.io/v1.1-API-Documentation/#redeem-points">v1.1/points/redeem</a>: A new parameter `group_redemption` if set `true` enables cross loyalty program redemption.			
* **OTP Support without PII information**: Allows non-PII clients (clients which would not send PII information such as mobile number, email ID, etc to Capillary) to send OTP via Capillary communication gateway.
* **Transaction V2 APIs**: Support to <a href="https://capillary.github.io/api-documentation/#add-transaction" target="_blank">Add transactions</a> and <a href="https://capillary.github.io/api-documentation/#get-transaction-details" target="_blank">Retrieve transaction details</a>. 
* Option to disable OTP validation for points transfer.
* Customer enrollment with one-time points and tier upgrade
* External loyalty program linking
* Support for external reference number in redemption.


# Getting Started
The Capillary APIs are RESTful APIs that help third party applications manage an Organization’s CRM and Loyalty Program through the Capillary platform. This document provides all the APIs that can be used to integrate with the Capillary Applications, their descriptions, resource information, request parameters, request URIs, and sample requests.



## Organization Setup
An organization associated with Capillary is registered in InTouch. Based on the organization's architecture, store TILL or Store Center accounts are created besides zones, concepts, and stores. Only Capillary users have access to register an organization in inTouch. For more information, contact your  Account Manager or Delivery Manager of Capillary.

To set up an organization as a Capillary admin, see Setting up Organization. 
 

# Authentication
Capillary APIs can be accessed either using Basic auth (TILL/Store Center credentials), or OAuth (Client key and secret associated to a Till/Store Center) . Please note that it is mandatory to use only the store specific Till/Store Center credentials as the data in the API response depends on this identification.

<aside class="notice">
Use Case: 
For instance, assume that a retailer XYZ of India cluster is registered with Capillary with two stores - store1 and store2. Each store has 2 TILLS - till1 and till2(for store1), till3 and till4(for store2). 

To configure your API keys, see <a href="https://support.capillarytech.com/en/support/solutions/articles/4000157087-api-authentication-configuration">API Authentication Configuration</a>.


If you authenticate using till1 credentials, you can access org level data and only the data of Store1. You cannot access the data of Store2.
</aside>


<aside class="warning">
For any assistance on Organization setup, please contact your Account Manager of Capillary.
</aside>

*When to use Basic & OAuth?**

Basic | oAuth
----- | -----
Can be used for POS integrations where API requests come to Capillary server directly from POS front end or POS store server. | Shall be used for backend integrations (from one backend to another backend). For example, POS integrations where API requests come to Capillary server from API gateway or a central server; FTP integrations where backend service need to be authenticated; 3rd party integration where API requests come to Capillary from a backend platform.



## Process 1: Basic Authentication
To obtain access to the entities of the Capillary Rest APIs, you need to authenticate the TILL/store center account that you are referring to for using the HTTP Basic Authentication.

Authorization Header is used for validating authentication credentials. The Authorization Header is constructed as shown below:

`Authorization: Basic <Base64 encoded (username: md5(password))>`

In the Authorization Header pass the encoded Base64 form of username and md5 formatted password.


<aside class="notice">
For example, to authenticate using TILL1 credentials whose password is 123: <br>

First convert the password ‘123’ in md5 form. i,e., 202cb962ac59075b964b07152d234b70 <br>

Then encode the username and md5 password to Base64. i.e. <br>

`Base64(till1:202cb962ac59075b964b07152d234b70)` which is `Authorization: Basic dGlsbDE6IDIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw`
</aside>

### Headers Required for Basic Auth

* **Content-Type** - This should be set as application/json

* **Accept** - This should also be set as application/json


## Process 2: OAuth
OAuth provides better security and helps you create secure passages to access your org's data through Capillary APIs. To generate oAuth client key and secret see <a href="http://developer.capillarytech.com/en/support/solutions/articles/4000154305-oauth" target="_blank">API Authentication Configuration</a>.

### Generate Access Token

Once you get key and secret, you can generate access token or JWT (JSON Web Token) using the token/generate API. JWT is a compact URL and JSON-based used to transfer data securely between two parties.

### Resource Information
| | |
--------- | ----------- |
URI	| `/oauth/token/generate`
API Version | v3
HTTP Method | POST
Authentication Required? | No
Batch Support? | No

### Other Headers Required

* **Content type** - This should be set as application/json

* **Accept** - This should also be set as application/json

### Endpoint
`https://{host}/v3/oauth/token/generate`

### POST Request Schema

`
{
  "key": "",
  "secret": ""
}
`
<aside class="notice">The token validity will be as per the value set for the client (Token expiry duration).</aside>

> Sample Request

```html
https://eu.api.capillarytech.com/v3/oauth/token/generate
```

> Sample POST Request

```json
{
  "key": "WnCygRI1Fmlf6YudKwTxQq1LI",
  "secret": "hoqSBz6VwefECaZA8Q3oNx4V4H3pMDITksarZVES"
}
```

> Sample Response

```json
{
    "data": {
     "accessToken": "eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE1NzUyNzAyNzAsImp0aSI6IjJaX2FqUjcwYzJABChVUjlDVTVpUlEiLCJpYXQiOjE1NzUyNjk5NzAsInN1YiI6Im5hbWVfODQzNjIwODIwMSIsImNsaWVudF9pZCI6MjEsIm9yZ19pZCI6MTExNSwidG9rZW5fdXNlIjoidG9rZW5fYWNjZXNzIn0.Ala1-XTDlPtrHFQfCtJKsXe3h_WVyq4QOGI3ZnLNJqOa-yJc1UPGbypUysWemzEaiQC_BJ0n9G68SYkVZGi4CSVOhHRNA_dILe8y1Sa90YZKwHVHogJmIKzLmksJrTbjn8s8hSMePBaaUcEdUZ1XssxdFrZhEHHN1fWVYtkdb74PB3sZ7OMDqKUysON8YTNQxLgKOJ3kq0o2QUUDQo1q3gxXFuswate6-jj3oBkcdd1ohhXkPIWZlAb_1lRcLr-ECaaBfh473gayeMVV_6khdKJ7cXrUQ3CXppkrPIzBb7rS6I93iWZw0IlmWbaGduTmPPOhLX6HZLOb84Y28st-cw",
        "ttlSeconds": 300
    },
    "errors": null
}
```



### Using Access Token
Once you generate the access token, you can use it to authenticate API calls as shown below.

Set the  authentication to No Auth and pass the following headers.

#### Required Headers

Header | Value
------ | -----
X-CAP-API-OAUTH-TOKEN* | Generated access token. If the token expires, you need to regenerate the access token.
Content-Type* | This should be set as application/json.
Accept* | This should also be set as application/json.
X-CAP-API-ATTRIBUTION-ENTITY-TYPE | Till or store from which you want to post the data. Supported Values: `TILL`, `STORE_CODE`, `STORE_NAME`, `STORE_EXTERNAL_ID`, `STORE_EXTERNAL_ID_1`, `STORE_EXTERNAL_ID_2`. The default value is `TILL`.
X-CAP-API-ATTRIBUTION-ENTITY-CODE | Pass the entity value based on the entity type. For example, if `X-CAP-API-ATTRIBUTION-ENTITY-TYPE` is STORE_CODE, then X-CAP-API-ATTRIBUTION-ENTITY-CODE is the store code that you want to tag to POST data. By default, it considers the Till associated with the client key and secret.


<aside class="notice">Parameters marked with * are mandatory. </aside>

For example, to get transaction details, you can use the following details. Before making a API call, make sure the token has access to the required resource.

**Headers**

Accept | application/json
Content-Type | application/json
X-CAP-API-OAUTH-TOKEN | eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.wiOlwiV1JJ...



> Sample Request URL

```html
https://eu.api.capillarytech.com/v2/transaction/38233952?type=REGULAR
```






## Tracking Request
```json
{
  "Date": "Wed, 16 Dec 2015 06:05:13 GMT",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "must-revalidate,no-cache,no-store",
  "X-Cap-Requestid": "5670FF17B7D58",
  "Server": "CapWS",
  "Content-Encoding": "gzip",
  "X-Cache": "MISS from localhost",
  "Transfer-Encoding": "chunked",
  "Connection": "keep-alive"
}
```
A unique id is generated for every request made using Capillary APIs and is sent to the requester in the Response Headers as "X-Cap-Requestid". 
You can use this request id to track the request end-to-end.
<aside class="notice"
It is recommended to note the `X-Cap-Requestid` of a request for future requirements.


<aside class="notice">
When an API call is made with 4 batch transactions, A response header is generated with the `X-Cap-Requestid` as shown above. This id can be used to track the details of the entire API call (both request and response).
</aside>

## Headers Required
Capillary CRM V1.1 APIs support both XML and JSON formats for requests and responses. You can set header as per your required format. 

Header | Description | Value
------ | ----------- | -----
Accept | Request format from the server side | Pass `application/json` for JSON format, `application/xml` for XML format.
Content-Type | Determine desired representation client the side | Pass `application/json` for JSON format, `application/xml` for XML format.

<aside class="notice"> You can also manually set the format for an API by passing the query parameter `format=xml` or `format=json`. </aside>

## Resource Information
Type | Description
---- | -----------
Request URL | `https://{host}/v1.1/{entity}/{method}?{QueryParams}&{format}`
Host | The server to which the API calls are made (cluster URL). <br>**India**: apac.api.capillary.co.in <br>**APAC2**: apac2.api.capillarytech.com <br>**EU**: eu.api.capillarytech.com <br>**US**: us.api.capillarytech.com <br>**China**: cdn-api.capillarytech.cn.com [or] api.capillarytech.cn.com
API Version Number | v1.1
Entity | Resource for which actions are performed. Example: communications, coupon, customer, organization, points, product, store, and transaction
HTTP Methods | The Capillary Cloud REST APIs support the standard HTTP methods - GET and POST
Format | Preferred format of requesting data - `xml`, `json`. By default, these APIs return data in the format represented in Headers. You can explicitly override by passing `format=json` or `format=xml` <br>Example: `https://eu.api.capillarytech.com/v1.1/customer/add?format=json`








## Response Codes
```xml
# API level Response Code

<status>
<success>true</success>
<code>200</code>
<message>Operation Successful</message>
</status>
```

```json
# API level Response Code

{
  "status": {
    "success": "true",
    "code": "200",
    "message": "Operation Successful"
  }
}
```



```xml
# Item Level Response Code

<item_status>
<success>false</success>
<code>1001</code>
<message>Invalid Mobile Number</message>
</item_status>
```

```json
# Item Level Response Code
{
  "item_status": {
    "success": "false",
    "code": "1001",
    "message": "Invalid Mobile Number"
  }
}

```

API responses are generated at request level and item level.

* **Request Level Responses**: These response codes are generated at the request level (for an entire request).
* **Item Level Responses**: These response codes are generated at individual items of a request.

<aside class="notice"> For instance, assume that a batch API call is made to add multiple transactions. The entire request will have a status (successful, failed or partial success)and also each transaction item will have its own response code element. You can see API level response in the <status> element and item level in the <item_status> element.
</aside>

### API Level Response Codes

Code | Description
---- | -----------
200 | Success
201 | Some requests have failed due to errors
500 | All requests have failed due to errors
400 | Input is invalid, Please check request parameters or input xml/json
401 | Please check your username/password or authentication token
402 | Version is not supported for this resource
404 | Incorrect resource
405 | Incorrect HTTP Method
406 | Operation is not supported for the resource
407 | Unknown Error happened while processing the request
408 | Network MAC ID does not match 

### Item Level Response Codes
Each entity has a different set of response codes. Item level response codes for each entity is provided in the respective entity section. 









