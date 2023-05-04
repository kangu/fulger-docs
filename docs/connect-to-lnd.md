---
sidebar_label: 'Connect to LND'
---

# Connect to LND

The easiest way to setup the connection between the orders database
and the LND instance is to run the scripts locally on the umbrel lightning node.

From there a connection can be made to the public address of the database to watch
for changes and respond to them with locally generated invoices.

The other option is to run the scripts next to the hosted database and connect
over Tor to the lnd instance, but that has more overhead needing the Tor daemon to be
running on the host. This can also cause issues with certain hosting providers.
