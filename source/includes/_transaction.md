# Transaction
In Capillary’s platform a transaction represents a purchase or return event. Transactions are categorized into three types based on customer type as explained in the following:

* **Loyalty Transactions**: Transactions made by registered customers of your organization's loyalty program. A customer can be tagged to a loyalty transaction.

* **Non-loyalty Transactions**: Transactions made by customers who are not registered into your loyalty program, but shared their mobile number or email id with your organization. These transactions are tagged to the respective identifiers (mobile no/email id)

* **Not-interested Transactions**: Transactions made by customers who are not interested to register into your organization’s loyalty program. These transactions are also considered as anonymous transactions. 

Transactions are again classified into two types:

* **Regular**: Normal transactions made at the PoS. Regular transactions could be loyalty, non-loyalty and not-interested.
* **Return** : Transactions that are returned at the PoS. Return transactions need an identifier reference. Hence, only loyalty and non-loyalty transactions can be returned through APIs. See Transaction Return API for more details.

The transaction entity contains all the necessary APIs to manage transactions and retrieve transaction details. The transaction entity stores regular/return transactions, points/coupons redeemed against transactions, retro transactions (converting not interested transactions to loyalty), and custom fields. 

<aside class="notice">
Note: Custom fields are additional fields created in InStore to capture a specific information from customers. For example, favorite color, birthday, favorite brand etc.
</aside>


## Prerequisites
Before using transaction APIs, understand the transaction configurations of your organization. You can see the transaction related settings on InTouch > **Settings** > **Systems & Deployment** > **InTouch PoS Configuration** > **Billing**.

* Mandatory parameters required to submit a transaction 
* Whether Retro Transaction is enabled to convert not-interested transactions to regular transactions and the maximum duration for which retro transaction is allowed
* Whether Authorization is required for retro transactions
* Whether Transaction Return is enabled for your organization (for transaction returns)
* Scope of transaction numbers to be unique (store level or TILL level) and duration for which repetition is not allowed (20 days, 30 days etc.)
* Maximum and minimum amount allowed per transaction
* Maximum and minimum amount allowed per line-item

## Add Transaction
```html
http://us.api.capillarytech.com/v1.1/transaction/add?format=json
```
```json
{
	"root": {
		"transaction": [{
			"bill_client_id": "",
			"type": "regular",
			"number": "Trans99",
			"amount": "1000",
			"notes": "2 line items",
			"billing_time": "2017-04-01",
			"gross_amount": "1000",
			"discount": "10",
			"customer": {
				"mobile": "917901810xxxx",
				"email": "",
				"external_id": "",
				"firstname": "",
				"lastname": ""
			},
			"extended_fields": {
				"field": [{
						"name": "CentralGST",
						"value": "8.5"
					},
					{
						"name": "cashier_id",
						"value": "12345678"
					}

				]
			},
			"payment_details": {
				"payment": [{
						"mode": "CASH",
						"value": "100"
					},
					{
						"mode": [
							"CREDIT",
							"CHECKAPI"
						],
						"value": [
							"4000",
							"500"
						],
						"attributes": {
							"attribute": [{
									"name": "BankNameAPI",
									"value": "value_602656"
								},
								{
									"name": "branch_nameAPI",
									"value": "value_602656"
								}
							]
						},
						"notes": "notes_602656"
					}
				]
			},
			"custom_fields": {
				"field": [{
					"name": "Bank",
					"value": "SBI"
				}]
			},
			"line_items": {
				"line_item": [{
						"serial": "1",
						"amount": "500",
						"description": "soap",
						"item_code": "skuattr9",
						"extended_fields": {
							"field": [{
									"name": "booking_type",
									"value": "Online"
								},
								{
									"name": "MetalRate",
									"value": "120.55"
								}
							]
						},
						"variant": "",
						"addon_items": {
							"addon_item": [{
									"item_code": "Addon-033",
									"quantity": "1",
									"description": ""
								},
								{
									"item_code": "Addon-033",
									"quantity": "1",
									"description": ""
								}
							]
						},
						"combo_items": {
							"combo_item": [{
									"item_code": "combo-033",
									"quantity": "1",
									"description": ""
								},
								{
									"item_code": "combo-033",
									"quantity": "1",
									"description": ""
								}
							]
						},
						"split_items": {
							"split_item": [{
									"item_code": "Cheese dip",
									"quantity": "1",
									"description": "Cheese dip"
								},
								{
									"item_code": "Cheese dip",
									"quantity": "1",
									"description": "Cheese dip"
								}
							]
						},
						"qty": "50",
						"rate": "10",
						"value": "500",
						"attributes": {
							"attribute": {
								"name": "brand",
								"value": "Levis"
							}
						}
					},
					{
						"serial": "1",
						"transaction_number": "Trans99",
						"amount": "500",
						"description": "soap",
						"item_code": "skuattr9",
						"variant": "variant-33",
						"addon_items": {
							"addon_item": [{
									"item_code": "Addon-043",
									"quantity": "1",
									"rate": "10",
									"value": "500",
									"description": ""
								},
								{
									"item_code": "Addon-043",
									"quantity": "1",
									"rate": "10",
									"value": "500",
									"description": ""
								}
							]
						},
						"combo_items": {
							"combo_item": [{
									"item_code": "combo-033",
									"quantity": "1",
									"description": ""
								},
								{
									"item_code": "combo-033",
									"quantity": "1",
									"description": ""
								}
							]
						},
						"split_items": {
							"split_item": [{
									"item_code": "Cheese dip",
									"quantity": "1",
									"rate": "10",
									"value": "500",
									"description": "Cheese dip"
								},
								{
									"item_code": "Cheese dip",
									"quantity": "1",
									"rate": "10",
									"value": "500",
									"description": "Cheese dip"
								}
							]
						},
						"qty": "50",
						"rate": "10",
						"value": "500",
						"attributes": {
							"attribute": {
								"name": "brand",
								"value": "Levis"
							}
						}
					}
				]
			},
			"associate_details": {
				"code": "hiraxdhara",
				"name": "Chin"
			}
		}]
	}
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <root>
      <transaction>
         <element>
            <amount>1000</amount>
            <associate_details>
               <code>hiraxdhara</code>
               <name>Chin</name>
            </associate_details>
            <bill_client_id />
            <billing_time>2017-04-01</billing_time>
            <custom_fields>
               <field>
                  <element>
                     <name>Bank</name>
                     <value>SBI</value>
                  </element>
               </field>
            </custom_fields>
            <customer>
               <email />
               <external_id />
               <firstname />
               <lastname />
               <mobile>917901810xxxx</mobile>
            </customer>
            <discount>10</discount>
            <extended_fields>
               <field>
                  <element>
                     <name>CentralGST</name>
                     <value>8.5</value>
                  </element>
                  <element>
                     <name>cashier_id</name>
                     <value>12345678</value>
                  </element>
               </field>
            </extended_fields>
            <gross_amount>1000</gross_amount>
            <line_items>
               <line_item>
                  <element>
                     <addon_items>
                        <addon_item>
                           <element>
                              <description />
                              <item_code>Addon-033</item_code>
                              <quantity>1</quantity>
                           </element>
                           <element>
                              <description />
                              <item_code>Addon-033</item_code>
                              <quantity>1</quantity>
                           </element>
                        </addon_item>
                     </addon_items>
                     <amount>500</amount>
                     <attributes>
                        <attribute>
                           <name>brand</name>
                           <value>Levis</value>
                        </attribute>
                     </attributes>
                     <combo_items>
                        <combo_item>
                           <element>
                              <description />
                              <item_code>combo-033</item_code>
                              <quantity>1</quantity>
                           </element>
                           <element>
                              <description />
                              <item_code>combo-033</item_code>
                              <quantity>1</quantity>
                           </element>
                        </combo_item>
                     </combo_items>
                     <description>soap</description>
                     <extended_fields>
                        <field>
                           <element>
                              <name>booking_type</name>
                              <value>Online</value>
                           </element>
                           <element>
                              <name>MetalRate</name>
                              <value>120.55</value>
                           </element>
                        </field>
                     </extended_fields>
                     <item_code>skuattr9</item_code>
                     <qty>50</qty>
                     <rate>10</rate>
                     <serial>1</serial>
                     <split_items>
                        <split_item>
                           <element>
                              <description>Cheese dip</description>
                              <item_code>Cheese dip</item_code>
                              <quantity>1</quantity>
                           </element>
                           <element>
                              <description>Cheese dip</description>
                              <item_code>Cheese dip</item_code>
                              <quantity>1</quantity>
                           </element>
                        </split_item>
                     </split_items>
                     <value>500</value>
                     <variant />
                  </element>
                  <element>
                     <addon_items>
                        <addon_item>
                           <element>
                              <description />
                              <item_code>Addon-043</item_code>
                              <quantity>1</quantity>
                              <rate>10</rate>
                              <value>500</value>
                           </element>
                           <element>
                              <description />
                              <item_code>Addon-043</item_code>
                              <quantity>1</quantity>
                              <rate>10</rate>
                              <value>500</value>
                           </element>
                        </addon_item>
                     </addon_items>
                     <amount>500</amount>
                     <attributes>
                        <attribute>
                           <name>brand</name>
                           <value>Levis</value>
                        </attribute>
                     </attributes>
                     <combo_items>
                        <combo_item>
                           <element>
                              <description />
                              <item_code>combo-033</item_code>
                              <quantity>1</quantity>
                           </element>
                           <element>
                              <description />
                              <item_code>combo-033</item_code>
                              <quantity>1</quantity>
                           </element>
                        </combo_item>
                     </combo_items>
                     <description>soap</description>
                     <item_code>skuattr9</item_code>
                     <qty>50</qty>
                     <rate>10</rate>
                     <serial>1</serial>
                     <split_items>
                        <split_item>
                           <element>
                              <description>Cheese dip</description>
                              <item_code>Cheese dip</item_code>
                              <quantity>1</quantity>
                              <rate>10</rate>
                              <value>500</value>
                           </element>
                           <element>
                              <description>Cheese dip</description>
                              <item_code>Cheese dip</item_code>
                              <quantity>1</quantity>
                              <rate>10</rate>
                              <value>500</value>
                           </element>
                        </split_item>
                     </split_items>
                     <transaction_number>Trans99</transaction_number>
                     <value>500</value>
                     <variant>variant-33</variant>
                  </element>
               </line_item>
            </line_items>
            <notes>2 line items</notes>
            <number>Trans99</number>
            <payment_details>
               <payment>
                  <element>
                     <mode>CASH</mode>
                     <value>100</value>
                  </element>
                  <element>
                     <attributes>
                        <attribute>
                           <element>
                              <name>BankNameAPI</name>
                              <value>value_602656</value>
                           </element>
                           <element>
                              <name>branch_nameAPI</name>
                              <value>value_602656</value>
                           </element>
                        </attribute>
                     </attributes>
                     <mode>
                        <element>CREDIT</element>
                        <element>CHECKAPI</element>
                     </mode>
                     <notes>notes_602656</notes>
                     <value>
                        <element>4000</element>
                        <element>500</element>
                     </value>
                  </element>
               </payment>
            </payment_details>
            <type>regular</type>
         </element>
      </transaction>
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
"transactions": {
"transaction": [
  {
"id": 34417088,
"number": "Trans99",
"bill_client_id": "",
"type": "REGULAR",
"delivery_status": "DELIVERED",
"customer": {
"user_id": "313654605",
"mobile": "91790181xxxx",
"firstname": "",
"lastname": "",
"email": "",
"external_id": "",
"lifetime_points": "3450",
"loyalty_points": "234",
"current_slab": "Gold",
"tier_expiry_date": "",
"lifetime_purchases": "2000",
"type": "LOYALTY",
"source": "instore"
},
"side_effects": {
"effect": [],
},
"source": "instore",
"item_status": {
"success": "true",
"code": 600,
"message": "Transaction added successfully"
}
}
],
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
    <message>Success</message>
  </status>
  <transactions>
    <transaction>
      <id>34417088</id>
      <number>Trans99</number>
      <bill_client_id></bill_client_id>
      <type>REGULAR</type>
      <delivery_status>DELIVERED</delivery_status>
      <customer>
        <user_id>313654605</user_id>
        <mobile>91790181xxxx</mobile>
        <firstname></firstname>
        <lastname></lastname>
        <email></email>
        <external_id></external_id>
        <lifetime_points>3450</lifetime_points>
        <loyalty_points>234</loyalty_points>
        <current_slab>Gold</current_slab>
        <tier_expiry_date></tier_expiry_date>
        <lifetime_purchases>2000</lifetime_purchases>
        <type>LOYALTY</type>
        <source>instore</source>
      </customer>
      <side_effects>
        <effect/>
      </side_effects>
      <source>instore</source>
      <item_status>
        <success>true</success>
        <code>600</code>
        <message>Transaction added successfully</message>
      </item_status>
    </transaction>
  </transactions>
</response>
```

This API lets you add transactions of both loyalty and not-interested customers. You can add batch transactions by passing each transaction details in a separate `transaction` attribute.

Following are the other key functionalities of the transaction/add API:

* Registers customers automatically when a new identifier is passed with the transaction details
* Updates customer details if an existing identifier is passed with different customer details (other than customer indentifiers)
* Supports transactions with Product Variant and Product Bundle details
* Adds product variant to the database when a new variant product is passed with an existing base product
* Adds  base product to the database when a new base product/variant product is passed. However, if a new base product is passed with variant details, it adds only base product and ignores variant prouct

**Variant Product**: A same product having different variations in terms of common properties such as size, and color.

**Product Bundle**: A group of items that are sold as a single pack. This can include Combo items (Example: pack of 2, combo offers), Split items (Example: a necklace haing gold rate, store rate, making charge, wastage charge and so on) and add-on items (Example: Pizza with extra cheese, and personalized toppings) 

<aside class="notice">
To add transaction with variant details, pass the variant id at the line-item level. For buldle products, pass each line item details in the respective bundle type (split/combo/add-on).

</aside>




* **Regular Transactions**: To make regular transactions, set `type` as `regular` and pass the customer’s unique identifier of the customer in the respective tag.
* **Non-Interested Transactions**: To make not-interested transactions, set `type` as `not_interested` and customer identifiers are not required for not-interested transactions.

<aside class="notice">
When customer information is passed along with the transaction details, customer’s basic information  like name, email id (if it not the customer’s unique identifier), custom fields and extended fields will be updated to the new values. <br>
If a new customer identifier is passed along with the transaction details, the customer will be registered automatically. 
</aside>


You can update custom field details and extended field details for either regular or return transactions. To retrieve these details, use customer/get, customer/transaction APIs.

* Extended fields are a kind of custom fields with defined field names and values that help generate reports on basis of extended fields. In transactions, extended field details can be captured at transaction level, or line-item level. Examples of transaction level extended fields include additional_discount, centralGST, GrossWeight etc and examples of line-item level extended fields include DesignCode, imei_number, MakingCharge etc.  
* Pass custom field details in the custom_fields element and extended fields in the extended_fields element
* To retrieve custom field values and extended field values, use the customer/get or customer/transaction API


### Resource Information
Parameter | Description
--------- | -----------
URI | transaction/add
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
API Version | v1.1
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/transaction/add?format=<xml/json>`



## Add Transaction with Local Currency 
```html
# Sample Request
http://us.api.capillarytech.com/v1.1/transaction/add_with_local_currency
```

> Sample POST Request

```xml

<root>
   <transaction>
      <comment />
      <customer>
         <mobile>91000000099</mobile>
         <email>john@example.com</email>
         <firstname>autofn_7353409276</firstname>
      </customer>
      <billing_time>2016-01-21</billing_time>
      <type>regular</type>
      <gross_amount>1000</gross_amount>
      <number>numbr735ccdcdb34</number>
      <bill_client_id>1121</bill_client_id>
      <discount>0</discount>
      <amount>2000</amount>
      <credit_note>
         <comment />
         <amount>1800</amount>
         <notes>Reason for credit</notes>
         <number>numbr9959104543</number>
      </credit_note>
      <notes>Regular Bill with Payment Details</notes>
   </transaction>
</root>


```

```json
{
  "root": {
    "transaction": [{
      "customer": {
        "mobile": "91000000099",
        "email": "john@example.com",
        "firstname": "autofn_7353409276"
      },
      "billing_time": "2016-01-21",
      "type": "regular",
      "gross_amount": "1000",
      "number": "numbr735ccdcdb34",
      "bill_client_id": "1121",
      "discount": "0",
      "amount": "2000",
      "credit_note": {
        "amount": "1800",
        "notes": "Reason for credit",
        "number": "numbr9959104543"
      },
      "notes": "Regular Bill with Payment Details"
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
        <message>Success</message>
    </status>
    <transactions>
        <transaction>
            <id>34058904</id>
            <number>numbr735ccdcdb34</number>
            <bill_client_id>1121</bill_client_id>
            <type>REGULAR</type>
            <delivery_status>DELIVERED</delivery_status>
            <customer>
                <user_id>282100245</user_id>
                <mobile>91000000099</mobile>
                <firstname>autofn_7353409276</firstname>
                <lastname/>
                <email>john@example.com</email>
                <external_id/>
                <lifetime_points>0</lifetime_points>
                <loyalty_points>0</loyalty_points>
                <current_slab/>
                <tier_expiry_date/>
                <lifetime_purchases>2000</lifetime_purchases>
                <type>LOYALTY</type>
                <source>instore</source>
            </customer>
            <side_effects>
                <effect/>
            </side_effects>
            <source>instore</source>
            <item_status>
                <code>600</code>
                <success>true</success>
                <message>Transaction added successfully</message>
            </item_status>
        </transaction>
    </transactions>
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
    "transactions": {
      "transaction": {
        "id": "34058904",
        "number": "numbr735ccdcdb34",
        "bill_client_id": "1121",
        "type": "REGULAR",
        "delivery_status": "DELIVERED",
        "customer": {
          "user_id": "282100245",
          "mobile": "91000000099",
          "firstname": "autofn_7353409276",
          "email": "john@example.com",
          "lifetime_points": "0",
          "loyalty_points": "0",
          "lifetime_purchases": "2000",
          "type": "LOYALTY",
          "source": "instore"
        },
        "side_effects": {

        },
        "source": "instore",
        "item_status": {
          "code": "600",
          "success": "true",
          "message": "Transaction added successfully"
        }
      }
    }
  }
}
```

This API lets you add transactions with a different currency using the currency conversion ratio. To support this feature, you need to have
  
* disabled `ERR_CURRENCY_CONVERSION_DISABLED` on the Billing Configuration page of InTouch Settings
* added relevant currency conversion ratios in the back-end
* the destination currency id. If no currency id is passed, the transaction gets converted to the org's base currency

The issual of points/coupon or redemption is calculated automatically as per the destination currency. 

### Resource Information
Parameter | Description
--------- | -----------
URI | transaction/add_with_local_currency
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
API Version | v1.1
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/transaction/add_with_local_currency?format=<xml/json>`



## Return Transactions
```html
# Sample Request
http://us.api.capillarytech.com/v1.1/transaction/add?format=json
```
> Sample POST Request

```json
{
  "root": {
    "transaction": {
      "type": "not_interested_return",
      "country": "true",
      "number": "may30001",
      "not_interested_reason": "Example reason",
      "return_type": "AMOUNT",
      "purchase_time": "2017-05-31",
      "amount": "500",
      "billing_time": "2017-05-31",
      "line_items": {
        "line_item": {
          "serial": "1",
          "amount": "500",
          "description": "soap",
          "item_code": "item-001",
          "qty": "50",
          "rate": "10",
          "value": "500",
          "attributes": {
            "attribute": {
              "name": "brand",
              "value": "Levis"
            }
          }
        }
      },
      "custom_fields_data": {
        "custom_data_item": {
          "field_name": "paymentmode",
          "field_value": "CASH"
        }
      },
      "associate_details": {
        
      }
    }
  }
}

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<transaction>
		<type>not_interested_return</type>
		<country>true</country>
		<number>may30001</number>
		<not_interested_reason>Example reason</not_interested_reason>
		<return_type>AMOUNT</return_type>
		<purchase_time>2017-05-31</purchase_time>
		<amount>500</amount>
		<billing_time>2017-05-31</billing_time>
		<line_items>
			<line_item>
				<serial>1</serial>
				<amount>500</amount>
				<description>soap</description>
				<item_code>item-001</item_code>
				<qty>50</qty>
				<rate>10</rate>
				<value>500</value>
				<attributes>
					<attribute>
						<name>brand</name>
						<value>Levis</value>
					</attribute>
				</attributes>
			</line_item>
		</line_items>
		<custom_fields_data>
			<custom_data_item>
				<field_name>paymentmode</field_name>
				<field_value>CASH</field_value>
			</custom_data_item>
		</custom_fields_data>
		<associate_details />
	</transaction>
</root>
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
	<transactions>
		<transaction>
			<id>3425</id>
			<number>may30001</number>
			<bill_client_id></bill_client_id>
			<type>NOT_INTERESTED_RETURN</type>
			<delivery_status>DELIVERED</delivery_status>
			<source>instore</source>
			<item_status>
				<success>true</success>
				<code>600</code>
				<message>Transaction added successfully</message>
			</item_status>
		</transaction>
	</transactions>
</response>
```

```json
{
  "response":{
    "status":{
      "success":"true",
      "code":200,
      "message":"Success"
    },
    "transactions":{
      "transaction":[
        {
          "id":3425,
          "number":"may30001",
          "bill_client_id":"",
          "type":"NOT_INTERESTED_RETURN",
          "delivery_status":"DELIVERED",
          "source":"instore",
          "item_status":{
            "success":"true",
            "code":600,
            "message":"Transaction added successfully"
          }
        }
      ]
    }
  }
}
```

The API allows submitting transaction returns of both loyalty and not-interested transactions. 

The following are different return types supported for both loyalty and not-interested transactions.
 
* **Full Return**: To return an entire transaction and exchange with different items
* **Line-item Return**: To return line-item(s) of a transaction and exchange with other items
* **Mixed Return**: To exchange one or more line items of a transaction (line-items)
* **Amount Return**: To return the entire transaction amount

<aside class="notice">
For return transactions, it is required to pass return item's purchased transaction number and purchase_time.

* Purchase time: The date and time of the actual transaction
* Billing time: The date and time of the return transaction
</aside>

Before submitting return transactions, you should know the configurations set of the Return Transactions page of InTouch **Settings** > **Systems & Deployment** > **InTouch POS Configuration**.







### Request URL
`http://<cluster url>/v1.1/transaction/add_with_local_currency?format=<xml/json>`



## Cancel a Line-Item of a Transactions
```html
# Sample Request
http://us.api.capillarytech.com/v1.1/transaction/add?format=json
```
> Sample POST Request

```json
{
   "transaction": {
      "comment": "cancel line_item",
      "customer": {
         "mobile": "919111111111",
         "lastname": "Sawyer",
         "external_id": "ts8674477501",
         "email": "tom.sawyer@example.com",
         "firstname": "Tom"
      },
      "line_items": {
         "line_item": {
            "description": "Ordered a different item",
            "rate": "50",
            "value": "50",
            "qty": "1",
            "amount": "50",
            "item_code": "number0-1",
            "cashier_id": [],
            "discount_value": "0",
            "return_type": "cancelled",
            "type": "return",
            "serial": "0"
         }
      },
      "notes": "one line item cancel",
      "billing_time": "2018-02-14",
      "number": "numbr8674477501",
      "return_type": "cancelled",
      "type": "return"
   }
}

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <transaction>
      <comment>cancel line_item</comment>
      <customer>
         <mobile>919111111111</mobile>
         <lastname>Sawyer</lastname>
         <external_id>ts8674477501</external_id>
         <email>tom.sawyer@example.com</email>
         <firstname>Tom</firstname>
      </customer>
      <line_items>
         <line_item>
            <description>Ordered a different item</description>
            <rate>50</rate>
            <value>50</value>
            <qty>1</qty>
            <amount>50</amount>
            <item_code>number0-1</item_code>
            <cashier_id />
            <discount_value>0</discount_value>
            <return_type>cancelled</return_type>
            <type>return</type>
            <serial>0</serial>
         </line_item>
      </line_items>
      <notes>one line item cancel</notes>
      <billing_time>2018-02-14</billing_time>
      <number>numbr8674477501</number>
      <return_type>cancelled</return_type>
      <type>return</type>
   </transaction>
</root>
```

> Sample Response

```xml
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>Success</message>
    </status>
    <transactions>
        <transaction>
            <id>176536</id>
            <number>numbr8674477502</number>
            <bill_client_id/>
            <type>RETURN</type>
            <delivery_status>DELIVERED</delivery_status>
            <outlier_status>NORMAL</outlier_status>
            <customer>
                <user_id>32411221</user_id>
                <mobile>919111111111</mobile>
                <firstname>Tom</firstname>
                <lastname>Sawyer</lastname>
                <email>tom.sawyer@example.com</email>
                <external_id>ext_id8674477501</external_id>
                <lifetime_points>0</lifetime_points>
                <loyalty_points>0</loyalty_points>
                <current_slab/>
                <tier_expiry_date/>
                <lifetime_purchases>0</lifetime_purchases>
                <type>LOYALTY</type>
                <source>instore</source>
            </customer>
            <side_effects>
                <effect/>
            </side_effects>
            <points_deducted>0</points_deducted>
            <points_balance>0</points_balance>
            <source/>
            <item_status>
                <code>600</code>
                <success>true</success>
                <message>Transaction added successfully</message>
            </item_status>
        </transaction>
    </transactions>
</response>
```

```json
{
   "status": {
      "success": "true",
      "code": "200",
      "message": "Success"
   },
   "transactions": {
      "transaction": {
         "id": "176536",
         "number": "numbr8674477502",
         "bill_client_id": [],
         "type": "RETURN",
         "delivery_status": "DELIVERED",
         "outlier_status": "NORMAL",
         "customer": {
            "user_id": "32411221",
            "mobile": "919111111111",
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "tom.sawyer@example.com",
            "external_id": "ts123",
            "lifetime_points": "0",
            "loyalty_points": "0",
            "current_slab": [],
            "tier_expiry_date": [],
            "lifetime_purchases": "0",
            "type": "LOYALTY",
            "source": "instore"
         },
         "side_effects": {
            "effect": []
         },
         "points_deducted": "0",
         "points_balance": "0",
         "source": [],
         "item_status": {
            "code": "600",
            "success": "true",
            "message": "Transaction added successfully"
         }
      }
   }
}
```

Lets you cancel a line-item of a transaction. For example, it can be used for e-commerce platforms where the brand allows a customer to cancel an item (of a transaction) before it is shipped/delivered.

<aside class="notice">
To cancel a line-item, it is required to pass return item's purchased transaction number and purchase_time.

* Purchase time: The date and time of the actual transaction
* Billing time: The date and time of the return transaction
</aside>





### Resource Information
Entry | Description
----- | -----------
URI | transaction/add
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
API Version | v1.1
Batch Support | Yes

### Request URL

`http://<cluster URL>/v1.1/transaction/add?format=json`

### Request Parameters
Parameter | Value |Description
--------- | ----- | ----------
Customer identifier | mobile/email/external_id/id (user id) | Unique identifier (mobile no/email id/external id/user id) of the customer whose transaction needs to be returned
type | RETURN | Specify type as RETURN for regular/loyalty returns
type | NOT_INTERESTED_RETURN | For non-loyalty returns
return_type | FULL | To return an entire transaction
return_type | LINE_ITEM | To return a particular line-item of a transaction
return_type | AMOUNT | To return the transaction amount instead of replacement
purchase_time* | - | Specify the date of purchase of the item that is returned
number* | - | The actual transaction number of the returned item 



## Update Transaction Details
```shell
POST "http://api.capillary.co.in/v1.1/transaction/update?format=xml"
```
> Sample POST Request

```json
{
  "root": {
    "transaction": [
      {
        "id": "123234",
        "number": "BILL-001",
        "type": "REGULAR",
        "customer": {
          "id": "34897",
          "mobile": "44700900999",
          "email": "earnshaw.catherine@example.com",
          "external_id": "ec1234"
        },
		"extended_fields": {
				"field": [{
						"name": "CentralGST",
						"value": "8.5"
					},
					{
						"name": "cashier_id",
						"value": "12345678"
					}

				]
			},
        "custom_fields": {
          "field": [
            {
              "name": "Earnshaw Catherine",
              "value": "value2"
            },
            {
              "name": "Favorite Color",
              "value": "Green"
            }
          ]
        }
      },
      {
        "id": "123234",
        "number": "BILL-001",
        "type": "REGULAR",
        "customer": {
          "id": "34897",
          "mobile": "44700900000",
          "email": "tom.sawyer@example.com",
          "external_id": "ts1234"
        }
        
      }
    ]
  }
}
```

```xml
							
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <transaction>
        <id>123234</id>
        <!--
         identifies specific transaction without conflict (first priority to identify transaction
         
         -->
        <number>BILL-001</number>
        <!--
         may have conflict as one customer can have multiple transaction having same bill number, will be updated latest transaction in such cases (first transaction in desc order of billing time)
         
         -->
        <type>REGULAR</type>
        <!-- this can be REGULAR or NOT_INTERESTED -->
        <customer>
            <id>34897</id>
            <mobile>44700900999</mobile>
            <email>earnshaw.catherine@example.com</email>
            <external_id>ec1234</external_id>
        </customer>
		<extended_fields>
               <field>
                  <element>
                     <name>CentralGST</name>
                     <value>8.5</value>
                  </element>
                  <element>
                     <name>cashier_id</name>
                     <value>12345678</value>
                  </element>
               </field>
            </extended_fields>
        <custom_fields>
            <field>
                <name>Earnshaw Catherine</name>
                <value>value2</value>
            </field>
            <field>
                <name>field2</name>
                <value>value2</value>
            </field>
        </custom_fields>
    </transaction>
    <transaction>
        <id>123234</id>
        <number>BILL-001</number>
        <type>REGULAR</type>
        <!-- this can be REGULAR or NOT_INTERESTED -->
        <customer>
            <id>34897</id>
            <mobile>44700900000</mobile>
            <email>tom.sawyer@example.com</email>
            <external_id>ts1234</external_id>
        </customer>
        <custom_fields>
            <field>
                <name>Tom Sawyer</name>
                <value>value2</value>
            </field>
        </custom_fields>
    </transaction>
</root>

```

This API allows you to convert a not_interested transaction to a regular transaction and update custom field details of a transaction.

### Resource Information
Entry | Description
----- | -----------
URI | transaction/update
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
API Version | v1.1 
Batch Support | Yes 

### Request Parameters 
Any one of the following parameter is mandatory.

Parameter | Description
--------- | -----------
id | Transaction id that needs to be updated
number | Transaction number that needs to be updated

### Request URL
`http://<cluster url>/v1.1/transaction/update?format=xml/json`


## Retro Transaction
```html
http://api.capillary.co.in/v1.1/transaction/update?format=json
```

> Sample POST Request

```json
{
  "root": {
    "transaction": [{
      "customer": {
        "mobile": "44700900999",
        "external_id": "ext_id9931156917",
        "email": "catherine@example.com"
      },
      "new_type": "REGULAR",
      "notes": "Retro Transaction",
      "id": "6464658",
      "old_type": "NOT_INTERESTED"
    }]
  }
}
```

```xml
<root>
    <transaction>
        <customer>
            <mobile>44700900999</mobile>
            <external_id>ext_id9931156917</external_id>
            <email>catherine@example.com</email>
        </customer>
        <new_type>REGULAR</new_type>
        <notes>Retro Transaction</notes>
        <id>6464658</id>
        <old_type>NOT_INTERESTED</old_type>
    </transaction>
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
    "transactions": {
      "transaction": {
        "id": "34007568",
        "number": "retronumbr9931156917",
        "type": "REGULAR",
        "customer": {
          "user_id": "282024042",
          "mobile": "44700900999",
          "email": "catherine@example.com",
          "external_id": "ext_id9931156917",
          "loyalty_points": "75",
          "lifetime_points": "75",
          "lifetime_purchases": "1500",
          "current_slab": "Platinum",
          "tier_expiry_date": "2117-01-03 23:59:59",
          "type": "loyalty"
        },
        "delivery_status": "DELIVERED",
        "source": "instore",
        "item_status": {
          "success": "true",
          "code": "1630",
          "message": "Transaction retrospectively marked REGULAR, Transaction added successfully"
        },
        "side_effects": {
          "effect": {
            "type": "points",
            "awarded_points": "75",
            "total_points": "75"
          }
        },
        "old_id": "6464658",
        "old_type": "NOT_INTERESTED"
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
    <transactions>
        <transaction>
            <id>34007568</id>
            <number>retronumbr9931156917</number>
            <type>REGULAR</type>
            <customer>
                <user_id>282024042</user_id>
                <mobile>44700900999</mobile>
                <email>catherine@example.com</email>
                <external_id>ext_id9931156917</external_id>
                <loyalty_points>75</loyalty_points>
                <lifetime_points>75</lifetime_points>
                <lifetime_purchases>1500</lifetime_purchases>
                <current_slab>Platinum</current_slab>
                <tier_expiry_date>2117-01-03 23:59:59</tier_expiry_date>
                <type>loyalty</type>
            </customer>
            <delivery_status>DELIVERED</delivery_status>
            <source>instore</source>
            <item_status>
                <success>true</success>
                <code>1630</code>
                <message>Transaction retrospectively marked REGULAR, Transaction added successfully</message>
            </item_status>
            <side_effects>
                <effect>
                    <type>points</type>
                    <awarded_points>75</awarded_points>
                    <total_points>75</total_points>
                </effect>
            </side_effects>
            <old_id>6464658</old_id>
            <old_type>NOT_INTERESTED</old_type>
        </transaction>
    </transactions>
    <side_effects/>
</response>
```

Retro transaction means you can convert a not-interested transaction to a loyalty transaction (by tagging a not-interested transaction to the respective customer once registered). 

To avail Retro Transaction, you need to enable **CONF_RETRO_TRANSACTION_ENABLE** on InTouch> **Settings** > **Systems & Deployment** > **InTouch PoS Configuration** > **Billing** page. 

On the Billing page, you will also see a configuration to set the maximum duration allowed convert a not-interested transaction regular.

* CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS	
* CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS

### Additional Header Required for Retro Transaction

'X-CAP-CLIENT-SIGNATURE'

To recognize which source has made the retro call, you need to pass the name of the source. It is recommended to use a single name for a source so that it would be easy to track retro transactions of each source.  


Example '"X-CAP-CLIENT-SIGNATURE":"INTOUCH_BLR"'

### Resource Information
Entry | Description
----- | -----------
URI | transaction/update
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
API Version | v1.1
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/transaction/update?format=<xml/json>`


## Fetch Transaction Details
```html
http://us.api.capillarytech.com/v1.1/transaction/get?format=xml&id=5477576
```
> Sample Response

```json
{
  "response": {
    "transactions": {
      "transaction": {
        "id": "5477576",
        "number": "MyBill-076",
        "type": "REGULAR",
        "customer": {
          "user_id": "43445",
          "mobile": "44700900999",
          "firstname": "Catherine",
          "lastname": "Earnshaw"
        },
        "item_status": {
          "success": "true",
          "code": "600",
          "message": "Transaction retrieved successfully"
        },
        "amount": "1000",
        "notes": "2 line items",
        "billing_time": "2012-04-01 00:00:00",
        "gross_amount": "1000",
        "discount": "0",
        "custom_fields": {
          "field": {
            "name": "field name",
            "value": "[“value”]"
          }
        },
        "line_items": {
          "line_item": {
            "serial": "1",
            "item_code": "item-001",
            "description": "soap",
            "qty": "50",
            "rate": "10",
            "value": "500",
            "discount": "0",
            "amount": "500",
            "attributes": {
              "attribute": {
                "name": "color",
                "value": "red"
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
											
<?xml version="1.0" encoding="UTF-8"?>
<response>
    <transactions>
        <transaction>
            <id>5477576</id>
            <number>MyBill-076</number>
            <type>REGULAR</type>
            <customer>
                <user_id>43445</user_id>
                <!--
returned only when query param user_id is true
-->
                <mobile>44700900999</mobile>
                <email />
                <external_id />
                <firstname>Catherine</firstname>
                <lastname>Earnshaw</lastname>
            </customer>
            <item_status>
                <success>true</success>
                <code>600</code>
                <message>Transaction retrieved successfully</message>
            </item_status>
            <amount>1000</amount>
            <notes>2 line items</notes>
            <billing_time>2012-04-01 00:00:00</billing_time>
            <gross_amount>1000</gross_amount>
            <discount>0</discount>
            <store />
            <custom_fields>
                <field>
                    <name>field name</name>
                    <value>[“value”]</value>
                </field>
            </custom_fields>
            <line_items>
                <line_item>
                    <serial>1</serial>
                    <item_code>item-001</item_code>
                    <description>soap</description>
                    <qty>50</qty>
                    <rate>10</rate>
                    <value>500</value>
                    <discount>0</discount>
                    <amount>500</amount>
                    <attributes>
                        <attribute>
                            <name>color</name>
                            <value>red</value>
                        </attribute>
                    </attributes>
                </line_item>
            </line_items>
        </transaction>
    </transactions>
</response>
```


This API allows you to fetch the details of a specific transaction based on the transaction id.

### Resource Information
Entry | Description
----- | -----------
URI | transaction/get
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
API Version | v1.1
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/transaction/get?format=<xml/json>&<identifier_type>=<identifier_value>`

### Request Parameters
Parameter | Description
--------- | -----------
id | Fetch the details of a specific transaction 
store_code | Fetch the transactions of a specific store 
till_code | Fetch the transactions made at a specific TILL
user_id | -@DefaultValue("false"),
credit_notes | "-@DefaultValue("false"),
tenders | @DefaultValue("false"),
amount | Fetch the transactions of a specific amount
min_amount | Fetch transactions of a specific amount range, i.e., min_amount - max_amount
max_amount | Fetch the transactions of a specific amount range, i.e., min_amount - max_amount
start_date | Fetch transactions of a specific duration., between start_date and end_date
end_date | Fetch transactions of a specific duration., between start_date and end_date
start_id | Fetch transactions of a specific transaction id range., between start_id and end_id. For example, transacton ids between 1000 - 4999
end_id | Fetch transactions of a specific transaction id range., between start_id and end_id. For examples, transacton ids between 1000 - 4999
number | Fetch the details of a specific transaction based on the transaction number passed
date | Fetch transactions of a specific date
limit | Limit the number of transactions to be fetched. DefaultValue is 20 and max limit is 100
type | Fetch a specific type of transaction. Possible values: REGULAR, NOT_INTERESTED, RETURN, NOT_INTERESTED_RETURN, MIXED. By default it shows the details of regular transaction




## Response Codes
### Success Codes
| Code  | Description                        | 
|-------|------------------------------------| 
| 600   | Transaction added successfully     | 
|       | Transaction retrieved successfully | 
|       | Transaction updated successfully   | 

### Error Codes
Code | Description
---- | -----------
601 | Transaction failed. Transaction amount/quantity/ rate/discount is invalid.
602 | Transaction number is invalid
603 | Points are already used (Deprecated)
604 | Transaction number already exists
605 | Invalid transaction type. Only regular, return and not-interested transaction types are supported
606 | Customer identifier is not passed. Please enter customer's mobile or email or external id to process.
607 | Transaction id is not passed. Please pass the transaction id to process.
608 | Unable to process the transaction
609 | Update failed. Please verify all the fields.
610 | Unable to register. Please verify all the fields.
611 | Customer not found
614 | Transaction is already cancelled
615 | Transaction details are not passed
616 | Item code already exists
617 | Invalid attribute for the item
618 | Customer is marked as fraud.
619 | Transaction id is not provided
620 | Transaction id is invalid.
621 | Transaction date is invalid. Transaction date should be within the accepted past or future date range limit
622 | Unable to add line-item
623 | Unable to trigger other related events for the transaction
624 | Unable to process return-transaction. You can make a return only after adding a transaction.
625 | Transaction number does not exist
626 | Unable to return transaction. The quantity of returned items are more than purchased items
627 | Quantity cannot be negative
628 | The entire transaction is already returned 
629 | The return quantity of the item is more than available quantity
630 | The return amount is more than the transaction/line-item amount
631 | Transaction amount cannot be negative
632 | Cannot return the transaction with return type LINE_ITEM because the type AMOUNT has already been used for returning the same transaction
633 | The entire transaction is already returned
634 | This transaction is already returned
635 | Cannot return the transaction with the return type AMOUNT because the type LINE_ITEM has been used for returning the same transaction
636 | The transaction is already returned with the return type as LINE_ITEM. You can process return for other items only with return type LINE_ITEM
637 | Unable to revert points issued to the customer (for return transaction). Please try again later
638 | Unable to return transaction. The transaction is already returned with type LINE_ITEM. Hence, you cannot use the type AMOUNT for the same transaction
639 | Unable to return full transaction. A part of the transaction or complete transaction is already returned
640 | Points or coupons are not redeemed for this transaction
641 | No customer found
642 | Redemption failed. An error occurred in points/coupon redemption 
643 | Transaction is invalid. The transaction date exceeds the accepted future date limit
644 | Transaction is invalid. The transaction date should not be less than the accepted past date limit.
645 | Transaction addition failed for not interested
646 | Customer registration failed. The email id is invalid
647 | Customer registration failed. Email id is already assigned to another customer
648 | Customer registration failed. Mobile number is already assigned to another customer
649 | Customer registration failed. Mobile number is invalid.
650 | Customer registration failed. Mobile number is not accepted as a unique identifier
651 | Customer registration failed. Mobile number is required for registration.
652 | Customer registration failed. Mobile number/email id/external id is invalid.
653 | Customer registration failed. External id is already assigned to another customer
654 | Customer registration failed. External id is not accepted as a unique identifier
655 | Customer registration failed. Customer is not registered in loyalty program
656 | No customer found.
657 | Customer registration failed. Registration in EUP failed.
658 | Customer registration failed. Only email id is not sufficient for registration
659 | Customer registration failed. Please enter email id to register
660 | Customer registration failed. Registration date exceeds the accepted past or future date limit.
661 | Amount of the line-item amount cannot be negative
662 | Value of a line cannot be negative
663 | Rate of a line-item cannot be negative
664 | Discount of a line-item cannot be negative
665 | Gross amount of the transaction cannot be negative
666 | Discount of the transaction cannot be negative
667 | Unable to find the transaction id for this customer
668 | Unable to find the transaction number for this customer
669 | Unable to update custom field
670 | Transaction id/number is not provided
671 | Invalid Store TILL code
672 | Batch limit exceeded.
673 | Returning of transactions is not allowed
674 | Returning of line item is not allowed
675 | Returning of transaction amount is not allowed
676 | Returning of a complete transaction amount is not allowed
677 | Unable to process. Please enter a transaction number for returning a transaction
678 | Amount of returned item is more than purchased item
679 | Line-item(s) to be returned is not specified
680 | No transactions of the specific customer were found
681 | Transactions are blocked for this customer
686 | Points processing failed
687 | Points processing failed
688 | The configuration is invalid. Please report to the Capillary Support
689 | Points processing failed
690 | Points processing failed
691 | Points processing failed
692 | Points processing failed
693 | Points processing failed
694 | Points processing failed
695 | Invalid configuration. Please report to the Capillary Support.
696 | Points processing failed
697 | Points processing failed
698 | Points processing failed
699 | Invalid configuration. Please report to the Capillary Support
1623 | Transaction type is invalid
1624 | Provided parameters are not sufficient to fetch transaction
1625 | Target type is not specified 
1626 | The requested transaction type cannot be changed
1627 | The transaction is already marked as retro
1628 | Transaction id is invalid
1629 | Client signature is required to perform this action
1631 | Retro transaction is not enabled for your organization
1632 | Registration date is too older than the transaction date. See the retro configuration set for your organization
1633 | The duration between registration and transaction mapping exceeds the limit set
1634 | Return type is invalid
1635 | Please pass line-items that need to be returned
1636 | Transaction status is invalid