# Request
Request entity contains APIs corresponding to submitting and retrieving requests. In Capillary APIs, requests are of two types - Change Identifier and Goodwill. Request APIs allow you to change customer identifiers, merge customer accounts, issue Goodwill points/coupons, and retrieve details of submitted requests.

* **Change Identifier**: Requests corresponding to identifier change, accounts merge, and mobile reallocation
* **Goodwill**: Requests corresponding to goodwill points and coupons


## Add Request (Identifier Change)

> Sample Request

```html
http://us.api.capillarytech.com/v1.1/request/add
```

> Sample POST Request

```xml
<root>
<request>
    <reference_id>1234</reference_id>
    <type>CHANGE_IDENTIFIER</type>
    <base_type>EMAIL</base_type>
    <customer>
        <email>Tom.sawyerold@example.com</email>
        <mobile>44700900000</mobile>
        <external_id>ts1234</external_id>
        <id>395958</id>
    </customer>
    <old_value>Tom.sawyerold@example.com</old_value>
    <new_value>Tom.sawyer@example.com</new_value>
    <requested_on>time in 8601</requested_on>
</request>
</root>

```

```json
{
  "root": {
    "request": [{
      "reference_id": "1234",
      "type": "CHANGE_IDENTIFIER",
      "base_type": "EMAIL",
      "customer": {
        "email": "Tom.sawyerold@example.com",
        "mobile": "44700900000",
        "external_id": "ts1234",
        "id": "395958"
      },
      "old_value": "Tom.sawyerold@example.com",
      "new_value": "Tom.sawyer@example.com",
      "requested_on": "time in 8601"
    }]
  }
}
```



> Sample Response

```xml
<response>
<status>
<success>true</success>
<code>200</code>
<message>SUCCESS</message>
</status>
<requests>
    <request>
<reference_id>1234</reference_id>
<id>23123124</id>
<status>PENDING</status>
<type>CHANGE_IDENTIFIER</type>
<base_type>MOBILE</base_type>
<customer>
<firstname>Tom</firstname>
<lastname>Sawyer</lastname>
<email>tom.sawyerold@example.com</email>
<mobile>44700900000</mobile>
<external_id>ts1234</external_id>
<id>10423</id>
</customer>
<old_value>tom.sawyerold@example.com</old_value>
<new_value>Tom.sawyer@example.com</new_value>
<item_status>
<success>true</success>
<code>9000</code>
<message>Change Identifier request added successfully</message>
</item_status>
</request>
</requests>
</response>
```

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "requests": {
      "request": {
        "reference_id": "1234",
        "id": "23123124",
        "status": "PENDING",
        "type": "CHANGE_IDENTIFIER",
        "base_type": "MOBILE",
        "customer": {
          "firstname": "Tom",
          "lastname": "Sawyer",
          "email": "tom.sawyerold@example.com",
          "mobile": "44700900000",
          "external_id": "ts1234",
          "id": "10423"
        },
        "old_value": "tom.sawyerold@example.com",
        "new_value": "Tom.sawyer@example.com",
        "item_status": {
          "success": "true",
          "code": "9000",
          "message": "Change Identifier request added successfully"
        }
      }
    }
  }
}
```


Lets you submit requests for customer identifier changes. It could be either mobile number, email ID, or external ID.

Requests, when submitted, will be in pending status by default. Capillary back-end team verifies the request and could either approves or rejects it. The `request/add` API allows you to directly process a request by passing a query param `client_auto_approve=true`.

If `client_auto_approve=true`, the request will be created in pending status by default and then processed automatically.

However, requests can be approved automatically based on the following configs set on Member Care.

Config | Description
------ | -----------
CI_EMAIL_AUTO_APPROVE | Approves email id change requests automatically
CI_MOBILE_AUTO_APPROVE | Approves mobile number change requests automatically
CI_EXTID_AUTO_APPROVE | Approves external id change requests automatically
CI_ADDRESS_AUTO_APPROVE | Approves registered address change requests automatically


<aside class="warning">
The param `client_auto_approve` overrides all the server side configurations mentioned in the table above. However, it is recommended not to use the param unless it is highly necessary.
</aside>



### Resource Information
| | |
--------- | ----------- |
URI | `request/add`
Authentication | Yes
HTTP Methods | POST
Batch Support | Yes

### Request URL
`http://{host}/v1.1/request/add&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
client_auto_approve | boolean | If the value is true, approves request directly when the request is submitted. This even overrides the back-end configurations set on Member Care. Hence, highly recommended not to use in normal cases
is_one_step_change | boolean | Pass `true` for one step identifier change.


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
mobile/email/external_id/id* | string | Pass any of the identifiers of the customer with the identifier value.
reference_id* | long | Unique reference id for the request
type | enum | Type of request. Value:`CHANGE_IDENTIFIER`.
base_type | enum | Identifier that you want to update. Value: `MOBILE`, `EMAIL`, `EXTERNAL_ID`.
old_value | string | The current value of the customer identifier.
new_value | string | The new value of the customer identifier.


<aside class="notice">Parameters marked with * are mandatory. </aside>

### Response Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
reference_id | string | Unique reference ID of the request.
id | long | Unique ID generated for the request.
status | enum | Current status of the request. Values: `PENDING`, `APPROVED`, `REJECTED`.
customer | obj | Details of the customer details associated to the request.






## Add Request (Mobile Number Reallocation)

> Sample Request

```html
http://us.api.capillarytech.com/v1.1/request/add
```

> Sample POST Request

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <root>
      <request>
         <element>
            <base_type>MOBILE_REALLOC</base_type>
            <customer>
               <email />
               <external_id />
               <mobile>919011111111</mobile>
            </customer>
            <misc_info>
               <target_customer>
                  <email />
                  <external_id />
                  <id />
                  <mobile>9818012000</mobile>
               </target_customer>
            </misc_info>
            <new_value />
            <old_value>919011111111</old_value>
            <type>CHANGE_IDENTIFIER</type>
         </element>
      </request>
   </root>
</root>
```

```json
{ 
   "root":{ 
      "request":[ 
         { 
            "customer":{ 
               "mobile":"919011111111",
               "external_id":"",
               "email":""
            },
            "old_value":"919011111111",
            "base_type":"MOBILE_REALLOC",
            "new_value":"",
            "type":"CHANGE_IDENTIFIER",
            "misc_info":{ 
               "target_customer":{ 
                  "mobile":"9818012000",
                  "external_id":"",
                  "email":" ",
                  "id":""
               }
            }
         }
      ]
   }
}
```




> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <response>
      <requests>
         <request>
            <element>
               <base_type>MOBILE_REALLOC</base_type>
               <comments />
               <customer>
                  <email>rita.john@example.com</email>
                  <external_id>XYPZ006</external_id>
                  <firstname>Rita</firstname>
                  <id>343439221</id>
                  <lastname>John</lastname>
                  <mobile>919011111111</mobile>
               </customer>
               <id>789849</id>
               <item_status>
                  <code>9000</code>
                  <message>Change Identifier request added successfully</message>
                  <success>true</success>
               </item_status>
               <misc_info null="true" />
               <new_type />
               <new_value>343490735</new_value>
               <old_type />
               <old_value>343439221</old_value>
               <reason />
               <reference_id null="true" />
               <requested_on>2020-01-02 12:02:29</requested_on>
               <status>PENDING</status>
               <transaction_id>0</transaction_id>
               <type>CHANGE_IDENTIFIER</type>
            </element>
         </request>
      </requests>
      <status>
         <code>200</code>
         <message>Success</message>
         <success>true</success>
      </status>
   </response>
</root>
```

```json
{
   "response":{
      "status":{
         "success":true,
         "code":200,
         "message":"Success"
      },
      "requests":{
         "request":[
            {
               "reference_id":null,
               "id":"789849",
               "status":"PENDING",
               "requested_on":"2020-01-02 12:02:29",
               "type":"CHANGE_IDENTIFIER",
               "base_type":"MOBILE_REALLOC",
               "customer":{
                  "firstname":"Rita",
                  "lastname":"John",
                  "email":"rita.john@example.com",
                  "mobile":"919011111111",
                  "external_id":"XYPZ006",
                  "id":343439221
               },
               "old_value":"343439221",
               "new_value":"343490735",
               "old_type":"",
               "new_type":"",
               "misc_info":null,
               "transaction_id":"0",
               "reason":"",
               "comments":"",
               "item_status":{
                  "success":true,
                  "code":9000,
                  "message":"Change Identifier request added successfully"
               }
            }
         ]
      }
   }
}
```


Lets you submit mobile number reallocation requests. You can reallocate only registered mobile numbers.

Requests, when submitted, will go in pending status by default. Capillary back-end team verifies the request and could either approves or rejects it. The `request/add` API allows you to directly process a request by passing a query param `client_auto_approve=true`.

If `client_auto_approve=true`, the request will be created in pending status by default and then processed automatically.

However, requests can be approved automatically based on the following configs set on Member Care.

Config | Description
------ | -----------
CI_MOBILEREALLOC_AUTO_APPROVE | Approves mobile number reallocation requests automatically


<aside class="warning">
The param `client_auto_approve` overrides all the server side configurations mentioned in the table above. However, it is recommended not to use the param unless it is highly necessary.
</aside>



### Resource Information
| | |
--------- | ----------- |
URI | `request/add`
Authentication | Yes
HTTP Methods | POST
Batch Support | Yes

### Request URL
`http://{host}/v1.1/request/add&format={xml/json}`


### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
client_auto_approve | boolean | If the value is true, the request is approved directly. This even overrides the back-end configurations set on Member Care. Hence, we strictly recommended not to use in normal cases
is_one_step_change | boolean | Pass `true` for one step identifier change.

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
customer | obj | Details of source account.
target_customer | obj | Details of target account.
mobile/email/external_id/id* | string | Pass any of the identifiers of the customer with the identifier value.
old_value | string | The mobile number of the source customer that has to reassign to the target customer.
type | enum | Type of request. Value: `CHANGE_IDENTIFIER`.
base_type | enum | Sub-type of the request. Value: `MOBILE_REALLOC`.


<aside class="notice">Parameters marked with * are mandatory. </aside>

### Response Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
requested_on | date-time | Date and time when the request is created.
id | long | Unique ID generated for the request.
status | enum | Current status of the request. Value: `PENDING`, `APPROVED`, `REJECTED`. The status will be `APPROVED` if mobile number reallocation (CI_MOBILEREALLOC_AUTO_APPROVE) is auto approved either on the UI or through API (`client_auto_approve`).
customer | obj | Updated details of the target customer.





## Add Request (Merge Accounts)

> Sample Request

```html
http://us.api.capillarytech.com/v1.1/request/add
```

> Sample POST Request

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <request>
    <customer>
      <mobile></mobile>
      <external_id></external_id>
      <email>tom739@capillarytech.com</email>
      <id></id>
    </customer>
    <old_value></old_value>
    <base_type>MERGE</base_type>
    <new_value></new_value>
    <type>CHANGE_IDENTIFIER</type>
    <misc_info>
      <target_customer>
        <mobile></mobile>
        <external_id></external_id>
        <email></email>
        <id>342979941</id>
      </target_customer>
    </misc_info>
  </request>
</root>
```

```json
{
   "root":{
      "request":[
         {
            "customer":{
               "mobile":"",
               "external_id":"",
               "email":"tom739@capillarytech.com",
               "id":""
            },
            "old_value":"",
            "base_type":"MERGE",
            "new_value":"",
            "type":"CHANGE_IDENTIFIER",
            "misc_info":{
               "target_customer":{
                  "mobile":"",
                  "external_id":"",
                  "email":"",
                  "id":"342979941"
               }
            }
         }
      ]
   }
}
```




> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
  <status>
    <success>true</success>
    <code>200</code>
    <message>Success</message>
  </status>
  <requests>
    <request>
      <reference_id/>
      <id>789186</id>
      <status>PENDING</status>
      <requested_on>2019-12-31 16:58:02</requested_on>
      <type>CHANGE_IDENTIFIER</type>
      <base_type>MERGE</base_type>
      <customer>
        <firstname>unknown739</firstname>
        <lastname/>
        <email>unknown739@capillarytech.com</email>
        <mobile>919901032739</mobile>
        <external_id/>
        <id>322393226</id>
      </customer>
      <old_value>322393226</old_value>
      <new_value>342979941</new_value>
      <old_type></old_type>
      <new_type></new_type>
      <misc_info/>
      <transaction_id>0</transaction_id>
      <reason></reason>
      <comments></comments>
      <item_status>
        <success>true</success>
        <code>9000</code>
        <message>Change Identifier request added successfully</message>
      </item_status>
    </request>
  </requests>
</response>
```

```json
{
    "response": {
        "status": {
            "success": true,
            "code": 200,
            "message": "Success"
        },
        "requests": {
            "request": [
                {
                    "reference_id": null,
                    "id": "789186",
                    "status": "PENDING",
                    "requested_on": "2019-12-31 16:58:02",
                    "type": "CHANGE_IDENTIFIER",
                    "base_type": "MERGE",
                    "customer": {
                        "firstname": "unknown739",
                        "lastname": null,
                        "email": "unknown739@capillarytech.com",
                        "mobile": "919901032739",
                        "external_id": null,
                        "id": 322393226
                    },
                    "old_value": "322393226",
                    "new_value": "342979941",
                    "old_type": "",
                    "new_type": "",
                    "misc_info": null,
                    "transaction_id": "0",
                    "reason": "",
                    "comments": "",
                    "item_status": {
                        "success": true,
                        "code": 9000,
                        "message": "Change Identifier request added successfully"
                    }
                }
            ]
        }
    }
}
```


Lets you submit requests of merge accounts.

Requests, when submitted, will be in pending status by default. Capillary back-end team verifies the request and could either approves or rejects it. The `request/add` API allows you to directly process a request by passing a query param `client_auto_approve=true`.

If `client_auto_approve=true`, the request will be created in pending status by default and then processed automatically.

However, requests can be approved automatically based on the following configs set on Member Care.

Config | Description
------ | -----------
CI_MERGE_AUTO_APPROVE | Approves customer accounts merge requests automatically


<aside class="warning">
The param `client_auto_approve` overrides the server side configuration, mentioned in the table above. However, it is recommended not to use the param unless it is highly necessary.
</aside>



### Resource Information
| | |
--------- | ----------- |
URI | `request/add`
Authentication | Yes
HTTP Methods | POST
Batch Support | Yes

### Request URL
`http://{host}/v1.1/request/add&format={xml/json}`


### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
client_auto_approve | boolean | If the value is true, approves request directly when the request is submitted. This even overrides the back-end configurations set on Member Care. Hence, highly recommended not to use in normal cases
is_one_step_change | boolean | Pass `true` for one step account merge.


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
customer | obj | Details of the victim account - the account that you want to merge into another account.
target_customer | obj | Details of the survivor account - the account that will continue to remain after merging.
mobile/email/external_id/id* | string | Pass any of the identifiers of the customer with the identifier value.
type | enum | Pass `CHANGE_IDENTIFIER` for merge requests.
base_type | enum | Sub-type of the request. Value: `MERGE`


<aside class="notice">Parameters marked with * are mandatory. </aside>


### Response Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
requested_on | date-time | Date and time when the request is created in YYYY-MM-DD format






## Add Request (Goodwill Points/Coupons)

> Sample Request

```html
http://us.api.capillarytech.com/v1.1/request/add?program_id=687
```

> Sample POST Request


```xml
# For goodwill points
<root>
   <request>
      <customer>
         <id>2345</id>
		 <mobile></mobile>
		 <email></email>
		 <external_id></external_id>
      </customer>
      <comments>API Service request - Awarding him 200 points.</comments>
      <reason>POINTS_ISSUE</reason>
      <type>GOODWILL</type>
      <base_type>POINTS</base_type>
      <points>200</points>
   </request>
</root>
```

```json
# For points
{
  "root":{
    "request":[
      {
        "customer":{
          "id":"2345",
		  "mobile":"",
		  "email":"",
		  "external_id":""
        },
        "comments":"API Service request - Awarding 200 points.",
        "reason":"Issue Goodwill points",
        "type":"GOODWILL",
        "base_type":"POINTS",
        "points":"200"
      }
    ]
  }
}
```

```json
# For Goodwill Coupon
{
   "root":{
      "request":[
         {
            "customer":{
               "mobile":"919011111111",
               "external_id":"",
               "email":""
            },
            "reason":"Sample reason",
            "comments":"Additional comment if required",
            "type":"GOODWILL",
            "base_type":"COUPON",
			"series_id":"80197"
         }
      ]
   }
}
```

```xml
# For Goodwill Coupon
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <root>
      <request>
         <element>
            <base_type>COUPON</base_type>
            <comments>Additional comment if required</comments>
            <customer>
               <email />
               <external_id />
               <mobile>919011111111</mobile>
            </customer>
            <reason>Sample reason</reason>
            <series_id>80197</series_id>
            <type>GOODWILL</type>
         </element>
      </request>
   </root>
</root>
```


> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <response>
      <requests>
         <request>
            <element>
               <base_type>POINTS</base_type>
               <comments />
               <customer>
                  <email>shigan@example.com</email>
                  <external_id>SG006</external_id>
                  <firstname>Shi</firstname>
                  <id>343490735</id>
                  <lastname>Gan</lastname>
                  <mobile>919011111111</mobile>
               </customer>
               <id>789850</id>
               <item_status>
                  <code>9100</code>
                  <message>Goodwill request added successfully</message>
                  <success>true</success>
               </item_status>
               <misc_info null="true" />
               <new_type />
               <new_value />
               <old_type />
               <old_value>919011111111</old_value>
               <reason />
               <reference_id null="true" />
               <requested_on>2020-01-02 13:13:38</requested_on>
               <status>PENDING</status>
               <transaction_id>0</transaction_id>
               <type>GOODWILL</type>
            </element>
         </request>
      </requests>
      <status>
         <code>200</code>
         <message>Success</message>
         <success>true</success>
      </status>
   </response>
</root>
```

```json
{
    "response": {
        "status": {
            "success": true,
            "code": 200,
            "message": "Success"
        },
        "requests": {
            "request": [
                {
                    "reference_id": null,
                    "id": "789850",
                    "status": "PENDING",
                    "requested_on": "2020-01-02 13:13:38",
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "customer": {
                        "firstname": "Shi",
                        "lastname": "Gan",
                        "email": "shigan@example.com",
                        "mobile": "919011111111",
                        "external_id": "SG006",
                        "id": 343490735
                    },
                    "old_value": "919011111111",
                    "new_value": "",
                    "old_type": "",
                    "new_type": "",
                    "misc_info": null,
                    "transaction_id": "0",
                    "reason": "",
                    "comments": "",
                    "item_status": {
                        "success": true,
                        "code": 9100,
                        "message": "Goodwill request added successfully"
                    }
                }
            ]
        }
    }
}
```


Lets you submit goodwill points or coupon allocation requests for loyalty customers.

Requests, when submitted, will go in pending status by default. Capillary back-end team verifies the request and could either approves or rejects it. The `request/add` API allows you to directly process a request by passing a query param `client_auto_approve=true`.

If `client_auto_approve=true`, the request will be created in pending status by default and then processed automatically.


<aside class="warning">
The param `client_auto_approve` overrides all the server side configurations mentioned in the table above. However, it is recommended not to use the param unless it is highly necessary.
</aside>



### Resource Information
| | |
--------- | ----------- |
URI | `request/add?{params}`
Authentication | Yes
HTTP Methods | POST
Batch Support | Yes

### Request URL
`http://{host}/v1.1/request/add?{params}&format={xml/json


### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
client_auto_approve | boolean | If the value is `true`, the request is approved directly. This even overrides the back-end configurations set on Member Care. Hence, highly recommended not to use in normal cases.
is_one_step_change | boolean | Pass `true` for one step identifier change.
program_id | long | The loyalty program ID from which you want to issue points. This is applicable if the org has multiple loyalty programs configured.

 

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
customer | obj | Details of the customer to whom you want to issue goodwill points or coupons.
mobile/email/external_id/id* | string | Pass any of the identifiers of the customer with the identifier value.
reference_id* | string | Unique reference ID for the request.
reason | string | Reason for issuing goodwill points or coupons.
comments | string | Any other notes that you want to add for the request.
type | enum | Type of request. Value: `GOODWILL`.
base_type | enum | Sub-type of the request. Value: `POINTS` for goodwill points issual, `COUPONS` for goodwill coupon issual.
series_id | long | Offer ID from which coupon has to be issued. Ensure that the offer is consumed by Member Care module (Goodwill Adjustment Settings > Coupon). Applicable only for `base_type` as `COUPONS`.
points | int | Number of points to issue. Applicable only for `base_type` as `POINTS`.


<aside class="notice">Parameters marked with * are mandatory. </aside>

### Response Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id | long | Unique ID generated for the request.
status | enum | Current status of the status. Value: `PENDING`, `APPROVED`, `REJECTED`
requested_on | date-time | Date and time when the request is created.


## Add Request (Retro Transaction)

> Sample Request

```html
http://us.api.capillarytech.com/v1.1/request/add
```

> Sample POST Request


```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <root>
      <request>
         <element>
            <base_type>RETRO</base_type>
            <customer>
               <email />
               <external_id />
               <id />
               <mobile>919011111111</mobile>
            </customer>
            <misc_info />
            <new_type>REGULAR</new_type>
            <old_type>NOT_INTERESTED</old_type>
            <reference_id>ref345</reference_id>
            <transaction_id>7099259</transaction_id>
            <type>TRANSACTION_UPDATE</type>
         </element>
      </request>
   </root>
</root>
```

```json
{
   "root":{
      "request":[
         {
            "customer":{
               "mobile":"919011111111",
               "external_id":"",
               "id":"",
               "email":""
            },
            "old_type":"NOT_INTERESTED",
            "transaction_id":"7099259",
            "new_type":"REGULAR",
            "base_type":"RETRO",
            "reference_id":"ref345",
            "type":"TRANSACTION_UPDATE",
            "misc_info":""
         }
      ]
   }
}
```


> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <response>
      <requests>
         <request>
            <element>
               <base_type>RETRO</base_type>
               <comments />
               <customer>
                  <email>shigan@example.com</email>
                  <external_id>SG006</external_id>
                  <firstname>Shi</firstname>
                  <id>343490735</id>
                  <lastname>Gan</lastname>
                  <mobile>919011111111</mobile>
               </customer>
               <id>789861</id>
               <item_status>
                  <code>9000</code>
                  <message>Retro request added successfully</message>
                  <success>true</success>
               </item_status>
               <misc_info null="true" />
               <new_type>REGULAR</new_type>
               <new_value />
               <old_type>NOT_INTERESTED</old_type>
               <old_value />
               <reason />
               <reference_id null="true" />
               <requested_on>2020-01-02 16:21:54</requested_on>
               <status>PENDING</status>
               <transaction_id>7099259</transaction_id>
               <type>TRANSACTION_UPDATE</type>
            </element>
         </request>
      </requests>
      <status>
         <code>200</code>
         <message>Success</message>
         <success>true</success>
      </status>
   </response>
</root>
```

```json
{
   "response":{
      "status":{
         "success":true,
         "code":200,
         "message":"Success"
      },
      "requests":{
         "request":[
            {
               "reference_id":null,
               "id":"789861",
               "status":"PENDING",
               "requested_on":"2020-01-02 16:21:54",
               "type":"TRANSACTION_UPDATE",
               "base_type":"RETRO",
               "customer":{
                  "firstname":"Shi",
                  "lastname":"Gan",
                  "email":"shigan@example.com",
                  "mobile":"919011111111",
                  "external_id":"SG006",
                  "id":343490735
               },
               "old_value":"",
               "new_value":"",
               "old_type":"NOT_INTERESTED",
               "new_type":"REGULAR",
               "misc_info":null,
               "transaction_id":"7099259",
               "reason":"",
               "comments":"",
               "item_status":{
                  "success":true,
                  "code":9000,
                  "message":"Retro request added successfully"
               }
            }
         ]
      }
   }
}
```


Lets you tag a not-interested transaction to a loyalty customer. For example, if a customer has made a transaction before registering and then registers in the org's loyalty program, you can tag such transactions to the respective customer (if the duration between the transaction and conversion is within defined period).

Requests, when submitted, will go in pending status by default. Capillary back-end team verifies the request and could either approves or rejects it. The `request/add` API allows you to directly process a request by passing a query param `client_auto_approve=true`.

If `client_auto_approve=true`, the request will be created in pending status by default and then processed automatically.


<aside class="warning">
The param `client_auto_approve` overrides all the server side configurations mentioned in the table above. However, it is recommended not to use the param unless it is highly necessary.
</aside>



### Resource Information
| | |
--------- | ----------- |
URI | `request/add`
Authentication | Yes
HTTP Methods | POST
Batch Support | Yes

### Request URL
`http://{host}/v1.1/request/add&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
client_auto_approve | boolean | If the value is true, approves request directly when the request is submitted. This even overrides the back-end configurations set on Member Care. Hence, highly recommended not to use in normal cases.
is_one_step_change | boolean | Pass `true` for directly tagging a not-interested transaction to a customer without validation.


### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
customer* | obj | Details of the customer to whom you want to tag transaction.
mobile/email/external_id/id* | string | Pass any of the identifiers of the customer with the identifier value.
type | enum | Type of request. Value: `TRANSACTION_UPDATE`.
base_type | enum | Base transaction type. Value: `RETRO`.
old_type | enum | Current transaction type. Value: `NOT_INTERESTED`.
new_type | enum | New transaction type. Value: `REGULAR`.
reason | string | Reason for issuing goodwill points/coupons. Applicable only for goodwill response
comments | string | Small description on why goodwill points/coupons issued
transaction_id | string | Transaction ID of the not-interested transaction that you want to update.
misc_info | string | Additional information regarding the current retro conversion.


<aside class="notice">Parameters marked with * are mandatory. </aside>


### Response Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id | long |  Unique ID generated for the request.
status | enum | Current status of the request. Value: `PENDING`, `APPROVED`, `REJECTED`.
requested_on | date-time | Date and time when the request is submitted.







## Approve Requests

> Sample Request

```html
http://us.api.capillarytech.com/v1.1/request/approve
```

> Sample POST Request

```xml
<root>
    <request>
        <type>GOODWILL</type>
        <base_type>POINTS</base_type>
        <id>23423</id>
        <points>20</points>
<updated_comments>Seems to a valid request. hence approving</updated_comments>
    </request>
</root>


```

```json
{
  "root": {
    "request": [{
      "type": "GOODWILL",
      "base_type": "POINTS",
      "id": "23423",
      "points": "20",
      "updated_comments": "Seems to a valid request. hence approving"
    }]
  }
}
```

> Sample Response

```xml
<response>
    <requests>
        <goodwill>
            <type>POINTS</type>
            <reason>BILL_ISSUE</reason>
            <comments>pls issue a coupon for the failed transaction</comments>
<updated_comments>Seems to a valid request. hence approving</updated_comments>
            <status>APPROVED</status>
            <reply></reply>
            <customer>
                <firstname>Tom</firstname>
                <lastname>Sawyer</lastname>
                <email>tom.sawyer@example.com</email>
                <mobile>919999999999</mobile>
                <external_id>ts1234</external_id>
            </customer>
            <added_on>2014-01-22T03:06:11+05:30</added_on>
            <last_action_on>2016-01-23T03:06:11+05:30</last_action_on>
        </goodwill>
    </requests>
</response>
```

```json
{
  "response": {
    "requests": {
      "goodwill": {
        "type": "POINTS",
        "reason": "BILL_ISSUE",
        "comments": "pls issue a coupon for the failed transaction",
        "updated_comments": "Seems to a valid request. hence approving",
        "status": "APPROVED",
        "customer": {
          "firstname": "Tom",
          "lastname": "Sawyer",
          "email": "tom.sawyer@example.com",
          "mobile": "919999999999",
          "external_id": "ts1234"
        },
        "added_on": "2014-01-22T03:06:11+05:30",
        "last_action_on": "2016-01-23T03:06:11+05:30"
      }
    }
  }
}
```

Allows approving requests that are in pending status. You can use this API only when the auto-approval configurations are not enabled for your organization. Also, you cannot approve force approval requests made using `client_auto_approve=true`.

### Resource Information
| | |
--------- | ----------- |
URI | `/approve`
Authentication | Yes
HTTP Methods | POST
Batch Support | Yes

### Request URL
`http://{host}/v1.1/request/approve&format={xml/json}`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id* | long | Reference id of the request that you want to approve
type* | enum | Type of request. Value: `CHANGE_IDENTIFIER`, `GOODWILL`, `TRANSACTION_UPDATE`.
base_type* | enum | Sub-type of the request. Value: If `type=CHANGE_IDENTIFIER`, `base_type` will be MOBILE, EMAIL, EXTERNAL_ID, MERGE, or REALLOCATION. <br> If `type=GOODWILL`, `base_type` will be POINTS, or COUPONS

<aside class="notice">Parameters marked with * are mandatory. </aside>


## Reject Request

> Sample Request URL

```html
http://us.api.capillarytech.com/v1.1/request/reject
```
> Sample POST Request

```xml
<root>
    <request>
        <type>CHANGE_IDENTIFIER</type>
        <base_type>MOBILE</base_type>
        <id>346436</id>
        <updated_comments>outlier</updated_comments>
    </request>
</root>
```

```json
{
  "root": {
    "request": [{
      "type": "CHANGE_IDENTIFIER",
      "base_type": "MOBILE",
      "id": "346436",
      "updated_comments": "outlier"
    }]
  }
}
```
> Sample POST Response

```xml
<response>
<status>
<success>true</success>
<code>200</code>
<message>SUCCESS</message>
</status>
<requests>
<request>
<id>12955</id>
<type>CHANGE_IDENTIFIER</type>
<base_type>MOBILE</base_type>
<status>REJECTED</status>
<old_value>44700900099</old_value>
<new_value>44700900000</new_value>
<item_status>
<success>true</success>
<code>9000</code>
<message>Request updated successfully</message>
</item_status>
</request>
</requests>
</response>

```

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "requests": {
      "request": {
        "id": "12955",
        "type": "CHANGE_IDENTIFIER",
        "base_type": "MOBILE",
        "status": "REJECTED",
        "old_value": "44700900099",
        "new_value": "44700900000",
        "item_status": {
          "success": "true",
          "code": "9000",
          "message": "Request updated successfully"
        }
      }
    }
  }
}
```

Allows rejecting requests that are in pending status. You can use this API only when the auto-approval configurations are not enabled for your organization. Also, you cannot reject force approval requests made using `client_auto_approve=true`.

### Resource Information
| | |
--------- | ----------- |
URI | `request/reject`
Authentication | Yes
HTTP Methods | POST
Batch Support | Yes

### Request URL
`http://{host}/v1.1/request/reject&format={xml/json}`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id* | long | Reference id of the request that you want to approve
type* |enum | Type of request. Value: `CHANGE_IDENTIFIER`, `GOODWILL`, `TRANSACTION_UPDATE`.
base_type* | enum | Sub-type of the request. Value: If `type=CHANGE_IDENTIFIER`, `base_type` will be MOBILE, EMAIL, EXTERNAL_ID, MERGE, or REALLOCATION. <br> If `type=GOODWILL`, `base_type` will be POINTS, or COUPONS.


## Retrieve Request Details

> Sample Request URL

```html
https://us.api.capillarytech.com/v1.1/request/get?format=json
```

> Sample Response

```xml
<response>
<status>
<success>true</success>
<code>200</code>
<message>SUCCESS</message>
</status>
<requests>
    <count>531</count>
    <rows>30</rows>
<goodwill>
<id>10039</id>
<type>GOODWILL</type>
<status>PENDING</status>
<base_type>COUPON</base_type>
<reason>BILL_ISSUE</reason>
<comments>customer is angry</comments>
<customer>
<firstname>Tom</firstname>
<lastname>Sawyer</lastname>
<email>Tom.sawyer@example.com</email>
<mobile>44700900000</mobile>
<external_id>ts1234</external_id>
<fraud_status>CONFIRMED</fraud_status>
</customer>
<assoc_id></assoc_id>
<approved_value></approved_value>
<updated_comments></updated_comments>
<added_on>2016-02-12T13:32:42+05:30</added_on>
<last_action_on></last_action_on>
<added_by>
<code>Tom.store</code>
<name>Tom store</name>
</added_by>
<updated_by>
<code></code>
<name></name>
</updated_by>
</goodwill>
<change_identifier>
<id>10034</id>
<type>CHANGE_IDENTIFIER</type>
<status>REJECTED</status>
<base_type>EMAIL</base_type>
<new_value>Tom@Tom2.com</new_value>
<old_value>Tom@Tom.com</old_value>
<customer>
<firstname>Tom</firstname>
<lastname>Sawyer</lastname>
<email>Tom@Tom2.com</email>
<mobile>919740798372</mobile>
<external_id>XYPZ001</external_id>
<fraud_status>CONFIRMED</fraud_status>
</customer>
<updated_comments></updated_comments>
<added_on>2016-02-12T05:30:00+05:30</added_on>
<last_action_on>2014-02-21T05:30:00+05:30</last_action_on>
<added_by>
<code>Tom.store</code>
<name>Tom store</name>
</added_by>
<updated_by>
<code>admin</code>
<name>Mr Admin</name>
</updated_by>
</change_identifier>
<change_identifier>
<id>10035</id>
<type>CHANGE_IDENTIFIER</type>
<status>REJECTED</status>
<base_type>EMAIL</base_type>
<new_value>tom.sawyer@example.com</new_value>
<old_value>tom.tom@example.com</old_value>
<customer>
<firstname>Tom</firstname>
<lastname>Sawyer</lastname>
<email>Tom.sawyer@example.com</email>
<mobile>44700900000</mobile>
<external_id>XYPZ001</external_id>
<fraud_status>CONFIRMED</fraud_status>
</customer>
<added_on>2014-01-20T05:30:00+05:30</added_on>
<last_action_on>2016-02-01T05:30:00+05:30</last_action_on>
<added_by>
<code>Tom.store</code>
<name>Tom store</name>
</added_by>
<updated_by>
<code>admin007</code>
<name>Mr Admin</name>
</updated_by>
</change_identifier>
<item_status>
<success>true</success>
<code>9000</code>
<message>Request retrieved successfully</message>
</item_status>
</requests>
</response>
```

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "requests": {
      "count": "531",
      "rows": "30",
      "goodwill": {
        "id": "10039",
        "type": "GOODWILL",
        "status": "PENDING",
        "base_type": "COUPON",
        "reason": "BILL_ISSUE",
        "comments": "customer is angry",
        "customer": {
          "firstname": "Tom",
          "lastname": "Sawyer",
          "email": "Tom.sawyer@example.com",
          "mobile": "44700900000",
          "external_id": "ts1234",
          "fraud_status": "CONFIRMED"
        },
        "added_on": "2016-02-12T13:32:42+05:30",
        "added_by": {
          "code": "Tom.store",
          "name": "Tom store"
        },
        "updated_by": {
          
        }
      },
      "change_identifier": [
        {
          "id": "10034",
          "type": "CHANGE_IDENTIFIER",
          "status": "REJECTED",
          "base_type": "EMAIL",
          "new_value": "Tom@Tom2.com",
          "old_value": "Tom@Tom.com",
          "customer": {
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "Tom@Tom2.com",
            "mobile": "919740798372",
            "external_id": "XYPZ001",
            "fraud_status": "CONFIRMED"
          },
          "added_on": "2016-02-12T05:30:00+05:30",
          "last_action_on": "2014-02-21T05:30:00+05:30",
          "added_by": {
            "code": "Tom.store",
            "name": "Tom store"
          },
          "updated_by": {
            "code": "admin",
            "name": "Mr Admin"
          }
        },
        {
          "id": "10035",
          "type": "CHANGE_IDENTIFIER",
          "status": "REJECTED",
          "base_type": "EMAIL",
          "new_value": "tom.sawyer@example.com",
          "old_value": "tom.tom@example.com",
          "customer": {
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "Tom.sawyer@example.com",
            "mobile": "44700900000",
            "external_id": "XYPZ001",
            "fraud_status": "CONFIRMED"
          },
          "added_on": "2014-01-20T05:30:00+05:30",
          "last_action_on": "2016-02-01T05:30:00+05:30",
          "added_by": {
            "code": "Tom.store",
            "name": "Tom store"
          },
          "updated_by": {
            "code": "admin007",
            "name": "Mr Admin"
          }
        }
      ],
      "item_status": {
        "success": "true",
        "code": "9000",
        "message": "Request retrieved successfully"
      }
    }
  }
}
```


The `request/get` API allows you to retrieve up to 50 records containing goodwill and change identifier requests. a sub-set of request/logs API. You can retrieve requests by customer and request type such as change identifier, customer merge, mobile reallocation and good will requests. This API supports various filters to fetch requests.

### Resource Information
| | |
--------- | ----------- |
URI | `/request/get`
Authentication | Yes
HTTP Methods | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/request/get&{params}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
start_date | date | Get requests added on or after a specific date (`YYYY-MM-DD`). To get requests for a specific duration, pass the date-range in `start_date` and `end_date`.
end_date | date | Get requests added before a specific date (`YYYY-MM-DD`). To get requests for a specific duration, pass the date-range in `start_date` and `end_date`.
identifierName | enum | Get requests of a specific customer. Pass any of the identifier names with the identifier value. Values: `user_id`, `email`, 	`mobile`, `external_id`. For example, `email=tom.sawyer@example.com`.
status | enum | Returns the requests by request status. Values: `APPROVED`, `PENDING`, `REJECTED`.
type | enum | Returns a specific type of requests. Value: `CHANGE_IDENTIFIER`, `GOODWILL`, `TRANSACTION_UPDATE`.
base_type | (MOBILE, EXTERNAL_ID, EMAIL, MERGE, ADDRESS, COUPONS, POINTS)
start_id | long | Get requests starting from a specific request ID.
end_id | long | Get requests until a specific request ID.
start_limit | int | UI support for data table. Example: get next 20 batch; formula: (page_no-1)*limit.
limit | int | Limit number of entries to retrieve.

<aside class"notice">Any one among the preceding parameters is mandatory.</aside>

## Retrieve Request Logs

> Sample Request URL

```html
https://us.api.capillarytech.com/v1.1/request/logs?format=json&type=CHANGE_IDENTIFIER&start_date=2016-01-15&end_date=2017-05-08&base_type=EMAIL

```

> Sample Response

```xml
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>SUCCESS</message>
    </status>
    <requests>
        <count>60</count>
        <rows>10</rows>
        <change_identifier>
            <id>263452</id>
            <customer>
                <firstname>Tom</firstname>
                <lastname>Sawyer</lastname>
                <email>tom.sawyer@example.com</email>
                <mobile>44700900000</mobile>
                <external_id>ts123</external_id>
                <fraud_status>NONE</fraud_status>
            </customer>
            <type>CHANGE_IDENTIFIER</type>
            <base_type>EMAIL</base_type>
            <status>PENDING</status>
            <old_value>tom.sawyerold@example.com</old_value>
            <new_value>tom.sawyer@example.com</new_value>
            <updated_comments/>
            <one_step_change>false</one_step_change>
            <approval_type>CLIENT</approval_type>
            <logs>
                <added_by>
                    <till>
                        <code>Catherine</code>
                        <name>James</name>
                    </till>
                    <store>
                        <code/>
                        <name/>
                    </store>
                    <time>2016-12-16T12:49:29+05:30</time>
                </added_by>
                <updated_by>
                    <user>
                        <name>Catherine James</name>
                        <mobile>44700200030</mobile>
                        <email>catherine@example.com</email>
                    </user>
                    <ip>115.114.139.186</ip>
                    <time>2016-12-16T12:49:29+05:30</time>
                </updated_by>
            </logs>
        </change_identifier>
        <change_identifier>
            <id>225750</id>
            <customer>
                <firstname>LUCIA</firstname>
                <lastname>Customer</lastname>
                <email>lucia@example.com</email>
                <mobile>918656001195</mobile>
                <external_id/>
                <fraud_status>NONE</fraud_status>
            </customer>
            <type>CHANGE_IDENTIFIER</type>
            <base_type>EMAIL</base_type>
            <status>APPROVED</status>
            <old_value>lucia.old@example.com</old_value>
            <new_value>lucia@example.com</new_value>
            <updated_comments/>
            <one_step_change>true</one_step_change>
            <approval_type>CLIENT</approval_type>
            <logs>
                <added_by>
                    <till>
                        <code>1371622280_919866643044</code>
                        <name>1371622280_Ashish</name>
                    </till>
                    <store>
                        <code/>
                        <name/>
                    </store>
                    <time>2016-09-16T15:52:07+05:30</time>
                </added_by>
                <updated_by>
                    <user>
                        <name>Ashish Karan</name>
                        <mobile>919866643044</mobile>
                        <email>cap@coin.com</email>
                    </user>
                    <ip>115.114.139.186</ip>
                    <time>2016-09-16T15:52:07+05:30</time>
                </updated_by>
            </logs>
        </change_identifier>
        <item_status>
            <success>true</success>
            <code>9000</code>
            <message>Request retrieved successfully</message>
        </item_status>
    </requests>
</response>
```

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "requests": {
      "count": "60",
      "rows": "10",
      "change_identifier": [
        {
          "id": "263452",
          "customer": {
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "tom.sawyer@example.com",
            "mobile": "44700900000",
            "external_id": "ts123",
            "fraud_status": "NONE"
          },
          "type": "CHANGE_IDENTIFIER",
          "base_type": "EMAIL",
          "status": "PENDING",
          "old_value": "tom.sawyerold@example.com",
          "new_value": "tom.sawyer@example.com",
          "one_step_change": "false",
          "approval_type": "CLIENT",
          "logs": {
            "added_by": {
              "till": {
                "code": "Catherine",
                "name": "James"
              },
              "store": {
                
              },
              "time": "2016-12-16T12:49:29+05:30"
            },
            "updated_by": {
              "user": {
                "name": "Catherine James",
                "mobile": "44700200030",
                "email": "catherine@example.com"
              },
              "ip": "115.114.139.186",
              "time": "2016-12-16T12:49:29+05:30"
            }
          }
        },
        {
          "id": "225750",
          "customer": {
            "firstname": "LUCIA",
            "lastname": "Customer",
            "email": "lucia@example.com",
            "mobile": "918656001195",
            "fraud_status": "NONE"
          },
          "type": "CHANGE_IDENTIFIER",
          "base_type": "EMAIL",
          "status": "APPROVED",
          "old_value": "lucia.old@example.com",
          "new_value": "lucia@example.com",
          "one_step_change": "true",
          "approval_type": "CLIENT",
          "logs": {
            "added_by": {
              "till": {
                "code": "1371622280_919866643044",
                "name": "1371622280_Ashish"
              },
              "store": {
                
              },
              "time": "2016-09-16T15:52:07+05:30"
            },
            "updated_by": {
              "user": {
                "name": "Ashish Karan",
                "mobile": "919866643044",
                "email": "cap@coin.com"
              },
              "ip": "115.114.139.186",
              "time": "2016-09-16T15:52:07+05:30"
            }
          }
        }
      ],
      "item_status": {
        "success": "true",
        "code": "9000",
        "message": "Request retrieved successfully"
      }
    }
  }
}
```
Retrieves the request logs of a specific duration. You can retrieve the either the logs of `CHANGE_IDENTIFIER`or `GOODWILL`. 

### Resource Information
| | |
--------- | ----------- |
URI | `request/logs`
Authentication | Yes
HTTP Methods | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/request/logs?{query_params}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
type* | enum | Get logs of a specific request type. Values: `CHANGE_IDENTIFIER`, `GOODWILL`, `TRANSACTION_UPDATE`.
start_date* | date | Get the logs of a specific duration. Set duration in start_date and end_date (YYYY-MM-DD).
end_date* | date | Get the logs of a specific duration set in start_date and end_date (YYYY-MM-DD).
base_type* | enum | Sub-type of the request. Value: `MOBILE`, `EXTERNAL_ID`, `EMAIL`, `MERGE`, `COUPONS`, `POINTS`.
status | enum | Filter the log by request status. Values: `PENDING`, `APPROVED`, `REJECTED`.
updated_by | string | Gets the requests updated by a specific associate. Provide associate code. 
added_by | string | Gets the requests created by a specific associate.Pass associate code.
request_id | long | Returns the details of a specific request id.
is_one_step_change | boolean | Pass `true` to get requests that were updated directly (in a single call).
approval_type | enum | Returns the logs of a specific approval type. Value: `CLIENT`, `CONFIG`, `CONFIG_DISABLED`, `CLIENT_DISABLED`.
identifierName | enum | Returns the requests of a customer based on the identifierName and value passed. Values: `email`, `mobile`, `external_id`, `customer_id`. For example, `mobile=9199998790`.
user_id | boolean | Pass `user_id=true` to gets user ids of retrieved customers.
start_id & end_id | Returns the logs of a specific range of request ids. For example, logs 
limit | Limits the number of results per page. For example, `limit=10` shows 10 results per page on UI

<aside class="notice">Parameters marked with * are mandatory. </aside>

