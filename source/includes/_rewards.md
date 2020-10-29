# Marvel Rewards

Rewards are incentives issued customers from a specific org. Rewards could be in the form of either points and coupons. Again, coupons are categorized into the following types.
* **Vouchers**: Digital coupons generated against redeeming customer points. For example, redeem 50 points for 10% off coupon. 
* **Physical voucher**: Physical coupons generated against redeeming customer points. For example, redeem 150 points for flat 150 off coupon.
* **Free voucher**: Digital coupons generated without any points redemption.

Based on the source of issual, rewards are of the following types:

* **InTouch only rewards**: These are points or coupons created in Capillary and users Capillary APIs. 
* **Vendor only rewards**: These are either points or coupons created at the vendor end. Capillary uses vendor specific APIs directly to identify and issue rewards.
* **InTouch + Vendor rewards**: These are vendor rewards Vendor rewards with reference created at the Capillary end.

<aside class="notice">Marvel Rewards APIs are internal APIs. The API details mentioned herein are only for your reference. These APIs are exposed by creating Wrapper APIs using our API gateway for an organization on need basis. Postman Collection for the APIs can be requested through Capillary Support during or after onboarding the org. </aside>


### Resource Information

|     |     |
| --- | --- |
host1 | **APAC**: https://apac-s3wrapper.capillarytech.com <br> **APAC2**: https://apac2-s3wrapper.capillarytech.com |
Authentication | [Customer Authentication](https://capillary.github.io/v1.1-API-Documentation/#customer-authentication)(:target="_blank"). |

 
Reward APIs help you issue rewards and get details of rewards.


## Get Rewards by Reward ID

Retrieves the details of the specific reward using the reward ID.

> Sample Request

```html
https://apac2-s3wrapper.capillarytech.com/core/v2/user/8848240000/reward/488/vouchers/brand/DemoOrg?username=demo.solution
```

> Sample Response

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"User Reward fetched successfully"
   },
   "reward":{
      "id":488,
      "name":"Ferrari Merchandise",
      "description":"Ferrari Merchandise",
      "imageId":"49J2H0VB31.image/jpeg",
      "imageUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J2H0VB31.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T141852Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=13b78f12a879725aa3618a1a6c0c51311075af06f074d513f62d7aee4196f9ee",
      "thumbnailId":"49J2H12D32.image/jpeg",
      "thumbnailUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J2H12D32.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T141852Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=8eb3575cacada197ff46c8a63b19543f7a4a4ebe6b4d589c3442cd40da8d3070",
      "termAndConditionsId":"49J3M0Y134.html",
      "termAndConditionsUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J3M0Y134.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T141852Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=fcdf0c6522a9c001e8b800a47d982f9b37beaf888d0ec86fc50fc8bc51410025",
      "tier":"GIFT",
      "label":"",
      "priority":1,
      "intouchPoints":300,
      "group":"",
      "startTime":"2020-10-16 09:34:39",
      "endTime":"2021-01-27 00:34:39",
      "expired":false,
      "started":true
   },
   "vouchers":[
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"SFRR17UX\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"9ACNFU3H\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"919840000000\",\"email\":\"rahul.ram@example.com\",\"external_id\":\"9000000000000003700\"},\"code\":\"LP419PF7\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"VAFCQDCS\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      }
   ]
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `core/v1/user/reward/{rewardId}/brand/{brandName}`
HTTP Method | GET
Authentication | Customer Auth
API Version | v1
Batch Support | No
Rate Limited | No

### Request URL

`https://{host1}/core/v1/user/reward/{rewardId}/brand/{brandName}/{paramName}={paramValue}`

### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
rewardId* | int | Unique ID of the reward to fetch.
brandName* | string | Name of the brand associated with the rewards.
language | string | Specify the ISO language code to get reward details in that particular language. For example, `zh` for Chinese, `ar` for Arabic, `en` for English (default language). You can configure a reward in different languages and retrieve in a specific language only if it is configured.
area | string | Retrieve rewards of a specific region. Pass the area name.
city | string | Retrieve rewards of a specific city. Pass the city name.
country | string | Retrieve rewards of a specific country. Pass the country name.
category | string | Retrieve rewards of a specific category. Pass the category name.
label | string | Retrieve rewards tagged to a specific label. Pass the label name.
group | string | Retrieve rewards of a specific label. Pass the group name.
tier | string | Retrieve rewards of a specific tier. Pass the tier name. 
type | enum | Type of reward. Value: `POINTS`, `VOUCHER`, `PHYSICAL_VOUCHER`, `FREE_VOUCHER`.

<aside class="notice">All parameters marked with * are mandatory. The parameter values for area, city, country, category, label, group, and tier are user-defined. You need to pass the exact names as per created on the UI.</aside>







## Get All User Rewards

Retrieves rewards of a specific customer.

> Sample Request

```html
https://apac2-s3wrapper.capillarytech.com/core/v1/user/...
```

> Sample Response

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"User Reward fetched successfully"
   },
   "userVouchers":[
      {
         "rewardDetails":{
            "rewardId":488,
            "name":"Ferrari Merchandise",
            "description":"Ferrari Merchandise",
            "thumbnailId":"49J2H12D32.image/jpeg",
            "thumbnailUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J2H12D32.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=d57fc7aae76c9632946f88f54cab83ff4c168642084774c0326a86c98f929a34",
            "imageId":"49J2H0VB31.image/jpeg",
            "termNConditionsId":"49J3M0Y134.html",
            "termNConditionsUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J3M0Y134.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=cbaf68a15587a4b7f07ba46f51bbd7688baf27c6d9312e2b2f0ec9ba43d211b4",
            "imageUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J2H0VB31.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=61bfabff1582fdd948ebbba6fbbd1e13eda386a6c382755fba93d78be7b0d3ce",
            "tier":"GIFT",
            "label":"",
            "group":"",
            "tillId":null
         },
         "vouchers":[
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"TL150O7R\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":488,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            },
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"F0J8Z9AA\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":488,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            },
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"7OK2IMSB\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":488,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            },
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"CITHYUGK\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":488,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            },
            {
               "code":null,
               "expiry":null,
               "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"VAFCQDCS\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "rewardId":488,
               "issued":null,
               "seriesId":null,
               "seriesName":null,
               "redemptionCount":0,
               "redemptions":null
            }
         ]
      },
      {
         "rewardDetails":{
            "rewardId":489,
            "name":"50 NFR Discount Voucher",
            "description":"50 NFR Discount Voucher",
            "thumbnailId":"49J2719V29.image/jpeg",
            "thumbnailUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J2719V29.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=dce8783763093a0b6d166c4facb42a9e9bb3db51b8a33366acdebc1831031a7f",
            "imageId":"49J2711828.image/jpeg",
            "termNConditionsId":"49J271AC30.html",
            "termNConditionsUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J271AC30.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=7d6f6ebc06627fc7e7de12489ec3f11148616ea2ee25308d43c011546f00ccac",
            "imageUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J2711828.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T142928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=4c66b3075db316c3fac99d053ed2c84dbbe9440cf098e12d620986cd6f41f9b8",
            "tier":"",
            "label":"",
            "group":"",
            "tillId":null
         },
         "vouchers":[
            {
               "code":"KUQ3AAK7",
               "expiry":"2020-12-12 23:59:59",
               "vendor":null,
               "rewardId":489,
               "issued":"2020-10-28T17:27:03.000+05:30",
               "seriesId":"2490",
               "seriesName":"50 NFR Discount Voucher",
               "redemptionCount":0,
               "redemptions":{
                  "redemption":null
               }
            },
            {
               "code":"DBN600HI",
               "expiry":"2020-12-12 23:59:59",
               "vendor":null,
               "rewardId":489,
               "issued":"2020-10-28T17:27:03.000+05:30",
               "seriesId":"2490",
               "seriesName":"50 NFR Discount Voucher",
               "redemptionCount":0,
               "redemptions":{
                  "redemption":null
               }
            }
         ]
      },
      {
         "rewardDetails":null,
         "vouchers":[
            {
               "code":"L3CC29OJ",
               "expiry":"2120-02-24 23:59:59",
               "vendor":null,
               "rewardId":null,
               "issued":"2020-02-25T22:35:55.000+05:30",
               "seriesId":"833",
               "seriesName":"Google Mini",
               "redemptionCount":0,
               "redemptions":{
                  "redemption":null
               }
            },
            {
               "code":"1DGT50TE",
               "expiry":"2120-02-24 23:59:59",
               "vendor":null,
               "rewardId":null,
               "issued":"2020-02-25T22:36:43.000+05:30",
               "seriesId":"833",
               "seriesName":"Google Mini",
               "redemptionCount":0,
               "redemptions":{
                  "redemption":null
               }
            }
         ]
      }
   ],
   "pagingDto":{
      "last":true,
      "totalElements":3,
      "totalPages":1,
      "numberOfElements":3,
      "first":true,
      "size":1000,
      "number":0
   }
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/core/v1/user/...`
HTTP Method | GET
Authentication | Customer Auth
API Version | v1
Batch Support | No
Rate Limited | No

### Request URL
`https://{host1}/core/v1/user/...`


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
mobile* | string | Mobile number of the customer to fetch rewards.
brandName* | string | Name of the brand associated with the rewards.
size | long | Results to show per page.
page | int | To retrieve details of a specific page. Pass `0` to not apply pagination. For example, `page=2&size=10` shows 10 results on page 2.




## Get User Rewards (by Reward ID)

Retrieves details of a specific reward of a customer.

> Sample Request

```html
https://apac2-s3wrapper.capillarytech.com/core/v1/user/...
```

> Sample Response

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"User Reward fetched successfully"
   },
   "reward":{
      "id":488,
      "name":"Ferrari Merchandise",
      "description":"Ferrari Merchandise",
      "imageId":"49J2H0VB31.image/jpeg",
      "imageUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J2H0VB31.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T141852Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=13b78f12a879725aa3618a1a6c0c51311075af06f074d513f62d7aee4196f9ee",
      "thumbnailId":"49J2H12D32.image/jpeg",
      "thumbnailUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J2H12D32.image/jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T141852Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=8eb3575cacada197ff46c8a63b19543f7a4a4ebe6b4d589c3442cd40da8d3070",
      "termAndConditionsId":"49J3M0Y134.html",
      "termAndConditionsUrl":"https://demo.aip-southeast-1.amazonaws.com/solutions-rewards/STANDARDAPP/49J3M0Y134.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201028T141852Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAIU4E4JJZBOKPYUAA%2F20201028%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=fcdf0c6522a9c001e8b800a47d982f9b37beaf888d0ec86fc50fc8bc51410025",
      "tier":"GIFT",
      "label":"",
      "priority":1,
      "intouchPoints":300,
      "group":"",
      "startTime":"2020-10-16 09:34:39",
      "endTime":"2021-01-27 00:34:39",
      "expired":false,
      "started":true
   },
   "vouchers":[
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"SFRR17UX\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"9ACNFU3H\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"916598245678\",\"email\":\"albert.c@example.com\",\"external_id\":\"90000000000751700\"},\"code\":\"8YD7V82I\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"919841023456\",\"email\":\"anurag.b@example.com\",\"external_id\":\"90000000000761700\"},\"code\":\"QIZM4VEA\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"919840000000\",\"email\":\"rahul.ram@example.com\",\"external_id\":\"9000000000000003700\"},\"code\":\"D3WZYAM8\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"Q5KJ2VOD\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"F0J8Z9AA\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"7OK2IMSB\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"CITHYUGK\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      },
      {
         "code":null,
         "expiry":null,
         "vendor":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"VAFCQDCS\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
         "rewardId":488,
         "issued":null,
         "seriesId":null,
         "seriesName":null,
         "redemptionCount":0,
         "redemptions":null
      }
   ]
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/core/v1/user/...`
HTTP Method | GET
Authentication | Customer Auth
API Version | v1
Batch Support | No
Rate Limited | No

### Request URL
`https://{host1}/core/v1/user/...`

### Request Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
mobile* | string | Registered mobile number of the customer whose rewards you want to retrieve.
rewardId* | int | Unique ID of the reward that you want to retrieve.
brandName* | string | Name of the brand associated with the reward.
username | string | Till code that you want to associate to make Capillary API calls. 






## Issue User Reward 

Lets you issue rewards to a specific customer. Customer points are deducted according to the voucher issued.

<aside class="notice">Points are not deducted for free vouchers. </aside>


> Sample Request

```html
https://apac2-s3wrapper.capillarytech.com/core/v1/user/rewards/issue...
```

> Sample Post Request

```json
{
"mobile": "8848240000",
"brand": "STANDARDAPP",
"transactionNumber":"Cap11223344"
}
```

> Sample Response (for Vendor only Rewards)

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"Reward issued successfully"
   },
   "intouch":{
      "pointsRedeemed":"10",
      "couponCode":null,
      "codeExpiry":null
   },
   "vendor":{
      "voucher":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"S4WUGJMT\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
      "coupon_issue_status":"{\"success\":true,\"code\":200,\"message\":\"Success\"}"
   }
}
```

> Sample Response (for InTouch only Rewards)

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"Reward issued successfully"
   },
   "intouch":{
      "pointsRedeemed":"10",
      "couponCode":"ASDFGHJKL",
      "codeExpiry":"2020-10-22 17:00:00"
   },
   "vendor":{
      
   }
}
```

> Sample Response (for Vendor+InTouch rewards)

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"Reward issued successfully"
   },
   "intouch":{
      "pointsRedeemed":"10",
      "couponCode":"ASDFGHJKL",
      "codeExpiry":"2020-10-22 17:00:00"
   },
   "vendor":{
      "voucher":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"S4WUGJMT\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
      "coupon_issue_status":"{\"success\":true,\"code\":200,\"message\":\"Success\"}"
   }
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/core/v1/user/rewards/issue`
HTTP Method | POST
Authentication | Customer Auth
API Version | v1
Batch Support | No
Rate Limited | No

### Request URL

`https://{host1}/core/v1/user/rewards/issue?...` 


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
username* | string | Till code that you want to associate to issue rewards.
skipValidation | boolean | Pass `true` to skip validating the source (`username`) from which rewards are issued, else pass `false`.


### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
mobile* | string | Registered mobile number of the customer to issue rewards.
brand* | string | Name of the brand associated with the reward.
transactionNumber* | string | Unique transaction number of the issual.
tillID | long | This identifier is for reporting purpose. If there are any sub-brand, then the redemption is issued to the sub-brands.

<aside class="notice">Parameters marked with * are mandatory.</aside>





## Issue Bulk Rewards

Lets you issue multiple rewards to a customer. Customer points are deducted according to the voucher issued.

<aside class="notice">Points are not deducted for free vouchers. </aside>

> Sample Request

```html
https://apac2-s3wrapper.capillarytech.com/core/v1/user/rewards/issue?...
```

> Sample Post Request

```json
{
   "mobile":"8848240000",
   "brand":"STANDARDAPP",
   "transactionNumber":"Cap11223344",
   "validationCode":"",
   "redemptionTime":"",
   "notes":"xyz",
   "rewards":[
      {
         "rewardId":488,
         "quantity":2
      },
      {
         "rewardId":489,
         "quantity":2
      }
   ]
}
```

> Sample Response

```json
{
   "status":{
      "success":true,
      "code":200,
      "message":"Reward issued successfully"
   },
   "rewards":[
      {
         "status":{
            "success":true,
            "code":200,
            "message":"Reward issued successfully"
         },
         "rewardId":489,
         "requestedQuantity":2,
         "intouch":[
            {
               "pointsRedeemed":"100",
               "couponCode":"NHP8Q0S0",
               "codeExpiry":"2020-12-13T00:00:00+05:30"
            },
            {
               "pointsRedeemed":"100",
               "couponCode":"V8LFXGBF",
               "codeExpiry":"2020-12-13T00:00:00+05:30"
            }
         ],
         "vendor":null
      },
      {
         "status":{
            "success":true,
            "code":200,
            "message":"Reward issued successfully"
         },
         "rewardId":488,
         "requestedQuantity":2,
         "intouch":null,
         "vendor":[
            {
               "voucher":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"AG9H5DLV\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "coupon_issue_status":"{\"success\":true,\"code\":200,\"message\":\"Success\"}"
            },
            {
               "voucher":"{\"status\":{\"success\":\"true\",\"code\":200,\"message\":\"Success\"},\"coupons\":{\"coupon\":{\"customer\":{\"mobile\":\"918848000000\",\"email\":null,\"external_id\":\"90000000000018700\"},\"code\":\"YHFU5WVU\",\"discount_code\":\"NO_VALUE\",\"series_code\":\"2483\",\"series_info\":[],\"is_absolute\":\"true\",\"coupon_value\":\"0\",\"transaction\":{\"amount\":\"\",\"number\":\"\"},\"side_effects\":[],\"item_status\":{\"success\":\"true\",\"code\":700,\"message\":\"Coupon processing successful\"}}}}",
               "coupon_issue_status":"{\"success\":true,\"code\":200,\"message\":\"Success\"}"
            }
         ]
      }
   ]
}
```


### Resource Information

| | |
--------- | ----------- |
URI | `/core/v1/user/rewards/issue`
HTTP Method | POST
Authentication | Customer Auth
API Version | v1
Batch Support | Yes
Rate Limited | No

### Request URL

`https://{host1}/core/v1/user/rewards/issue?...` 


### Request Query Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
username* | string | Till code that you want to associate to issue rewards.
skipValidation | boolean | Pass `true` to skip validating the source (`username`) from which rewards are issued, else pass `false`.

### Request Body Parameters

Parameter | Datatype | Description
--------- | -------- | -----------
mobile* | string | Registered mobile number of the customer to issue rewards.
brand* | string | Name of the brand associated with the reward.
transactionNumber | string | Transaction number of rewards issual. If left blank, the transaction number is generated automatically.
validationCode | string | Validation code to redeem points.
redemptionTime | date-time | ISO time of points redemption in `YYYY-MM-DD hh:mm:ss` format.
notes | string | A short description or reason that you want mention for the current reward issual.
rewardId* | int | Unique ID of the reward that you want to issue.
quantity* | int | Number of rewards to be issued.


<aside class="note">Parameters marked with * are mandatory. </aside>







## Response Codes

Code | Description
---- | -----------
200 | User rewards fetched or issued successfully. 
8000 | Unable to fetch user reward. 
8003 | Unable to issue user reward. 
8004 | Unable to issue user reward. 
8005 | User reward is disabled for the brand.
8009 | Invalid page or size passed. Page or size should not be zero.
8010 | User reward is partially successful (in case of batch issual).
