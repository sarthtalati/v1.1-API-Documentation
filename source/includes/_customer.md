# Customer
A customer is an individual who either buys goods/services, or subscribes to the organization’s newsletters. An organization refers to a store, business firm, hospital or restaurant.

Based on the registration status, customers are categorized into three types:

* **Loyalty customers**: Customers who have registered into the organization’s loyalty program 
* **Non-loyalty customers**: Customers who have subscribed (mobile number or email id) to organization's newsletter to receive campaign/transaction messages but not enrolled into the organization’s loyalty program 
* **Not-interested or anonymous customers**: Customers who have neither enrolled in the loyalty program nor subscribed to the organization's newsletter 

The customer entity contains APIs related to registering customers into the loyalty program, managing loyalty accounts and updating subscription status of both registered and non-registered customers. It stores customer related information such as identifiers, profile details, custom field details, transactions, preferences, subscription details (mobile number/email id), tier details, points history and coupons history.

Customer APIs allow you to :

* Register customers into your organization’s loyalty program 
* Update loyalty customers' profile information
* Update primary or secondary identifiers (mobile no, email id, or external id)
* Retrieve customer details of loyalty and non-loyalty customers
* Capture complaints and feedback of loyalty customers
* Add, update and retrieve customer preferences of loyalty customers
* Retrieve transactions of loyalty/non-loyalty customers

## Register Customer

> Sample Request URL

```html
POST https://us.api.capillarytech.com/v1.1/customer/add?format=json
```

> Sample POST Request

```json

{
  "root": {
    "customer": [
      {
        "mobile": "44700900000",
        "email": "tom.sawyer@example.com",
        "external_id": "XYPZ001",
        "firstname": "Tom",
        "lastname": "Sawyer",
        "registered_on": "2012-09-11 11:11:11",
		"registered_till": "NorthEast",
		"associated_with":"two.till01",
        "extended_fields": {
          "field": [
            {
              "name": "gender",
              "value": "Male"
            },
            {
              "name": "city",
              "value": "Bangalore"
            },
            
            {
              "name": "dob",
              "value": "1998/12/01"
            }
          ]
        },
        "custom_fields": {
          "field": [
            {
              "name": "Hobbies",
              "value": "[“Playing”]"
            },
            {
              "name": "Favorite Color",
              "value": "Green"
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
        "registered_on": "2012-09-11 11:11:15",
		"extended_fields": {
          "field": [
            {
              "name": "gender",
              "value": "female"
            },
            {
              "name": "city",
              "value": "Bangalore"
            },
            
            {
              "name": "dob",
              "value": "1998/09/01"
            }
          ]
        },
		"subscriptions": {
          "subscription": [
            {
              "priority": "TRANS",
              "scope": "all",
              "is_subscribed": "0",
              "channel": "email"
            },
            {
              "priority": "BULK",
              "scope": "all",
              "is_subscribed": "0",
              "channel": "email"
            },
            {
              "priority": "TRANS",
              "scope": "all",
              "is_subscribed": "0",
              "channel": "sms"
            },
            {
              "priority": "BULK",
              "scope": "all",
              "is_subscribed": "0",
              "channel": "sms"
            }
          ]
        },
        "custom_fields": {
          "field": [
            {
              "name": "Hobbies",
              "value": "[“Singing”]>"
            },
            {
              "name": "Favorite Color",
              "value": "Blue"
            }
          ]
        }
      }
    ]
  }
}
```

```xml

<root>
	<customer>
		<mobile>44700900000</mobile>
		<email>tom.sawyer@example.com</email>
		<external_id>XYPZ001</external_id>
		<firstname>Tom</firstname>
		<lastname>Sawyer</lastname>
		<registered_till>NorthEast</registered_till>
		<registered_on>2012-09-11 11:11:11</registered_on>
		<extended_fields>
			<field>
				<name>gender</name>
				<value>male</value>
			</field>
			
			<field>
				<name>city</name>
				<value>Bangalore</value>
			</field>
			<field>
				<name>dob</name>
				<value>1998/09/01</value>
			</field>
		</extended_fields>
		<custom_fields>
			<field>
				<name>Hobbies</name>
				<value>[“Playing”]</value>
			</field>
			
		</custom_fields>
	</customer>
	<customer>
		<mobile>44700900999</mobile>
		<email>rita.john@example.com</email>
		<external_id>XYPZ006</external_id>
		<firstname>Rita</firstname>
		<lastname>John</lastname>
		<associated_with>two.till01</associated_with>
		<registered_on>2012-09-11 11:11:15</registered_on>
		<extended_fields>
			<field>
				<name>gender</name>
				<value>female</value>
			</field>
			
			<field>
				<name>city</name>
				<value>Bangalore</value>
			</field>
			<field>
				<name>dob</name>
				<value>1998/12/01</value>
			</field>
		</extended_fields>
		<subscriptions>
			<subscription>
				<priority>TRANS</priority>
				<scope>all</scope>
				<is_subscribed>0</is_subscribed>
				<channel>email</channel>
			</subscription>
			<subscription>
				<priority>BULK</priority>
				<scope>all</scope>
				<is_subscribed>0</is_subscribed>
				<channel>email</channel>
			</subscription>
			<subscription>
				<priority>TRANS</priority>
				<scope>all</scope>
				<is_subscribed>0</is_subscribed>
				<channel>sms</channel>
			</subscription>
			<subscription>
				<priority>BULK</priority>
				<scope>all</scope>
				<is_subscribed>0</is_subscribed>
				<channel>sms</channel>
			</subscription>
		</subscriptions>
		<custom_fields>
			<field>
				<name>Hobbies</name>
				<value>[“Singing”]&gt;</value>
			</field>
			<field>
				<name>a</name>
				<value>[“b”]</value>
			</field>
		</custom_fields>
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
      "customer": [
        {
          "user_id": "123",
          "mobile": "44700900000",
          "email": "tom.sawyer@example.com",
          "external_id": "XYPZ001",
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
          "registered_on": "2016-09-11 11:11:15",
          "extended_fields": {
            "field": [
              {
                "name": "color",
                "value": "black"
              },
              {
                "name": "ItemWeight",
                "value": "3"
              },
              {
                "name": "Status",
                "value": "pending"
              },
              { "name": "ser_tax" }
             
            ]
          },
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
			<registered_on>2012-09-11 11:11:11</registered_on>
			<extended_fields>
				<field>
					<name>gender</name>
					<value>male</value>
				</field>
				<field>
					<name>city</name>
					<value>Bangalore</value>
				</field>
				<field>
					<name>dob</name>
					<value>1998/09/01</value>
				</field>
				
			</extended_fields>
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
					<discount_code/>
					<discount_value/>
					<valid_till/>
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
			<registered_on>2016-09-11 11:11:15</registered_on>
			<extended_fields>
				<field>
					<name>gender</name>
					<value>Female</value>
				</field>
				<field>
					<name>city</name>
					<value>Bangalore</value>
				</field>
				<field>
					<name>dob</name>
					<value>1998/12/01</value>
				</field>
				
			</extended_fields>
			<item_status>
				<success>true</success>
				<code>1000</code>
				<message>Customer Registration Successful</message>
			</item_status>
			<side_effects>
				<effect />
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

Registers customers in the org’s loyalty program with the primary identifier (mobile number/email id/external id). 

Updates existing customer details (other than identifiers such as mobile number, email id, and external id) if you try registering an existing identifier. 

Behavior of the API when an existing identifier is passed.
* Updates existing customer details other than existing identifier(s) such as mobile number, email id, or external id.
* Updates null identifiers from null to a value, but not value to value. <i>Existing identifiers cannot be updated</i>.
* Updates secondary identifiers if the respective configuration is enabled on InTouch **Settings** > **Miscellaneous** > **Registration Configuration** page.
	* CONF_ALLOW_MOBILE_UPDATE (for mobile number).
	* CONF_ALLOW_EMAIL_UPDATE (for email id).
	* CONF_LOYALTY_ALLOW_EXTERNAL_ID_UPDATE (for external id).
* Adds/updates **custom field** details.
* Adds/updates **extended field** values.



### Resource Information
| | |
--------- | ----------- |
URI	| `/add`
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/add?format={xml/json}`



### Request Body Parameters

The mandatory attributes for customer registration depends on the configurations set on InTouch **Settings** > **Registration Configuration**. You need to know your org configurations before using this API.

Parameter | Datatype | Description
--------- | -------- | -----------
mobile** | long | Mobile number of the customer with country code.
email** | string | Email ID of the customer. 
external_id** | string | External ID of the customer if applicable for the org.
firstname | string | First name of the customer.
lastname | string | Last name of the customer.
type | enum | Type of registration. Values: LOYALTY (for loyalty customer), NON_LOYALTY (registered one or more identifiers but not enrolled in the loyalty program), NOT_INTERESTED (not interested to register identifiers or enrol in the loyalty program).
registered_on | date-time | Date on which the customer is registered. Format: YYYY-MM-DD HH:MM:SS, <br>Example: 2016-09-11 11:11:11 
registered_till | string | The TILL at which customer is registered.
custom_fields | obj | Provide the custom field values of the customer in name and value pairs. You can only pass custom fields that are configured for the org.
extended_fields | obj | Provide the extended field details of the customer in name and value pairs. You can only pass extended fields that are configured for the org.
subscriptions | obj | Provide the subscription details of the customer.
priority | enum | Type of message. Value: `TRANS` for personalized or transaction messages, `BULK` for promotional messages.
is_subscribed | enum | Value 0, 1
channel | enum | Current communication channel. Value: `sms`, `email`.


<aside class="notice">At least one among the parameters marked with ** is mandatory.</aside>


## Update Customer Details

> Sample Request URL


```html
POST https://api.capillary.co.in/v1.1/customer/update?format=json
```

> Sample POST Request

```json

{
  "root":{
    "customer":[
      {
        "mobile":"44700900000",
        "email":"tom.sawyer@example.com",
        "external_id":"ts1234",
        "firstname":"Tom",
        "lastname":"Sawyer",
		"registered_till":"NorthEast",
		"associated_with":"two.till01",
        "ndnc_status":"NDNC",
        "extended_fields": {
          "field":[
            {
              "name":"gender",
              "value":"male"
            },
            
            {
              "name":"Nationality",
              "value":"Indian"
            }
            
           
          ]
        },
        "custom_fields":{
          "field":[
            {
              "name":"age",
              "value":"[“46”]"
            }
          ]
        }
      }
    ]
  }
}
```

```xml

<?xml version="1.0" encoding="UTF-8"?>
<root>
   <customer>
      <mobile>44700900000</mobile>
      <email>tom.sawyer@example.com</email>
      <external_id>ts1234</external_id>
      <firstname>Tom</firstname>
      <lastname>Sawyer</lastname>
      <associated_with>two.till01</associated_with>
	  <ndnc_status>NDNC</ndnc_status> <! Possible Values: NDNC, INVALID, NONE >
      <extended_fields>
         <field>
            <name>gender</name>
            <value>Male</value>
         </field>
         <field>
            <name>nationality</name>
            <value>Indian</value>
         </field>
        
      </extended_fields>
      <custom_fields>
         <field>
            <name>age</name>
            <value>[“46”]</value>
         </field>
      </custom_fields>
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
        "user_id": "776538",
        "mobile": "44700900000",
        "email": "tom.sawyer@example.com",
        "external_id": "ts1234",
        "firstname": "Tom",
        "lastname": "Sawyer",
		"associated_with": "two.till01",
        "extended_fields": {
        "field": [
          {
            "name": "gender",
            "value": "male"
          },
          {
            "name": "nationality",
            "value": "Indian"
          }
          
        ]
      },
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
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <response>
      <customers>
         <customer>
            <current_slab>SILVER</current_slab>
            <custom_fields>
               <field>
                  <name>hobbies</name>
                  <value>[“Playing”]</value>
               </field>
            </custom_fields>
            <email>tom.sawyer@example.com</email>
            <extended_fields>
               <field>
                  <element>
                     <name>gender</name>
                     <value>Male</value>
                  </element>
                  <element>
                     <name>Nationality</name>
                     <value>Indian</value>
                  </element>
                  
               </field>
            </extended_fields>
            <external_id>ts1234</external_id>
            <firstname>Tom</firstname>
            <item_status>
               <code>1000</code>
               <message>User Successfully Updated.</message>
               <success>true</success>
            </item_status>
            <lastname>Sawyer</lastname>
			 <associated_with>two.till01</associated_with>
            <lifetime_points>245</lifetime_points>
            <lifetime_purchases>24500</lifetime_purchases>
            <loyalty_points>60</loyalty_points>
            <mobile>44700900000</mobile>
            <registered_on>2012-08-16 15:13:16</registered_on>
            <updated_on>2012-09-22 10:48:00</updated_on>
            <user_id>776538</user_id>
         </customer>
      </customers>
      <status>
         <code>200</code>
         <message>SUCCESS</message>
         <success>true</success>
      </status>
   </response>
</root>
```

Lets you update the details of an existing customer other than primary or secondary identifiers. If any of the identifiers you pass already exists for a different account, then the customer details will be merged automatically.

Behavior of the API:

* Updates existing customer details other than primary/secondary identifiers including custom fields and extended fields. 
* Updates secondary identifiers only with null values will be updated. Hence, <i>existing identifiers cannot be updated with this API</i>.

<aside class="notice">
You can update secondary identifiers (mobile no./email id./external id) only if the respective config mentioned in the following are enabled on InTouch **Settings** > **Miscellaneous** > **Registration Configuration**.

* CONF_ALLOW_MOBILE_UPDATE (for mobile number).
* CONF_ALLOW_EMAIL_UPDATE (for email id).
* CONF_LOYALTY_ALLOW_EXTERNAL_ID_UPDATE (for external id).

</aside>


### Resource Information
| | |
--------- | ----------- |
URI	| customer/update
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`https://{host}/v1.1/customer/update?format={xml/json}`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
Mobile/email/external_id/id* | string | Pass any one of the following identifiers of the customer whose details you want to update.
firstname | string | First name of the customer.
lastname | string | Last name of the customer.
registered_on | date-time | Date on which the customer is registered. Format: YYYY-MM-DD HH:MM:SS, <br>Example: 2016-09-11 11:11:11 
registered_till | string | The TILL at which customer is registered.
associated_with | string | Till code that you want to associate with the customer.
ndnc_status | enum | National Do not Call status of the customer.
custom_fields | obj | Provide the custom field values of the customer in name and value pairs. You can only pass custom fields that are configured for the org.
extended_fields | obj | Provide the extended field details of the customer in name and value pairs. You can only pass extended fields that are configured for the org.
subscriptions | obj | Provide the subscription details of the customer.
priority | enum | Type of message. Value: `TRANS` for personalized or transaction messages, `BULK` for promotional messages.
channel | enum | Current communication channel. Value: `sms`, `email`.


<aside class="notice">At least one among the parameters marked with ** is mandatory.</aside>



## Update Customer Identifiers

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/customer/update_identity?format=xml
```

> Sample POST Request

```json
{
   "root": {
      "customer": [
	  {
         "identifier": "mobile",
         "old_value": "44700900000",
		 "new_value": "44700900090"
      }
	  ]
   }
}
```


```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<customer>
		<identifier>mobile</identifier>  <!-- Pass mobile/email/external_id that you want to update -->
		<new_value>44700900090</new_value> 
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
<?xml version="1.0" encoding="UTF-8"?>
<response>
   <status>
      <success>true</success>
      <code>200</code>
      <message>SUCCESS</message>
   </status>
   <customers>
      <customer>
         <identifier>mobile</identifier>  <!--mobile/email/external_id--> 
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

Lets you submit request to update primary and secondary identifiers (mobile no./email id/external id) of a loyalty customer. Requests submitted through `customer/update_identity` will be in pending state by default. Capillary back-end team verifies the requests and process it accordingly.

### Resource Information
| | |
--------- | ----------- |
URI	| customer/update_identity
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`https://{host}/v1.1/customer/update_identity?format={xml/json}`

### Request Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifier* | enum | Pass the identifier name that you want to update. **Value**: mobile, email, external_id.
old_value* | string | Provide the existing value the identifier that you want to update.
new_value* | string | Provide the new value of the identifier.



## Search Customers (Advanced Search)

> Sample Request

```html
https://api.capillary.co.in/v1.1/customer/search?q=mobile:EQUALS:44700900000
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

                        "registered_by": "px.london.bondstreet",

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
<?xml version="1.0" encoding="UTF-8"?>
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


Lets you fetch customers based on partial or complete keywords passed. You can fetch customers by name, customer identifier, registered store id, registered date, loyalty points, lifetime points, lifetime purchases amount, current tier, transaction amount, and custom field values.


<aside class="notice">
If customer details are not found, then customer data is not retrieved. However, currently, `customer not found error` is not shown in V1.1. 
As there are no integrations built on V1.1 `customer/search`, it is recommended to use <a href="https://capillary.github.io/api-documentation/#fetch-customers-advanced-customer-search"> V2.0 customer/Search </a> API to see proper response status.
</aside>


<aside class="notice">
<b>Error Code: 461</b> <br>

This represents timeout error when you try to fetch customers with all the three identifiers - mobile, email, and external id - and Solr DB times out.
<br>
This is because, when you make an API call, Solr DB is queried firstly. If Solr times out, MySQL is searched, but MySQL does not support search on multiple identifiers.
</aside>

### Resource Information
| | |
--------- | ----------- |
URI	| `/search?q={param}:{Query}:{value}&format={xml/json}
Authentication | Yes
HTTP Method | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/search?q={param}:{Operator}:{value}&format={xml/json}`

### Request Query Parameters
You need to understand Query Grammar to learn how to use input parameters for customer/search API. For more details, see the Query Grammar section.

Parameter | Description
--------- | -----------
firstname* | Retrieves the list of customers whose first name matches with the string passed. <br>**Query**: `firstname:EXACT:<first name>`
lastname* | Retrieves the list of customers whose last name matches with the string passed.<br>
																				<br>**Query**: `lastname:EXACT:<last Name>`
org_id* | Retrieves the list of entire customers of the respective organization. <br>**Query**: `org_id:EQUALS:<org id>`
mobile* | Retrieves customers whose registered mobile numbers matches with the string passed. <br>**Query**: `mobile:EQUALS:<mobile number>`
email* | Retrieves the list of registered customers whose email id matches with the string passed. <br>**Query**: `email:EQUALS:<email id>`
external_id | Retrieves customers whose external id matches with the string passed. <br>**Query**: `external_id:EQUALS:<external id>`
registered_date | Retrieves customers whose registered date matches the specified date.
loyalty_points | Retrieves the list of customers whose active loyalty points matches the specified query. <br>**Query**: `loyalty_points:GREATER:<loyalty points>`
lifetime_points | Retrieves the list of customers whose lifetime points matches the specified query. <br>**Query**: `lifetime_points:GREATER:<lifetime points>`
lifetime_purchases | Retrieves the list of customers whose lifetime purchases amount matches the specified query. **Query**: `lifetime_purchases:GREATER:<lifetime purchases>`
slab | Retrieves the list of customers whose current loyalty tier matches the specified value. <br>**Query**: `slab:EQUALS:<Slab name>`
registered_store | Retrieves the list of customers who are registered at a specific store. <br>**Query**: `registered_store:EQUALS:<Store id>`
last_trans_value | Retrieves the list of customers whose transaction amount matches the specified query. <br>**Query**: `transaction_value:GREATER:<transaction amount>`
Custom fields | Retrieves the list of customers whose custom field values matches the specified value. <br>**Query**: `<Field Name>:<Field Value>`
Operator | enum | Predefined conditions based on which you want to fetch results. Values: STARTS, ENDS, EXACT, RANGE, LESS, GREATER, EQUALS, IN. For more details, see the following section, Search Query Grammar.

### Search Query Grammar
The following is a formal definition of the Query Grammar

**QUERY**: `(CONDITION) | (CONDITION & (CONDITION)*)`

**CONDITION**: `ATTRIBUTE:OPERATOR:VALUES`

**ATTRIBUTE**: Set of inventory/customer attributes that are searchable.

**Dynamic List**
* **OPERATOR**: STARTS, ENDS, EXACT, RANGE, LESS, GREATER, EQUALS, IN
* **VALUES**: ALPHANUMERIC | ALPHANUMERIC;ALPHANUMERIC(for RANGE, IN OPERATOR, separator is ';' )








## Get Customer Details
```html
# Sample Request URL
https://api.capillary.co.in/v1.1/customer/get?mobile=919889999999&mlp=true
```

> Sample Response

```json
{
   "status": {
      "success": "true",
      "code": "200",
      "message": "Success",
      "total": "1",
      "success_count": "1"
   },
   "customers": {
      "customer": {
         "firstname": "Tom",
         "lastname": "Sawyer",
         "mobile": "91900000000",
         "email": "tom.sawyer@example.com",
         "external_id": "TS123",
         "lifetime_points": "2300",
         "lifetime_purchases": "25000",
         "loyalty_points": "500",
         "current_slab": "Silver",
         "registered_on": "2017-05-31 14:57:04",
         "updated_on": "2018-05-31 14:57:04",
         "type": "LOYALTY",
         "source": "instore",
         "identifiers": [],
         "gender": "Male",
         "registered_by": "Jim",
         "registered_store": {
            "code": "autotest2_one",
            "name": "autotest2_one"
         },
         "registered_till": {
            "code": "one.till01",
            "name": "one.till01"
         },
         "fraud_details": {
            "status": "NONE",
            "marked_by": [],
            "modified_on": []
         },
         "trackers": [],
         "current_nps_status": [],
         "custom_fields": {
            "field": {
               "name": "gender",
               "value": "value_308645"
            }
         },
         "extended_fields": {
            "field": []
         },
         "transactions": {
            "transaction": []
         },
         "coupons": [
            {
               "id": "44521519",
               "series_id": "19293",
               "code": "4OZ1UDDA",
               "description": "API Coupon 3",
               "created_date": "2018-05-31 14:57:06",
               "valid_till": "2018-06-30 23:59:59",
               "redeemed": "true"
            },
            {
               "id": "44521520",
               "series_id": "19290",
               "code": "ZBW1S4QT",
               "description": "API Series",
               "created_date": "2018-05-31 14:57:07",
               "valid_till": "2018-06-01 23:59:59",
               "redeemed": "false"
            }
         ],
         "notes": [],
         "item_status": {
            "success": "true",
            "code": "1000",
            "message": "Customer successfully retrieved",
            "warnings": []
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
      <total>1</total>
      <success_count>1</success_count>
   </status>
   <customers>
      <customer>
         <firstname>Tom</firstname>
         <lastname>Sawyer</lastname>
         <mobile>91900000000</mobile>
         <email>tom.sawyer@example.com</email>
         <external_id>TS123</external_id>
         <lifetime_points>2300</lifetime_points>
         <lifetime_purchases>25000</lifetime_purchases>
         <loyalty_points>500</loyalty_points>
         <current_slab>Silver</current_slab>
         <registered_on>2017-05-31 14:57:04</registered_on>
         <updated_on>2018-05-31 14:57:04</updated_on>
         <type>LOYALTY</type>
         <source>instore</source>
         <identifiers />
         <gender>Male</gender>
         <registered_by>Jim</registered_by>
         <registered_store>
            <code>autotest2_one</code>
            <name>autotest2_one</name>
         </registered_store>
         <registered_till>
            <code>one.till01</code>
            <name>one.till01</name>
         </registered_till>
         <fraud_details>
            <status>NONE</status>
            <marked_by />
            <modified_on />
         </fraud_details>
         <trackers />
         <current_nps_status />
         <custom_fields>
            <field>
               <name>gender</name>
               <value>value_308645</value>
            </field>
         </custom_fields>
         <extended_fields>
            <field />
         </extended_fields>
         <transactions>
            <transaction />
         </transactions>
         <coupons>
            <coupon>
               <id>44521519</id>
               <series_id>19293</series_id>
               <code>4OZ1UDDA</code>
               <description>API Coupon 3</description>
               <created_date>2018-05-31 14:57:06</created_date>
               <valid_till>2018-06-30 23:59:59</valid_till>
               <redeemed>true</redeemed>
            </coupon>
            <coupon>
               <id>44521520</id>
               <series_id>19290</series_id>
               <code>ZBW1S4QT</code>
               <description>API Series</description>
               <created_date>2018-05-31 14:57:07</created_date>
               <valid_till>2018-06-01 23:59:59</valid_till>
               <redeemed>false</redeemed>
            </coupon>
         </coupons>
         <notes />
         <item_status>
            <success>true</success>
            <code>1000</code>
            <message>Customer successfully retrieved</message>
            <warnings />
         </item_status>
      </customer>
   </customers>
</response>
```

Retrieve details of a specific loyalty customer such as loyalty information, subscription status, 10 recent transactions, active coupons, recent store interactions, custom fields, extended fields, and customer's unique id.

### Resource Information
| | |
--------- | ----------- |
URI | `/get`
Authentication |  Yes
HTTP Methods | GET
Batch Support | Yes


### Request URL
`https://api.capillary.co.in/v1.1/customer/get?{identifier_type}={identifier_value}&mlp=true&format={xml/json}`


### Additional Header

Header | Description
------ | -----------
language | Specify the ISO language code to get customer level extended field details in your preferred language (other than English). For example, `zh` for Chinese, `id` for Indonesian, `ar` for Arabic.



### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | ----------- 
Identifier* | string | Pass any identifier (mobile/email/external_id/id) of the customer whose details needs to be retrieved. <br> For example, mobile=44700900000. To retrieve details of multiple customers at a time, pass each value separating with comma (,) For example,  `mobile=44700900000,44700900999,4470090345`.
coupon_limit | int | Limits the number of coupon interactions (issued,redeemed and expired). Example: coupon_limit=5 retrieves five recent coupon interactions.
coupon_offset | int | Retrieves next set of coupons according to issual sequence. For example, if 10 coupons are issued to a customer till date, then coupon_offset=6, returns the 7th, 8th, 9th, and 10th coupon (ignoring the first 6 coupons).
coupon_order_by | date-time | Orders the coupon history by created date (descending order of created date), created by (ascending order of till name), or coupon validity (valid till: ascending order of expiry). Values: created_date, created_by, valid_till respectively.
user_id=true | - | Returns the unique id of the customer (generated at our end when the customer is registered).
next_slab=true | - | Returns the details of next tier of the  loyalty customer.
slab_history=true | - | Returns the details of loyalty tier changes of the customer.
registered_store | string | Returns the store at which the customer is registered. This is returned by default.
registered_till | string | Returns the store-TILL at which the customer is registered. This is returned by default. 
fraud_details=true | - | Returns the fraud details of a customer. This field is returned by default.
ndsc_status=true | - | Returns the status of the customer's registered mobile number on NDSC/DND.
optin_status=true | - | Returns the services (SMS/email) to which the customer has opted in and opted out.
expiry_schedule=true | - | Returns the details of points expiry summary.
expired_points=true | - | Returns the details of expired points of the customer.
points_summary=true | - | Returns the history of points issued and redeemed.
promotion_points=true | - | Returns the history of promotional points issued and redeemed. It also shows the store that issued the points and expiry date for each set of points issued.
membership_retention_criteria=true | - | Returns the criteria set for membership retention (for membership based loyalty program).
mlp=true | - | Retrieves the details of each loyalty program of the customer if the org has multiple loyalty programs (multi-brand loyalty).
user_group=true | - | Retrieves the details of user group associated to the user (if available).

<aside class="notice">Parameter marked with * is mandatory. </aside>




## Get Customer Transactions

> Sample Request

```html
https://api.capillary.co.in/v1.1/customer/transactions?format=json&mobile=44700900000&start_date=2016-12-21+23:45:45&end_date=2016-12-29+12:11:45
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
<?xml version="1.0" encoding="UTF-8"?>
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
                <store />
                <points>
                    <issued>30</issued>
                    <redeemed>20</redeemed>
                </points>
                <coupons />
                <basket_size>10</basket_size>
                <line_items>
                    <line_item />
                </line_items>
            </transaction>
        </transactions>
    </customer>
</response>
```

Retrieves transaction history of a customer which includes the following information.

Transaction type, gross transaction amount, transaction date, points issued, points redeemed, coupons redeemed and so on. 

You can filter the results for better understanding and sort the information in ascending or descending order.

<aside class="notice">You cannot retrieve individual line-item level details of a transaction.</aside>

You can filter results using various parameters to analyze the data that you want to see and hide that you don’t want to see. For more details on supported filters, see the ***Request Parameters*** table below.

### Resource Information
| | |
--------- | ----------- |
URI | `/transactions`
Authentication | Yes
HTTP Method | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/transactions?format={xml/json}&<input_params>`

For MLP

`https://{host}/v1.1/customer/transactions?<customer identifier>=<value>&mlp=true`

### Request Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
Customer Identifier* | string | Provide the primary identifier of the customer to fetch the transaction details - mobile/email/external_id/id <br>To retrieve transactions of multiple customers at a time, provide each identifier separating by a comma. <br>**Example**: `mobile=44700900000,44700900999,4470090345`
start_date | date-time | Retrieves transactions made in a specific duration (start_date to end_date).
end_date | date-time | Retrieves transactions made in a specific duration (start_date to end_date). <br>Example: `start_date=2013-12-21+23:45:45&end_date=2013-12-29+12:11:45`
transaction_date | date | Filter transactions by transaction date. Pass the date in `YYYY-MM-DD` format.
amount | int | Fetch transaction details by transaction amount.
number | string | Fetch transaction details by transaction number.
transaction_id | int | Fetch details of a transaction by transaction ID (internally generated unique ID for a transaction).
till_id | string | Filter transactions by associated TILL ID.
till_name | string | Filter transactions associated to a specific TILL name.
till_code | string | Filter transactions associated to a TILL code.
store_id | string | Filter transactions associated to a specific store id.
store_name | string | Filter transactions associated to a specific store name.
store_code | string | Filter transactions associated to a specific store code.
start_id | int | Filter transactions by transaction ids starting with a specific value.
end_id | int | Filter transactions by transaction ids ending with a specific value.
credit_notes | boolean | Retrieves the credit notes of the transactions. **Value**: true,false. Pass the parameter to retrieve credit notes along with the transaction details.<br> Credit Notes is a receipt given by a cashier to a customer for returned goods which can be used for future purchases.
custom_fields | boolean | Pass `true` to retrieve transaction level custom field details.
limit | int | Limit the number of results to be displayed. For example, if `limit=10` a maximum of 10 transactions will be displayed.
sort | enum | Arranges the transactions by transaction date or transaction id based on the `order` value passed. Supported value: `trans_id`, `trans_date`. By default, results are shown in descending order.
order | enum | Arranges the transactions based on the value set in `sort` in ascending or descending order. **Value**: asc, desc. By default, transactions are displayed in descending order of transaction date/id.


## Retrieve Customer Redemptions

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/customer/redemptions?mobile=44700900000
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
      "mobile": "44700900000",
      "email": "tom.sawyer@example.com",
      "external_id": "1234",
      "firstname": "Tom",
      "lastname": "Sawyer",
      "rows": "3",
      "coupons_count": "3",
      "points_count": "15",
      "coupons_start_id": "2",
      "points_start_id": "121613",
      "redemptions": {
        "coupons": {
          "coupon": {
            "id": "3",
            "code": "832-pghhi6u1",
            "series_id": "832",
            "description": "Sample description",
            "discount_code": "abc",
            "discount_type": "PERC",
            "transaction_number": "TestBill-1234",
            "redeemed_time": "2013-04-18 14:00:27",
            "redeemed_at": "Test store  store.server"
          }
        },
        "points": {
          "point": [
            {
              "id": 121614,
			  "program_id": 1234,
              "points_redeemed": 200,
              "transaction_number": "bill-83",
              "redeemed_time": "2011-03-17 16:03:31",
              "redeemed_at": "Test store  store.server"
            },
            {
              "id": 121656,
			  "program_id": 1234,
              "points_redeemed": 30,
              "transaction_number": "bill-121",
              "redeemed_time": "2011-03-17 16:05:22",
              "redeemed_at": "Test store  store.server"
            }
          ]
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
      <message>SUCCESS</message>
   </status>
   <customer>
      <mobile>44700900000</mobile>
      <email>tom.sawyer@example.com</email>
      <external_id>1234</external_id>
      <firstname>Tom</firstname>
      <lastname>Sawyer</lastname>
      <rows>3</rows>
      <coupons_count>3</coupons_count>
      <points_count>15</points_count>
      <coupons_start_id>2</coupons_start_id>
      <points_start_id>121613</points_start_id>
      <redemptions>
         <coupons>
            <coupon>
               <id>3</id>
               <code>832-pghhi6u1</code>
               <series_id>832</series_id>
               <description>Sample description</description>
               <discount_code>abc</discount_code>
               <discount_type>PERC</discount_type>
               <transaction_number>TestBill-1234</transaction_number>
               <redeemed_time>2013-04-18 14:00:27</redeemed_time>
               <redeemed_at>Test store  store.server</redeemed_at>
            </coupon>
         </coupons>
         <points>
            <point>
               <id>121614</id>
               <points_redeemed>200</points_redeemed>
               <transaction_number>bill-83</transaction_number>
               <redeemed_time>2011-03-17 16:03:31</redeemed_time>
               <redeemed_at>Test store  store.server</redeemed_at>
            </point>
            <point>
               <id>121615</id>
               <points_redeemed>200</points_redeemed>
               <transaction_number>bill-121</transaction_number>
               <redeemed_time>2011-03-17 16:05:22</redeemed_time>
               <redeemed_at>Test store  store.server</redeemed_at>
            </point>
         </points>
      </redemptions>
   </customer>
</response>
```


This API allows you to retrieve points and coupons redemption history of a customer. You can filter the results by type, duration, coupon ids start with, and coupon ids end with. Besides filters you can also sort the results by ascending or descending order by redemption id/time and limit number of results to retrieve.

### Resource Information
| | |
--------- | ----------- |
URI | `/redemptions`
Authentication | Yes
HTTP Method | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/redemptions?{query_params}`

### Request Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
Customer Identifier* | string | Provide the primary identifier of the customer whose redemption details needs to be fetched - mobile no./email id/external id. <br>To retrieve redemption details of multiple customers at a time, provide the identifier of each customer separating by a comma. <br>**Example**: `mobile=44700900000,44700900999,4470090345`
type | enum | Filter the results either by `points` redemption or `coupons` redemption.
start_date | date | Get redemptions done on or after a specific date (`YYYY-MM-DD`). To get redemptions made in a specific duration, pass the date range in `start_date` and `end_date`.
end_date | date | Get redemptions made before a specific date (`YYYY-MM-DD`). To get redemptions made in a specific duration, pass the date range in `start_date` and `end_date`.
coupons_limit | int | Limit the number of coupon redemptions to be displayed. Example:`coupons_limit=10` to show only 10 coupon redemption details. Use only when the `type` parameter is not passed.
points_limit | int | Limit the number of points redemption results to be displayed. Example:`points_limit=10` to show only 10 points redemption details. Use only when the `type` parameter is not passed.
limit | int | Limit the number of redemption details (points and/or coupons). Use only when the `type` parameter is not passed.
coupons_start_id | int | Filter the results by coupon redemption id starting with a specific number. Use only when the `type` parameter is not passed.
coupons_end_id | int | Filter the results by coupon redemption id ending with a specific number. Use only when the `type` parameter is not passed.
points_start_id | int | Filter the results by points redemption id starting with a specific number. Use only when the `type` parameter is not passed.
points_end_id | int | Filter the results by points redemption id ending with a specific number. Use only when the `type` parameter is not passed.
sort | enum | Sort the results either by redemption id (`redemption_id`) or redemption time(`redeemed_time`). By default, the results are sorted in the descending order of redeemed time.
order | enum | Order the results in ascending (`asc`) or descending order (`desc`). By default, the results are shown in the descending order of redeemed time.
mlp=true | - | Retrieves the details of points redeemed from each loyalty program of the org (only for orgs with multi-brand loyalty).
format | enum | Pass the desired representation of response content - `format=xml`, or `format=json`. 




## Add Customer Notes

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/customer/notes?format=json
```

> Sample POST Request

```json
{
  "root":{
    "customer":[
      {
        "user_id":"15",
        "mobile":"44700900999",
        "email":"catherine@example.com",
        "external_id":"ct123",
        "notes":{
          "note":[
            {
              "date":"2016-05-05 15:15:00",
              "description":"Likes Maggi"
            }
          ]
        }
      }
    ]
  }
}

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <customer>
        <user_id>15</user_id>
        <mobile>44700900999</mobile>
        <email>catherine@example.com</email>
        <external_id>ct123</external_id>
        <notes>
            <note>
			    
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
      "notes": {
        "note": {
		  "id":"1",
          "date": "2012-05-05 15:15:00",
          "description": "Likes Maggi"
        }
      },
      "item_status": {
        "success": true,
        "code": 1000,
        "message": "Customer note added/updated successfully",
        "warnings": {
			"warning": []
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
        <message>Operation Successful</message>
    </status>
    <customer>
        <user_id>15098</user_id>
        <firstname>catherine</firstname>
        <lastname>Thomas</lastname>
        <mobile>44700900999</mobile>
        <email>catherine@example.com</email>
        <external_id>ct123</external_id>
        <notes>
            <note>
			   <id>1</id>
                <date>2012-05-05 15:15:00</date>
                <description>Likes Maggi</description>
            </note>
        </notes>
        <item_status>
			<success>true</success>
			<code>1000</code>
			<message>Customer note added successfully</message>
			<warnings/>
        </item_status>
    </customer>
</response>
```

This API allows you to capture additional information about the customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/notes`
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`https://{host}/v1.1/customer/notes?format=xml/json`

### Request Parameters
Parameter | Description
--------- | -----------
Customer identifier* | string | Pass any of the unique identifiers of the customer for whom you want to add notes (mobile no/email id/external id/user_id)
date | date | Date that you associate to the notes. By default, current date will be considered.
description* | Details or message of the note in a plain text format



## Update Customer Notes
```html
https://us.api.capillarytech.com/v1.1/customer/notes?format=json
```

> Sample POST Request

```json
{
  "root": {
    "customer": {
      "mobile": "44700900999",
      "email": "catherine@example.com",
      "associate_id": "50010823",
      "notes": {
        "note": [
          {
            "id": "8378",
            "description": "Likes jeans"
          },
          {
            "id": "8379",
            "description": "Likes new arrivals"
          }
        ]
      }
    }

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <customer>
       <mobile>44700900999</mobile>
       <email>catherine@example.com</email>
       <associate_id>50010823</associate_id>
       <notes>
           <note>
               <id>8378</id>
               <description>Likes Jeans</description>
           </note>
           <note>
               <id>8379</id>
               <description>Likes new arrivals</description>
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
      "message": "Success",
      "total": "1",
      "success_count": "1"
    },
    "customer": {
      "user_id": "29361138",
      "firstname": "Catherine",
      "lastname": "Thomas",
      "mobile": "44700900999",
      "email": "catherine@example.com",
      "external_id": "ext12",
      "notes": {
        "note": [
          {
            "id": "8378",
            "date": "2017-11-05 15:15:00",
            "description": "Likes jeans"
          },
          {
            "id": "8379",
            "date": "2017-10-05 15:15:00",
            "description": "Likes new arrivals"
          }
        ]
      },
      "item_status": {
        "success": "true",
        "code": "1000",
        "message": "Customer note updated successfully"
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
       <total>1</total>
       <success_count>1</success_count>
   </status>
   <customer>
       <user_id>29361138</user_id>
       <firstname>Catherine</firstname>
       <lastname>Thomas</lastname>
       <mobile>44700900999</mobile>
       <email>catherine@example.com</email>
       <external_id>ext12</external_id>
       <notes>
           <note>
               <id>8378</id>
               <description>Likes jeans</description>
           </note>
           <note>
               <id>8379</id>
               <description>Likes new arrivals</description>
           </note>
       </notes>
       <item_status>
           <success>true</success>
           <code>1000</code>
           <message>Customer note updated successfully</message>
           <warnings/>
       </item_status>
   </customer>
</response>
```

This API lets you update existing customer notes.

### Resource Information
| | |
--------- | ----------- |
URI | `customer/notes`
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`https://{host}/v1.1/customer/notes?format=xml/json`

### Request Attributes
Parameter | Description
--------- | -----------
Customer identifier* | Unique identifier of the customer for which you want to update customer notes (mobile no/email id/external id/user_id).
description* | New notes that you want to update with (plain text).
id* | Unique id of the customer note that you want to update.




## Retrieve Customer Notes 

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/customer/notes?mobile=44700900999
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
		    "id":"1",
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
        "message": "Customer note retrieved successfully"
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
            <message>Customer note retrieved successfully</message>
			<warnings/>
        </item_status>
    </customer>
</response>

```

Retrieves notes of a specific customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/notes`
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL
`https://{host}/v1.1/customer/notes?{identifier}={value}`

### Request Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
identifier* | enum | Identifier you want to use to identify the customer. Value: `mobile`, `email`, `external_id`, `id`.
value* | string | Value of the specified identifier. For example, if `identifier` is `mobile`, value should be the customer's mobile number.

<aside class="notice">Parameters marked with * are mandatory.</aside>

## Retrieve Customer Coupons

> Sample Request


```html
https://api.capillary.co.in/v1.1/customer/coupons?format=json&mobile=44700900990
```

```json

{
   "response":{
      "pagination":{
         "limit":"100",
         "offset":"0",
         "total":1
      },
      "status":{
         "success":"true",
         "code":"200",
         "message":"SUCCESS"
      },
      "customers":{
         "customer":{
            "firstname":"John",
            "lastname":"Doe",
            "email":"johndoe@example.com",
            "mobile":"44700900999",
            "external_id":"EXT001",
            "id":"1034",
            "coupons":{
               "coupon":{
                  "id":"2423525",
                  "redemption_count":"1",
                  "created_date":"2013-12-13T16:14:54+05:30",
                  "valid_till":"2016-12-21",
                  "code":"VOCU24902",
                  "transaction_number":"BILL-10304",
                  "redemptions":{
                     "redemption":{
                        "date":"2016-12-12 12:12:12",
                        "transaction_number":"BIL2042040",
                        "redeemed_at":{
                           "code":"storecode",
                           "name":"My store"
                        }
                     }
                  }
               }
            },
            "item_status":{
               "success":"true",
               "code":"1000",
               "message":"Issued coupons retrieved successfully"
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
      <customers>
         <customer>
            <coupons>
               <coupon>
                  <code>VOCU24902</code>
                  <created_date>2013-12-13T16:14:54+05:30</created_date>
                  <id>2423525</id>
                  <redemption_count>1</redemption_count>
                  <redemptions>
                     <redemption>
                        <date>2016-12-12 12:12:12</date>
                        <redeemed_at>
                           <code>storecode</code>
                           <name>My store</name>
                        </redeemed_at>
                        <transaction_number>BIL2042040</transaction_number>
                     </redemption>
                  </redemptions>
                  <transaction_number>BILL-10304</transaction_number>
                  <valid_till>2016-12-21</valid_till>
               </coupon>
            </coupons>
            <email>johndoe@example.com</email>
            <external_id>EXT001</external_id>
            <firstname>John</firstname>
            <id>1034</id>
            <item_status>
               <code>1000</code>
               <message>Issued coupons retrieved successfully</message>
               <success>true</success>
            </item_status>
            <lastname>Doe</lastname>
            <mobile>44700900999</mobile>
         </customer>
      </customers>
      <pagination>
         <limit>100</limit>
         <offset>0</offset>
         <total>1</total>
      </pagination>
      <status>
         <code>200</code>
         <message>SUCCESS</message>
         <success>true</success>
      </status>
   </response>
</root>


	
```

Retrieves the details of coupons of a specific customer - both issued and redeemed.

### Resource Information
| | |
--------- | ----------- |
URI | `/coupons`
Authentication | Yes
HTTP Method | GET
Batch Support | No

### Request URL
`https://{host}/v1.1/customer/coupons?{identifier}={value}&{input_params}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
identifier* | enum | Identifier you want to use to identify the customer. Value: `mobile`, `email`, `external_id`, `id`.
value* | string | Value of the specified identifier. For example, if `identifier` is `mobile`, value should be the customer's mobile number.
start_date | date | Get coupons issued or redeemed on or after a specific date (`YYYY-MM-DD`). To get coupon history of a specific duration, pass the date range in `start_date` and `end_date`.
end_date | date | Get coupons issued or redeemed before a specific date (`YYYY-MM-DD`). To get coupon history of a specific duration, pass the date range in `start_date` and `end_date`.
status | enum | Retrieve coupons by coupon status. <br>**Values**: `redeemed`, `expired`, `active`. <br>You can also pass more than one status separating each with ; (semi-colon). for example, `status=redeemed;expired`.
series_id | int | Retrieve details of a specific coupon series by series id.
store_id | int | Retrieves the details of active coupons of the customer that can be redeemed at a specific store
order_by | enum | Order the results by a specific entry. Value: `created_date, `amount`, `valid_till` (issued till).
sort_order | enum | Sort the results in ascending (`asc`) or descending (`desc`) order.
limit | int | Limit the number of results to be retrieved. For example: limit=10 to retrieve the history of ten recent coupons of the customer.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Create Ticket

> Sample Request


```html
https://us.api.capillarytech.com/v1.1/customer/tickets?format=json
```

> Sample POST Request

```json
{
  "root":{
    "customer":[
      {
        "email":"johndoe@example.com",
        "mobile":"44700900999",
        "external_id":"EXT001",
        "id":"1034",
        "ticket":[{
          "status":"OPEN",
          "priority":"HIGH",
          "department":"INTERNAL",
          "subject":"points issue",
          "message":"Unable to redeem points",
          "custom_fields":{
            "field":[
              {
                "name":"field1",
                "value":"value1"
              }
            ]
          }
        }
		]
      }
    ]
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


<?xml version="1.0" encoding="UTF-8"?>
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

Lets you to create a new ticket for a customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/tickets`
Authentication | Yes
HTTP Method | POST
Batch Support | No

### Request URL
`https://{host}/v1.1/customer/tickets

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
Customer identifier* | string | Pass any one identifiers of the customer - mobile, email, external_id, or id (user_id).
status | enum | Status of the ticket. Accepts only values configured for the org. Sample values: Open, Close, InProgress. 
priority | enum | Priority of the ticket. Value: `low`, `medium`, `high`.
department | string | Set the department for which the ticket needs to be assigned
ticket_code | string | Pass the ticket id.
reported_from | enum | Source from which the ticket is created. Values: `EMAIL`, `INTOUCH`, `CALLCENTER`, `CLIENT`, `MICROSITE`, `SOCIAL`.
type | enum | Type of the ticket. Value: `STORE`, `Customer`.


## Retrieve Ticket Details
```html
# Sample Request
https://us.api.capillarytech.com/v1.1/customer/tickets
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


<?xml version="1.0" encoding="UTF-8"?>
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
| | |
--------- | ----------- |
URI | `/tickets`
Authentication | Yes
HTTP Method | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/tickets?{identifier}={value}&{input_params}&format={xml/json}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
Customer identifier* | enum | Pass any of the customer identifiers to retrieve ticket details. Values: mobile, email, external_id, id.
value | string | Pass the respective identifier value.
status | enum | Filter tickets by status. Pass only from statuses that are defined for your org.
priority | enum |  Filter results by ticket priority. <br>Value: `low`, `medium`, `high`. Pass only priorities that are defined for your org.
department | string | Retrieve tickets assigned to a specific department. Pass only predefined departments of your org.
ticket_code | string | Retrieve details of a specific ticket
reported_from | enum | Retrieve tickets of a specific source. <br> Values: `EMAIL`, `INTOUCH`, `CALLCENTER`, `CLIENT`, `MICROSITE`, `SOCIAL`.
type | enum | Retrieve tickets by type. <br>Value: `STORE`, `Customer`.
start_date | Retrieve tickets created on or after in a specific date (`YYYY-MM-DD`).  To get tickets created in a specific date range, pass the duration in `start_date` and `end_date`.
end_date | date | Retrieve tickets created after a specific date (`YYYY-MM-DD`) - between start_date to end_date. To get tickets created in a specific date range, pass the duration in `start_date` and `end_date`.


## Refer Customer

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/customer/referrals
```

> Sample POST Request

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <customer>
      <!-- Any one identifier is required -->
      <email />
      <mobile>9174116390xx</mobile>
      <id />
      <external_id />
      <referrals>
         <!-- If no campaign id passed, default campaign is considered -->
         <campaign_token>12511</campaign_token>
         <referral_type>
            <type>EMAIL</type>
            <referral>
               <id>1</id>
               <name>Dexter Morgan</name>
               <identifier>dexter.morgan@mpd.com</identifier>
               <invited_on>20160912T15:
19:21+05:30</invited_on>
            </referral>
            <referral>
               <id>2</id>
               <name>Debra Morgan</name>
               <identifier>debra.morgan@elwaydetectives.com</identifier>
               <invited_on>20130912T15:
19:21+05:30</invited_on>
            </referral>
            <referral>
               <id>3</id>
               <name>Eddard ‘Ned’ Stark</name>
               <identifier>eddard.stark@winterfell.com</identifier>
               <invited_on>2016-09-12 T15:19:21+05:30</invited_on>
            </referral>
         </referral_type>
      </referrals>
   </customer>
</root>
```

```json

{
  "root":{
    "customer":[
      {
        "mobile":"9174116390xx",
        "referrals":{
          "campaign_token":"12511",
          "referral_type":{
            "type":"EMAIL",
            "referral":[
              {
                "id":"1",
                "name":"Dexter Morgan",
                "identifier":"dexter.morgan@mpd.com",
                "invited_on":"20160912T15:19:21+05:30"
              },
              {
                "id":"2",
                "name":"Debra Morgan",
                "identifier":"debra.morgan@elwaydetectives.com",
                "invited_on":"20160912T15:19:21+05:30"
              },
              {
                "id":"3",
                "name":"Eddard ‘Ned’ Stark",
                "identifier":"eddard.stark@winterfell.com",
                "invited_on":"2016-09-12 T15:19:21+05:30"
              }
            ]
          }
        }
      }
    ]
  }
}

```

> Sample Response

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "success"
    },
    "customers": {
      "customer": {
        "email": "tom.sawyer@example.com",
        "mobile": "9197407983xx",
        "external_id": "VIMAL004",
        "id": "4596849",
        "firstname": "Vimal",
        "lastname": "Sudhan",
        "referrals": {
          "referral_type": [
            {
              "type": "EMAIL",
              "referral": [
                {
                  "id": "1",
                  "name": "Dexter Morgan",
                  "identifier": "dexter.morgan@mpd.com",
                  "invited_on": "2016-09-12T15:19:21+05:30",
                  "status": {
                    "success": "true",
                    "code": "100",
                    "message": "Invitee added
 successfully"
                  }
                },
                {
                  "id": "2",
                  "name": "Debra Morgan",
                  "identifier": "debra.morgan@elwaydetectives.com",
                  "invited_on": "2013-09-12T15:19:21+05:30",
                  "status": {
                    "success": "true",
                    "code": "100",
                    "message": "Invitee added
 successfully"
                  }
                }
              ]
            },
            {
              "type": "MOBILE",
              "referral": [
                {
                  "id": "4",
                  "name": "Arya Stark",
                  "identifier": "919911223xx",
                  "invited_on": "2016-09-12T15:19:21+05:30",
                  "status": {
                    "success": "true",
                    "code": "100",
                    "message": "Invitee added
 successfully"
                  }
                },

                {
                  "id": "10",
                  "name": "Walt Jr",
                  "identifier": "919876543211",
                  "invited_on": " 2016-09-12T15:19:21+05:30",
                  "status": {
                    "success": "true",
                    "code": "100",
                    "message": "Invitee added
 successfully"
                  }
                }
              ]
            }
          ]
        },
        "item_status": {
          "success": "true",
          "code": "1000",
          "message": "Referrals are invited Successfully"
        }
      }
    }
  }
}
```

```xml

```

This API allows you to send the referral code of a specific campaign to a customer (auto generated referral code).

### Naming Conventions
It is important to understand the following terminologies that you may come across while using the customer/APIs.

* **referral_code**: Unique code generated for the referrer for a specific campaign. Each referral campaign generate a unique code for each customer.
* **invitee**: A person who was invited by the referrer. The list will have the list of both successful and failed referees
* **referees**: Customers from the invitee list who turned up to the stores and made either transactions or registrations
* **incentives**: Rewards received by the referral for successful referees of the campaign. Currently, only coupons are issued as incentives
* **scope**: The channel through which the referral was made. Currently, the referrals are supported only through email and mobile number. Scopes are used as name-value pairs, the value could be referees, invitees, or incentives as per the context.

### Resource Information
| | |
--------- | ----------- |
URI | `/referrals`
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/referrals?{identifier}={value}&{query-params}`

### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
Customer identifier* | enum | Pass any of the customer identifiers who needs to refer. Value: `mobile`, `email`, `external_id`, `id`.
campaign_token | | 
referral_type | obj | Details of referees.
type | enum | Mode of communication of the referral. Values: `SMS`, `EMAIL`
id | int | 
name | string | Name of the referee.
identifier | string | Identifier of the referee according to the type set. For example, if `"type":"EMAIL"`, `identifier` will be the email ID. 
invited_on | date-time | Date and time of the invite.

<aside class="notice">Parameters marked with * are mandatory.</aside>


## Retrieve Customer Referral Details

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/customer/referrals&mobile=9197407983xx
```


> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
   <status>
      <success>true</success>
      <code>200</code>
      <message>success</message>
   </status>
   <customers>
      <customer>
         <email>vimalsudhan@gmail.com</email>
         <mobile>9197407983xx</mobile>
         <external_id>VIMAL004</external_id>
         <id>4596849</id>
         <firstname>Vimal</firstname>
         <lastname>Sudhan</lastname>
         <referrals>
            <referral_type>
               <type>EMAIL</type>
               <referral>
                  <id>1</id>
                  <name>Dexter Morgan</name>
                  <identifier>dexter.morgan@mpd.com</identifier>
                  <invited_on>2016-09-12T15:19:21+05:30</invited_on>
                  <status>
                     <success>true</success>
                     <code>100</code>
                     <message>Invitee added
 successfully</message>
                  </status>
               </referral>
               <referral>
                  <id>2</id>
                  <name>Debra Morgan</name>
                  <identifier>debra.morgan@elwaydetectives.com</identifier>
                  <invited_on>2013-09-12T15:19:21+05:30</invited_on>
                  <status>
                     <success>true</success>
                     <code>100</code>
                     <message>Invitee added
 successfully</message>
                  </status>
               </referral>
            </referral_type>
            <referral_type>
               <type>MOBILE</type>
               <referral>
                  <id>5</id>
                  <name>Heisenberg</name>
                  <identifier>919123456789</identifier>
                  <invited_on>2016-09-12T15:19:21+05:30</invited_on>
                  <status>
                     <success>true</success>
                     <code>100</code>
                     <message>Invitee added
 successfully</message>
                  </status>
               </referral>
               <referral>
                  <id>10</id>
                  <name>Walt Jr</name>
                  <identifier>919876543211</identifier>
                  <invited_on>2016-09-12T15:19:21+05:30</invited_on>
                  <status>
                     <success>true</success>
                     <code>100</code>
                     <message>Invitee added
 successfully</message>
                  </status>
               </referral>
            </referral_type>
         </referrals>
         <item_status>
            <success>true</success>
            <code>1000</code>
            <message>Referrals are invited Successfully</message>
         </item_status>
      </customer>
   </customers>
</response>


```

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": "200",
      "message": "success"
    },
    "customer": {
      "email": "vimalsudhan@gmail.com",
      "mobile": "9197407983xx",
      "external_id": "VIMAL004",
      "id": "4596849",
      "firstname": "Vimal",
      "lastname": "Sudhan",
      "referral_code": "DJK39",
      "invitees": {
        "referral_type": [
          {
            "type": "EMAIL",
            "invitee": [
              {
                "identifier": "dexter.morgan@mpd.com",
                "invited_on": "2013-09-02 12:49:12",
                "till": {
                  "code": "store.till",
                  "name": "store till"
                }
              },
              {
                "identifier": "
debra.morgan@elwaydetectives.com",
                "invited_on": "2013-09-01 13:04:10",
                "till": {
                  "code": "till.cap.123",
                  "name": "cap till"
                }
              },
              {
                "identifier": "
eddard.stark@winterfell.com",
                "invited_on": "2013-08-21 10:04:10",
                "till": {
                  "code": "till.cap.123",
                  "name": "cap till"
                }
              }
            ]
          },
          {
            "type": "MOBILE",
            "invitee": [
              {
                "identifier": "919123456789",
                "invited_on": "2013-09-02 12:49:12",
                "till": {
                  "code": "store.till",
                  "name": "store till"
                },
                "success": "true"
              },
              {
                "identifier": "
919876543210",
                "invited_on": "2013-09-01 13:04:10",
                "till": {
                  "code": "till.cap.123",
                  "name": "cap till"
                },
                "success": "false"
              },
              {
                "identifier": "
919112233445",
                "invited_on": "2013-08-21 10:04:10",
                "till": {
                  "code": "till.cap.123",
                  "name": "cap till"
                },
                "success": "true"
              }
            ]
          }
        ]
      },
      "referees": {
        "referee": [
          {
            "event_type": "TRANSACTION",
            "user_id": "1494955",
            "firstname": "Dexter",
            "lastname": "Morgan",
            "email": "dexter.morgan@mpd.com",
            "mobile": "919988776655",
            "external_id": "MPD345",
            "added_on": "2013-09-02 11:29:10"
          },
          {
            "event_type": "REGISTRATION",
            "user_id": "1494915",
            "firstname": "Debra",
            "lastname": "Morgan",
            "email": "debra.morgan@elwaydetectives.com",
            "mobile": "919988976655",
            "external_id": "ELW345",
            "added_on": "2013-09-01 10:29:10"
          }
        ]
      },
      "incentives": {
        "event_type": [
          {
            "name": "TRANSACTION",
            "coupons": {
              "coupon": {
                "code": "934KD944K",
                "valid_till": "2014-02-12 12:10:40",
                "redemption_info": {
                  "redeemed": "true",
                  "redeemed_on": "2013-12-12 14:29:41"
                }
              }
            }
          },
          {
            "name": "REGISTRATION",
            "coupons": {
              "coupon": {
                "code": "DFI3KDL",
                "valid_till": "2014-01-12 19:10:40",
                "value": "50",
                "redemption_info": {
                  "redeemed": "true",
                  "redeemed_on": "2013-02-12 14:29:41"
                }
              }
            }
          }
        ]
      },
      "item_status": {
        "success": "true",
        "code": "1000",
        "message": "Referral Statistics retrieved successfully"
      }
    }
  }
}
```

Retrieves the stats of the referrals along with the unique referral code of a specific  customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/referrals`
Authentication | Yes
HTTP Method | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/referrals?{identifier}={value}&{query-params}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
Customer identifier* | enum | Pass any of the customer identifiers to fetch referral details. Value: `mobile`, `email`, `external_id`, `id`.
value* | string | Pass the respective identifier value.
campaign_token | string | Pass the specific token id of the referral campaign that you want to fetch. If no campaign id is passed, the details of the customer's referral history of the default campaign will be retrieved
start_date | date | Get customer referrals on or after a specific duration (`YYYY-MM-DD`). To get referrals of a specific duration, pass the date range in `start_date` and `end_date`.
end_date | date | Get customer referrals after a specific date (`YYYY-MM-DD`). To get referrals of a specific duration, pass the date range in `start_date` and `end_date`.
store_code | string | Retrieve referral stats of the specific store. Default value will be the current store. Set `all` to track details from all the stores
only_referral_code |boolean | Set `true` to retrieve the referral code of the respective referral campaigns (of the specific customer).

## Update Customer Preferences

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/customer/preferences
```

> Sample POST Request

```xml
<root>
    <customer>
        <!-- any of these will work, mobile/email/external_id/user_id -->
        <mobile>44700900000</mobile>
        <email>tom.sawyer@example.com</email>
        <external_id>ts1234</external_id>
        <user_id>sa234</user_id>
        <local_id />
        <store>
            <code>store.code</code>
            <id>2234235</id>
        </store>
        <custom_fields>
            <field>
                <name>Favorite Brand</name>
                <value>[“puma”]</value>
            </field>
            <field>
                <name>Favorite Color</name>
                <value>Blue</value>
            </field>
        </custom_fields>
    </customer>
</root>

```

```json
{
  "root": {
    "customer": [{
      "mobile": "44700900000",
      "email": "tom.sawyer@example.com",
      "external_id": "ts1234",
      "user_id": "sa234",
      "store": {
        "code": "store.code",
        "id": "2234235"
      },
      "custom_fields": {
        "field": [
          {
            "name": "Favorite Brand",
            "value": "[“puma”]"
          },
          {
            "name": "Favorite Color",
            "value": "Blue"
          }
        ]
      }
    }
  ]
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
    <customers>
        <customer>
            <user_id>sa234</user_id>
            <mobile>44700900000</mobile>
            <email>tom.sawyer@example.com</email>
            <external_id>ts1234</external_id>
            <local_id />
            <custom_fields>
                <field>
                    <name>Favorite Brand</name>
                    <value>Puma</value>
                </field>
                <field>
                    <name>Favorite Color</name>
                    <value>Green</value>
                </field>
            </custom_fields>
            <store>
                <id>12762390</id>
                <code>storecode</code>
                <name>store Name</name>
                <status>SUCCESS</status>
            </store>
            <item_status>
                <success>true</success>
                <code>200</code>
                <message>Preferences Updated Successfully</message>
            </item_status>
        </customer>
    </customers>
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
    "customers": {
      "customer": {
        "user_id": "sa234",
        "mobile": "44700900000",
        "email": "tom.sawyer@example.com",
        "external_id": "ts1234",
        "custom_fields": {
          "field": [
            {
              "name": "Favorite Brand",
              "value": "Puma"
            },
            {
              "name": "Favorite Color",
              "value": "Green"
            }
          ]
        },
        "store": {
          "id": "12762390",
          "code": "storecode",
          "name": "store Name",
          "status": "SUCCESS"
        },
        "item_status": {
          "success": "true",
          "code": "200",
          "message": "Preferences Updated Successfully"
        }
      }
    }
  }
}
```

Preferences are custom fields created under the preferences category which helps in capturing specific interests of a customer. Example: favorite color, favorite brand. This API allows you to set or update preferences of a customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/preferences`
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/preferences?format={xml/json}`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
mobile/email/external_id/user_id* | string | Pass any of the identifiers of the customer whose preferences you want to update.
store | obj | 
code | string | 
id | int | Unique store id 
custom_fields | obj | Update customer level custom field details as name and value pairs.
 



## Fetch Customer Preferences

> Sample Request


```html
https://us.api.capillarytech.com/v1.1/customer/preferences?format=json&mobile=44700900000

```

> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
   <status>
      <success>true</success>
      <code>200</code>
      <message>SUCCESS</message>
   </status>
   <customers>
      <customer>
         <user_id>5532354</user_id>
         <!-- user_id will return according to
the extra query parameter “user_id”=true/false -->
         <mobile>44700900000</mobile>
         <email>tom.sawyer@example.com</email>
         <external_id>ts1234</external_id>
         <custom_fields>
            <field>
               <name>Favorite Color</name>
               <value>Green</value>
            </field>
            <field>
               <name>Favorite Brand</name>
               <value>Puma</value>
            </field>
            <field>
               <name>Likes</name>
               <value>Shoes</value>
            </field>
            <field>
               <name>PREFERRED_STORE</name>
               <value>Store name</value>
            </field>
         </custom_fields>
         <item_status>
            <success>true</success>
            <code>200</code>
            <message>Preferences retrieved successfully</message>
         </item_status>
      </customer>
   </customers>
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
    "customers": {
      "customer": {
        "user_id": "5532354",
        "mobile": "44700900000",
        "email": "tom.sawyer@example.com",
        "external_id": "ts1234",
        "custom_fields": {
          "field": [
            {
              "name": "Favorite Color",
              "value": "Green"
            },
            {
              "name": "Favorite Brand",
              "value": "Puma"
            },
            {
              "name": "Likes",
              "value": "Shoes"
            },
            {
              "name": "PREFERRED_STORE",
              "value": "Store Name"
            }
          ]
        },
        "item_status": {
          "success": "true",
          "code": "200",
          "message": "
Preferences retrieved successfully
"
        }
      }
    }
  }
}
```




Retrieves preferences of a specific customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/preferences`
Authentication | Yes
HTTP Method | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/preferences?{customer_identifier}={value}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
Customer Identifier* | enum | Pass any of the customer identifiers to get preferences. Value: `mobile`, `email`, `external_id`, `id`.
value* | string | Pass the respective identifier values.


## Retrieve Customer Interactions

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/customer/interaction?format=xml&mobile=44700900000

```

> Sample Response

```xml


<?xml version="1.0" encoding="UTF-8"?>
<response>
   <status>
      <success>true</success>
      <response_code>200</response_code>
      <message>Success</message>
   </status>
   <customer>
      <id>24243</id>
      <mobile>44700900000</mobile>
      <email>tom.sawyer@example.com</email>
      <external_id>ts1234</external_id>
      <interactions>
         <network>
            <name>facebook</name>
            <interaction>
               <type>checkin</type>
               <count>1</count>
               <locs>
                  <loc>
                     <lat>22.23</lat>
                     <long>23.33</long>
                     <time>2012-3-12 11:33:23</time>
                  </loc>
               </locs>
            </interaction>
         </network>
         <network>
            <name>twitter</name>
            <interaction>
               <type>tweet</type>
               <count>10</count>
            </interaction>
            <interaction>
               <type>retweet</type>
               <count>5</count>
            </interaction>
         </network>
         <network>
            <name>capillary</name>
            <interaction>
               <type>email</type>
               <count>1</count>
               <messages>
                  <message>
                     <id>554</id>
                     <sender>abc@xyz.com</sender>
                     <receiver>def@xyz.com</receiver>
                     <subject>Sample subject</subject>
                     <sent_time>45837-06-15 02:56:40</sent_time>
                     <delivered_time />
                     <status>SENT</status>
                  </message>
               </messages>
            </interaction>
            <interaction>
               <type>sms</type>
               <count>1</count>
               <messages>
                  <message>
                     <id>555</id>
                     <sender>918867702348</sender>
                     <receiver>918867702349</receiver>
                     <subject>Example subject</subject>
                     <sent_time>45837-06-15 02:56:40</sent_time>
                  </message>
               </messages>
            </interaction>
            <interaction>
               <type>survey</type>
               <latest_nps_score>9</latest_nps_score>
               <latest_survey_name>Customer Satisfaction Survey 5</latest_survey_name>
               <latest_survey_interaction_time>2013-12-16 12:14:37</latest_survey_interaction_time>
               <surveys>
                  <survey>
                     <name>Customer Satisfaction Survey</name>
                     <nps_score>9</nps_score>
                     <sent_by>Nayan Kumar</sent_by>
                     <response_url />
                     <sent_time>2013-11-20 12:56:55</sent_time>
                     <completion_time>2013-11-14 13:23:05</completion_time>
                  </survey>
                  <survey>
                     <name>Customer Satisfaction Survey</name>
                     <nps_score>10</nps_score>
                     <sent_by>Shilpa</sent_by>
                     <response_url />
                     <sent_time>2013-12-11 11:43:55</sent_time>
                     <completion_time>2013-12-11 11:43:55</completion_time>
                  </survey>
                  <survey>
                     <name>Customer Feedback</name>
                     <nps_score>9</nps_score>
                     <sent_by>Shilpa</sent_by>
                     <response_url>https://survey-devint.capillary.in?sc=O5JHLN95&amp;sfc=14&amp;t=R0C9I313&amp;u=true</response_url>
                     <sent_time>2013-12-11 12:17:13</sent_time>
                     <completion_time>2013-12-11 12:17:13</completion_time>
                  </survey>
                  <survey>
                     <name>Customer Review</name>
                     <nps_score>8</nps_score>
                     <sent_by>Shilpa</sent_by>
                     <response_url>https://survey-devint.capillary.in?sc=O5JHLN95&amp;sfc=1&amp;t=7Q81C41Z&amp;u=true</response_url>
                     <sent_time>2013-12-13 15:22:48</sent_time>
                     <completion_time>2013-12-13 15:22:48</completion_time>
                  </survey>
                  <survey>
                     <name>Customer Satisfaction Survey 5</name>
                     <nps_score>9</nps_score>
                     <sent_by>Shilpa</sent_by>
                     <response_url>https://survey-devint.capillary.in?sc=O5JHLN95&amp;sfc=93&amp;t=3LWIXC9Y&amp;u=true</response_url>
                     <sent_time>2013-12-16 12:14:37</sent_time>
                     <completion_time>2013-12-16 12:14:37</completion_time>
                  </survey>
               </surveys>
               <count>5</count>
            </interaction>
         </network>
      </interactions>
   </customer>
</response>

  
```

```json
{
  "response": {
    "status": {
      "success": "true",
      "response_code": "200",
      "message": "Success"
    },
    "customer": {
      "id": "24243",
      "mobile": "44700900000",
      "email": "tom.sawyer@example.com",
      "external_id": "ts1234",
      "interactions": {
        "network": [
          {
            "name": "facebook",
            "interaction": {
              "type": "checkin",
              "count": "1",
              "locs": {
                "loc": {
                  "lat": "22.23",
                  "long": "23.33",
                  "time": "2012-3-12 11:33:23"
                }
              }
            }
          },
          {
            "name": "twitter",
            "interaction": [
              {
                "type": "tweet",
                "count": "10"
              },
              {
                "type": "retweet",
                "count": "5"
              }
            ]
          },
          {
            "name": "capillary",
            "interaction": [
              {
                "type": "email",
                "count": "1",
                "messages": {
                  "message": {
                    "id": "554",
                    "sender": "abc@xyz.com",
                    "receiver": "
def@xyz.com
",
                    "subject": "Sample subject",
                    "sent_time": "45837-06-15 02:56:40",
                    "status": "SENT"
                  }
                }
              },
              {
                "type": "sms",
                "count": "1",
                "messages": {
                  "message": {
                    "id": "555",
                    "sender": "918867702348",
                    "receiver": "
918867702349
",
                    "subject": "Example subject",
                    "sent_time": "45837-06-15 02:56:40"
                  }
                }
              },
              {
                "type": "survey",
                "latest_nps_score": "9",
                "latest_survey_name": "Customer Satisfaction Survey 5",
                "latest_survey_interaction_time": "2013-12-16 12:14:37",
                "surveys": {
                  "survey": [
                    {
                      "name": "Customer Satisfaction Survey",
                      "nps_score": "9",
                      "sent_by": "Nayan Kumar",
                      "sent_time": "2013-11-20 12:56:55",
                      "completion_time": "2013-11-14 13:23:05"
                    },
                    {
                      "name": "Customer Satisfaction Survey",
                      "nps_score": "10",
                      "sent_by": "Shilpa ",
                      "sent_time": "2013-12-11 11:43:55",
                      "completion_time": "2013-12-11 11:43:55"
                    },
                    {
                      "name": "Customer Feedback",
                      "nps_score": "9",
                      "sent_by": "Shilpa ",
                      "response_url": "https://survey-devint.capillary.in?sc=O5JHLN95&sfc=14&t=R0C9I313&u=true",
                      "sent_time": "2013-12-11 12:17:13",
                      "completion_time": "2013-12-11 12:17:13"
                    },
                    {
                      "name": "Customer Review",
                      "nps_score": "8",
                      "sent_by": "Shilpa ",
                      "response_url": "https://survey-devint.capillary.in?sc=O5JHLN95&sfc=1&t=7Q81C41Z&u=true",
                      "sent_time": "2013-12-13 15:22:48",
                      "completion_time": "2013-12-13 15:22:48"
                    },
                    {
                      "name": "Customer Satisfaction Survey 5",
                      "nps_score": "9",
                      "sent_by": "Shilpa ",
                      "response_url": "https://survey-devint.capillary.in?sc=O5JHLN95&sfc=93&t=3LWIXC9Y&u=true",
                      "sent_time": "2013-12-16 12:14:37",
                      "completion_time": "2013-12-16 12:14:37"
                    }
                  ]
                },
                "count": "5"
              }
            ]
          }
        ]
      }
    }
  }
}
```


Lets you to fetch store interactions with a specific customer. This includes SMSs, emails, sent to the customer; missed calls received from the customer's registered mobile number; and surveys submitted by the customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/interaction`
Authentication | Yes
HTTP Method | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/interaction?{customer_identifier}={value}&{params}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -----------
Customer Identifier* | enum | Pass any of the identifiers of the customer to retrieve interactions. Value: `mobile`, `email`, `external_id`, `id`.
value* | string | Pass the respective identifier value.
network | enum | Filter results by communication network. Values: `facebook`, `twitter`, `foursquare`, `capillary`.
type | enum | Filter results by interaction type. Values: `email` (for transaction email), `emailbulk` (for bulk email), `checkin` (applicable only for foursquare/facebook), `like`, `comment` (for facebook); `mention`, `retweet`, `tweet` (only for Twitter network); `feedback` (only for Capillary).
start_date | date | Specify the duration for which you want to see the customer interactions in `start_date` and `end_date`.
end_date | date  | Specify the duration for which you want to see the customer interactions in `start_date` and `end_date`.


## Update Subscription Details


> Sample Request

```html

https://us.api.capillarytech.com/v1.1/customer/subscriptions?format=json
```

> Sample POST Request

```xml

<root>
    <subscription>
        <email>tom.sawyer@example.com</email>
        <priority>bulk</priority>
        <scope>all</scope>
        <!-- Multiple scope as csv is supported -->
        <channel>email</channel>
        <is_subscribed>0</is_subscribed>
    </subscription>
    <subscription>
        <email>tom.sawyer@example.com</email>
        <priority>bulk</priority>
        <scope>all</scope>
        <channel>sms</channel>
        <is_subscribed>0</is_subscribed>
    </subscription>
</root>

```

```json
{
  "root": {
    "subscription": [
      {
        "email": "tom.sawyer@example.com",
        "priority": "bulk",
        "scope": "all",
        "channel": "email",
        "is_subscribed": "0"
      },
      {
        "email": "tom.sawyer@example.com",
        "priority": "bulk",
        "scope": "all",
        "channel": "sms",
        "is_subscribed": "0"
      }
    ]
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
    <subscriptions>
        <subscription>
            <user_id>608</user_id>
            <email>tom.sawyer@example.com</email>
            <!-- Will have the same identifier passed in the request -->
            <channel>EMAIL</channel>
            <priority>BULK</priority>
            <scope>ALL</scope>
            <is_subscribed>0</is_subscribed>
            <item_status>
                <success>true</success>
                <code>1000</code>
                <message>Subscription successfully updated</message>
            </item_status>
        </subscription>
        <subscription>
            <user_id>608</user_id>
            <email>tom.sawyer@example.com</email>
            <channel>SMS</channel>
            <priority>BULK</priority>
            <scope>ALL</scope>
            <is_subscribed>0</is_subscribed>
            <item_status>
                <success>true</success>
                <code>1000</code>
                <message>Subscription successfully updated</message>
            </item_status>
        </subscription>
    </subscriptions>
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
    "subscriptions": {
      "subscription": [
        {
          "user_id": "608",
          "email": "tom.sawyer@example.com",
          "channel": "EMAIL",
          "priority": "BULK",
          "scope": "ALL",
          "is_subscribed": "0",
          "item_status": {
            "success": "true",
            "code": "1000",
            "message": "Subscription successfully updated"
          }
        },
        {
          "user_id": "608",
          "email": "tom.sawyer@example.com",
          "channel": "SMS",
          "priority": "TRANS",
          "scope": "ALL",
          "is_subscribed": "0",
          "item_status": {
            "success": "true",
            "code": "1000",
            "message": "Subscription successfully updated"
          }
        }
      ]
    }
  }
}
```

This API allows you to update sms/email subscription statuses of a customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/subscriptions`
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/subscriptions?format={xml/json}`

### Request Body Parameters
Attribute | Datatype | Description
--------- | -------- | -----------
mobile/email/external_id/id* | Provide any of the customer identifiers to update subscription details.
priority* | enum | Specify the service that you want to update. Value: `TRANS` for personalized messages, and `BULK` for campaign or promotional messages.
scope | enum | Set scope to 'all' always.
channel* | enum | Pass the communication channel that you want to update. Value: `sms`, `email`.
is_subscribed* | enum | Specify `0` to unsubscribe, `1` to subscribe.

<aside class="notice"> Parameters marked with * are mandatory. </aside>


## Retrieve Subscription Details

> Sample Request

```html
https://nightly.capillary.in/v1.1/customer/subscriptions?mobile=447700900000,919999000012

```

> Sample Response

```xml


<?xml version="1.0" encoding="UTF-8"?>
<root>
   <response>
      <status>
         <code>200</code>
         <message>Success</message>
         <success>true</success>
      </status>
      <subscriptions>
         <subscription>
            <element>
               <channel>
                  <element>
                     <name>SMS</name>
                     <priority>
                        <element>
                           <name>TRANS</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>SUBSCRIBED</user_preference>
                        </element>
                        <element>
                           <name>BULK</name>
                           <subscribed />
                           <unsubscribed>ALL</unsubscribed>
                           <user_preference>UNSUBSCRIBED</user_preference>
                        </element>
                     </priority>
                  </element>
                  <element>
                     <name>POSTMAIL</name>
                     <priority>
                        <element>
                           <name>TRANS</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>NOT_SET</user_preference>
                        </element>
                        <element>
                           <name>BULK</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>NOT_SET</user_preference>
                        </element>
                     </priority>
                  </element>
                  <element>
                     <name>EMAIL</name>
                     <priority>
                        <element>
                           <name>TRANS</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>SUBSCRIBED</user_preference>
                        </element>
                        <element>
                           <name>BULK</name>
                           <subscribed />
                           <unsubscribed>ALL</unsubscribed>
                           <user_preference>UNSUBSCRIBED</user_preference>
                        </element>
                     </priority>
                  </element>
               </channel>
               <email>tom.sawyer@example.com</email>
               <external_id>XYPZ001</external_id>
               <item_status>
                  <code>1000</code>
                  <message>Subscription successfully retrieved</message>
                  <success>true</success>
               </item_status>
               <mobile>447700900000</mobile>
               <orgUnitSubscriptions />
               <user_id>29372667</user_id>
            </element>
            <element>
               <channel>
                  <element>
                     <name>SMS</name>
                     <priority>
                        <element>
                           <name>TRANS</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>NOT_SET</user_preference>
                        </element>
                        <element>
                           <name>BULK</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>NOT_SET</user_preference>
                        </element>
                     </priority>
                  </element>
                  <element>
                     <name>POSTMAIL</name>
                     <priority>
                        <element>
                           <name>TRANS</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>NOT_SET</user_preference>
                        </element>
                        <element>
                           <name>BULK</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>NOT_SET</user_preference>
                        </element>
                     </priority>
                  </element>
                  <element>
                     <name>EMAIL</name>
                     <priority>
                        <element>
                           <name>TRANS</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>NOT_SET</user_preference>
                        </element>
                        <element>
                           <name>BULK</name>
                           <subscribed>ALL</subscribed>
                           <unsubscribed />
                           <user_preference>NOT_SET</user_preference>
                        </element>
                     </priority>
                  </element>
               </channel>
               <item_status>
                  <code>1000</code>
                  <message>Subscription successfully retrieved</message>
                  <success>true</success>
               </item_status>
               <mobile>919999000012</mobile>
               <orgUnitSubscriptions />
               <user_id>343040815</user_id>
            </element>
         </subscription>
      </subscriptions>
   </response>
</root>



```

```json
{
	"response": {
		"status": {
			"success": "true",
			"code": 200,
			"message": "Success"
		},
		"subscriptions": {
			"subscription": [
				{
					"user_id": "29372667",
					"mobile": "447700900000",
					"email": "tom.sawyer@example.com",
					"external_id": "XYPZ001",
					"channel": [
						{
							"name": "SMS",
							"priority": [
								{
									"name": "TRANS",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "SUBSCRIBED"
								},
								{
									"name": "BULK",
									"subscribed": "",
									"unsubscribed": "ALL",
									"user_preference": "UNSUBSCRIBED"
								}
							]
						},
						{
							"name": "POSTMAIL",
							"priority": [
								{
									"name": "TRANS",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "NOT_SET"
								},
								{
									"name": "BULK",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "NOT_SET"
								}
							]
						},
						{
							"name": "EMAIL",
							"priority": [
								{
									"name": "TRANS",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "SUBSCRIBED"
								},
								{
									"name": "BULK",
									"subscribed": "",
									"unsubscribed": "ALL",
									"user_preference": "UNSUBSCRIBED"
								}
							]
						}
					],
					"orgUnitSubscriptions": [],
					"item_status": {
						"code": "1000",
						"message": "Subscription successfully retrieved",
						"success": "true"
					}
				},
				{
					"user_id": "343040815",
					"mobile": "919999000012",
					"channel": [
						{
							"name": "SMS",
							"priority": [
								{
									"name": "TRANS",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "NOT_SET"
								},
								{
									"name": "BULK",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "NOT_SET"
								}
							]
						},
						{
							"name": "POSTMAIL",
							"priority": [
								{
									"name": "TRANS",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "NOT_SET"
								},
								{
									"name": "BULK",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "NOT_SET"
								}
							]
						},
						{
							"name": "EMAIL",
							"priority": [
								{
									"name": "TRANS",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "NOT_SET"
								},
								{
									"name": "BULK",
									"subscribed": "ALL",
									"unsubscribed": "",
									"user_preference": "NOT_SET"
								}
							]
						}
					],
					"orgUnitSubscriptions": [],
					"item_status": {
						"code": "1000",
						"message": "Subscription successfully retrieved",
						"success": "true"
					}
				}
			]
		}
	}
}

```

Retrieves sms and email subscription details of a customer. You can filter the results by priority and communication channel. To retrieve subscription details of multiple customers, pass each customer identifier separating by comma.

### Resource Information
| | |
--------- | ----------- |
URI | `/subscriptions`
Authentication | Yes
HTTP Method | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/customer/subscriptions?{customer_identifier}={value1,value2}format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
Customer Identifier* | enum | Pass any of the customer identifiers to retrieve subscription details.
value* | string | Pass the respective identifier values of all customers that you want to retrieve subscription details separating each value with comma. For example, `mobile=918036151000,919999000012`
channel | enum | Filter the results by communication channel. Value: `SMS`, `EMAIL`, `WECHAT`, `SOCIAL`, `REMINDER_TEXT`, `RE_ISSUAL_TEXT`, `CLIENT`.
priority | enum | Filter the results by message type. Value: `TRANS`, `BULK`.
scope | enum | Pass `scope=ALL`. It retrieves the details of all subscription modules. For example, points, coupons, general etc.

<aside class="notice">Parameters marked with * are mandatory. </aside>

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


																																																																																																									
