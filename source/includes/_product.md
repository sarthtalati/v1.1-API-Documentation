# Product

The product entity holds all products of an org and product related information such as size, color, type, and brand.  Product APIs allow you to fetch details of a specific product, modify existing details, change brand name for a product and create new attributes for a product.

## Add Product
```html
https://us.api.capillarytech.com/v1.1/product/add.json
```
> Sample POST Request

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <product>
    <sku>SKU40</sku>
    <ean></ean>
    <price>7000</price>
    <description>adding sample product</description>
    <long_description>Sample description</long_description>
    <img_url>https://nightly.capillary.in/productManagement/Colors/img.jpg</img_url>
    <size>
      <name>Medium</name>
    </size>
    <style>
      <name>slimFit</name>
    </style>
    <brand>
      <name>Lee</name>
    </brand>
    <color>
      <name>blue</name>
    </color>
    <category>
      <name>HANDBAG(S)</name>
    </category>
    <attributes>
      <attribute>
        <name>weight</name>
        <value>100g</value>
      </attribute>
      <attribute>
        <name>sampleName</name>
        <value>samplevalue</value>
      </attribute>
    </attributes>
  </product>
  <product>
    <sku>Levis-015</sku>
    <ean>Levis-015</ean>
    <price>22</price>
    <description/>
    <img_url/>
    <size>
      <name>abcd</name>
      <type>type1</type>
    </size>
    <text>&gt;</text>
    <style>
      <name>testcode</name>
    </style>
    <category>
      <name>test1</name>
    </category>
    <attributes>
      <attribute>
        <name>Jeans</name>
        <value>Levis13</value>
      </attribute>
    </attributes>
  </product>
  <product>
    <sku>Levis-014</sku>
    <ean>Levis-014</ean>
    <price>22</price>
    <description/>
    <img_url/>
    <size>
      <name>abcd</name>
      <type>type1</type>
    </size>
    <text>&gt;</text>
    <style>
      <name>testcode</name>
    </style>
    <category>
      <name>test1</name>
    </category>
    <attributes>
      <attribute>
        <name>Jeans</name>
        <value>Levis13</value>
      </attribute>
    </attributes>
  </product>
</root>
```

```json
{
  "root": {
    "product": [{
      "sku": "SKU40",
      "ean": "",
      "price": "7000",
      "description": "adding sample product",
      "long_description": "Sample description",
      "img_url": "https://nightly.capillary.in/productManagement/Colors/img.jpg",
      "size": { "name": "Medium" },
      "style": { "name": "slimFit" },
      "brand": { "name": "Lee" },
      "color": { "name": "blue" },
      "category": { "name": "HANDBAG(S)" },
      "attributes": {
        "attribute": [
          {
            "name": "weight",
            "value": "100g"
          },
          {
            "name": "sampleName",
            "value": "samplevalue"
          }
        ]
      }
    },
   {
      "sku": "Levis-015",
      "ean": "Levis-015",
      "price": "22",
      "description": [],
      "img_url": [],
      "size": {
         "name": "abcd",
         "type": "type1"
      },
      "#text": ">",
      "style": {
         "name": "testcode"
      },
      "category": {
         "name": "test1"
      },
      "attributes": {
         "attribute": {
            "name": "Jeans",
            "value": "Levis13"
         }
      }
   },
   {
      "sku": "Levis-014",
      "ean": "Levis-014",
      "price": "22",
      "description": [],
      "img_url": [],
      "size": {
         "name": "abcd",
         "type": "type1"
      },
      "#text": ">",
      "style": {
         "name": "testcode"
      },
      "category": {
         "name": "test1"
      },
      "attributes": {
         "attribute": {
            "name": "Jeans",
            "value": "Levis13"
         }
      }
   }
    ]
  }
}
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
  <product>
    <item_id>28267591</item_id>
    <sku>SKU40</sku>
    <ean>SKU40</ean>
    <price>7000</price>
    <img_url>https://nightly.capillary.in/productManagement/Colors/img.jpg</img_url>
    <in_stock>false</in_stock>
    <description>adding sample product</description>
    <returnable>true</returnable>
    <returnable_days>-1</returnable_days>
    <long_description>Sample description</long_description>
    <size>
      <name/>
    </size>
    <style>
      <name/>
    </style>
    <brand>
      <name/>
    </brand>
    <color>
      <name/>
    </color>
    <category>
      <name/>
    </category>
    <attributes/>
    <item_status>
      <success>true</success>
      <code>9100</code>
      <message>Product added successfully</message>
    </item_status>
  </product>
  <product>
    <item_id>28267592</item_id>
    <sku>Levis-015</sku>
    <ean>Levis-015</ean>
    <price>22</price>
    <img_url>[]</img_url>
    <in_stock>false</in_stock>
    <description>[]</description>
    <returnable>true</returnable>
    <returnable_days>-1</returnable_days>
    <long_description></long_description>
    <size>
      <name/>
    </size>
    <style>
      <name/>
    </style>
    <brand>
      <name/>
    </brand>
    <color>
      <name/>
    </color>
    <category>
      <name/>
    </category>
    <attributes/>
    <item_status>
      <success>true</success>
      <code>9100</code>
      <message>Product added successfully</message>
    </item_status>
  </product>
  <product>
    <item_id>28267593</item_id>
    <sku>Levis-014</sku>
    <ean>Levis-014</ean>
    <price>22</price>
    <img_url>[]</img_url>
    <in_stock>false</in_stock>
    <description>[]</description>
    <returnable>true</returnable>
    <returnable_days>-1</returnable_days>
    <long_description></long_description>
    <size>
      <name/>
    </size>
    <style>
      <name/>
    </style>
    <brand>
      <name/>
    </brand>
    <color>
      <name/>
    </color>
    <category>
      <name/>
    </category>
    <attributes/>
    <item_status>
      <success>true</success>
      <code>9100</code>
      <message>Product added successfully</message>
    </item_status>
  </product>
</response>

```

```json
{
    "response": {
        "status": {
            "success": true,
            "code": 200,
            "message": "Success"
        },
        "product": [
            {
                "item_id": "28267591",
                "sku": "SKU40",
                "ean": "SKU40",
                "price": "7000",
                "img_url": "https://nightly.capillary.in/productManagement/Colors/img.jpg",
                "in_stock": "false",
                "description": "adding sample product",
                "returnable": "true",
                "returnable_days": -1,
                "long_description": "Sample description",
                "size": {
                    "name": null
                },
                "style": {
                    "name": null
                },
                "brand": {
                    "name": null
                },
                "color": {
                    "name": null
                },
                "category": {
                    "name": null
                },
                "attributes": [],
                "item_status": {
                    "success": true,
                    "code": 9100,
                    "message": "Product added successfully"
                }
            },
            {
                "item_id": "28267592",
                "sku": "Levis-015",
                "ean": "Levis-015",
                "price": "22",
                "img_url": "[]",
                "in_stock": "false",
                "description": "[]",
                "returnable": "true",
                "returnable_days": -1,
                "long_description": "",
                "size": {
                    "name": null
                },
                "style": {
                    "name": null
                },
                "brand": {
                    "name": null
                },
                "color": {
                    "name": null
                },
                "category": {
                    "name": null
                },
                "attributes": [],
                "item_status": {
                    "success": true,
                    "code": 9100,
                    "message": "Product added successfully"
                }
            },
            {
                "item_id": "28267593",
                "sku": "Levis-014",
                "ean": "Levis-014",
                "price": "22",
                "img_url": "[]",
                "in_stock": "false",
                "description": "[]",
                "returnable": "true",
                "returnable_days": -1,
                "long_description": "",
                "size": {
                    "name": null
                },
                "style": {
                    "name": null
                },
                "brand": {
                    "name": null
                },
                "color": {
                    "name": null
                },
                "category": {
                    "name": null
                },
                "attributes": [],
                "item_status": {
                    "success": true,
                    "code": 9100,
                    "message": "Product added successfully"
                }
            }
        ]
    }
}
```

Allows you to add product to the inventory.

### Resource Information
| | |
--------- | ----------- |
URI | `product/add`
Rate Limited? | Yes
HTTP Methods | POST
Batch Support | Yes


### Request URL
`https://{host}/v1.1/product/add?format={xml/json}`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
product* | array-obj | list of products to add. 
sku* | string | SKU of the product to add.
ean | string | European article number of the product.
price* | double | Price of the product.
description | string | Brief description of the product.
returnable | boolean | Pass `true` if the item is allowed to return post purchase. You also need to mention `returnableDays`. Default value is `false`.
returnableDays | int | Number of days in which the item can be returned after purchasing. Default value is `-1` (no limit). 
long_description | string | Detailed description of the product.
img_url | string | URL of the product image.
size | obj | Size of the product in name:value pairs.
style | obj | Product style in name:value pairs.
type | string | Size type.
brand | obj | Pass a valid brand name (as per the database) of the product.
color | obj | Pass a valid product color (as per the database) .
category | obj | Pass a valid product category name ((as per the database).
attributes | obj | Other product attributes in name-value pairs.

<aside class="notice">Parameters marked with * are mandatory. Values of product attributes such as style, size, brand, type, color, and category should have been configured for the org.  You can set these on the Organization Settings page on InTouch. </aside>

### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
item_id | long | Unique ID of the product generated by the system.
name | string | Name of the entry.
label | string | UI name of the specific entry (style, color, category, brand)
added_on | date-time | Date and time of the product addition.
description | string | Description of the specific entry as in the database.



## Add Product Attributes

Lets you add product attributes.

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/product/attributes?format=json
```

> Sample POST Request

```json
{
  "root": {
    "product": [
      {
        "attributes": {
          "attribute": {
            "is_enum": "1",
            "type": "Int",
            "default_attribute_value_name": "firstName_7248723",
            "extraction_rule_data": "firstName_7248723",
            "extraction_rule_type": "POS",
            "is_soft_enum": "1",
            "values": {
              "value": {
                "name": ""
              }
            },
            "use_in_dump": "1",
            "name": "firstName_7248723"
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
      <product>
            <attributes>
               <attribute>
                  <default_attribute_value_name>firstName_7248723</default_attribute_value_name>
                  <extraction_rule_data>firstName_7248723</extraction_rule_data>
                  <extraction_rule_type>POS</extraction_rule_type>
                  <is_enum>1</is_enum>
                  <is_soft_enum>1</is_soft_enum>
                  <name>firstName_7248723</name>
                  <type>Int</type>
                  <use_in_dump>1</use_in_dump>
                  <values>
                     <value>
                        <name />
                     </value>
                  </values>
               </attribute>
            </attributes>
      </product>
</root>
```


> Sample Response

```json
{
  "response": {
    "product": {
      "attributes": {
        "attribute": [
          {
            "default_attribute_value_name": null,
            "extraction_rule_data": "firstName_1218117",
            "extraction_rule_type": "POS",
            "is_enum": "1",
            "is_soft_enum": "1",
            "item_status": {
              "code": 9180,
              "message": "Attribute addition successful",
              "success": true
            },
            "label": null,
            "name": "firstName_1218117",
            "type": "Int",
            "use_in_dump": "1",
            "values": {
              "value": [
                {
                  "label": "lastName_1218117",
                  "name": "lastName_1218117"
                }
              ]
            }
          }
        ]
      }
    },
    "status": {
      "code": 200,
      "message": "SUCCESS",
      "success": true
    }
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<response>
		<product>
			<attributes>
				<attribute>
					<default_attribute_value_name />
					<extraction_rule_data>firstName_1218117</extraction_rule_data>
					<extraction_rule_type>POS</extraction_rule_type>
					<is_enum>1</is_enum>
					<is_soft_enum>1</is_soft_enum>
					<item_status>
						<code>9180</code>
						<message>Attribute addition successful</message>
						<success>true</success>
					</item_status>
					<label />
					<name>firstName_1218117</name>
					<type>Int</type>
					<use_in_dump>1</use_in_dump>
					<values>
						<value>
							<label>lastName_1218117</label>
							<name>lastName_1218117</name>
						</value>
					</values>
				</attribute>
			</attributes>
		</product>
		<status>
			<code>200</code>
			<message>SUCCESS</message>
			<success>true</success>
		</status>
	</response>
</root>
```

### Resource Information
| | |
--------- | ----------- |
URI | `/product/attributes`
Rate Limited? | Yes
HTTP Methods | POST
Batch Support | Yes

### Request URL
`https://{host}/v1.1/product/attributes?format={xml/json}`


##  Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
default_attribute_value_name | string | Default value for the attribute (when no value  is provided).
extraction_rule_data | string | 
extraction_rule_type | enum | POS,
is_enum | | 
is_soft_enum | | 
label | string | Label name for the attribute.
name | string | Name of the attribute.
type | enum | 
use_in_dump | enum | Value: `1`
values | obj | Values of the attribute.
label | string | Label name for the attribute value.
name | string | Name of the attribute value.




## Search Products

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/product/search?q=(color%3AIN%3ABlack%3BBlue%3BGreen%7Csize%3AEQUALS%3AXL%7Cprice%3ARANGE%3A2000%3B4000%7Cdepartment%3AEQUALS%3AMen)&format=json
```
> Sample Response

```xml

<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<response>
		<status>
			<success>true</success>
			<code>200</code>
			<message>SUCCESS</message>
		</status>
		<product>
			<count>21</count>
			<start>0</start>
			<rows>10</rows>
			<results>
				<item>
					<id>26666454</id>
					<price>1000</price>
					<org_id>50074</org_id>
					<description>soap</description>
					<sku>item-001</sku>
					<added_on>2017-06-20T00:00:00Z</added_on>
					<attributes></attributes>
					<img_url>https://nightly.capillary.in/productManagement/Colors/img3.jpg</img_url>
					<ean>401234567892</ean>
				</item>
				<item>
					<id>26694137</id>
					<price>200</price>
					<org_id>50074</org_id>
					<description>Van Heusen Black Dress - Color : Black, Size :L</description>
					<sku>8907670343739</sku>
					<added_on>2017-08-18T00:00:00Z</added_on>
					<attributes></attributes>
					<img_url>https://nightly.capillary.in/productManagement/Colors/img2.jpg</img_url>
					<ean>401234567891</ean>
				</item>
				<item>
					<id>27211795</id>
					<price>100</price>
					<org_id>50074</org_id>
					<description>long</description>
					<sku>sl1</sku>
					<added_on>2019-07-08T00:00:00Z</added_on>
					<attributes></attributes>
					<img_url>https://nightly.capillary.in/productManagement/Colors/img1.jpg</img_url>
					<ean>401234567890</ean>
				</item>
			</results>
		</product>
	</response>
</root>

```

```json
{
   "response":{
      "status":{
         "success":"true",
         "code":200,
         "message":"SUCCESS"
      },
      "product":{
         "count":21,
         "start":0,
         "rows":10,
         "results":{
            "item":[
               {
                  "id":"26666454",
                  "price":1000,
                  "org_id":50074,
                  "description":"soap",
                  "sku":"item-001",
                  "added_on":"2017-06-20T00:00:00Z",
                  "attributes":{
                     "attribute":[

                     ]
                  },
                  "img_url":"https://nightly.capillary.in/productManagement/Colors/img3.jpg",
                  "ean":"401234567892"
               },
               {
                  "id":"26694137",
                  "price":200,
                  "org_id":50074,
                  "description":"Van Heusen Black Dress - Color : Black, Size :L",
                  "sku":"8907670343739",
                  "added_on":"2017-08-18T00:00:00Z",
                  "attributes":{
                     "attribute":[

                     ]
                  },
                  "img_url":"https://nightly.capillary.in/productManagement/Colors/img2.jpg",
                  "ean":"401234567891"
               },
               {
                  "id":"27211795",
                  "price":100,
                  "org_id":50074,
                  "description":"long",
                  "sku":"sl1",
                  "added_on":"2019-07-08T00:00:00Z",
                  "attributes":{
                     "attribute":[

                     ]
                  },
                  "img_url":"https://nightly.capillary.in/productManagement/Colors/img1.jpg",
                  "ean":"401234567890"
               }
            ]
         }
      }
   }
}
```

Retrieve products available at the current org based on the query params such as SKU, quantity, price, item status, images, attributes and so on.

### Resource Information
| | |
--------- | ----------- |
URI | `/product/search`
Rate Limited? | Yes
HTTP Methods | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/product/search?q={searchquerystring}&format={xml/json}`





### Search Query String
Attributes like price, item_sku, description, img_url are common for all the orgs.

Standard Query: `attribute:OPERATOR:value`

Search Query String is the URL encoded string containing the parameters used for searching. You can pass multiple params in the query with fixed operators separating each query string with `|`

For instance, assume that you want to retrieve all the products which matches any of the following 
 
* Color: Black, blue, or green
* Size XL, 
* Price range: 2000 - 4000
* Department: Men

Then the query string would be as shown below:
    
`q=(color:IN:Black;Blue;Green|size:EQUALS:XL|price:RANGE:2000;4000|department:EQUALS:Men)`

**URL Encoded String**:

`color%3AIN%3ABlack%3BBlue%3BGreen%7Csize%3AEQUALS%3AXL%7Cprice%3ARANGE%3A2000%3B4000%7Cdepartment%3AEQUALS%3AMen`


**Request URL**: https://{host}/v1.1/product/search?q=(color%3ain%3ablack%3bblue%3bgreen%7csize%3aequals%3axl%7cprice%3arange%3a2000%3b4000%7cdepartment%3aequals%3amen)&format={xml/json}


<aside class="warning">The following characters are not supported in search queries as they have a special meaning in search grammar. <br>
`+ - && || ! ( ) { } [ ] ^ " ~ * ? : \`
</aside>



### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
id | long | Unique ID of the product generated by the system.
sku | string | SKU of the product.
ean | string | European article number of the product.
price | double | Price of the product.
org_id | long | Unique ID of the current org.
description | string | Brief description of the product.
img_url | string | URL of the product image.
attributes | obj | Attributes of the product in name-value pairs.
added_on | date-time | Date and time of the product addition.




## Retrieve Products Details
```html
# Sample Request
https://api.capillary.co.in/v1.1/product/get?sku=item-001,Pearls&format=json
```

> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
	<response>
		<status>
			<success>true</success>
			<code>200</code>
			<message>Success</message>
		</status>
		<product>
			<item>
				<item_id>27286097</item_id>
				<sku>Pearls</sku>
				<item_ean>Pearls</item_ean>
				<price>200</price>
				<img_url></img_url>
				<in_stock>true</in_stock>
				<description>White</description>
				<long_description> </long_description>
				<size> </size>
				<style></style>
				<brand></brand>
				<color></color>
				<category></category>
				<attributes></attributes>
				<added_on>2019-09-18 12:40:36</added_on>
				<item_status>
					<status>true</status>
					<code>2100</code>
					<message>Product retrieval successful</message>
				</item_status>
			</item>
			<item>
				<item_id>26666454</item_id>
				<sku>item-001</sku>
				<item_ean>item-001</item_ean>
				<price>1000</price>
				<img_url></img_url>
				<in_stock>true</in_stock>
				<description>soap</description>
				<long_description />
				<size />
				<style />
				<brand />
				<color />
				<category />
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
				<added_on>2017-06-20 22:05:35</added_on>
				<item_status>
					<status>true</status>
					<code>2100</code>
					<message>Product retrieval successful</message>
				</item_status>
			</item>
		</product>
	</response>
</root>
```

```json
{
   "response":{
      "status":{
         "success":true,
         "code":200,
         "message":"Success"
      },
      "product":{
         "item":[
            {
               "item_id":"27286097",
               "sku":"Pearls",
               "item_ean":"Pearls",
               "price":"200",
               "img_url":"",
               "in_stock":"true",
               "description":"White",
               "long_description":null,
               "size":null,
               "style":null,
               "brand":null,
               "color":null,
               "category":null,
               "attributes":null,
               "added_on":"2019-09-18 12:40:36",
               "item_status":{
                  "status":true,
                  "code":2100,
                  "message":"Product retrieval successful"
               }
            },
            {
               "item_id":"26666454",
               "sku":"item-001",
               "item_ean":"item-001",
               "price":"1000",
               "img_url":"",
               "in_stock":"true",
               "description":"soap",
               "long_description":null,
               "size":null,
               "style":null,
               "brand":null,
               "color":null,
               "category":null,
               "attributes":{
                  "attribute":[
                     {
                        "name":"Color",
                        "value":"Black"
                     },
                     {
                        "name":"Size",
                        "value":"XXL"
                     }
                  ]
               },
               "added_on":"2017-06-20 22:05:35",
               "item_status":{
                  "status":true,
                  "code":2100,
                  "message":"Product retrieval successful"
               }
            }
         ]
      }
   }
}
```

Returns the details of a specific product. You can retrieve details of multiple products at a time.

### Resource Information
| | |
--------- | ----------- |
URI | `/product/get`
Rate Limited? | Yes
HTTP Methods | GET
Batch Support | Yes


### Request URL
`https://{host}/v1.1/product/get?{requestParams}&format={xml/json}`


### Request Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
sku** | string | Returns products based on the SKU passed
id** | long | Returns products based on the product id. This id is assigned by Capillary when each product is added to the Capillary server.
include_hierarchy | boolean | Pass `true` to retrieve product hierarchy.

<aside class="notice">Any one among the parameters marked with * is mandatory. </aside>


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
item_id | long | Unique ID of the product generated by the system.
sku | string | SKU of the product.
item_ean | string | European article number of the product.
price | double | Price of the product.
in_stock | boolean | Shows `true` if the item product is available, else shows `false`.
description | string | Brief description of the product.
long_description | string | Detailed description of the product as in the database.
img_url | string | URL of the product image.
attributes | obj | Attributes of the product in name-value pairs.
added_on | date-time | Date and time of the product addition.
size | obj | Size of the product in name:value pairs.
style | string | Product style in name:value pairs.
brand | string | Brand name (as per the database) of the product.
color | obj | Color of the product (as per the database) .
category | obj | Parent category name of the product (as per the database).




## Retrieve Product Categories

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/product/categories?format=json
```

> Sample Response

```xml

<response>
   <status>
      <success>true</success>
      <code>200</code>
      <message>SUCCESS</message>
   </status>
   <product>
      <count>20</count>
      <categories>
         <category>
            <name>AAA</name>
            <label>a1</label>
            <description>aa13</description>
            <parent_name />
            <parent_label />
            <item_status>
               <success>true</success>
               <code>9172</code>
               <message>Category retrieval successful</message>
            </item_status>
         </category>
         <category>
            <name>BBB</name>
            <label>b1</label>
            <description>bb13</description>
            <parent_name />
            <parent_label />
            <item_status>
               <success>true</success>
               <code>9172</code>
               <message>Category retrieval successful</message>
            </item_status>
         </category>
         <category>
            <name>EEE</name>
            <label>e1</label>
            <description>ee13</description>
            <parent_name />
            <parent_label />
            <item_status>
               <success>true</success>
               <code>9172</code>
               <message>Category retrieval successful</message>
            </item_status>
         </category>
         <category>
            <name>ZZZ</name>
            <label>z1</label>
            <description>zz13</description>
            <parent_name>AAA</parent_name>
            <parent_label>a1</parent_label>
            <item_status>
               <success>true</success>
               <code>9172</code>
               <message>Category retrieval successful</message>
            </item_status>
         </category>
         <category>
            <name>LLL</name>
            <label>l1</label>
            <description>ll13</description>
            <parent_name>KKK</parent_name>
            <parent_label>k1</parent_label>
            <item_status>
               <success>true</success>
               <code>9172</code>
               <message>Category retrieval successful</message>
            </item_status>
         </category>
         <category>
            <name>NNN</name>
            <label>n1</label>
            <description>nn13</description>
            <parent_name>MMM</parent_name>
            <parent_label>m1</parent_label>
            <item_status>
               <success>true</success>
               <code>9172</code>
               <message>Category retrieval successful</message>
            </item_status>
         </category>
      </categories>
   </product>
</response>

```

```json
{
  "response":{
    "status":{
      "success":true,
      "code":200,
      "message":"SUCCESS"
    },
    "product":{
      "count":20,
      "categories":{
        "category":[
          {
            "name":"AAA",
            "label":"a1",
            "description":"aa13",
            "parent_name":null,
            "parent_label":null,
            "item_status":{
              "success":true,
              "code":9172,
              "message":"Category retrieval successful"
            }
          },
          {
            "name":"BBB",
            "label":"b1",
            "description":"bb13",
            "parent_name":null,
            "parent_label":null,
            "item_status":{
              "success":true,
              "code":9172,
              "message":"Category retrieval successful"
            }
          },
          {
            "name":"EEE",
            "label":"e1",
            "description":"ee13",
            "parent_name":null,
            "parent_label":null,
            "item_status":{
              "success":true,
              "code":9172,
              "message":"Category retrieval successful"
            }
          },
          {
            "name":"ZZZ",
            "label":"z1",
            "description":"zz13",
            "parent_name":"AAA",
            "parent_label":"a1",
            "item_status":{
              "success":true,
              "code":9172,
              "message":"Category retrieval successful"
            }
          },
          {
            "name":"LLL",
            "label":"l1",
            "description":"ll13",
            "parent_name":"KKK",
            "parent_label":"k1",
            "item_status":{
              "success":true,
              "code":9172,
              "message":"Category retrieval successful"
            }
          },
          {
            "name":"NNN",
            "label":"n1",
            "description":"nn13",
            "parent_name":"MMM",
            "parent_label":"m1",
            "item_status":{
              "success":true,
              "code":9172,
              "message":"Category retrieval successful"
            }
          }
        ]
      }
    }
  }
}
```

Retrieves the details of all product categories.


### Resource Information
| | |
--------- | ----------- |
URI | `/product/categories`
Rate Limited? | Yes
HTTP Methods | GET
Batch Support | Yes


### Request URL
`https://{host}/v1.1/product/categories?{requestParams>&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
include_id |boolean | Retrieves category ids of each category fetched.
values | boolean  | Retrieves all child categories if values=true.
value_limit | int | Limits number of child categories to be retrieved. Default value 20.
name | string | Retrieves the details of a specific product category based on the category name passed (not case sensitive).
id | long | Retrieves the details of a specific product category based on the product id.
parent_id | long | Retrieves the details of a specific product category and its child categories based on the parent product id passed.
parent_name | string | Fetch categories by name of the parent product.
limit | int | Limits the number of product categories to be retrieved.
offset | int | Entries to be ignored from the top.


### Response Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
name | string | Name of the category
label | string | Label name of the category that appears on the user interface.
description | string | Description of the category.
parent_name | string | Name of the parent category. Applicable for child categories.
parent_label | string | Label name of the parent category.






## Retrieve Product Brands
```html
https://us.api.capillarytech.com/v1.1/product/brands?format=json
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
   <product>
      <count>6</count>
      <brands>
         <brand>
            <name>AA</name>
            <label>a1</label>
            <description>Sample description</description>
            <parent_name />
            <parent_label />
            <item_status>
               <success>true</success>
               <code>9160</code>
               <message>Brand retrieval successful</message>
            </item_status>
         </brand>
         <brand>
            <name>BB</name>
            <label>b1</label>
            <description>Sample description</description>
            <parent_name>AA</parent_name>
            <parent_label>a1</parent_label>
            <item_status>
               <success>true</success>
               <code>9160</code>
               <message>Brand retrieval successful</message>
            </item_status>
         </brand>
         <brand>
            <name>CC</name>
            <label>c1</label>
            <description>Sample description</description>
            <parent_name>BB</parent_name>
            <parent_label>b1</parent_label>
            <item_status>
               <success>true</success>
               <code>9160</code>
               <message>Brand retrieval successful</message>
            </item_status>
         </brand>
         <brand>
            <name>DD</name>
            <label>d1</label>
            <description>Sample description</description>
            <parent_name>BB</parent_name>
            <parent_label>b1</parent_label>
            <item_status>
               <success>true</success>
               <code>9160</code>
               <message>Brand retrieval successful</message>
            </item_status>
         </brand>
      </brands>
   </product>
</response>


```

```json
{
  "response":{
    "status":{
      "success":true,
      "code":200,
      "message":"Success"
    },
    "product":{
      "count":6,
      "brands":{
        "brand":[
          {
            "name":"AA",
            "label":"a1",
            "description":"Sample description",
            "parent_name":"",
            "parent_label":"",
            "item_status":{
              "success":true,
              "code":9160,
              "message":"Brand retrieval successful"
            }
          },
          {
            "name":"BB",
            "label":"b1",
            "description":"Sample description",
            "parent_name":"AA",
            "parent_label":"a1",
            "item_status":{
              "success":true,
              "code":9160,
              "message":"Brand retrieval successful"
            }
          },
          {
            "name":"CC",
            "label":"c1",
            "description":"Sample description",
            "parent_name":"BB",
            "parent_label":"b1",
            "item_status":{
              "success":true,
              "code":9160,
              "message":"Brand retrieval successful"
            }
          },
          {
            "name":"DD",
            "label":"d1",
            "description":"Sample description",
            "parent_name":"BB",
            "parent_label":"b1",
            "item_status":{
              "success":true,
              "code":9160,
              "message":"Brand retrieval successful"
            }
          },         
        ]
      }
    }
  }
}
```

Retrieves the details of all product brands created for the org.


### Resource Information
| | |
--------- | ----------- |
URI | `/product/brands`
Rate Limited? | Yes
HTTP Methods | GET
Batch Support | Yes

### Request URL

`https://{host}/v1.1/product/brands?{params}&format={xml/json}`

### Request Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
include_id | boolean | Retrieves the brand id if include_id is passed as true. Value: true/false.
id | long | Retrieves the details of a specific brand based on the brand id passed.
name | Retrieves the details of the specific brand based on the name passed(name is not case sensitive).
parent_name | string | Retrieves the details of a specific parent brand and its child brands based on the brand name passed.
parent_id | long | Retrieves the details of a specific parent brand and its child brands based on the parent brand id passed.
limit | int | Limits the number of brands to be retrieved per request.
offset | int | Number of rows or results that you want omit from showing (from the top).


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
name | string | Name of the brand.
label | string | Label name of the brand that appears on the user interface.
description | string | Description of the brand.
parent_name | string | Name of the parent brand. Applicable for child categories.
parent_label | string | Label name of the parent brand.




## Retrieve Product Colors

> Sample Request

```html
https://us/api.capillarytech.com/v1.1/product/colors?format=json
```
> Sample Response

```json
{
  "response":{
    "status":{
      "success":true,
      "code":200,
      "message":"Success"
    },
    "product":{
      "count":20,
      "colors":{
        "color":[
          {
            "pallette":"000000",
            "name":"Black",
            "item_status":{
              "success":true,
              "code":9178,
              "message":"Color retrieval successful"
            }
          },
          {
            "pallette":"000080",
            "name":"Navy",
            "item_status":{
              "success":true,
              "code":9178,
              "message":"Color retrieval successful"
            }
          },
          {
            "pallette":"00bfff",
            "name":"DeepSkyBlue",
            "item_status":{
              "success":true,
              "code":9178,
              "message":"Color retrieval successful"
            }
          },
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
      <message>Success</message>
   </status>
   <product>
      <count>20</count>
      <colors>
         <color>
            <pallette>000000</pallette>
            <name>Black</name>
            <item_status>
               <success>true</success>
               <code>9178</code>
               <message>Color retrieval successful</message>
            </item_status>
         </color>
         <color>
            <pallette>000080</pallette>
            <name>Navy</name>
            <item_status>
               <success>true</success>
               <code>9178</code>
               <message>Color retrieval successful</message>
            </item_status>
         </color>
         <color>
            <pallette>00bfff</pallette>
            <name>DeepSkyBlue</name>
            <item_status>
               <success>true</success>
               <code>9178</code>
               <message>Color retrieval successful</message>
            </item_status>
         </color>
      </colors>
   </product>
</response>

```
Retrieves the details of all product colors configured for the org.

### Resource Information
| | |
--------- | ----------- |
URI | `/product/colors`
Rate Limited? | Yes
HTTP Methods | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/product/colors?{requestParams}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | ------------
pallette | string | Retrieves the details of a specific color. Pass the hexa code of the color that you want to fetch.
limit | int | Limit the number of entries retrieve.


### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
name | string | Name of the color.
pallette | string | Hex code of the color.






## Retrieve Product Sizes

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/product/sizes?format=json
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
   <product>
      <count>7</count>
      <sizes>
         <size>
            <name>L</name>
            <label>large</label>
            <canonical_name>Large</canonical_name>
            <description />
            <size_family>US</size_family>
            <type>Mens Shirt</type>
            <parent_canonical_name>40</parent_canonical_name>
            <item_status>
               <success>true</success>
               <code>9130</code>
               <message>Size retrieval successful</message>
            </item_status>
         </size>
         <size>
            <name>M</name>
            <label>medium</label>
            <canonical_name>Medium</canonical_name>
            <description />
            <size_family>US</size_family>
            <type>Mens Shirt</type>
            <parent_canonical_name>38</parent_canonical_name>
            <item_status>
               <success>true</success>
               <code>9130</code>
               <message>Size retrieval successful</message>
            </item_status>
         </size>
         <size>
            <name>S</name>
            <label>small</label>
            <canonical_name>Small</canonical_name>
            <description />
            <size_family>US</size_family>
            <type>Mens Shirt</type>
            <parent_canonical_name>37</parent_canonical_name>
            <item_status>
               <success>true</success>
               <code>9130</code>
               <message>Size retrieval successful</message>
            </item_status>
         </size>
      </sizes>
   </product>
</response>


```

```json
{
  "response":{
    "status":{
      "success":true,
      "code":200,
      "message":"Success"
    },
    "product":{
      "count":7,
      "sizes":{
        "size":[
          {
            "name":"L",
            "label":"large",
            "canonical_name":"Large",
            "description":"",
            "size_family":"US",
            "type":"Mens Shirt",
            "parent_canonical_name":"40",
            "item_status":{
              "success":true,
              "code":9130,
              "message":"Size retrieval successful"
            }
          },
          {
            "name":"M",
            "label":"medium",
            "canonical_name":"Medium",
            "description":"",
            "size_family":"US",
            "type":"Mens Shirt",
            "parent_canonical_name":"38",
            "item_status":{
              "success":true,
              "code":9130,
              "message":"Size retrieval successful"
            }
          },
          {
            "name":"S",
            "label":"small",
            "canonical_name":"Small",
            "description":"",
            "size_family":"US",
            "type":"Mens Shirt",
            "parent_canonical_name":"37",
            "item_status":{
              "success":true,
              "code":9130,
              "message":"Size retrieval successful"
            }
          },
          
        ]
      }
    }
  }
}
```
Retrieves the list of all configured product sizes.

### Resource Information
| | |
--------- | ----------- |
URI | `/product/sizes`
Rate Limited? | Yes
HTTP Method | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/product/sizes?{requestParams}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
include_id | boolean | Pass `true` to retrieve ids of each size.
name | string | Retrieves details of specific size details based on the size name passed.
canonical_name | string | Retrieves the details of a specific size based on the CName. Canonical names are reference name provided to a specific size.
type | string | Retrieve sizes of a specific type.
size_family | string | Retrieve sizes of a specified size family. Supports only predefined values. 
id | long | Retrieve the details of a specific size based on the size id passed
limit | int | Limit the number of entries to retrieve.

### Response Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
name | string | Name of the size
label | string | Label name of the size.
canonical_name" | : "M",
description | string | Description of the size as in the database.
size_family | string| Family size to which the size belongs to. 
type | string | Type associated to the size.
parent_canonical_name | string | CNAME or reference name provided to a specific size.




## Retrieve Product Meta-Sizes

> Sample Request

```html
https://us.api.capillarytech.com/v1.1/product/meta_sizes?format=json
```

> Sample Response

```xml
<response>
   <status>
      <success>true</success>
      <code>200</code>
      <message>Success</message>
   </status>
   <product>
      <count>16</count>
      <meta_sizes>
         <meta_size>
            <name>37</name>
            <label />
            <description />
            <size_family>CentiMeter</size_family>
            <type>Mens Shirt</type>
            <parent_meta_size />
            <item_status>
               <success>true</success>
               <code>9140</code>
               <message>Meta size retrieval successful</message>
            </item_status>
         </meta_size>
         <meta_size>
            <name>38</name>
            <label />
            <description />
            <size_family>CentiMeter</size_family>
            <type>Mens Shirt</type>
            <parent_meta_size />
            <item_status>
               <success>true</success>
               <code>9140</code>
               <message>Meta size retrieval successful</message>
            </item_status>
         </meta_size>
         <meta_size>
            <name>39</name>
            <label />
            <description />
            <size_family>CentiMeter</size_family>
            <type>Mens Shirt</type>
            <parent_meta_size />
            <item_status>
               <success>true</success>
               <code>9140</code>
               <message>Meta size retrieval successful</message>
            </item_status>
         </meta_size>
         <meta_size>
            <name>40</name>
            <label />
            <description />
            <size_family>CentiMeter</size_family>
            <type>Mens Shirt</type>
            <parent_meta_size />
            <item_status>
               <success>true</success>
               <code>9140</code>
               <message>Meta size retrieval successful</message>
            </item_status>
         </meta_size>
         <meta_size>
            <name>41</name>
            <label />
            <description />
            <size_family>CentiMeter</size_family>
            <type>Mens Shirt</type>
            <parent_meta_size />
            <item_status>
               <success>true</success>
               <code>9140</code>
               <message>Meta size retrieval successful</message>
            </item_status>
         </meta_size>
      </meta_sizes>
   </product>
</response>

```

```json
{
  "response":{
    "status":{
      "success":true,
      "code":200,
      "message":"Success"
    },
    "product":{
      "count":16,
      "meta_sizes":{
        "meta_size":[
          {
            "name":"37",
            "label":"",
            "description":"",
            "size_family":"CentiMeter",
            "type":"Mens Shirt",
            "parent_meta_size":null,
            "item_status":{
              "success":true,
              "code":9140,
              "message":"Meta size retrieval successful"
            }
          },
          {
            "name":"38",
            "label":"",
            "description":"",
            "size_family":"CentiMeter",
            "type":"Mens Shirt",
            "parent_meta_size":null,
            "item_status":{
              "success":true,
              "code":9140,
              "message":"Meta size retrieval successful"
            }
          },
          {
            "name":"39",
            "label":"",
            "description":"",
            "size_family":"CentiMeter",
            "type":"Mens Shirt",
            "parent_meta_size":null,
            "item_status":{
              "success":true,
              "code":9140,
              "message":"Meta size retrieval successful"
            }
          },
          {
            "name":"40",
            "label":"",
            "description":"",
            "size_family":"CentiMeter",
            "type":"Mens Shirt",
            "parent_meta_size":null,
            "item_status":{
              "success":true,
              "code":9140,
              "message":"Meta size retrieval successful"
            }
          },
          {
            "name":"41",
            "label":"",
            "description":"",
            "size_family":"CentiMeter",
            "type":"Mens Shirt",
            "parent_meta_size":null,
            "item_status":{
              "success":true,
              "code":9140,
              "message":"Meta size retrieval successful"
            }
          },
        ]
      }
    }
  }
}
```


Retrieves details of all product meta-sizes.


### Resource Information
| | |
--------- | ----------- |
URI | `/product/meta_sizes`
Rate Limited? | Yes
HTTP Methods | GET
Batch Support | Yes

### Request URL
`https://{host}/v1.1/product/meta_sizes?{requestParams}&format={xml/json}`


### Request Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
include_id | boolean | Pass `true` to retrieve IDs of each meta size. 
name | string | Retrieves the details of a specific meta-size based on the name passed.
type | string | Retrieves the meta-sizes of a specific type.
size_family | string | Retrieves all the meta-sizes of the specified size family.
id | long | Retrieves the details of a specific meta-size based on the meta-size ID passed.
limit | int | Limits the number of meta-sizes retrieve.


### Response Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
name | string | Name of the meta-size.
label | string | Label of the meta-size.
description | string | Description of the meta-size as in the database.
size_family | string | Size family to which the meta-size belongs.
type | string | Type of the meta-size.
parent_meta_size | string | Parent of the meta-size. Applicable for child meta-sizes.




## Retrieve Product Attributes

> Sample Request

```html
https://api.us.capillarytech.com/v1.1/product/attributes?format=json
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
   <product>
      <count>5</count>
      <attributes>
         <attribute>
            <name>E1</name>
            <label>ee1</label>
            <is_enum>0</is_enum>
            <type>Int</type>
            <extraction_rule_type>UPLOAD</extraction_rule_type>
            <extraction_rule_data>E1</extraction_rule_data>
            <is_soft_enum>1</is_soft_enum>
            <use_in_dump>1</use_in_dump>
            <default_attribute_value_name>e10</default_attribute_value_name>
            <item_status>
               <success>true</success>
               <code>9176</code>
               <message>Attribute retrieval successful</message>
            </item_status>
         </attribute>
         <attribute>
            <name>D1</name>
            <label />
            <is_enum>0</is_enum>
            <type>Int</type>
            <extraction_rule_type>UPLOAD</extraction_rule_type>
            <extraction_rule_data>D1</extraction_rule_data>
            <is_soft_enum>1</is_soft_enum>
            <use_in_dump>1</use_in_dump>
            <default_attribute_value_name>d10</default_attribute_value_name>
            <item_status>
               <success>true</success>
               <code>9176</code>
               <message>Attribute retrieval successful</message>
            </item_status>
         </attribute>
         <attribute>
            <name>C1</name>
            <label>cc1</label>
            <is_enum>0</is_enum>
            <type>Boolean</type>
            <extraction_rule_type>POS</extraction_rule_type>
            <extraction_rule_data />
            <is_soft_enum>0</is_soft_enum>
            <use_in_dump>1</use_in_dump>
            <default_attribute_value_name>c11</default_attribute_value_name>
            <item_status>
               <success>true</success>
               <code>9176</code>
               <message>Attribute retrieval successful</message>
            </item_status>
         </attribute>
      </attributes>
   </product>
</response>


```

```json
{
  "response":{
    "status":{
      "success":true,
      "code":200,
      "message":"Success"
    },
    "product":{
      "count":5,
      "attributes":{
        "attribute":[
          {
            "name":"E1",
            "label":"ee1",
            "is_enum":"0",
            "type":"Int",
            "extraction_rule_type":"UPLOAD",
            "extraction_rule_data":"E1",
            "is_soft_enum":"1",
            "use_in_dump":"1",
            "default_attribute_value_name":"e10",
            "item_status":{
              "success":true,
              "code":9176,
              "message":"Attribute retrieval successful"
            }
          },
          {
            "name":"D1",
            "label":"",
            "is_enum":"0",
            "type":"Int",
            "extraction_rule_type":"UPLOAD",
            "extraction_rule_data":"D1",
            "is_soft_enum":"1",
            "use_in_dump":"1",
            "default_attribute_value_name":"d10",
            "item_status":{
              "success":true,
              "code":9176,
              "message":"Attribute retrieval successful"
            }
          },
          {
            "name":"C1",
            "label":"cc1",
            "is_enum":"0",
            "type":"Boolean",
            "extraction_rule_type":"POS",
            "extraction_rule_data":"",
            "is_soft_enum":"0",
            "use_in_dump":"1",
            "default_attribute_value_name":"c11",
            "item_status":{
              "success":true,
              "code":9176,
              "message":"Attribute retrieval successful"
            }
          },
          
          
        ]
      }
    }
  }
}
```

Retrieves the list of all product attributes.

### Resource Information
| | |
--------- | ----------- |
URI | `product/attributes`
Batch Support | Yes
HTTP Methods | GET
Rate Limited? | Yes


### Request URL
`https://{host}/v1.1/product/attributes?{requestParams}&format={xml/json}`

### Request Query Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
include_id | boolean | Pass `true` to retrieve IDs of each product attribute.
values | boolean | Pass `true` to retrieve all child attributes.
value_limit | int | Limits number of child attributes to be retrieved per attribute.
name | string | Retrieves details of an an attribute based on the attribute name (name is not case sensitive).
id | long | Pass an attribute id to fetch the details of that specific attribute.
limit | int | Limit the number of attributes to retrieve.
offset | int | Omits the specified number of entries from the top.

### Response Parameters
Parameter | Datatype | Description
--------- | -------- | -----------
name | string | Name of the attribute.
label | string | Label name of the attribute
is_enum | enum | Whether the attribute values are predefined values. `1` if enum type, `0` if not enum.
type | string | Datatype of the attribute value.
default_attribute_value_name | string | Default value of the attribute if any.
inventory_item_attributes | string | Name of the table (in the database) from which the attributes are retrieved.

## Response Codes
### Success Code
Code | Description
---- | -----------
2100 | Product retrieved successfully

### Error Code
Code | Description
---- | -----------
2101 | Unable to retrieve product details
