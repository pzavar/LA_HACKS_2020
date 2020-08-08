import React, { Component } from 'react';
import { Card, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'


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


export default class HorizontalMealCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waitlistModalShow: false,
            detailMealModalShow: false,
        }
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
        </React.Fragment>
        )
    }
}

