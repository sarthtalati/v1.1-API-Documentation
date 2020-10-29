# Coupon
Coupon represents store promotions or discounts created through Capillary Campaign Manager. A single campaign could contain one or more coupons or coupon series. Coupons are issued to loyalty or non-loyalty customers through SMS or email.

You cannot create new coupons using coupon APIs. You can just send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id for making API calls.

You cannot create new coupons using coupon APIs; instead, you can send or retrieve coupons that are already created in your campaigns. Hence, it is important to note the coupon code, coupon id or coupon series id to use coupon APIs.

The coupon entity allows you to perform the following tasks:

* Issue coupons to customers 
* Resend a specific coupon to the respective customer 
* Retrieve details of a specific coupon/coupon series 
* Check whether a customer can redeem a specific coupon and redeem the coupon

## Issue Coupon
```html
http://us.intouch.capillarytech.com/v1.1/coupon/issue?format=json
```
> Sample POST Request

```json
{
  "root": {
    "coupon": [{
      "series_id": "832",
      "customer": { "mobile": "447700900000" }
    }]
  }
}
```

```xml
<root>
    <coupon>
        <series_id>832</series_id>
        <customer>
            <mobile>447700900000</mobile>
            <email></email>
            <external_id></external_id>
        </customer>
    </coupon>
</root>

```

> Sample Response

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "coupon": {
      "code": "xqnq5m5u",
      "valid_till": "2016-12-25",
      "series_info": {
        "id": "832",
        "description": "Sample description",
        "discount_code": "XYZ123",
        "valid_till": "2012-12-31",
        "discount_type": "ABS",
        "discount_value": "0",
        "detailed_info": "Sample information"
      },
      "customer": {
        "mobile": "447700900000",
        "user_id": "4453654"
      },
      "item_status": {
        "success": "true",
        "code": "700",
        "message": "Coupon processing successful"
      }
    }
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>SUCCESS</message>
    </status>
    <coupon>
        <code>xqnq5m5u</code>
<valid_till>2016-12-25</valid_till> 
<!-- this is due date of the coupon -->
<series_info>
<id>832</id>        
<description>Sample description</description>        
<discount_code>XYZ123</discount_code>        
<valid_till>2012-12-31</valid_till>        
<discount_type>ABS</discount_type>        
<discount_value>0</discount_value>        
<discount_on></discount_on>        
<!-- “discount_on” can be on BILL or LINEITEM -->
<detailed_info>Sample information</detailed_info>      
</series_info>    
        <customer>
            <mobile>447700900000</mobile>
            <email></email>
            <external_id></external_id>
            <user_id>4453654</user_id>
            <!-- user_id will be returned
only if the query parameter “user_id” is passed 
and that is set to “true” -->
        </customer>
        <item_status>
            <success>true</success>
            <code>700</code>
            <message>Coupon processing successful</message>
        </item_status>
    </coupon>
</response>
```

This API allows you to issue a specific coupon series to a customer.

### Resource Information
| | |
--------- | ----------- |
URI | `coupon/issue`
Rate Limited? | Yes
Authentication  | Yes
HTTP Method  | POST
Batch Support  | Yes

### Request URL
`http://{host}/v1.1/coupon/issue?format={xml/json}`

### Request Parameters
Code | Description
---- | -----------
Customer identifier* | Any identifier of the customer to whom you want to issue coupon
id | Coupon series id that you want to issue

## Reissue Coupon

```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/coupon/resend?format=xml&id=13596576
```
> Sample Response

```json
{
   "response":{
      "status":{
         "success":"true",
         "code":"200",
         "message":"SUCCESS"
      },
      "coupons":{
         "coupon":[
            {
               "id":"13596576",
               "code":"4R5A33",
               "item_status":{
                  "success":"true",
                  "code":"700",
                  "message":"Coupon Resent"
               }
            }
         ]
      }
   }
}
```

```xml
<response>  
<status>    
<success>true</success>    
<code>200</code>    
<message>SUCCESS</message>  
</status>  
<coupons>    
<coupon>      
<id>13596576</id>
<code>4R5A33</code>
<!-- id and code will be returned depending
on the request param -->   
<item_status>        
<success>true</success>        
<code>700</code>        
<message>Coupon Resent</message>      
</item_status>    
</coupon>  
</coupons>
</response>

```

This API allows you to reissue active coupons of a loyalty customer. You can reissue only the coupon code and the coupon validity.

### Resource Information
| | |
--------- | ----------- |
URI | `coupon/resend`
Rate Limited? | Yes
Authentication  | Yes
HTTP Method  | GET
Batch Support  | No

### Request URL
`http://{host}/v1.1/coupon/resend?{identifier}&{input_params}&format={xml/json}`

### Request Parameters
Any one among the following parameters is mandatory.

Parameter | Description
--------- | -----------
Customer identifier* | Any identifier of the customer to whom the coupon needs to be reissued
code | Coupon code that you want to issue to the customer

<aside class="warning"> You can pass either coupon id or code. Any one parameter is required</aside>

## Redeem Coupon

```html
# Sample Request
http://api.capillary.co.in/v1.1/coupon/redeem?format=json
```

> Sample POST Request

```json
{
  "root": {
    "coupon": [{
      "code": "06000041",
      "customer": { "mobile": "447700900000" },
      "custom_fields": [{
        "field": {
          "name": "Sport",
          "value": "[“Soccer”]"
        }
      }],
      "transaction": [{
        "number": "bill-110",
        "amount": "1000"
      }]
    }]
  }
}
```

```xml
<root>
<coupon>
<code>06000041</code>
<customer>
<mobile>447700900000</mobile>
<email></email>
<external_id></external_id>
</customer>
<custom_fields>
<!-- Optional, as Specified by the Brand -->
<field>
    <name>Sport</name>
    <value>[“Soccer”]</value>
</field>
</custom_fields>
<redemption_time></redemption_time>
<transaction>
<number>bill-110</number>
<amount>1000</amount>
</transaction>
</coupon>
</root>
```
> Sample Response

```json
{
   "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
   },
   "coupons": {
      "coupon": {
         "code": "06000041",
         "customer": {
            "mobile": "447700900000",
            "email": [],
            "external_id": [],
            "user_id": "55434"
         },
         "transaction": {
            "number": "bill-110",
            "amount": "1000"
         },
         "discount_code": [],
         "series_code": "227f0",
         "is_absolute": "true",
         "coupon_value": "0",
         "item_status": {
            "success": "true",
            "#text": "t",
            "code": "200",
            "message": "SUCCESS"
         }
      }
   }
}
```

```xml
<response>  
<status>    
<success>true</success>    
<code>200</code>    
<message>SUCCESS</message>  
</status>  
<coupons>    
<coupon>      
<code>06000041</code>      
<customer>        
<mobile>447700900000</mobile>      
<email></email>
<external_id></external_id>
<user_id>55434</user_id> 
<!-- Will be returned only if user_id is true -->
</customer>      
<transaction>        
<number>bill-110</number>
<amount>1000</amount>        
</transaction>      
<discount_code></discount_code>      
<series_code>227f0</series_code>      
<is_absolute>true</is_absolute>      
<coupon_value>0</coupon_value>      
<item_status>        
<success>true</success>        
t<code>200</code>        
<message>SUCCESS</message>      
</item_status>    
</coupon>  
</coupons>
</response>
```


This API allows you to redeem coupons issued to the loyalty customer.

### Resource Information
| | |
--------- | ----------- |
URI | `coupon/redeem`
Rate Limited? | Yes
Authentication  | Yes
HTTP Method  | POST
Batch Support  | No

### Request URL
`http://{host}/v1.1/coupon/redeem?{identifierName}={identifierValue}&format={xml/json}`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Unique identifier of the customer whose coupon needs to be redeemed.
id | long | Coupon id that needs to be redeemed.
code | string | Coupon code that need to be redeemed.
validation_code | string | Validation code is required for the orgs that use validation based redemption.
number | string | Transaction number against which the coupon needs to be redeemed.
amount | double | Transaction amount against which the coupon is redeemed.
custom_fields | obj | Coupon redemption level custom fields.
name | string | Name of the custom field.
value | string | Custom field value.

<aside class="warning"> You need to pass either `code` or `id` as applicable </aside>


## Get Coupon Details

> Sample Request

```html
http://api.capillary.co.in/v1.1/coupon/get?code=06000041&format=xml
```
> Sample Response

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "coupons": {
      "coupon": {
        "code": "06000041",
        "id": "13596576",
        "valid_till": "31-08-2016",
        "issued_on": "2016-08-01 15:31:44",
        "customer": {
          "user_id": "553232",
          "name": "Suresh Venkitakrishnan",
          "mobile": "919591525725",
          "email": "sv@mail.com"
        },
        "pincode": "224",
        "issued_store": {
          "code": "store.code",
          "name": "store name"
        },
        "series_id": "24325",
        "is_absolute": "true",
        "value": "0",
        "redemption_info": {
          "redeemed": "true",
          "redeemed_on": "2016-08-01 15:56:07",
          "redeemed_at": "till.fitnesse"
        },
        "redeemed_by": {
          "firstname": "TOM",
          "lastname": "Sawyer",
          "email": "tom@email.com",
          "mobile": "919999999999"
        },
        "store": {
          "code": "code.store",
          "name": "name.store"
        },
        "transaction": {
          "number": "BILL-20304",
          "id": "2242536"
        },
        "item_status": {
          "status": "true",
          "code": "700",
          "message": "Coupon processing successful"
        }
      }
    }
  }
}
```

```xml
<response>  
<status>    
<success>true</success>    
<code>200</code>    
<message>SUCCESS</message>  
</status>  
<coupons>    
<coupon>      
<code>06000041</code>      
<id>13596576</id>      
<valid_till>31-08-2016</valid_till>      
<issued_on>2016-08-01 15:31:44</issued_on>      
<customer>
    <user_id>553232</user_id>
<!-- user_id tag will be returned only if query param user_id = true -->
<name>Suresh Venkitakrishnan</name>        
<mobile>919591525725</mobile>        
<email>sv@mail.com</email>      
</customer>      
<pincode>224</pincode>
<issued_store>
    <code>store.code</code>
    <name>store name</name>
</issued_store>
<series_id>24325</series_id>
<is_absolute>true</is_absolute>      
<value>0</value>      
<redemption_info>        
<redeemed>true</redeemed>        
<redeemed_on>2016-08-01 15:56:07</redeemed_on>        
<redeemed_at>till.fitnesse</redeemed_at>      
</redemption_info>      
<redeemed_by>
    <firstname>TOM</firstname>
    <lastname>Sawyer</lastname>
    <email>tom@email.com</email>
    <mobile>919999999999</mobile>
</redeemed_by>
<store>
    <code>code.store</code>
    <name>name.store</name>
</store>
<transaction>
    <number>BILL-20304</number>
    <id>2242536</id>
</transaction>
<item_status>        
<status>true</status>        
<code>700</code>        
<message>Coupon processing successful</message>      
</item_status>    
</coupon>  
</coupons>
</response>
```
This API allows you to retrieve the details of a specific coupon. You can get information such as coupon issued to, current coupon status, coupon redeemed date, and coupon validity.

### Resource Information
| | |
--------- | ----------- |
URI | `coupon/get`
Rate Limited? | Yes
Authentication  | Yes
HTTP Method  | GET
Batch Support  | Yes

### Request URL
`http://{host}/v1.1/coupon/get?{query_params}={paramValue}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id** | long | Pass the coupon id that you want to retrieve. To retrieve details of multiple coupons, pass each id separating with `,` (comma)
code** | string | Pass the coupon id that you want to retrieve. To retrieve details of multiple coupons, pass each code separating with `,` (comma).

<aside class="notice">Any one among the parameters marked with ** is mandatory.</aside>

## Check if Coupon is Redeemable

> Sample Request

```html
http://us.intouch.capillarytech.com/v1.1/coupon/isredeemable?format=xml&details=true&code=06000041&mobile=447700900000
```
> Sample Response

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "coupons": {
      "redeemable": {
        "mobile": "447700900000",
        "code": "06000041",
        "is_redeemable": "false",
        "item_status": {
          "status": "true",
          "code": "706",
          "message": "Cannot redeem same voucher multiple times"
        },
        "series_info": {
          "description": "Sample description",
          "discount_code": "XYZ123",
          "valid_till": "2016-12-31",
          "discount_type": "ABS",
          "discount_value": "0",
          "detailed_info": "sample details"
        }
      }
    }
  }
}
```
```xml
<response>  
<status>    
<success>true</success>    
<code>200</code>    
<message>SUCCESS</message>  
</status>  
<coupons>    
<redeemable>      
<mobile>447700900000</mobile>      
<code>06000041</code>      
<is_redeemable>false</is_redeemable>      
<item_status>        
<status>true</status>        
<code>706</code>        
<message>
Cannot redeem same voucher multiple times
</message>      
</item_status>      
<series_info>    
    
<description>Sample description</description>        
<discount_code>XYZ123</discount_code>        
<valid_till>2016-12-31</valid_till>        
<discount_type>ABS</discount_type>        
<discount_value>0</discount_value>        
<discount_on></discount_on>        
<detailed_info>sample details</detailed_info>      
</series_info>    
</redeemable>  
</coupons>
</response>
```

This API allows you to verify whether a coupon is redeemable by a specific customer.

### Resource Information
| | |
--------- | ----------- |
URI | `coupon/isredeemable`
Rate Limited? | Yes
Authentication  | Yes
HTTP Method  | GET
Batch Support  | No

### Request URL
`http://{host}/v1.1/coupon/isredeemable?{identifierName}={identifierValue}&code={coupon_code}&{details=true}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifierName* | enum | Pass any of the registered identifier names of the customer. Values: `mobile`, `email`, `external_id`, `id`.
value* | string | Pass the respective identifier value of the customer whose coupon has to be verified for redemption. 
code* | string | Pass the coupon code that you want to check
details=true | - | Retrieves the details of the coupon series.
details=extended | - | Retrieves the details of coupon configurations (set on campaign) of that specific coupon series.

<aside class="warning"> You can pass either coupon id or code. Any one parameter is required</aside>



## Retrieve Coupon Series Details

> Sample Request

```html
http://us.intouch.capillarytech.com/v1.1/coupon/series?format=json&id=7033
```
> Sample Response

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "Success"
    },
    "series": {
      "items": {
        "item": {
          "id": "405",
          "description": "API Coupon 3",
          "series_type": "CAMPAIGN",
          "client_handling_type": "DISC_CODE",
          "discount_code": "XYZ123",
          "valid_till_date": "2017-12-31",
          "valid_days_from_create": "30",
          "expiry_strategy_type": "DAYS",
          "expiry_strategy_value": "30",
          "max_create": "-1",
          "max_redeem": "-1",
          "transferrable": "0",
          "any_user": "0",
          "same_user_multiple_redeem": "0",
          "allow_referral_existing_users": "0",
          "multiple_use": "0",
          "is_validation_required": "0",
          "valid_with_discounted_item": "false",
          "created_by": "4",
          "created": "2016-12-09 08:35:15",
          "last_used": "2016-12-09 08:35:15",
          "series_code": "G8Z08NZL",
          "disable_sms": "0",
          "info": "API Coupon 3",
          "allow_multiple_vouchers_per_user": "1",
          "do_not_resend_existing_voucher": "0",
          "mutual_exclusive_series_ids": "[-1]",
          "store_ids_json": "[-1]",
          "dvs_enabled": "0",
          "dvs_expiry_date": "2017-01-09",
          "priority": "0",
          "short_sms_template": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
          "max_vouchers_per_user": "-1",
          "min_days_between_vouchers": "-1",
          "max_referrals_per_referee": "-1",
          "discount_on": "BILL",
          "discount_type": "PERC",
          "discount_value": "10",
          "redemption_range": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
          "min_bill_amount": "0",
          "max_bill_amount": "0",
          "redeem_at_store": "[-1]",
          "campaign_id": "458",
          "max_redemptions_in_series_per_user": "-1",
          "min_days_between_redemption": "-1",
          "redemption_valid_from": "2014-04-30",
          "source_org_id": "-1",
          "issue_to_loyalty": "0",
          "redeem_store_type": "redeemable_stores",
          "old_flow_enabled": "0",
          "pre_redeem_event_required": "0",
          "coupons": {
            "issued": "4558",
            "redeemed": "924"
          },
          "offline_redemption_enabled": "true",
          "item_status": {
            "success": "true",
            "code": "700",
            "message": "Coupon series fetched successfully"
          },
          "products": "",
          "brands": "",
          "categories": ""
        }
      }
    }
  }
}
```

```xml


<?xml version="1.0" encoding="UTF-8"?>
<response>
   <status>
      <success>true</success>
      <code>200</code>
      <message>Success</message>
   </status>
   <series>
      <items>
         <item>
            <id>405</id>
            <description>API Coupon 3</description>
            <series_type>CAMPAIGN</series_type>
            <client_handling_type>DISC_CODE</client_handling_type>
            <discount_code>XYZ123</discount_code>
            <valid_till_date>2017-12-31</valid_till_date>
            <valid_days_from_create>30</valid_days_from_create>
            <expiry_strategy_type>DAYS</expiry_strategy_type>
            <expiry_strategy_value>30</expiry_strategy_value>
            <max_create>-1</max_create>
            <max_redeem>-1</max_redeem>
            <transferrable>0</transferrable>
            <any_user>0</any_user>
            <same_user_multiple_redeem>0</same_user_multiple_redeem>
            <allow_referral_existing_users>0</allow_referral_existing_users>
            <multiple_use>0</multiple_use>
            <is_validation_required>0</is_validation_required>
            <valid_with_discounted_item>false</valid_with_discounted_item>
            <created_by>4</created_by>
            <created>2016-12-09 08:35:15</created>
            <last_used>2016-12-09 08:35:15</last_used>
            <series_code>G8Z08NZL</series_code>
            <sms_template />
            <disable_sms>0</disable_sms>
            <info>API Coupon 3</info>
            <allow_multiple_vouchers_per_user>1</allow_multiple_vouchers_per_user>
            <do_not_resend_existing_voucher>0</do_not_resend_existing_voucher>
            <mutual_exclusive_series_ids>[-1]</mutual_exclusive_series_ids>
            <store_ids_json>[-1]</store_ids_json>
            <dvs_enabled>0</dvs_enabled>
            <dvs_expiry_date>2017-01-09</dvs_expiry_date>
            <priority>0</priority>
            <short_sms_template>Hello {{cust_name}}, your voucher code is {{voucher_code}}</short_sms_template>
            <max_vouchers_per_user>-1</max_vouchers_per_user>
            <min_days_between_vouchers>-1</min_days_between_vouchers>
            <max_referrals_per_referee>-1</max_referrals_per_referee>
            <discount_on>BILL</discount_on>
            <discount_type>PERC</discount_type>
            <discount_value>10</discount_value>
            <dvs_items />
            <redemption_range>{&amp;quot;dom&amp;quot;:[&amp;quot;-1&amp;quot;],&amp;quot;dow&amp;quot;:[&amp;quot;-1&amp;quot;],&amp;quot;hours&amp;quot;:[&amp;quot;-1&amp;quot;]}</redemption_range>
            <min_bill_amount>0</min_bill_amount>
            <max_bill_amount>0</max_bill_amount>
            <redeem_at_store>[-1]</redeem_at_store>
            <campaign_id>458</campaign_id>
            <tag />
            <max_redemptions_in_series_per_user>-1</max_redemptions_in_series_per_user>
            <min_days_between_redemption>-1</min_days_between_redemption>
            <redemption_valid_from>2014-04-30</redemption_valid_from>
            <source_org_id>-1</source_org_id>
            <issue_to_loyalty>0</issue_to_loyalty>
            <redeem_store_type>redeemable_stores</redeem_store_type>
            <old_flow_enabled>0</old_flow_enabled>
            <pre_redeem_event_required>0</pre_redeem_event_required>
            <coupons>
               <issued>4558</issued>
               <redeemed>924</redeemed>
            </coupons>
            <offline_redemption_enabled>true</offline_redemption_enabled>
            <campaign_name />
            <item_status>
               <success>true</success>
               <code>700</code>
               <message>Coupon series fetched successfully</message>
            </item_status>
            <products />
            <brands />
            <categories />
         </item>
      </items>
   </series>
</response>
```

This API retrieves the details of a specific series of a campaign based on the series id passed. If no series id is passed, all coupon series details are retrieved.

### Resource Information
| | |
--------- | ----------- |
URI | `coupon/series`
Rate Limited? | Yes
HTTP Method | GET
Authentication | Yes
Batch Support | Yes

### Request URL
`http://{host}/v1.1/coupon/series?format={xml/json}&id={series_id}&expired={true/false/extended}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id* | long | Unique ID of the specific coupon series that you want to retrieve.
expired | enum | Retrieves the details of the expired coupon series if `expired=true` and active coupon series details if `expired=false`. To also include coupon configuration details, pass `expired=extended`. 

<aside class="notice">Parameter marked with * is mandatory.</aside>


## Response Codes
### Success Codes
| Code |  Description                       | 
|------|------------------------------------| 
| 700  | Coupon processed successfully     | 
| 700  | Coupon series fetched successfully | 

### Error Codes
Code | Description                                                                                    
---- | -----------
701  | Unable to find the customer. Please enter correct mobile number/email id/external id           
702  | Coupon code is invalid                                                                          
703  | Coupon not issued to this customer                                                              
704  | Unable to send coupon to the customer’s mobile number                                           
705  | Invalid coupon code and validation code                                                         
706  | Unable to redeem coupon                                                                         
707  | Coupon series id is invalid                                                                     
709  | Unable to redeem coupon                                                                         
710  | Coupon cannot be redeemed by this customer                                                      
711  | Coupon is redeemed already                                                                     
712  | Unable to redeem. Either coupon series or campaign might have expired                           
713  | Coupon has expired                                                                              
714  | Unable to redeem. Maximum redemptions allowed for this campaign are already reached             
715  | Unable to redeem. The coupon is not valid for this organization                                
716  | Unable to redeem. Cannot redeem same coupon multiple times                                      
718  | Unable to redeem. Please enter transaction number must be entered to redeem                     
719  | Coupon code does not exist                                                                      
720  | Unable to redeem. This is just a trial coupon and cannot be redeemed                           
721  | Unable to issue/redeem coupon. Customer is invalid                                             
722  | Unable to issue coupon                                                                          
723  | Unable to redeem. The coupon cannot be used by this customer                              
724  | Unable to send message                                                    
725  | Unable to redeem coupon. Please provide validation code to redeem                             
726  | Validation not required                                                                         
728  | Unable to redeem. Maximum number of coupon redemptions allowed has already been reached         
729  | Invalid redemption date range for the coupon series                                             
730  | Unknown error                                                                                   
732  | No Missed call received from the customer                                                       
733  | Transaction amount invalid                                                                      
735  | Unable to redeem coupon. The coupon cannot be redeemed at this store                            
736  | Unable to redeem coupon. Maximum number of coupon redemptions allowed has already been reached  
738  | Cannot redeem the coupon. Please wait for <X> days to redeem this coupon again                  
739  | Unable to redeem. Make sure that the redemption date you have entered is valid                  
740  | Unable to process. Customer is marked as fraud                                                  
742  | Coupon issual or redemption is blocked for this customer                                        
750  | Unable to process. Customer is marked as fraud                                                  
786  | Unable to process coupon. Please try again later                                                
787  | Unable to process coupon. Please try again later                                                
788  | Configuration is invalid. Please report to Capillary Support                                   
789  | Unable to process coupon. Please try again later                                                
790  | Unable to process coupon. Please try again later                                                
791  | Unable to process coupon. Please try again later                                                
792  | Unable to process coupon. Please try again later                                                
793  | Unable to process coupon. Please try again later                                                
794  | Unable to process coupon. Please try again later                                                
795  | Configuration is invalid. Please report to Capillary Support                           
796  | Unable to process coupon. Please try again later                                                
797  | Unable to process coupon. Please try again later                                                
798  | Unable to process coupon. Please try again later                                                
799  | Configuration is invalid. Please report to Capillary Support                                 
