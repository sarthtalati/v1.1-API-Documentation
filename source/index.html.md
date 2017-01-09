---
title: API Reference

language_tabs:
  - json
  - xml
  

toc_footers:
  - <a href='#'>Capillary V1.0 API Documentation</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - customer
  - transaction
  - points
  - coupon
  - communications
  

search: true
---

# Getting Started
The Capillary APIs are RESTful APIs that help third party applications manage an Organization’s CRM and/or Loyalty Program through Capillary’s platform. This document lists the APIs that can be used to integrate with the Capillary Server Application, their descriptions, resource information, request parameters, request URIs, and sample requests.



## Organization Setup
Every organization associated with Capillary is registered in InTouch. Based on the organization's architecture, store TILL /Store Center accounts are created for the organization apart from zones, concepts and stores. Only Capillary users have access to register an organization inTouch. Contact your Capillary Account Manager or Delivery Manager.

To set up an organization as a Capillary admin, see Setting up Organization. 
 

## Authentication
Capillary APIs are accessed using the TILL/Store Center credentials that are created when registering the organization. Please note that it is mandatory to use only the store specific Till/Store center credentials of the organization as the data in the API response depends on this identification.

<aside class="notice">
Use Case: 
For instance, assume that a retailer XYZ of India cluster is registered with Capillary with 2 stores - store1 and store2. Each store has 2 TILLS - till1 and till2(for store1), till3 and till4(for store2). 

If you authenticate using till1 credentials, you can access org level data and only the data of Store1. You cannot access the data of Store2.
</aside>


<aside class="warning">
For any assistance on Organization setup, please contact your Capillary's Account Manager.
</aside>


## Authentication
To obtain access to the entities of the Capillary Rest APIs, you need to authenticate the TILL/store center account that you are referring to for using the HTTP Basic Authentication.

Authorization Header is used for validating authentication credentials. The Authorization Header is constructed as shown below:

`Authorization: Basic <Base64 encoded (username: md5(password))>`

In the Authorization Header pass the encoded Base64 form of username and md5 formatted password.


<aside class="notice">
For example, to authenticate using TILL1 credentials whose password is 123: 

First convert the password ‘123’ in md5 form. i,e., 202cb962ac59075b964b07152d234b70

Then encode the username and md5 password to Base64. i.e. 

`Base64(till1: 202cb962ac59075b964b07152d234b70)` which is `Authorization: Basic dGlsbDE6IDIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw`
</aside>


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
A unique id is generated for every request made using Capillary APIs and is sent to the requestor in the Response Headers as "X-Cap-Requestid". 
You can use this request id to track the request end-to-end.
<aside class="notice"
It is recommended to note the `X-Cap-Requestid` of a request for future requirements.


<aside class="notice">
When an API call is made with 4 batch transactions, A response header is generated with the `X-Cap-Requestid` as shown above. This id can be used to track the details of the entire API call (both request and response).
</aside>

## HTTP Request
Type | Description
---- | -----------
Request URL Format | http://<host>/<API version no.>/<entity>/<method>.<format>
Host | The server to which the API calls are made (cluster URL). <br>**India**: intouch.capillary.co.in <br>**APAC2**: apac2.intouch.capillarytech.com <br>**EU**: eu.intouch.capillarytech.com, <br>**US**: us.intouch.capillarytech.com
API Version Number | v1.1
Entity | Provide the appropriate entity based on the action to be performed. The supported entities are communications, coupon, customer, organization, points, product, store, and transaction
HTTP Methods | The Capillary Cloud REST APIs support the standard HTTP methods - GETand POST
Response Format | The format for requesting data from the APIs (xml, json). V1.1 APIs return information in the XML format by default. To get json response, mention `format=xml` explicitly.

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

API responces are generated at request level and item level.

* **Request Level Responses**: These response codes are generated at the request level (for an entire request).
* **Item Level Responses**: These response codes are generated at individual items of a request.

<aside class="notice"> For instance, assume that a batch API call is made to add multiple transactions. The entire request will have a status (successful, failed or partial success)and alse each transaction item will have its own response code element. You can see API level response in the `<status>` element and item level in the `<item_status>` element.
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



















