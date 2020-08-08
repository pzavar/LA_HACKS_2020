import React, { Component } from 'react';
import { Card, Modal, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './calendar.css';

/*
                Props
    -------------------------------------
    name                description
    -------------------------------------
    className           card className
    url                 source url
    label               recipe title
    image               img source
    source              recipe source name
    summary             meal summary
    pricePerServing     price of meal per serving
    readyInMinutes      time to cook
    servings            servings per meal
    calories            meal calories
    carbs               meal carbs
    fat                 meal fat
    protein             meal protein
    addFavMeal          function add fav meal
    removeFavMeal       function remove fav meal

*/

export default class VerticalMealCards extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalShow: false,
        }
    }

    render() {
        return (
            <React.Fragment>
            <Card className="meal-card">
                <a href={this.props.url}> <Card.Img variant="top" src={this.props.image} className="meal-card-img"/> </a>
                <Card.Body>
                    <Card.Title className="meal-card-title">{this.props.label}</Card.Title>
                    <Card.Subtitle  className="meal-card-subtitle">{this.props.source}</Card.Subtitle>
                    <Card.Text  className="meal-card-summary"> {this.props.summary}</Card.Text>
                        <Card.Text  className="meal-card-text">
                            Price per Serving: ${this.props.pricePerServing}.00 <br/>
                            Time: {this.props.readyInMinutes} mins<br />
                            Servings: {this.props.servings} <br/>
                            Calories: {Number.parseFloat(this.props.calories).toFixed(1)} <br/>
                            Protein: {this.props.protein} g<br/>
                            Fat: {this.props.fat} g<br/>
                            Carbs: {this.props.carbs} g<br />
                        </Card.Text>
                </Card.Body>
                <FontAwesomeIcon onClick={() => this.setState({modalShow: true})} icon={faHeart} className="meal-card-icon" id="vertical-meal-card-icon"/>
            </Card>

            <Modal
            show={this.state.modalShow}
            onHide={() => this.setState({modalShow: false})}
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
                    <Button onClick={() => this.setState({modalShow: false})}>Submit</Button>
                </Modal.Footer>
            </Modal>
            </React.Fragment>
        )
    }
}
