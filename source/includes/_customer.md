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

## Register Customers

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
        "external_id": "XYPZ001",
        "firstname": "Tom",
        "lastname": "Sawyer",
        "registered_on": "2012-09-11 11:11:11",
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
            { "name": "ser_tax" },
            {
              "name": "他他他他",
              "value": "他他他"
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
        "registered_on": "2012-09-11 11:11:15",
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
		
		<registered_on>2012-09-11 11:11:11</registered_on>
		<extended_fields>
			<field>
				<name>color</name>
				<value>black</value>
			</field>
			<field>
				<name>ItemWeight</name>
				<value>3</value>
			</field>
			<field>
				<name>Status</name>
				<value>pending</value>
			</field>
			<field>
				<name>ser_tax</name>
				<value />
			</field>
			<field>
				<name>他他他他</name>
				<value>他他他</value>
			</field>
		</extended_fields>
		<custom_fields>
			<field>
				<name>Hobbies</name>
				<value>[“Playing”]</value>
			</field>
			<field>
				<name>a</name>
				<value>[“b”]&gt;</value>
			</field>
		</custom_fields>
	</customer>
	<customer>
		<mobile>44700900999</mobile>
		<email>rita.john@example.com</email>
		<external_id>XYPZ006</external_id>
		<firstname>Rita</firstname>
		<lastname>John</lastname>
		
		<registered_on>2012-09-11 11:11:15</registered_on>
		<extended_fields>
			<field>
				<name>color</name>
				<value>black</value>
			</field>
			<field>
				<name>ItemWeight</name>
				<value>3</value>
			</field>
			<field>
				<name>Status</name>
				<value>pending</value>
			</field>
			<field>
				<name>他他他他</name>
				<value>他他他</value>
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
              { "name": "ser_tax" },
              {
                "name": "他他他他",
                "value": "他他他"
              }
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
					<name>color</name>
					<value>black</value>
				</field>
				<field>
					<name>ItemWeight</name>
					<value>3</value>
				</field>
				<field>
					<name>Status</name>
					<value>pending</value>
				</field>
				<field>
					<name>ser_tax</name>
					<value />
				</field>
				<field>
					<name>他他他他</name>
					<value>他他他</value>
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

This API allows you to  register  customers into your organization’s loyalty program. You can register multiple customers at a time. If you pass an existing identifier, the respective customer details will be updated with the new details.

Following are the applications and limitations of register customer API:

* Registers customer with the provided details when a new identifier(mobile no/email id/external id) is passed
* Updates existing customer details, other than existing customer identifier(s), when a registered identifier is passed
* Updates null identifiers, i.e., null to value, but not value to value. Hence, <i>existing identifiers cannot be updated through this API</i>
* Adds/updates custom field details of the customer
* Allows adding/updating **extended field** details of the customer. Extended fields are configured at the global level to capture some additional details of the customer that are required for business purposes.

Pass the custom field details in the custom_fields element and extended fields in the extended_fields element.


<aside class="notice">

You can also update the secondary identifiers (mobile no./email id./external id) of the customer if the respective configs mentioned below are enabled on InTouch, i.e., Capillary InTouch > **Settings** > **Miscellaneous** > **Registration Configuration** <br>

* CONF_ALLOW_MOBILE_UPDATE (for mobile number)<br>
* CONF_ALLOW_EMAIL_UPDATE (for email id) <br>
* CONF_LOYALTY_ALLOW_EXTERNAL_ID_UPDATE (for external id)
</aside>



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
extended_fields | Provide the details of extended fields of the customer in name and value pairs




## Update Customer Details

```shell
# Sample Request URL
POST "http://api.capillary.co.in/v1.1/customer/update?format=json"
```

```json
# Sample Post JSON

{
  "root":{
    "customer":[
      {
        "mobile":"44700900000",
        "email":"tom.sawyer@example.com",
        "external_id":"ts1234",
        "firstname":"Tom",
        "lastname":"Sawyer",
        
        "extended_fields":{
          "field":[
            {
              "name":"color",
              "value":"black"
            },
            {
              "name":"ItemWeight",
              "value":"3"
            },
            {
              "name":"Status",
              "value":"pending"
            },
            {
              "name":"ser_tax"
            },
            {
              "name":"他他他他",
              "value":"他他他"
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
# Sample Post XML


<?xml version="1.0" encoding="UTF-8"?>
<root>
   <customer>
      <mobile>44700900000</mobile>
      <email>tom.sawyer@example.com</email>
      <external_id>ts1234</external_id>
      <firstname>Tom</firstname>
      <lastname>Sawyer</lastname>
      
      <extended_fields>
         <field>
            <name>color</name>
            <value>black</value>
         </field>
         <field>
            <name>ItemWeight</name>
            <value>3</value>
         </field>
         <field>
            <name>Status</name>
            <value>pending</value>
         </field>
         <field>
            <name>ser_tax</name>
            <value />
         </field>
         <field>
            <name>他他他他</name>
            <value>他他他</value>
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
          { "name": "ser_tax" },
          {
            "name": "他他他他",
            "value": "他他他"
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
         <user_id>776538</user_id>
         <mobile>44700900000</mobile>
         <email>tom.sawyer@example.com</email>
         <external_id>TOM123</external_id>
         <firstname>Tom</firstname>
         <lastname>Sawyer</lastname>
         
         <extended_fields>
            <field>
               <name>color</name>
               <value>black</value>
            </field>
            <field>
               <name>ItemWeight</name>
               <value>3</value>
            </field>
            <field>
               <name>Status</name>
               <value>pending</value>
            </field>
            <field>
               <name>ser_tax</name>
               <value />
            </field>
            <field>
               <name>他他他他</name>
               <value>他他他</value>
            </field>
         </extended_fields>
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

This API allows you to update customer’s profile information based on the customer identifier (mobile no/email id/external id) passed. If an identifier you pass already exists then the customer details will be merged automatically.

The customer update API allows you to update the following parameters:

* Existing customer details, other than primary/secondary identifiers
* Null secondary identifiers, i.e., null to value, but not value to value. Hence, <i>existing identifiers cannot be updated through this API</i>
* Custom field details of the customer
* Extended field details of the customer. Extended fields are configured at the global level to capture some additional details of the customer that are required for business purposes
* Cannot update primary identifier of the customer

Pass the custom field details in the custom_fields element and extended fields in the extended_fields element. To retrieve custom field values and extended field values, use the customer/get API.


You can update secondary identifiers (mobile no./email id./external id) only if the respective configs mentioned below are enabled on InTouch, i.e., Capillary InTouch > **Settings** > **Miscellaneous** > **Registration Configuration**

* CONF_ALLOW_MOBILE_UPDATE (for mobile number)
* CONF_ALLOW_EMAIL_UPDATE (for email id)
* CONF_LOYALTY_ALLOW_EXTERNAL_ID_UPDATE (for external id) 


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
Mobile/email/external_id* | Pass any one of the following identifiers of the customer whose details need to be updated
user_id(Boolean) | Returns the unique user ID of the customer if user_id=true


## Update Customer Identifiers
```html
# Sample Request

http://us.api.capillarytech.com/v1.1/customer/update_identity?format=xml
```

> Pass the identifier name (mobile/email/external_id) that you want to update in identifier and pass the old and new identifier value in old_value and new_value respectively.

```json
# Sample POST json
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
# Sample POST xml
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

This API lets you send request to update primary and secondary identifiers (mobile no./email id/external id) of loyalty customers. Requests submitted through `customer/update_identity` will be in pending state by default. Capillary back-end team verifies the requests and process it accordingly.

### Resource Information
Parameter | Value
--------- | -----
URI	| customer/update_identity
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/customer/update_identity?format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
identifier* | Pass the identifier name that you want to update. **Value**: mobile, email, external_id
old_value* | Provide the existing value of the specific identifier that you want to update
new_value* | Provide the new value of the identifier that you want to replace with



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
lastname* | Retrieves the list of customers whose last name matches with the string passed.<br>
																				<br>**Query**: `lastname:EXACT:<last Name>`
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
The following is a formal definition of the Query Grammar

**QUERY**: `(CONDITION) | (CONDITION & (CONDITION)*)`

**CONDITION**: `ATTRIBUTE:OPERATOR:VALUES`

**ATTRIBUTE**: Set of inventory/customer attributes that are searchable

**Dynamic List**
* **OPERATOR**: STARTS, ENDS, EXACT, RANGE, LESS, GREATER, EQUALS, IN
* **VALUES**: ALPHANUMERIC | ALPHANUMERIC;ALPHANUMERIC(for RANGE, IN OPERATOR, separator is ';' )


## Retrieve Customer Details
```html
# Sample Request URL
http://api.capillary.co.in/v1.1/customer/get?mobile=19889999999
```

> Sample Response

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": 200,
      "message": "Success",
      "total": "1",
      "success_count": "1"
    },
    "customers": {
      "customer": [
        {
          "firstname": "Rati",
          "lastname": "Ranjan",
          "mobile": "19889999999",
          "email": "919090080344343422@mail.com",
          "external_id": null,
          "lifetime_points": 442,
          "lifetime_purchases": 12338,
          "loyalty_points": 242,
          "current_slab": "SILVER",
          "registered_on": "2014-12-10 04:46:38",
          "updated_on": "2017-05-09 15:58:29",
          "type": "LOYALTY",
          "source": "instore",
          "identifiers": [],
          
          "registered_by": "MERGE FRONT ONE",
          "registered_store": {
            "code": "mergestore1",
            "name": "MERGE FRONT ONE"
          },
          "registered_till": {
            "code": "cm.1",
            "name": "cm.1"
          },
          "fraud_details": {
            "status": "NONE",
            "marked_by": "",
            "modified_on": ""
          },
          "trackers": "",
          "current_nps_status": null,
          "custom_fields": {
            "field": []
          },
          "extended_fields": {
            "field": [
              {
                "name": "marital_status",
                "value": "Single"
              },
              {
                "name": "City",
                "value": "Bangalore"
              },
              {
                "name": "nationality",
                "value": "Indian"
              },
              {
                "name": "gender",
                "value": "Male"
              }
            ]
          },
          "transactions": {
            "transaction": [
              {
                "id": "32650346",
                "number": "90384",
                "type": "REGULAR",
                "created_date": "2017-05-09 16:00:10",
                "store": "cm.1"
              },
              {
                "id": "32650345",
                "number": "testbil90",
                "type": "REGULAR",
                "created_date": "2017-05-09 15:55:27",
                "store": "cm.1"
              },
              {
                "id": "32650339",
                "number": "test0",
                "type": "REGULAR",
                "created_date": "2017-05-09 14:47:29",
                "store": "cm.1"
              },
              {
                "id": "32650338",
                "number": "uash0",
                "type": "REGULAR",
                "created_date": "2017-05-09 14:45:23",
                "store": "cm.1"
              },
              {
                "id": "32650337",
                "number": "txnsubmit1",
                "type": "REGULAR",
                "created_date": "2017-05-09 14:33:54",
                "store": "cm.1"
              },
              {
                "id": "31718568",
                "number": "wefrw455",
                "type": "REGULAR",
                "created_date": "2016-08-24 17:35:51",
                "store": "cm.1"
              }
            ]
          },
          "coupons": {
            "coupon": []
          },
          "notes": [],
          "item_status": {
            "success": "true",
            "code": "1000",
            "message": "Customer successfully retrieved",
            "warnings": {
              "warning": []
            }
          }
        }
      ]
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
            <firstname>Rati</firstname>
            <lastname>Ranjan</lastname>
            <mobile>19889999999</mobile>
            <email>919090080344343422@mail.com</email>
            <external_id />
            <lifetime_points>442</lifetime_points>
            <lifetime_purchases>12338</lifetime_purchases>
            <loyalty_points>242</loyalty_points>
            <current_slab>SILVER</current_slab>
            <registered_on>2014-12-10 04:46:38</registered_on>
            <updated_on>2017-05-09 15:58:29</updated_on>
            <type>LOYALTY</type>
            <source>instore</source>
            
            <registered_by>MERGE FRONT ONE</registered_by>
            <registered_store>
                <code>mergestore1</code>
                <name>MERGE FRONT ONE</name>
            </registered_store>
            <registered_till>
                <code>cm.1</code>
                <name>cm.1</name>
            </registered_till>
            <fraud_details>
                <status>NONE</status>
                <marked_by></marked_by>
                <modified_on></modified_on>
            </fraud_details>
            <trackers></trackers>
            <current_nps_status />
            <custom_fields></custom_fields>
            <extended_fields>
                <field>
                    <name>marital_status</name>
                    <value>Single</value>
                </field>
                <field>
                    <name>City</name>
                    <value>Bangalore</value>
                </field>
                <field>
                    <name>nationality</name>
                    <value>Indian</value>
                </field>
                <field>
                    <name>gender</name>
                    <value>Male</value>
                </field>
            </extended_fields>
            <transactions>
                <transaction>
                    <id>32650346</id>
                    <number>90384</number>
                    <type>REGULAR</type>
                    <created_date>2017-05-09 16:00:10</created_date>
                    <store>cm.1</store>
                </transaction>
                <transaction>
                    <id>32650345</id>
                    <number>testbil90</number>
                    <type>REGULAR</type>
                    <created_date>2017-05-09 15:55:27</created_date>
                    <store>cm.1</store>
                </transaction>
                <transaction>
                    <id>32650339</id>
                    <number>test0</number>
                    <type>REGULAR</type>
                    <created_date>2017-05-09 14:47:29</created_date>
                    <store>cm.1</store>
                </transaction>
                <transaction>
                    <id>32650338</id>
                    <number>uash0</number>
                    <type>REGULAR</type>
                    <created_date>2017-05-09 14:45:23</created_date>
                    <store>cm.1</store>
                </transaction>
                <transaction>
                    <id>32650337</id>
                    <number>txnsubmit1</number>
                    <type>REGULAR</type>
                    <created_date>2017-05-09 14:33:54</created_date>
                    <store>cm.1</store>
                </transaction>
                <transaction>
                    <id>31718568</id>
                    <number>wefrw455</number>
                    <type>REGULAR</type>
                    <created_date>2016-08-24 17:35:51</created_date>
                    <store>cm.1</store>
                </transaction>
            </transactions>
            <coupons></coupons>
            <item_status>
                <success>true</success>
                <code>1000</code>
                <message>Customer successfully retrieved</message>
                <warnings></warnings>
            </item_status>
        </customer>
    </customers>
</response>
```

This API lets retrieve details of a specific loyalty customer such as profile information, loyalty details, subscription status, 10 recent transactions, active coupons, recent store interactions, custom fields, extended fields and customer's unique id.

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
Customer Identifier* | Provide the primary identifier of the customer to fetch the transaction details - mobile/email/external_id/user_id <br>To retrieve transactions of multiple customers at a time, provide each identifier separating by a comma. <br>**Example**: `mobile=44700900000,44700900999,4470090345`
start_date | Retrieves transactions made in a specific duration (start_date to end_date)
end_date | Retrieves transactions made in a specific duration (start_date to end_date). <br>Example: `start_date=2013-12-21+23:45:45&end_date=2013-12-29+12:11:45`
transaction_id | Retrieves the details of a specific transaction
transaction_date | Retrieves the transactions made on a particular date. Date format: YYYY-MM-DD
amount | Retrieves transactions by transaction amount. Pass the specific transaction amount that you want to fetch
number | Retrieves the details of a specific transaction based on the transaction number passed
till_id | Retrieves the transactions made at a specific TILL based on the TILL id passed
till_name | Retrieves the transactions made at a specific TILL based on the TILL name passed
till_code | Retrieves the transactions made at a specific TILL based on the TILL code passed
store_id | Retrieves transactions made at a specific store based on the store id passed
store_name | Retrieves transactions made at a specific store based on the store name passed
store_code | Retrieves transactions made at a specific store based on the store code passed
start_id | Retrieves transactions with transaction ids starting with a specific value passed
end_id | Retrieves transactions with transaction ids ending with a specific value passed
credit_notes | Retrieves the credit notes of the transactions. **Value**: true,false. Pass the parameter to retrieve credit notes along with the transaction details.<br> Credit Notes: A receipt given by a cashier to a customer for returned goods which can be used for future purchases.
custom_fields | Retrieves the details of custom fields of the respective transactions. **Value**: true,false.
limit | Limits the number of results to be displayed. For example, if `limit=10` a maximum of 10 transactions will be displayed
sort | Arranges the transactions by transaction date or transaction id based on the value set <br>**Value**: trans_id, trans_date
order | Arranges the transactions based on the value set in `sort` in ascending or descending order. **Value**: asc, desc. By default, transactions are displayed in descending order of transaction date/id
asc | Sorts the transaction history in the ascending order of transaction date or transaction id. <br>**Query**: sort=desc
Desc | Sorts the transaction history in the descending order of transaction date or transaction id. <br>**Query**: sort=desc


## Retrieve Customer Redemptions

```html
# Sample Request

http://us.api.capillarytech.com/v1.1/customer/redemptions?mobile=44700900000&format=json
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
            "description": "abctest",
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
              "id": "121614",
              "points_redeemed": "200",
              "transaction_number": "bill-83",
              "redeemed_time": "2011-03-17 16:03:31",
              "redeemed_at": "Test store  store.server"
            },
            {
              "id": "121615",
              "points_redeemed": "200",
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
               <description>abctest</description>
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
Parameter | Value
--------- | -----
URI | customer/redemptions
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/redemptions?format=<xml/json>&<input_params>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer Identifier* | Provide the primary identifier of the customer whose redemption details needs to be fetched - mobile no./email id/external id. <br>To retrieve redemption details of multiple customers at a time, provide the identifier of each customer separating by a comma. <br>**Example**: `mobile=44700900000,44700900999,4470090345`
type | Filter the results by redemption - points or coupons
start_date | Filter the results by redemptions made in a specific duration - between start_date to end_date
end_date | Filter the results by redemptions made in a specific duration - between start_date to end_date
coupons_limit | Limit the number of coupon redemptions to be displayed. Example:`coupons_limit=10` to show only 10 coupon redemption details. Use only when the `type` parameter is not passed
points_limit | Limit the number of points redemption results to be displayed. Example:`points_limit=10` to show only 10 points redemption details. Use only when the `type` parameter is not passed
limit | Limit the number of redemption details (points and/or coupons). Use only when the `type` parameter is not passed
coupons_start_id | Filter the results by coupon redemption id starting with a specific number. Use only when the `type` parameter is not passed
coupons_end_id | Filter the results by coupon redemption id ending with a specific number. Use only when the `type` parameter is not passed
points_start_id | Filter the results by points redemption id starting with a specific number. Use only when the `type` parameter is not passed
points_end_id | Filter the results by points redemption id ending with a specific number. Use only when the `type` parameter is not passed
order | Order the results in ascending (asc) or descending order (desc). By default, the results are ordered in the descending order of redeemed time
sort | Sort the results by redemption id (redemption_id) or redemption time(redeemed_time). By default, the results are sorted in the descending order of redeemed time






## Add Customer Notes
```html
http://us.api.capillarytech.com/v1.1/customer/notes?format=json
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
        "loyalty_id":"434412",
        "associate_id":"443",
        "notes":{
          "note":[
            {
              "id":"15",
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
http://us.api.capillarytech.com/v1.1/customer/notes?format=json&identifier=44700900999&associate_id=234
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


<?xml version="1.0" encoding="UTF-8"?>
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
               <created_date>2013-12-13T16:14:54+05:30</created_date>
               <valid_till>2016-12-21</valid_till>
               <code>VOCU24902</code>
               <transaction_number>BILL-10304</transaction_number>
               <redemptions>
                  <redemption>
                     <date>2016-12-12 12:12:12</date>
                     <transaction_number>BIL2042040</transaction_number>
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
store_id | Retrieves the details of active coupons of the customer that can be redeemed at a specific store
order_by | Order the results by created date, amount or issued TILL (`created_date`, `amount`, `valid_till`) based on the type passed
sort_order | Sort the results in ascending (`asc`) or descending (`desc`) order

## Create New Ticket
```html
# Sample Request
http://us.api.capillarytech.com/v1.1/customer/tickets?format=json
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
http://us.api.capillarytech.com/v1.1/customer/tickets?format=json
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


## Refer Customer
```html
http://us.api.capillarytech.com/v1.1/customer/referrals
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
        "email": "vimalsudhan@gmail.com",
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
Parameter | Description
--------- | -----------
URI | customer/referrals
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/referrals??format=<xml/json>&<query-params>`



## Retrieve Customer Referral Details
```html
http://us.api.capillarytech.com/v1.1/customer/referrals&mobile=9197407983xx
```

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
         <mobile>919740798372</mobile>
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
      "mobile": "919740798372",
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

Returns the stats of the referrals sent, and gets the unique referral code of a referral campaign sent to the specific  customer.

### Resource Information
Parameter | Description
--------- | -----------
URI | customer/referrals
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/referrals?<query-params>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer identifier* | Pass the customer identifier (mobile/email/external_id) for whom you want to track the referral details
campaign_token | Pass the specific token id of the referral campaign that you want to fetch. If no campaign id is passed, the details of the customer's referral history of the default campaign will be retrieved
start_date | The duration for which you want to track the referral history of the customer (between start_date and end_date)
end_date | The duration for which you want to track the referral history of the customer (between start_date and end_date)
store_code | Retrieve referral stats of the specific store. Default value will be the current store. Set `all` to track details from all the stores
only_referral_code | Set `true` to retrieve the referral code of the campaign (of the specific customer)

## Update Customer Preferences
```html
# Sample Request

http://us.api.capillarytech.com/v1.1/customer/preferences?format=xml

http://us.api.capillarytech.com/v1.1/customer/preferences?format=json
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
Parameter | Description
--------- | -----------
URI | customer/preferences
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/preferences?format=<xml/json>`



## Fetch Customer Preferences
```html
# Sample Request

http://us.api.capillarytech.com/v1.1/customer/preferences?format=json&mobile=44700900000

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




This API allows you to fetch preference values set for a specific customer.

### Resource Information
Parameter | Description
--------- | -----------
URI | customer/preferences
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/preferences?format=<xml/json>&<customer_identifier>=<identifier value>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer Identifier | Pass any identifiers of the customer for whom you want to see the preference values. Values: mobile, email, external_id, user_id


## Retrieve Customer Interactions
```html
# Sample Request
http://us.api.capillarytech.com/v1.1/customer/interaction?format=xml&mobile=44700900000

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


This API allows you to fetch store interactions with a specific customer such as SMSs sent, emails sent, missed calls received from the customer's registered mobile number, and surveys submitted by the customer.

### Resource Information
Parameter | Description
--------- | -----------
URI | customer/interaction
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/interaction?format=<xml/json>&<parameters>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer Identifier* | Pass any one of the identifiers(mobile/email/external_id/user_id) to retrieve interactions
network | Filter data by communication network. Values: facebook, twitter, foursquare, capillary
type | Filter the results by interaction type. <br> Values: email (for transaction email), emailbulk (for bulk email), checkin (applicable only for foursquare/facebook), like, comment (for facebook); mention, retweet, tweet (only for Twitter network); feedback (only for Capillary).
start_date | Specify the duration for which you want to see the customer interactions in start_date and end_date
end_date | Specify the duration for which you want to see the customer interactions in start_date and end_date


## Update Subscription Details

```html
# Sample Request

http://us.api.capillarytech.com/v1.1/customer/subscriptions?format=json
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
          "priority": "BULK",
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
Parameter | Description
--------- | -----------
URI | customer/subscriptions
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | POST
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/subscriptions?format=<xml/json>`



## Retrieve Subscription Details

```html
# Sample Request

http://us.api.capillarytech.com/v1.1/customer/subscriptions?format=json&mobile=447700900000

```

> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>Success</message>
    </status>
    <subscriptions>
        <subscription>
            <user_id>28997193</user_id>
            <mobile>447700900000</mobile>
            <email>autoemail8069801251@gmail.com</email>
            <external_id>ext_id8069801251</external_id>
            <channel>
                <name>EMAIL</name>
                <priority>
                    <name>TRANS</name>
                    <subscribed>ALL</subscribed>
                    <user_preference>SUBSCRIBED</user_preference>
                </priority>
                <priority>
                    <name>BULK</name>
                    <subscribed>ALL</subscribed>
                    <user_preference>SUBSCRIBED</user_preference>
                </priority>
            </channel>
            <channel>
                <name>SMS</name>
                <priority>
                    <name>TRANS</name>
                    <subscribed>ALL</subscribed>
                    <user_preference>SUBSCRIBED</user_preference>
                </priority>
                <priority>
                    <name>BULK</name>
                    <subscribed>ALL</subscribed>
                    <user_preference>SUBSCRIBED</user_preference>
                </priority>
            </channel>
            <channel>
                <name>ANDROID</name>
                <priority>
                    <name>TRANS</name>
                    <subscribed>ALL</subscribed>
                    <user_preference>NOT_SET</user_preference>
                </priority>
                <priority>
                    <name>BULK</name>
                    <subscribed>ALL</subscribed>
                    <user_preference>NOT_SET</user_preference>
                </priority>
            </channel>
            <channel>
                <name>IOS</name>
                <priority>
                    <name>TRANS</name>
                    <subscribed>ALL</subscribed>
                    <user_preference>NOT_SET</user_preference>
                </priority>
                <priority>
                    <name>BULK</name>
                    <subscribed>ALL</subscribed>
                    <user_preference>NOT_SET</user_preference>
                </priority>
            </channel>
            <item_status>
                <code>1000</code>
                <message>Subscription successfully retrieved</message>
                <success>true</success>
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
      "message": "Success"
    },
    "subscriptions": {
      "subscription": {
        "user_id": "28997193",
        "mobile": "447700900000",
        "email": "autoemail8069801251@gmail.com",
        "external_id": "ext_id8069801251",
        "channel": [
          {
            "name": "EMAIL",
            "priority": [
              {
                "name": "TRANS",
                "subscribed": "ALL",
                "user_preference": "SUBSCRIBED"
              },
              {
                "name": "BULK",
                "subscribed": "ALL",
                "user_preference": "SUBSCRIBED"
              }
            ]
          },
          {
            "name": "SMS",
            "priority": [
              {
                "name": "TRANS",
                "subscribed": "ALL",
                "user_preference": "SUBSCRIBED"
              },
              {
                "name": "BULK",
                "subscribed": "ALL",
                "user_preference": "SUBSCRIBED"
              }
            ]
          },
          {
            "name": "ANDROID",
            "priority": [
              {
                "name": "TRANS",
                "subscribed": "ALL",
                "user_preference": "NOT_SET"
              },
              {
                "name": "BULK",
                "subscribed": "ALL",
                "user_preference": "NOT_SET"
              }
            ]
          },
          {
            "name": "IOS",
            "priority": [
              {
                "name": "TRANS",
                "subscribed": "ALL",
                "user_preference": "NOT_SET"
              },
              {
                "name": "BULK",
                "subscribed": "ALL",
                "user_preference": "NOT_SET"
              }
            ]
          }
        ],
        "item_status": {
          "code": "1000",
          "message": "Subscription successfully retrieved",
          "success": "true"
        }
      }
    }
  }
}

```

This API allows you to fetch the sms/email subscription details of a customer. You can filter the results by priority and communication channel. To retrieve subscription details of multiple customers, pass each customer identifier separating by comma.

### Resource Information
Parameter | Description
--------- | -----------
URI | customer/subscriptions
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON 
HTTP Method | GET
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/customer/subscriptions?format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
Customer Identifier* | Pass any one of the identifiers(mobile/email/external_id/user_id) whose subscription details needs to be retrieved
channel | Filter the results by communication channel. Value: SMS, EMAIL, WECHAT, SOCIAL, REMINDER_TEXT, RE_ISSUAL_TEXT, CLIENT.
priority | Filter the results by transaction or bulk messages. Value: TRANS, BULK
scope | Pass scope=ALL. It retrieves the details of all subscription modules. For example, points, coupons, general etc.


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


																																																																																																								