# Points
Points represent loyalty points of an organization that are issued to the loyalty customers through different sources such as Loyalty Manager, Data Import (import profiles) and Member Care (GoodWill points). Customers can redeem their points against transactions. 

<aside class="warning"> 
Points cannot be issued through APIs. It can be issued only through modules such as Loyalty Manager, Data Import and Member Care. 
</aside>

The APIs of points entity are interdependent. For example, to redeem points, first you need to check whether a customer can redeem those points (`isredeemable`), validate customer's registered mobile number by issuing validation code, and then redeem points using the validation code received by the customer.

The points entity allows you to perform the following tasks:

* Check whether a specific number of points can be redeemed by a customer  
* Issue validation code to the registered mobile number/email id to validate customer 
* Redeem points using the validation code received by the customer

## Check If Points are Redeemable

> Sample Request

```html
http://us.intouch.capillarytech.com/v1.1/points/isredeemable?program_id=504&points=100&issue_otp=true&mobile=44700900999&format=json
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
    "responses": {
      "points": {
        "mobile": "44700900999",
        "points_redeemed": "100",
        "redeemed_value": "100",
        "balance": "257",
        "item_status": {
          "success": "true",
          "code": "800",
          "message": "Points Redeemed"
        },
        "response": {
          "status": {
            "success": "true",
            "code": "200",
            "message": "SUCCESS"
          },
          "points": {
            "redeemable": {
              "mobile": "44700900999",
              "points": "100",
              "is_redeemable": "true",
			  "points_redeem_value": 536,
			  "points_redeem_local_value": 5239.79,
              "points_currency_ratio": "1",
              "item_status": {
                "success": "true",
                "code": "800",
                "message": "Points can be redeemed"
              }
            }
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
<responses>    
<points>      
<mobile>44700900999</mobile>
<email></email>
<external_id></external_id>
<points_redeemed>100</points_redeemed>      
<redeemed_value>100</redeemed_value>
<balance>257</balance>
<item_status>        
<success>true</success>        
<code>800</code>        
<message>Points Redeemed</message>      
</item_status>    <response>  
<status>    
<success>true</success>    
<code>200</code>    
<message>SUCCESS</message>  
</status>  
<points>    
<redeemable>      
<mobile>44700900999</mobile>      
<points>100</points>
<is_redeemable>true</is_redeemable> 
<points_currency_ratio>0</points_currency_ratio>
<item_status>        
<success>true</success>        
<code>800</code>        
<message>Points can be redeemed</message>      
</item_status>    
</redeemable>  
</points>
</response>
</points>  
</responses>
</response>
```

Customers can redeem their active points according to the redemption criteria set for the organization (Loyalty Program). For example, I could set redemption criteria as allow redemption only in multiples of 10 and a maximum of 200 points per time.

This API lets you verify whether a specific number of points can be redeemed by a customer. With this API, you can now issue validation code to the customer  automatically upon successful validation. This will reduce an additional step of calling points/validationcode API to issue validation code.

<aside class="notice">
* If there is any problem in issuing validation code, Points Redeemable but OTP Generation failed error will be displayed (876)

* if points validation itself fails, then the relevant error message will be displayed
</aside>

 
### Resource Information
| | |
--------- | ----------- |
URI | `points/isredeemable?{query_params}`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL
To validate points and issue code if the validation is successful
`https://{host}/v1.1/points/isredeemable?points={points to redeem}&issue_otp=true&{identifier_name}={identifier_value}&format={xml/json}`

To just validate points
`https://{host}/v1.1/points/isredeemable?points={points to redeem}&validation_code={OTP}&{mobile/email}={value}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
mobile/email/external_id/card_number/card_external_id* | enum | Pass any of the registered identifier type.
program_id | long | Unique ID of the loyalty program from which points need to redeem.
group_redemption  | boolean | Pass `true` for group redemption - points earned in one program need to redeem in a different program of the org.
points* | int | Number of points to redeem.
issue_otp | boolean | Pass `true` to issue OTP if the validation is successful.
validation_code | string | OTP issued to the customer's mobile number.
skip_validation | boolean | Pass `true` if you want to skip validation.
validation_type | enum | Preferred mode of validation. Value: `MISSED_CALL`, `SMS`, `INVALID`. Use invalid if you want to `skip_validation`.
user_group2_primary_user_id** | long | Unique user ID of the primary member of the group associated with the points to redeem.
user_group2_id** | int | Unique ID of the group associated with the points to redeem.
user_group2_external_id** | string | Unique external ID of the group associated with the points to redeem.
use_default_user_group2** | boolean | Pass `true` to associate the default group with the points to redeem.
use_default_user_group2** | boolean | Pass `true` to associate the default group with the points to redeem.
currency_input | boolean | 



<aside class="notice">Parameters marked with * are mandatory. Any one among the parameters marked with ** is required for group level points redemption.</aside>


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
points_redeemed | int | Number of points to redeem.
redeemed_value | double | Value of the points to redeem.
balance | int | Remaining points in the customer's account after redemption.
points | int | Number of points to redeem.
is_redeemable | boolean | Whether the points can be redeemed. 
points_redeem_value | int | Value of points in base currency.
points_redeem_local_value | double | Value of points in local currency.
points_currency_ratio | double | 

## Issue Validation Code (to Redeeming Points)

> Sample Request

```html
http://us.intouch.capillarytech.com/v1.1/points/validationcode?mobile=447700900000&points=50&format=json
```

> Sample Response

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "Operation Successful"
    },
    "validation_code": {
      "code": {
        "user_id": "55456",
        "mobile": "44700900999",
        "points": "50",
        "item_status": {
          "success": "true",
          "code": "200",
          "message": "Validation Code Issued by SMS/Email"
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
<message>Operation Successful</message>  
</status>  
<validation_code>    
<code>      
<user_id>55456</user_id>
<mobile>44700900999</mobile>      
<points>50</points>   
<item_status>        
<success>true</success>        
<code>200</code>        
<message>
Validation Code Issued by SMS/Email
</message>      
</item_status>    
</code>  
</validation_code>
</response>
```

Before making `points/redeem` API call, you need to validate the customer by issuing validation code to the registered mobile number/email id. 

This API allows you to issue a dynamic validation code to the customer's registered mobile number/email id which is required to pass while redeeming points. The validation code is valid only for a specific time period post which it expires automatically. If you try to issue validation code within the validity period, same code will be issued again.

The validity period and communicate via is set on the **OTPConfigurations** page of InTouch > **Settings** > **Organization Setup**

* **OTP code validity period**: The validity of the validation code in minutes
* **Communicate OTP Via**: Mode of sending the validation code, email/sms/both

<aside class="notice"> 
The validation code is issued either to mobile number, or email id or both, based on the configuration set on the page InTouch > Settings > Organization Setup > OTPConfigurations
</aside>

### Resource Information
| | |
--------- | ----------- |
URI | `points/validationcode/{request_params}`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL
`https://{host}/v1.1/points/validationcode?{identifier}={value}&points={points_to_be_redeemed}&format={xml/json}`

### Request Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
identifier* | enum | Pass any of the identifier types of the customer to issue validation code. Value: `mobile`, `email`, `external_id`, `user_id`.
value* | string | Pass the respective identifier value. For example, `email=tom.sawyer@example.com`
points* | int | Number of points to redeem.

<aside class="notice">Parameters marked with * are mandatory.</aside>

### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
user_id | long | Unique ID of the customer.
mobile | string | Mobile number of the customer.
points | int | Number of points to redeem.



## Redeem Points

> Sample Request

```html
http://us.intouch.capillarytech.com/v1.1/points/redeem?validation_type=SMS&program_id=504&format=json
```

> Sample POST Request

```json
{
	"root": {
		"redeem": [{
			"points_redeemed": 10,
			"customer": {
				"mobile": "44700900999",
				"external_id": "",
				"email": "",
				"card_number": ""
			},
			"redemption_time": "2020-03-13 18:02:34",
			"transaction_number": "red123",
			"external_reference_number": "toms12d",
			"till_id": "",
			"notes": "10 points redemption by SMS.",
			"validation_code": "4PZGXC",
			"group_redemption": "false"
		}]
	}
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <root>
      <redeem>
         <element>
            <customer>
               <email />
               <external_id />
               <mobile>44700900999</mobile>
			   <card_number></card_number>
            </customer>
            <notes>10 points redemption by SMS.</notes>
            <points_redeemed>10</points_redeemed>
            <redemption_time>2020-03-13 18:02:34</redemption_time>
            <till_id />
            <transaction_number>red123</transaction_number>
			<external_reference_number>toms12d</external_reference_number>
            <validation_code>4PZGXC</validation_code>
			<group_redemption>false</group_redemption>
         </element>
      </redeem>
   </root>
</root>
```

> Sample Response

```json
{
	"response": {
		"status": {
			"success": "true",
			"code": 200,
			"message": "Success"
		},
		"responses": {
			"points": {
				"mobile": "919700000000",
				"email": "tom.sawyer@example.com",
				"external_id": "",
				"user_id": "98662653",
				"redemption_id": "r0njPT",
				"points_redeemed": "10",
				"redeemed_value": 10,
				"redeemed_local_value": 10,
				"balance": 2906,
				"side_effects": {
					"effect": [
						{
							"id": 1425658,
							"case_value": "true",
							"num_points": 10,
							"currency_value": 10,
							"validation_code": "4PZGXC",
							"points_redemption_summary_id": "1425658",
							"redeemed_on_bill_number": "red123",
							"redeemed_on_bill_id": -1,
							"type": "points"
						}
					]
				},
				"item_status": {
					"success": "true",
					"code": 800,
					"message": "Points Redeemed"
				}
			}
		}
	}
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <response>
      <responses>
         <points>
            <balance>2906</balance>
            <email>tom.sawyer@example.com</email>
            <external_id />
            <item_status>
               <code>800</code>
               <message>Points Redeemed</message>
               <success>true</success>
            </item_status>
            <mobile>919700000000</mobile>
            <points_redeemed>10</points_redeemed>
            <redeemed_local_value>10</redeemed_local_value>
            <redeemed_value>10</redeemed_value>
            <redemption_id>r0njPT</redemption_id>
            <side_effects>
               <effect>
                  <element>
                     <case_value>true</case_value>
                     <currency_value>10</currency_value>
                     <id>1425658</id>
                     <num_points>10</num_points>
                     <points_redemption_summary_id>1425658</points_redemption_summary_id>
                     <redeemed_on_bill_id>-1</redeemed_on_bill_id>
                     <redeemed_on_bill_number>red123</redeemed_on_bill_number>
                     <type>points</type>
                     <validation_code>4PZGXC</validation_code>
                  </element>
               </effect>
            </side_effects>
            <user_id>98662653</user_id>
         </points>
      </responses>
      <status>
         <code>200</code>
         <message>Success</message>
         <success>true</success>
      </status>
   </response>
</root>
```

You can redeem points of a customer using the issued validation code. Ensure that you have validated the points to be redeemed and issued validation code to the customer's mobile number before redeeming. You need to have the validation code to process points redemption.

<aside class="warning"> 
You need to use the validation code within the validity period. You can check the validity set for the validation code in **OTP code validity period** field on InTouch > **Settings** > **Organization Setup** > **OTPConfigurations** page
</aside>

### Resource Information
| | |
--------- | ----------- |
URI | `points/redeem`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`https://{host}/v1.1/points/redeem?{query_param}={param_value}&format={xml/json}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
user_group2_primary_user_id** | long | Unique user ID of the primary member of the group associated with the points to redeem.
user_group2_id** | int | Unique ID of the group associated with the points to redeem.
user_group2_external_id** | string | Unique external ID of the group associated with the points to redeem.


<aside class="notice">Any one among the parameters marked with ** is required for group level points redemption. </aside>

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
mobile* | string | Provide the registered mobile number of the customer to redeem points.
points_redeemed* | int | Provide the number of points to be redeemed.
transaction_number | string | Provide the transaction number for which the points has to be redeemed.
external_reference_number | string | Unique external reference number for redemption (say, passed by the integrator). You also need to tag the number to the transaction 
validation_code* | string | Provide the validation code received by the customer through `points/validationcode`.
redemption_time | date-time | Provide the redemption date and time in YYYY-MM-DD HH-MM-SS format.
program_id | long | Program id associated to the points that you want to redeem. Required only for orgs with MLP enabled.
till_id | string | Till ID from which points are redeemed.
group_redemption | boolean | Pass `true` for cross program redemption, that is, redeem loyalty points earned in a loyalty program in a different loyalty program of the org. Default value is `false`. 

<aside class="notice">Parameters marked with * are mandatory.</aside>


### Response Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
redemption_id | long | Unique reference ID generated for the redemption. This is also required to reverse redeemed points in case of transaction return.
points_redeemed | int | Number of points redeemed.
redeemed_value | double | Value of the points redeemed.
balance | int | Remaining points in the customer's account after redemption.
side_effects | obj | Other effects due to points redemption. You will see details such bill number/ID on which points are redeemed. 




## Response Codes
### Success Codes
| Code  |  Description                 | 
|-------|------------------------------| 
| 800   | Points redeemed successfully | 


### Error Codes
Code | Description
---- | -----------
686 | User is from campaign and has not enrolled in the loyalty program. Points redemption is not applicable for the user.
804 | Insufficient current points.
805 | Insufficient lifetime points.
806 | Insufficient lifetime purchases amount.
807 | Redemptions points not divisible.
809 | Customer is marked as fraud.
818 | Current points are less than points requested for redemption.
819 | Points to redeem exceeds the threshold limit (maximum points that can be redeemed in a transaction).
821 | Points you are trying to redeem are less than the minimum points allowed.
886 | Unable to process points. Please try again later.
887 | Unable to process points. Please try again later.
888 | Invalid configuration. Please report to capillary support.
801 | Points you are trying to redeem are invalid
802 | Mobile number/email id/external id you have entered is invalid
803 | Unable to redeem. The points you are trying to redeem is more than the available points
804 | Insufficient current points.
805 | Insufficient lifetime points.
806 | Insufficient lifetime purchases amount.
807 | Unable to redeem. Make sure that the points you are trying to redeem is a multiple of <X>. Check the points redemption configuration of your organization.
808 | Unable to redeem. Validation code is invalid
809 | Unable to process. Customer is marked as fraud
810 | Mismatch in points for revert API call
811 | The transaction number entered to redeem/revert points is invalid
812 | The points have been reverted already for this transaction number
813 | Insufficient current points available for redemption
814 | No points were redeemed on this transaction number
815 | Unable to process points at this moment. Please try again later
816 | Unable to find customer in this organization
817 | Points redemption failed. 
818 | Points you are trying to redeem are more than the available points
819 | Points you are trying to redeem are more than the maximum allowed redemption limit.<br> Unable to send message to customer
820 | Unable to process. Customer is marked as fraud
821 | Points you are trying to redeem are less than the minimum redemption limit
822 | Unable to find missed call from the registered mobile number
823 | Missed call redemption is disabled for your organization
824 | Mobile number validation is mandatory for redeeming points
825 | Client signature is required
826 | Invalid points category or invalid configuration
827 | Unable to redeem points. Points redemption is enabled for your organization
859 | The redemption time you have passed is invalid
860 | Unable to issue OTP
881 | Customer is not registered into the loyalty program
888 | Configuration is invalid. Please report to Capillary Support
889 | Points processing failed. Please try again later. 
894 | Unable to process points at this moment. Please try again later
895 | Loyalty program is not configured for your organization
898 | Unable to process points at this moment. Please try again later
899 | Configuration is invalid. Please report to Capillary Support
901 | Invalid points or points redemption Id passed.
902	| Redemption ID does not exist.
903 | Unable to redeem points.
904 | Invalid customer details passed.
3045 | Points Redemption is not allowed for the customer with id {x} as the status is fraud.
