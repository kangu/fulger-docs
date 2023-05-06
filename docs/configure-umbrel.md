---
sidebar_label: 'Setup your Umbrel'
sidebar_position: 2
---

# Why a full node?

The main idea of bitcoin is to be self-sovereign. For small shops online and offline,
the benefit is that once the learning curve is over, you own the full infrastructure
for receiving payments on your business.

# Why Umbrel?

Umbrel is currently the easiest way to setup a full node. There are other alternatives
like, but for this tutorial we will use Umbrel.

You can check the homepage at https://umbrel.com/ for a quick introduction of how to set it
up or use a more detailed guide here https://community.getumbrel.com/t/getting-started-with-your-umbrel 

If you use a RaspberryPI as the host system, it's recommended to install only Bitcoin
and Lightning Network apps to prevent overheating and memory issues. More recently the Umbrel
system has turned into a full-fledged self-hosting platform, which is great if you need it,
but for underpowered hardware it's a bit too much to handle.

Other alternative for easily hosting your Bitcoin+Lightning node are [Start9](https://start9.com/),
[myNode](https://mynodebtc.com/) or [RaspiBlitz](https://raspiblitz.org/).

# Opening some channels

To be able to send and receive funds through Lightning, you need to have some channels
opened.

Use a few top channels from amboss.space like ...

You need to:

1. Send some bitcoin to your node address

2. Open channels

3. Move liquidity out of the channel to allow receiving payments (when all you have
is outbound liquidity, you can only make payments, not receive) - use boltz exchange
to send funds back to your bitcoin wallet, ideally on a secure hardware wallet.
