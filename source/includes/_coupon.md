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
## Issue Coupon
```html
http://us.intouch.capillarytech.com/v1.1/coupon/issue?format=json
```
> Sample POST Request

```json
{
  "root": {
    "coupon": {
      "series_id": "832",
      "customer": { "mobile": "447700900000" }
    }
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
Entry | Description
----- | -----------
URI | coupon/issue
Rate Limited? | Yes
Authentication  | Yes
Response Formats  | XML, JSON
HTTP Method  | POST
API Version  | v1.1
Batch Support  | Yes

### Request URL
`http://<cluster url>/v1.1/coupon/issue?format=<xml/json>`

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
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "coupons": {
      "coupon": {
        "id": "13596576",
        "code": "4R5A33",
        "item_status": {
          "success": "true",
          "code": "700",
          "message": "Coupon Resent"
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
Entry | Description
----- | -----------
URI | coupon/resend
Rate Limited? | Yes
Authentication  | Yes
Response Formats  | XML, JSON
HTTP Method  | GET
API Version  | v1.1
Batch Support  | No

### Request URL
`http://<cluster url>/value>&format=v1.1/coupon/resend?<identifier>=<xml/json>&<input_params>`

### Request Parameters
Any one among the folloing parameters is mandatory.

Parameter | Description
--------- | -----------
Customer identifier* | Any identifier of the customer to whom the coupon needs to be reissued
code | Coupon code that you want to issue to the customer

<aside class="warning"> You can pass either coupon id or code. Any one parameter is required</aside>

## Redeem Coupons

```html
# Sample Request
http://api.capillary.co.in/v1.1/coupon/redeem?format=json
```

> Sample POST Request

```json
{
  "root": {
    "coupon": {
      "code": "06000041",
      "validation_code": "XYZ123",
      "customer": { "mobile": "447700900000" },
      "custom_fields": {
        "field": {
          "name": "Sport",
          "value": "[“Soccer”]"
        }
      },
      "transaction": {
        "number": "bill-110",
        "amount": "1000"
      }
    }
  }
}
```

```xml
<root>
<coupon>
<code>06000041</code>
<!-- validation_code needed only if the brand is using validation code based redemption, can be left out -->
<validation_code>XYZ123</validation_code>
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
  "response": {
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
          "user_id": "55434"
        },
        "transaction": {
          "number": "bill-110",
          "amount": "1000"
        },
        "series_code": "227f0",
        "is_absolute": "true",
        "coupon_value": "0",
        "item_status": {
          "success": "true",
          "#text": "        
t",
          "code": "200",
          "message": "SUCCESS"
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


This API allows you to redeem coupons issued to your loyalty customers.

### Resource Information
Entry | Description
----- | -----------
URI | coupon/resend
Rate Limited? | Yes
Authentication  | Yes
Response Formats  | XML, JSON
HTTP Method  | POST
API Version  | v1.1
Batch Support  | No

### Request URL
`http://api.capillary.co.in/v1.1/coupon/redeem?format=xml`

### Request Parameters
Parameter | Description
--------- | -----------
Customer identifier* | Unique identifier of the customer whose coupon needs to be redeemed
id | Coupon id that needs to be redeemed
code | Coupon code that need to be redeemed
validation_code | Valodation code is required for the orgs that require validation based redemption
number | Transaction number against which the coupon needs to be redeemed
amount | Transaction amount against which the coupon is redeemed

<aside class="warning"> You need to pass either code or id as applicable </aside>

## Get Coupon Details
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
This API allows you to retrieve details of a specific coupon such as to coupon issued to, current coupon status and the coupon redeemed date/coupon validity.

### Resource Information
Entry | Description
----- | -----------
URI | coupon/get
Rate Limited? | Yes
Authentication  | Yes
Response Formats  | XML, JSON
HTTP Method  | GET
API Version  | v1.1
Batch Support  | Yes

### Request URL
`http://<cluster url>/v1.1/coupon/get?<id/code>=<value>&format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
id | Pass the coupon id that you want to retrieve. To retrieve details of multiple coupons, pass each id separating with , (comma)
code | Pass the coupon id that you want to retrieve. To retrieve details of multiple coupons, pass each code separating with , (comma)

## Check if Coupon is Reedemable
```html
# Sample Request
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
          "message": "
Cannot redeem same voucher multiple times
"
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

Entry | Description
----- | -----------
URI | coupon/isredeemable
Rate Limited? | Yes
Authentication  | Yes
Response Formats  | XML, JSON
HTTP Method  | GET
API Version  | v1.1
Batch Support  | No

### Request URL
`http://<cluster url>/v1.1/coupon/isredeemable?format=<xml/json>&mobile=<value>&code=<coupon_code>&details=true`

### Request Parameters
Parameter | Description
--------- | -----------
Customer identifier* | Pass the identifier of the customer for whom you want to check whether the coupon is redeemable
code | Pass the coupon code that you want to check
details=true | Retrieves the details of the coupon series
details=extended | Retrieves the details of coupon configurations (set on campaign) of that specific coupon series

<aside class="warning"> You can pass either coupon id or code. Any one parameter is required</aside>

## Retrieve Coupon Series Details
```html
http://us.intouch.capillarytech.com/v1.1/coupon/series?format=json&id=2302
```

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "series": {
      "items": {
        "item": {
          "id": "2302",
          "description": "Sample description",
          "series_type": "CAMPAIGN",
          "campaign_name": "Holiday season",
          "client_handling_type": "
DISC_CODE
",
          "discount_code": "XYZ123",
          "valid_till_date": "2012-11-01",
          "valid_days_from_create": "
30
",
          "max_create": "-1",
          "max_redeem": "-1",
          "transferable": "0",
          "any_user": "1",
          "same_user_multiple_redeem": "
0
",
          "allow_referral_existing_users": "
0
",
          "multiple_use": "1",
          "is_validation_required": "0",
          "created_by": "12769022",
          "created": "2016-10-01 00:00:00",
          "last_used": "0000-00-00 00:00:00",
          "series_code": "auto generated",
          "sms_template": "
Hello {{cust_name}}, your voucher code is {{voucher_code}}
",
          "disable_sms": "0",
          "info": "nothing new",
          "allow_multiple_vouchers_per_user": "
0
",
          "do_not_resend_existing_voucher": "
0
",
          "mutual_exclusive_series_ids": "
null
",
          "store_ids_json": "[“-1”]",
          "dvs_enabled": "0",
          "dvs_expiry_date": "2016-11-01",
          "priority": "0",
          "short_sms_template": "
Hello {{cust_name}}, your voucher code is {{voucher_code}}
",
          "max_vouchers_per_user": "
-1
",
          "min_days_between_vouchers": "
-1
",
          "max_referrals_per_referee": "
-1
",
          "discount_type": "ABS",
          "discount_value": "0",
          "redemption_range": "
{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}
",
          "min_bill_amount": "0",
          "max_bill_amount": "0",
          "redeem_at_store": "[-1]",
          "coupons": {
            "issued": "1",
            "redeemed": "5"
          },
          "item_status": {
            "success": "true",
            "code": "700",
            "message": "Coupon Series Found"
          }
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
<series>
<items>
<item>
<id>2302</id>
<description>Sample description</description>
<series_type>CAMPAIGN</series_type>
<campaign_name>Holiday season</campaign_name>
<client_handling_type>
DISC_CODE
</client_handling_type>
<discount_code>XYZ123</discount_code>
<valid_till_date>2016-11-01</valid_till_date>
<valid_days_from_create>
30
</valid_days_from_create>
<max_create>-1</max_create>
<max_redeem>-1</max_redeem>
<transferrable>0</transferrable>
<any_user>1</any_user>
<same_user_multiple_redeem>
0
</same_user_multiple_redeem>
<allow_referral_existing_users>
0
</allow_referral_existing_users>
<multiple_use>1</multiple_use>
<is_validation_required>0</is_validation_required>
<created_by>12769022</created_by>
<created>2016-10-01 00:00:00</created>
<last_used>0000-00-00 00:00:00</last_used>
<series_code>auto generated</series_code>
<sms_template>
Hello {{cust_name}}, your voucher code is {{voucher_code}}
</sms_template>
<disable_sms>0</disable_sms>
<info>nothing new</info>
<allow_multiple_vouchers_per_user>
0
</allow_multiple_vouchers_per_user>
<do_not_resend_existing_voucher>
0
</do_not_resend_existing_voucher>
<mutual_exclusive_series_ids>
null
</mutual_exclusive_series_ids>
<store_ids_json>[“-1”]</store_ids_json>
<dvs_enabled>0</dvs_enabled>
<dvs_expiry_date>2016-11-01</dvs_expiry_date>
<priority>0</priority>
<short_sms_template> Hello {{cust_name}}, your voucher code is {{voucher_code}} </short_sms_template>
<max_vouchers_per_user>
-1
</max_vouchers_per_user>
<min_days_between_vouchers>
-1
</min_days_between_vouchers>
<max_referrals_per_referee>
-1
</max_referrals_per_referee>
<discount_on></discount_on>
<discount_type>ABS</discount_type>
<discount_value>0</discount_value>
<dvs_items></dvs_items>
<redemption_range>
{"dom":["-1"],"dow":["-1"],"hours":["-1"]}
</redemption_range>
<min_bill_amount>0</min_bill_amount>
<max_bill_amount>0</max_bill_amount>
<redeem_at_store>[-1]</redeem_at_store>
<coupons>
<issued>1</issued>
<redeemed>5</redeemed>
</coupons>
<item_status>
<success>true</success>
<code>700</code>
<message>Coupon Series Found</message>
</item_status>
</item>
</items>
</series>
</response>
```

This API retrieves the details of a specific series of a campaign based on the series id passed. If no series id is passed, all coupon series details are retrieved.

### Resource Information

Entry | Description
----- | -----------
URI | coupon/series
Rate Limited? | Yes
Authentication  | Yes
Response Formats  | XML, JSON
HTTP Method  | GET
API Version  | v1.1
Batch Support  | Yes

### Request URL
`http://<cluster url>/v1.1/coupon/series?format=<xml/json>&id=<series id>&expired=<true/false/extended>`

### Request Parameters
Parameter | Description
--------- | -----------
id | Id of the specific coupon series that you want to retrieve
expired | Value: `true`, `false`, `extended`. Retrieves the details of the expired coupon series if `expired=true` and active coupon series details if `expired=false`. If `expired=extended` then the coupon configuration details are also shown. 

## Request URL
`http://<cluster url>/v1.1/coupon/series?format=<xml/json>&expired=<true/false>`




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
