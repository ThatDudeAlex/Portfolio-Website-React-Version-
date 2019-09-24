import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BioCard from '../components/BioCard';
import "../css/bio.css"
import BioContact from '../components/BioContact';
import LifeInfo from '../components/LifeInfo';
import PageFooter from '../components/PageFooter';

// Main landing page for my portfolio site 
class Bio extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="bio-background">
                <Container >
                    <p className="text-introduction pt-5 pb-5">
                        HELLO. I’M ALEX, A COMPUTER SCIENCE STUDENT AND MATH TUTOR.<br></br>
                        I'M ALSO THE PROJECT MANAGER OF A TEAM & AN ASPIRING ENTREPRENEUR
                    </p>

                    <BioCard />
                    <BioContact />
                    <LifeInfo />
                </Container>
                <PageFooter />
            </div>
        );
    }
}

export default Bio;