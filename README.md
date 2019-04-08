# Turku City Bus Real Time Mapping
Author: Pongku Kumar Paul
Date: April-2019

Link to the landing page: [Turkucitybus](https://turkucitybus.netlify.com/)

Overview
=============
Turkucitybus application maps real time location of buses(line) in map. Watcing the real time location of buses in map, passenger can ensure the status of the incoming bus for any given route. 

Use Cases
=============
The apps that built by bus company doesn't provide any real time location of bus rather only the probable time to arrive in a stop, which is made based on the stop time-table for each bus. So if a bus comes late the apps failed to show the realtime status of a bus, which stresses a passenger. Additionally, original apps loaded with too many features that requires a lot of time to search for any line, especially if you don't know the line number(e.g. tourist) then it is very hard to find immediately a line information. Sometimes, network latency and internet cut off affect the devices installed in bus stop to display the incoming lines.

Features
=============
* ***This map shows bus (line) in a chosen route with a popup including line number, origin and destination***
* ***Map refresh every 15 seconds automatically to provide the most up to date location of a line***
* ***Quick change of a line number from the dropdown list, map refresh immediately. Let users quickly find a line info***
* ***Extendable to support arrival time to a given location, corresponding to the current location of a line***

Data Source
=============
* ***Weblink: [Foli](https://www.foli.fi/)***
* ***API: [Foli API](https://data.foli.fi/doc/index)***

Architecture
=============
Single page standalone application with ..
* ***React***
* ***Node.js***
* ***Material-UI***
* ***Express.js***
* ***Webpack***
