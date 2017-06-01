# Product

The product entity holds all products of an org and product related information such as size, color, type, and brand.  Product APIs allow you to fetch details of a specific product, modify existing details, change brand name for a product and create new attributes for a product.

## Add Product
```html
http://us.api.capillarytech.com/v1.1/product/add.json
```
> Sample POST Request

```xml
<root>
<product>
        	<sku>31sa84</sku>
        <ean>12ss21</ean>
        <price>22</price>
        <description>adding sample product</description>
        <long_description>Sample description</long_description>
        <img_url>https://nightly.capillary.in/productManagement/Colors</img_url>
        	<size>
            <name>Jeans Shirt</name>
        </size>
        <style>
            <name>test001</name>
        </style>
        <brand>
            <name>BRANDS23</name>
        </brand>
        <color>
            <name>DarkBlue</name>
        </color>
        <category>
            <name>My test21</name>
        </category>
        <attributes>
            <attribute>
                <name>大伟大12121212</name>
                <value>123</value>
            </attribute>
            <attribute>
                <name>大伟大1212</name>
                <value>12hjha</value>
            </attribute>
        </attributes>
       	</product>
</root>
```
```json
{
  "root": {
    "product": [{
      "sku": "31sa84",
      "ean": "12ss21",
      "price": "22",
      "description": "adding sample product",
      "long_description": "Sample description",
      "img_url": "https://nightly.capillary.in/productManagement/Colors",
      "size": { "name": "Jeans Shirt" },
      "style": { "name": "test001" },
      "brand": { "name": "BRANDS23" },
      "color": { "name": "DarkBlue" },
      "category": { "name": "My test21" },
      "attributes": {
        "attribute": [
          {
            "name": "大伟大12121212",
            "value": "123"
          },
          {
            "name": "大伟大1212",
            "value": "12hjha"
          }
        ]
      }
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
        <message>SUCCESS</message>
    </status>
    <product>
        <sku>31sa84</sku>
        <ean>12ss21</ean>
        <price>22</price>
        <description>adding sample product</description>
        <long_description>Sample description</long_description>
        <img_url>https://nightly.capillary.in/productManagement/Colors</img_url>
        <size>
            <name>Jeans Shirt</name>
        </size>
        <style>
            <name>test001</name>
        </style>
        <brand>
            <name>BRANDS23</name>
        </brand>
        <color>
            <name>DarkBlue</name>
        </color>
        <category>
            <name>My test21</name>
        </category>
        <attributes>
            <attribute>
                <name>大伟大12121212</name>
                <value>123</value>
            </attribute>
            <attribute>
                <name>大伟大1212</name>
                <value>12hjha</value>
            </attribute>
        </attributes>
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
      "success": "true",
      "code": "200",
      "message": "SUCCESS"
    },
    "product": {
      "sku": "31sa84",
      "ean": "12ss21",
      "price": "22",
      "description": "adding sample product",
      "long_description": "Sample description",
      "img_url": "https://nightly.capillary.in/productManagement/Colors",
      "size": { "name": "Jeans Shirt" },
      "style": { "name": "test001" },
      "brand": { "name": "BRANDS23" },
      "color": { "name": "DarkBlue" },
      "category": { "name": "My test21" },
      "attributes": {
        "attribute": [
          {
            "name": "大伟大12121212",
            "value": "123"
          },
          {
            "name": "大伟大1212",
            "value": "12hjha"
          }
        ]
      },
      "item_status": {
        "success": "true",
        "code": "9100",
        "message": "Product added successfully"
      }
    }
  }
}
```

Allows you to add product to the inventory.

### Resource Information
Attribute | Value
--------- | -----
URI | product/add
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
Response Object | Adds product to the inventory
API Version | v1.1 
Batch Support | Yes


### Request URL
`http://<cluster url>/v1.1/product/add.<xml/json>`


## Retrieve Products

```html
# Sample Request
http://us.api.capillarytech.com/v1.1/product/search?q=(color%3AIN%3ABlack%3BBlue%3BGreen%7Csize%3AEQUALS%3AXL%7Cprice%3ARANGE%3A2000%3B4000%7Cdepartment%3AEQUALS%3AMen)&format=xml
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
    <product>
        <count>454</count>
        <start />
        <rows>2</rows>
        <results>
            <item>
                <id>16391993</id>
                <org_id>146</org_id>
                <sku>3008810301</sku>
                <in_stock>true</in_stock>
                <price>455</price>
                <description>PE SHIRT</description>
                <img_url>http://testing.capillary.in/images/trouser.jpg</img_url>
                <attributes>
                    <attribute>
                        <name>Group</name>
                        <value>Peter England</value>
                    </attribute>
                    <attribute>
                        <name>Size</name>
                        <value>XXL</value>
                    </attribute>
                </attributes>
            </item>
            <item>
                <id>16391999</id>
                <org_id>146</org_id>
                <sku>3008811101</sku>
                <in_stock>true</in_stock>
                <price>455</price>
                <description>PE SHIRT</description>
                <img_url>http://testing.capillary.in/images/trouser.jpg</img_url>
                <attributes>
                    <attribute>
                        <name>Group</name>
                        <value>Peter England</value>
                    </attribute>
                    <attribute>
                        <name>Department</name>
                        <value>Peter England Main Line</value>
                    </attribute>
                </attributes>
            </item>
        </results>
    </product>
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
        "product": {
            "count": "454", 
            "start": "", 
            "rows": "2", 
            "results": {
                "item": [
                    {
                        "id": "16391993", 
                        "org_id": "146", 
                        "sku": "3008810301", 
                        "in_stock": "true", 
                        "price": "455", 
                        "description": "PE SHIRT", 
                        "img_url": "http://testing.capillary.in/images/trouser.jpg", 
                        "attributes": {
                            "attribute": [
                                {
                                    "name": "Group", 
                                    "value": "Peter England"
                                }, 
                                {
                                    "name": "Size", 
                                    "value": "XXL"
                                }
                            ]
                        }
                    }, 
                    {
                        "id": "16391999", 
                        "org_id": "146", 
                        "sku": "3008811101", 
                        "in_stock": "true", 
                        "price": "455", 
                        "description": "PE SHIRT", 
                        "img_url": "http://testing.capillary.in/images/trouser.jpg", 
                        "attributes": {
                            "attribute": [
                                {
                                    "name": "Group", 
                                    "value": "Peter England"
                                }, 
                                {
                                    "name": "Department", 
                                    "value": "Peter England Main Line"
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

Retrieve products available at the current org based on the query params such as SKU, quantity, price, item status, images, attributes and so on.

### Resource Information
Attribute | Value
--------- | -----
URI | product/searchs
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns details of a specific inventory
API Version | v1.1 
Batch Support | Yes


### Request Parameters
Attributes like price, item_sku, description, img_url are common for all the orgs.

Parameter | Description
--------- | -----------
org_id | Returns all products of the organization
sku | Returns products having the specified SKUs
item_ean | Returns product(s)  with the specified European Article Number
price | Returns products with the specified price
added_on | Returns products added on a specific date
User Defined Attributes | Apart from the predefined attributes mentioned above, you can also use custom attributes configured for your organization

### Request URL
`http://<cluster url>/v1.1/product/search?q=(<searchquerystring>)&format=<xml/json>`

### Search Query String
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


**Request URL**: http://<cluster url>/v1.1/product/search?q=(color%3ain%3ablack%3bblue%3bgreen%7csize%3aequals%3axl%7cprice%3arange%3a2000%3b4000%7cdepartment%3aequals%3amen)&format=<xml/json>


<aside class="warning">The following characters are not supported in search queries as they have a special meaning in search grammar. <br>
`+ - && || ! ( ) { } [ ] ^ " ~ * ? : \`
</aside>




## Retrieve Product Attributes
```html
# Sample Request
http://us.api.capillarytech.com/v1.1/product/attributes?format=json

```

> Sample Request

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>Some requests have failed due to errors</message>
    </status>
    <product>
        <attributes>
            <attribute>
                <name>Color</name>
                <label>Color</label>
                <type>true</type>
                <search>true</search>
            </attribute>
            <attribute>
                <name>Size</name>
                <label>Size</label>
                <type>true</type>
                <search>true</search>
            </attribute>
            <attribute>
                <name>Deparments</name>
                <label>部門</label>
                <type>true</type>
                <search>false</search>
            </attribute>
        </attributes>
    </product>
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
        "product": {
            "attributes": {
                "attribute": [
                    {
                        "name": "Color", 
                        "label": "Color", 
                        "type": "true", 
                        "search": "true"
                    }, 
                    {
                        "name": "Size", 
                        "label": "Size", 
                        "type": "true", 
                        "search": "true"
                    }, 
                    {
                        "name": "Deparments", 
                        "label": "部門", 
                        "type": "true", 
                        "search": "false"
                    }
                ]
            }
        }
    }
}
```

Returns the list attributes of a specific product.

### Resource Information
Attribute | Value
--------- | -----
URI | product/attributes
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns attributes of a product
API Version | v1.1 
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/product/attributes?format=<xml/json>`


## Retrieve Products Details
```html
# Sample Request
http://api.capillary.co.in/v1.1/product/get?sku=13213131,22345&format=json
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
    <product>
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
            <item_status>
                <status>true</status>
                <code>200</code>
                <message>Operation Successful</message>
            </item_status>
        </item>
    </product>
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
        "product": {
            "item": {
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
                }, 
                "item_status": {
                    "status": "true", 
                    "code": "200", 
                    "message": "Operation Successful"
                }
            }
        }
    }
}
```

Returns the details of a specific product. You can retrieve details of multiple products at a time.

### Resource Information
Attribute | Value
--------- | -----
URI | product/get
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns attributes of a product
API Version | v1.1 
Batch Support | Yes

### Request Parameters

Parameter | Description
--------- | -----------
sku	 | Returns products based on the SKU passed
id | Returns products based on the product id. This id is assigned by Capillary when each product is added to the Capillary server

### Request URL
`http://<cluster url>/v1.1/product/get?format=xml&<query_parameters>`




## Response Codes
### Success Code
Code | Description
---- | -----------
2100 | Product retrieved successfully

### Error Code
Code | Description
---- | -----------
2101 | Unable to retrieve product details

