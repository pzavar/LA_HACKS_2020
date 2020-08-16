import React, { Component } from 'react';
import { Card, Row, Col, Modal, Form, Button, Spinner, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { usersActions } from '../../Redux/Actions/UserActions';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {connect} from 'react-redux';



/*
                Props
    -------------------------------------
    name                description
    -------------------------------------
    id                  card className
    mealNum             meal number
    mealType            meal type
    label               recipe title
    image               img source
    source              recipe source
    summary             summary of meal
    servings            servings number
    price               price of meal
    readyInMinutes      total time to prepare
    calories            meal calories
    carbs               meal carbs
    fat                 meal fat
    protein             meal protein
    cholestral
    sugar
    sodium
*/

const schema = Yup.object().shape({
    email: Yup.string().email("Please enter an appropiate email.").required("Please enter an appropiate email."),
});


class HorizontalMealCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waitlistModalShow: false,
            detailMealModalShow: false,
        }
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

    removeTags(str) {
        if ((str === null) || (str === '')) {
            return false;
        }
        else {
            str = str.toString();
            return str.replace( /(<([^>]+)>)/ig, '');
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <Card id={this.props.id}>
                    <Row noGutters >
                        <Col xs={3}  className="horizontal-icon-wrapper" onClick={() => this.setState({detailMealModalShow: true})}>
                            <img src={this.props.image} className="horizontal-meal-card-img" alt="Meal Pic"/>
                        </Col>
                        <Col onClick={() => this.setState({detailMealModalShow: true})}>
                                <Card.Title className="meal-card-title" id="horizontal-meal-card-meal-num">Meal {this.props.mealNum}: {this.props.mealType}</Card.Title>
                                <Card.Body>
                                    <Card.Title className="meal-card-title">{this.props.label}</Card.Title>
                                    <Card.Subtitle className="meal-card-subtitle">{this.props.source}</Card.Subtitle>
                                    <Card.Text  className="meal-card-text">
                                        Price: ${this.props.price} <br/>
                                        Servings: {this.props.servings} <br/>
                                        Calories: {Number.parseFloat(this.props.calories).toFixed(0)} <br/>
                                    </Card.Text>
                                </Card.Body>
                        </Col>
                        <Col xs={2} className="horizontal-icon-wrapper">
                                <FontAwesomeIcon onClick={() => this.setState({waitlistModalShow: true})} icon={faHeart} id="horizontal-icon"/>
                        </Col>
                    </Row>
                </Card>


                {/* Detailed Meal Information Modal */}
                <Modal
                    show={this.state.detailMealModalShow}
                    onHide={() => this.setState({detailMealModalShow: false})}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="BodyFont" id="meals-option-modal-title">{this.props.label}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={5} id="meals-option-modal-img-wrapper">
                                <a href={this.props.url} id="week-img"><img src={this.props.image} id="meals-option-modal-img" alt="Meal Pic"/></a>
                            </Col>
                            <Col>
                                <p className="BodyFont" id="meals-option-modal-summary">{this.removeTags(this.props.summary)}</p>
                                <p className="BodyFont" id="meals-option-modal-body">
                                    Servings: {this.props.servings} <br />
                                    Price per Serving: ${this.props.price} <br/>
                                    Total Time: {this.props.readyInMinutes} mins <br/>
                                    Calories: {this.props.calories} <br/>
                                    Carbs: {this.props.carbs} <br/>
                                    Protein: {this.props.protein} <br/>
                                    Fat: {this.props.fat} <br/>
                                    Cholestral: {this.props.cholestral} <br/>
                                    Sodium: {this.props.sodium} <br/>
                                    Sugar: {this.props.sugar} <br/>
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.setState({detailMealModalShow: false})}>Close</Button>
                    </Modal.Footer>
                </Modal>

                {/* Waitlist Modal */}
                <Modal
                    show={this.state.waitlistModalShow}
                    onHide={() => this.setState({waitlistModalShow: false})}
                    centered
                >
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <h1 className="BodyFont" id="custom-feedback-title">Feature coming soon! </h1>
                        <h1 className="BodyFont" id="custom-feedback-title">Sign up on our waitlist for updates on product release!</h1>
                        <Formik
                        validationSchema={schema}
                        initialValues={{email: ""}}
                        onSubmit={(values) => {
                            this.props.signUp(values.email)
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
                            <Form.Control 
                                type="email"
                                name="email"
                                placeholder="Enter email" 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.email && !errors.email}
                                className={touched.email && errors.email ? "landing-email-error BodyFontD" : "BodyFontD FormBox" }
                            />
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
                    </Modal.Body>
                    <Modal.Footer>
                        <div />
                    </Modal.Footer>
                </Modal>

        </React.Fragment>
        )
    }
}

function mapStateToProps (state) {
    const { emailSignUpLoading, emailSignUpSuccess, emailSignUpError} = state.user;

    return {emailSignUpLoading, emailSignUpSuccess, emailSignUpError}
}

const actionCreators = {
    signUp: usersActions.signUpWaitlist,
}

export default connect(mapStateToProps, actionCreators)(HorizontalMealCard);

/*
                <Modal
                    show={this.state.waitlistModalShow}
                    onHide={() => this.setState({waitlistModalShow: false})}
                    centered
                >
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <h1 className="BodyFont" id="custom-feedback-title">Feature coming soon! </h1>
                        <h1 className="BodyFont" id="custom-feedback-title">Sign up on our waitlist for updates on product release!</h1>
                        <Form>
                            <Form.Label className="BodyFont" id="custom-feedback-text">Email</Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="Enter email"
                                className="BodyFont"
                                id="custom-feedback-text"
                                style={{marginBottom: '3%'}}
                            />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.setState({waitlistModalShow: false})}>Submit</Button>
                    </Modal.Footer>
                </Modal>



*/