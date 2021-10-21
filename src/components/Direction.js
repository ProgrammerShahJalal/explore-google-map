import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


const location = {
    lat: 23.810331,
    lng: 90.412521
};

const Direction = ({ origin, destination }) => {
    const [response, setResponse] = useState(null);
    const directionsCallback = res => {
        if (res != null) {
            setResponse(res);
        }
    }
    return (
        <div className="map-container">
            <h2 className="center">Driving Direction</h2>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    id='direction-example'
                    mapContainerStyle={{
                        height: '500px',
                        width: '100%'
                    }}
                    // required
                    zoom={14}
                    // required
                    center={location}
                >

                    <DirectionsService
                        // required
                        options={{
                            origin: origin,
                            destination: destination,
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={directionsCallback}
                    />


                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;
