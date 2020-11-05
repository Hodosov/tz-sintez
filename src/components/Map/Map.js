import React, { useState } from 'react';
import MapGL, { Marker, Popup } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeViewPortActionCreator } from '../../redux/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoieWFyb3NsYXZob2Rvc292IiwiYSI6ImNraDBsYW41MDA1eWUyeHNpZmdlZjRkeDgifQ.XZpUBBMGhaZA7XbTTv22Zw'

export const Map = () => {

    const [showPopup, setShowPopup] = useState(null)

    const dispatch = useDispatch()
    const viewport = useSelector(state => state.viewport)
    const markers = useSelector(state => state.markers)

    const changeViewPort = e => {
        dispatch(changeViewPortActionCreator(e))
    }

    const openPopup = (index) => {
       setShowPopup(index)
    }

    const closePopup = () => {
        setShowPopup(false)
        return true
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
            onClick={() => setShowPopup(false)}
        >
            {markers.map((el, index) => <Marker                
                key={index}
                latitude={el.latitude}
                longitude={el.longitude}
            >
                <FontAwesomeIcon
                    onMouseMove={() => openPopup(index)}
                    onMouseOut={closePopup}
                    color='#63a883'
                    size="4x" icon={faMapMarkerAlt}
                />
                {showPopup === el.id &&
                <Popup
                    longitude={el.longitude}
                    latitude={el.latitude}
                >
                    {el.title}
                </Popup>}

            </Marker>)}
        </MapGL>
    )
}