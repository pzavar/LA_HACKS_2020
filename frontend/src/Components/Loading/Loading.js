import React from 'react';
import { Spinner, Container } from 'react-bootstrap';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import '../Styles/styles.css';

export default function Loading() {
    return (
        <Container>
            <NavBarEntry/>
            <div className="centered">
                <Spinner animation="grow" variant="success" style={{'animationDelay': '0.6s', 'animationDuration': '2.1s'}} />
            </div>
        </Container>

    )
}
