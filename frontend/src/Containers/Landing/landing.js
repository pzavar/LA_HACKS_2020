import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, Jumbotron, InputGroup, Spinner } from 'react-bootstrap';
import { history } from '../../Utils/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faInfoCircle, faList, faHandPointer, faDollarSign, faMoneyBillWaveAlt} from '@fortawesome/free-solid-svg-icons';
import NavBarEntry from '../../Components/Navigation/navBarEnty';

import { Daily } from '../../Components/Calendar/daily';
import {connect} from 'react-redux';

import './landing.css';
import '../../Components/Styles/styles.css';
import { dummyData } from '../../Redux/Reducers/dummy';
import { Link } from 'react-router-dom';

import CustomFooter from '../../Components/Navigation/Footer';
import { usersActions } from '../../Redux/Actions/UserActions';
import { Formik } from 'formik';
import * as Yup from 'yup';


const schema = Yup.object().shape({
    email: Yup.string().email("Please enter an appropiate email.").required("Please enter an appropiate email."),
})

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            changed: false,
        }

    }

    handleStart(values) {
        history.push({
            pathname: '/register'});
    }

    handleEmailSubmit(email) {
        this.props.signUp(email)
    }

    loading() {
        return(
            <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
        )
    }

    render() {
        return (
            <Container>
                <NavBarEntry />
                <div className="section-margin"/>
                <Row>
                    <Col md={{span: 8, offset: 2}} style={{marginTop: '10%'}}>
                        <h1 className="BodyFontC" id="landing-title-font">Having a hard time finding a meal plan within your budget? <br/> </h1>
                        
                    {/*Try Now Button*/}
                    <Row style={{marginTop: '15%'}}>
                        <Col md={{span: 6, offset: 3}} >
                        <Link to='/register'><Button id="landing-page-body-btn">TRY NOW</Button></Link>
                        </Col>
                    </Row> 

                    </Col>
                </Row>


                <div style={{marginTop: '15%', marginBottom: '15%'}}/>
        
                {/* How It Works Section */}
                <Jumbotron fluid>
                <Row >
                    <Col md={{span: 4, offset: 4}}>
                    <h1 className="BodyFontC" id="landing-subtitle-font">HOW IT WORKS</h1>
                    </Col>
                </Row>   
                <Row className="feature-wrapper" id="landing-how-it-works">
                    {/* Step 1 */}
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faDollarSign} />
                        <h1 className="BodyFontC" id="landing-step-text">Step 1</h1>
                        <h2 className="title BodyFontC">Budget</h2>
                        <p className="landing-small-text-font">Enter your daily food budget and diet preferences.</p>

                    </Col>

                    {/* Step 2 */}
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faHandPointer} />
                        <h1 className="BodyFontC" id="landing-step-text">Step 2</h1>
                        <h2 className="title BodyFontC">Select Meal Option</h2>
                        <p className="landing-small-text-font">Select one of 3 different meal options of different dollar amounts.</p>

                    </Col>

                    {/* Step 3 */}
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faShoppingCart} />
                        <h1 className="BodyFontC" id="landing-step-text">Step 3</h1>
                        <h2 className="title BodyFontC">Add to Grocery Cart</h2>
                        <p className="landing-small-text-font">Print your grocery list for your meal options or checkout with a partner grocery delivery service.</p>

                    </Col>
                </Row>
                </Jumbotron>

                {/* Sample Meals */}
                <Row style={{marginTop: '12%'}}>
                    <Col md={{span: 4, offset: 4}} >
                        <h1 className="BodyFontC" id="landing-subtitle-font">Sample Meals</h1>
                    </Col>
                </Row>   
                <Row className="feature-wrapper" id="landing-sample-meals-wrapper" style={{marginBottom: '12%'}}>
                    <Daily daily={this.props.sampleMeals} />
                </Row>
                
                {/* WHY */}
                <Jumbotron fluid>
                <Row >
                    <Col md={{span: 4, offset: 4}} >
                        <h1 className="BodyFontC" id="landing-subtitle-font">WHY FORK & SPATULA</h1>
                    </Col>
                </Row>   
                <Row className="feature-wrapper" >
                    <Col>
                    <FontAwesomeIcon className="landing-icon" icon={faMoneyBillWaveAlt} />
                        <h1 className="title BodyFontC">Budget Oriented</h1>
                        <p className="landing-small-text-font">Unlike other meal planning services, we don't put your budget in an overarching "budget-friendly" category. We work with your actual budget to provide you delicious meals.</p>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faShoppingCart} />
                        <h1 className="title BodyFontC">Grocery List</h1>
                        <p className="landing-small-text-font">Save time with an auto generated grocery list that has all the ingredients needed to cook all meals. Checkout with one of our grocery delivery service partners for added conveniance.</p>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faList} />
                        <h1 className="title BodyFontC">Meal Variety</h1>
                        <p className="landing-small-text-font">We offer thousands of recipes to match anyone's budget and dieatry preferences. So your goto top ramen meals are behind you!</p>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="landing-icon" icon={faInfoCircle} />
                        <h1 className="title BodyFontC">Nutrient Information</h1>
                        <p className="landing-small-text-font">All meals come with nutrient information such as calories and protein amounts. There is also a nutrition card that displays the daily and weekly nutrition and macro info.</p>
                    </Col>

                </Row>
                </Jumbotron>

                {/*Try Now Button*/}
                <Row style={{marginTop: '15%', marginBottom: '15%'}}>
                    <Col md={{span: 6, offset: 3}} >
                    <h1 className="BodyFontC" id="landing-subtitle-font" style={{marginBottom:'15%'}}>Ready to give it a try?</h1>
                    <Link to='/register'><Button id="landing-page-body-btn">TRY NOW</Button></Link>
                    </Col>
                </Row> 

                {/* Join Mailing List */}
                <Jumbotron>
                <Row>
                    <Col md={{span: 6, offset: 3}} >
                        <Formik
                            validationSchema={schema}
                            initialValues={{email: ""}}
                            onSubmit={(values) => {
                                this.handleEmailSubmit(values.email)
                            }}
                        >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            errors
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <InputGroup>
                                <Form.Label className="BodyFontC" id="landing-email-label">Join our waitlist for updates on  full product release!</Form.Label>
                                <Form.Control 
                                    type="email"
                                    name="email"
                                    placeholder="Enter email" 
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.email && !errors.email}
                                    className={touched.email && errors.email ? "landing-email-error BodyFontD" : "BodyFontD" }
                                    id="landing-email-input-box"/>
                                <InputGroup.Append>
                                    <Button id="landing-page-email-submit" type="submit" disabled={this.props.emailSignUpLoading}> {this.props.emailSignUpLoading ? (this.loading()) : "Submit"}</Button>
                                </InputGroup.Append>
                                </InputGroup>
                                {touched.email && errors.email ? (
                                    <div id="landing-email-error-msg">{errors.email}</div>
                                ): null}
                                { this.props.emailSignUpSuccess ? (
                                    <div id="landing-email-success-msg">Email added!</div>
                                ) : null
                                }
                                { this.props.emailSignUpError ? (
                                    <div id="landing-email-error-msg">Error adding email. Try again later!</div>
                                ) : null
                                }
                                
                            </Form>
                        )}
                        </Formik>
                        <div id="landing-email-wrapper" />
                    </Col>
                </Row>
                <CustomFooter />
                </Jumbotron>
            </Container>
        )
    }
}

function mapStateToProps (state) {
    const sampleMeals = dummyData.dummyMeals.slice(0,3)
    const { emailSignUpLoading, emailSignUpSuccess, emailSignUpError} = state.user;

    return {sampleMeals, emailSignUpLoading, emailSignUpSuccess, emailSignUpError}
}

const actionCreators = {
    signUp: usersActions.signUpWaitlist,
}

export default connect(mapStateToProps, actionCreators)(Landing);