import React, { component, Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { history } from '../../Utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

import './landing.css';
import '../../Components/Styles/styles.css';



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
            <div className="page" >
            <Container className="page">
                <Row>
                    <Col>
                        <h1  className="HeaderFont">Munchies</h1>
                        <p className="subtitle" className="BodyFontC" >Meal planning made easy to ease the munchies</p>
                        <FontAwesomeIcon className="icon" icon={faCarrot} size='8x' color='orange' />
                    </Col>
                </Row>
                <Row>   
                    <div id="two-button-group" className="d-flex flex-column ">
                        <Button onClick={this.handleLogin}>Login</Button>
                        <Button onClick={this.handleRegister}>Register</Button>
                    </div>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Landing;