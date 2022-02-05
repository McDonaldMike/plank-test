import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;

`

function CardList() {
    const [caseStudies, setCaseStudies] = useState(null);
    const currentCategory = useParams().category;

    // fetch case studies 
    useEffect(() => {
        axios.get("https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies")
            .then(response => setCaseStudies(response.data["case-studies"]))

    }, [])

    // render list of cards
    const createCards = (data) => {
        return data.map((caseStudy) => {
            if (!currentCategory || caseStudy.categories[0].slug === currentCategory) {
                return (
                    <Card
                        key={caseStudy.id}
                        image={caseStudy.thumbnail}
                        title={caseStudy.title}
                        description={caseStudy.excerpt}
                        category={caseStudy.categories[0].title}
                        link={caseStudy.link}
                    />
                )
            } else {
                return null
            }
        })
    }

    return (
        <Container >
            {caseStudies && createCards(caseStudies)}
        </Container>
    );
}

export default CardList;