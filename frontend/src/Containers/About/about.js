import React, { Component } from 'react';
import { Container, Col, Row, Button, Card, Form } from 'react-dom'
import { history } from '../../Utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import { Formik } from 'formik';
import * as yup from 'yup';
import {url} from '../../Utils/url';

import { authActions } from '../../Redux/Actions/AuthActions';
import {connect} from 'react-redux';

import GoogleIcon from '../../Icons/Google';

import './about.css';
import '../../Components/Styles/styles.css';


class About extends Component {
    constructor(props) {
        super(props);

        this.render() {
            return (
                <Container>
                    <NavBarEntry />
                    <div classname="section-margin" />
                    <Row>
                        <Col xs={12}>
                            <h3 className="title BodyFontC">About Us</h3>
                            <div className="section-margin" />
                            <h5>
                                <p>
                                    Munchies was founded by a group of like-minded UCLA students who always seemed to not have enough time to eat good meals at home while on a budget. Being busy with school and work, we imagined a product that could not only help us in the kitchen, but could also handle the budgeting and grocery cost management. Our health is at the core of our values, and we realized that eating at home did not have to be difficult if planned well. This drove us to establish Munchies as your personal food-assistant presenting a wide range of recipes and their macro calculations, while also finding you the best grocery deals in your area, because we believe that eating well at home does not have to be neither difficult nor expensive!
                                </p>
                            </h5>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }

}