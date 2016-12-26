# customer
A customer is an individual who buys goods or services, or subscribes for organization’s newsletters. An organization can be a store, business firm, hospitals or restaurants).

In Capillary’s platform the customer entity represents loyalty customers of the respective organization or just the customers who have subscribed to the organization’s newsletters. 

Capillary supports three types of customers based on the loyalty type:

* **Loyalty customers**: Customers who have enrolled into the organization’s loyalty program 
* **Non-loyalty customers**: Customers who have subscribed their mobile number or email id with the organization (through subscriptions, guest transactions etc) but not enrolled into the organization’s loyalty program 
* **Not-interested or anonymous customers**: Customers who have neither enrolled in the loyalty program nor subscribed their mobile numbers/email ids 

The customer entity stores customer related information such as identifiers, profile details, custom field details, transactions, preferences, subscription details (mobile number/email id), tier details, points history and coupons history.

The customer APIs allow you to

* Register customers into your organization’s loyalty program 
* Update customer’s profile information 
* Update primary or secondary identifiers (mobile no, email id, or external id)
* Retrieve customer details (loyalty/non-loyalty)
* Submit tickets on behalf of customers and fetch their tickets  
* Add, update and retrieve customer preferences 
* Retrieve transactions of a customer. 

## Register Customer
To register a customer at your organization, send a POST request to the customer/add endpoint and pass the information of the customer in an XML using the post method. You can register multiple customers at a time by passing the details of each customer in a separate <customer> </customer> tag of the XML sheet.

When registering a customer, the system will check if the mobile no/email id/external id you have provided is already registered at your organization. If any of these parameters are already available in the database then the existing customer details are updated with the recently provided details. Else, the customer is registered with the provided details.

However, to update secondary parameters, allow mobile number change/email id change/external id change should be enabled in your organization’s **InTouch** > **Settings** > **Miscellaneous** > **Registration Configuration** page.


## Update Customer Details
```json
# Sample Request URL
http://api.capillary.co.in/v1.1/customer/update?format=json
```

```json
# Sample Post JSON
{
  "root": {
    "customer": {
      "mobile": "44700900000",
      "email": "tom.sawyer@email.com",
      "external_id": "ts1234",
      "firstname": "Tom",
      "lastname": "Sawyer",
      "gender": "M",
      "custom_fields": {
        "field": {
          "name": "age",
          "value": "[“46”]"
        }
      }
    }
  }
}
```

This API allows you to update customer’s profile information of a based on the customer identifier (mobile no/email id/external id) passed.
You can update secondary identifiers (mobile no./email id./external id) only when the respective options are enabled on InStore, i.e., Capillary InTouch > **Settings** > **Miscellaneous** > **Registration Configuration**

* CONF_ALLOW_MOBILE_UPDATE (for mobile number)
* CONF_ALLOW_EMAIL_UPDATE (for email id)
* CONF_LOYALTY_ALLOW_EXTERNAL_ID_UPDATE (for external id) 

However, you cannot update the primary identifier of customers using this API even if the option to update the respective identifier is enabled on the **Registration Configuration** page. 

### Resource Information
Parameter | Description
--------- | -----------
URI	| customer/update
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | No

### Request Parameters
Parameter | Description
--------- | -----------
Mobile/email/external_id* | Pass any one mentioned identifier of the customer whose details need to be updated
user_id(Boolean) | Returns the unique user ID of the customer if user_id=true


## Update Customer Identifiers

## Fetch Customers by Partial Strings

## Fetch Customer ID

## Fetch Customer Details
This API retrieves information of the customer such as profile information, ten recent transactions, active coupons, and recent store interactions. 

You can also use filters to see and analyze the data that is required and hide data that you don’t want to see. For more details on supported filters, see the below ***Request Parameters*** table.
Parameter | Description
--------- | -----------
Resource Information | URI	customer/get
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | Yes

