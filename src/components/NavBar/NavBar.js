import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 170px;
    height: 100%;
    background: #56d6a1;
`

const Button = styled.button`
    height: 40px;
    background: #62a883;
    border-radius: 10px;
    color: #fff;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`

export const NavBar = () => {
    return(
        <Wrapper>
            <StyledLink to='about'>About</StyledLink>
            <Button>start position</Button>
        </Wrapper>
    )
}