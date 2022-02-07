import React, { useState, useEffect } from 'react'
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
    padding-bottom: 133px;    
`

const Message = styled.p`
    font-family: 'Roboto',sans-serif;
    font-size: 32px;
    font-weight: 700;
    width: 70%;
    line-height: 46px;
    max-width: 860px;
`


function CardList(props) {
    const { category } = props;
    const [caseStudies, setCaseStudies] = useState(null);

    // fetch case studies 
    useEffect(() => {
        axios.get("https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies")
            .then(response => setCaseStudies(response.data["case-studies"]))
    }, [])

    // render list of cards
    const createCards = (data) => {
        const list = data.map((caseStudy) => {
            if (!category || caseStudy.categories[0].slug === category) {
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

        // if no cards match the filter, show message        
        if (list.every((item) => { return !item })) {
            return (<Message>Oops! we don't have anything to show you in this category... but we're working on it!</Message>)
        }
        else {
            return list
        }
    }

    return (
        <Container>
            {caseStudies && createCards(caseStudies)}
        </Container>
    );
}

export default CardList;