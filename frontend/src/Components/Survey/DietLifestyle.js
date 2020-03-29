import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class DietLifestyle extends Component {
    render() {
        return (
            <Form>
                <Form.Check
                    type='checkbox'
                    name="dp"
                    id='keto'
                    label='Keto (Maximum 7 grams of net carbs per serving)'
                    value="keto-friendly"
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                />
                <Form.Check
                    type='checkbox'
                    name="dp"
                    id='kosher'
                    label='Kosher (contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves)'
                    value="kosher"
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                />
                <Form.Check
                    type='checkbox'
                    name="dp"
                    id='paleo'
                    label='Paleo (Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils)'
                    value='paleo'
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                />
                <Form.Check
                    type='checkbox'
                    name="dp"
                    id='pescatarian'
                    label='Pescatarian (Does not contain meat or meat based products, can contain dairy and fish)'
                    value='pecatarian'
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                />
                <Form.Check
                    type='checkbox'
                    name="dp"
                    id='vegan'
                    label='Vegan (No meat, poultry, fish, dairy, eggs or honey)'
                    value='vegan'
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                />
                <Form.Check
                    type='checkbox'
                    name="dp"
                    id='vegetarian'
                    label='Vegetarian (No meat, poultry, or fish)'
                    value='vegetarian'
                    onChange={this.props.handleChange}
                    style={{marginBottom:5}}
                />

            </Form>
        )
    }
}
