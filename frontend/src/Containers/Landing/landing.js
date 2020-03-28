import React, { component, Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Landing extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <p>Munchies</p>
                </Row>
                <Row>
                    <Col xs={5}>
                        <Button>Login</Button>
                        <Button>Register</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Landing;