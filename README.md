## APP URL

https://gtr-temp-api.herokuapp.com/records?startDate=2016-12-31&endDate=2017-08-21&minCount=100&maxCount=320

## REQUEST DETAILS

METHOD : POST 
REQUEST BODY: 
```
startDate = YYYY-MM-DD
endDate = YYYY-MM-DD
minCount = Number
maxCount = Number
```

## CURL

```
curl --location --request POST 'https://getir-records-tst.herokuapp.com/records' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}'
```
