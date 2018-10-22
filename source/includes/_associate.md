# Associate
The associate entity contains all the necessary APIs required for managing associate users. You can login with associate credentials, verify whether login credentials are valid, 

To use any associate API, you must need associate credentials which are in two parts - user identification and password.

* User identification (associate code, username or email id) needs to be passed as a part of the GET parameter in query string
* Password needs to be passed as a special HTTP Header named `X-Cap-Assoc-Credentials` (contains MD5 encoded password)

## Validate Associate Login Credentials



## Update Associate Details



## Retrieve Associate Details




## Retrieve Associate Activities



## View Associate Tasks




## Response Codes
### Success Codes
Code | Description
---- | -----------
200 | Logged in successfully
2100 | Associate details updated successfully
2200 | Activities fetched successfully
2300 | Associate retrieved successfully.

### Error Codes
Code | Description
---- | -----------
401 | Invalid user name or password
5002 | Provide valid associate credentials to login
5003 | Provide associate credentials to login as an associate
2301 | No associate found with the provided details