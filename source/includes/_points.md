# Points
Points represent loyalty points of an organization that are issued to the loyalty customers through different sources such as Loyalty Manager, Data Import (import profiles) and Member Care (GoodWill points). Customers can redeem their points against transactions. 

<aside class="warning"> 
Points cannot be issued through APIs. It can be issued only through modules such as Loyalty Manager, Data Import and Member Care. 
</aside>

The APIs of points entity are interdependent. For example, to redeem points, first you need to check whether a customer can redeem those points (isreedemable), validate customer's registered mobile number by issuing validation code, and then redeem points using the validation code received by the customer.

The points entity allows you to perform the following tasks:

* Check whether a specific number of points can be redeemed by a customer  
* Issue validation code to the registered mobile number/email id to validate customer 
* Redeem points using the validation code received by the customer

## Check If Points are Redeemable
```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/points/isredeemable?points=100&issue_otp=true&mobile=44700900999&format=json
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
              "points_currency_ratio": "0",
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
URI | `/isredeemable`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL
To validate points and issue code if the validation is successful
`https://{host}/v1.1/points/isredeemable?points={points to redeem}&issue_otp=true&{mobile/email}={mobile no./email id}&format={xml/json}`

To just validate points
`https://{host}/v1.1/points/isredeemable?points={points to redeem}&validation_code={OTP}&{mobile/email}={mobile no./email id}&format={xml/json}`

### Request Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifier* | enum | Pass any of the identifier type of the customer.
value | string | Pass the respective identifier value of the customer to issue validation code.
points* | int | Number of points to redeem.
issue_otp | boolean | Pass `true` to issue OTP if the validation is successful.
validation_code | string | OTP issued to the customer's mobile number.
skip_validation | boolean | Pass `true` if you want to skip validation.
validation_type | enum | Preferred mode of validation. Value: `MISSED_CALL`, `SMS`, `INVALID`. Use invalid if you want to `skip_validation`.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Issue Validation Code for Redeeming Points

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
URI | `/validationcode`
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
      "points_redeemed": "100",
      "transaction_number": "1234r743",
      "customer": { "mobile": "44700900999" },
      "notes": "Sample notes",
      "validation_code": "6D18DU",
      "redemption_time": "2016-11-21 11:30:11"
    }]
  }
}
```

```xml
<root>
<redeem>
<points_redeemed>100</points_redeemed>
<transaction_number>1234r743</transaction_number>
<customer>
<mobile>44700900999</mobile>
<email></email>
<external_id></external_id>
</customer>
<notes>Sample notes</notes>
<validation_code>6D18DU</validation_code>
<redemption_time>2016-11-21 11:30:11</redemption_time>
</redeem>
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
</item_status>    
</points>  
</responses>
</response>
```

You can redeem points of a customer using the issued validation code. Ensure that you have validated the points to be redeemed and issued validation code to the customer's mobile number before redeeming. You need to have the validation code to process points redemption.

<aside class="warning"> 
You need to use the validation code within the validity period. You can check the validity set for the validation code in **OTP code validity period** field on InTouch > **Settings** > **Organization Setup** > **OTPConfigurations** page
</aside>

### Resource Information
| | |
--------- | ----------- |
URI | `/redeem`
Rate Limited? | Yes
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`https://{host}/v1.1/points/redeem?{query_param}={param_value}&format={xml/json}`

### Request Parameters
Parameter | Datatype | Description
--------- | -----------
mobile* | string | Provide the registered mobile number of the customer to redeem points.
points_redeemed* | int | Provide the number of points to be redeemed.
transaction_number | string | Provide the transaction number for which the points has to be redeemed.
validation_code* | string | Provide the validation code received by the customer through `points/validationcode`.
redemption_time | date-time | Provide the redemption date and time in YYYY-MM-DD HH-MM-SS format.
program_id | long | Program id associated to the points that you want to redeem. Required only for orgs with MLP enabled.

<aside class="notice">Parameters marked with * are mandatory.</aside>

## Response Codes
### Success Codes
| Code  |  Description                 | 
|-------|------------------------------| 
| 800   | Points redeemed successfully | 


### Error Codes
Code | Description
---- | -----------
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
817 | Points redemption failed
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
828 | Unable to redeem points at this moment. Please try again later
829 | Unable to redeem points at this moment. Please try again later
850 | Unable to redeem points at this moment. Please try again later
859 | The redemption time you have passed is invalid
860 | Unable to issue OTP
881 | Customer is not registered into the loyalty program
886 | Unable to process points at this moment. Please try again later
887 | Unable to process points at this moment. Please try again later
888 | Configuration is invalid. Please report to Capillary Support
889 | Unable to process points at this moment. Please try again later
890 | Unable to process points at this moment. Please try again later
891 | Unable to process points at this moment. Please try again later  
892 | Unable to process points at this moment. Please try again later
893 | Unable to process points at this moment. Please try again later
894 | Unable to process points at this moment. Please try again later
895 | Loyalty program is not configured for your organization
896 | Unable to process points at this moment. Please try again later
897 | Unable to process points at this moment. Please try again later
898 | Unable to process points at this moment. Please try again later
899 | Configuration is invalid. Please report to Capillary Support
