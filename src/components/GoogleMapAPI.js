import React, { Component } from 'react';
import { getShape, getTrip, getVehicleLocation } from '../helpers/helpers';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
delete L.Icon.Default.prototype._getIconUrl;

// manually binding the icons path, lost the original path
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// extend layer class to open all popup
L.Map = L.Map.extend({
    openPopup: function (popup) {
        this._popup = popup;
        return this.addLayer(popup).fire('popupopen', {
            popup: this._popup
        });
    }
});

const style = {
    width: "100%",
    height: "450px"
};

/* 
Deliver map with chosesn line's route and 
active loaitons
*/
class GoogleMapAPI extends Component {

    componentDidMount() {
        // create map
        this.map = L.map("map", {
            center: [60.4518, 22.2666],
            zoom: 16,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });

        // add a default marker
        this.marker = L.marker([60.4518, 22.2666]);
    }

    componentDidUpdate(prevProps) {
        if (this.props.lineNumber !== prevProps.lineNumber) {
            this.clearTimer();
            this.mapCreator();
        }
    }

    // delete time once component unmount
    componentWillUnmount() {
        this.clearTimer();
    }

    // clear any set timer to call function recursively
    clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    // update map according to the new line number received
    mapCreator = () => {
        this.layergroup && this.layergroup.clearLayers();
        getVehicleLocation() // fetch all active lines first from API
            .then(async (jsondata) => {
                const vehicles = jsondata.data.result.vehicles;
                const VehiclRealTimeLocations = [];
                const allMarkers = [];
                const allPopups = [];

                if (vehicles) {
                    for (const vehicle in vehicles) {
                        if (vehicles[vehicle].hasOwnProperty('publishedlinename')) {
                            if (vehicles[vehicle].publishedlinename === this.props.lineNumber) {

                                // mark lines with corresponding coordinates
                                allMarkers.push(L.marker([vehicles[vehicle].latitude, vehicles[vehicle].longitude])
                                    .bindPopup(this.popupContent(vehicles[vehicle].originname, vehicles[vehicle].destinationname), { autoClose: false }));

                                // create a popup sign for each line
                                allPopups.push(L.popup({ keepInView: true, autoClose: false, closeOnClick: false })
                                    .setLatLng([vehicles[vehicle].latitude, vehicles[vehicle].longitude])
                                    .setContent(this.props.lineNumber));

                                VehiclRealTimeLocations.push(vehicles[vehicle]);
                            }
                        }
                    }

                } else
                    throw 'No Vehicles found !!';

                this.marker = allMarkers.length !== 0 ? allMarkers : this.marker;
                this.popUps = allPopups;

                // fetch shape ID of the line
                const routes = await getShape(this.props.routeId);

                if (routes && VehiclRealTimeLocations.length !== 0) {
                    let shapeId = '';
                    for (const route of routes.data) {
                        if (route.trip_id === VehiclRealTimeLocations[0].__tripref) {
                            shapeId = route.shape_id;
                            break;
                        }
                    }
                    return getTrip(shapeId); // fetch the active trip this line has now
                }
                else
                    throw 'No line is active now!!';

            })
            .then((shapes) => {
                // shapes(routes) received for the line, draw in the map
                this.createShape(shapes);
                this.timer = setTimeout(this.mapCreator, 15000);


            })
            .catch((error) => {
                window.dispatchEvent(new CustomEvent('notification', { detail: { message: error } }));
                this.clearTimer();
            }
            );

        //this.timer = setTimeout(this.mapCreator, 15000);

    }

    // Contetnt to show for popup
    popupContent(origin, destination) {
        return `<strong>Line:</strong>${this.props.lineNumber}<br>
        <strong>Origin:</strong>${origin}<br>
        <strong>Destination:</strong>${destination}`;
    }

    // Filter shape coordinates
    createShape(shape) {
        const shapeArray = shape.data.map((coordinates) => {
            return [coordinates.lat, coordinates.lon];
        });

        this.drawShape(shapeArray);
    }

    // draws map
    drawShape(shapeArray) {

        // add pollyline for route
        this.polyline = L.polyline(shapeArray, { weight: 5, stroke: true, smoothFactor: 1, color: 'red' }).addTo(this.map);

        // put all map resosurces in a layergroup to remove at once later
        this.layergroup = L.featureGroup(this.marker)
            .addLayer(this.polyline)
            .addTo(this.map);

        // open all popup added in map
        this.layergroup.eachLayer(function (layer) {
            layer.openPopup();
        });

        // zoom the map to the polyline
        if (!this.timer) {
            this.map.fitBounds(this.layergroup && this.layergroup.getBounds());
        }
    }

    render() {
        return <div id="map" style={style} />;
    }
}

export default GoogleMapAPI;
