import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class DietPref extends Component {
    render() {
        return (
            <Form className={this.props.className}>
                <Form.Check
                    custom
                    type='radio'
                    name="Diet"
                    id='balancedDiet'
                    label='Balanced Diet (Protein/Fat/Carb values in 15/35/50 ratio)'
                    value="balanced"
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='radio'
                    name="Diet"
                    id='highFiber'
                    label='High Fiber (More than 5g fiber per serving'
                    value="high-fiber"
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='radio'
                    name="Diet"
                    id='highProtein'
                    label='High Protein (More than 50% of total calories from proteins)'
                    value="high-protein"
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='radio'
                    name="Diet"
                    id='lowCarb'
                    label='Low-Carb (Less than 20% of total calories from carbs)'
                    value='low-carb'
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                    className="BodyFontD"
                />
                <Form.Check
                custom
                    type='radio'
                    name="Diet"
                    id='lowFat'
                    label='Low-Fat (Less than 15% of total calories from fat)'
                    value='low-fat'
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                    className="BodyFontD"
                />
                <Form.Check
                custom
                    type='radio'
                    name="Diet"
                    id="lowSodium"
                    label='Low-Sodium (Less than 140mg Na per serving)'
                    value='low-sodium'
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                    className="BodyFontD"
                />
            </Form>
        )
    }
}
