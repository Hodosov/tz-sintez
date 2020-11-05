import React from 'react';
import MapGL, { Marker } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeViewPortActionCreator } from '../../redux/reducer';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoieWFyb3NsYXZob2Rvc292IiwiYSI6ImNraDBsYW41MDA1eWUyeHNpZmdlZjRkeDgifQ.XZpUBBMGhaZA7XbTTv22Zw'

const MarkerPoint = styled.div`
      padding: 10px;
        color: #fff;
        cursor: pointer;
        background: #1978c8;
        border-radius: 6px;
`

export const Map = () => {

    const dispatch = useDispatch()
    const viewport = useSelector(state => state.viewport)
    const markers = useSelector(state => state.markers)

    const changeViewPort = e => {
        dispatch(changeViewPortActionCreator(e))
    }

    return (
        <MapGL
            style={{ width: '100%', height: '100%' }}
            mapStyle='mapbox://styles/mapbox/light-v9'
            accessToken={MAPBOX_ACCESS_TOKEN}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            zoom={viewport.zoom}
            onViewportChange={changeViewPort}
        >
            {markers.map((el, index) =>   <Marker
                key={index}
                latitude={el.latitude}
                longitude={el.longitude}
            >
                {/* <MarkerPoint> */}
                    <img alt='' style={{height: '40px'}} src='https://www.clipartmax.com/png/middle/95-954602_google-maps-marker-blue.png' />
                    {/* {el.title} */}
                {/* </MarkerPoint> */}
            </Marker>)}
         
        </MapGL>
    )
}