# Customer
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

```shell
#Sample Request
POST "http://us.api.capillarytech.com/v1.1/customer/add?format=json"
```

```json
# Sample POST JSON
{
  "root": {
    "customer": [
      {
        "mobile": "44700900000",
        "email": "tom.sawyer@example.com",
        "external_id": "ts1234",
        "firstname": "Tom",
        "lastname": "Sawyer",
        "gender": "M",
        "registered_on": "2012-09-11 11:11:11",
        "custom_fields": {
          "field": [
            {
              "name": "Hobbies",
              "value": "[“Playing”]"
            },
            {
              "name": "a",
              "value": "[“b”]>"
            }
          ]
        }
      },
      {
        "mobile": "44700900999",
        "email": "rita.john@example.com",
        "external_id": "XYPZ006",
        "firstname": "Rita",
        "lastname": "John",
        "gender": "M",
        "registered_on": "2012-09-11 11:11:15",
        "custom_fields": {
          "field": [
            {
              "name": "Hobbies",
              "value": "[“Singing”]>"
            },
            {
              "name": "a",
              "value": "[“b”]"
            }
          ]
        }
      }
    ]
  }
}
```

```xml
# Sample POST XML
<root>
  <customer>
     <mobile>44700900000</mobile>
     <email>tom.sawyer@example.com</email>
     <external_id>XYPZ001</external_id>
     <firstname>Tom</firstname>
     <lastname>Sawyer</lastname>
     <gender>M</gender>
     <registered_on>2012-09-11 11:11:11</registered_on>
     <custom_fields>
     <field>
    <name>Hobbies</name>
     <value>[“Playing”]</value>
     </field>
     <field>
    <name>a</name>
     <value>[“b”]></value>
     </field>
     </custom_fields>
     </customer>
    <customer>
     <mobile>44700900999</mobile>
     <email>rita.john@example.com</email>
     <external_id>XYPZ006</external_id>
     <firstname>Rita</firstname>
     <lastname>John</lastname>
     <gender>M</gender>
     <registered_on>2012-09-11 11:11:15</registered_on>
     <custom_fields>
     <field>
    <name>Hobbies</name>
     <value>[“Singing”]></value>
     </field>
     <field>
    <name>a</name>
     <value>[“b”]</value>
     </field>
     </custom_fields>
     </customer>
</root>

```

```json
# Sample Response
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "customers": {
      "customer": [
        {
          "user_id": "123",
          "mobile": "44700900000",
          "email": "tom.sawyer@example.com",
          "external_id": "XYPZ001",
          "gender": "M",
          "registered_on": "2012-09-11 11:11:11",
          "item_status": {
            "success": "true",
            "code": "1000",
            "message": "Customer Registration Successful"
          },
          "side_effects": {
            "effect": [
              {
                "type": "points",
                "awarded_points": "19490463",
                "total_points": "19490463"
              },
              {
                "type": "coupon",
                "coupon_code": "095790",
                "description": "Sample description",
                "coupon_type": "CAMPAIGN/DVS",
                "id": "42601779"
              }
            ]
          },
          "firstname": "Tom",
          "lastname": "Sawyer",
          "lifetime_points": "50",
          "lifetime_purchases": "180",
          "loyalty_points": "50",
          "current_slab": "SILVER",
          "updated_on": "2016-09-11 11:11:11"
        },
        {
          "user_id": "44342",
          "mobile": "44700900999",
          "email": "rita.john@example.com",
          "external_id": "XYPZ006",
          "gender": "M",
          "registered_on": "2016-09-11 11:11:15",
          "item_status": {
            "success": "true",
            "code": "1000",
            "message": "Customer Registration Successful"
          },
          "side_effects": {
            
          },
          "firstname": "Rita",
          "lastname": "John",
          "lifetime_points": "50",
          "lifetime_purchases": "345",
          "loyalty_points": "50",
          "current_slab": "SILVER",
          "updated_on": "2016-09-11 11:11:15"
        }
      ]
    }
  }
}
```

```xml
# Sample Response
<response>  
<status>    
<success>true</success>    
<code>200</code>    
<message>SUCCESS</message>  
</status>  
<customers>   
<customer>   
<user_id>123</user_id>   
<mobile>44700900000</mobile>
<email>tom.sawyer@example.com</email>     
<external_id>XYPZ001</external_id>
<gender>M</gender>
<registered_on>2012-09-11 11:11:11</registered_on>
<item_status>       
<success>true</success>        
<code>1000</code>        
<message>Customer Registration Successful</message>    
</item_status>      
<side_effects>
<effect>
<type>points</type>
<awarded_points>19490463</awarded_points>
<total_points>19490463</total_points>
</effect>
<effect>
<type>coupon</type>
<coupon_code>095790</coupon_code>
<description>Sample description</description>
<coupon_type>CAMPAIGN/DVS</coupon_type>
<discount_code></discount_code>
<discount_value></discount_value>
<valid_till></valid_till>
<id>42601779</id>
</effect>
</side_effects>
<!-- new fields start -->
<firstname>Tom</firstname> 
<lastname>Sawyer</lastname>
<lifetime_points>50</lifetime_points>
<lifetime_purchases>180</lifetime_purchases>
<loyalty_points>50</loyalty_points>
<current_slab>SILVER</current_slab>
<updated_on>2016-09-11 11:11:11</updated_on>
<!-- new fields end : these fields will come after implementing register by email functionality -->
</customer>  
<customer>  
<user_id>44342</user_id>    
<mobile>44700900999</mobile>     
<email>rita.john@example.com</email>     
<external_id>XYPZ006</external_id>      
<gender>M</gender>
<registered_on>2016-09-11 11:11:15</registered_on>
<item_status>        
<success>true</success>        
<code>1000</code>        
<message>Customer Registration Successful</message>     
</item_status>      
<side_effects>        
<effect/>      
</side_effects>
<!-- new fields start -->
<firstname>Rita</firstname> 
<lastname>John</lastname>
<lifetime_points>50</lifetime_points>
<lifetime_purchases>345</lifetime_purchases>
<loyalty_points>50</loyalty_points>
<current_slab>SILVER</current_slab>
<updated_on>2016-09-11 11:11:15</updated_on>
<!-- new fields end : these fields will come after implementing register by email functionality -->    
</customer>
</customers>
</response>

```

This API allows you to  register  customers into your organization’s loyalty program. You can register multiple customers at a time. However, this API also updates customer details when a registered identifier is passed again.

Following are the features of customer registration API:

* Registers customer with the provided details when a new identifier(mobile no/email id/external id) is passed 
* Identifiers once registered  are not modified
* Identifiers are updated only if null/blank
* Fields other than identifiers are updated automatically

However, to update secondary parameters, allow mobile number change/email id change/external id change should be enabled in your organization’s **InTouch** > **Settings** > **Miscellaneous** > **Registration Configuration** page.

### Resource Information
Parameter | Description
--------- | -----------
URI	| customer/add
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/add?format=<xml/json>`

### Request Attributes
The mandatory attributes for customer registration depends on the configurations set on InTouch. For example, you could set email id and one or more custom fields as a mandatory params for registering a customer.
<aside class="warning">Before using customer registration API, know the mandatory and optional fields set on the **Registration Configuration** page of InTouch.</aside>

Attribute | Description
--------- | -----------
mobile* | Mobile number that the customer wants to register with your org. Pass the mobile number with country code
email* | Email id that the customer wants to register with your org. 
external_id* | External id of the customer that is accepted by your org. Required only if it is supported for your org
firstname | First name of the customer
lastname | Last name of the customer
type | Registration type: LOYALTY, NON_LOYALTY, NOT_INTERESTED
registered_on | Date on which the customer is registered. Format: YYYY-MM-DD HH:MM:SS, <br>Example: 2016-09-11 11:11:11 
custom_fields | Provide the custom fields configured for your org in name and value pairs <br>`<field>` `<name>Hobbies</name>` <br> `<value>[“Playing”]</value>`  `</field>`




## Update Customer Details

```shell
# Sample Request URL
POST "http://api.capillary.co.in/v1.1/customer/update?format=json"
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

```xml
# Sample Post XML

<?xml version="1.0" encoding="UTF-8" ?>
	<root>
		<customer>
			<mobile>44700900000</mobile>
			<email>tom.sawyer@example.com</email>
			<external_id>ts1234</external_id>
			<firstname>Tom</firstname>
			<lastname>Sawyer</lastname>
			<gender>M</gender>
			<custom_fields>
				<field>
					<name>age</name>
					<value>[“46”]</value>
				</field>
			</custom_fields>
		</customer>
	</root>
```

```json
# Sample Response

{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "customers": {
      "customer": {
        "user_id": "776538",
        "mobile": "44700900000",
        "email": "tom.sawyer@example.com",
        "external_id": "ts1234",
        "firstname": "Tom",
        "lastname": "Sawyer",
        "gender": "M",
        "custom_fields": {
          "field": {
            "name": "hobbies",
            "value": "[“Playing”]"
          }
        },
        "item_status": {
          "success": "true",
          "code": "1000",
          "message": "User Successfully Updated."
        },
        "lifetime_points": "245",
        "lifetime_purchases": "24500",
        "loyalty_points": "60",
        "current_slab": "SILVER",
        "registered_on": "2012-08-16 15:13:16",
        "updated_on": "2012-09-22 10:48:00"
      }
    }
  }
}
```

```xml
# Sample Response
<?xml version="1.0" encoding="UTF-8" ?>
	<response>
		<status>
			<success>true</success>
			<code>200</code>
			<message>SUCCESS</message>
		</status>
		<customers>
			<customer>
				<user_id>776538</user_id>
				<mobile>44700900000</mobile>
				<email>tom.sawyer@example.com</email>
				<external_id>TOM123</external_id>
				<firstname>Tom</firstname>
				<lastname>Sawyer</lastname>
				<gender>M</gender>
				<custom_fields>
					<field>
						<name>hobbies</name>
						<value>[“Playing”]</value>
					</field>
				</custom_fields>
				<item_status>
					<success>true</success>
					<code>1000</code>
					<message>User Successfully Updated.</message>
				</item_status>
				<lifetime_points>245</lifetime_points>
				<lifetime_purchases>24500</lifetime_purchases>
				<loyalty_points>60</loyalty_points>
				<current_slab>SILVER</current_slab>
				<registered_on>2012-08-16 15:13:16</registered_on>
				<updated_on>2012-09-22 10:48:00</updated_on>
			</customer>
		</customers>
	</response>

```

This API allows you to update customer’s profile information based on the customer identifier (mobile no/email id/external id) passed. If an identifier you register already exists in campaigns, the customer details are merged automatically.
 
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

### Request URL
`http://<cluster url>/v1.1/customer/update?format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
Mobile/email/external_id* | Pass any one of these identifiers of the customer whose details need to be updated
user_id(Boolean) | Returns the unique user ID of the customer if user_id=true


## Update Customer Identifiers
```html
# Sample Request

http://us.intouch.capillarytech.com/v1.1/customer/update_identity?format=xml
```
> Provide the unique identifier of the customer in <identifier> and current and new identifier values in <old-value> and <new_value> respectively


```json
# Sample POST json
{
   "root": {
      "customer": {
         "new_value": "44700900090",
         "identifier": "44700900000",
         "old_value": "44700900000"
      }
   }
}
```

```xml
# Sample POST xml
<?xml version="1.0" encoding="UTF-8" ?>
	<root>
		<customer>
			<new_value>44700900090</new_value>
			<identifier>44700900000</identifier>
			<old_value>44700900000</old_value>
		</customer>
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
      "customers": {
         "customer": {
            "identifier": "mobile",
            "old_value": "44700900000",
            "new_value": "44700900090",
            "updated": "true",
            "item_status": {
               "success": "true",
               "code": "1040",
               "message": "Customer Identity change request added successfully"
            }
         }
      }
   }
}
```


```xml
<?xml version="1.0" encoding="UTF-8" ?>
	<response>
		<status>
			<success>true</success>
			<code>200</code>
			<message>SUCCESS</message>
		</status>
		<customers>
			<customer>
				<identifier>mobile</identifier>
				<old_value>44700900000</old_value>
				<new_value>44700900090</new_value>
				<updated>true</updated>
				<item_status>
					<success>true</success>
					<code>1040</code>
					<message>Customer Identity change request added successfully</message>
				</item_status>
			</customer>
		</customers>
	</response>
```

This API allows you to send requests to update primary and secondary identifiers (mobile no./email id/external id) of loyalty customers. Requests submitted through `customer/update_identity` will be in pending state by default. Capillary back-end team verifies each such requests and process it accordingly.

### Resource Information
Parameter | Value
--------- | -----
URI	| customer/update_identity
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/update_identity?format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
identifier* | Provide mobile/email/external_id of the customer whose identifier you want to modify
old_identifier* | Existing identifer value of the customer that needs to be updated
new_identifier* | New identifer value

## Retrieve Customers (Advanced Search)
```html
# Sample Request
http://api.capillary.co.in/v1.1/customer/search?q=mobile:EQUALS:44700900000&format=json
```
```json
{ 
    "response": {

        "status": {

            "success": "true",

            "code": "200",

            "message": "SUCCESS"

        },

        "customer": {

            "count": "2",

            "start": "0",

            "rows": "10",

            "results": {

                "item": [

                    {

                        "user_id": "102",

                        "org_id": "29",

                        "firstname": "Tom",

                        "lastname": "Sawyer",

                        "mobile": "44700900000",

                        "email": "tom.sawyer@example.com",

                        "external_id": "None",

                        "gender": "M",

                        "loyalty_points": "355",

                        "lifetime_points": "5400",

                        "lifetime_purchases": "10800",

                        "current_slab": "CLASSIC",

                        "registered_on": "2012-12-25 11:25:32",

                        "registered_by": "pe.london.bondstreet",

                        "last_trans_value": "1000",

                        "attributes": {

                            "attribute": {

                                "name": "customer_age",

                                "value": "26-35"

                            }

                        }

                    },

                    {

                        "user_id": "122",

                        "org_id": "29",

                        "firstname": "John",

                        "lastname": "Smith",

                        "mobile": "44700900888",

                        "email": "john.smith@example.com",

                        "external_id": "None",

                        "loyalty_points": "355",

                        "lifetime_points": "355",

                        "lifetime_purchases": "4598",

                        "current_slab": "CLASSIC",

                        "registered_on": "2012-12-25 11:25:32",

                        "registered_by": "pe.london.bondstreet",

                        "last_trans_value": "1000",

                        "attributes": {

                            "attribute": [

                                {

                                    "name": "occupation",

                                    "value": "Student"

                                },

                                {

                                    "name": "customer_age",

                                    "value": "19-25"

                                }

                            ]

                        }

                    }

                ]

            }

        }

    }

}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
	<response>
		<status>
			<success>true</success>
			<code>200</code>
			<message>SUCCESS</message>
		</status>
		<customer>
			<count>2</count>
			<start>0</start>
			<rows>10</rows>
			<results>
				<item>
					<user_id>102</user_id>
					<org_id>29</org_id>
					<firstname>Tom</firstname>
					<lastname>Sawyer</lastname>
					<mobile>44700900000</mobile>
					<email>tom.sawyer@example.com</email>
					<external_id>None</external_id>
					<gender>M</gender>
					<loyalty_points>355</loyalty_points>
					<lifetime_points>5400</lifetime_points>
					<lifetime_purchases>10800</lifetime_purchases>
					<current_slab>CLASSIC</current_slab>
					<registered_on>2012-12-25 11:25:32</registered_on>
					<registered_by>pe.london.bondstreet</registered_by>
					<last_trans_value>1000</last_trans_value>
					<attributes>
						<attribute>
							<name>customer_age</name>
							<value>26-35</value>
						</attribute>
					</attributes>
				</item>
				<item>
					<user_id>122</user_id>
					<org_id>29</org_id>
					<firstname>John</firstname>
					<lastname>Smith</lastname>
					<mobile>44700900888</mobile>
					<email>john.smith@example.com</email>
					<external_id>None</external_id>
					<loyalty_points>355</loyalty_points>
					<lifetime_points>355</lifetime_points>
					<lifetime_purchases>4598</lifetime_purchases>
					<current_slab>CLASSIC</current_slab>
					<registered_on>2012-12-25 11:25:32</registered_on>
					<registered_by>pe.london.bondstreet</registered_by>
					<last_trans_value>1000</last_trans_value>
					<attributes>
						<attribute>
							<name>occupation</name>
							<value>Student</value>
						</attribute>
						<attribute>
							<name>customer_age</name>
							<value>19-25</value>
						</attribute>
					</attributes>
				</item>
			</results>
		</customer>
	</response>
```


This API allows you to fetch customers based on different parameters such as such as name, customer identifier, duration and store id. Besides these you can also fetch customers based on registered date, loyalty points, lifetime points, lifetime purchases amount, current tier, transaction amount and custom field values.
### Resource Information
Parameter | Value
--------- | -----
URI	| customer/search
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/search?format=<xml/json>&<input_params>`

### Request Parameters
You need to understand Query Grammar to learn how to use input parameters for customer/search API. For more details, see the Query Grammar section.

Parameter | Description
--------- | -----------
firstname* | Retrieves the list of customers whose first name matches with the string passed. <br>**Query**: `firstname:EXACT:<first name>`
lastname* | Retrieves the list of customers whose last name matches with the string passed.<br> <br>**Query**: `lastname:EXACT:<last Name>`
org_id* | Retrieves the list of entire customers of the respective organization. <br>**Query**: `org_id:EQUALS:<org id>`
mobile* | Retrieves customers whose registered mobile numbers matches with the string passed. <br>**Query**: `mobile:EQUALS:<mobile number>`
email* | Retrieves the list of registered customers whose email id matches with the string passed. <br>**Query**: `email:EQUALS:<email id>`
external_id | Retrieves customers whose external id matches with the string passed. <br>**Query**: `external_id:EQUALS:<external id>`
registered_date | Retrieves customers whose registered date matches the specified date.
loyalty_points | Retrieves the list of customers whose active loyalty points matches the specified query. <br>**Query**: `loyalty_points:GREATER:<lyalty points>`
lifetime_points | Retrieves the list of customers whose lifetime points matches the specified query. <br>**Query**: `lifetime_points:GREATER:<lifetime points>`
lifetime_purchases | Retrieves the list of customers whose lifetime purchases amount matches the specified query. **Query**: `lifetime_purchases:GREATER:<lifetime purchases>`
slab | Retrieves the list of customers whose current loyalty tier matches the specified value. <br>**Query**: `slab:EQUALS:<Slab name>`
registered_store | Retrieves the list of customers who are registered at a specific store. <br>**Query**: `registered_store:EQUALS:<Store id>`
last_trans_value | Retrieves the list of customers whose transaction amount matches the specified query. <br>**Query**: `transaction_value:GREATER:<transaction amount>`
Custom fields | Retrieves the list of customers whose custom field values matches the specified value. <br>**Query**: `<Field Name>:<Field Value>`

### Query Grammar
The following is a formal definition of the Query Grammer

**QUERY**: `(CONDITION) | (CONDITION & (CONDITION)*)`

**CONDITION**: `ATTRIBUTE:OPERATOR:VALUES`

**ATTRIBUTE**: Set of inventory/customer attributes that are searchable

**Dynamic List**
* **OPERATOR**: STARTS, ENDS, EXACT, RANGE, LESS, GREATER, EQUALS, IN
* **VALUES**: ALPHANUMERIC | ALPHANUMERIC;ALPHANUMERIC(for RANGE, IN OPERATOR, separator is ';' )


## Retrieve Customer Details
```html
# Sample Request URL
http://api.capillary.co.in/v1.1/customer/get?format=xml&mobile=44700900000,44700900999
```

```json
# Sample Response
{
"status": {
"success": "true", 
"code": "200", 
"message": "SUCCESS"
}, 
"customers": [
{
"firstname": "Tom", 
"lastname": "Swayer", 
"mobile": "44700900000", 
"email": "tomsawyer@example.com", 
"external_id": "ts1234", 
"lifetime_points": "0", 
"lifetime_purchases": "0", 
"loyalty_points": "0", 
"current_slab": [ ], 
"registered_on": "2013-01-21 11:23:45", 
"updated_on": "2013-01-21 10:23:45", 
"gender": "M", 
"registered_by": "vimal store", 
"registered_store": {
"code": "vimal.store", 
"name": "vimal store"
}, 
"registered_till": {
"code": "vimal.till", 
"name": "vimal.till"
}, 
"fraud_details": {
"status": "NONE", 
"marked_by": [ ], 
"modified_on": [ ]
}, 
"ndnc_status": "NONE", 
"optin_status": "NONE", 
"expiry_schedule": [
{
"points": "10", 
"expiry_date": "2014-03-25"
}
], 
"expired_points": [
{
"points": "10", 
"expired_on": "2013-12-20"
}
], 
"slab_history": [
{
"to": "TIER2-GOLD", 
"from": "TIER1-SILVER", 
"store": {
"code": "store.code", 
"name": "store.name"
}, 
"type": "UPGRADE", 
"changed_on": "2014-01-24T19:29:40+05:30", 
"notes": "done by the scron"
}
], 
"points_summary": {
"expired": "103", 
"redeemed": "120", 
"adjusted": "10", 
"returned": "30"
}, 
"promotion_points": {
"customer": [
{
"points": "30", 
"expiry_date": "2014-11-02", 
"issued_at": {
"code": "storecode", 
"name": "storename"
}, 
"issued_on": "2014-01-23"
}, 
{
"points": "30", 
"expiry_date": "2014-11-02", 
"issued_at": {
"code": "storecode", 
"name": "storename"
}, 
"issued_on": "2014-01-21"
}
], 
"transactions": [
{
"transaction_id": "4325", 
"points": "349", 
"expiry_date": "2014-11-21", 
"issued_at": {
"code": "storecode", 
"name": "storename"
}, 
"issued_on": "2014-01-21"
}
], 
"lineitems": [
{
"lineitem_id": "10342", 
"transaction_id": "245", 
"points": "13", 
"expiry_date": "2014-11-20", 
"issued_at": {
"code": "storecode", 
"name": "storename"
}
}
]
}, 
"current_nps_status": [ ], 
"custom_fields": [
[ ]
], 
"segments": [
[ ]
], 
"transactions": [
[ ]
], 
"coupons": [
{
"id": "3495", 
"series_id": "6", 
"code": "00b5nis2", 
"description": "redemptions", 
"created_date": "2009-09-30 16:29:58", 
"valid_till": "2009-10-01", 
"redeemed": "true"
}
], 
"notes": [ ], 
"item_status": {
"success": "true", 
"code": "1000", 
"message": "Customer successfully retrieved"
}
}
]
}
```

```xml
# Sample Response
<?xml version="1.0" encoding="UTF-8"?>
<response>
   <status>
      <success>true</success>
      <code>200</code>
      <message>SUCCESS</message>
   </status>
   <customers>
      <customer>
         <firstname>Tom</firstname>
         <lastname>Swayer</lastname>
         <mobile>44700900000</mobile>
         <email>tomsawyer@example.com</email>
         <external_id>ts1234</external_id>
         <lifetime_points>0</lifetime_points>
         <lifetime_purchases>0</lifetime_purchases>
         <loyalty_points>0</loyalty_points>
         <current_slab />
         <registered_on>2013-01-21 11:23:45</registered_on>
         <updated_on>2013-01-21 10:23:45</updated_on>
         <gender>M</gender>
         <registered_by>vimal store</registered_by>
         <registered_store>
            <code>vimal.store</code>
            <name>vimal store</name>
         </registered_store>
         <registered_till>
            <code>vimal.till</code>
            <name>vimal.till</name>
         </registered_till>
         <fraud_details>
            <status>NONE</status>
            <marked_by />
            <modified_on />
         </fraud_details>
         <ndnc_status>NONE</ndnc_status>
         <optin_status>NONE</optin_status>
         <expiry_schedule>
            <schedule>
               <points>10</points>
               <expiry_date>2014-03-25</expiry_date>
            </schedule>
         </expiry_schedule>
         <expired_points>
            <item>
               <points>10</points>
               <expired_on>2013-12-20</expired_on>
            </item>
         </expired_points>
         <slab_history>
            <history>
               <to>TIER2-GOLD</to>
               <from>TIER1-SILVER</from>
               <store>
                  <code>store.code</code>
                  <name>store.name</name>
               </store>
               <type>UPGRADE</type>
               <changed_on>2014-01-24T19:29:40+05:30</changed_on>
               <notes>done by the scron</notes>
            </history>
         </slab_history>
         <points_summary>
            <expired>103</expired>
            <redeemed>120</redeemed>
            <adjusted>10</adjusted>
            <returned>30</returned>
         </points_summary>
         <promotion_points>
            <customer>
               <item>
                  <points>30</points>
                  <expiry_date>2014-11-02</expiry_date>
                  <issued_at>
                     <code>storecode</code>
                     <name>storename</name>
                  </issued_at>
                  <issued_on>2014-01-23</issued_on>
               </item>
               <item>
                  <points>30</points>
                  <expiry_date>2014-11-02</expiry_date>
                  <issued_at>
                     <code>storecode</code>
                     <name>storename</name>
                  </issued_at>
                  <issued_on>2014-01-21</issued_on>
               </item>
            </customer>
            <transactions>
               <item>
                  <transaction_id>4325</transaction_id>
                  <points>349</points>
                  <expiry_date>2014-11-21</expiry_date>
                  <issued_at>
                     <code>storecode</code>
                     <name>storename</name>
                  </issued_at>
                  <issued_on>2014-01-21</issued_on>
               </item>
            </transactions>
            <lineitems>
               <item>
                  <lineitem_id>10342</lineitem_id>
                  <transaction_id>245</transaction_id>
                  <points>13</points>
                  <expiry_date>2014-11-20</expiry_date>
                  <issued_at>
                     <code>storecode</code>
                     <name>storename</name>
                  </issued_at>
               </item>
            </lineitems>
         </promotion_points>
         <current_nps_status />
         <custom_fields>
            <field />
         </custom_fields>
         <segments>
            <segment />
         </segments>
         <transactions>
            <transaction />
         </transactions>
         <coupons>
            <coupon>
               <id>3495</id>
               <series_id>6</series_id>
               <code>00b5nis2</code>
               <description>redemptions</description>
               <created_date>2009-09-30 16:29:58</created_date>
               <valid_till>2009-10-01</valid_till>
               <redeemed>true</redeemed>
            </coupon>
         </coupons>
         <notes />
         <item_status>
            <success>true</success>
            <code>1000</code>
            <message>Customer successfully retrieved</message>
         </item_status>
      </customer>
   </customers>
</response>
```

This API allows you to retrieve details of loyalty customers of your organization. You can retrieve profile information, loyalty details, subscription status, 10 recent transactions, active coupons, recent store interactions and customer's unique id.

### Resource Information
Parameter | Value
--------- | -----
Rate Limited? | Yes
Authentication |  Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Details of loyalty customers
API Version | v1.1
Batch Support | Yes

### Request Parameters

Parameter | Description
--------- | ----------- 
Customer Identifier* | Pass any identifier (mobile/email/external_id/user_id) of the customer whose details needs to be retrieved <br> For example, mobile=44700900000. To retrieve details of multiple customers at a time, pass each value separating with comma (,) For example,  `mobile=44700900000,44700900999,4470090345`
user_id | Returns the unique id of the customer generated at our end when the customer is registered
next_slab=true | Returns the details of next tier of the  loyalty customer
slab_history=true | Returns the details of loyalty tier changes of the customer
registered_store | Returns the store at which the customer is registered. This is returned by default.
registered_till | Returns the store-TILL at which the customer is registered. This is returned by default. 
fraud_details=true | Returns the fraud details of a customer. This field is returned by default
ndsc_status=true | Returns the status of the customer's registered mobile number on NDSC/DND
optin_status=true | Returns the services (sms/email) to which the customer has opted in and opted out
expiry_schedule=true | Returns the details of points expiry summary
expired_points=true | Returns the details of expired points of the customer
points_summary=true | Returns the history of points issued and redeemed
promotion_points=true | Returns the history of promotional points issued and redeemed. It also shows the store that issued the points and expiry date for each set of points issued
membership_retention_criteria=true | Returns the criteria set for membership retention (for membership based loyalty program) - in a specific duration, the minimum number of visits and minimum lifetime purchases amount required to continue in the same tier/membership

### Request URL
`https://api.capillary.co.in/v1.1/customer/get?format=xml&<identifier_type>=<identifier_value>`


 
 
## Retrieve Customer Transactions
```html
http://api.capillary.co.in/v1.1/customer/transactions?format=json&mobile=44700900000&start_date=2016-12-21+23:45:45&end_date=2016-12-29+12:11:45
```

```json
{
"response": {
"status": {
"success": "true", 
"code": "200", 
"message": "SUCCESS"
}, 
"customer": {
"mobile": "44700900000", 
"email": "tom.sawyer@example.com", 
"external_id": "ts1234", 
"firstname": "Tom", 
"lastname": "Sawyer", 
"lifetime_points": "13700", 
"lifetime_purchases": "138000", 
"loyalty_points": "12000", 
"registered_on": "2016-07-10 11:11:15", 
"updated_on": "2016-12-25 11:19:11", 
"current_slab": "gold", 
"count": "26", 
"start": "23622808", 
"rows": "10", 
"transactions": {
"transaction": {
"id": "23622808", 
"number": "ANBDCGD", 
"type": "REGULAR", 
"amount": "3000", 
"notes": "Bill added by mobile", 
"billing_time": "2016-12-16 17:02:22", 
"gross_amount": "3000", 
"discount": "10", 
"store": "", 
"points": {
"issued": "30", 
"redeemed": "20"
}, 
"coupons": "", 
"basket_size": "10", 
"line_items": {
"line_item": ""
}
}
}
}
}
}

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
	<response>
		<status>
			<success>true</success>
			<code>200</code>
			<message>SUCCESS</message>
		</status>
		<customer>
			<mobile>44700900000</mobile>
			<email>tom.sawyer@example.com</email>
			<external_id>ts1234</external_id>
			<firstname>Tom</firstname>
			<lastname>Sawyer</lastname>
			<lifetime_points>13700</lifetime_points>
			<lifetime_purchases>138000</lifetime_purchases>
			<loyalty_points>12000</loyalty_points>
			<registered_on>2016-07-10 11:11:15</registered_on>
			<updated_on>2016-12-25 11:19:11</updated_on>
			<current_slab>gold</current_slab>
			<count>26</count>
			<start>23622808</start>
			<rows>10</rows>
			<transactions>
				<transaction>
					<id>23622808</id>
					<number>ANBDCGD</number>
					<type>REGULAR</type>
					<amount>3000</amount>
					<notes>Bill added by mobile</notes>
					<billing_time>2013-12-16 17:02:22</billing_time>
					<gross_amount>3000</gross_amount>
					<discount>10</discount>
					<store></store>
					<points>
						<issued>30</issued>
						<redeemed>20</redeemed>
					</points>
					<coupons></coupons>
					<basket_size>10</basket_size>
					<line_items>
						<line_item></line_item>
					</line_items>
				</transaction>
			</transactions>
		</customer>
	</response>
	


```

This API allows you to retrieve transaction history of a customer which includes the following information.

Transaction type, gross transaction amount, transaction date, points issued, points redeemed, coupons redeemed and so on. 

You can filter the results for better understanding and sort the information in ascending or descending order.

<aside class="notice">You cannot retrieve individual line-item level details of a transaction.</aside>

You can filter results using various parameters to analyze the data that you want to see and hide that you don’t want to see. For more details on supported filters, see the ***Request Parameters*** table below.

### Resource Information
Parameter | Value
--------- | -----
URI | customer/transactions
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/transactions?format=<xml/json>&<input_params>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer Identifier* | Provide the primary identifier of the customer to fetch the transaction details - mobile no./email id/external id. <br>To retrieve transactions of multiple customers at a time, provide each customer's identifier separating by a comma. <br>**Example**: `mobile=44700900000,44700900999,4470090345`
store_id | Retrieves transactions made at a specific store
start_id | Retrieves transactions made in a specific duration (start_date to end_date)
end_date | Retrieves transactions made in a specific duration (start_date to end_date). <br>Example: `start_date=2013-12-21+23:45:45&end_date=2013-12-29+12:11:45`
transaction_id | Retrieves the details of a specific transactions.
transaction_date | Retrieves the transactions made on a specific date. Date format: YYYY-MM-DD
order | Alligns the list in ascending or descendending order of transaction date/transaction id based on the following parameters. <br>**Value**: trans_id, trans_date
asc | Sorts the transaction history in the ascending order of transaction date or transaction id. <br>**Query**: sort=desc
Desc | Sorts the transaction history in the descending order of transaction date or transaction id. <br>**Query**: sort=desc

## Add Customer Notes
```html
http://us.intouch.capillarytech.com/v1.1/customer/notes?format=json
```

> Sample POST Request

```json
{
  "root": {
    "customer": {
      "user_id": "15",
      "mobile": "44700900999",
      "email": "catherine@example.com",
      "external_id": "ct123",
      "loyalty_id": "434412",
      "associate_id": "443",
      "notes": {
        "note": {
          "id": "15",
          "date": "2016-05-05 15:15:00",
          "description": "Likes Maggi"
        }
      }
    }
  }
}
```

```xml
<root>
    <customer>
        <user_id>15</user_id>
        <mobile>44700900999</mobile>
        <email>catherine@example.com</email>
        <external_id>ct123</external_id>
        <loyalty_id>434412</loyalty_id>
        <associate_id>443</associate_id>
        <notes>
            <note>
                <id>15</id>
                <date>2016-05-05 15:15:00</date>
                <description>Likes Maggi</description>
            </note>
            </notes>
    </customer>
</root>
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
    "customer": {
      "user_id": "15098",
      "firstname": "Catherine",
      "lastname": "Thomas",
      "mobile": "44700900999",
      "email": "catherine@example.com",
      "external_id": "ct123",
      "associate_id": "443",
      "notes": {
        "note": {
          "id": "-1",
          "date": "2012-05-05 15:15:00",
          "description": "Likes Maggi"
        }
      },
      "item_status": {
        "success": "true",
        "code": "200",
        "message": "Operation Successful"
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
<message>Operation Successful</message>
</status>
<customer>
    <user_id>15098</user_id>
    <firstname>catherine</firstname>
    <lastname>Thomas</lastname>
    <mobile>44700900999</mobile>
    <email>catherine@example.com</email>
    <external_id>ct123</external_id>
<associate_id>443</associate_id>
<notes>
            <note>
                <id>-1</id>
                <date>2012-05-05 15:15:00</date>
                <description>Likes Maggi</description>
            </note>

</notes>
<item_status>
<success>true</success>
<code>200</code>
<message>Operation Successful</message>
</item_status>
</customer>
</response>

```

This API allows you to record additional information about the customer.

### Resource Information
Parameter | Description
--------- | -----------
URI | customer/notes
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/customer/notes?format=xml/json`

### Request Parameters
Parameter | Description
--------- | -----------
Customer id* | Unique identifier of the customer for whom you want to create notes (mobile no/email id/external id)
associate_id* | Unique id of the associate who is creating the notes
date* | Date on which the customer note is added
description | Details or message of the note in a plain text format



## Retrieve Customer Notes 
```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/customer/notes?format=json&identifier=44700900999&associate_id=234
```

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "Operation Successful"
    },
    "customer": {
      "user_id": "15098",
      "firstname": "Catherine",
      "lastname": "Thomas",
      "mobile": "44700900999",
      "email": "catherine@example.com",
      "external_id": "ct123",
      "notes": {
        "note": [
          {
            "id": "1",
            "description": "Like to play cricket",
            "added_on": "2016-09-04 15:12:00"
          },
          {
            "id": "2",
            "description": "Subscribed for birthday wishes",
            "added_on": "2016-09-04 15:12:00"
          },
          {
            "id": "3",
            "description": "nothing more",
            "added_on": "2016-09-04 15:12:00"
          }
        ]
      },
      "item_status": {
        "success": "true",
        "code": "1000",
        "message": "Operation Successful"
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
<message>Operation Successful</message>
</status>
<customer>
    <user_id>15098</user_id>
<!-- 
user_id tag will be returned only if query param user_id = true 
-->

    <firstname>Catherine</firstname>
    <lastname>Thomas</lastname>
    <mobile>44700900999</mobile>
    <email>catherine@example.com</email>
    <external_id>ct123</external_id>
<notes>
    <note>
        <id>1</id>
    <description>Like to play cricket</description>
    <added_on>2016-09-04 15:12:00</added_on>
    </note>
    <note>
        <id>2</id>
    <description>Subscribed for birthday wishes</description>
    <added_on>2016-09-04 15:12:00</added_on>
    </note>
    <note>
        <id>3</id>
    <description>nothing more</description>
    <added_on>2016-09-04 15:12:00</added_on>
    </note>
</notes>
<item_status>
<success>true</success>
<code>1000</code>
<message>Operation Successful</message>
</item_status>
</customer>
</response>
```

This API allows you to fetch  customer notes created by a specific associate.

### Resource Information
Parameter | Value
--------- | -----------
URI | customer/notes
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/customer/notes?format=<xml/json>&<identifier>=<value>&associate_id=<ids>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer id* | Unique identifier of the customer whose notes need to be retrieved - mobile/email/external_id/user_id
associate_id | Returns notes created by a specific associate based on the associate id passed 

## Retrieve Customer Coupons
```html
# Sample Request
http://api.capillary.co.in/v1.1/customer/coupons?format=json&mobile=44700900990
```

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "customers": {
      "customer": {
        "firstname": "John",
        "lastname": "Doe",
        "email": "johndoe@example.com",
        "mobile": "44700900999",
        "external_id": "EXT001",
        "id": "1034",
        "coupons": {
          "coupon": {
            "id": "2423525",
            "redemption_count": "1",
            "created_date": "
2013-12-13T16:14:54+05:30",
            "valid_till": "2016-12-21",
            "code": "VOCU24902",
            "transaction_number": "
BILL-10304",
            "redemptions": {
              "redemption": {
                "date": "2016-12-12 12:12:12",
                "transaction_number": "
BIL2042040",
                "redeemed_at": {
                  "code": "storecode",
                  "name": "My store"
                }
              }
            }
          }
        },
        "item_status": {
          "success": "true",
          "code": "1000",
          "message": "Issued coupons retrieved successfully"
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
    <customers>
    <customer>
    <firstname>John</firstname>
    <lastname>Doe</lastname>
        <email>johndoe@example.com</email>
        <mobile>44700900999</mobile>
        <external_id>EXT001</external_id>
        <id>1034</id>
        <coupons>
            <coupon>
                <id>2423525</id>
                <redemption_count>1</redemption_count>
                <created_date>
2013-12-13T16:14:54+05:30</created_date>
                <valid_till>2016-12-21</valid_till>
                <code>VOCU24902</code>
            <transaction_number>
BILL-10304</transaction_number>
                <redemptions>
                    <redemption>
                            <date>2016-12-12 12:12:12</date>
                        <transaction_number>
BIL2042040</transaction_number>
                    <redeemed_at>
                            <code>storecode</code>
                            <name>My store</name>
                        </redeemed_at>
                    </redemption>
                </redemptions>
            </coupon>
        </coupons>
    <item_status>
        <success>true</success>
        <code>1000</code>
<message>Issued coupons retrieved successfully</message>
    </item_status>
    </customer>
</customers>
</response>
```

This API allows you to retrieve the details of coupon history of a specific customer, i.e., the details of coupons issued to the customer, and redeemed by the customer.

### Resource Information
Parameter | Value
--------- | -----------
URI | customer/coupons
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/customer/coupons?format=<json/xml>&<input_params>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer identifier* | Pass the mobile no/email id/external id of the customer to retrieve coupon history
start_date | Retrieve coupons issued in a specific duration - coupons issued between start_date and end_date
end_date | Retrieve coupons issued in a specific duration - coupons issued between start_date and end_date
status | Retrieve coupons by coupon status. <br>**Values**: redeemed, expired, active. <br>You can also pass more than one status separating each ; (semi-colon)
series_id | Retrieve details of a specific coupon series issued to the customer
order_by | Order the results by created date, amount or issued TILL (`created_date`, `amount`, `valid_till`) based on the type passed
sort_order | Sort the results in ascending (`asc`) or descending (`desc`) order

## Create New Ticket
```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/customer/tickets?format=json
```

> Sample POST Request

```json
{
  "root": {
    "customer": {
      "email": "johndoe@example.com",
      "mobile": "44700900999",
      "external_id": "EXT001",
      "id": "1034",
      "ticket": {
        "status": "OPEN",
        "priority": "HIGH",
        "department": "INTERNAL",
        "subject": "points issue",
        "message": "Unable to redeem points",
        "custom_fields": {
          "field": {
            "name": "field1",
            "value": "value1"
          }
        }
      }
    }
  }
}
```

```xml
<root>
    <customer>
        <email>johndoe@example.com</email>
        <mobile>44700900999</mobile>
        <external_id>EXT001</external_id>
        <id>1034</id>
        <ticket>
            <status>OPEN</status>
            <priority>HIGH</priority>
            <department>INTERNAL</department>
            <subject>points issue</subject>
            <message>Unable to redeem points</message>
            <custom_fields>
                <field>
                    <name>field1</name>
                    <value>value1</value>
                </field>
            </custom_fields>
        </ticket>
    </customer>
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
    "customers": {
      "customer": {
        "email": "johndoe@example.com",
        "mobile": "44700900999",
        "external_id": "EXT001",
        "id": "1034",
        "ticket": {
          "code": "35t40ld04",
          "status": "OPEN",
          "priority": "HIGH",
          "department": "INTERNAL",
          "subject": "points issue",
          "message": "Unable to redeem points",
          "custom_fields": {
            "field": {
              "name": "field1",
              "value": "value1"
            }
          }
        },
        "item_status": {
          "success": "true",
          "code": "1300",
          "message": "Ticket added successfully"
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
    <customers>
    <customer>
        <email>johndoe@example.com</email>
        <mobile>44700900999</mobile>
        <external_id>EXT001</external_id>
        <id>1034</id>
        <ticket>
            <code>35t40ld04</code>
            <status>OPEN</status>
            <priority>HIGH</priority>
            <department>INTERNAL</department>
            <subject>points issue</subject>
            <message>Unable to redeem points</message>
            <custom_fields>
                <field>
                    <name>field1</name>
                    <value>value1</value>
                </field>
            </custom_fields>
        </ticket>
        <item_status>
            <success>true</success>
            <code>1300</code>
            <message>Ticket added successfully</message>
        </item_status>
    </customer>
    </customers>
</response>
```

This API allows you to create tickets for a specific customer.

### Resource Information
Parameter | Value
--------- | -----------
URI | customer/tickets
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/customer/tickets?format=<xml/json>&<input_params>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer identifier* | Pass the customer identifier (mobile/email/external_id) for whom you want to create the ticket
status | Set the status of the ticket 
priority | Set the ticket priority. <br>Value: low, medium, high
department | Set the department for which the ticket needs to be assigned
ticket_code | Pass the ticket id
reported_from | Source from which the ticket needs to be created <br> Values: EMAIL, INTOUCH, CALLCENTER, CLIENT, MICROSITE, SOCIAL
type | Pass the ticket type <br>Value: STORE, Customer


## Retrieve Ticket Details
```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/customer/tickets?format=json
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
    "customer": {
      "firstname": "John",
      "lastname": "Doe",
      "email": "johndoe@example.com",
      "mobile": "44700900999",
      "external_id": "EXT001",
      "id": "1034",
      "tickets": {
        "ticket": {
          "code": "35t40ld04",
          "status": "OPEN",
          "priority": "HIGH",
          "department": "INTERNAL",
          "subject": "points issue",
          "message": "Product received is damaged",
          "custom_fields": {
            "field": {
              "name": "field1",
              "value": "value1"
            }
          }
        }
      },
      "item_status": {
        "success": "true",
        "code": "1300",
        "message": "Ticket retrieved successfully"
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
<customer>
    <firstname>John</firstname>
    <lastname>Doe</lastname>
        <email>johndoe@example.com</email>
        <mobile>44700900999</mobile>
        <external_id>EXT001</external_id>
        <id>1034</id>
        <tickets>
            <ticket>
            <code>35t40ld04</code>
            <status>OPEN</status>
            <priority>HIGH</priority>
            <department>INTERNAL</department>
            <subject>points issue</subject>
            <message>Product received is damaged</message>
            <custom_fields>
                <field>
                    <name>field1</name>
                    <value>value1</value>
                </field>
            </custom_fields>                
            </ticket>
        </tickets>
        <item_status>
            <success>true</success>
            <code>1300</code>
            <message>Ticket retrieved successfully</message>
        </item_status>
</customer>
</response>
```

This API allows you to fetch the details of tickets of a specific customer.

### Resource Information
Parameter | Description
--------- | -----------
URI | customer/tickets
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/tickets?format=<xml/json>&<input_params>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer identifier* | Pass the customer identifier (mobile/email/external_id) whose tickets you want to fetch
status | Retrieve tickets by its status 
priority | Filter results by ticket priority. <br>Value: low, medium, high
department | Retrieve tickets assigned to a specific department
ticket_code | Retrieve details of a specific ticket
reported_from | Retrieve tickets of a specific source <br> Values: EMAIL, INTOUCH, CALLCENTER, CLIENT, MICROSITE, SOCIAL
type | Retrieve tickets by type <br>Value: STORE, Customer
start_date | Retrieve tickets created in a specific duration - between start_date to end_date
end_date | Retrieve tickets created in a specific duration - between start_date to end_date


## Response Codes
### Success Codes
| Code |  Description                                          | 
|------|-------------------------------------------------------| 
| 1000 | Customer registered successfully.                     | 
|      | Customer retrieved successfully.                      | 
|      | Subscription updated successfully.                    | 
|      | Subscription retrieved successfully                   | 
|      | Customer updated successfully.                        | 
|      | Coupons retrieved successfully.                       | 
|      | Customer notes added/updated successfully             | 
|      | Customer notes retrieved successfully                 | 
|      | Customer preferences retrieved successfully.          | 
|      | Customer preferences updated successfully.            | 
| 1000 | Referral statistics retrieved successfully            | 
|      | Referrals are invited successfully                    | 
| 1040 | Customer id change request has submitted successfully | 
| 1050 | Customer recommendations fetched successfully         | 
| 1300 | Ticket retrieved successfully                         | 
|      | Ticket added successfully                             | 

### Error Codes
| Code       | Description                                                                        | 
|------------|------------------------------------------------------------------------------------| 
| 1001       | Unable to register. Invalid mobile number                                       | 
| 1002       | Unable to register. Invalid email id                                            | 
| 1003       | Unable to register. Invalid external id                                          | 
| 1004       | Failed to populate store                                                           | 
| 1005       | Unable to register with mobile number                                            | 
| 1006       | Mobile number is required                                                         | 
| 1007       | Invalid Mobile Number/ External ID/ Email ID                                       | 
| 1008/ 1038 | Unable to register with external id                                                | 
| 1009       | Unable to add registered customer to MLM                                           | 
| 1010       | Unable to update loyalty points of the customer                                    | 
| 1011       | Cannot find customer for provided identifier                                       | 
| 1012       | Cannot find customer for provided mobile/external-id/e-mail                        | 
| 1013       | Customer not registered for Loyalty Program.                                       | 
| 1014       | Customer is registered already                                                     | 
| 1015       | No identifier provided to get loyalty users                                        | 
| 1016       | Email provided already exists for some other user                                  | 
| 1017       | Provided Custom Field is invalid                                                   | 
| 1018       | Unable to update custom field                                                      | 
| 1019       | Mobile number or external id is required along with the email Id to register       | 
| 1020       | The customer is not registered for loyalty program                                 | 
| 1021       | Invalid validation code                                                            | 
| 1023       | Unable to register customer to loyalty program                                     | 
| 1024       | Unable to update customer profile                                                  | 
| 1025       | Mandatory fields are not matching for customer identity update                     | 
| 1026       | Count of optional fields match is less than required                               | 
| 1027       | Field name provided for verification is invalid                                    | 
| 1028       | No customer notes are available                                                    | 
| 1029       | Unable to retrieve customer preferences                                            | 
| 1030       | Unable to update customer preferences                                              | 
| 1031       | No preferences set for this customer                                               | 
| 1032       | A customer already exists with the same mobile number                              | 
| 1033       | A customer already exists with the same external id                                | 
| 1034       | Registration date is not within the accepted past or future date limit.            | 
| 1035       | Some customer preferences could not be updated                                     | 
| 1036       | Unable to add/update one or more customer notes                                    | 
| 1037       | Unable to add/update customer notes                                                | 
| 1039       | Email id is required                                                              | 
| 1041       | Customer id change request failed                                                 | 
| 1042       | Invalid mobile no/email id/external id                                             | 
| 1043       | Customer’s external id is required                                                 | 
| 1044       | You do not have sufficient permission to view the customer details                 | 
| 1045       | Either mobile number or email id is required                                       | 
| 1046       | Loyalty customer cannot be converted to a to a non-loyalty customer is not allowed | 
| 1047       | Customer’s mobile number is required to convert to loyalty customer                | 
| 1048       | Customer’s email id is required to convert to loyalty customer                     | 
| 1049       | Customer’s external id is required to convert to loyalty customer                  | 
| 1051       | Unable to fetch customer recommendations                                           | 
| 1060       | Batch limit exceeded                                                               | 
| 1061       | Invalid fraud status                                                               | 
| 1062       | Invalid Test & Control Status                                                      | 
| 1086       | Points processing failed                                                           | 
| 1087       | Points processing failed                                                           | 
| 1088       | Unable to issue points. Please report to capillary support                        | 
| 1089       | Points processing failed                                                           | 
| 1090       | Points processing failed                                                           | 
| 1091       | Points processing failed                                                           | 
| 1092       | Points processing failed                                                           | 
| 1093       | Points processing failed                                                           | 
| 1094       | Points processing failed                                                           | 
| 1095       | Points processing failed                                                           | 
| 1096       | Points processing failed                                                           | 
| 1097       | Points processing failed                                                           | 
| 1098       | Points processing failed                                                           | 
| 1099       | Points processing failed                                                           | 
| 1101       | Invalid channel type                                                               | 
| 1102       | Invalid priority type                                                              | 
| 1103       | Invalid scope                                                                      | 
| 1104       | Invalid identifier or no identifier passed                                         | 
| 1105       | Multiple scopes are not allowed                                                    | 
| 1106       | Invalid subscription status passed                                                 | 
| 1107       | Invalid campaign id passed                                                         | 
| 1108       | Invalid outbox id passed                                                           | 
| 1109       | Unable to fetch subscription details                                               | 
| 1110       | Unable  to update subscription details                                             | 
| 1222       | Internal error occurred with the referral system                                  | 
| 1202       | Invalid campaign token                                                             | 
| 1203       | Invalid campaign configured                                                        | 
| 1204       | The customer may not be eligible for the referral program.                         | 
| 1205       | Unable to find the referrer in the specific campaign                               | 
| 1206       | Referral type is not supported                                                     | 
| 1222       | Internal error occurred with the referral system                                   | 
| 1301       | A ticket already exists with the same subject                                     | 
| 1302       | Ticket registration failed                                                         | 
| 1303       | Ticket subject should not be empty                                              | 


