import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

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
    render() {
        return (
            <Card className="meal-card">
                <a href={this.props.url}> <Card.Img variant="top" src={this.props.image} className="meal-card-img"/> </a>
                <Card.Body>
                    <Card.Title className="meal-card-title">{this.props.label}</Card.Title>
                    <Card.Subtitle  className="meal-card-subtitle">{this.props.source}</Card.Subtitle>
                    <Card.Text  className="meal-card-summary"> {this.props.summary}</Card.Text>
                        <Row>
                        <Col>
                        <Card.Text  className="meal-card-text">
                            Price per Serving: ${this.props.pricePerServing}.00 <br/>
                            Time: {this.props.readyInMinutes} mins<br />
                            Servings: {this.props.servings} <br/>
                            Calories: {Number.parseFloat(this.props.calories).toFixed(1)} <br/>
                            Protein: {this.props.protein} g<br/>
                            Fat: {this.props.fat} g<br/>
                            Carbs: {this.props.carbs} g<br />
                        </Card.Text>
                        </Col>
                        <Col xs={3} id="meal-card-icon-wrapper">
                            <FontAwesomeIcon icon={faHeart} className="meal-card-icon" id="vertical-meal-card-icon"/>
                        </Col>
                        </Row>
                </Card.Body>
            </Card>
        )
    }
}
