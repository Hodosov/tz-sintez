import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { setStartZoomActionCreator } from '../../redux/reducer'
import { MarkerCard } from './MarkerCard'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 170px;
    height: 100%;
    background: #56d6a1;
`
const NavWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Button = styled.button`
    height: 40px;
    background: #447a5d;
    border-radius: 10px;
    color: #fff;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`

export const NavBar = () => {

    const dispatch = useDispatch()
    const markerTitle = useSelector(state => state.markers)

    const setStartZoom = () => {
        dispatch(setStartZoomActionCreator())
    }

    return (
        <Wrapper>
            <NavWrapper>
                <StyledLink to='about'>About</StyledLink>
                <Button onClick={setStartZoom}>start position</Button>
            </NavWrapper>
            <div>
                {markerTitle.map((el, index) => <MarkerCard 
                key={index} data={el} />)}
            </div>
        </Wrapper>
    )
}