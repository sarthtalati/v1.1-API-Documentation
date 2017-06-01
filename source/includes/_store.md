# Store
The store entity holds information about all stores configured for an organization. This entity contain APIs to manage and fetch store details such as retrieve store information, upload log files to the server, get store report, and fetch store tasks. Store details and configurations cannot be updated using store APIs.

## Retrieve Store Details
```html
# Sample Request
http://us.api.capillarytech.com/v1.1/store/get?format=json&id=9235927
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
    <stores>
        <store>
            <id>9235927</id>
            <name>ManagerStore</name>
            <code>client_sst_3</code>
            <location>
                <latitude>10</latitude>
                <longitude>10</longitude>
            </location>
            <currency>
                <name>Indian Rupee</name>
                <symbol />
                <iso_code>
                    <alpha>INR</alpha>
                    <numeric>356</numeric>
                </iso_code>
            </currency>
            <language>English</language>
            <time_zone>
                <coordinates>+170306148</coordinates>
                <offset>
                    <std>UTC-04</std>
                    <summer>NULL</summer>
                </offset>
            </time_zone>
            <mobile>44700900000</mobile>
            <email>tom.sawyer@example.com</email>
            <land_line />
            <external_id />
            <external_id_1 />
            <external_id_2 />
            <country_name>England</country_name>
            <state_name></state_name>
            <city_name>London</city_name>
            <area_name>Church Street</area_name>
            <template>
                <sms>
                    <name>Catherine Earnshaw</name>
                    <email>catherine.earnshaw@example.com</email>
                    <mobile>44700900999</mobile>
                </sms>
                <email>
                    <name>John Smith</name>
                    <mobile>44700900888</mobile>
                    <email>john.smith@example.com</email>
                </email>
            </template>
            <item_status>
                <success>true</success>
                <code>900</code>
                <message>Store Info Retrieval

  	Successful</message>
            </item_status>
        </store>
    </stores>
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
        "stores": {
            "store": {
                "id": "9235927", 
                "name": "ManagerStore", 
                "code": "client_sst_3", 
                "location": {
                    "latitude": "10", 
                    "longitude": "10"
                }, 
                "currency": {
                    "name": "Indian Rupee", 
                    "symbol": "", 
                    "iso_code": {
                        "alpha": "INR", 
                        "numeric": "356"
                    }
                }, 
                "language": "English", 
                "time_zone": {
                    "coordinates": "+170306148", 
                    "offset": {
                        "std": "UTC-04", 
                        "summer": "NULL"
                    }
                }, 
                "mobile": "44700900000", 
                "email": "tom.sawyer@example.com", 
                "land_line": "", 
                "external_id": "", 
                "external_id_1": "", 
                "external_id_2": "", 
                "country_name": "England", 
                "state_name": "", 
                "city_name": "London", 
                "area_name": "Church Street", 
                "template": {
                    "sms": {
                        "name": "Catherine Earnshaw", 
                        "email": "catherine.earnshaw@example.com", 
                        "mobile": "44700900999"
                    }, 
                    "email": {
                        "name": "John Smith", 
                        "mobile": "44700900888", 
                        "email": "john.smith@example.com"
                    }
                }, 
                "item_status": {
                    "success": "true", 
                    "code": "900", 
                    "message": "Store Info Retrieval 

  	Successful"
                }
            }
        }
    }
}
```

Returns detailed information of a specific store.

### Resource Information
Attribute | Value
--------- | -----
URI | store/get
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns store details
 API Version | v1.1 
 Batch Support | No

### Request URL
`http://<cluster url>/v1.1/store/get?format=<xml/json>&<query_params>`

### Request Parameters
Parameter | Description
--------- | -----------
id | This is a unique store id generated by Capillary. Returns the details of the specific store based on the store id passed
external_id | Returns the store details based on the `external_id` passed. External id is also a unique id for the store



## Retrieve Store Staff Details
```html
# Sample Request
http://us.api.capillarytech.com/v1.1/store/staff?format=json&type=ASSOCIATE
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
        "store": {
            "staff": {
                "user": [
                    {
                        "id": "2313", 
                        "type": "ASSOCIATE", 
                        "code": "marks12131", 
                        "firstname": "George", 
                        "lastname": "Milton", 
                        "mobile": "447009000693", 
                        "email": "george.milton@example.com", 
                        "store_id": "232234", 
                        "store_code": "store.server"
                    }, 
                    {
                        "id": "2314", 
                        "type": "ASSOCIATE", 
                        "code": "marks12132", 
                        "firstname": "George", 
                        "lastname": "Milton", 
                        "mobile": "447009000693", 
                        "email": "george.milton@example.com", 
                        "store_id": "232234", 
                        "store_code": "store.server"
                    }, 
                    {
                        "id": "2315", 
                        "type": "ASSOCIATE", 
                        "code": "marks12133", 
                        "firstname": "George", 
                        "lastname": "Milton", 
                        "mobile": "447009000693", 
                        "email": "george.milton@example.com", 
                        "store_id": "232234", 
                        "store_code": "store.server"
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
        <message>success</message>
    </status>
    <store>
        <staff>
            <user>
                <id>2313</id>
                <type>ASSOCIATE</type>
                <!-- type can be ASSOCIATE or manager -->
                <code>marks12131</code>
                <firstname>George</firstname>
                <lastname>Milton</lastname>
                <mobile>447009000693</mobile>
                <email>george.milton@example.com</email>
                <store_id>232234</store_id>
                <store_code>store.server</store_code>
            </user>
            <user>
                <id>2314</id>
                <type>ASSOCIATE</type>
                <code>marks12132</code>
                <firstname>George</firstname>
                <lastname>Milton</lastname>
                <mobile>447009000693</mobile>
                <email>george.milton@example.com</email>
                <store_id>232234</store_id>
                <store_code>store.server</store_code>
            </user>
            <user>
                <id>2315</id>
                <type>ASSOCIATE</type>
                <code>marks12133</code>
                <firstname>George</firstname>
                <lastname>Milton</lastname>
                <mobile>447009000693</mobile>
                <email>george.milton@example.com</email>
                <store_id>232234</store_id>
                <store_code>store.server</store_code>
            </user>
        </staff>
    </store>
</response>
```

Returns the entire staff details of the current organization. Staff could be associates and managers.

### Resource Information
Attribute | Value
--------- | -----
URI | store/staff
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns details of staff
 API Version | v1.1 
 Batch Support | No

### Request URL
`http://<cluster url>/v1.1/store/staff?format=xml&type=<type_value>`

### Request Parameters
Parameter | Description
--------- | -----------
type_value | Value: ASSOCIATE, MANAGER. Returns the list of associates when `type_value=ASSOCIATE` and managers when `type_value=MANAGER`


## Retrieve Store Tasks
```html
# Sample Request
http://us.api.capillarytech.com/v1/store/tasks?format=json
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
    <store>
        <tasks>
            <task>
                <id />
                <entry_id />
                <type>CUSTOMER/CASHIER</type>
                <associate_id>123</associate_id>
                <!-- individual tasks -->
                <customer_id>124</customer_id>
                <!-- customer tasks -->
                <store_id>125</store_id>
                <status>OPEN</status>
            </task>
            <task>
                <id />
                <entry_id />
                <type>CUSTOMER/TYPE</type>
                <associate_id>125</associate_id>
                <!-- individual tasks -->
                <customer_id>122</customer_id>
                <!-- customer tasks -->
                <store_id>127</store_id>
                <status>OPEN</status>
            </task>
        </tasks>
    </store>
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
        "store": {
            "tasks": {
                "task": [
                    {
                        "id": "", 
                        "entry_id": "", 
                        "type": "CUSTOMER/CASHIER", 
                        "associate_id": "123", 
                        "comment": [
                            "", 
                            ""
                        ], 
                        "customer_id": "124", 
                        "store_id": "125", 
                        "status": "OPEN"
                    }, 
                    {
                        "id": "", 
                        "entry_id": "", 
                        "type": "CUSTOMER/TYPE", 
                        "associate_id": "125", 
                        "comment": [
                            "", 
                            ""
                        ], 
                        "customer_id": "122", 
                        "store_id": "127", 
                        "status": "OPEN"
                    }
                ]
            }
        }
    }
}
```

Returns store task details such as task title, description, status, and updates.

### Resource Information
Attribute | Value
--------- | -----
URI | store/tasks
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns details of store tasks
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1/store/tasks?format=<xml/json>&<params>=<value>`

### Request Parameters
| Parameter | Description |
|---------- | -----------  |
|  all         | Value: sms, email, call, or none. Returns a particular type of task (SMS/email/call). If action_type is “none”, then the tasks other than SMS, email, or call will be returned | 
|  assoc_id    |  Returns the list of tasks assigned to a specific associate | 
|  customer_id |  Returns the list of tasks created for a specific customer  | 
|  start_date  |  Returns the list of tasks created between the dates set on start_date and end_date. If only start_date is mentioned then the list of tasks created on or after that specified date is returned | 
|  end_date    |  Returns the list of tasks created between the dates set on start_date and end_date. If only end_date is passed, the list of tasks created on or before the specified date is returned | 
|  count       |  Limits the number of tasks to be returned.  For example, if `count=10` then the details of only 10 tasks are returned | 


## Verify Store Login Credentials
```html
# Sample Request
http://api.capillary.co.in/v1.1/store/login.json
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
   <store>
      <user>
         <username>store.server</username>
         <first_name>MSP</first_name>
         <last_name>ss</last_name>
         <org_name>SS Testing</org_name>
         <user_id>4364301</user_id>
         <org_id>146</org_id>
         <server_time>2016-12-14T12:01:41+05:30</server_time>
         <store_server_prefix />
         <associate_login_enabled>false</associate_login_enabled>
      </user>
   </store>
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
        "store": {
            "user": {
                "username": "store.server", 
                "first_name": "MSP", 
                "last_name": "ss", 
                "org_name": "SS Testing", 
                "user_id": "4364301", 
                "org_id": "146", 
                "server_time": "2016-12-14T12:01:41+05:30", 
                "store_server_prefix": "", 
                "associate_login_enabled": "false"
            }
        }
    }
```

Verifies whether the log in credentials provided for a specific store are valid and returns the details of the users currently logged in to the store's InStore.

### Resource Information
Attribute | Value
--------- | -----
URI | store/login
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Verifies login credentials and returns active users of the store
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/store/login.<xml/json>`

## Upload Store Logs
```html
# Sample Request
http://api.capillary.co.in/v1.1/store/logs.file
```
> Sample POST Request

```json

```

```xml

```

> Success Response

```xml
<response>
<success>true</success>
<code>200</code>
<message>SUCCESS</message>
</response>

```

```json
{
  "response": {
    "success": "true",
    "code": "200",
    "message": "SUCCESS"
  }
}
```

> Failure Response

```xml
<response>
<!-- Case 1: When file size received at the server is different from the HTTP HEADER X-CAP-CLIENT-FILESIZE passed by client.-->
     <success>false</success>
     <code>904</code>
     <message>Client log file size passed does not match size uploaded on server</message>
</response>
```

```json
{
  "response": {
  "_comment": "Case 1: When file size received at the server is different from the HTTP HEADER X-CAP-CLIENT-FILESIZE passed by client"
    "success": "false",
    "code": "904",
    "message": "Client log file size passed does not match size uploaded on server"
  }
}
```

```xml
<response>
<!-- Case 2: Response when SHA1 signature of the file on client machine passed as HTTP HEADER X-CAP-CLIENT-FILESIGNATURE does not match SHA1 signature calculated on uploaded file on server -->
    <success>false</success>
    <code>905</code>
    <message>Client log file signature passed does not match file signature on server</message>
</response>
```

```json
{
  "response": {
  "_comment": "Case 2: Response when SHA1 signature of the file on client machine passed as HTTP HEADER X-CAP-CLIENT-FILESIGNATURE does not match SHA1 signature calculated on uploaded file on server"
    "success": "false",
    "code": "905",
    "message": "Client log file signature passed does not match file signature on server"
  }
}
```

```xml
<response>
<!-- Case 3: Response when file upload from our server to S3 fails via file service call -->
    <success>false</success>
    <code>906</code>
    <message>Failed to upload client log file to file service</message>
</response>
```

```json
{
  "response": {
  "_comment": "Case 3: Response when file upload from our server to S3 fails via file service call"
    "success": "false",
    "code": "906",
    "message": "Failed to upload client log file to file service"
  }
}
```

```xml
<response>
<!-- Case 4: Response when metadata of file is failed to insert into our DB -->
    <success>false</success>
    <code>907</code>
    <message>Failed to insert client log file metadata in db</message>
</response>
```

```json
{
  "response": {
  "_comment": "Case 4: Response when metadata of file is failed to insert into our DB"
    "success": "false",
    "code": "907",
    "message": "Failed to insert client log file metadata in db"
  }
}
```


Uploads the log files of InStore as per the headers provided - supports activity logs and performance logs.

### Resource Information
Attribute | Value
--------- | -----
URI | store/logs
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
Response Object | Uploads InStore log files
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/store/logs.file`

### Request Parameters
Parameter | Description
--------- | -----------
uploaded_time | Time at which the log file is uploaded in the database. Format: `YYYY-MM-DD HH:MM:SS`
logged_time | Time at which the log file is created in the database. Format: `YYYY-MM-DD HH:MM:SS`

### UPLOADING ACTIVITY LOG FILES TO THE SERVER
**Headers**

Authorization - Basic xxxxxxxx

Content-Type - multipart/form-data

X-CAP-CLIENT-LOGFILENAME - test.txt (name of file on client machine)

X-CAP-CLIENT-LOGFILESIZE - 189991 (this is file size in bytes on client machine)

X-CAP-CLIENT-FILE-SIGNATURE - dcac6f31e6805076ecb35f6351ba7e2e8b1794a5 (SHA1 hash of file on client)

### Uploading Performance Log Files


## Get Store Reports

```html
# Sample Request
http://us.api.capillarytech.com/v1.1/store/reports.json
```

> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
	<response>
		<status>
			<success>true</success>
			<code>200</code>
			<message>SUCCESS</message>
		</status>
		<report>
			<loyalty>
				<row>
					<start_date>2016-10-18 00:00:00</start_date>
					<end_date>2016-10-18 23:59:59</end_date>
					<customers>0</customers>
					<transactions>10</transactions>
					<not_interested_transactions>0</not_interested_transactions>
					<points_issued>210</points_issued>
					<points_redeemed>50</points_redeemed>
				</row>
				<row>
					<start_date>2016-10-17 00:00:00</start_date>
					<end_date>2016-10-17 23:59:59</end_date>
					<customers>1</customers>
					<transactions>8</transactions>
					<not_interested_transactions>0</not_interested_transactions>
					<points_issued>310</points_issued>
					<points_redeemed>80</points_redeemed>
				</row>
				<row>
					<start_date>2016-10-16 00:00:00</start_date>
					<end_date>2016-10-16 23:59:59</end_date>
					<customers>10</customers>
					<transactions>7</transactions>
					<not_interested_transactions>3</not_interested_transactions>
					<points_issued>500</points_issued>
					<points_redeemed>200</points_redeemed>
				</row>
				<row>
					<start_date>2016-10-13 00:00:00</start_date>
					<end_date>2016-10-18 23:59:59</end_date>
					<customers>3</customers>
					<transactions>11</transactions>
					<not_interested_transactions>2</not_interested_transactions>
					<points_issued>340</points_issued>
					<points_redeemed>90</points_redeemed>
				</row>
			</loyalty>
			<redemption>
				<row>
					<store_username>till.005</store_username>
					<customer>
						<firstname>Tom</firstname>
						<lastname>Sawyer</lastname>
						<mobile>44700900000</mobile>
					</customer>
					<transaction_number></transaction_number>
					<points_redeemed>100</points_redeemed>
					<redemption_date>2013-10-18 10:24:02</redemption_date>
				</row>
				<row>
					<store_username>till.005</store_username>
					<customer>
						<firstname>John</firstname>
						<lastname>Rita</lastname>
						<mobile>44700900999</mobile>
					</customer>
					<transaction_number>aaj-1</transaction_number>
					<points_redeemed>100</points_redeemed>
					<redemption_date>2013-10-18 10:49:54</redemption_date>
				</row>
			</redemption>
		</report>
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
        "report": {
            "loyalty": {
                "row": [
                    {
                        "start_date": "2016-10-18 00:00:00", 
                        "end_date": "2016-10-18 23:59:59", 
                        "customers": "0", 
                        "transactions": "10", 
                        "not_interested_transactions": "0", 
                        "points_issued": "210", 
                        "points_redeemed": "50"
                    }, 
                    {
                        "start_date": "2016-10-17 00:00:00", 
                        "end_date": "2016-10-17 23:59:59", 
                        "customers": "1", 
                        "transactions": "8", 
                        "not_interested_transactions": "0", 
                        "points_issued": "310", 
                        "points_redeemed": "80"
                    }, 
                    {
                        "start_date": "2016-10-16 00:00:00", 
                        "end_date": "2016-10-16 23:59:59", 
                        "customers": "10", 
                        "transactions": "7", 
                        "not_interested_transactions": "3", 
                        "points_issued": "500", 
                        "points_redeemed": "200"
                    }, 
                    {
                        "start_date": "2016-10-13 00:00:00", 
                        "end_date": "2016-10-18 23:59:59", 
                        "customers": "3", 
                        "transactions": "11", 
                        "not_interested_transactions": "2", 
                        "points_issued": "340", 
                        "points_redeemed": "90"
                    }, 
                    
                ]
            }, 
            "redemption": {
                "row": [
                    {
                        "store_username": "till.005", 
                        "customer": {
                            "firstname": "Tom", 
                            "lastname": "Sawyer", 
                            "mobile": "44700900000"
                        }, 
                        "transaction_number": "", 
                        "points_redeemed": "100", 
                        "redemption_date": "2013-10-18 10:24:02"
                    }, 
                    {
                        "store_username": "till.005", 
                        "customer": {
                            "firstname": "John", 
                            "lastname": "Rita", 
                            "mobile": "44700900999"
                        }, 
                        "transaction_number": "aaj-1", 
                        "points_redeemed": "100", 
                        "redemption_date": "2013-10-18 10:49:54"
                    }, 
                  ]
            }
        }
    }
}
```





Returns report of a specific store containing details like sales of previous day, week and month; customers visited; points and coupons issued; points and coupons redeemed etc will be returned. The report also includes the summary of transaction amount, number of customers registered, points and coupons redeemed, transaction types and so on.

### Resource Information
Attribute | Value
--------- | -----
URI | store/reports
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns report of a particular store
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/store/reports.xml?<query_params>`

### Request Parameters
Parameter | Description
--------- | -----------
type | Value: loyalty, redemption. Returns either transaction (`type=loyalty`) report or redemption (`type=redemption`) report based on the parameter value passed
start_date | Returns the report for the specified duration (between start_date and end_date). <br>**if `start_date` is passed, `end_date` should also be passed and vice versa**
end_date | Returns the store report for the specified duration of start_date and end_date. <br> **if `start_date` is passed, `end_date` should also be passed and vice versa**


## Upload Store Reports

```html
# Sample Request
http://us.api.capillarytech.com/v1.1/store/reports?format=json
```

> Sample Request

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>

   <report type="loyalty">

      <store_code>xx</store_code>

      <!-- 

            will be used for uploading multiple store’s 

            loyalty tracker info in one API 

         -->

      <total_transactions>10</total_transactions>

      <total_sales>5000</total_sales>

      <footfall_count>10</footfall_count>

      <date>2013-03-14 18:00:13</date>

      <transaction_count>

         <regular>5</regular>

         <not_interested>5</not_interested>

         <total_enter_later>4</total_enter_later>

         <enter_later_for_today>1</enter_later_for_today>

      </transaction_count>

   </report>

</root>
```

```json
{
  "root": {
    "report": {
      "-type": "loyalty",
      "store_code": "xx",
      "total_transactions": "10",
      "total_sales": "5000",
      "footfall_count": "10",
      "date": "2013-03-14 18:00:13",
      "transaction_count": {
        "regular": "5",
        "not_interested": "5",
        "total_enter_later": "4",
        "enter_later_for_today": "1"
      }
    }
  }
}
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
   <store>
      <report>
         <type>loyalty</type>
         <store_code>xx</store_code>
         <date>2013-03-14 18:00:13</date>
         <item_status>
            <success>true</success>
            <code>900</code>
            <message>store report uploaded successfully</message>
         </item_status>
      </report>
   </store>
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
        "store": {
            "report": {
                "type": "loyalty", 
                "store_code": "xx", 
                "date": "2013-03-14 18:00:13", 
                "item_status": {
                    "success": "true", 
                    "code": "900", 
                    "message": "store report uploaded successfully"
                }
            }
        }
    }
}

```

Uploads store report from InStore to the main server.

### Resource Information
Attribute | Value
--------- | -----
URI | store/reports
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
Response Object | Uploads store report to the server
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/store/reports.xml?<query_params>`

## Retrieve Store Configurations

```html
# Sample Request
http://us.api.capillarytech.com/store/configurations?format=json
```

> Sample Response

```xml
<?xml version="1.0" encoding="UTF-8" ?>
	<response>
		<status>
			<success>true</success>
			<code>200</code>
			<message>SUCCESS</message>
		</status>
		<store>
			<configurations>
				<last_modified_time>
					<comment></comment>
					<comment></comment>
					<comment></comment>
					<configurations>2016-07-03 15:40:29</configurations>
					<custom_fields>2016-07-01 15:40:29</custom_fields>
					<countries></countries>
					<store_attributes></store_attributes>
					<cron_entries></cron_entries>
					<store_tasks></store_tasks>
					<store_tasks_entries></store_tasks_entries>
					<purchased_features></purchased_features>
				</last_modified_time>
				<comment></comment>
				<comment></comment>
				<comment></comment>
				<comment></comment>
				<comment></comment>
				<comment></comment>
				<data_providers_file>323</data_providers_file>
				<client_log_config_file></client_log_config_file>
				<printer_templates>
					<comment></comment>
					<dvs_coupon></dvs_coupon>
					<transaction></transaction>
					<customer></customer>
					<campaign_coupon></campaign_coupon>
					<points_redemption></points_redemption>
				</printer_templates>
				<rules_packages>
					<dvs_issue>
						<version></version>
						<file_id></file_id>
						<comment></comment>
					</dvs_issue>
					<dvs_redeem>
						<version></version>
						<file_id></file_id>
						<comment></comment>
					</dvs_redeem>
				</rules_packages>
				<inventory_version></inventory_version>
				<integration_output_templates>
					<comment></comment>
					<points_redemption>-1</points_redemption>
					<coupon_redemption></coupon_redemption>
					<coupon_issue></coupon_issue>
					<customer_register></customer_register>
					<customer_update></customer_update>
					<transaction_submit></transaction_submit>
					<gift_card></gift_card>
				</integration_output_templates>
				<integration_post_output_templates>
					<points_redemption>
						<id>234</id>
						<comment></comment>
						<comment></comment>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</points_redemption>
					<coupon_redemption>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</coupon_redemption>
					<coupon_issue>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</coupon_issue>
					<customer_register>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</customer_register>
					<customer_update>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</customer_update>
					<transaction_submit>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</transaction_submit>
					<auto_configure>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</auto_configure>
					<nightly_sync>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</nightly_sync>
					<eod_sync>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</eod_sync>
					<pre_auto_configure>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</pre_auto_configure>
					<pre_nightly_sync>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</pre_nightly_sync>
					<pre_eod_sync>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</pre_eod_sync>
					<os_startup>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</os_startup>
					<gift_card>
						<id>234</id>
						<name>IntegrationPostOutputTemplate</name>
						<client_monitoring_type>FILE_CHECK</client_monitoring_type>
					</gift_card>
				</integration_post_output_templates>
				<customer_attribute_version></customer_attribute_version>
				<store_server_prefix></store_server_prefix>
				<time_zone_offset></time_zone_offset>
				<store_tasks_max_entries_id></store_tasks_max_entries_id>
				<client_debug_level></client_debug_level>
				<client_test_mode></client_test_mode>
				<client_upload_logs></client_upload_logs>
			</configurations>
		</store>
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
        "store": {
            "configurations": {
                "last_modified_time": {
                    "comment": [
                        "", 
                        "", 
                        ""
                    ], 
                    "configurations": "2016-07-03 15:40:29", 
                    "custom_fields": "2016-07-01 15:40:29", 
                    "countries": "", 
                    "store_attributes": "", 
                    "cron_entries": "", 
                    "store_tasks": "", 
                    "store_tasks_entries": "", 
                    "purchased_features": ""
                }, 
                "comment": [
                    "", 
                    "", 
                    "", 
                    "", 
                    "", 
                    ""
                ], 
                "data_providers_file": "323", 
                "client_log_config_file": "", 
                "printer_templates": {
                    "comment": "", 
                    "dvs_coupon": "", 
                    "transaction": "", 
                    "customer": "", 
                    "campaign_coupon": "", 
                    "points_redemption": ""
                }, 
                "rules_packages": {
                    "dvs_issue": {
                        "version": "", 
                        "file_id": "", 
                        "comment": ""
                    }, 
                    "dvs_redeem": {
                        "version": "", 
                        "file_id": "", 
                        "comment": ""
                    }
                }, 
                "inventory_version": "", 
                "integration_output_templates": {
                    "comment": "", 
                    "points_redemption": "-1", 
                    "coupon_redemption": "", 
                    "coupon_issue": "", 
                    "customer_register": "", 
                    "customer_update": "", 
                    "transaction_submit": "", 
                    "gift_card": ""
                }, 
                "integration_post_output_templates": {
                    "points_redemption": {
                        "id": "234", 
                        "comment": [
                            "", 
                            ""
                        ], 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "coupon_redemption": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "coupon_issue": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "customer_register": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "customer_update": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "transaction_submit": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "auto_configure": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "nightly_sync": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "eod_sync": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "pre_auto_configure": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "pre_nightly_sync": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "pre_eod_sync": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "os_startup": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }, 
                    "gift_card": {
                        "id": "234", 
                        "name": "IntegrationPostOutputTemplate", 
                        "client_monitoring_type": "FILE_CHECK"
                    }
                }, 
                "customer_attribute_version": "", 
                "store_server_prefix": "", 
                "time_zone_offset": "", 
                "store_tasks_max_entries_id": "", 
                "client_debug_level": "", 
                "client_test_mode": "", 
                "client_upload_logs": ""
            }
        }
    }
}
```

Returns InStore configuration details of a specific store.

### Resource Information
Attribute | Value
--------- | -----
URI | store/configurations
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns InStore configurations of a store
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/store/configurations?format=<xml/json>`

##  Verify Login Credentials
```html
http://api.capillary.co.in/v1.1/store/login.json
```

> Sample Response

```xml
<response>
<status>
<success>true</success>
<code>200</code>
<message>SUCCESS</message>
</status>
<store>
<user>
<username>store.server</username>
<first_name>MSP</first_name>
<last_name>ss</last_name>
<org_name>SS Testing</org_name>
<user_id>4364301</user_id>
<type>STR_SERVER</type>
<org_id>146</org_id>
<server_time>2016-12-14T12:01:41+05:30</server_time>
<store_server_prefix></store_server_prefix>
<associate_login_enabled>
false
</associate_login_enabled>
</user>
</store>
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
    "store": {
      "user": {
        "username": "store.server",
        "first_name": "MSP",
        "last_name": "ss",
        "org_name": "SS Testing",
        "user_id": "4364301",
        "type": "STR_SERVER",
        "org_id": "146",
        "server_time": "2016-12-14T12:01:41+05:30",
        "associate_login_enabled": "
false
"
      }
    }
  }
}
```

Verifies whether the provided login credentials are valid and if valid, returns the details of current logged in user.

### Resource Information
Attribute | Value
--------- | -----
URI | store/login
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns logged in user credentials
API Version | v1.1 
Batch Support | No

### Request URL
`http://<cluster url>/v1.1/store/login.<xml/json>`


## Response Codes
### Success Codes
Code | Description
---- | -----------
900 | Store details retrieved successfully
900 | Report uploaded successfully
900 | Store report retrieved successfully
910 | Tasks retrieved successfully

### Error Codes
Code | Description
---- | -----------
901 | Store information retrieval failed
902 | Store identifier is invalid
903 | Unable to fetch store details. No store id is passed
904 | Client log file size does not match with the file size uploaded on server
905 | Client log file signature does not match with the file signature on server
906 | Uploading client log file to file service failed.
907 | Insert client log file metadata in database failed
908 | Tasks retrieval failed
909 | No tasks found
911 | Report type is invalid
912 | Report upload failed
913 | Unable to fetch store details. No identifier is passed
921 | Unable to insert one or more store server stats
922 | Unable to insert the entire store server stats
923 | Unable to insert one or more till diagnostic details
924 | Unable to insert all till diagnostics details