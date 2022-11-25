# Organization
The organization entity holds configuration details and transaction details of an organization. You to retrieve the org level details such as profile information, configurations set on InTouch, custom field details, transaction details and top selling products at the organization.

You cannot modify the existing information using the organization entity.


## Get Org Details

```html
# Sample Request
http://apac.api.capillarytech.com/v1.1/organization/get.json
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
| | |
--------- | ----------- |
URI | `organization/get`
Rate Limited? | Yes
Authentication | Yes
HTTP Methods | GET
Batch Support | No

### Request URL
`http://{host}/v1.1/organization/get.{xml/json}`




## Get Org Entities

> Sample Request

```html
# To get specific entity details
https://us.api.capillarytech.com/v1.1/organization/entities?format=json&type=till
```

```html
# To get child entities
https://us.api.capillarytech.com/v1.1/organization/entities?type=STORE&parent_identifier_type=CONCEPT_CODE&parent_identifier_value=supermarket
```

> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<response>
  <pagination>
    <limit>500</limit>
    <offset>0</offset>
    <total>11</total>
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
          <code>3200</code>
          <message>Entity search successful</message>
        </item_status>
        <id>50008031</id>
        <is_active>1</is_active>
        <code>str.west.supermarket4</code>
        <name>Store West Super Market Four</name>
        <description>Store West Super Market Four</description>
        <last_updated_by>15000449</last_updated_by>
        <last_updated_on>2017-08-22 13:30:20</last_updated_on>
        <custom_fields>
          <field>
            <name>cashiername</name>
            <value>John039</value>
          </field>
          <field>
            <name>cashierid</name>
            <value>102049</value>
          </field>
        </custom_fields>
        <language_translations>
          <field/>
        </language_translations>
        <time_zone_id>0</time_zone_id>
        <currency_id>0</currency_id>
        <language_id>0</language_id>
        <timezones>
          <base_timezone>
            <label>Asia/Kolkata</label>
            <offset>+05:30</offset>
          </base_timezone>
        </timezones>
        <currencies>
          <base_currency>
            <symbol>₹</symbol>
            <label>INR</label>
          </base_currency>
        </currencies>
        <language_code></language_code>
        <language_locale>IN</language_locale>
        <languages>
          <base_language>
            <lang></lang>
            <locale>IN</locale>
          </base_language>
        </languages>
        <parent/>
        <external_id>strwestsm4</external_id>
        <external_id_1></external_id_1>
        <external_id_2></external_id_2>
        <mobile></mobile>
        <channel>instore</channel>
        <land_line></land_line>
        <email></email>
        <address>NA, NA, NA, NA</address>
        <location>
          <latitude></latitude>
          <longitude></longitude>
        </location>
        <type>STORE</type>
      </entity>
      <entity>
        <item_status>
          <success>true</success>
          <code>3200</code>
          <message>Entity search successful</message>
        </item_status>
        <id>50008030</id>
        <is_active>1</is_active>
        <code>str.west.supermarket3</code>
        <name>Store West Super Market Three</name>
        <description>Store West Super Market Three</description>
        <last_updated_by>15000449</last_updated_by>
        <last_updated_on>2017-08-22 13:30:20</last_updated_on>
        <custom_fields>
          <field>
            <name>cashiername</name>
            <value>John038</value>
          </field>
          <field>
            <name>cashierid</name>
            <value>102048</value>
          </field>
        </custom_fields>
        <language_translations>
          <field/>
        </language_translations>
        <time_zone_id>0</time_zone_id>
        <currency_id>0</currency_id>
        <language_id>0</language_id>
        <timezones>
          <base_timezone>
            <label>Asia/Kolkata</label>
            <offset>+05:30</offset>
          </base_timezone>
        </timezones>
        <currencies>
          <base_currency>
            <symbol>₹</symbol>
            <label>INR</label>
          </base_currency>
        </currencies>
        <language_code></language_code>
        <language_locale>IN</language_locale>
        <languages>
          <base_language>
            <lang></lang>
            <locale>IN</locale>
          </base_language>
        </languages>
        <parent/>
        <external_id>strwestsm3</external_id>
        <external_id_1></external_id_1>
        <external_id_2></external_id_2>
        <mobile></mobile>
        <channel>instore</channel>
        <land_line></land_line>
        <email></email>
        <address>NA, NA, NA, NA</address>
        <location>
          <latitude></latitude>
          <longitude></longitude>
        </location>
        <type>STORE</type>
      </entity>
      <entity>
        <item_status>
          <success>true</success>
          <code>3200</code>
          <message>Entity search successful</message>
        </item_status>
        <id>50007998</id>
        <is_active>1</is_active>
        <code>str.east.brand1</code>
        <name>Store East Brand</name>
        <description>Store East Brand</description>
        <last_updated_by>15000449</last_updated_by>
        <last_updated_on>2017-08-22 13:17:39</last_updated_on>
        <custom_fields>
          <field>
            <name>cashiername</name>
            <value>John005</value>
          </field>
          <field>
            <name>cashierid</name>
            <value>102015</value>
          </field>
        </custom_fields>
        <language_translations>
          <field/>
        </language_translations>
        <time_zone_id>0</time_zone_id>
        <currency_id>0</currency_id>
        <language_id>0</language_id>
        <timezones>
          <base_timezone>
            <label>Asia/Kolkata</label>
            <offset>+05:30</offset>
          </base_timezone>
        </timezones>
        <currencies>
          <base_currency>
            <symbol>₹</symbol>
            <label>INR</label>
          </base_currency>
        </currencies>
        <language_code></language_code>
        <language_locale>IN</language_locale>
        <languages>
          <base_language>
            <lang></lang>
            <locale>IN</locale>
          </base_language>
        </languages>
        <parent/>
        <external_id>streastbrand1</external_id>
        <external_id_1></external_id_1>
        <external_id_2></external_id_2>
        <mobile></mobile>
        <channel>instore</channel>
        <land_line></land_line>
        <email></email>
        <address>NA, NA, NA, NA</address>
        <location>
          <latitude></latitude>
          <longitude></longitude>
        </location>
        <type>STORE</type>
      </entity>
      <entity>
        <item_status>
          <success>true</success>
          <code>3200</code>
          <message>Entity search successful</message>
        </item_status>
        <id>50008029</id>
        <is_active>1</is_active>
        <code>str.west.supermarket2</code>
        <name>Store West Super Market Two</name>
        <description>Store West Super Market Two</description>
        <last_updated_by>15000449</last_updated_by>
        <last_updated_on>2017-08-22 13:30:20</last_updated_on>
        <custom_fields>
          <field>
            <name>cashiername</name>
            <value>John037</value>
          </field>
          <field>
            <name>cashierid</name>
            <value>102047</value>
          </field>
        </custom_fields>
        <language_translations>
          <field/>
        </language_translations>
        <time_zone_id>0</time_zone_id>
        <currency_id>0</currency_id>
        <language_id>0</language_id>
        <timezones>
          <base_timezone>
            <label>Asia/Kolkata</label>
            <offset>+05:30</offset>
          </base_timezone>
        </timezones>
        <currencies>
          <base_currency>
            <symbol>₹</symbol>
            <label>INR</label>
          </base_currency>
        </currencies>
        <language_code></language_code>
        <language_locale>IN</language_locale>
        <languages>
          <base_language>
            <lang></lang>
            <locale>IN</locale>
          </base_language>
        </languages>
        <parent/>
        <external_id>strwestsm2</external_id>
        <external_id_1></external_id_1>
        <external_id_2></external_id_2>
        <mobile></mobile>
        <channel>instore</channel>
        <land_line></land_line>
        <email></email>
        <address>NA, NA, NA, NA</address>
        <location>
          <latitude></latitude>
          <longitude></longitude>
        </location>
        <type>STORE</type>
      </entity>
      <entity>
        <item_status>
          <success>true</success>
          <code>3200</code>
          <message>Entity search successful</message>
        </item_status>
        <id>50008028</id>
        <is_active>1</is_active>
        <code>str.west.supermarket1</code>
        <name>Store West Super Market One</name>
        <description>Store West Super Market One</description>
        <last_updated_by>15000449</last_updated_by>
        <last_updated_on>2017-08-22 13:30:20</last_updated_on>
        <custom_fields>
          <field>
            <name>cashiername</name>
            <value>John035</value>
          </field>
          <field>
            <name>cashierid</name>
            <value>102045</value>
          </field>
        </custom_fields>
        <language_translations>
          <field/>
        </language_translations>
        <time_zone_id>0</time_zone_id>
        <currency_id>0</currency_id>
        <language_id>0</language_id>
        <timezones>
          <base_timezone>
            <label>Asia/Kolkata</label>
            <offset>+05:30</offset>
          </base_timezone>
        </timezones>
        <currencies>
          <base_currency>
            <symbol>₹</symbol>
            <label>INR</label>
          </base_currency>
        </currencies>
        <language_code></language_code>
        <language_locale>IN</language_locale>
        <languages>
          <base_language>
            <lang></lang>
            <locale>IN</locale>
          </base_language>
        </languages>
        <parent/>
        <external_id>strwestsm1</external_id>
        <external_id_1></external_id_1>
        <external_id_2></external_id_2>
        <mobile></mobile>
        <channel>instore</channel>
        <land_line></land_line>
        <email></email>
        <address>NA, NA, NA, NA</address>
        <location>
          <latitude></latitude>
          <longitude></longitude>
        </location>
        <type>STORE</type>
      </entity>
      <entity>
        <item_status>
          <success>true</success>
          <code>3200</code>
          <message>Entity search successful</message>
        </item_status>
        <id>50008032</id>
        <is_active>1</is_active>
        <code>str.west.supermarket5</code>
        <name>Store West Super Market Five</name>
        <description>Store West Super Market Five</description>
        <last_updated_by>15000449</last_updated_by>
        <last_updated_on>2017-08-22 13:30:20</last_updated_on>
        <custom_fields>
          <field>
            <name>cashiername</name>
            <value>John040</value>
          </field>
          <field>
            <name>cashierid</name>
            <value>102050</value>
          </field>
        </custom_fields>
        <language_translations>
          <field/>
        </language_translations>
        <time_zone_id>0</time_zone_id>
        <currency_id>0</currency_id>
        <language_id>0</language_id>
        <timezones>
          <base_timezone>
            <label>Asia/Kolkata</label>
            <offset>+05:30</offset>
          </base_timezone>
        </timezones>
        <currencies>
          <base_currency>
            <symbol>₹</symbol>
            <label>INR</label>
          </base_currency>
        </currencies>
        <language_code></language_code>
        <language_locale>IN</language_locale>
        <languages>
          <base_language>
            <lang></lang>
            <locale>IN</locale>
          </base_language>
        </languages>
        <parent/>
        <external_id>strwestsm5</external_id>
        <external_id_1></external_id_1>
        <external_id_2></external_id_2>
        <mobile></mobile>
        <channel>instore</channel>
        <land_line></land_line>
        <email></email>
        <address>NA, NA, NA, NA</address>
        <location>
          <latitude></latitude>
          <longitude></longitude>
        </location>
        <type>STORE</type>
      </entity>
      <entity>
        <item_status>
          <success>true</success>
          <code>3200</code>
          <message>Entity search successful</message>
        </item_status>
        <id>50008037</id>
        <is_active>1</is_active>
        <code>str.west.supermarket10</code>
        <name>Store West Super Market Ten</name>
        <description>Store West Super Market Ten</description>
        <last_updated_by>15000449</last_updated_by>
        <last_updated_on>2017-08-22 13:30:20</last_updated_on>
        <custom_fields>
          <field>
            <name>cashiername</name>
            <value>John036</value>
          </field>
          <field>
            <name>cashierid</name>
            <value>102046</value>
          </field>
        </custom_fields>
        <language_translations>
          <field/>
        </language_translations>
        <time_zone_id>0</time_zone_id>
        <currency_id>0</currency_id>
        <language_id>0</language_id>
        <timezones>
          <base_timezone>
            <label>Asia/Kolkata</label>
            <offset>+05:30</offset>
          </base_timezone>
        </timezones>
        <currencies>
          <base_currency>
            <symbol>₹</symbol>
            <label>INR</label>
          </base_currency>
        </currencies>
        <language_code></language_code>
        <language_locale>IN</language_locale>
        <languages>
          <base_language>
            <lang></lang>
            <locale>IN</locale>
          </base_language>
        </languages>
        <parent/>
        <external_id>strwestsm10</external_id>
        <external_id_1></external_id_1>
        <external_id_2></external_id_2>
        <mobile></mobile>
        <channel>instore</channel>
        <land_line></land_line>
        <email></email>
        <address>NA, NA, NA, NA</address>
        <location>
          <latitude></latitude>
          <longitude></longitude>
        </location>
        <type>STORE</type>
      </entity>
      <entity>
        <item_status>
          <success>true</success>
          <code>3200</code>
          <message>Entity search successful</message>
        </item_status>
        <id>50008036</id>
        <is_active>1</is_active>
        <code>str.west.supermarket9</code>
        <name>Store West Super Market Nine</name>
        <description>Store West Super Market Nine</description>
        <last_updated_by>15000449</last_updated_by>
        <last_updated_on>2017-08-22 13:30:20</last_updated_on>
        <custom_fields>
          <field>
            <name>cashiername</name>
            <value>John044</value>
          </field>
          <field>
            <name>cashierid</name>
            <value>102054</value>
          </field>
        </custom_fields>
        <language_translations>
          <field/>
        </language_translations>
        <time_zone_id>0</time_zone_id>
        <currency_id>0</currency_id>
        <language_id>0</language_id>
        <timezones>
          <base_timezone>
            <label>Asia/Kolkata</label>
            <offset>+05:30</offset>
          </base_timezone>
        </timezones>
        <currencies>
          <base_currency>
            <symbol>₹</symbol>
            <label>INR</label>
          </base_currency>
        </currencies>
        <language_code></language_code>
        <language_locale>IN</language_locale>
        <languages>
          <base_language>
            <lang></lang>
            <locale>IN</locale>
          </base_language>
        </languages>
        <parent/>
        <external_id>strwestsm9</external_id>
        <external_id_1></external_id_1>
        <external_id_2></external_id_2>
        <mobile></mobile>
        <channel>instore</channel>
        <land_line></land_line>
        <email></email>
        <address>NA, NA, NA, NA</address>
        <location>
          <latitude></latitude>
          <longitude></longitude>
        </location>
        <type>STORE</type>
      </entity>
    </entities>
  </organization>
</response>
```

```json
{
   "response":{
      "pagination":{
         "limit":"500",
         "offset":"0",
         "total":11
      },
      "status":{
         "success":true,
         "code":200,
         "message":"SUCCESS"
      },
      "organization":{
         "entities":{
            "entity":[
               {
                  "item_status":{
                     "success":"true",
                     "code":3200,
                     "message":"Entity search successful"
                  },
                  "id":"50008031",
                  "is_active":"1",
                  "code":"str.west.supermarket4",
                  "name":"Store West Super Market Four",
                  "description":"Store West Super Market Four",
                  "last_updated_by":"15000449",
                  "last_updated_on":"2017-08-22 13:30:20",
                  "custom_fields":{
                     "field":[
                        {
                           "name":"cashiername",
                           "value":"John039"
                        },
                        {
                           "name":"cashierid",
                           "value":"102049"
                        }
                     ]
                  },
                  "language_translations":{
                     "field":[
                        
                     ]
                  },
                  "time_zone_id":"0",
                  "currency_id":"0",
                  "language_id":"0",
                  "timezones":{
                     "base_timezone":{
                        "label":"Asia/Kolkata",
                        "offset":"+05:30"
                     }
                  },
                  "currencies":{
                     "base_currency":{
                        "symbol":"₹",
                        "label":"INR"
                     }
                  },
                  "language_code":"",
                  "language_locale":"IN",
                  "languages":{
                     "base_language":{
                        "lang":"",
                        "locale":"IN"
                     }
                  },
                  "parent":{
                     
                  },
                  "external_id":"strwestsm4",
                  "external_id_1":"",
                  "external_id_2":"",
                  "mobile":"",
                  "channel":"instore",
                  "land_line":"",
                  "email":"",
                  "address":"NA, NA, NA, NA",
                  "location":{
                     "latitude":"",
                     "longitude":""
                  },
                  "type":"STORE"
               },
               {
                  "item_status":{
                     "success":"true",
                     "code":3200,
                     "message":"Entity search successful"
                  },
                  "id":"50008030",
                  "is_active":"1",
                  "code":"str.west.supermarket3",
                  "name":"Store West Super Market Three",
                  "description":"Store West Super Market Three",
                  "last_updated_by":"15000449",
                  "last_updated_on":"2017-08-22 13:30:20",
                  "custom_fields":{
                     "field":[
                        {
                           "name":"cashiername",
                           "value":"John038"
                        },
                        {
                           "name":"cashierid",
                           "value":"102048"
                        }
                     ]
                  },
                  "language_translations":{
                     "field":[
                        
                     ]
                  },
                  "time_zone_id":"0",
                  "currency_id":"0",
                  "language_id":"0",
                  "timezones":{
                     "base_timezone":{
                        "label":"Asia/Kolkata",
                        "offset":"+05:30"
                     }
                  },
                  "currencies":{
                     "base_currency":{
                        "symbol":"₹",
                        "label":"INR"
                     }
                  },
                  "language_code":"",
                  "language_locale":"IN",
                  "languages":{
                     "base_language":{
                        "lang":"",
                        "locale":"IN"
                     }
                  },
                  "parent":{
                     
                  },
                  "external_id":"strwestsm3",
                  "external_id_1":"",
                  "external_id_2":"",
                  "mobile":"",
                  "channel":"instore",
                  "land_line":"",
                  "email":"",
                  "address":"NA, NA, NA, NA",
                  "location":{
                     "latitude":"",
                     "longitude":""
                  },
                  "type":"STORE"
               },
               {
                  "item_status":{
                     "success":"true",
                     "code":3200,
                     "message":"Entity search successful"
                  },
                  "id":"50007998",
                  "is_active":"1",
                  "code":"str.east.brand1",
                  "name":"Store East Brand",
                  "description":"Store East Brand",
                  "last_updated_by":"15000449",
                  "last_updated_on":"2017-08-22 13:17:39",
                  "custom_fields":{
                     "field":[
                        {
                           "name":"cashiername",
                           "value":"John005"
                        },
                        {
                           "name":"cashierid",
                           "value":"102015"
                        }
                     ]
                  },
                  "language_translations":{
                     "field":[
                        
                     ]
                  },
                  "time_zone_id":"0",
                  "currency_id":"0",
                  "language_id":"0",
                  "timezones":{
                     "base_timezone":{
                        "label":"Asia/Kolkata",
                        "offset":"+05:30"
                     }
                  },
                  "currencies":{
                     "base_currency":{
                        "symbol":"₹",
                        "label":"INR"
                     }
                  },
                  "language_code":"",
                  "language_locale":"IN",
                  "languages":{
                     "base_language":{
                        "lang":"",
                        "locale":"IN"
                     }
                  },
                  "parent":{
                     
                  },
                  "external_id":"streastbrand1",
                  "external_id_1":"",
                  "external_id_2":"",
                  "mobile":"",
                  "channel":"instore",
                  "land_line":"",
                  "email":"",
                  "address":"NA, NA, NA, NA",
                  "location":{
                     "latitude":"",
                     "longitude":""
                  },
                  "type":"STORE"
               },
               {
                  "item_status":{
                     "success":"true",
                     "code":3200,
                     "message":"Entity search successful"
                  },
                  "id":"50008029",
                  "is_active":"1",
                  "code":"str.west.supermarket2",
                  "name":"Store West Super Market Two",
                  "description":"Store West Super Market Two",
                  "last_updated_by":"15000449",
                  "last_updated_on":"2017-08-22 13:30:20",
                  "custom_fields":{
                     "field":[
                        {
                           "name":"cashiername",
                           "value":"John037"
                        },
                        {
                           "name":"cashierid",
                           "value":"102047"
                        }
                     ]
                  },
                  "language_translations":{
                     "field":[
                        
                     ]
                  },
                  "time_zone_id":"0",
                  "currency_id":"0",
                  "language_id":"0",
                  "timezones":{
                     "base_timezone":{
                        "label":"Asia/Kolkata",
                        "offset":"+05:30"
                     }
                  },
                  "currencies":{
                     "base_currency":{
                        "symbol":"₹",
                        "label":"INR"
                     }
                  },
                  "language_code":"",
                  "language_locale":"IN",
                  "languages":{
                     "base_language":{
                        "lang":"",
                        "locale":"IN"
                     }
                  },
                  "parent":{
                     
                  },
                  "external_id":"strwestsm2",
                  "external_id_1":"",
                  "external_id_2":"",
                  "mobile":"",
                  "channel":"instore",
                  "land_line":"",
                  "email":"",
                  "address":"NA, NA, NA, NA",
                  "location":{
                     "latitude":"",
                     "longitude":""
                  },
                  "type":"STORE"
               },
               {
                  "item_status":{
                     "success":"true",
                     "code":3200,
                     "message":"Entity search successful"
                  },
                  "id":"50008028",
                  "is_active":"1",
                  "code":"str.west.supermarket1",
                  "name":"Store West Super Market One",
                  "description":"Store West Super Market One",
                  "last_updated_by":"15000449",
                  "last_updated_on":"2017-08-22 13:30:20",
                  "custom_fields":{
                     "field":[
                        {
                           "name":"cashiername",
                           "value":"John035"
                        },
                        {
                           "name":"cashierid",
                           "value":"102045"
                        }
                     ]
                  },
                  "language_translations":{
                     "field":[
                        
                     ]
                  },
                  "time_zone_id":"0",
                  "currency_id":"0",
                  "language_id":"0",
                  "timezones":{
                     "base_timezone":{
                        "label":"Asia/Kolkata",
                        "offset":"+05:30"
                     }
                  },
                  "currencies":{
                     "base_currency":{
                        "symbol":"₹",
                        "label":"INR"
                     }
                  },
                  "language_code":"",
                  "language_locale":"IN",
                  "languages":{
                     "base_language":{
                        "lang":"",
                        "locale":"IN"
                     }
                  },
                  "parent":{
                     
                  },
                  "external_id":"strwestsm1",
                  "external_id_1":"",
                  "external_id_2":"",
                  "mobile":"",
                  "channel":"instore",
                  "land_line":"",
                  "email":"",
                  "address":"NA, NA, NA, NA",
                  "location":{
                     "latitude":"",
                     "longitude":""
                  },
                  "type":"STORE"
               },
               {
                  "item_status":{
                     "success":"true",
                     "code":3200,
                     "message":"Entity search successful"
                  },
                  "id":"50008032",
                  "is_active":"1",
                  "code":"str.west.supermarket5",
                  "name":"Store West Super Market Five",
                  "description":"Store West Super Market Five",
                  "last_updated_by":"15000449",
                  "last_updated_on":"2017-08-22 13:30:20",
                  "custom_fields":{
                     "field":[
                        {
                           "name":"cashiername",
                           "value":"John040"
                        },
                        {
                           "name":"cashierid",
                           "value":"102050"
                        }
                     ]
                  },
                  "language_translations":{
                     "field":[
                        
                     ]
                  },
                  "time_zone_id":"0",
                  "currency_id":"0",
                  "language_id":"0",
                  "timezones":{
                     "base_timezone":{
                        "label":"Asia/Kolkata",
                        "offset":"+05:30"
                     }
                  },
                  "currencies":{
                     "base_currency":{
                        "symbol":"₹",
                        "label":"INR"
                     }
                  },
                  "language_code":"",
                  "language_locale":"IN",
                  "languages":{
                     "base_language":{
                        "lang":"",
                        "locale":"IN"
                     }
                  },
                  "parent":{
                     
                  },
                  "external_id":"strwestsm5",
                  "external_id_1":"",
                  "external_id_2":"",
                  "mobile":"",
                  "channel":"instore",
                  "land_line":"",
                  "email":"",
                  "address":"NA, NA, NA, NA",
                  "location":{
                     "latitude":"",
                     "longitude":""
                  },
                  "type":"STORE"
               },
               {
                  "item_status":{
                     "success":"true",
                     "code":3200,
                     "message":"Entity search successful"
                  },
                  "id":"50008037",
                  "is_active":"1",
                  "code":"str.west.supermarket10",
                  "name":"Store West Super Market Ten",
                  "description":"Store West Super Market Ten",
                  "last_updated_by":"15000449",
                  "last_updated_on":"2017-08-22 13:30:20",
                  "custom_fields":{
                     "field":[
                        {
                           "name":"cashiername",
                           "value":"John036"
                        },
                        {
                           "name":"cashierid",
                           "value":"102046"
                        }
                     ]
                  },
                  "language_translations":{
                     "field":[
                        
                     ]
                  },
                  "time_zone_id":"0",
                  "currency_id":"0",
                  "language_id":"0",
                  "timezones":{
                     "base_timezone":{
                        "label":"Asia/Kolkata",
                        "offset":"+05:30"
                     }
                  },
                  "currencies":{
                     "base_currency":{
                        "symbol":"₹",
                        "label":"INR"
                     }
                  },
                  "language_code":"",
                  "language_locale":"IN",
                  "languages":{
                     "base_language":{
                        "lang":"",
                        "locale":"IN"
                     }
                  },
                  "parent":{
                     
                  },
                  "external_id":"strwestsm10",
                  "external_id_1":"",
                  "external_id_2":"",
                  "mobile":"",
                  "channel":"instore",
                  "land_line":"",
                  "email":"",
                  "address":"NA, NA, NA, NA",
                  "location":{
                     "latitude":"",
                     "longitude":""
                  },
                  "type":"STORE"
               },
               {
                  "item_status":{
                     "success":"true",
                     "code":3200,
                     "message":"Entity search successful"
                  },
                  "id":"50008036",
                  "is_active":"1",
                  "code":"str.west.supermarket9",
                  "name":"Store West Super Market Nine",
                  "description":"Store West Super Market Nine",
                  "last_updated_by":"15000449",
                  "last_updated_on":"2017-08-22 13:30:20",
                  "custom_fields":{
                     "field":[
                        {
                           "name":"cashiername",
                           "value":"John044"
                        },
                        {
                           "name":"cashierid",
                           "value":"102054"
                        }
                     ]
                  },
                  "language_translations":{
                     "field":[
                        
                     ]
                  },
                  "time_zone_id":"0",
                  "currency_id":"0",
                  "language_id":"0",
                  "timezones":{
                     "base_timezone":{
                        "label":"Asia/Kolkata",
                        "offset":"+05:30"
                     }
                  },
                  "currencies":{
                     "base_currency":{
                        "symbol":"₹",
                        "label":"INR"
                     }
                  },
                  "language_code":"",
                  "language_locale":"IN",
                  "languages":{
                     "base_language":{
                        "lang":"",
                        "locale":"IN"
                     }
                  },
                  "parent":{
                     
                  },
                  "external_id":"strwestsm9",
                  "external_id_1":"",
                  "external_id_2":"",
                  "mobile":"",
                  "channel":"instore",
                  "land_line":"",
                  "email":"",
                  "address":"NA, NA, NA, NA",
                  "location":{
                     "latitude":"",
                     "longitude":""
                  },
                  "type":"STORE"
               }
            ]
         }
      }
   }
}
```
Retrieves the details of zones, stores, store servers, concepts or TILLs configured for the current organization. By default, it fetches up to 200 entities.

### Resource Information
| | |
--------- | ----------- |
URI | `organization/entities`
Rate Limited? | Yes
HTTP Methods | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/organization/entities?type={type}&id={id}` 

`https://{host}/v1.1/organization/entities?type={store/zone/till}&format={xml/json}`

To get child entities

`https://{{host}}/v1.1/organization/entities?type={type}&parent_identifier_type={parent_type}&parent_identifier_value={identifier_value}`
 
### Request Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
type* | enum | Pass the entity type to retrieve. Value: `STORE`, `STR_SERVER` (store server), `TILL`, `ZONE`, `CONCEPT`. Pass example, pass `STORE` to rerieve store details.
scope | string | Pass `STORE_CUSTOM_FIELDS` to retrieve the list of store level custom fields. Applicable only when `type=STORE`.
id | string | Pass an entity id as in the `org_entities` table (in database) to get the details of that particular entity. For example, `?type=STORE&id=12354309`To get the details of multiple entries, pass each ID separating with `,` . For example, "12859252,12859253".
parent_identifier_type | enum | Parent entity type to fetch its child entities. Values: `STORE_CODE`, `STORE_ID`, `STORE_EXTERNAL_ID`, `CONCEPT_CODE`, `CONCEPT_ID`.
parent_identifier_value | string | Pass the respective identifier value. For example, `parent_identifier_type=CONCEPT_CODE&parent_identifier_value=supermarket`. `parent_identifier_type` and `type` cannot be from the same entity level. `type` should be a child entity of `parent_identifier_type`.
include_parent | boolean | Pass `true` to retrieve the details of the parent entity (parent zone or concept). This is applicable only for `type` zone or concept. Sample - `?type=CONCEPT&id=50995&include_parent=true`
sub_entities_count | int | Limit the number of sub-entities to retrieve for each entity.
details | enum | Pass `basic` to see only basic information excluding currency, time-zone, and language information.
exclude_locale | enum | Pass `1` to exclude time zone details (`timezones`), `0` to retrieve timezones > base_timezone details of an entity. Default value is `0`.
start_id | long | Fetches entities that are above the offset number you pass. Offset is the position of the entity  in the db record. The value is assigned based on the sequence of creation. For example, start_id=10 retrieves all the entities from record number 11.
limit | int | Limit the number of entities to retrieve. Default value is 500.
modified_since | date | Retrieves the entities that are modified on or after a specific date. Pass the date in `YYYY-MM-DD` format.
active_only | boolean | Pass `true` to retrieve the list of only active stores.
language_translatons | boolean | 

<aside class="notice">Parameter marked with * is mandatory.</aside>


## Get Org Configurations
> Sample Request

```html
http://us.api.capillarytech.com/v1.1/organization/configs?format=json
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
| | |
--------- | ----------- |
URI | `organization/configs`
Rate Limited? | Yes
HTTP Methods | GET
Batch Support | No

### Request URL
`http://{host}/v1.1/organization/configs?format={xml/json}`


## Get Org Statistics
```html
# Sample Request
http://apac.api.capillarytech.com/v1.1/organization/statistics?format=json
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
| | |
--------- | ----------- |
URI | `organization/statistics`
Rate Limited? | Yes
HTTP Methods | GET
Batch Support | No

### Request URL
`http://{host}/v1.1/organization/statistics?format={xml/json}`


## Get Top Selling Items

> Sample Request

```html
http://apac.api.capillarytech.com/v1.1/organization/topitems?format=json
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
URI | `organization/topitems`
Rate Limited? | Yes
Authentication | Yes
HTTP Methods | GET
Batch Support | No

### Request URL
`http://{host}/v1.1/organization/topitems?format={xml/json}`




## Get Configured Custom Fields 

> Sample Request

```html
http://apac.api.capillarytech.com/v1.1/organization/customfields?format=json
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
| | |
--------- | ----------- |
URI | `organization/customfields`
Rate Limited? | Yes
Authentication | Yes
HTTP Methods | GET
Batch Support | No

### Request URL
`http://{host}/v1.1/organization/customfields?format={xml/json}&scope={scope}`

### Request Parameter
Parameter | Description
--------- | -----------
Scope | Value: customer_feedback, loyalty_transaction, loyalty_registration, customer_preferences <br> Returns custom field details configured for InStore for that specific module. For example, `scope=customer_feedback` retrieves the custom fields of Customer Feedback window of InStore. <br> If no parameter is passed, custom fields of all modules will be returned.


## Get Configured Payment Modes

> Sample Request

```html
http://us.api.capillarytech.com/v1.1/organization/tenders
```

> Sample Response

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
URI | `organization/tenders`
Rate Limited? | Yes
Authentication | Yes
HTTP Methods | GET
Batch Support | No

### Request URL
`http://{host}/v1.1/organization/tenders.{xml/json}`

### Request Parameters
Parameter | Datatype | Description
--------- | -----------
attribute_name | string | Retrieves the details of all tenders which contains the specific attribute name 
attribute | boolean | Retrieves attributes of the payment modes if `attribute=true` is passed



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
