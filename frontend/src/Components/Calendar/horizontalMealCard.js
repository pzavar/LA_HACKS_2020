import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'


/*
                Props
    -------------------------------------
    name                description
    -------------------------------------
    className           card className
    type                for search, favorites, history
    label               recipe title
    image               img source
    source              recipe source
    calories            meal calories
    carbs               meal carbs
    fat                 meal fat
    protein             meal protein
    addFavMeal          function add fav meal
    removeFavMeal       function remove fav meal
    swapMeal            function swapMeal


*/


export default class HorizontalMealCard extends Component {
    render() {
        switch (this.props.type) {
            case 'SEARCH':
                return (
                    <Card className={this.props.className}>
                        <Row noGutters>
                            <Col xs={4}>
                                <img src={this.props.image} className="horizontal-meal-card-img" />
                            </Col>
                            <Col>
                                    <Card.Body>
                                        <Card.Title className="meal-card-title">{this.props.label}</Card.Title>
                                        <Card.Subtitle className="meal-card-subtitle">{this.props.source}</Card.Subtitle>
                                        <Card.Text  className="meal-card-text">
                                            Calories: {Number.parseFloat(this.props.calories).toFixed(0)} <br/>
                                            Carbs: {Number.parseFloat(this.props.carbs).toFixed(0)}g<br/>
                                            Fat: {Number.parseFloat(this.props.fat).toFixed(0)}g<br/>
                                            Protein: {Number.parseFloat(this.props.protein).toFixed(0)}g<br/>
                                        </Card.Text>
                                    </Card.Body>
                            </Col>
                            <Col xs={3} className="horizontal-icon-wrapper">
                                    <FontAwesomeIcon icon={faHeart} className="meal-card-icon" id="horizontal-icon-left"/>
                                    <FontAwesomeIcon icon={faPlus} className="meal-card-icon" id="horizontal-icon-right"/>
                            </Col>
                        </Row>
                    
                    </Card>
                )
            case 'FAVORITES':
                return (
                    <Card className={this.props.className}>
                        <Row noGutters>
                            <Col xs={4}>
                                <img src={this.props.image} className="horizontal-meal-card-img" />
                            </Col>
                            <Col>
                                    <Card.Body>
                                        <Card.Title className="meal-card-title">{this.props.label}</Card.Title>
                                        <Card.Subtitle className="meal-card-subtitle">{this.props.source}</Card.Subtitle>
                                        <Card.Text  className="meal-card-text">
                                            Calories: {Number.parseFloat(this.props.calories).toFixed(0)} <br/>
                                            Carbs: {Number.parseFloat(this.props.carbs).toFixed(0)}g<br/>
                                            Fat: {Number.parseFloat(this.props.fat).toFixed(0)}g<br/>
                                            Protein: {Number.parseFloat(this.props.protein).toFixed(0)}g<br/>
                                        </Card.Text>
                                    </Card.Body>
                            </Col>
                            <Col xs={3} className="horizontal-icon-wrapper">
                                    <FontAwesomeIcon icon={faMinus} className="meal-card-icon" id="horizontal-icon-right" onClick={this.props.removeFavMeal}/>
                            </Col>
                        </Row>
                    
                    </Card>
                )
            default:
                return (
                    <Card className={this.props.className}>
                        <Row noGutters>
                            <Col xs={4}>
                                <img src={this.props.image} className="horizontal-meal-card-img" />
                            </Col>
                            <Col>
                                    <Card.Body>
                                        <Card.Title className="meal-card-title">{this.props.label}</Card.Title>
                                        <Card.Subtitle className="meal-card-subtitle">{this.props.source}</Card.Subtitle>
                                        <Card.Text  className="meal-card-text">
                                            Calories: {Number.parseFloat(this.props.calories).toFixed(0)} <br/>
                                            Carbs: {Number.parseFloat(this.props.carbs).toFixed(0)}g<br/>
                                            Fat: {Number.parseFloat(this.props.fat).toFixed(0)}g<br/>
                                            Protein: {Number.parseFloat(this.props.protein).toFixed(0)}g<br/>
                                        </Card.Text>
                                    </Card.Body>
                            </Col>
                            <Col xs={3} className="horizontal-icon-wrapper">
                                    <FontAwesomeIcon icon={faHeart} id="horizontal-icon-left"/>
                                    <FontAwesomeIcon icon={faPlus} id="horizontal-icon-right"/>
                            </Col>
                        </Row>
                    
                    </Card>
                )
        }
    }
}
