# Transaction
In Capillary’s platform a transaction represents a purchase or return event. Transactions are categorized into three types based on customer type as explained in the following:

* **Loyalty Transactions**: Transactions made by registered customers of your organization's loyalty program. A customer can be tagged to a loyalty transaction.
 
* **Non-loyalty Transactions**: Transactions made by customers who are not registered into your loyalty program, but shared their mobile number or email id with your organization. These transactions are tagged to the respective identifiers (mobile no/email id)

* **Not-interested Transactions**: Transactions made by customers who are not interested to register into your organization’s loyalty program. These transactions are also considered as anonymous transactions. 

Transactions are again classified into two types:

* **Regular**: Normal transactions made at the PoS. Regular transactions could be loyalty, non-loyalty and nnot-interested.
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

## Make Transactions
```html
http://us.intouch.capillarytech.com/v1.1/transaction/add?format=json
```
```json
{
  "root": {
    "transaction": {
      "bill_client_id": "1121",
      "type": "regular",
      "number": "MyBill-077",
      "amount": "1000",
      "notes": "2 line items",
      "billing_time": "2012-04-01",
      "gross_amount": "1000",
      "discount": "10",
      "customer": {
        "mobile": "447700900000",
        "email": "tom.sawer@example.com",
        "external_id": "ts1234",
        "firstname": "Tom",
        "lastname": "Sawyer"
      },
      "payment_details": {
        "payment": [
          {
            "mode": "CASH",
            "value": "100"
          },
          {
            "mode": "CREDIT",
            "value": "4000"
          }
        ]
      },
      "custom_fields": {
        "field": {
          "name": "citybank",
          "value": "[“n”]"
        }
      },
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
      "associate_details": {
        "code": "hiraxdhara",
        "name": "Tom Sawyer"
      }
    }
  }
}
```

```xml
<root>
   <transaction>
      <bill_client_id>1121</bill_client_id>
      <!-- bill_client_id is optional -->
      <type>regular</type>
      <number>MyBill-077</number>
      <amount>1000</amount>
      <notes>2 line items</notes>
      <billing_time>2012-04-01</billing_time>
      <gross_amount>1000</gross_amount>
      <discount>10</discount>
      <customer>
         <mobile>447700900000</mobile>
         <email>tom.sawer@example.com</email>
         <external_id>ts1234</external_id>
         <firstname>Tom</firstname>
         <lastname>Sawyer</lastname>
      </customer>
      <payment_details>
         <payment>
            <mode>CASH</mode>
            <value>100</value>
         </payment>
         <payment>
            <mode>CREDIT</mode>
            <value>4000</value>
         </payment>
      </payment_details>
      <custom_fields>
         <field>
            <name>citybank</name>
            <value>[“n”]</value>
         </field>
      </custom_fields>
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
      <associate_details>
         <code>hiraxdhara</code>
         <name>Tom Sawyer</name>
      </associate_details>
   </transaction>
</root>

```
> Sample Response

```json
{
  "response": {
    "transactions": {
      "transaction": {
        "id": "5477577",
        "number": "MyBill-077",
        "type": "regular",
        "customer": {
          "mobile": "447700900000",
          "email": "tom.sawer@example.com",
          "external_id": "ts1234",
          "user_id": "4434563",
          "loyalty_points": "8388607",
          "lifetime_points": "2000000640",
          "lifetime_purchases": "
100000033000
",
          "current_slab": "SILVER"
        },
        "item_status": {
          "success": "true",
          "code": "600",
          "message": "Transaction added successfully"
        },
        "side_effects": {
          "effect": [
            {
              "type": [
                "coupon",
                "DVS"
              ],
              "code": "ABCDw23",
              "id": "456677",
              "description": "10% off on jeans",
              "valid_till": "2011-09-13",
              "discount_code": "DISCOUNT10",
              "discount_value": "10"
            },
            {
              "type": "points",
              "awarded": "100",
              "total_points": "4000"
            }
          ]
        },
        "bill_client_id": "1121"
      }
    },
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    }
  }
}
```

```xml
<response>
<transactions>
<transaction>
<id>5477577</id>
<number>MyBill-077</number>
<type>regular</type>
<customer>
<mobile>447700900000</mobile>
<email>tom.sawer@example.com</email>
<external_id>ts1234</external_id>
<user_id>4434563</user_id>
<!-- user_id will only be returned if query param user_id is ‘true’ -->
<loyalty_points>8388607</loyalty_points>
<lifetime_points>2000000640</lifetime_points>
<lifetime_purchases>
100000033000
</lifetime_purchases>
<current_slab>SILVER</current_slab>
</customer>
<item_status>
<success>true</success>
<code>600</code>
<message>Transaction added successfully</message>
</item_status>
<!-- v1 Side effects are not listed here -->
<side_effects>
<effect>
<type>coupon</type>
<code>ABCDw23</code>
<id>456677</id>
<description>10% off on jeans</description>
<type>DVS</type>
<valid_till>2011-09-13</valid_till>
<discount_code>DISCOUNT10</discount_code>
<discount_value>10</discount_value>
</effect>
<effect>
<type>points</type>
<awarded>100</awarded>
<total_points>4000</total_points>
</effect>
</side_effects>
<bill_client_id>1121</bill_client_id> 
<!-- 
bill_client_id will be returned only if it is passed in request xml 
-->
</transaction>
</transactions>
<status>
<success>true</success>
<code>200</code>
<message>SUCCESS</message>
</status>
</response>
```

This API allows you to make regular or not interested transactions. You can submit multiple transactions in an API call time by passing the details of each transaction in a separate `transaction` tag. If a new customer identifier is passed, the customer will be registered automatically.

* **Regular Transactions**: To make regular transactions, set `type` as `regular` and pass the customer’s unique identifier of the customer in the respective tag.
* **Non-Interested Transactions**: To make not-interested transactions, set `type` as `not_interested` and customer identifiers are not required for not-interested transactions.



<aside class="notice">
When customer information is passed along with the transaction details, customer’s basic information  like name, email id (if it not the customer’s unique identifier), custom fields etc. will be updated to the new values. <br>
If a new customer identifier is passed along with the transaction details, the customer will be registered automatically. 
</aside>


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

### Request Parameters


## Return Transactions
```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/transaction/add?format=json
```
> Sample POST Request

```json
{
  "root": {
    "transaction": {
      "customer": {
        "mobile": "44700900000",
        "custom_fields": {
          "name": "Tom Sawer",
          "value": "1200"
        },
        "store": {
          "code": "123",
          "id": "234"
        }
      },
      "line_items": {
        "line_item": {
          "transaction_number": "2346",
          "rate": "float",
          "value": "float",
          "qty": "2",
          "discount": "1.00%",
          "amount": "1300",
          "attributes": {
            "attribute": {
              
            }
          },
          "serial": "0",
          "type": "return",
          "return_type": "full"
        }
      },
      "credit_note": {
        "amount": "1300",
        "number": "1267"
      },
      "gross_amount": "float",
      "discount": "float",
      "amount": "float",
      "custom_fields": {
        "field": {
          
        }
      },
      "payment_details": {
        "payment": {
          "attributes": {
            "attribute": {
              "name": "Payment Mode",
              "value": "HDFC Credit Card"
            }
          },
          "value": "float"
        }
      }
    }
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
	<root>
		<transaction>
			<customer>
				<user_id></user_id>
				<mobile>44700900000</mobile>
				<local_id></local_id>
				<custom_fields>
					<name>Tom Sawer</name>	
					<value>1200</value>
				</custom_fields>
				<external_id></external_id>
				<email></email>
				<store>
					<code>123</code>
					<id>234</id>
				</store>
			</customer>
			<line_items>
				<line_item>
					<transaction_number>2346</transaction_number>
					<description></description>
					<billing_time></billing_time>
					<rate>float</rate>
					<value>float</value>
					<qty>2</qty>
					<discount>1.00%</discount>
					<amount>1300</amount>
					<item_code></item_code>
					<attributes>
						<attribute>
							<name></name>
							<value></value>
						</attribute>
					</attributes>
					<serial>0</serial>
					<type>return</type>
					<return_type>full</return_type>
				</line_item>
			</line_items>
			<purchase_time></purchase_time>
			<billing_time></billing_time>
			<credit_note>
				<amount>1300</amount>
				<notes></notes>
				<number>1267</number>
			</credit_note>
			<notes></notes>
			<gross_amount>float</gross_amount>
			<number></number>
			<discount>float</discount>
			<amount>float</amount>
			<custom_fields>
				<field>
					<name></name>
					<value></value>
				</field>
			</custom_fields>
			<return_type />
			<type />
			<payment_details>
				<payment>
					<attributes>
						<attribute>
						<name>Payment Mode</name>
						<value>HDFC Credit Card</value>
						</attribute>
					</attributes>
					<notes></notes>
					<name></name>
					<value>float</value>
				</payment>
			</payment_details>
		</transaction>
	</root>

```
> Sample Response

```xml
<response>
<transactions>
<transaction>
<id>32</id>
<number>MyBill-077</number>
<bill_client_id>1121</bill_client_id>
<type>return</type>
<customer>
<mobile>918167712150</mobile>
<email>tom.sawyer@example.com</email>
<external_id>ts1234</external_id>
<user_id>55453</user_id>
<!--     
returned only when query param user_id is true
-->
<loyalty_points>8388587</loyalty_points>
<lifetime_points>2000000620</lifetime_points>
<lifetime_purchases>100000033000</lifetime_purchases>
<current_slab>SILVER</current_slab>
</customer>
<item_status>
<success>true</success>
<code>600</code>
<message>Transaction added successfully</message>
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
<description>T description</description>
<coupon_type>CAMPAIGN</coupon_type>
<valid_till></valid_till>
<id>42601779</id>
</effect>
</side_effects> 
<points_deducted>20</points_deducted>
<points_balance>8388587</points_balance>
</transaction>
</transactions>
<status>
<success>true</success>
<code>200</code>
<message>SUCCESS</message>
</status>
</response>
```

```json
{
  "response": {
    "transactions": {
      "transaction": {
        "id": "32",
        "number": "MyBill-077",
        "bill_client_id": "1121",
        "type": "return",
        "customer": {
          "mobile": "918167712150",
          "email": "tom.sawyer@example.com",
          "external_id": "ts1234",
          "user_id": "55453",
          "loyalty_points": "8388587",
          "lifetime_points": "2000000620",
          "lifetime_purchases": "100000033000",
          "current_slab": "SILVER"
        },
        "item_status": {
          "success": "true",
          "code": "600",
          "message": "Transaction added successfully"
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
              "description": "T description",
              "coupon_type": "CAMPAIGN",
              "id": "42601779"
            }
          ]
        },
        "points_deducted": "20",
        "points_balance": "8388587"
      }
    },
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    }
  }
}
```

This API allows you to return transactions of only loyalty and non-loyalty customers. You cannot return the transactions of not-interested customers. 

This API supports the following types of return transactions based on the request parameters:

* **Full Return**: Returns an entire transaction. Supported for both loyalty and non-loyalty transactions
* **Line-item Return**: Returns an individual line-item of a transaction. Supported for both loyalty and non-loyalty transactions
* **Mixed Return**: Returns partial line-items of a transaction and amount for the remaining transaction. Supported only for loyalty transactions
* **Amount Return**: Returns transaction amount. Supported only for loyalty and non-loyalty transactions


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

`http://`<cluster URL>``/v1.1/transaction/add?format=json`

### Request Parameters
Parameter | Description
--------- | -----------
Customer identifier | Unique identifier (mobile no/email id/external id/user id) of the customer whose transaction needs to be returned
return_type=FULL | To return an entire transaction
return_type=LINE_ITEM | To return a particular line-item of a transaction
return_type=AMOUNT | To return the transaction amount instead of replacing items

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
        "custom_fields": {
          "field": [
            {
              "name": "Earnshaw Catherine",
              "value": "value2"
            },
            {
              "name": "field2",
              "value": "value2"
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
        },
        "custom_fields": {
          "field": {
            "name": "Tom Sawyer",
            "value": "value2"
          }
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
      <custom_fields>
         <field>
            <name>Earnshaw Catherine</name>            <value>value2</value>
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
    "transaction": {
      "customer": {
        "mobile": "44700900999",
        "external_id": "ext_id9931156917",
        "email": "catherine@example.com"
      },
      "new_type": "REGULAR",
      "notes": "Retro Transaction",
      "id": "6464658",
      "old_type": "NOT_INTERESTED"
    }
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

In retro transaction, you can convert a not-interested transaction to a regular by tagging the transaction to the respective customer once he/she is registered. 
To avail Retro Transaction, you need to enable **CONF_RETRO_TRANSACTION_ENABLE** on InTouch> **Settings** > **Systems & Deployment** > **InTouch PoS Configuration** > **Billing** page. 

On the Billing page, you will also see a configuration to set the maximum duration allowed convert a not-interested transaction regular.

* CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS	
* CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS

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
```shell
GET "http://us.api.capillarytech.com/v1.1/customer/get?format=xml&mobile=44700900099"
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
`http://<cluster url>/v1.1/customer/get?format=<xml/json>&<identifier_type>=<identifier_value>`

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