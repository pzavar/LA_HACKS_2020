import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

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
                <Card.Img />
                <Card.Body>
                    <Card.Title className="BodyFontB">{this.props.label}</Card.Title>
                    <Card.Subtitle  className="BodyFont">{this.props.source}</Card.Subtitle>
                        <Card.Text  className="BodyFont">
                            Servings: {this.props.yield} {"\n"}
                            Calories: {this.props.calories}
                        </Card.Text>
                </Card.Body>
                <Card.Footer  className="BodyFont">
                    <div className="tag-wrapper">
                        {this.props.healthLabels.map(label => (
                            <p className="tag-item">{label}</p>
                        ))}
                    </div>
                </Card.Footer>
            </Card>
        )
    }
}
