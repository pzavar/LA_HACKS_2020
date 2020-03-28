import React, { component, Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { history } from '../../Utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Landing extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        history.push('/login');
    }

    handleRegister(e) {
        e.preventDefault();
        history.push('/register');
    }

    render() {
        return (
            <Container>
                <Row>
                    <p>Munchies</p>
                </Row>
                <Row>
                    <Col xs={5}>
                        <Button onClick={this.handleLogin}>Login</Button>
                        <Button>Register</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Landing;