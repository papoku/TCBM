Turku City Bus Real Time Mapping
# Turku City Bus Real Time Mapping
Author: Pongku Kumar Paul
Date: April-2019

Link to the landing page: [Turkucitybus](https://turkucitybus.netlify.com/)

Overview
=============
Turkucitybus application maps real time location of buses(line) in map. Watcing the real time location of buses in map, passenger can be sure about the status of the incoming bus for any given route. 

Use cases
=============
The apps that built by bus company doesn't provide any real time location of bus rather only the probavable time to arrive in a stop, which is made baed on the stop time-table for each bus. So if a bus comes late the apps failed to show the realtime status of a bus, which stresses a passenger. Additionally, original apps loaded with too many features that requires a lot of time to search for any line, especially if you don't know the line number then it is very hard to find immediately a line information. Sometimes, network latency and internet cut off affect the deveices installed in bus stop to display the incoming lines.

Features
=============
* ***This map shows bus (line) in a chosen route with a popup including line number, origin and destination***
* ***Refresh the map every 15 seconds to provide the most up to date location of a line***
* ***Quick change of line number including the origin, destination details from the dropdown list, map refresh immediately. Let user quickly find a line info***
* ***Extendable to suuport arrival time to a given location corresponding to the current location***

Data Source
=============
Weblink: [Foli](https://www.foli.fi/)
API: [Foli API](https://data.foli.fi/doc/index)

Architecture
=============
Single page standalone application with ..
* ***React***
* ***Node.js***
* ***Material-UI***
* ***Express.js***
* ***Webpack***
