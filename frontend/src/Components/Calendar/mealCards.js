import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './calendar.css';

/*
    props:
        url
        image
        label
        source
        yield
        calories
        healthLabels

*/

export default class MealCards extends Component {
    render() {
        return (
            <Card>
                <a href={this.props.url}> <Card.Img variant="top" src={this.props.image}/> </a>
                <Card.Body>
                    <Card.Title className="BodyFontB">{this.props.label}</Card.Title>
                    <Card.Subtitle  className="BodyFont">{this.props.source}</Card.Subtitle>
                        <Card.Text  className="BodyFont">
                            Servings: {this.props.yield} <br />
                            Calories: {Number.parseFloat(this.props.calories).toFixed(1)}
                        </Card.Text>
                </Card.Body>
                <Card.Footer  className="BodyFont">
                    <div className="tag-wrapper">
                        {this.props.healthLabels.map((label, i) => (
                            <p key={i} className="tag-item">{label}</p>
                        ))}
                    </div>
                </Card.Footer>
            </Card>
        )
    }
}
