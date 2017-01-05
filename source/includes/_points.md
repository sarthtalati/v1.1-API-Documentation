# Points
Points represent loyalty points of an organization that are issued to the loyalty customers based on the transactions made and tiers achieved. Customers can redeem the loyalty points earned by them against transactions. Points are issued only through the Loyalty Manager upon a transaction or tier upgrade but not through API calls.

The points entity allows you to perform the following tasks:

* Check whether a specific number of points can be redeemed by a customer  
* Validate customer’s mobile number by issuing validation code to redeem points 
* Redeem loyalty points of a customer after validating the preceding tasks

## Check If Points are Redeemable
```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/points/isredeemable?format=xml&points=100&validation_code=6D18DU&mobile=919591228668
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

### Resource Information
Entry | Description
--------- | -----------
URI | points/isredeemable
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
API Version | v1.1
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/points/isredeemable?format=<xml/json>&points=<points to redeem>&validation_code=<OTP>&mobile=<mobile no.>`

### Request Parameters
Parameter | Description
--------- | -----------
mobile* | Provide the registered mobile number of the customer to issue validation code - mobile,email, external_id, user_id 
points* | Number of points to redeem
validation_code* | OTP issued to the customer's mobile number

## Issue Validation Code for Redeeming Points

```html
http://us.intouch.capillarytech.com/v1.1/points/validationcode?format=xml&mobile=447700900000&points=50
```

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
          "message": "
Validation Code Issued by SMS/Email
"
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

Mobile number validation is required for redeeming points of a customer. You can validate the mobile number through OTP. This API allows you to issue validation code for redeeming points. 

### Resource Information
Entry | Description
--------- | -----------
URI | points/validationcode
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
API Version | v1.1
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/points/validationcode?format=<xml/json>&<query_param>=<value>&points=<points_to_be_redeemed>`

### Request Parameters
Parameter | Description
--------- | -----------
mobile* | Provide the registered mobile number of the customer to issue validation code - mobile,email, external_id, user_id 
points* | Number of points to redeem
email | Provide the email id of the customer if mobile number is not available

## Redeem Points

```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/points/redeem?format=json
```

```json
{
  "root": {
    "redeem": {
      "points_redeemed": "100",
      "transaction_number": "1234r743",
      "customer": { "mobile": "44700900999" },
      "notes": "Sample notes",
      "validation_code": "6D18DU",
      "redemption_time": "2011-11-21 11:30:11"
    }
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
<redemption_time>2011-11-21 11:30:11</redemption_time>
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


This API alllows you to process points redemption once the OTP issued to the customer is validated.

### Resource Information
Entry | Description
--------- | -----------
URI | points/redeem
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
API Version | v1.1
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/points/redeem?format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
mobile* | Provide the registered mobile number of the customer to redeem points
points_redeemed* | Provide the number of points to be redeemed
transaction_number | Provide the transaction number against which the points has to be redeemed
validation_code | Provide the OTP generated to the customer's mobile number through the previous call
redemption_time | Provide the redemption date and time in YYYY-MM-DD HH-MM-SS format

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

819 | Points you are trying to redeem are more than the maximum allowed redemption limit
 | Unable to send message to customer
820 | Unable to process. Customer is marked as fraud
821 | Points you are trying to redeem are less than the minimum redemption limit | 
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
