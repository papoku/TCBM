
import axios from 'axios';
let latestDataset='';
const API_GTFS_URL = "http://data.foli.fi/gtfs/v0/";
const API_ROUTE_URL = `http://data.foli.fi/gtfs/v0/${latestDataset}/routes`;
const API_SHAPE_URL = `http://data.foli.fi/gtfs/v0/${latestDataset}/trips/route`;
const API_TRIP_URL = `http://data.foli.fi/gtfs/v0/${latestDataset}/shapes`;
const API_VEHICLE_LOCATION_URL = "http://data.foli.fi/siri/vm";

// fetch all active lines information, needs to be sync to show line details to user.
export const getRoutes = async () => {
    try {
        const response = await axios.get(API_GTFS_URL);
        latestDataset = response.data.latest;
    }
    catch (error) {
        alert(`API is not responsding !!\n'${error}`);
    }
    return axios.get(API_ROUTE_URL);
}

// fetch the shape id of a route
export const getShape = (routeId) => {
        return routeId && axios.get(`${API_SHAPE_URL}/${routeId}`);
    }

// fetch all the trips a line has for a day
export const getTrip = (shapeId) => {
    return shapeId && axios.get(`${API_TRIP_URL}/${shapeId}`);
}

// fetch real time coordinates of a line
export const getVehicleLocation = () => {
    return axios.get(API_VEHICLE_LOCATION_URL);

}

