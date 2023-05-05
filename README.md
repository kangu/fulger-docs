# Fulger Documentation

### Why Bitcoin? Because it's inclusive

Bitcoin is just math and technology put together. It practically works for everyone, independent
of gender, race, age, anything. It's a tool for empowering people with economic freedom and
trade across all physical barriers, allowing for secure value transfer and storage across
the globe.

### Tools for a self-sovereign stack

Owning and working with bitcoin is all about self-sovereignty at its core. Although running
the tools can be sometimes hard, the end goal and initial vision is to be a full participant in the
system. No matter how much benefits and ease of use a third party can provide, in the end
it's just yet another third party, a dependency in a sense. The true wonder of the bitcoin
system is that it was designed to run literally *anywhere* and by anyone, which is one of the core unique
propositions that bitcoin has over any other projects that appeared downstream from it.

It's become increasingly easier to run nodes and infrastructure with projects like umbrel
where it's practically plug and play. And then operating it brings indeed some challenges,
but it's not really that impossibly hard. If some of us managed to get a hang of it we can
teach it as well to other around us.

This documentation repository acts as a guide to handling a set of tools that will
allow you to claim your self-sovereignty in the digital space.

The stack is composed of:

* Bitcoin server
* Lightning Network server
* CouchDB database
* NodeJS

### Installation

You could have all services running on a single machine, but for practical reasons things
should be separated like so:
* Bitcoin + Lightning nodes running on their own dedicated machine, over Tor for increased security.
* CouchDB + NodeJS running on a publicly available host

The bitcoin node is only available on the local network where it's running, the only connection
to a public website is through a connection to the CouchDB system that acts as a message and
data transmission engine.

Follow the [full installation guide](./install) for more details.

## Why should I care or use this?

It's about owning your stack, having control over its components and moving parts.
Yes there are BTC Pay Server, ZapRite, LitePay, ldk, etc..., but with them you have yet another
dependency.

The direction is which this project is going is to provide developers with a minimal
functioning btc+lightning bridge, and besides that stay out of the way and never crash.

## Target audience

For a better bitcoin adoption curve we should all target tools, products and services to specific
niches of people. This particular set of tools is aimed at software developer professionals
(and amateurs alike) who can manage a website for them or for clients and want to have an
easy to use and reliable toolset for handling all sorts of evolving stuff in the lightning
ecosystem.

## Features coming up

* support for micro-transactions
* templates for small shops and entrepreneur small services
* themed qr code
* backend for products
* many more hopefully...

## Support us

We could use some extra sats you are willing to share with us, is helps pay the bills and
keep things going. We have setup a demo site for donations at [support-fulger.kangu.ro](https://support-fulger.kangu.ro/) will
all the sources published on this repository that you can grab and run of modify as your own.

## Feedback is welcomed

See the CONTRIBUTIONS document for details on how to actively participate.

## Demo implementation

A demo system for simple tipping is running on [my own personal website](https://radustanciu.ro#contact), with the corresponding
[repository source here](https://github.com/kangu/demo-personal-site).

Further demos are planned for micro-transactions and a more commerce-oriented shop. You can
support development by [tipping us some sats through the demo implementation](https://radustanciu.ro#contact) or directly at radu@getalby.com.
