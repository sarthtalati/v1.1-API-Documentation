# Organization
The organization entity holds configuration details and transaction details of an organization. You to retrieve the org level details such as profile information, configurations set on InTouch, custom field details, transaction details and top selling products at the organization.

You cannot modify the existing information using the organization entity.


## Retrieve Org Details

```html
# Sample Request
http://api.intouch.capillarytech.com/v1.1/organization/get.json
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
    <organization>
        <id>1</id>
        <name>Capillary Technologies</name>
        <address>20th Main, 1st phase, BTM Layout</address>
        <language>English</language>
        <currency>Indian Rupee</currency>
        <timezone>Asia/Kolkata</timezone>
        <timezone_offset>UTC+05:30</timezone_offset>
        <min_sms_hour>0</min_sms_hour>
        <max_sms_hour>24</max_sms_hour>
        <logo>http://capillary.co.in/email_uploads/webclient_default.png</logo>
        <website>http://www.example.com</website>
        <country>India</country>
        <country_code>IN</country_code>
        <state>Karnataka</state>
        <city>Bangalore</city>
        <locality>Silk Board</locality>
        <pincode>560076</pincode>
    </organization>
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
        "organization": {
            "id": "1", 
            "name": "Capillary Technologies", 
            "address": "20th Main, 1st phase, BTM Layout", 
            "language": "English", 
            "currency": "Indian Rupee", 
            "timezone": "Asia/Kolkata", 
            "timezone_offset": "UTC+05:30", 
            "min_sms_hour": "0", 
            "max_sms_hour": "24", 
            "logo": "http://capillary.co.in/email_uploads/webclient_default.png", 
            "website": "http://www.example.com", 
            "country": "India", 
            "country_code": "IN", 
            "state": "Karnataka", 
            "city": "Bangalore", 
            "locality": "Silk Board", 
            "pincode": "560076"
        }
    }
}
```
Retrieves the details of the organization provided during the org setup on InTouch. Details such as org id, name, address, base language, base currency, time zone, website address and so on will be returned through this  API.

### Resource Information
Attribute | Value
--------- | -----
URI | organization/get
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns entire details of the organization
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/organization/get.<xml/json>`




## Retrieve Org Entities
```html
http://api.intouch.capillarytech.com/v1.1/organization/entities?format=json&type=till
```

```xml
<response>
    <pagination>
        <limit>200</limit>
        <offset>0</offset>
        <total>4</total>
    </pagination>
    <status>
        <success>true</success>
        <code>200</code>
        <message>SUCCESS</message>
    </status>
    <organization>
        <entities>
            <entity>
                <item_status>
                    <success>true</success>
                    <code>200</code>
                    <message>Entity search successful</message>
                </item_status>
                <id>15001639</id>
                <is_active>1</is_active>
                <code>api.002</code>
                <name>api.002</name>
                <description/>
                <last_updated_by>4</last_updated_by>
                <last_updated_on>2013-12-06 10:12:36</last_updated_on>
                <time_zone_id>243</time_zone_id>
                <currency_id>-1</currency_id>
                <language_id>-1</language_id>
                <timezones>
                    <base_timezone>
                        <label>Asia/Macau</label>
                        <offset>+08:00</offset>
                    </base_timezone>
                </timezones>
                <currencies>
                    <base_currency>
                        <symbol/>
                        <label/>
                    </base_currency>
                </currencies>
                <language_code/>
                <language_locale>IN</language_locale>
                <languages>
                    <base_language>
                        <lang/>
                        <locale>IN</locale>
                    </base_language>
                </languages>
                <parent/>
                <country_code>IN</country_code>
                <username>api.002</username>
                <last_login/>
                <type>TILL</type>
            </entity>
            <entity>
                <item_status>
                    <success>true</success>
                    <code>200</code>
                    <message>Entity search successful</message>
                </item_status>
                <id>15000593</id>
                <is_active>1</is_active>
                <code>api.001</code>
                <name>api.001</name>
                <description/>
                <last_updated_by>15000449</last_updated_by>
                <last_updated_on>2013-07-10 14:07:12</last_updated_on>
                <time_zone_id>243</time_zone_id>
                <currency_id>-1</currency_id>
                <language_id>-1</language_id>
                <timezones>
                    <base_timezone>
                        <label>Asia/Macau</label>
                        <offset>+08:00</offset>
                    </base_timezone>
                </timezones>
                <currencies>
                    <base_currency>
                        <symbol/>
                        <label/>
                    </base_currency>
                </currencies>
                <language_code/>
                <language_locale>IN</language_locale>
                <languages>
                    <base_language>
                        <lang/>
                        <locale>IN</locale>
                    </base_language>
                </languages>
                <parent/>
                <country_code>IN</country_code>
                <username>api.001</username>
                <last_login/>
                <type>TILL</type>
            </entity>
            <entity>
                <item_status>
                    <success>true</success>
                    <code>200</code>
                    <message>Entity search successful</message>
                </item_status>
                <id>15004460</id>
                <is_active>1</is_active>
                <code>api.004</code>
                <name>api.004</name>
                <description/>
                <last_updated_by>4</last_updated_by>
                <last_updated_on>2014-05-05 16:05:35</last_updated_on>
                <time_zone_id>243</time_zone_id>
                <currency_id>-1</currency_id>
                <language_id>-1</language_id>
                <timezones>
                    <base_timezone>
                        <label>Asia/Macau</label>
                        <offset>+08:00</offset>
                    </base_timezone>
                </timezones>
                <currencies>
                    <base_currency>
                        <symbol/>
                        <label/>
                    </base_currency>
                </currencies>
                <language_code/>
                <language_locale>IN</language_locale>
                <languages>
                    <base_language>
                        <lang/>
                        <locale>IN</locale>
                    </base_language>
                </languages>
                <parent/>
                <country_code>IN</country_code>
                <username>api.004</username>
                <last_login/>
                <type>TILL</type>
            </entity>
            <entity>
                <item_status>
                    <success>true</success>
                    <code>200</code>
                    <message>Entity search successful</message>
                </item_status>
                <id>15001817</id>
                <is_active>1</is_active>
                <code>apis.001</code>
                <name>apis.001</name>
                <description/>
                <last_updated_by>4</last_updated_by>
                <last_updated_on>2016-12-31 16:12:41</last_updated_on>
                <time_zone_id>243</time_zone_id>
                <currency_id>-1</currency_id>
                <language_id>-1</language_id>
                <timezones>
                    <base_timezone>
                        <label>Asia/Macau</label>
                        <offset>+08:00</offset>
                    </base_timezone>
                </timezones>
                <currencies>
                    <base_currency>
                        <symbol/>
                        <label/>
                    </base_currency>
                </currencies>
                <language_code/>
                <language_locale>IN</language_locale>
                <languages>
                    <base_language>
                        <lang/>
                        <locale>IN</locale>
                    </base_language>
                </languages>
                <parent/>
                <country_code>IN</country_code>
                <username>apis.001</username>
                <last_login/>
                <type>TILL</type>
            </entity>
        </entities>
    </organization>
</response>


```

```json
{
  "response": {
    "pagination": {
      "limit": "200",
      "offset": "0",
      "total": "4"
    },
    "status": {
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "organization": {
      "entities": {
        "entity": [
          {
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "Entity search successful"
            },
            "id": "15001639",
            "is_active": "1",
            "code": "api.002",
            "name": "api.002",
            "last_updated_by": "4",
            "last_updated_on": "2013-12-06 10:12:36",
            "time_zone_id": "243",
            "currency_id": "-1",
            "language_id": "-1",
            "timezones": {
              "base_timezone": {
                "label": "Asia/Macau",
                "offset": "+08:00"
              }
            },
            "currencies": {
              "base_currency": {
                
              }
            },
            "language_locale": "IN",
            "languages": {
              "base_language": { "locale": "IN" }
            },
            "country_code": "IN",
            "username": "api.002",
            "type": "TILL"
          },
          {
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "Entity search successful"
            },
            "id": "15000593",
            "is_active": "1",
            "code": "api.001",
            "name": "api.001",
            "last_updated_by": "15000449",
            "last_updated_on": "2013-07-10 14:07:12",
            "time_zone_id": "243",
            "currency_id": "-1",
            "language_id": "-1",
            "timezones": {
              "base_timezone": {
                "label": "Asia/Macau",
                "offset": "+08:00"
              }
            },
            "currencies": {
              "base_currency": {
                
              }
            },
            "language_locale": "IN",
            "languages": {
              "base_language": { "locale": "IN" }
            },
            "country_code": "IN",
            "username": "api.001",
            "type": "TILL"
          },
          {
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "Entity search successful"
            },
            "id": "15004460",
            "is_active": "1",
            "code": "api.004",
            "name": "api.004",
            "last_updated_by": "4",
            "last_updated_on": "2014-05-05 16:05:35",
            "time_zone_id": "243",
            "currency_id": "-1",
            "language_id": "-1",
            "timezones": {
              "base_timezone": {
                "label": "Asia/Macau",
                "offset": "+08:00"
              }
            },
            "currencies": {
              "base_currency": {
                
              }
            },
            "language_locale": "IN",
            "languages": {
              "base_language": { "locale": "IN" }
            },
            "country_code": "IN",
            "username": "api.004",
            "type": "TILL"
          },
          {
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "Entity search successful"
            },
            "id": "15001817",
            "is_active": "1",
            "code": "apis.001",
            "name": "apis.001",
            "last_updated_by": "4",
            "last_updated_on": "2013-12-31 16:12:41",
            "time_zone_id": "243",
            "currency_id": "-1",
            "language_id": "-1",
            "timezones": {
              "base_timezone": {
                "label": "Asia/Macau",
                "offset": "+08:00"
              }
            },
            "currencies": {
              "base_currency": {
                
              }
            },
            "language_locale": "IN",
            "languages": {
              "base_language": { "locale": "IN" }
            },
            "country_code": "IN",
            "username": "apis.001",
            "type": "TILL"
          }
        ]
      }
    }
  }
}
```
Retrieves the details of zones, stores, store servers, concepts or TILLs configured for the current organization.

### Resource Information
Attribute | Value
--------- | -----
URI | organization/entities
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns the 
API Version | v1.1 
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/organization/entities?format=<xml/json>&type=<type>&id=<id>` 

`http://<cluster url>/v1.1/organization/entities?format=<xml/json>&type=<store/zone/till>`
 
### Request Parameters

Parameter | Description
--------- | -----------
id | Returns the details of a particular organization. id is the organization id
type* | Value: STORE, STR_SERVER, TILL, ZONE, CONCEPTSTORE. Returns details of a specific zone, concept, store, store server, or TILL based on the param passed



## Retrieve Org Configurations
```html
# Sample Request
http://api.capillary.co.in/v1.1/organization/configs?format=json
```

> Sample Request

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <status>
  <success>true</success>
  <code>200</code>
  <message>SUCCESS</message>
  </status>
  <organization>
  <configs>
  <config>
  <key>CONF_USERS_IS_EMAIL_REQUIRED</key>
  <scopes>ORG</scopes>
  <value_type>NUMERIC</value_type>
  <modules>LOYALTY</modules>
  <entity_id>146</entity_id>
  <value>0</value>
  </config>
  <config>
  <key>CONF_USERS_IS_EMAIL_UNIQUE</key>
  <scopes>ORG</scopes>
  <value_type>NUMERIC</value_type>
  <modules>LOYALTY</modules>
  <entity_id>146</entity_id>
  <value>0</value>
  </config>
  <config>
  <key>CONF_LOYALTY_IS_BILL_NUMBER_REQUIRED</key>
  <scopes>ORG</scopes>
  <value_type>NUMERIC</value_type>
  <modules>LOYALTY</modules>
  <entity_id>146</entity_id>
  <value>0</value>
  </config>
  <config>
  <key>CONF_LOYALTY_IS_BILL_NUMBER_UNIQUE</key>
  <scopes>ORG</scopes>
  <value_type>NUMERIC</value_type>
  <modules>LOYALTY</modules>
  <entity_id>146</entity_id>
  <value>0</value>
  </config>
  </configs>
  </organization>
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
        "organization": {
            "configs": {
                "config": [
                    {
                        "key": "CONF_USERS_IS_EMAIL_REQUIRED", 
                        "scopes": "ORG", 
                        "value_type": "NUMERIC", 
                        "modules": "LOYALTY", 
                        "entity_id": "146", 
                        "value": "0"
                    }, 
                    {
                        "key": "CONF_USERS_IS_EMAIL_UNIQUE", 
                        "scopes": "ORG", 
                        "value_type": "NUMERIC", 
                        "modules": "LOYALTY", 
                        "entity_id": "146", 
                        "value": "0"
                    }, 
                    {
                        "key": "CONF_LOYALTY_IS_BILL_NUMBER_REQUIRED", 
                        "scopes": "ORG", 
                        "value_type": "NUMERIC", 
                        "modules": "LOYALTY", 
                        "entity_id": "146", 
                        "value": "0"
                    }, 
                    {
                        "key": "CONF_LOYALTY_IS_BILL_NUMBER_UNIQUE", 
                        "scopes": "ORG", 
                        "value_type": "NUMERIC", 
                        "modules": "LOYALTY", 
                        "entity_id": "146", 
                        "value": "0"
                    }
                ]
            }
        }
    }
}
```

Returns the organization configuration details in key and value pairs.

### Resource Information
Attribute | Value
--------- | -----
URI | organization/configs
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns configuration details of the current organization
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/organization/configs?format=<xml/json>`


## Retrieve Org Statistics
```html
# Sample Request
http://api.intouch.capillarytech.com/v1.1/organization/statistics?format=json
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
   <organization>
      <statistics>
         <avg_basket>1.07142857143</avg_basket>
         <avg_transaction_value>11796.5054945</avg_transaction_value>
         <customers>223</customers>
         <stores>2</stores>
         <products>5</products>
      </statistics>
   </organization>
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
        "organization": {
            "statistics": {
                "avg_basket": "1.07142857143", 
                "avg_transaction_value": "11796.5054945", 
                "customers": "223", 
                "stores": "2", 
                "products": "5"
            }
        }
    }
}

```
Returns the statistical information of the org which contains count of stores, zones, tills, loyalty customers, and products sold; average transaction amount, basket size and so on.

### Resource Information
Attribute | Value
--------- | -----
URI | organization/statistics
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns configuration statistics
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/organization/statistics?format=<xml/json>`


## Retrieve Top Selling Items
```html
# Sample Request
http://api.intouch.capillarytech.com/v1.1/organization/topitems?format=json
```

> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
   <status>
      <success>true</success>
      <code>200</code>
      <message>Some requests have failed due to errors</message>
   </status>
   <organization>
      <item>
         <sku>1331212</sku>
         <price>3000</price>
         <img_url>http://cdn.capillary.co.in/232424234.jpg</img_url>
         <in_stock>true</in_stock>
         <description>Trousers</description>
         <attributes>
            <attribute>
               <name>Color</name>
               <value>Black</value>
            </attribute>
            <attribute>
               <name>Size</name>
               <value>XXL</value>
            </attribute>
         </attributes>
      </item>
      <item>
         <sku>1331213</sku>
         <price>3000</price>
         <img_url>http://cdn.capillary.co.in/232424234.jpg</img_url>
         <in_stock>true</in_stock>
         <description>Shirt</description>
         <attributes>
            <attribute>
               <name>Color</name>
               <value>Black</value>
            </attribute>
            <attribute>
               <name>Size</name>
               <value>XXL</value>
            </attribute>
         </attributes>
      </item>
   </organization>
</response>
```

```json
{
    "response": {
        "status": {
            "success": "true", 
            "code": "200", 
            "message": "Some requests have failed due to errors"
        }, 
        "organization": {
            "item": [
                {
                    "sku": "1331212", 
                    "price": "3000", 
                    "img_url": "http://cdn.capillary.co.in/232424234.jpg", 
                    "in_stock": "true", 
                    "description": "Trousers", 
                    "attributes": {
                        "attribute": [
                            {
                                "name": "Color", 
                                "value": "Black"
                            }, 
                            {
                                "name": "Size", 
                                "value": "XXL"
                            }
                        ]
                    }
                }, 
                {
                    "sku": "1331213", 
                    "price": "3000", 
                    "img_url": "http://cdn.capillary.co.in/232424234.jpg", 
                    "in_stock": "true", 
                    "description": "Shirt", 
                    "attributes": {
                        "attribute": [
                            {
                                "name": "Color", 
                                "value": "Black"
                            }, 
                            {
                                "name": "Size", 
                                "value": "XXL"
                            }
                        ]
                    }
                }
            ]
        }
    }
}
```

Returns top selling items of the current organization.

### Resource Information
Attribute | Value
--------- | -----
URI | organization/topitems
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns top selling items of the organization
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/organization/topitems?format=<xml/json>`




## Retrieve Configured Custom Fields 
```html
# Sample Request
http://api.intouch.capillarytech.com/v1.1/organization/customfields?format=json
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
    <organization>
        <custom_fields>
            <field>
                <name>addresstwo</name>
                <label>Address</label>
                <type>text</type>
                <datatype>String</datatype>
                <default>["1"]</default>
                <phase>2</phase>
                <position>2</position>
                <rule />
                <regex />
                <error />
                <options />
                <scope>loyalty_transaction</scope>
                <is_mandatory>0</is_mandatory>
                <is_disabled>0</is_disabled>
            </field>
        </custom_fields>
    </organization>
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
        "organization": {
            "custom_fields": {
                "field": {
                    "name": "addresstwo", 
                    "label": "Address", 
                    "type": "text", 
                    "datatype": "String", 
                    "default": "[\"1\"]", 
                    "phase": "2", 
                    "position": "2", 
                    "rule": "", 
                    "regex": "", 
                    "error": "", 
                    "options": "", 
                    "scope": "loyalty_transaction", 
                    "is_mandatory": "0", 
                    "is_disabled": "0"
                }
            }
        }
    }
}
```

Returns the details of custom fields configured for the current organization.

### Resource Information
Attribute | Value
--------- | -----
URI | organization/customfields
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns custom fields of the org
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/organization/customfields?format=<xml/json>&scope=<scope>`

### Request Parameter
Parameter | Description
--------- | -----------
Scope | Value: customer_feedback, loyalty_transaction, loyalty_registration, customer_preferences <br> Returns custom field details configured for InStore for that specific module. For example, `scope=customer_feedback` retrieves the custom fields of Customer Feedback window of InStore. <br> If no parameter is passed, custom fields of all modules will be returned.


## Retrieve Configured Payment Modes
```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/organization/tenders
```

> Sample Request

```xml
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>SUCCESS</message>
    </status>
    <organization>
        <tenders>
            <count>6</count>
            <tender>
                <name>CA</name>
                <canonical_name>CASH</canonical_name>
                <description>payment via cash</description>
            </tender>
            <tender>
                <name>Card</name>
                <canonical_name>CARD</canonical_name>
                <description>payment via card, it can be debit/credit card</description>
            </tender>
            <tender>
                <name>Check</name>
                <canonical_name>CHECK</canonical_name>
                <description>payment via cheque</description>
            </tender>
            <tender>
                <name>GIFT</name>
                <canonical_name>POINTS</canonical_name>
                <description>payment via points</description>
            </tender>
            <tender>
                <name>COD</name>
                <canonical_name>CASH_ON_DELIVERY</canonical_name>
                <description>Cash on delivery</description>
            </tender>
            <tender>
                <name>Credit</name>
                <canonical_name>CREDIT</canonical_name>
                <description>no payment, purchase is on credit</description>
            </tender>
        </tenders>
    </organization>
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
    "organization": {
      "tenders": {
        "count": "6",
        "tender": [
          {
            "name": "CA",
            "canonical_name": "CASH",
            "description": "payment via cash"
          },
          {
            "name": "Card",
            "canonical_name": "CARD",
            "description": "payment via card, it can be debit/credit card"
          },
          {
            "name": "Check",
            "canonical_name": "CHECK",
            "description": "payment via cheque"
          },
          {
            "name": "GIFT",
            "canonical_name": "POINTS",
            "description": "payment via points"
          },
          {
            "name": "COD",
            "canonical_name": "CASH_ON_DELIVERY",
            "description": "Cash on delivery"
          },
          {
            "name": "Credit",
            "canonical_name": "CREDIT",
            "description": "no payment, purchase is on credit"
          }
        ]
      }
    }
  }
}
```



Returns the details of payment modes configured for your organization.

### Resource Information
Attribute | Value
--------- | -----
URI | organization/tenders
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns configured payment modes
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/organization/tenders.<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
attribute_name | Retrieves the details of all tenders which contains the specific attribute name 
attribute | Value: true, false. Retrieves attributes of the payment modes if `attribute=true` is passed



## Response Codes
### Success Codes
Code | Description
---- | -----------
3200 | Operation successful.
3200 | Entities are fetched successfully
3200 | Custom fields are fetched successfully
3205 | Configurations saved successfully
3208 | Configuration fetched successfully

### Error Codes
Code | Description
---- | -----------
3201 | Operation failed
3202 | Entities not found
3203 | Custom field(s) not found
3204 | Custom field(s) not found for this scope
3206 | Unable to save configurations
3207 | Customer type is invalid
3209 | No configurations are found for this organization
3211 | Configuration scope is invalid
3212 | Configuration value is invalid