import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import { useEffect, useState } from 'react';
import { useAddress } from './contexts/Addresscontext';

function Map() {
    const [mapPosition, setmapPosition] = useState([51.505, -0.09]);

    const { position: ipLocation } = useAddress();

    useEffect(() => {
        if (ipLocation) {
            setmapPosition([ipLocation.lat, ipLocation.lng]);
        }
    }, [ipLocation]);

    return (
        <div className="h-[100%]">
            <MapContainer
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}
                className="h-[100%]"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <Marker position={mapPosition}>
                    <Popup>
                       Current Ip Address Location <br /> .
                    </Popup>
                </Marker>
                <Changeposition position={mapPosition} />
            </MapContainer>
        </div>
    );
}

export default Map;

function Changeposition({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}
