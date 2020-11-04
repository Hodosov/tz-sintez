import React, { useState } from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoieWFyb3NsYXZob2Rvc292IiwiYSI6ImNraDBsYW41MDA1eWUyeHNpZmdlZjRkeDgifQ.XZpUBBMGhaZA7XbTTv22Zw'




export const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 37.78,
        longitude: -122.41,
        zoom: 11
      });

    return(
        <MapGL
  style={{ width: '100%', height: '100%' }}
  mapStyle='mapbox://styles/mapbox/light-v9'
  accessToken={MAPBOX_ACCESS_TOKEN}
  latitude={viewport.latitude}
  longitude={viewport.longitude}
  zoom={viewport.zoom}
  onViewportChange={setViewport}
/>
    )
}