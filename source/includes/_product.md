# Product

The product entity holds all products of an org and product related information such as size, color, type, and brand.  Product APIs allow you to fetch details of a specific product, modify existing details, change brand name for a product and create new attributes for a product.

## Search Products
```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/product/search?q=(color%3AIN%3ABlack%3BBlue%3BGreen%7Csize%3AEQUALS%3AXL%7Cprice%3ARANGE%3A2000%3B4000%7Cdepartment%3AEQUALS%3AMen)&format=xml
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

Returns inventory details of a specific product such as SKU, quantity, price, item status, images, attributes and so on.

### Resource Information
Attribute | Value
--------- | -----
URI | product/search
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns details of a specific inventory
API Version | v1.1 
Batch Support | Yes


### Request Parameters
Attributes like price, item_sku, description, img_url is common for all the organizations.

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


## Retrieve Product Attributes
```html
# Sample Request
http://us.intouch.capillarytech.com/v1.1/product/attributes?format=json

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


## Retrieve Products of the Org
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

Returns products available in that specific org.

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


## Retrieve Details of a Specific Product


sku
id


