import React, { component, Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { history } from '../../Utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Assets/carrot.png';

import './landing.css';
import '../../Components/Styles/styles.css';



class Landing extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleStart.bind(this);
    }



    handleStart(e) {
        e.preventDefault();
        history.push('/register');
    }

    render() {
        return (
            <div className="page" >
            <Container className="page">
                <Row>
                    <Col>
                        <div className="logo-container">
                            <img id="logo" src={Logo} />
                            <h1  id="logo-font">Munchies</h1>
                        </div>
                        <p className="subtitle" className="BodyFontC" >Meal planning made easy to ease the munchies</p>
                    </Col>
                </Row>
                <Row>   
                    <div id="button" className="d-flex flex-column ">
                        <Button onClick={this.handleStart}>Start</Button>
                    </div>
                </Row>
                <p id="attribution">Icon made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></p>
            </Container>
            </div>
        )
    }
}

export default Landing;