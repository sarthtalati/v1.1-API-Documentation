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
Response Object | Returns product details
API Version | v1.1 
Batch Support | Yes

### Request Parameters

Parameter | Description
--------- | -----------
sku	 | Returns products based on the SKU passed
id | Returns products based on the product id. This id is assigned by Capillary when each product is added to the Capillary server

### Request URL
`http://<cluster url>/v1.1/product/get?format=xml&<query_parameters>`



## Retrieve Product Categories
```html
http://us.api.capillarytech.com/v1.1/product/categories?format=json
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
Attribute | Value
--------- | -----
URI | product/categories
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
API Version | v1.1 
Batch Support | Yes


### Request URL
`http://<Cluster URL>/v1.1/product/categories?<request params>&format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
include_id | Retrieves category ids of each category fetched. Value: true/false
values | Retrieves all child products if values=true
name | Retrieves the details of a specific product based on the product name (not case sensitive)
parent_name | Retrieves the details of a specific product and its child products based on the parent name passed
id | Retrieves the details of a specific product based on the product id
parent_id | Retrieves the details of a specific product and its child products based on the parent product id passed
limit | Limits the number of products to be retrieved


## Retrieve Product Brands
```html
http://us.api.capillarytech.com/v1.1/product/brands?format=json
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
            <description>aaaa</description>
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
            <description>bbbb</description>
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
            <description>cccc</description>
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
            <description>dddd</description>
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
            "description":"aaaa",
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
            "description":"bbbb",
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
            "description":"cccc",
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
            "description":"dddd",
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
Attribute | Value
--------- | -----
URI | product/brands
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
API Version | v1.1 
Batch Support | Yes

### Request URL

`http://<cluster url>/v1.1/product/brands?<request params>&format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
include_id | Retrieves the brand id if include_id is passed as true. Value: true/false 
name | Retrieves the details of the specific brand based on the name passed(name is not case sensitive)
parent_name | Retrieves the details of a specific parent brand and its child brands based on the brand name passed
id | Retrieves the details of a specific brand based on the brand id passed
parent_id | Retrieves the details of a specific parent brand and its child brands based on the parent brand id passed
limit | Limits the number of brands to be retrieved per request




## Retrieve Product Colors
```html
http://us/api.capillarytech.com/v1.1/product/colors?format=json
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
Attribute | Value
--------- | -----
URI | product/colors
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
API Version | v1.1 
Batch Support | Yes

### Request URL
`http://<Cluster URL>/v1.1/product/colors?<Request Params>&format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
pallette | Retrieves the details of a specific color. Pass the hexa code of the color that you want to fetch.
limit | Limits the number of entries to be retrieved



## Retrieve Product Sizes
```html
http://us.api.capillarytech.com/v1.1/product/sizes?format=json
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
Attribute | Value
--------- | -----
URI | product/sizes
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
API Version | v1.1 
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/product/sizes?<Request Params>&format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
include_id | Retrievs ids of each size if include_id is passed as true. Value: true/false
name | Retrieves details of specific size details based on the size name passed
type | Retrieves sizes of a specific type
size_family | Retrieves all the meta-sizes of the specified size family
id | Retrieves the details of a specific meta-size id 
limit | Limits the number of entries to be retrieved




## Retrieve Product Meta-Sizes
```html
http://us.api.capillarytech.com/v1.1/product/meta_sizes?format=json
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
            <decription />
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
            <decription />
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
            <decription />
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
            <decription />
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
            <decription />
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
            "decription":"",
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
            "decription":"",
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
            "decription":"",
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
            "decription":"",
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
            "decription":"",
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
Attribute | Value
--------- | -----
URI | product/meta_sizes
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
API Version | v1.1 
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/product/meta_sizes?<Request Params>&format=<xml/json>`


### Request Parameters
Parameter | Description
--------- | -----------
include_id | Retrieves ids of each meta size if include_id=true. Value: true/false 
name | Retrieves the details of a specific meta-size based on the name passed
cannonical_name | Retrieves the details of a specific meta-size based on the cname. Cannonical names are reference names provided to a specific size.
type | retrieves the meta-sizes of a specific type
size_family | Retrieves all the meta-sizes of the specified size family
id | Retrieves the details of a specific meta-size id 
limit | Limits the number of meta-sizes to be retrieved


## Retrieve Product Attributes
```html
http://api.us.capillarytech.com/v1.1/product/attributes?format=json
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
Attribute | Value
--------- | -----
URI | product/attributes
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
API Version | v1.1 
Batch Support | Yes


### Request URL
`http://<Cluster URL>/v1.1/product/attributes?<request params>&format=<xml/json>`

### Request Parameters
Parameter | Description
--------- | -----------
include_id | Pass include_id=true to retrieve attribute ids
values | Retrieves attribute values if values=true
value_limit | limit number of attribute values to be retrieved per attribute
name | Specify an attribute name to retrieve the details of that spcific attribute (non-case sensitive)
id | Pass an attribute id to fetch the details of that specific attribute
limit | Limit the number of attributes that you want to retrieve




## Response Codes
### Success Code
Code | Description
---- | -----------
2100 | Product retrieved successfully

### Error Code
Code | Description
---- | -----------
2101 | Unable to retrieve product details
