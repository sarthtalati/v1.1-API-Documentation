# Request
Request entity contains APIs corresponding to submitting and retrieving requests. You can use this entity to change identifiers, merge customer accounts, issue Good Will points/coupons, and retrieve details of submitted requests.

## Submit a Request
This API allows you to submit requests for changing customer identifier, merging customers, issuing Goodwill points and coupons to the loyalty customers.

### Resource Information
Entry | Value
----- | -----
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
Response Object | Submits service requests for customers.
API Version | v1.1
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/request/add&format=<xml/json>`


## Approve Request



## Reject Request


## Retrieve Request Details
```html
https://us.intouch.capillarytech.com/v1.1/request/get?format=json
```

```xml
<response>
<status>
<success>true</success>
<code>200</code>
<message>SUCCESS</message>
</status>
<requests>
    <count>531</count>
    <rows>30</rows>
<goodwill>
<id>10039</id>
<type>GOODWILL</type>
<status>PENDING</status>
<base_type>COUPON</base_type>
<reason>BILL_ISSUE</reason>
<comments>customer is angry</comments>
<customer>
<firstname>Tom</firstname>
<lastname>Sawyer</lastname>
<email>Tom.sawyer@example.com</email>
<mobile>44700900000</mobile>
<external_id>ts1234</external_id>
<fraud_status>CONFIRMED</fraud_status>
</customer>
<assoc_id></assoc_id>
<approved_value></approved_value>
<updated_comments></updated_comments>
<added_on>2016-02-12T13:32:42+05:30</added_on>
<last_action_on></last_action_on>
<added_by>
<code>Tom.store</code>
<name>Tom store</name>
</added_by>
<updated_by>
<code></code>
<name></name>
</updated_by>
</goodwill>
<change_identifier>
<id>10034</id>
<type>CHANGE_IDENTIFIER</type>
<status>REJECTED</status>
<base_type>EMAIL</base_type>
<new_value>Tom@Tom2.com</new_value>
<old_value>Tom@Tom.com</old_value>
<customer>
<firstname>Tom</firstname>
<lastname>Sawyer</lastname>
<email>Tom@Tom2.com</email>
<mobile>919740798372</mobile>
<external_id>XYPZ001</external_id>
<fraud_status>CONFIRMED</fraud_status>
</customer>
<updated_comments></updated_comments>
<added_on>2016-02-12T05:30:00+05:30</added_on>
<last_action_on>2014-02-21T05:30:00+05:30</last_action_on>
<added_by>
<code>Tom.store</code>
<name>Tom store</name>
</added_by>
<updated_by>
<code>admin</code>
<name>Mr Admin</name>
</updated_by>
</change_identifier>
<change_identifier>
<id>10035</id>
<type>CHANGE_IDENTIFIER</type>
<status>REJECTED</status>
<base_type>EMAIL</base_type>
<new_value>tom.sawyer@example.com</new_value>
<old_value>tom.tom@example.com</old_value>
<customer>
<firstname>Tom</firstname>
<lastname>Sawyer</lastname>
<email>Tom.sawyer@example.com</email>
<mobile>44700900000</mobile>
<external_id>XYPZ001</external_id>
<fraud_status>CONFIRMED</fraud_status>
</customer>
<added_on>2014-01-20T05:30:00+05:30</added_on>
<last_action_on>2016-02-01T05:30:00+05:30</last_action_on>
<added_by>
<code>Tom.store</code>
<name>Tom store</name>
</added_by>
<updated_by>
<code>admin007</code>
<name>Mr Admin</name>
</updated_by>
</change_identifier>
<item_status>
<success>true</success>
<code>9000</code>
<message>Request retrieved successfully</message>
</item_status>
</requests>
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
    "requests": {
      "count": "531",
      "rows": "30",
      "goodwill": {
        "id": "10039",
        "type": "GOODWILL",
        "status": "PENDING",
        "base_type": "COUPON",
        "reason": "BILL_ISSUE",
        "comments": "customer is angry",
        "customer": {
          "firstname": "Tom",
          "lastname": "Sawyer",
          "email": "Tom.sawyer@example.com",
          "mobile": "44700900000",
          "external_id": "ts1234",
          "fraud_status": "CONFIRMED"
        },
        "added_on": "2016-02-12T13:32:42+05:30",
        "added_by": {
          "code": "Tom.store",
          "name": "Tom store"
        },
        "updated_by": {
          
        }
      },
      "change_identifier": [
        {
          "id": "10034",
          "type": "CHANGE_IDENTIFIER",
          "status": "REJECTED",
          "base_type": "EMAIL",
          "new_value": "Tom@Tom2.com",
          "old_value": "Tom@Tom.com",
          "customer": {
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "Tom@Tom2.com",
            "mobile": "919740798372",
            "external_id": "XYPZ001",
            "fraud_status": "CONFIRMED"
          },
          "added_on": "2016-02-12T05:30:00+05:30",
          "last_action_on": "2014-02-21T05:30:00+05:30",
          "added_by": {
            "code": "Tom.store",
            "name": "Tom store"
          },
          "updated_by": {
            "code": "admin",
            "name": "Mr Admin"
          }
        },
        {
          "id": "10035",
          "type": "CHANGE_IDENTIFIER",
          "status": "REJECTED",
          "base_type": "EMAIL",
          "new_value": "tom.sawyer@example.com",
          "old_value": "tom.tom@example.com",
          "customer": {
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "Tom.sawyer@example.com",
            "mobile": "44700900000",
            "external_id": "XYPZ001",
            "fraud_status": "CONFIRMED"
          },
          "added_on": "2014-01-20T05:30:00+05:30",
          "last_action_on": "2016-02-01T05:30:00+05:30",
          "added_by": {
            "code": "Tom.store",
            "name": "Tom store"
          },
          "updated_by": {
            "code": "admin007",
            "name": "Mr Admin"
          }
        }
      ],
      "item_status": {
        "success": "true",
        "code": "9000",
        "message": "Request retrieved successfully"
      }
    }
  }
}
```

### Request Parameters
Parameter | Description
--------- | -----------
start_date | Duration for which you want to retrieve the request details - between start_date and end_date
end_date | Duration for which you want to retrieve the request details - between start_date and end_date
customer identifiers | Identifier (user_id, email, mobile, external_id supported) of the customer whose details you want to retrieve
status | Returns the requests by request status. **Value**: APPROVED, PENDING, REJECTED
type | Returns a specific type of requests. **Value**: CHANGE_IDENTIFIER, GOODWILL
base_type | (MOBILE, EXTERNAL_ID, EMAIL, MERGE, ADDRESS, COUPONS, POINTS)
start_id & end_id | pagination support - request id
start_limit | UI support for data table; ex: get next 20 batch; formula: (page_no-1)*limit
limit (no of entries to list)



## Retrieve Request Logs
```html
https://us.intouch.capillarytech.com/v1.1/request/logs?format=json&type=CHANGE_IDENTIFIER&start_date=2016-01-15&end_date=2017-05-08&base_type=EMAIL

```

```xml
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>SUCCESS</message>
    </status>
    <requests>
        <count>60</count>
        <rows>10</rows>
        <change_identifier>
            <id>263452</id>
            <customer>
                <firstname>Tom</firstname>
                <lastname>Sawyer</lastname>
                <email>tom.sawyer@example.com</email>
                <mobile>44700900000</mobile>
                <external_id>ts123</external_id>
                <fraud_status>NONE</fraud_status>
            </customer>
            <type>CHANGE_IDENTIFIER</type>
            <base_type>EMAIL</base_type>
            <status>PENDING</status>
            <old_value>tom.sawyerold@example.com</old_value>
            <new_value>tom.sawyer@example.com</new_value>
            <updated_comments/>
            <one_step_change>false</one_step_change>
            <approval_type>CLIENT</approval_type>
            <logs>
                <added_by>
                    <till>
                        <code>Catherine</code>
                        <name>James</name>
                    </till>
                    <store>
                        <code/>
                        <name/>
                    </store>
                    <time>2016-12-16T12:49:29+05:30</time>
                </added_by>
                <updated_by>
                    <user>
                        <name>Catherine James</name>
                        <mobile>44700200030</mobile>
                        <email>catherine@example.com</email>
                    </user>
                    <ip>115.114.139.186</ip>
                    <time>2016-12-16T12:49:29+05:30</time>
                </updated_by>
            </logs>
        </change_identifier>
        <change_identifier>
            <id>225750</id>
            <customer>
                <firstname>LUCIA</firstname>
                <lastname>Customer</lastname>
                <email>lucia@example.com</email>
                <mobile>918656001195</mobile>
                <external_id/>
                <fraud_status>NONE</fraud_status>
            </customer>
            <type>CHANGE_IDENTIFIER</type>
            <base_type>EMAIL</base_type>
            <status>APPROVED</status>
            <old_value>lucia.old@example.com</old_value>
            <new_value>lucia@example.com</new_value>
            <updated_comments/>
            <one_step_change>true</one_step_change>
            <approval_type>CLIENT</approval_type>
            <logs>
                <added_by>
                    <till>
                        <code>1371622280_919866643044</code>
                        <name>1371622280_Ashish</name>
                    </till>
                    <store>
                        <code/>
                        <name/>
                    </store>
                    <time>2016-09-16T15:52:07+05:30</time>
                </added_by>
                <updated_by>
                    <user>
                        <name>Ashish Karan</name>
                        <mobile>919866643044</mobile>
                        <email>cap@coin.com</email>
                    </user>
                    <ip>115.114.139.186</ip>
                    <time>2016-09-16T15:52:07+05:30</time>
                </updated_by>
            </logs>
        </change_identifier>
        <item_status>
            <success>true</success>
            <code>9000</code>
            <message>Request retrieved successfully</message>
        </item_status>
    </requests>
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
    "requests": {
      "count": "60",
      "rows": "10",
      "change_identifier": [
        {
          "id": "263452",
          "customer": {
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "tom.sawyer@example.com",
            "mobile": "44700900000",
            "external_id": "ts123",
            "fraud_status": "NONE"
          },
          "type": "CHANGE_IDENTIFIER",
          "base_type": "EMAIL",
          "status": "PENDING",
          "old_value": "tom.sawyerold@example.com",
          "new_value": "tom.sawyer@example.com",
          "one_step_change": "false",
          "approval_type": "CLIENT",
          "logs": {
            "added_by": {
              "till": {
                "code": "Catherine",
                "name": "James"
              },
              "store": {
                
              },
              "time": "2016-12-16T12:49:29+05:30"
            },
            "updated_by": {
              "user": {
                "name": "Catherine James",
                "mobile": "44700200030",
                "email": "catherine@example.com"
              },
              "ip": "115.114.139.186",
              "time": "2016-12-16T12:49:29+05:30"
            }
          }
        },
        {
          "id": "225750",
          "customer": {
            "firstname": "LUCIA",
            "lastname": "Customer",
            "email": "lucia@example.com",
            "mobile": "918656001195",
            "fraud_status": "NONE"
          },
          "type": "CHANGE_IDENTIFIER",
          "base_type": "EMAIL",
          "status": "APPROVED",
          "old_value": "lucia.old@example.com",
          "new_value": "lucia@example.com",
          "one_step_change": "true",
          "approval_type": "CLIENT",
          "logs": {
            "added_by": {
              "till": {
                "code": "1371622280_919866643044",
                "name": "1371622280_Ashish"
              },
              "store": {
                
              },
              "time": "2016-09-16T15:52:07+05:30"
            },
            "updated_by": {
              "user": {
                "name": "Ashish Karan",
                "mobile": "919866643044",
                "email": "cap@coin.com"
              },
              "ip": "115.114.139.186",
              "time": "2016-09-16T15:52:07+05:30"
            }
          }
        }
      ],
      "item_status": {
        "success": "true",
        "code": "9000",
        "message": "Request retrieved successfully"
      }
    }
  }
}
```

