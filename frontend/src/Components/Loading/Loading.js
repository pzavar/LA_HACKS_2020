import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../Styles/styles.css';

export default function Loading() {
    return (
        <div className="centered">
            <Spinner animation="grow" variant="success" style={{'animationDelay': '0.6s', 'animationDuration': '2.1s'}} />
        </div>
    )
}
