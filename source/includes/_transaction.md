# Transaction
A transaction represents a purchase or return event. Based on the customers' loyalty status, transactions are categorized into three types.

* **Loyalty Transactions**: Transactions made by registered customers of your organization's loyalty program. A customer can be tagged to a loyalty transaction.

* **Non-loyalty Transactions**: Transactions made by customers who are not registered into your loyalty program, but subscribed their mobile number or email id with the organization. These transactions are tagged to the respective identifiers (mobile no/email id)

* **Not-interested Transactions**: Transactions made by customers who are not interested to register into your organization’s loyalty program. These transactions are also considered as anonymous transactions. 

Transactions are again classified into the following types:

* **Regular**: Normal transactions made at the PoS. Regular transactions could be loyalty, non-loyalty and not-interested.
* **Return** : Transactions that are returned at the PoS. Return transactions need an identifier reference. Hence, only loyalty and non-loyalty transactions can be returned through APIs. See Transaction Return API for more details.
* **Mixed**: A transaction that involves both regular and return is termed as mixed transaction.

The transaction entity contains all the necessary APIs to manage transactions and retrieve transaction details. The transaction entity stores regular/return transactions, points/coupons redeemed against transactions, retro transactions (converting not interested transactions to loyalty), extended fields, and custom fields. 

<aside class="notice">
Extended fields and custom fields in transactions are used to capture additional information of a transaction or transaction line-item. The extended fields are predefined defined in the system with specific values, whereas, custom fields can have any name and value as required for the org.
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

<aside class="notice">Please ignore error headers it is still in evaluation phase. </aside>


## Add Transaction

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/transaction/add?format=json
```

> Sample POST Request


```json
{
	"root": {
		"transaction": [{
			"bill_client_id": "",
			"type": "regular",
			"number": "BILL99",
			"amount": "5000",
			"currency_code": "INR",
			"notes": "2 line items",
			"billing_time": "2018-04-01",
			"gross_amount": "1000",
			"referral_code": "txnrflSDX123",
			"delivery_status": "DELIVERED",
			"shipping_source_till_code": "",
			"outlier_status": "NORMAL",
			"credit_notes": "",
			"discount": "10",
			"customer": {
				"mobile": "919999000000",
				"email": "",
				"external_id": "",
				"card_details": {
					"card_number": ""
				},
				"firstname": "Tom",
				"lastname": "Sawyer",
				"referral_code": "CUSTSDX123"
			},
			"redemptions": {
				"points_redemptions": {
					"id": [
						"987654"
					]
				}
			},
			"coupon_redemptions": [],
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
						"base_item_code": "",
						"discount_value": 234,
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
						"notes": "",
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
            <amount>5000</amount>
            <associate_details>
               <code>hiraxdhara</code>
               <name>Chin</name>
            </associate_details>
            <bill_client_id />
            <billing_time>2018-04-01</billing_time>
            <coupon_redemptions />
            <credit_notes />
            <currency_code>INR</currency_code>
            <custom_fields>
               <field>
                  <element>
                     <name>Bank</name>
                     <value>SBI</value>
                  </element>
               </field>
            </custom_fields>
            <customer>
               <card_details>
                  <card_number />
               </card_details>
               <email />
               <external_id />
               <firstname>Tom</firstname>
               <lastname>Sawyer</lastname>
               <mobile>919999000000</mobile>
               <referral_code>CUSTSDX123</referral_code>
            </customer>
            <delivery_status>DELIVERED</delivery_status>
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
                     <base_item_code />
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
                     <discount_value>234</discount_value>
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
                     <notes />
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
            <number>BILL99</number>
            <outlier_status>NORMAL</outlier_status>
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
            <redemptions>
               <points_redemptions>
                  <id>
                     <element>987654</element>
                  </id>
               </points_redemptions>
            </redemptions>
            <referral_code>txnrflSDX123</referral_code>
            <shipping_source_till_code />
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
          "id": 37813251,
          "shipping_source_till_code": "",
          "number": "BILL99",
          "bill_client_id": "",
          "type": "REGULAR",
          "delivery_status": "DELIVERED",
          "parent_bill_number": "",
          "outlier_status": "NORMAL",
          "customer": {
            "user_id": "342963216",
            "mobile": "919999000001",
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "",
            "external_id": "",
            "lifetime_points": "106",
            "loyalty_points": "106",
            "current_slab": "bronze",
            "tier_expiry_date": "2119-09-20 23:59:59",
            "points_summaries": {
              "points_summary": [
                {
                  "programId": "1016",
                  "redeemed": "0",
                  "expired": "0",
                  "returned": "0",
                  "adjusted": "0",
                  "lifetimePoints": "106",
                  "loyaltyPoints": "106",
                  "cumulativePurchases": "18000",
                  "currentSlab": "bronze",
                  "nextSlab": "silver",
                  "nextSlabSerialNumber": "2",
                  "nextSlabDescription": "silver",
                  "slabSNo": "1",
                  "slabExpiryDate": "2119-09-20 23:59:59",
                  "totalPoints": ""
                }
              ]
            },
            "lifetime_purchases": "18000",
            "type": "LOYALTY",
            "source": "instore"
          },
          "side_effects": {
            "effect": [
              {
                "id": 33291227,
                "coupon_type": "PE",
                "coupon_code": "IYVS2E6V",
                "valid_till": "2020-06-27 23:59:59",
                "description": "Mobile Push offer 1",
                "discount_code": "MobilePush",
                "type": "coupon"
              }
            ]
          },
          "source": "ECOMM",
          "item_status": {
            "success": "true",
            "code": 600,
            "message": "Transaction added successfully"
          }
        }
      ]
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
      <id>37813251</id>
      <shipping_source_till_code></shipping_source_till_code>
      <number>BILL99</number>
      <bill_client_id></bill_client_id>
      <type>REGULAR</type>
      <delivery_status>DELIVERED</delivery_status>
      <parent_bill_number></parent_bill_number>
      <outlier_status>NORMAL</outlier_status>
      <customer>
        <user_id>342963216</user_id>
        <mobile>919999000001</mobile>
        <firstname>Tom</firstname>
        <lastname>Sawyer</lastname>
        <email></email>
        <external_id></external_id>
        <lifetime_points>106</lifetime_points>
        <loyalty_points>106</loyalty_points>
        <current_slab>bronze</current_slab>
        <tier_expiry_date>2119-09-20 23:59:59</tier_expiry_date>
        <points_summaries>
          <points_summary>
            <programId>1016</programId>
            <redeemed>0</redeemed>
            <expired>0</expired>
            <returned>0</returned>
            <adjusted>0</adjusted>
            <lifetimePoints>106</lifetimePoints>
            <loyaltyPoints>106</loyaltyPoints>
            <cumulativePurchases>18000</cumulativePurchases>
            <currentSlab>bronze</currentSlab>
            <nextSlab>silver</nextSlab>
            <nextSlabSerialNumber>2</nextSlabSerialNumber>
            <nextSlabDescription>silver</nextSlabDescription>
            <slabSNo>1</slabSNo>
            <slabExpiryDate>2119-09-20 23:59:59</slabExpiryDate>
            <totalPoints></totalPoints>
          </points_summary>
        </points_summaries>
        <lifetime_purchases>18000</lifetime_purchases>
        <type>LOYALTY</type>
        <source>instore</source>
      </customer>
      <side_effects>
        <effect>
          <id>33291227</id>
          <coupon_type>PE</coupon_type>
          <coupon_code>IYVS2E6V</coupon_code>
          <valid_till>2020-06-27 23:59:59</valid_till>
          <description>Mobile Push offer 1</description>
          <discount_code>MobilePush</discount_code>
          <type>coupon</type>
        </effect>
      </side_effects>
      <source>ECOMM</source>
      <item_status>
        <success>true</success>
        <code>600</code>
        <message>Transaction added successfully</message>
      </item_status>
    </transaction>
  </transactions>
</response>
```

Lets you add transactions of loyalty, non-loyalty, or not-interested customers. You can add batch transactions by passing each transaction details in a separate `transaction` attribute.

Currently, there is no validation that bill amount should match with sum of line items as the data is accepted as it is from POS or integration

Following are the key functionalities of the `transaction/add` API.

* Registers customers automatically when a new identifier is passed with the transaction details.
* If any identifier matches with another accounts, customer accounts will be merged if the config mentioned below is not enabled.
* If `CONFIG_SKIP_SECONDARY_ID_ON_PRIMARY_MISMATCH` is enabled, if the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch **Profile** > **Organization Settings** > **Miscellaneous**.
	* Also, this config overrides `CONF_PRIMARY_IDENTIFIER_STRICT_CHECK`.
* Updates customer details if a registered identifier is passed with different customer details (other than customer identifiers).
* Supports transactions with Product Variant and Product Bundle details.
* Adds product variant to the database when a new variant product is passed with an existing base product.
* Adds  base product to the database when a new base product/variant product is passed. However, if a new base product is passed with variant details, it adds only base product and ignores variant .

**Variant Product**: A same product having different variations in terms of common properties such as size, and color.

**Product Bundle**: A group of items that are sold as a single pack. This can include Combo items (Example: pack of 2, combo offers), Split items (Example: a necklace having gold rate, store rate, making charge, wastage charge and so on) and add-on items (Example: Pizza with extra cheese, and personalized toppings) 

<aside class="notice">
* To add transaction with variant details, pass the variant id at the line-item level. For bundle products, pass each line item details in the respective bundle type (split/combo/add-on).
* When customer information is passed along with the transaction details, customer’s basic information  like name, email id (if it not the customer’s unique identifier), custom fields and extended fields will be updated to the new values. 
* 
</aside>



* **Regular Transactions**: To make regular transactions, set `type` as `regular` and pass the customer’s unique identifier of the customer in the respective tag.
* **Non-Interested Transactions**: To make not-interested transactions, set `type` as `not_interested` and customer identifiers are not required for not-interested transactions.



You can update custom field details and extended field details for either regular or return transactions. To retrieve these details, use customer/get, customer/transaction APIs.

* Extended fields are a kind of custom fields with defined field names and values that help generate reports on basis of extended fields. In transactions, extended field details can be captured at transaction level, or line-item level. Examples of transaction level extended fields include additional_discount, centralGST, GrossWeight etc and examples of line-item level extended fields include DesignCode, imei_number, MakingCharge etc.  
* Pass custom field details in the custom_fields element and extended fields in the extended_fields element
* To retrieve custom field values and extended field values, use the customer/get or customer/transaction API


### Resource Information
| | |
--------- | ----------- |
URI | `/add`
Rate Limited? | Yes (1000 per hour)
HTTP Methods | POST
Batch Support | Yes

### Request URL
`https://{host}/v1.1/transaction/add?format={xml/json}`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
bill_client_id | string | Unique id of the bill as per the client (org) end.
type* | enum | Type of transaction. `regular` for loyalty transaction, `not_interested` for non-loyalty or not-interested transactions.
number* | string | Unique transaction number. The uniqueness depends on the configuration `CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS` set on InTouch **Settings** > **System & Deployment** > **InTouch POS Configuration** > **Billing**.  
amount* | double | Net transaction amount of the original bill.
currency_code | string | ISO currency code of the transaction. For example, `INR` for Indian Rupee, SGD for Singapore Dollar, `EUR` for Euro, `IQD` for Iraqi Dinar.
notes | string | Additional information about the transaction.
qty* | int | Quantity of the current line-item.
rate | float | Price of each line-item.
value | float | Gross transaction amount (transaction amount excluding discount).
amount* | double | Net transaction amount of the bill after discount.
billing_time* | date-time | Date and time of the transaction. By default, the  current system date and time will be considered.
gross_amount | double | Transaction amount excluding discount.
discount | double | Discount availed for the transaction (discount amount).
outlier_status | enum | Pass the outlier status of the transaction at transaction level, and outlier status of the line-item at line-item level. Values: `INTERNAL`, `NORMAL`, `INVALID`, `OUTLIER`, `FAILED`, `DELETED`, `RETRO`, `FRAUD`, `TEST`, `OTHER`. 
source | enum | Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
not_interested_reason | string | Reason why the customer is not interested to register. Applicable only for not-interested transactions.
pointsRedemptions | array | Unique points redemption id(s) that you want to apply for the transaction. For example, [727272, 237878]. `
couponRedemptions | array | Unique coupon redemption id(s) that you want to apply for the transaction. For example, [727298, 237856].
referral_code | string | Referral code for a new customer (if applicable) to register in the org's loyalty program. You can also have transaction level referrl code.
customer | obj | Pass customer information. Applicable for non-loyalty and not-interested transactions.
mobile/email/external_id/card_number | string | Pass any of the registered identifiers of the customer. Required for  regular transactions.
firstname | string | First name of the customer.
lastname | string | Last name of the customer.
extended_fields | obj | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in `line_item` object.
payment_details | obj | Payment details for the transaction.
attributes | obj | Attributes  of the current line-item in name and value pairs.
mode | string | Mode of payment. This has to be the mode configured for your org.
value | float | Amount paid through the current mode.
attributes | obj | Payment mode attributes in name and value pairs.
custom_fields | obj | Transaction level custom field details. Pass line-item level custom field details in `line_item` object.
line_items | obj | Details of transaction line-items.
serial | long | Serial number of the current line-item.
transaction_number | string | Transaction line-item number.
description | string | Description of the line-item.
item_code | string | Unique line-item code.
variant | string | Variant code of the item. Applicable for variant product.
addon_items | obj | Details of add-on items. For example, pizza with extra cheese, and personalized toppings.
combo_items | obj | Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps. 
split_items | obj | Details of split items. For example, a necklace having gold rate, store rate, making charge, and wastage charges.
item_code | string | Unique code of the add-on, split, or combo item. For example, combo-22, pizza01_addon.
quantity | double | Quantity of the current add-on, split, or combo item.
associate_details | obj | Details of store associate or cashier who did the transaction.
code | string | Unique code of the store associate.
name | string | Name of the store associate.

<aside class="notice">Parameters marked with * are mandatory. </aside>


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id | long | Unique transaction ID generated internally.
customer | obj | Details of the customer associated to the transaction. Not applicable for `NOT_INTERESTED` transactions.
lifetime_points | int | Total loyalty points earned by the customer to date.
lifetime_purchases | int | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.  
loyalty_points | int | Current active loyalty points (neither redeemed nor expired) of the customer.
type | enum | Type of transaction. Value: `regular` for loyalty transaction, `not_interested` for non-loyalty or not-interested transactions.
source | enum | Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source). 
current_slab | string | Current loyalty tier of the customer.
tier_expiry_date | date-time | Expiry date of the current tier in `YYYY-MM-DD HH:MM:SS` format.
points_summaries | obj | Shows the details of the loyalty points.
programId | long | Unique ID of the loyalty program associated to the points summary.
redeemed | int | In total points earned from the program, the total number of points that are redeemed.
expired | int | In total points earned from the program, the total number of points that are expired.
returned | int | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.
adjusted | int | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited.
cumulativePurchases | double | Total purchases amount of the customer in the stores associated to the current loyalty program.
currentSlab | string | Current tier of the customer in the loyalty program.
nextSlab | string | Next loyalty tier of the customer.
nextSlabSerialNumber | int | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.
nextSlabDescription | string | Description of the next tier as saved in the loyalty program.
slabSNo | int | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.
slabExpiryDate | date-time | Expiry date of the current loyalty tier of the customer in `YYYY-MM-DD HH:MM:SS`.
registered_on | date-time | Date on which the customer is enrolled in the org's loyalty.
updated_on | date-time | Recent date on which the customer details are updated.
type | enum | Loyalty type of the customer. `LOYALTY` if the customer is enrolled in the org's loyalty program, `NON_LOYALTY` if customer has not enrolled in the loyalty program but registered mobile number or email id with the org.
custom_fields | obj |Transaction or line-item level custom field details - field name (`name`) and field value (`value`).
extended_fields | obj | Transaction or line-item level extended field details - extended field name (`name`) and extended field value (`value`).








## Add Transaction with Local Currency 

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/transaction/add_with_local_currency
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
                <firstname>Tom</firstname>
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
          "firstname": "Tom",
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

Lets you add transactions with a different currency using the currency conversion ratio. The following are the prerequisites or checklists for the API.
  
* Enable `CONF_CURRENCY_CONVERSION_ENABLE` on the Billing Configuration page of InTouch **Profile** > **Organization Settings** > **Systems & Deployment** > **InTouch POS Configurations**.
* Configure org's base currency and supported currencies on the Organization Setup page of InTouch **Profile** > **Organization Settings** > **Organization Setup** > **Organization Profile**.
* Add relevant currency conversion ratios in the back-end either through `/v2/currencyratio` API or through Data Import.
* the destination currency id. If no currency id is passed, the transaction gets converted to the org's base currency

The issual of points/coupon or redemption is calculated automatically as per the destination currency. 

### Resource Information
| | |
--------- | ----------- |
URI | `/add_with_local_currency`
HTTP Methods | POST
API Version | v1.1
Batch Support | Yes

### Request URL
`https://{host}/v1.1/transaction/add_with_local_currency?format={xml/json}`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
type* | enum | Type of transaction. `regular` for loyalty transaction, `not_interested` for non-loyalty or not-interested transactions.
number* | string | Unique transaction number. The uniqueness depends on the configuration `CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS` set on InTouch **Settings** > **System & Deployment** > **InTouch POS Configuration** > **Billing**. 
amount* | double | Net transaction amount.
notes | string | Additional information about the transaction.
qty | double | Quantity of the current line-item.
rate | float | Price of each line-item.
value | float | Gross transaction amount (transaction amount excluding discount).
amount | double | Net transaction amount - the actual transaction amount after discount.
billing_time* | date-time | Date and time of the transaction. By default, the  current system date and time will be considered.
gross_amount | double | Transaction amount excluding discount.
discount | double | Discount availed for the transaction (discount amount).
outlier_status | enum | Pass the outlier status of the transaction at transaction level, and outlier status of the line-item at line-item level. Values: `INTERNAL`, `NORMAL`, `INVALID`, `OUTLIER`, `FAILED`, `DELETED`, `RETRO`, `FRAUD`, `TEST`, `OTHER`. 
source | enum | Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE("ECOMMERCE"), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
not_interested_reason | string | Reason why the customer is not interested to register. Applicable only for not-interested transactions.
customer | obj | Pass customer information. Applicable for non-loyalty and not-interested transactions.
mobile/email/external_id | string | Pass any of the registered identifiers of the customer. Required for  regular transactions.
firstname | string | First name of the customer.
lastname | string | Last name of the customer.
extended_fields | obj | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in `line_item` object.

<aside class="notice">Parameters marked with * are mandatory.</aside>

### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id | long | Unique transaction ID generated internally.
customer | obj | Details of the customer associated to the transaction. Not applicable for `NOT_INTERESTED` transactions.
lifetime_points | int | Total loyalty points earned by the customer to date.
lifetime_purchases | int | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.  
loyalty_points | int | Current active loyalty points (neither redeemed nor expired) of the customer.
type | enum | Type of transaction. Value: `regular` for loyalty transaction, `not_interested` for non-loyalty or not-interested transactions.
source | enum | Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source). 
current_slab | string | Current loyalty tier of the customer.
tier_expiry_date | date-time | Expiry date of the current tier in `YYYY-MM-DD HH:MM:SS` format.
points_summaries | obj | Shows the details of the loyalty points.
programId | long | Unique ID of the loyalty program associated to the points summary.
redeemed | int | In total points earned from the program, the total number of points that are redeemed.
expired | int | In total points earned from the program, the total number of points that are expired.
returned | int | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.
adjusted | int | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited.
cumulativePurchases | double | Total purchases amount of the customer in the stores associated to the current loyalty program.
currentSlab | string | Current tier of the customer in the loyalty program.
nextSlab | string | Next loyalty tier of the customer.
nextSlabSerialNumber | int | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.
nextSlabDescription | string | Description of the next tier as saved in the loyalty program.
slabSNo | int | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.
slabExpiryDate | date-time | Expiry date of the current loyalty tier of the customer in `YYYY-MM-DD HH:MM:SS`.
registered_on | date-time | Date on which the customer is enrolled in the org's loyalty.
updated_on | date-time | Recent date on which the customer details are updated.
type | enum | Loyalty type of the customer. `LOYALTY` if the customer is enrolled in the org's loyalty program, `NON_LOYALTY` if customer has not enrolled in the loyalty program but registered mobile number or email id with the org.
custom_fields | obj |Transaction or line-item level custom field details - field name (`name`) and field value (`value`).
extended_fields | obj | Transaction or line-item level extended field details - extended field name (`name`) and extended field value (`value`).







## Return Transaction

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/transaction/add?format=json
```

> Sample POST Request (Return)

```json
{
  "root": {
    "transaction": {
      "type": "return",
      "country": "true",
      "number": "BILL98",
      "not_interested_reason": "Example reason",
      "return_type": "AMOUNT",
      "parent_bill_number": "RE123",
      "purchase_time": "2018-04-01",
      "amount": "500",
      "billing_time": "2018-05-31",
      "customer": {
        "mobile": "919999000000",
        "email": "",
        "external_id": "",
        "firstname": "Tom",
        "lastname": "Sawyer"
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
      "custom_fields_data": {
        "custom_data_item": {
          "field_name": "paymentmode",
          "field_value": "CASH"
        }
      },
      "associate_details": {}
    }
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <transaction>
    <type>return</type>
    <country>true</country>
    <number>BILL98</number>
    <not_interested_reason>Example reason</not_interested_reason>
    <return_type>AMOUNT</return_type>
    <parent_bill_number>RE123</parent_bill_number>
    <purchase_time>2018-04-01</purchase_time>
    <amount>500</amount>
    <billing_time>2018-05-31</billing_time>
    <customer>
      <mobile>919999000000</mobile>
      <email></email>
      <external_id></external_id>
      <firstname>Tom</firstname>
      <lastname>Sawyer</lastname>
    </customer>
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
    <associate_details/>
  </transaction>
</root>
```

> Sample POST Request (Mixed Transaction)

```json
{
 "root":{
   "transaction":[
     {
       "type":"mixed",
       "number":"Exch-1112",
       "amount":"500",
       "notes":"1 line items",
       "billing_time":"2018-09-26 20:10:00",
       "gross_amount":"500",
       "discount":"0",
       "customer":{
         "mobile":"9540000000",
         "email":"",
         "external_id":"",
         "firstname":"",
         "lastname":""
       },
       "payment_details":{
         "payment": [{
                       "mode": "CASH",
                       "value": "200"
                   },
                   {
                       "mode": "Card",
                       "value": "200",
                       "attributes": {
                           "attribute": [{
                                   "name": "card_type",
                                   "value": "Debit Card"
                               },
                               {
                                   "name": "bankName",
                                   "value": "BCA"
                               },
                               {
                                   "name": "CardIssuerCode",
                                   "value": "value345"
                               }
                           ]
                       },
                       "notes": "notes_602656"
                   }
               ]
           
       },
       "custom_fields":{
         "field":[
          
         ]
       },
       "line_items":{
         "line_item":[
           
       {
       	"type":"regular",							 
             "serial":"1",
             "amount":"300",
             "description":"Testdesc04",
             "item_code":"code04",
             "variant":"",
            "qty":"1",
             "rate":"300",
             "value":"300"
       },
       {
       	"type":"return",
            "return_type":"LINE_ITEM",
		    "transaction_number":"RC-15",
		    "transaction_date":"2018-09-25 10:10:10",
             "serial":"1",
             "amount":"50",
             "description":"Testdesc02",
             "item_code":"code02",
             "variant":"",
            "qty":"1",
             "rate":"50",
             "value":"50"
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
   <root>
      <transaction>
         <element>
            <amount>500</amount>
            <billing_time>2018-09-26 20:10:00</billing_time>
            <custom_fields>
               <field />
            </custom_fields>
            <customer>
               <email />
               <external_id />
               <firstname />
               <lastname />
               <mobile>9540000000</mobile>
            </customer>
            <discount>0</discount>
            <gross_amount>500</gross_amount>
            <line_items>
               <line_item>
                  <element>
                     <amount>300</amount>
                     <description>Testdesc04</description>
                     <item_code>code04</item_code>
                     <qty>1</qty>
                     <rate>300</rate>
                     <serial>1</serial>
                     <type>regular</type>
                     <value>300</value>
                     <variant />
                  </element>
                  <element>
                     <amount>50</amount>
                     <description>Testdesc02</description>
                     <item_code>code02</item_code>
                     <qty>1</qty>
                     <rate>50</rate>
                     <return_type>LINE_ITEM</return_type>
                     <serial>1</serial>
                     <transaction_date>2018-09-25 10:10:10</transaction_date>
                     <transaction_number>RC-15</transaction_number>
                     <type>return</type>
                     <value>50</value>
                     <variant />
                  </element>
               </line_item>
            </line_items>
            <notes>1 line items</notes>
            <number>Exch-1112</number>
            <payment_details>
               <payment>
                  <element>
                     <mode>CASH</mode>
                     <value>200</value>
                  </element>
                  <element>
                     <attributes>
                        <attribute>
                           <element>
                              <name>card_type</name>
                              <value>Debit Card</value>
                           </element>
                           <element>
                              <name>bankName</name>
                              <value>BCA</value>
                           </element>
                           <element>
                              <name>CardIssuerCode</name>
                              <value>value345</value>
                           </element>
                        </attribute>
                     </attributes>
                     <mode>Card</mode>
                     <notes>notes_602656</notes>
                     <value>200</value>
                  </element>
               </payment>
            </payment_details>
            <type>mixed</type>
         </element>
      </transaction>
   </root>
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
      <id>191565</id>
      <shipping_source_till_code></shipping_source_till_code>
      <number>BILL99</number>
      <bill_client_id></bill_client_id>
      <type>RETURN</type>
      <delivery_status>DELIVERED</delivery_status>
      <parent_bill_number>BILL99</parent_bill_number>
      <outlier_status>NORMAL</outlier_status>
      <customer>
        <user_id>342963216</user_id>
        <mobile>919999000001</mobile>
        <firstname>Tom</firstname>
        <lastname>Sawyer</lastname>
        <email></email>
        <external_id></external_id>
        <lifetime_points>106</lifetime_points>
        <loyalty_points>106</loyalty_points>
        <current_slab>bronze</current_slab>
        <tier_expiry_date>2119-09-20 23:59:59</tier_expiry_date>
        <points_summaries>
          <points_summary>
            <programId>1016</programId>
            <redeemed>0</redeemed>
            <expired>0</expired>
            <returned>0</returned>
            <adjusted>0</adjusted>
            <lifetimePoints>106</lifetimePoints>
            <loyaltyPoints>106</loyaltyPoints>
            <cumulativePurchases>17500</cumulativePurchases>
            <currentSlab>bronze</currentSlab>
            <nextSlab>silver</nextSlab>
            <nextSlabSerialNumber>2</nextSlabSerialNumber>
            <nextSlabDescription>silver</nextSlabDescription>
            <slabSNo>1</slabSNo>
            <slabExpiryDate>2119-09-20 23:59:59</slabExpiryDate>
            <totalPoints></totalPoints>
          </points_summary>
        </points_summaries>
        <lifetime_purchases>17500</lifetime_purchases>
        <type>LOYALTY</type>
        <source>instore</source>
      </customer>
      <side_effects>
        <effect/>
      </side_effects>
      <points_deducted>0</points_deducted>
      <points_balance>106</points_balance>
      <source></source>
      <item_status>
        <success>true</success>
        <code>600</code>
        <message>Transaction added successfully,Mobile update is not allowed</message>
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
      "code": 200,
      "message": "Success"
    },
    "transactions": {
      "transaction": [
        {
          "id": 191565,
          "shipping_source_till_code": "",
          "number": "BILL99",
          "bill_client_id": "",
          "type": "RETURN",
          "delivery_status": "DELIVERED",
          "parent_bill_number": "BILL99",
          "outlier_status": "NORMAL",
          "customer": {
            "user_id": "342963216",
            "mobile": "919999000001",
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "",
            "external_id": "",
            "lifetime_points": "106",
            "loyalty_points": "106",
            "current_slab": "bronze",
            "tier_expiry_date": "2119-09-20 23:59:59",
            "points_summaries": {
              "points_summary": [
                {
                  "programId": "1016",
                  "redeemed": "0",
                  "expired": "0",
                  "returned": "0",
                  "adjusted": "0",
                  "lifetimePoints": "106",
                  "loyaltyPoints": "106",
                  "cumulativePurchases": "17500",
                  "currentSlab": "bronze",
                  "nextSlab": "silver",
                  "nextSlabSerialNumber": "2",
                  "nextSlabDescription": "silver",
                  "slabSNo": "1",
                  "slabExpiryDate": "2119-09-20 23:59:59",
                  "totalPoints": ""
                }
              ]
            },
            "lifetime_purchases": "17500",
            "type": "LOYALTY",
            "source": "instore"
          },
          "side_effects": {
            "effect": []
          },
          "points_deducted": 0,
          "points_balance": 106,
          "source": "",
          "item_status": {
            "success": "true",
            "code": 600,
            "message": "Transaction added successfully"
          }
        }
      ]
    }
  }
}
```

Lets you submit a return transaction of any transaction type. 


The following are different return types supported for a transaction.
 
* **Full Return**: To return an entire transaction and exchange with different items
* **Line-item Return**: To return line-item(s) of a transaction and exchange with other items
* **Mixed Return**: To exchange one or more line items of a transaction (line-items)
* **Amount Return**: To return the entire transaction amount

<aside class="notice">
For return transactions, it is required to pass return item's purchased transaction number and purchase_time.

* Purchase time: The date and time of the actual transaction
* Billing time: The date and time of the return transaction
</aside>

Before using this API, you need to know the configurations set of the Return Transactions page of InTouch **Settings** > **Systems & Deployment** > **InTouch POS Configuration**.




### Request URL
`https://{host}/v1.1/transaction/add?format={xml/json}`


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
type* | enum | Type of transaction. `RETURN` for loyalty transaction return, `NOT_INTERESTED_RETURN` for not-interested return, `MIXED` for exchange (involves both return and purchase).<br>You will also need to pass `type` for `MIXED` transaction both at bill level (MIXED) and line-item level (`regular` for new transaction item and `return` for return item).
return_type | enum | Type of return. Value: `AMOUNT` to return transaction or line-items for money, `LINE_ITEM` to return one or more line-items of the transaction, `FULL` to return complete transaction.
number* | string | Actual transaction number of the return bill.
parent_bill_number | string | Return transaction number. 
billing_time* | date-time | Date and time of the return transaction in `YYYY-MM-DD HH:MM:SS` format.
purchase_time* | date | Actual transaction date of the returning bill in`YYYY-MM-DD` format.
notes | string | Additional information about the transaction.
amount* | double | Sum of regular line items of the current transaction after discount.
qty* | int | Quantity of the current line-item.
rate | float | Price of each line-item.
value | float | Gross transaction amount (transaction amount excluding discount).
amount* | double | Net return transaction amount.
source | enum | Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE("ECOMMERCE"), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
customer | obj | Customer details associated to the transaction. Not applicable for not-interested transactions.
mobile/email/external_id | string | Pass any of the registered identifiers of the customer. Required for regular transaction returns.
firstname | string | First name of the customer.
lastname | string | Last name of the customer.
extended_fields | obj | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in `line_item` object.
custom_fields | obj | Transaction level custom field details. Pass line-item level custom field details in `line_item` object.
line_items | obj | Details of transaction line-items.
serial | long | Serial number of the line-item.
description | string | Description of the line-item.
item_code | string | Unique line-item code.
variant | string | Variant code of the item. Applicable for variant product.
addon_items | obj | Details of add-on items. For example, pizza with extra cheese, and personalized toppings.
combo_items | obj | Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps. 
split_items | obj | Details of split items. For example, a necklace having gold rate, store rate, making charge, and wastage charges.
item_code | string | Unique code of the add-on, split, or combo item. For example, combo-22, pizza01_addon.
quantity | double | Quantity of the current add-on, split, or combo item.
associate_details | obj | Details of store associate or cashier who did the transaction.
code | string | Unique code of the store associate.
name | string | Name of the store associate.

<aside class="notice">Parameters marked with * are mandatory.</aside>

### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id | long | Unique transaction ID generated internally for return.
customer | obj | Details of the customer associated to the transaction. Not applicable for `NOT_INTERESTED` transactions.
lifetime_points | int | Total loyalty points earned by the customer to date.
lifetime_purchases | int | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.  
loyalty_points | int | Current active loyalty points (neither redeemed nor expired) of the customer.
type | enum | Type of transaction. Value: `return` for loyalty transaction, `not_interested_return` for non-loyalty or not-interested transactions.
source | enum | Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source). 
current_slab | string | Current loyalty tier of the customer.
tier_expiry_date | date-time | Expiry date of the current tier in `YYYY-MM-DD HH:MM:SS` format.
points_summaries | obj | Shows the details of the loyalty points.
programId | long | Unique ID of the loyalty program associated to the points summary.
redeemed | int | In total points earned from the program, the total number of points that are redeemed.
expired | int | In total points earned from the program, the total number of points that are expired.
returned | int | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.
adjusted | int | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited.
cumulativePurchases | double | Total purchases amount of the customer in the stores associated to the current loyalty program.
currentSlab | string | Current tier of the customer in the loyalty program.
nextSlab | string | Next loyalty tier of the customer.
nextSlabSerialNumber | int | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.
nextSlabDescription | string | Description of the next tier as saved in the loyalty program.
slabSNo | int | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.
slabExpiryDate | date-time | Expiry date of the current loyalty tier of the customer in `YYYY-MM-DD HH:MM:SS`.
registered_on | date-time | Date on which the customer is enrolled in the org's loyalty.
updated_on | date-time | Recent date on which the customer details are updated.
type | enum | Loyalty type of the customer. `LOYALTY` if the customer is enrolled in the org's loyalty program, `NON_LOYALTY` if customer has not enrolled in the loyalty program but registered mobile number or email id with the org.
custom_fields | obj |Transaction or line-item level custom field details - field name (`name`) and field value (`value`).
extended_fields | obj | Transaction or line-item level extended field details - extended field name (`name`) and extended field value (`value`).







## Cancel a Transaction Line-Item

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/transaction/add?format=json
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
| | |
--------- | ----------- |
URI | `/add`
HTTP Methods | POST
API Version | v1.1
Batch Support | Yes

### Request URL

`https://{host}/v1.1/transaction/add?format=json`

### Request Body Parameters
Parameter | Datatype |Description
--------- | -------- | ----------
Customer identifier | enum | Pass any of the identifiers of customers for loyalty or non-loyalty returns. Value: `mobile`, `email`, `external_id`, `id`.
purchase_time* | date-time | Date and time of the actual purchase of the return items.
number* | string | The actual transaction number of the returned item.
type* | enum | Specify type as `RETURN` for regular transaction returns, `NOT_INTERESTED_RETURN` for not-interested transaction returns.
return_type* | enum | Specify `FULL` to return the entire transaction, `LINE_ITEM` to return a particular line-item of the transaction, `AMOUNT` to return the transaction amount instead of replacement.

<aside class="notice">Parameters marked with * are mandatory.</aside>



## Update Transaction Details

> Sample Request

```html
https://api.capillary.co.in/v1.1/transaction/update?format=xml
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
		"notes": "",
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

Lets you convert a not_interested transaction to a regular transaction ((Retro Transaction). You can also update both transaction and line-item level custom field and extended field details of a transaction.

### Resource Information
| | |
--------- | ----------- |
URI | `/update`
HTTP Methods | POST
API Version | v1.1 
Batch Support | Yes 


### Request URL
`https://{host}/v1.1/transaction/update?format={xml/json}`

### Request Body Parameters 
Parameter | Datatype | Description
--------- | -------- | -----------
id** | int | Unique id of the transaction that you want to update.
number** | string | Transaction number that you need to update.
mobile/external_id/email/id* | string | Pass any one of the identifiers of the customer associated to the transaction. 
update_till | string | Till code associated to the transaction update.
notes | string | Reason for the transaction update for reference.
extended_fields | obj | Update extended field details of the transaction.
custom_fields | obj | Update custom field details of the transaction.

<aside class="notice">Any one among the parameters marked with ** is mandatory. </aside>

### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
extended_fields | obj | Extended field details  of the transaction that are updated.
custom_fields | obj | Custom field details of the transaction that are updated.
id | long | Unique ID of the transaction generated by the system.
number | string | Bill or transaction number.
type | enum | Current transaction type.
customer | obj | Customer details associated to the transaction.




## Retro Transaction

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/transaction/update?format=json
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
        "billing_time": "2018-04-01 00:00:00",
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

To avail Retro Transaction, you need to enable **CONF_RETRO_TRANSACTION_ENABLE** on InTouch > **Settings** > **Systems & Deployment** > **InTouch PoS Configuration** > **Billing** page. 

On the Billing page, you will also see a configuration to set the maximum duration allowed convert a not-interested transaction regular.

* CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS	
* CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS

### Additional Header Required for Retro Transaction

'X-CAP-CLIENT-SIGNATURE'

To recognize which source has made the retro call, you need to pass the name of the source. It is recommended to use a single name for a source so that it would be easy to track retro transactions of each source.  


Example '"X-CAP-CLIENT-SIGNATURE":"INTOUCH_BLR"'

### Resource Information
| | |
--------- | ----------- |
URI | `/update`
HTTP Methods | POST
API Version | v1.1
Batch Support | Yes

### Request URL
`https://{host}/v1.1/transaction/update?format={xml/json}`


### Request Body Parameters 

Parameter | Datatype | Description
--------- | -------- | -----------
mobile/external_id/email/id* | string | Pass any one of the customer identifiers.
new_type* | enum | Specify `REGULAR` to convert to regular transaction.
notes | string | Provide any additional information about the conversion for reference.
id* | int | Unique ID of the transaction that you want to convert.
old_type* | enum | Earlier type of transaction. Usually, it will be `NOT_INTERESTED`.

<aside class="notice">Parameters marked with * are mandatory.</aside>



### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id | long | Unique transaction ID generated internally for return.
customer | obj | Details of the customer associated to the transaction. Not applicable for `NOT_INTERESTED` transactions.
lifetime_points | int | Total loyalty points earned by the customer to date.
lifetime_purchases | int | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.  
loyalty_points | int | Current active loyalty points (neither redeemed nor expired) of the customer.
type | enum | Type of transaction. Value: `return` for loyalty transaction, `not_interested_return` for non-loyalty or not-interested transactions.
source | enum | Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source). 
current_slab | string | Current loyalty tier of the customer.
tier_expiry_date | date-time | Expiry date of the current tier in `YYYY-MM-DD HH:MM:SS` format.
points_summaries | obj | Shows the details of the loyalty points.
programId | long | Unique ID of the loyalty program associated to the points summary.
redeemed | int | In total points earned from the program, the total number of points that are redeemed.
expired | int | In total points earned from the program, the total number of points that are expired.
returned | int | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.
adjusted | int | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited.
cumulativePurchases | double | Total purchases amount of the customer in the stores associated to the current loyalty program.
currentSlab | string | Current tier of the customer in the loyalty program.
nextSlab | string | Next loyalty tier of the customer.
nextSlabSerialNumber | int | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.
nextSlabDescription | string | Description of the next tier as saved in the loyalty program.
slabSNo | int | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.
slabExpiryDate | date-time | Expiry date of the current loyalty tier of the customer in `YYYY-MM-DD HH:MM:SS`.
billing_time | date-time | Actual date and time of the transaction.
type | enum | Loyalty type of the customer. `LOYALTY` if the customer is enrolled in the org's loyalty program, `NON_LOYALTY` if customer has not enrolled in the loyalty program but registered mobile number or email id with the org.
old_id | long | Previous ID of the transaction. 
old_type | enum | Previous transaction type - usually `NOT_INTERESTED` for retro transaction.





## Get Transaction Details

> Sample Request


```html
https://us.api.capillarytech.com/v1.1/transaction/get?number=BILL7&format=json
```


> Sample Response

```json
{
   "response":{
      "status":{
         "success":"true",
         "code":200,
         "message":"Success"
      },
      "transactions":{
         "count":1,
         "transaction":[
            {
               "customer":{
                  "mobile":"918036151289",
                  "first_name":"Tom",
                  "last_name":"Sawyer",
                  "email":"tom.sawyer@example.com",
                  "external_id":"XYPZ001",
                  "source":"instore"
               },
               "billing_till":{
                  "code":"mobilepush.1",
                  "name":"mobilepush.1"
               },
               "billing_store":{
                  "code":"storecode",
                  "name":"webstore1"
               },
               "id":"293790472",
               "number":"004_QAT4967003427638098544",
               "type":"REGULAR",
               "outlier_status":"NORMAL",
               "store":"qat_dohafestivalcityqatar.1",
               "delivery_status":"DELIVERED",
               "source":"instore",
               "custom_fields":{
                  "field":[
                     {
                        "name":"tax_amount",
                        "value":"0"
                     },
                     {
                        "name":"discount_transaction",
                        "value":"0"
                     },
                     {
                        "name":"sales_localcurrency",
                        "value":"171"
                     }
                  ]
               },
               "extended_fields":{
                  "field":[
                     {
                        "name":"tax_amount",
                        "value":"0"
                     },
                     {
                        "name":"cashier_id",
                        "value":"Leah"
                     }
                  ]
               },
               "local_currency":{
                  "id":"69433407",
                  "ratio":"1.009",
                  "base_currency":{
                     "id":"227",
                     "name":"United Arab Emirates Dirham",
                     "symbol":"د.إ"
                  },
                  "transaction_currency":{
                     "id":"164",
                     "name":"Qatari riyal",
                     "symbol":"﷼"
                  },
                  "amount":"171.0",
                  "value":"172.47",
                  "discount":"0.0",
                  "gross_amount":"171.0"
               },
               "amount":"172.47",
               "billing_time":"2020-03-27 13:30:58",
               "auto_update_time":"2020-03-28 07:01:59",
               "gross_amount":"",
               "discount":"",
               "notes":"POS, Leah, 14, MNS, 4.1.0.0,687849,QATAR",
               "line_items":{
                  "line_item":[
                     {
                        "type":"REGULAR",
                        "outlier_status":"NORMAL",
                        "serial":"11",
                        "item_code":"20119183",
                        "description":"MOZZARELLA GIRASOLI",
                        "qty":"1",
                        "rate":"31.27",
                        "value":"31.27",
                        "discount":"0",
                        "img_url":"",
                        "amount":"31.27",
                        "returnable_days":"-1",
                        "extended_fields":{
                           "field":[
                              {
                                 "name":"tax_code",
                                 "value":"TAXABLE"
                              },
                              {
                                 "name":"vat_amount",
                                 "value":"0"
                              }
                           ]
                        },
                        "local_currency":{
                           "id":"228779692",
                           "ratio":"1.009",
                           "base_currency":{
                              "id":"227",
                              "name":"United Arab Emirates Dirham",
                              "symbol":"د.إ"
                           },
                           "transaction_currency":{
                              "id":"164",
                              "name":"Qatari riyal",
                              "symbol":"﷼"
                           },
                           "amount":"31.267",
                           "value":"31.267",
                           "rate":"31.267",
                           "discount":"0.0"
                        },
                        "combo_items":{
                           "combo_item":[

                           ]
                        },
                        "addon_items":{
                           "addon_item":[

                           ]
                        },
                        "split_items":{
                           "split_item":[

                           ]
                        },
                        "attributes":{
                           "attribute":[
                              {
                                 "name":"item_group",
                                 "value":"A12010101"
                              }
                           ]
                        }
                     },
                     {
                        "type":"REGULAR",
                        "outlier_status":"NORMAL",
                        "serial":"10",
                        "item_code":"60272845",
                        "description":"8 CHOC HAZLE CHUNK COOKIE",
                        "qty":"1",
                        "rate":"20.17",
                        "value":"20.17",
                        "discount":"0",
                        "img_url":"",
                        "amount":"20.17",
                        "returnable_days":"-1",
                        "extended_fields":{
                           "field":[
                              {
                                 "name":"tax_code",
                                 "value":"TAXABLE"
                              },
                              {
                                 "name":"vat_amount",
                                 "value":"0"
                              }
                           ]
                        },
                        "local_currency":{
                           "id":"228779693",
                           "ratio":"1.009",
                           "base_currency":{
                              "id":"227",
                              "name":"United Arab Emirates Dirham",
                              "symbol":"د.إ"
                           },
                           "transaction_currency":{
                              "id":"164",
                              "name":"Qatari riyal",
                              "symbol":"﷼"
                           },
                           "amount":"20.172",
                           "value":"20.172",
                           "rate":"20.172",
                           "discount":"0.0"
                        },
                        "combo_items":{
                           "combo_item":[

                           ]
                        },
                        "addon_items":{
                           "addon_item":[

                           ]
                        },
                        "split_items":{
                           "split_item":[

                           ]
                        },
                        "attributes":{
                           "attribute":[
                              {
                                 "name":"item_group",
                                 "value":"A11020301"
                              }
                           ]
                        }
                     },
                     {
                        "type":"REGULAR",
                        "outlier_status":"NORMAL",
                        "serial":"1",
                        "item_code":"21033569",
                        "description":"SUPERSOFT THICK",
                        "qty":"1",
                        "rate":"15.13",
                        "value":"15.13",
                        "discount":"0",
                        "img_url":"",
                        "amount":"15.13",
                        "returnable_days":"-1",
                        "extended_fields":{
                           "field":[
                              {
                                 "name":"tax_code",
                                 "value":"TAXABLE"
                              },
                              {
                                 "name":"vat_amount",
                                 "value":"0"
                              }
                           ]
                        },
                        "local_currency":{
                           "id":"228779702",
                           "ratio":"1.009",
                           "base_currency":{
                              "id":"227",
                              "name":"United Arab Emirates Dirham",
                              "symbol":"د.إ"
                           },
                           "transaction_currency":{
                              "id":"164",
                              "name":"Qatari riyal",
                              "symbol":"﷼"
                           },
                           "amount":"15.129",
                           "value":"15.129",
                           "rate":"15.129",
                           "discount":"0.0"
                        },
                        "combo_items":{
                           "combo_item":[

                           ]
                        },
                        "addon_items":{
                           "addon_item":[

                           ]
                        },
                        "split_items":{
                           "split_item":[

                           ]
                        },
                        "attributes":{
                           "attribute":[
                              {
                                 "name":"item_group",
                                 "value":"A11020201"
                              }
                           ]
                        }
                     }
                  ]
               },
               "item_status":{
                  "success":"true",
                  "code":600,
                  "message":"Transaction retrieved successfully"
               }
            }
         ]
      }
   }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <response>
      <status>
         <code>200</code>
         <message>Success</message>
         <success>true</success>
      </status>
      <transactions>
         <count>1</count>
         <transaction>
            <element>
               <amount>172.47</amount>
               <auto_update_time>2020-03-28 07:01:59</auto_update_time>
               <billing_store>
                  <code>storecode</code>
                  <name>webstore1</name>
               </billing_store>
               <billing_till>
                  <code>mobilepush.1</code>
                  <name>mobilepush.1</name>
               </billing_till>
               <billing_time>2020-03-27 13:30:58</billing_time>
               <custom_fields>
                  <field>
                     <element>
                        <name>tax_amount</name>
                        <value>0</value>
                     </element>
                     <element>
                        <name>discount_transaction</name>
                        <value>0</value>
                     </element>
                     <element>
                        <name>sales_localcurrency</name>
                        <value>171</value>
                     </element>
                  </field>
               </custom_fields>
               <customer>
                  <email>tom.sawyer@example.com</email>
                  <external_id>XYPZ001</external_id>
                  <first_name>Tom</first_name>
                  <last_name>Sawyer</last_name>
                  <mobile>918036151289</mobile>
                  <source>instore</source>
               </customer>
               <delivery_status>DELIVERED</delivery_status>
               <discount />
               <extended_fields>
                  <field>
                     <element>
                        <name>tax_amount</name>
                        <value>0</value>
                     </element>
                     <element>
                        <name>cashier_id</name>
                        <value>Leah</value>
                     </element>
                  </field>
               </extended_fields>
               <gross_amount />
               <id>293790472</id>
               <item_status>
                  <code>600</code>
                  <message>Transaction retrieved successfully</message>
                  <success>true</success>
               </item_status>
               <line_items>
                  <line_item>
                     <element>
                        <addon_items>
                           <addon_item />
                        </addon_items>
                        <amount>31.27</amount>
                        <attributes>
                           <attribute>
                              <element>
                                 <name>item_group</name>
                                 <value>A12010101</value>
                              </element>
                           </attribute>
                        </attributes>
                        <combo_items>
                           <combo_item />
                        </combo_items>
                        <description>MOZZARELLA GIRASOLI</description>
                        <discount>0</discount>
                        <extended_fields>
                           <field>
                              <element>
                                 <name>tax_code</name>
                                 <value>TAXABLE</value>
                              </element>
                              <element>
                                 <name>vat_amount</name>
                                 <value>0</value>
                              </element>
                           </field>
                        </extended_fields>
                        <img_url />
                        <item_code>20119183</item_code>
                        <local_currency>
                           <amount>31.267</amount>
                           <base_currency>
                              <id>227</id>
                              <name>United Arab Emirates Dirham</name>
                              <symbol>د.إ</symbol>
                           </base_currency>
                           <discount>0.0</discount>
                           <id>228779692</id>
                           <rate>31.267</rate>
                           <ratio>1.009</ratio>
                           <transaction_currency>
                              <id>164</id>
                              <name>Qatari riyal</name>
                              <symbol>﷼</symbol>
                           </transaction_currency>
                           <value>31.267</value>
                        </local_currency>
                        <outlier_status>NORMAL</outlier_status>
                        <qty>1</qty>
                        <rate>31.27</rate>
                        <returnable_days>-1</returnable_days>
                        <serial>11</serial>
                        <split_items>
                           <split_item />
                        </split_items>
                        <type>REGULAR</type>
                        <value>31.27</value>
                     </element>
                     <element>
                        <addon_items>
                           <addon_item />
                        </addon_items>
                        <amount>20.17</amount>
                        <attributes>
                           <attribute>
                              <element>
                                 <name>item_group</name>
                                 <value>A11020301</value>
                              </element>
                           </attribute>
                        </attributes>
                        <combo_items>
                           <combo_item />
                        </combo_items>
                        <description>8 CHOC HAZLE CHUNK COOKIE</description>
                        <discount>0</discount>
                        <extended_fields>
                           <field>
                              <element>
                                 <name>tax_code</name>
                                 <value>TAXABLE</value>
                              </element>
                              <element>
                                 <name>vat_amount</name>
                                 <value>0</value>
                              </element>
                           </field>
                        </extended_fields>
                        <img_url />
                        <item_code>60272845</item_code>
                        <local_currency>
                           <amount>20.172</amount>
                           <base_currency>
                              <id>227</id>
                              <name>United Arab Emirates Dirham</name>
                              <symbol>د.إ</symbol>
                           </base_currency>
                           <discount>0.0</discount>
                           <id>228779693</id>
                           <rate>20.172</rate>
                           <ratio>1.009</ratio>
                           <transaction_currency>
                              <id>164</id>
                              <name>Qatari riyal</name>
                              <symbol>﷼</symbol>
                           </transaction_currency>
                           <value>20.172</value>
                        </local_currency>
                        <outlier_status>NORMAL</outlier_status>
                        <qty>1</qty>
                        <rate>20.17</rate>
                        <returnable_days>-1</returnable_days>
                        <serial>10</serial>
                        <split_items>
                           <split_item />
                        </split_items>
                        <type>REGULAR</type>
                        <value>20.17</value>
                     </element>
                     <element>
                        <addon_items>
                           <addon_item />
                        </addon_items>
                        <amount>15.13</amount>
                        <attributes>
                           <attribute>
                              <element>
                                 <name>item_group</name>
                                 <value>A11020201</value>
                              </element>
                           </attribute>
                        </attributes>
                        <combo_items>
                           <combo_item />
                        </combo_items>
                        <description>SUPERSOFT THICK</description>
                        <discount>0</discount>
                        <extended_fields>
                           <field>
                              <element>
                                 <name>tax_code</name>
                                 <value>TAXABLE</value>
                              </element>
                              <element>
                                 <name>vat_amount</name>
                                 <value>0</value>
                              </element>
                           </field>
                        </extended_fields>
                        <img_url />
                        <item_code>21033569</item_code>
                        <local_currency>
                           <amount>15.129</amount>
                           <base_currency>
                              <id>227</id>
                              <name>United Arab Emirates Dirham</name>
                              <symbol>د.إ</symbol>
                           </base_currency>
                           <discount>0.0</discount>
                           <id>228779702</id>
                           <rate>15.129</rate>
                           <ratio>1.009</ratio>
                           <transaction_currency>
                              <id>164</id>
                              <name>Qatari riyal</name>
                              <symbol>﷼</symbol>
                           </transaction_currency>
                           <value>15.129</value>
                        </local_currency>
                        <outlier_status>NORMAL</outlier_status>
                        <qty>1</qty>
                        <rate>15.13</rate>
                        <returnable_days>-1</returnable_days>
                        <serial>1</serial>
                        <split_items>
                           <split_item />
                        </split_items>
                        <type>REGULAR</type>
                        <value>15.13</value>
                     </element>
                  </line_item>
               </line_items>
               <local_currency>
                  <amount>171.0</amount>
                  <base_currency>
                     <id>227</id>
                     <name>United Arab Emirates Dirham</name>
                     <symbol>د.إ</symbol>
                  </base_currency>
                  <discount>0.0</discount>
                  <gross_amount>171.0</gross_amount>
                  <id>69433407</id>
                  <ratio>1.009</ratio>
                  <transaction_currency>
                     <id>164</id>
                     <name>Qatari riyal</name>
                     <symbol>﷼</symbol>
                  </transaction_currency>
                  <value>172.47</value>
               </local_currency>
               <notes>POS, Leah, 14, MNS, 4.1.0.0,687849,QATAR</notes>
               <number>004_QAT4967003427638098544</number>
               <outlier_status>NORMAL</outlier_status>
               <source>instore</source>
               <store>qat_dohafestivalcityqatar.1</store>
               <type>REGULAR</type>
            </element>
         </transaction>
      </transactions>
   </response>
</root>
```


This API allows you to fetch the details of a specific transaction based on the transaction id.

### Resource Information
| | |
--------- | ----------- |
URI | `/get`
HTTP Methods | GET
Authentication | Yes
Batch Support | Yes



### Additional Header

Header | Description
------ | -----------
language | Specify the ISO language code to get transaction level extended field details in your preferred language (other than English). For example, `zh` for Chinese, `id` for Indonesian, `ar` for Arabic.

### Request URL
`https://{host}/v1.1/transaction/get?{requestParams}&format={xml/json}`


### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
id* | long | Unique ID of the transaction to fetch.
number* | string | Unique transaction number that you want to fetch.
store_code* | string | Fetch the transactions of a specific store. Pass the store code.
till_code* | string | Fetch the transactions of a specific TILL. Pass the respective TILL code.
amount | double | Filter transactions of a specific amount. 
date | date | Filter transactions of a specific date. Pass the date in `YYYY-MM-DD` format.
type | enum | Filter transactions of a specific type. Values: `REGULAR`, `NOT_INTERESTED`, `RETURN`, `NOT_INTERESTED_RETURN`, `MIXED`, `NI_MIXED`, `ALL` (to retrieve any transaction type, for mixed or NI mixed, it retrieves both transaction and return details). By default it shows the details of regular transaction.
tenders | boolean | Pass `true` to retrieve transaction details.
credit_notes | boolean | Pass `true` to retrieve credit notes.
user_id | boolean | Pass `true` to retrieve unique ID of the customer in response.



<aside class="notice">Any one among the parameters marked with * is mandatory.</aside>



### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id | long | Unique transaction ID generated internally.
customer | obj | Details of the customer associated to the transaction. Not applicable for `NOT_INTERESTED` transactions.
lifetime_points | int | Total loyalty points earned by the customer to date.
lifetime_purchases | int | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.  
loyalty_points | int | Current active loyalty points (neither redeemed nor expired) of the customer.
type | enum | Type of transaction. Value: `regular` for loyalty transaction, `not_interested` for non-loyalty or not-interested transactions.
source | enum | Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source). 
current_slab | string | Current loyalty tier of the customer.
tier_expiry_date | date-time | Expiry date of the current tier in `YYYY-MM-DD HH:MM:SS` format.
points_summaries | obj | Shows the details of the loyalty points.
programId | long | Unique ID of the loyalty program associated to the points summary.
redeemed | int | In total points earned from the program, the total number of points that are redeemed.
expired | int | In total points earned from the program, the total number of points that are expired.
returned | int | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.
adjusted | int | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited.
cumulativePurchases | double | Total purchases amount of the customer in the stores associated to the current loyalty program.
currentSlab | string | Current tier of the customer in the loyalty program.
nextSlab | string | Next loyalty tier of the customer.
nextSlabSerialNumber | int | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.
nextSlabDescription | string | Description of the next tier as saved in the loyalty program.
slabSNo | int | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.
slabExpiryDate | date-time | Expiry date of the current loyalty tier of the customer in `YYYY-MM-DD HH:MM:SS`.
registered_on | date-time | Date on which the customer is enrolled in the org's loyalty.
updated_on | date-time | Recent date on which the customer details are updated.
type | enum | Loyalty type of the customer. `LOYALTY` if the customer is enrolled in the org's loyalty program, `NON_LOYALTY` if customer has not enrolled in the loyalty program but registered mobile number or email id with the org.
custom_fields | obj |Transaction or line-item level custom field details - field name (`name`) and field value (`value`).
extended_fields | obj | Transaction or line-item level extended field details - extended field name (`name`) and extended field value (`value`).
billing_till | obj | TILL associated to the transaction - TILL`name` and TILL `code`.
billing_store | obj | Store associated to the transaction - store`name` and store `code`.
extended_fields | obj | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in `line_item` object.
payment_details | obj | Payment details for the transaction.
attributes | obj | Attributes  of the current line-item in name and value pairs.
mode | string | Mode of payment. This has to be the mode configured for your org.
value | float | Amount paid through the current mode.
attributes | obj | Payment mode attributes in name and value pairs.
custom_fields | obj | Transaction level custom field details. Pass line-item level custom field details in `line_item` object.
line_items | obj | Details of transaction line-items.
serial | long | Serial number of the current line-item.
description | string | Description of the line-item.
item_code | string | Unique line-item code.
variant | string | Variant code of the item. Applicable for variant product.
addon_items | obj | Details of add-on items. For example, pizza with extra cheese, and personalized toppings.
combo_items | obj | Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps. 
split_items | obj | Details of split items. For example, a necklace having gold rate, store rate, making charge, and wastage charges.
item_code | string | Unique code of the add-on, split, or combo item. For example, combo-22, pizza01_addon.
quantity | double | Quantity of the current add-on, split, or combo item.
local_currency | obj | Currency of the store associated to the transaction.
id | long | Unique ID of the currency converter.
ratio | double | Currency conversion ratio (local currency/base currency)
base_currency | obj | Details of the org's base currency.
id | long | Unique ID of the base currency.
name | string | Name of the base currency.
symbol | string | Symbol of the base currency.
transaction_currency | obj | Details of transacted currency. This is usually local currency.
id | long | Unique ID of the transacted currency.
name | string | Name of the transacted currency.
symbol | string | Symbol of the transacted currency.


## Response Codes
### Success Codes
Code  | Description                         
------|------------------------------------ 
600   | Transaction added successfully.
      | Transaction retrieved successfully.
      | Transaction updated successfully.    
1630 | Transaction marked as regular through Retro conversion. Transaction added successfully.


### Error Codes
Code | Description
---- | -----------
500 | Unable to retrieve transaction.
517 | Rate limit exceeded for that specific user.
601 | Transaction failed. Transaction amount, quantity, rate, or discount is invalid.
602 | Transaction number is invalid.
603 | Points are already used (Deprecated).
604 | Transaction number already exists.
605 | Invalid transaction type. Only regular, return and not-interested transaction types are supported.
606 | Customer identifier is not passed. Please enter customer's mobile or email or external id to process.
607 | No transaction id passed. Please pass the transaction id to process.
608 | Unable to add transaction.
609 | Update failed. Please verify all the fields.
610 | Unable to register. Please verify all the fields.
611 | Customer not found.
614 | Transaction is already cancelled.
615 | Transaction details are not passed.
616 | Item code already exists.
617 | Invalid attribute for the item.
618 | Customer is marked as fraud.
619 | Transaction id is not provided.
620 | Transaction id is invalid.
621 | Transaction date is invalid. Transaction date should be within the accepted past or future date range limit.
622 | Unable to add line-item.
623 | Unable to trigger other related events for the transaction.
624 | Unable to process return-transaction. You can make a return only after adding a transaction.
625 | Transaction number does not exist.
626 | Unable to return transaction. The quantity of returned items are more than purchased items.
627 | Quantity cannot be negative.
628 | Invalid return transaction type.
629 | The return quantity of the item is more than available quantity.
630 | The return amount is more than the transaction/line-item amount.
631 | Transaction amount cannot be negative.
632 | Cannot return the transaction with return type LINE_ITEM because the type AMOUNT has already been used for returning the same transaction.
633 | The entire transaction is already returned.
634 | This transaction is already returned.
635 | Cannot return the transaction with the return type AMOUNT because the type LINE_ITEM has been used for returning the same transaction.
636 | The transaction is already returned with the return type as LINE_ITEM. You can process return for other items only with return type LINE_ITEM.
637 | Unable to revert points issued to the customer (for return transaction). Please try again later.
638 | Unable to return transaction. The transaction is already returned with type LINE_ITEM. Hence, you cannot use the type AMOUNT for the same transaction.
639 | Unable to return full transaction. A part of the transaction or complete transaction is already returned.
640 | Points or coupons are not redeemed for this transaction.
641 | No customer found.
642 | Redemption failed. An error occurred in points/coupon redemption.
643 | Invalid transaction. The transaction date exceeds the accepted future date limit.
644 | Invalid transaction. The transaction date cannot be less than the accepted past date limit.
645 | Transaction addition failed for not interested.
646 | Customer registration failed. The email id is invalid.
647 | Customer registration failed. Email id is already assigned to another customer.
648 | Customer registration failed. Mobile number is already assigned to another customer.
649 | Customer registration failed. Mobile number is invalid.
650 | Customer registration failed. Mobile number is not accepted as a unique identifier.
651 | Customer registration failed. Mobile number is required for registration.
652 | Customer registration failed. Mobile number/email id/external id is invalid.
653 | Customer registration failed. External id is already assigned to another customer.
654 | Customer registration failed. External id is not accepted as a unique identifier.
655 | Customer registration failed. Customer is not registered in loyalty program.
656 | No customer found.
657 | Customer registration failed. Registration in EUP failed.
658 | Customer registration failed. Only email id is not sufficient for registration.
659 | Customer registration failed. Please enter email id to register.
660 | Customer registration failed. Registration date exceeds the accepted past or future date limit.
661 | Amount of the line-item amount cannot be negative.
662 | Value of a line cannot be negative.
663 | Rate of a line-item cannot be negative
664 | Discount of a line-item cannot be negative.
665 | Gross amount of the transaction cannot be negative.
666 | Discount cannot be negative.
667 | Unable to find the transaction ID for this customer.
668 | Unable to find the transaction number for this customer.
669 | Unable to update custom field.
670 | Transaction id/number is not provided.
671 | Invalid Store or TILL code.
    | Invalid category code.
672 | Batch limit exceeded.
673 | Returning of transactions is not allowed.
674 | Returning of line item is not allowed.
675 | Returning of transaction amount is not allowed.
676 | Returning of a complete transaction amount is not allowed.
677 | Unable to process. Please enter a transaction number for returning a transaction.
678 | Amount of returned item is more than purchased item.
679 | Line-item(s) to be returned is not specified.
680 | No transactions of the specific customer were found.
681 | Transactions are blocked for this customer.
682 | Currency conversion is disabled for the org.
683 | Failed to call new bill event EMF.
684 | Failed EMF new bill DVS event.
685 | Field length too long.
686 | Unable to add transaction.
687 | Points activities are queued and will be updated later.
    | Item code {x} merge is not supported.
688 | No matching line-item found for return.
    | Transaction number not found.
689 | Points processing failed
690 | Points processing failed
691 | Points processing failed
692 | Points processing failed
693 | Points processing failed
694 | Points processing failed
695 | Invalid configuration. Please report to the Capillary Support.
696 | Points processing failed
697 | Points processing failed
698 | Points processing failed.
699 | Invalid configuration. Please report to the Capillary Support.
710 | Return bill event failed from EMF.
820 | Current operation is not allowed. The customer is marked as fraud.
1101 | Invalid loyalty program ID passed.
1102 | Invalid currency conversion ratio passed.
1103 | Invalid shipping store code passed.
1623 | Transaction type is invalid.
1624 | Insufficient parameters passed to fetch transaction.
1625 | Target type is not specified.
1626 | The requested transaction type cannot be changed.
1627 | The transaction is already marked as retro.
1628 | Transaction id is invalid
1629 | Client signature is required to perform this action
1631 | Retro transaction is not enabled for your organization
1632 | Registration date is too older than the transaction date. See the retro configuration set for your organization
1633 | The duration between registration and transaction mapping exceeds the limit set
1634 | Return type is invalid
1635 | Please pass line-items that need to be returned
1636 | Transaction status is invalid
9601 | Failed to add line-item.
9602 | Failed to add credit notes.
9603 | Failed to add payment more details (tender).
9604 | Failed to add custom fields
9605 | Base currency is not set for the org.
9606 | Currency not passed for the transaction.
9607 | Payment mode (tender) not found.
9608 | Line-item with the item code {x} passed is marked as outlier.
9609 | Invalid payment attribute passed.
9610 | New bill event failed. Points are not awarded.
9611 | Transaction is marked as outlier.
9612 | Unable to save credit notes.
9613 | Invalid payment attribute.
9614 | Multiple loyalty bills found to be returned.
9615 | Validity (in days) for return policy is not defined.
9616 | Single loyalty bill found. Allowing regular return.
