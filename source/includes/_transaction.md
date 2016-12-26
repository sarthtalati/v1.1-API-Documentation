# transaction
In Capillary’s platform a transaction represents a purchase or return event. Transactions are categorized into three types based on customer type as explained in the following:

* Loyalty Transactions: Transactions made by registered customers of your organization's loyalty program
 
* Non-loyalty Transactions: Transactions made by customers who are not registered into your loyalty program, but shared their mobile number or email id with your organization 

* Not-interested Transactions: Transactions made by customers who are not interested to register into your organization’s loyalty program. These transactions are also considered as anonymous transactions. 

* The transaction entity stores regular/return transactions, points/coupons redeemed against transactions, retro transactions (converting not interested transactions to loyalty transactions), and custom fields of transaction screen. 

<aside class="notice">
Note: Custom fields are additional fields created in InStore to capture a specific information from customers. For example, favorite color, birthday, favorite brand etc.
</aside>

You can perform the following tasks using transaction APIs

* Register new customers automatically when submitting transactions 
* Submit loyalty and non-loyalty transactions 
* Retrieve list of transactions of a particular store, till, duration or transactions of a specific customer 
* Assign not interested transactions to specific customers (once they register) - Retro transaction 
* Redeem points/coupons of customers against their transactions 
* Retrieve points/coupons redeemed for a particular transaction