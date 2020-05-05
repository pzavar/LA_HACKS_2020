import React, { Component } from 'react';
import { Container, Col, Row, Button, Card, Form, Jumbotron } from 'react-bootstrap';
import { history } from '../../Utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUser, faEdit, faLaughBeam, faShoppingCart, faExchangeAlt, faInfoCircle, faHeart} from '@fortawesome/free-solid-svg-icons';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import { Formik } from 'formik';
import * as yup from 'yup';
import {url} from '../../Utils/url';

import { Daily } from '../../Components/Calendar/daily';

import { authActions } from '../../Redux/Actions/AuthActions';
import {connect} from 'react-redux';

import GoogleIcon from '../../Icons/Google';

import './landing.css';
import '../../Components/Styles/styles.css';
import { dummyData } from '../../Redux/Reducers/dummy';
import { Link } from 'react-router-dom';


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
        this.handleGoogleSignUp = this.handleGoogleSignUp.bind(this);
    }

    howItWorks() {

        return(
            <React.Fragment>

            
            </React.Fragment>
        )
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

    handleGoogleSignUp() {
        this.props.login('GOOGLE')
    }

    render() {
        return (
            <Container>
                <NavBarEntry />
                <div className="section-margin"/>
                <Row>
                    <Col xs={8} style={{marginTop: '10%'}}>
                        <h1 className="BodyFontC" id="landing-title-font">Meal planning automated to satisfy the Munchies</h1>
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

                                <div className="divider">OR</div>
                                <div className="google-button-wrapper">
                                    <a href={`${url}/auth/google`} className="google-button" id="landing-google-btn"><GoogleIcon width="40px" height="40px" style={{marginRight:'12px'}}/><p id="google-button-txt">Sign up with Google</p></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <div style={{marginTop: '15%', marginBottom: '15%'}}/>
        

                <Jumbotron fluid>
                <Row >
                    <Col md={{span: 4, offset: 4}}>
                    <h1 className="BodyFontC" id="landing-subtitle-font">HOW IT WORKS</h1>
                    </Col>
                </Row>   
                <Row className="feature-wrapper" id="landing-how-it-works">
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faUser} />
                        <h1 className="BodyFontC" id="landing-step-text">Step 1</h1>
                        <h2 className="title BodyFontC">Register Account</h2>
                        <p className="landing-small-text-font">Enter your information to create a customized meal plan linked to your account.</p>

                    </Col>
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faEdit} />
                        <h1 className="BodyFontC" id="landing-step-text">Step 2</h1>
                        <h2 className="title BodyFontC">Diet Preferences</h2>
                        <p className="landing-small-text-font">Enter your diet preferences to cater your specific dietary needs. Examples include allergies, target calories, or vegan.</p>

                    </Col>
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faLaughBeam} />
                        <h1 className="BodyFontC" id="landing-step-text">Step 3</h1>
                        <h2 className="title BodyFontC">Enjoy</h2>
                        <p className="landing-small-text-font">Finally, enjoy our heavy lifting in generating your cutomized meal plan. </p>

                    </Col>
                </Row>
                </Jumbotron>

                {/* Sample Meals */}

                <Row>
                    <Col md={{span: 4, offset: 4}} >
                        <h1 className="BodyFontC" id="landing-subtitle-font">Sample Meals</h1>
                    </Col>
                </Row>   
                <Row className="feature-wrapper" id="landing-sample-meals-wrapper">
                    <Daily daily={this.props.sampleMeals} />
                </Row>
                
                {/* WHY */}
                <Jumbotron fluid>
                <Row >
                    <Col md={{span: 4, offset: 4}} >
                        <h1 className="BodyFontC" id="landing-subtitle-font">WHY</h1>
                    </Col>
                </Row>   
                <Row className="feature-wrapper">
                    <Col>
                    <FontAwesomeIcon className="landing-icon" icon={faHeart} />
                        <h1 className="title BodyFontC">Favorite Meals</h1>
                        <p className="landing-small-text-font">Liked a meal you just had? Add it to your favorites and our meal generator engine will learn from your favorites to get the best meals to fit your taste buds.</p>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faShoppingCart} />
                        <h1 className="title BodyFontC">Grocery List</h1>
                        <p className="landing-small-text-font">Save time with an auto generated grocery list that has all the ingredients needed for the week.</p>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faExchangeAlt} />
                        <h1 className="title BodyFontC">Swap Meals</h1>
                        <p className="landing-small-text-font">Don't like a meal in your plan? Easily search for a recipe and swap with an existing meal on your plan.</p>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faInfoCircle} />
                        <h1 className="title BodyFontC">Nutrient Information</h1>
                        <p className="landing-small-text-font">All meals come with nutrient information such as calories and protein amounts. There is also a nutrition card that displays the daily and weekly nutrition and macro info.</p>
                    </Col>

                </Row>
                </Jumbotron>

                {/*Try Now Button*/}
                <Row style={{marginTop: '10%', marginBottom: '10%'}}>
                    <Col md={{span: 6, offset: 3}} >
                    <Link to='/register'><Button id="landing-page-body-btn">TRY NOW</Button></Link>
                    </Col>
                </Row> 
        


                <footer>
                    <p id="attribution">Icon made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></p>
                 </footer>
               
            </Container>

        )
    }
}

function mapStateToProps (state) {
    const sampleMeals = dummyData.dummyMeals.slice(0,3)

    return {sampleMeals}
}

const actionCreators = {
    login: authActions.login,
}

export default connect(mapStateToProps, actionCreators)(Landing);