# Keep BTC price updated

The NodeJS script at `cronjobs/fetch_btc_rates.js` can be used to fetch rates from a public
API at a predefined interval and put them into the database.

The script depends on the following `.env` parameters:

`API_KEY_COINAPI` - API key from [CoinAPI](https://coinapi.io), the currently used conversion rate service

`CURRENCIES` - comma separated list of currenceis for which rates are to be retrieved

`RATES_DOC` - document name in CouchDB where the rates are saved

`COUCH` - IP address of CouchDB instance

`COUCH_PASS` - admin authentication token

Sample .env section:
```
API_KEY_COINAPI=DE914320D-09EB-4DS7-8D1A-219A8ESDF052
CURRENCIES=EUR,USD,GBP
COUCH=http://localhost:5984
COUCH_PASS=bW9uZXlwcmludGVyOmdvYnJycg==
RATES_DOC=rate:10kSATS
```
