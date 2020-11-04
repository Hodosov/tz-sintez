import React from 'react'
import { NavBar } from './NavBar/NavBar'
import { Map } from './Map/Map'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
`
export const MapPage = () => {
    return(
        <Wrapper>
            <NavBar />
            <Map />
        </Wrapper>
    )
}