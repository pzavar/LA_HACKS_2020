import React, { component, Component } from 'react';
import { Container, Col, Row, Button, Navbar, Nav, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { history } from '../../Utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import { Formik } from 'formik';
import * as yup from 'yup';

import './landing.css';
import '../../Components/Styles/styles.css';


const validSchema = yup.object ({
    email: yup.string()
    .email("Must be a valid email address")
    .max(30, "Email must be less than 30 characters")
    .required("Required"),
    password: yup.string()
    .min(8, "Must be 8 characters")
    .required("Required"),
    passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required("Required")
})


class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            changed: false,
        }
        this.handleLogin = this.handleStart.bind(this);
    }



    handleStart(values) {

        history.push({
            pathname: '/register',
            state: {
                populated: true,
                email: values.email,
                password: values.password
            }
        });
    }

    render() {
        return (
            <Container>
                <NavBarEntry />
                <div className="section-margin"/>
                <Row>
                    <Col xs={8}>
                        <h3 className="title BodyFontC" >Meal planning made easy to ease the munchies</h3>
                        <div className="section-margin" />
                        <p className="BodyFontC">Ready to have a plan?</p>
                        <FontAwesomeIcon className="icon" icon={faCalendarCheck} size="4x" />
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title id="card-title">Get your free plan now!</Card.Title>
                            <Card.Body>
                                <Formik
                                    initialValues = {{email: '', password: '', passwordConfirm: ''}}
                                    onSubmit={ (values, e) => this.handleStart(values, e)}
                                    validationSchema={validSchema}
                                >

                                {({
                                    errors,
                                    touched,
                                    handleChange,
                                    handleSubmit,
                                    values,
                                    handleBlur,
                                }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="Email" className="landing-form-group">
                                            <Form.Label id="landing-form-label">Email</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                placeholder="Enter Email" 
                                                className="BodyFontD landing-form-input"
                                                name="email"
                                                value={values.email}
                                                onChange={ (e) => {
                                                    handleChange(e);
                                                    this.setState({changed: true});
                                                }}
                                                onBlur={handleBlur}
                                                isInvalid={(touched.email && errors.email)}
                                                />
                                            <Form.Control.Feedback type="invalid" id="landing-form-label">{errors.email}</Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="landing-form-group">
                                            <Form.Label id="landing-form-label">Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                placeholder="Enter Password" 
                                                className="BodyFontD landing-form-input"
                                                name="password"
                                                value={values.password}
                                                onChange={ (e) => {
                                                    handleChange(e);
                                                    this.setState({changed: true})
                                                }}
                                                onBlur={handleBlur}
                                                isInvalid={(touched.password && errors.password)}
                                            />
                                            <Form.Control.Feedback type="invalid" id="landing-form-label">{errors.password}</Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="landing-form-group">
                                            <Form.Label id="landing-form-label">Confirm Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                placeholder="Confirm Password" 
                                                className="BodyFontD landing-form-input"
                                                name="passwordConfirm"
                                                value={values.passwordConfirm}
                                                onChange={ (e) => {
                                                    handleChange(e);
                                                    this.setState({changed: true})
                                                }}
                                                onBlur={handleBlur}
                                                isInvalid={(touched.passwordConfirm && errors.passwordConfirm)}
                                                />
                                            <Form.Control.Feedback type="invalid" id="landing-form-label">{errors.passwordConfirm}</Form.Control.Feedback>
                                        </Form.Group>

                                        <Button type="submit" className="landing-submit-btn">Get Started</Button>
                                    </Form>
                                )}
                                </Formik>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <footer>
                    <p id="attribution">Icon made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></p>
                 </footer>
               
            </Container>

        )
    }
}

export default Landing;