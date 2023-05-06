---
sidebar_label: 'API'
#sidebar_position: 3
---

# Public API

This is the public facing side of the API server.

## Tips

### `POST /tip`

Request parameters:
* currency
  * _string_
  * international 3 character ISO code
* value
  * numeric
  * amount being transacted

If `currency` equals the special code "SAT", then `value` represents the exact numbers of
sats to be invoiced. If `currency` is fiat like "USD", the final sats value will be calculated
internally based on the store rate between USD->BTC.

Sample request:
```json
{
    "currency": "SAT",
    "value": 10000
}
```

Reply:
```json
{
    // document id created in the database, is passed along on the invoice memory currently
    "_id": "order-0a798d5f-fcac-4c86-9e8b-be58c82e1cc1",
  
    // internal revision tracking for document
    // first step was created,
    // second step was processed by the external lightning invoice provider
    // third step would be the "settled" state
    "_rev": "2-fbef6bbeb5e87f674a844f8c6534ac43",
  
    // will be used for specific product shopping
    "products": [],
    // local currency in which accounting has to be denominated in
    // can be configured in the settings document
    "fiat_currency": "EUR",
  
    // total amount charged in the local currency
    "fiat_total": 2.68,
  
    // currency in which the order has been presented to the user
    "order_currency": "GBP",
  
    // total amount shown to customer
    "order_total": 2.34,
  
    // total value in sats after conversion rates were applied
    "sats_total": 10000,
  
    // order creation time
    "timestamp": "2023-05-06T20:24:41.668Z",
  
    // marker as procesed by the "LN_invoice" plugin
    "LN_Invoice": true,
  
    // copied value in sats
    "ln_invoice_sats": 10000,
  
    // memo for transaction
    // currently it's only the order id, some messages can be embedded as well
    "ln_invoice_memo": "order-0a798d5f-fcac-4c86-9e8b-be58c82e1cc1",
  
    // expiration time in miliseconds
    "ln_invoice_expire_ms": 86400000,
  
    // test is only true when being generated from the test suite
    "test": false,
  
    // lightning invoice code
    "ln_invoice_req": "lnbc100u1pj9ddufpp5eqgz4344ws6ep0ryrg43v5ykjc4lztfj27g6njgysadevrxcs05qdzydaexgetj95cxzdee8pjr2e3dve3kzcedx33nsd3d89jnsc3dvfjn2wrr8qex2vtrvd3scqzpgxqyz5vqsp58jzju3j5z2szhwzuw9x4qu05c3459q8x252z4nxrm9nhmel4gkjq9qyyssqxfahy0j8y32u2v5qyyhygajcmwckchtvual32dev9znjvv2vx8ektp64wr5hjpufnd20guhfa6qlwvdj9zxjq39lw46rdjeul03d5jsq3z25na",
    
    // generated qr code
    "ln_invoice_qr": "data:image/png;base64,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k4pJ5QmVqWJSmSpOVE4qpoqTikllqnhCZaqYKu5QmSomlaniROUJlaniCZXfdLHWWh9xsdZaH3Gx1lofYX/wi1TuqPhNKlPFicpJxaRyUnGiMlVMKm+qmFSmijepTBVPqNxRMalMFU+oTBWTyknFpHJScYfKHRUnKm+qeOJirbU+4mKttT7iYq21PuKHh1TuqLhDZap4omJSOal4ouKOipOKN6lMFZPKb1J5ouI3qUwVk8qJyknFpDJVTConKndUnKicVNyhMlW86WKttT7iYq21PuJirbU+wv7gL1I5qThRmSomlZOKE5WpYlI5qZhUTiomlZOKSWWqmFROKu5QmSrepDJVnKhMFZPKHRWTyknFpDJVTConFZPKHRUnKndUTCpPVEwqU8UTF2ut9REXa631ERdrrfURPzykclLxhMpUMalMFZPKpPKmikllqvhNFZPKHSpvUjmpmFSmihOVqWJSuaPipOJEZao4qXii4omKO1Smiv+yi7XW+oiLtdb6iIu11vqIH15WcUfFpDJVnFTcUXGi8kTFHSpTxR0qU8WkMlX8l1RMKlPFf4nKicpUMam8SWWqOFE5qZgq7lA5qfhNF2ut9REXa631ERdrrfUR9gcvUjmpmFTuqDhRmSomlZOKSWWqOFGZKiaVk4oTlaniTSpvqphUTiomlaniCZWpYlL5lypOVKaKE5XfVDGpTBWTylTxpou11vqIi7XW+oiLtdb6CPuDF6lMFZPKVHGHyknFicqbKk5UpopJ5aRiUnlTxR0qU8WkMlVMKlPFpDJVTConFXeo3FFxojJVTCp3VEwqT1ScqEwVJypTxaQyVUwqU8UTF2ut9REXa631ERdrrfURP7ys4k0qJxWTylTxN6k8UXFS8SaVJ1SmikllqphUpopJZap4QmWqmFROVE4qTiruUJkqTlROVKaKJyomlanipOJNF2ut9REXa631ERdrrfURPzykclJxonJSMam8qWJSmSomlZOKE5UTlaniROWOiqliUpkq7lA5UZkqJpWp4kTlCZWp4kRlqphUpopJ5U0qU8UdKk+oTBX/0sVaa33ExVprfcTFWmt9hP3BAyonFZPKVDGp/JdUnKhMFZPKVPGEyknFpPJExYnKVHGiclIxqZxUvEnliYpJZao4UZkqTlT+pYpJ5Y6KN12stdZHXKy11kdcrLXWR/zwj6lMFScqd1RMKicVJypTxaRyovJExYnKHRV3qEwVd1ScqEwVJyr/UsWkMlWcqJyoPFFxonJSMalMKv8lF2ut9REXa631ERdrrfUR9gcvUjmpmFTeVHGiMlVMKlPFicpUMalMFU+ovKliUpkqJpXfVDGpTBUnKlPFpDJVTCpTxaRyUvGEyknFEyq/qeJfulhrrY+4WGutj7hYa62PsD94kcoTFXeonFScqEwVk8oTFXeonFRMKlPFpDJVTCpTxaRyR8UdKicVk8oTFb9JZaqYVKaKSeWk4gmVk4o7VKaKSWWqmFSmiicu1lrrIy7WWusjLtZa6yN+eEjlpOJE5URlqrhD5TdVPKFyh8pUMamcqDxRMamcqEwVd6jcUfGEyptUTlSmijepPKEyVZyoTBWTylTxpou11vqIi7XW+oiLtdb6iB8eqphUJpUnKp6omFSmikllqphUJpU3VZyonFTcofKbKp6oOFE5UbmjYlI5qThReUJlqphUpoqp4kTlpOIJlaliUpkqnrhYa62PuFhrrY+4WGutj/jhIZWpYlK5Q+Vfqrij4kTlDpWTikllqvhNKicqf1PFpDJVTCpTxaQyVUwqk8pUcVJxojJVTCpTxZtUnqg4UZkq3nSx1lofcbHWWh9xsdZaH/HDQxUnFZPKVDGpTBVPqEwVk8pUMak8UXGicofKVPFExaQyVUwqJxWTym9SOVH5lyomlaniROVE5aRiUjmp+JtUpoonLtZa6yMu1lrrIy7WWusj7A8eUDmpmFSmiknlpOJEZaqYVKaKE5WTijtUTiomlTsqTlSmihOVqWJSOamYVKaKSeWk4gmVk4pJ5U0Vf5PKScUdKicVk8pJxZsu1lrrIy7WWusjLtZa6yN+eKhiUplUTlSmihOVqeJEZar4X1YxqUwqJxWTylRxojJVPKEyVUwqJypvUpkqJpWpYlKZKiaVk4oTlZOKqWJSOVE5qZhUJpV/6WKttT7iYq21PuJirbU+4oeHVO6ouEPlRGWqOFGZKiaVk4pJZaqYVE4qTiomlaliUpkq3lTxRMWkMqlMFZPKVPEmlZOKSWWqOKm4Q2WqeKJiUpkqJpUnKk5UpoonLtZa6yMu1lrrIy7WWusjfvjHVE4qnlA5UXmiYlKZKk5UpopJZaqYVKaKSWWqmComlaliUvkvUzmpeFPFpDJV3KFyh8pJxaTypopJZVL5my7WWusjLtZa6yMu1lrrI+wP/iKVk4pJ5YmKE5Wp4g6VqeJE5aTiCZWp4g6Vk4oTlTsqJpUnKk5UTiomlaliUpkqJpU7Ku5QmSomlaniN6ncUfGmi7XW+oiLtdb6iIu11voI+4MHVKaKE5U7Kk5UnqiYVKaKO1SmihOVqWJSOak4UZkq7lB5ouJE5aRiUvlNFW9SmSomlZOKSeW/rGJSmSp+08Vaa33ExVprfcTFWmt9xA//WMWJyhMVk8qk8oTKVPGEylRxh8qJyhMVb6q4o+JE5Y6KSeWJijsq7qg4UZkqnlCZKiaVSWWqOFGZKp64WGutj7hYa62PuFhrrY/44WUqb6q4Q2VSOak4UTmpOFGZKk4qflPFicpUMak8UXGiMlWcqNxRMalMFScqU8WkMlVMKv+SyknFVHFScaLyN12stdZHXKy11kdcrLXWR9gfvEhlqphUnqh4QuWkYlKZKiaVqeIOlaniROWOiknlpGJSmSqeUJkqJpU7Kt6k8kTFpDJVnKhMFU+oTBUnKlPFpHJSMalMFb/pYq21PuJirbU+4mKttT7C/uBFKlPFicpJxR0qT1ScqDxRcYfKVDGpnFTcoTJVTConFScqJxUnKn9TxR0qU8WJylQxqTxRMan8l1U8cbHWWh9xsdZaH3Gx1lof8cNDKlPFHRUnKlPFScUdKicqU8WkcofKVPFExR0qd6icVDxRcUfFicpUcYfKicoTKlPFpHJScYfKVDGpTBWTylQxqUwV/9LFWmt9xMVaa33ExVprfYT9wYtUpopJ5Y6KE5Wp4g6Vk4pJZaqYVE4qTlSmijtUTipOVKaKSeVvqjhRuaNiUpkqfpPKVDGp3FExqUwVJyonFZPKVDGpTBUnKlPFExdrrfURF2ut9REXa631EfYHv0jlN1WcqNxRcYfKScWkMlXcoXJSMalMFXeoTBUnKlPFpDJVnKicVEwqU8UdKndUTCp3VEwqU8WkMlWcqJxU3KFyUnGiMlW86WKttT7iYq21PuJirbU+wv7gL1KZKt6kMlWcqNxRcaJyR8Wk8kTFm1TuqJhU7qi4Q2WqOFG5o+IJlaliUrmjYlI5qZhUpopJ5TdV/KaLtdb6iIu11vqIi7XW+ogfXqbyJpX/JRV3qEwVJypTxRMqU8VJxaQyqUwVd6jcUTGp3FExqUwqT1ScVJyoTCpTxaRyUnFHxYnKVPEvXay11kdcrLXWR1ystdZH2B88oDJV/CaVqWJSuaPiDpWpYlKZKiaVqWJSOan4TSpTxaQyVZyoPFExqTxRMalMFScqU8WkMlXcoXJHxW9SmSrepDJVPHGx1lofcbHWWh9xsdZaH/HDL1OZKk5U3lRxh8pUcaIyVUwqU8WkMlXcoTJVTCpTxUnFScWJyh0Vk8qk8kTFEypTxaQyVUwqT1ScqEwVk8pUcUfFm1SmijddrLXWR1ystdZHXKy11kfYHzygclIxqZxU/CaVqWJSmSpOVKaKE5Wp4g6VN1WcqEwVk8pJxaRyR8WJyh0Vk8oTFScqU8WkckfFpPJfUjGp3FHxxMVaa33ExVprfcTFWmt9hP3BAypTxaRyUnGiMlWcqEwVk8pUcaJyR8UTKk9UTCpTxaTypooTlZOKJ1TuqJhUTiomlZOKJ1ROKiaVk4pJZaqYVKaKSeWk4m+6WGutj7hYa62PuFhrrY/44aGKJ1SmiqnijorfVPFfUnFSMalMFXeonKicVEwqd6icVEwqU8WkclJxUjGpnKhMFXdUnFS8qeKkYlI5UTmpeOJirbU+4mKttT7iYq21PsL+4AGVqWJSmSomlScqJpWp4g6VqWJSmSomlZOKJ1TeVDGpnFRMKk9UTCpvqphUTiomlZOKE5UnKk5UflPFEyonFW+6WGutj7hYa62PuFhrrY+wP3hAZar4TSpTxRMqU8WkclJxh8odFZPKb6qYVE4qJpWTiknlpGJSeaJiUpkqnlCZKk5UpooTlZOKE5Wp4kTlpGJSOan4TRdrrfURF2ut9REXa631EfYHD6hMFScqJxWTyknFEyonFXeonFScqEwVJyonFScqd1RMKr+p4g6VOyruUHmi4gmVqWJSmSpOVN5UcaIyVbzpYq21PuJirbU+4mKttT7C/uB/mMpU8SaVk4pJZao4UXlTxaQyVTyhclJxh8pJxaTypoo7VO6omFROKiaVqWJSmSruUJkq7lB5U8UTF2ut9REXa631ERdrrfURPzyk8jdVTBV3qEwVJxUnKlPFicpUMamcVJyovEnlCZWp4g6VqWJSOamYVE5U3qRyh8pUcVIxqZxU3KEyVZxUTConFW+6WGutj7hYa62PuFhrrY/44WUVb1I5UZkqJpUTlaliUpkqTlT+JpWp4gmVN1U8UTGpnFTcoXJSMalMFScqU8WkMlWcqJxUTCpPVPwvuVhrrY+4WGutj7hYa62P+OGXqdxR8aaKO1R+U8VJxR0Vk8pUcaJyR8WkMqn8poo7VKaKO1Smikllqrij4omKSeVE5UTlCZWp4kRlqnjiYq21PuJirbU+4mKttT7ih//nVKaKSWVSmSomlaliUpkqTlSmikllqphUpoqp4omKO1SmiidUflPFScWkMlVMKlPFpHJSMalMFScqU8UTKicqU8VU8aaLtdb6iIu11vqIi7XW+ogfPk7lX1J5ouJNKlPFicpJxaRyh8pvqrhD5aRiUpkqJpWp4o6Kk4oTlROVJypOVP6mi7XW+oiLtdb6iIu11vqIH35ZxW+qmFTuqJhU3lQxqUwqJxV3qDyhcofKVHGiMlVMKlPFpHJScaLypopJZao4UZkqJpUnKiaVk4oTlROVf+lirbU+4mKttT7iYq21PsL+4AGVv6liUjmpmFROKiaVk4pJ5aRiUpkqJpWTit+kMlWcqEwVk8pJxRMqU8WkMlVMKm+quENlqphUpooTlTdVPKEyVbzpYq21PuJirbU+4mKttT7C/mCttT7gYq21PuJirbU+4mKttT7iYq21PuJirbU+4mKttT7iYq21PuJirbU+4mKttT7iYq21PuJirbU+4mKttT7iYq21PuJirbU+4mKttT7i/wDj2W4JDrcXfAAAAABJRU5ErkJggg==",
   
   // date when document was processed and the linghtning invoice was created
    "ln_invoice_created_at": "2023-05-06T20:24:42.281Z"
}
```

### `GET /status/{id}`

After an order document is created, the returned `_id` value can be used to query for
live changes on the state of that document. When a settle operation happens (currently the
only transformation allowed) through the external watch script, the endpoint will return
the new revision if it has settled, or it will stay in a pending state until the settlement
happens or the 1 minute timeout expires.

Proxied directly to the [CouchDB changes feed](https://docs.couchdb.org/en/stable/api/database/changes.html).

Possible Headers:

1. `None`

It watches for changes starting from this exact moment going forward (passes `since=now` param to changes feed)

2. `X-Rev`

When passed, returns the revision of the document right away.

3. `X-Start-Rev`

Starts watching since specific database update sequence. If change has already happened
it returns it immediately, otherwise is keep watching

All live requests have a timeout period of 1 minute, in which they return an empty result
set. In case the payment check needs to continue, the request has to be performed again.

## Rates

### `GET /rates`

Retrieve latest currency exchange rates maintained by the cron job.

```json
{
  "_id": "rate:10kSATS",
  "_rev": "1-da24a4ce39122b009ac447438b9080a8",
  "timestamp": "2023-04-23T11:38:20.769Z",
  "SAT": 10000,
  "EUR": 2.52,
  "GBP": 2.23,
  "RON": 12.58,
  "USD": 2.76
}
```

The reference value for sats is arbitrarily picked at 10000 to allow for each conversion.
