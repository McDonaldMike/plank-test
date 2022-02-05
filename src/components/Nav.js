import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, BrowserRouter as Router, } from 'react-router-dom'
import axios from 'axios'
import { theme } from "../styles/theme"

const Container = styled.section`
font-family: 'Roboto', sans-serif;
width: 90%;
max-width: 1280px;
margin: 0 auto;

`

const Title = styled.h1`
    margin: 0;
    padding: 81px 0 48px 0;
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 6.85714px;
`

const NavBar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    border-bottom: 2px solid;
    width; 100%;
    padding-bottom: 22px;
    margin-bottom: 25px;


    @media (max-width: 640px) {
        justify-content: space-between;
    }
`

const NavLink = styled(Link)`
    text-transform: uppercase;
    color: ${theme.colors.white};
    text-decoration: none;
    white-space: nowrap;
    border: ${props => props.ishighlighted ? '1px solid' : ""};
    padding: ${props => props.ishighlighted ? '5px 21px;' : '6px 22px'}; ;
    

    :hover {
        border: 1px solid;
        padding: 5px 21px;
    }
`

function Nav(props) {
    const { updateCategory, currentCategory } = props;
    const [categories, setCategories] = useState(null);

    // fetch categories
    useEffect(() => {
        axios.get("https://plankdesign.com/wp-json/plank/v1/fed-test/categories")
            .then(response => setCategories(response.data.categories))
    }, [])

    // render nav buttons
    const createLinks = (data) => {
        return data.map((category) => {
            return <NavLink ishighlighted={currentCategory === category.slug} onClick={() => updateCategory(category.slug)} key={category.slug} to={`${category.slug}`}>{category.title}</NavLink>
        })
    }

    return (
        <Container>
            <Title>WORK</Title>
            <NavBar>
                <Router>
                    <NavLink ishighlighted={!currentCategory} onClick={() => updateCategory(null)} to={`/`}>ALL</NavLink>
                    {categories && createLinks(categories)}
                </Router>
            </NavBar>
        </Container>
    );
}

export default Nav;