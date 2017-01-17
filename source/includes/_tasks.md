# Task



## Create Tasks
```html
# Sample Request
http://api.capillary.co.in/v1.1/task/add
```

> Sample POST Request

```xml
<?xml version="1.0" encoding="UTF-8"?>

<root>


   <task>


      <id>-1</id>


      <!-- server side id of the Task, -1 in case of add,


or other than that will attempt to update the task -->


      <local_id>213124334342</local_id>


      <!-- local id is client side id of the task -->


      <title>any title for this task</title>


      <body>description of this task</body>


      <start_date>2016-10-4 12:12:12</start_date>


      <end_date>2016-10-10 12:12:12</end_date>


      <expiry_date>2016-10-10 12:12:12</expiry_date>


      <type>MEMO</type>


      <!-- this can be MEMO/TASK -->


      <action>


         <!-- action_type can be any of (sms/email/call/none) -->


         <type>sms</type>


         <template><![CDATA[Hi {name}, Your points = {points}]]></template>


      </action>


      <creator>


         <!-- creator can be any of (manager/cashier) -->


         <type>manager</type>


         <id>55456456</id>


      </creator>


      <!-- id of the manager or cashier -->


      <target_type>CASHIER/CUSTOMER</target_type>


      <!-- target type cashier, is not specified yet  -->


      <customer_ids>15,82,443399</customer_ids>


      <selected_audience_groups>443452,432887</selected_audience_groups>


      <!-- 


if target_type is CUSTOMER then


for whom this task needs to be executed.


along with target_type, either customer_ids or selected_audience_groups needs to be passed.





passing customer_ids will create task for individual customer, and passing selected_audiance_groups will create tasks for each customers for the given groups.


-->


      <execute_by_all>false</execute_by_all>


      <!-- execute_by_all indicates


if the task needs to be performed by all cashier or not -->


      <executable_by_type>cashier</executable_by_type>


      <!-- executable_by_type can be any of the cashier or store,


        store indicates that all cashier of the store can


access this task -->


      <executable_by_ids>44,33,22,54</executable_by_ids>


      <!-- ids can be cashier_id/store_id depends on


executable_by_type -->


      <!-- represent current status of the task -->


      <possible_statuses>OPEN,IN_PROGRESS,CLOSED</possible_statuses>


      <!-- represents possible statuses -->


      <tags>[“label” : “birthday task”, “priority” : “1” ]</tags>


      <!-- reminder is mandatory to create reminders -->


      <reminder create="true">


         <time>2012-12-26 13:35:35</time>


         <template><![CDATA[….]]></template>


      </reminder>


      <entries>


         <!-- these entries will try to update the task entry status,


this will be considered only when task id “<id>” is positive  -->


         <entry>


            <customer_id />


            <associate_id />


            <!-- store_id can directly fetched from currentuser -->


            <status>CLOSE</status>


            <!-- new status -->


         </entry>


         <entry>


            <customer_id />


            <associate_id />


            <!-- store_id can directly fetched from currentuser -->


            <status>CLOSE</status>


            <!-- new status -->


         </entry>


      </entries>


   </task>


</root>
```

```json
{
  "root": {
    "task": {
      "id": "-1",
      "local_id": "213124334342",
      "title": "any title for this task",
      "body": "description of this task",
      "start_date": "2016-10-4 12:12:12",
      "end_date": "2016-10-10 12:12:12",
      "expiry_date": "2016-10-10 12:12:12",
      "type": "MEMO",
      "action": {
        "type": "sms",
        "template": "Hi {name}, Your points = {points}"
      },
      "creator": {
        "type": "manager",
        "id": "55456456"
      },
      "target_type": "CASHIER/CUSTOMER",
      "customer_ids": "15,82,443399",
      "selected_audience_groups": "443452,432887",
      "execute_by_all": "false",
      "executable_by_type": "cashier",
      "executable_by_ids": "44,33,22,54",
      "possible_statuses": "OPEN,IN_PROGRESS,CLOSED",
      "tags": "[“label” : “birthday task”, “priority” : “1” ]",
      "reminder": {
        "-create": "true",
        "time": "2012-12-26 13:35:35",
        "template": "…."
      },
      "entries": {
        "entry": [
          { "status": "CLOSE" },
          { "status": "CLOSE" }
        ]
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
   <tasks>
      <task>
         <id>12</id>
         <title>Title</title>
         <body>Body</body>
         <start_date>20120820</start_date>
         <end_date>20120821</end_date>
         <action>
            <type>Call</type>
            <template>Hi {name}, Your points = {points}</template>
         </action>
         <cashier_task>false</cashier_task>
         <!-- Executable by particular cashier -->
         <customer_task>false</customer_task>
         <execute_by_all>false</execute_by_all>
         <!-- non cashier/customer tasks -->
         <creator>
            <type>manager</type>
            <id>55456456</id>
            <name>name</name>
         </creator>
         <entries>
            <entry>
               <entry_id />
               <customer_id />
               <associate_id />
               <associate_name>assigned_to name</associate_name>
               <store_id />
               <status>OPEN</status>
               <type>CUSTOMER/CASHIER</type>
            </entry>
            <entry>
               <entry_id />
               <customer_id />
               <associate_id />
               <associate_name>assigned_to name</associate_name>
               <store_id />
               <status>OPEN</status>
               <type>CUSTOMER/CASHIER</type>
            </entry>
         </entries>
         <!-- reminders will be populated only if they are created -->
         <reminders>
            <reminder>
               <id>15</id>
               <time>2016-05-30 13:12:12</time>
               <created_by>453345</created_by>
               <template><![CDATA[Please note this too]]></template>
               <remindee_id>1245333</remindee_id>
            </reminder>
            <reminder>
               <id>16</id>
               <time>2016-05-30 13:12:12</time>
               <created_by>453345</created_by>
               <template><![CDATA[Please note this too]]></template>
               <remindee_id>1245333</remindee_id>
            </reminder>
         </reminders>
         <item_status>
            <success>true</success>
            <code>200</code>
            <message>Task Added Successfully</message>
         </item_status>
      </task>
   </tasks>
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
        "tasks": {
            "task": {
                "id": "12", 
                "title": "Title", 
                "body": "Body", 
                "start_date": "20120820", 
                "end_date": "20120821", 
                "action": {
                    "type": "Call", 
                    "template": "Hi {name}, Your points = {points}"
                }, 
                "cashier_task": "false", 
                "comment": [
                    "", 
                    "", 
                    ""
                ], 
                "customer_task": "false", 
                "execute_by_all": "false", 
                "creator": {
                    "type": "manager", 
                    "id": "55456456", 
                    "name": "name"
                }, 
                "entries": {
                    "entry": [
                        {
                            "entry_id": "", 
                            "customer_id": "", 
                            "associate_id": "", 
                            "associate_name": "assigned_to name", 
                            "store_id": "", 
                            "status": "OPEN", 
                            "type": "CUSTOMER/CASHIER"
                        }, 
                        {
                            "entry_id": "", 
                            "customer_id": "", 
                            "associate_id": "", 
                            "associate_name": "assigned_to name", 
                            "store_id": "", 
                            "status": "OPEN", 
                            "type": "CUSTOMER/CASHIER"
                        }
                    ]
                }, 
                "reminders": {
                    "reminder": [
                        {
                            "id": "15", 
                            "time": "2016-05-30 13:12:12", 
                            "created_by": "453345", 
                            "template": "Please note this too", 
                            "remindee_id": "1245333"
                        }, 
                        {
                            "id": "16", 
                            "time": "2016-05-30 13:12:12", 
                            "created_by": "453345", 
                            "template": "Please note this too", 
                            "remindee_id": "1245333"
                        }
                    ]
                }, 
                "item_status": {
                    "success": "true", 
                    "code": "200", 
                    "message": "Task Added Successfully"
                }
            }
        }
    }
}
```



Creates new store task and store task entry ( that is status for each executor ). You can also set task type, title, created by, assigned to, validity, status and reminder.

### Resource Information
Entry | Value
----- | -----
URI | task/add
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET & POST
Response Object | Creates new tasks
API Version | v1.1 
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/task/add?format=<xml/json>`



## Retrieve List of Tasks
```html
http://us.intouch.capillarytech.com/v1.1/task/metadata?format=xml&assoc=false&action_type=call&created_by=12435&created_by_type=cashier&execute_by_all=false&customer_task=true&start_id=3245&end_id=3345&start_date=2016-18-20+12:12:12&end_date=2016-12-29+12:11:45&batch_size=10
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
   <status>
      <success>true</success>
      <code>200</code>
      <message>SUCCESS</message>
   </status>
   <tasks>
      <task>
         <id>15</id>
         <title>Title</title>
         <body>Body</body>
         <start_date>2016-08-20</start_date>
         <end_date>2016-12-29</end_date>
         <expiry_date>2016-12-30 12:11:45</expiry_date>
         <action>
            <!-- Call/SMS/Email/None -->
            <type>Call</type>
            <template>Hi {name}, Your points = {points}</template>
         </action>
         <task_type>MEMO/TASK</task_type>
         <cashier_task>false</cashier_task>
         <!-- Executable by particular cashier -->
         <customer_task>false</customer_task>
         <execute_by_all>false</execute_by_all>
         <!-- non cashier/customer tasks -->
         <creator>
            <type />
            <id />
         </creator>
         <possible_statuses>
            <status>
               <label>open</label>
               <value>open</value>
            </status>
            <status>
               <label>processing</label>
               <value>in_progress</value>
            </status>
         </possible_statuses>
         <tags><![CDATA[[“label” : “birthday task”, “priority” : “1” ]]]></tags>
      </task>
   </tasks>
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
        "tasks": {
            "task": {
                "id": "15", 
                "title": "Title", 
                "body": "Body", 
                "start_date": "2016-08-20", 
                "end_date": "2016-08-21", 
                "expiry_date": "2016-10-10 12:12:12", 
                "action": {
                    "comment": "", 
                    "type": "Call", 
                    "template": "Hi {name}, Your points = {points}"
                }, 
                "task_type": "MEMO/TASK", 
                "cashier_task": "false", 
                "comment": [
                    "", 
                    ""
                ], 
                "customer_task": "false", 
                "execute_by_all": "false", 
                "creator": {
                    "type": "", 
                    "id": ""
                }, 
                "possible_statuses": {
                    "status": [
                        {
                            "label": "open", 
                            "value": "open"
                        }, 
                        {
                            "label": "processing", 
                            "value": "in_progress"
                        }
                    ]
                }, 
                "tags": "[“label” : “birthday task”, “priority” : “1” ]"
            }
        }
    }
}
```
Returns the list of tasks created which contains information such as the title of the task, notes, created date, expiry date, type (customer/associate).

You can also use filters to limit or customize the results. You can also use `store/task` to retrieve task details.

### Resource Information
Entry | Description
----- | -----------
URI |task/metadata
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns task(s) details
API Version | v1.1 
Batch Support | Yes


### Request URL 
`http://<cluster url>/v1.1/task/metadata?format=<xml/json>&<param>=<value>`



### Request Parameters
Parameter | Description
--------- | -----------
assoc | Returns tasks of a specific associate
action_type | Value: sms, email, call, or none. Returns a particular type of task (SMS/email/call). If action_type is "none", then the tasks other than SMS, email, or call will be returned.
created_by | Returns the tasks of a specific associate
created_by_type | Returns the tasks created by either manager or cashier. Value: manager, cashier. 
execute_by_all | Returns the list of generic tasks - not to a specific associate or created for all associates
customer_task | Returns the list of all customer tasks assigned to associates
start_id | Returns the list of tasks having task ids greater than or equal to the value passed in this param 
end_id | Returns the list of tasks having task ids less than or equal to the value passed in this param 
start_date | Returns the list of tasks created between the dates set on start_date and end_date. If only start_date is mentioned then the list of tasks created on or after that specified date is returned
end_date | Returns the list of tasks created between the dates set on start_date and end_date. If only end_date is passed, the list of tasks created on or before the specified date is returned
batch_size | Limits the number of tasks to be displayed. For example, if `batch_size=10` then the details of only 10 tasks are returned


## Update Tasks
```html
http://us.intouch.capillarytech.com/v1.1/task/update?format=json
```

> Sample POST Request 

```xml
<root>
    <task>
        <id>15</id>

        <!-- tags for update the entry -->
        <entry_id></entry_id>
        <customer_id></customer_id>
        <associate_id></associate_id>
<!-- store_id can directly fetched from currentuser -->
        <status>CLOSED</status> <!-- new status -->    

    <!-- tags for update metadata -->
    <title>Sample title</title>
    <body>sample body</body>
    <start_date>2016-08-20</start_date>
    <end_date>2016-08-22</end_date>
    <expiry_date>2016-08-22</expiry_date>
    <action_type>call</action_type>
    <action_template><![CDATA[ template ]]></action_template>
    <!-- executable_by_ids can only add new status(task_entry) it can’t remove any of the existing entries, not supported for now. -->
    <executable_by_ids></executable_by_ids>
    <tags>
<![CDATA[
[“label” : “birthday task”, “priority” : “1” ]
]]>
</tags>
</task>
</root>
```

```json
{
  "root": {
    "task": {
      "id": "15",
      "status": "CLOSED",
      "title": "Sample title",
      "body": "sample body",
      "start_date": "2016-08-20",
      "end_date": "2016-08-22",
      "expiry_date": "2016-08-22",
      "action_type": "call",
      "action_template": " template ",
      "tags": "

[“label” : “birthday task”, “priority” : “1” ]

"
    }
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
    <tasks>
        <task>
            <id></id>
            <entry_id></entry_id>
            <customer_id></customer_id>
            <associate_id></associate_id>
            <status>CLOSED</status>

            <!-- tags for task metadata -->
            <title></title>
            <body></body>
            <start_date>2016-08-20</start_date>
            <end_date>2016-08-22</end_date>
            <expiry_date>2016-08-22</expiry_date>
            <action_type></action_type>
            <action_template></action_template>
            <executable_by_ids></executable_by_ids>
            <tags></tags>

            <item_status>
                <success>true</success>
            <code>200</code>
            <message>Task Status Updated Successfully</message>
                </item_status>

        </task>
    </tasks>
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
    "tasks": {
      "task": {
        "status": "CLOSED",
        "start_date": "2016-08-20",
        "end_date": "2016-08-22",
        "expiry_date": "2016-08-22",
        "item_status": {
          "success": "true",
          "code": "200",
          "message": "Task Status Updated Successfully"
        }
      }
    }
  }
}
```


Updates the status of existing tasks and metadata details.

### Resource Information
Parameter | Value
--------- | -----
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET & POST
Response Object | Modifies status and metadata of existing tasks
 API Version | v1.1 
 Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/task/update?format=<xml/json>`



## Retrieve Individual Task Details
```html

```

> Sample Response

```xml
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>SUCCESS</message>
    </status>
<tasks>
<task>
    <id></id>
    <entry_id></entry_id>
    <type>CUSTOMER/CASHIER</type>
      <associate_id>
123
</associate_id>    <!-- individual tasks -->
      <customer_id>
124
</customer_id>     <!-- customer tasks   -->
      <store_id>
125
</store_id>
      <status>OPEN</status>
        </task>
        <task>
    <id></id>
    <entry_id></entry_id>
    <type>CUSTOMER/TYPE</type>
      <associate_id>
125
</associate_id>    <!-- individual tasks -->
      <customer_id>
122
</customer_id>     <!-- customer tasks   -->
      <store_id>
127
</store_id>
      <status>OPEN</status>
</task>
</tasks>
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
    "tasks": {
      "task": [
        {
          "type": "CUSTOMER/CASHIER",
          "associate_id": "
123
",
          "customer_id": "
124
",
          "store_id": "
125
",
          "status": "OPEN"
        },
        {
          "type": "CUSTOMER/TYPE",
          "associate_id": "
125
",
          "customer_id": "
122
",
          "store_id": "
127
",
          "status": "OPEN"
        }
      ]
    }
  }
}
```
Returns the information about individual tasks such as created by, assigned to, task type, created at store and current status.

### Resource Information
Entry | Description
----- | -----------
URI |task/get
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns individual task details
API Version | v1.1 
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/task/get?format=<xml/json>&<params>=<value>`

### Request Parameters
Parameter | Description
--------- | -----------
 assoc | Returns tasks of all associates of the current store if `assoc=true`
 all | Returns all the tasks of the current organization if `all=true`. If `all=false`, only the current store tasks are returned. Default value: true
 action_type | Value: sms, email, call, or none. Returns a particular type of task (SMS/email/call). If action_type is "none", then the tasks other than SMS, email, or call will be returned.
 assoc_id | Returns the tasks assigned to a specific associate
 customer_id | Returns the tasks created for a specific customer
 status | Returns the tasks by status. Value: OPEN, IN_PROGRESS, CLOSED
 start_date | Returns the list of tasks created in a specific duration (set in start_date and end_date). If only start_date is mentioned then the list of tasks created on or after the specified date is returned.
 end_date	Returns the list of tasks created in a specific duration set in start_date and end_date. If only end_date is passed then the list of tasks created on or before the specified date is returned.
 batch_size	 Limits the number of tasks to be displayed. For example, if `batch_size=10` then the details of only 10 tasks are returned
 
 ## Retrieve Task Logs
```
### Sample Request URL
http://api.capillary.co.in/v1.1/task/log?task_id=12,15
```

> Sample Response

```xml
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>SUCCESS</message>
    </status>
    <tasks>
        <task>
            <log>
<task_id>12</task_id>
                    <task_status_id></task_status_id>
            <customer_id></customer_id>
            <associate_id></associate_id>
            <store_id></store_id>
                <updated_time></updated_time>
                <new_status></new_status>
        </log>
        <log>
            <task_id></task_id>
                    <task_status_id></task_status_id>
            <customer_id></customer_id>
            <associate_id></associate_id>
            <store_id></store_id>
                <updated_time></updated_time>
                <new_status></new_status>
            </log>
            <log>
                <task_id></task_id>
                    <task_status_id></task_status_id>
            <customer_id></customer_id>
            <associate_id></associate_id>
            <store_id></store_id>
                <updated_time></updated_time>
                <new_status></new_status>
            </log>
            <log>
<task_id></task_id>
<item_status>
<success>false</success>
<code>5204</code>
<message>
Task Identifier is Empty or Invalid
</message>
</item_status>
            </log>
        </task>
    </tasks>
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
    "tasks": {
      "task": {
        "log": [
          { "task_id": "12" },
          {
            
          },
          {
            
          },
          {
            "item_status": {
              "success": "false",
              "code": "5204",
              "message": "
Task Identifier is Empty or Invalid
"
            }
          }
        ]
      }
    }
  }
}
```

 Returns the log of task updates

### Resource Information
Entry | Description
----- | -----------
URI | task/log
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns the log of task updates
API Version |  v1.1 
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/task/log?task_id=<id1,id2,id3,...>`

### Request Parameter
 task_id  | Returns the log of specific tasks based on the ids passed

 
## Retrieve Status Mappings
```html
http://us.intouch.capillarytech.com/v1.1/task/statusmapping?format=json
```

```xml
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>SUCCESS</message>
    </status>
    <tasks>
    <task_statuses>
        <status>
            <id>1</id>
            <value>OPEN</value>
            <!-- value represents status type in server side -->
            <label>NEW</label>
            <!-- organization depended status that
represents corresponding value -->
        </status>
        <status>
            <id>2</id>
            <value>CLOSED</value>
            <!-- value represents status type in server side -->
            <label>FINISH</label>
            <!-- organization depended status that
represents corresponding value -->
        </status>
        <status>
            <id>3</id>
            <value>NONE</value>
            <!-- value represents status type in server side -->
            <value>PROCESSING_START</value>
            <!-- organization depended status that
represents corresponding value -->
        </status>
        <status>
            <id>4</id>
            <value>NONE</value>
            <!-- value represents status type in server side -->
            <label>PROCESSING_DONE</label>
            <!-- organization depended status that
represents corresponding value -->
        </status>
    </task_statuses>
</tasks>
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
    "tasks": {
      "task_statuses": {
        "status": [
          {
            "id": "1",
            "value": "OPEN",
            "label": "NEW"
          },
          {
            "id": "2",
            "value": "CLOSED",
            "label": "FINISH"
          },
          {
            "id": "3",
            "value": [
              "NONE",
              "PROCESSING_START"
            ]
          },
          {
            "id": "4",
            "value": "NONE",
            "label": "PROCESSING_DONE"
          }
        ]
      }
    }
  }
}
```

Returns status mapping between internal status and organization level status.

### Resource Information
Parameter | Value
URI | task/statusmapping
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Returns mapping between predefined status and user-defined status
 API Version | v1.1 
 Batch Support | No
 
### Request URL
`http://<cluster url>/v1.1/task/statusmapping?format=<xml/json>`

## Update Status Mappings
```html


```

```xml
 <root>
    <status>
        <value>OPEN</value>
        <label>NEW</label>
    </status>
    <status>
        <id>2</id>
        <value>CLOSED</value>
        <label>FINISHED</label>
    </status>
    <status>
        <id>3</id>
        <value>NONE</value>
        <label>PROCESS_START</label>
    </status>
<status>
            <value>NONE</value>
        <label>PROCESS_DONE</label>
    </status>
</root>
```

```json
{
  "root": {
    "status": [
      {
        "value": "OPEN",
        "label": "NEW"
      },
      {
        "id": "2",
        "value": "CLOSED",
        "label": "FINISHED"
      },
      {
        "id": "3",
        "value": "NONE",
        "label": "PROCESS_START"
      },
      {
        "value": "NONE",
        "label": "PROCESS_DONE"
      }
    ]
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
    <tasks>
    <task_statuses>
        <status>
            <id>1</id>
            <value>OPEN</value>
            <label>NEW</label>
<item_status>
        <success>true</success>
        <code>200</code>
        <message>status added successfully</message>
</item_status>
        </status>
        <status>
            <id>2</id>
            <value>CLOSED</value>
            <label>FINISHED</label>
<item_status>
        <success>true</success>
        <code>200</code>
        <message>status added successfully</message>
</item_status>
        </status>
        <status>
            <id>3</id>
            <value>NONE</value>
            <label>PROCESSING_START</label>
<item_status>
        <success>true</success>
        <code>200</code>
        <message>status added successfully</message>
</item_status>
        </status>
        <status>
            <id>4</id>
            <value>NONE</value>
            <label>PROCESSING_DONE</label>
<item_status>
        <success>true</success>
        <code>200</code>
        <message>status added successfully</message>
</item_status>
        </status>
    </task_statuses>
    </tasks>
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
    "tasks": {
      "task_statuses": {
        "status": [
          {
            "id": "1",
            "value": "OPEN",
            "label": "NEW",
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "status added successfully"
            }
          },
          {
            "id": "2",
            "value": "CLOSED",
            "label": "FINISHED",
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "status added successfully"
            }
          },
          {
            "id": "3",
            "value": "NONE",
            "label": "PROCESSING_START",
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "status added successfully"
            }
          },
          {
            "id": "4",
            "value": "NONE",
            "label": "PROCESSING_DONE",
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "status added successfully"
            }
          }
        ]
      }
    }
  }
}
```
Allows to update mappings between the predefined and the user-defined statuses.

### Resource Information
Parameter | Value
URI | task/statusmapping
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
Response Object | Updates mapping between predefined and user-defined status
API Version | v1.1 
Batch Support | Yes

### Request URL
http://<cluster url>/v1.1/task/statusmapping?format=xml/json>



## Retrieve Task Reminders
```html
http://api.capillary.co.in/v1.1/task/reminder?format=xml&only_for_stores=true
```
> Sample Response

```xml
<response>
    <status>
        <success>true</success>
        <code>200</code>
        <message>SUCCESS</message>
    </status>
    <tasks>
        <reminders>
        <reminder>
            <id>32</id>
            <task_id>4</task_id>
            <created_by>453345</created_by>
            <remindee_id>1245332</remindee_id>
            <time>2016-05-30 12:12:12</time>
            <template>Please note this</template>
        </reminder>
        <reminder>
            <id>33</id>
            <task_id>4</task_id>
            <created_by>453345</created_by>
            <remindee_id>1245332</remindee_id>
            <time>2016-05-30 12:12:12</time>
            <template>Please note this</template>
        </reminder>
        <reminder>
            <id>34</id>
            <task_id>5</task_id>
            <created_by>453345</created_by>
            <remindee_id>1245333</remindee_id>
            <time>2016-05-30 13:12:12</time>
            <template>Please note this too</template>
        </reminder>
    </reminders>
</tasks>
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
    "tasks": {
      "reminders": {
        "reminder": [
          {
            "id": "32",
            "task_id": "4",
            "created_by": "453345",
            "remindee_id": "1245332",
            "time": "2016-05-30 12:12:12",
            "template": "Please note this"
          },
          {
            "id": "33",
            "task_id": "4",
            "created_by": "453345",
            "remindee_id": "1245332",
            "time": "2016-05-30 12:12:12",
            "template": "Please note this"
          },
          {
            "id": "34",
            "task_id": "5",
            "created_by": "453345",
            "remindee_id": "1245333",
            "time": "2016-05-30 13:12:12",
            "template": "Please note this too"
          }
        ]
      }
    }
  }
}
```


### Resource Information
Parameter | Value
--------- | -----
URI | task/reminder
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | GET
Response Object | Return task reminders
API Version | v1.1 
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/task/reminder?format=<xml/json>&only_for_stores=true`


## Update Task Reminders
```html
http://us.intouch.capillarytech.com/v1.1/task/reminder?format=xml&only_for_stores=true
```
> Sample POST Request

```xml
<root>
    <reminder>
        <task_id>4</task_id>
        <local_id></local_id>
        <time>2016-05-30 12:12:12</time>
        <created_by>453345</created_by>
        <!-- created_by needs to be assoc_id -->
        <template>Please note this</template>
    <remindee_id>1245332</remindee_id>
    </reminder>
<reminder>
        <task_id>5</task_id>
        <local_id></local_id>
        <time>2016-05-30 13:12:12</time>
        <created_by>453345</created_by>
        <template>Please note this too</template>
        <remindee_id>1245333</remindee_id>
    </reminder>
</root>
```

```json
{
  "root": {
    "reminder": [
      {
        "task_id": "4",
        "time": "2016-05-30 12:12:12",
        "created_by": "453345",
        "template": "Please note this",
        "remindee_id": "1245332"
      },
      {
        "task_id": "5",
        "time": "2016-05-30 13:12:12",
        "created_by": "453345",
        "template": "Please note this too",
        "remindee_id": "1245333"
      }
    ]
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
    <tasks>
        <reminders>
        <reminder>
            <id>33</id>
            <task_id>4</task_id>
            <created_by>453345</created_by>
            <remindee_id>1245332</remindee_id>
            <time>2016-05-30 12:12:12</time>
            <template>Please note this</template>
<item_status>
                <success>true</success>
                <code>200</code>
                <message>Reminder Added Successfully</message>
            </item_status>
        </reminder>
        <reminder>
            <id>34</id>
            <task_id>5</task_id>
            <created_by>453345</created_by>
            <remindee_id>1245333</remindee_id>
            <time>2016-05-30 13:12:12</time>
            <template>Please note this too</template>
<item_status>
                <success>true</success>
                <code>200</code>
                <message>Reminder Added Successfully</message>
            </item_status>
        </reminder>
</reminders>
</tasks>    
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
    "tasks": {
      "reminders": {
        "reminder": [
          {
            "id": "33",
            "task_id": "4",
            "created_by": "453345",
            "remindee_id": "1245332",
            "time": "2016-05-30 12:12:12",
            "template": "Please note this",
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "Reminder Added Successfully"
            }
          },
          {
            "id": "34",
            "task_id": "5",
            "created_by": "453345",
            "remindee_id": "1245333",
            "time": "2016-05-30 13:12:12",
            "template": "Please note this too",
            "item_status": {
              "success": "true",
              "code": "200",
              "message": "Reminder Added Successfully"
            }
          }
        ]
      }
    }
  }
}
```

Creates new task reminders or updates existing reminders

### Resource Information
Parameter | Value
--------- | -----
URI | task/reminder
Rate Limited? | Yes
Authentication | Yes
Response Formats | XML, JSON
HTTP Methods | POST
Response Object | Updates task reminders
API Version | v1.1 
Batch Support | Yes

### Request URL
`http://<cluster url>/v1.1/task/reminder?format=<xml/json>&only_for_stores=true`