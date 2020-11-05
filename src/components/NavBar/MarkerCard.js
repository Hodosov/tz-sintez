import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setMarkerViewPortActionCreator } from '../../redux/reducer'

const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 5px;
    height: 30px;
    background: #447a5d;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    :hover {
        background: #63a883;
    }
`

export const MarkerCard = ({data}) => {

    const dispatch = useDispatch()

    const setZoomMarker = () => {
        const payload = {
            latitude: data.latitude,
            longitude: data.longitude,
            zoom: 5
        }
        dispatch(setMarkerViewPortActionCreator(payload))
    }

    return(
        <CardWrapper onClick={setZoomMarker}>
           {data.title}
        </CardWrapper>
    )
}