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