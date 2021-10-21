import React from 'react';
import './Map.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px'
};
const center = {
    lat: 23.810331,
    lng: 90.412521
};


const Map = () => {
    return (
        <div className="map-container">
            <h2 className="center">My Google Map</h2>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;