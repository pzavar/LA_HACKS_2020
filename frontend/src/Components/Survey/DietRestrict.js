import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import '../../Containers/Register/register.css'

export default class DietRestrict extends Component {
    render() {
        return (
            <Form className="restriction-form">
                <Form.Check
                    custom
                    type='checkbox'
                    id='alcohol'
                    name="Health"
                    label="Alcohol-free"
                    value="alcohol-free"
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='dairy'
                    name="Health"
                    label="Dairy"
                    value="dairy-free"
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='crustecean'
                    name="Health"
                    label="Crustcean-free"
                    value="crustacean-free"
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='eggs'
                    name='Health'
                    label="Eggs"
                    value="egg-free"
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />    
                <Form.Check
                    custom
                    type='checkbox'
                    id='fish'
                    name='Health'
                    label="Fish"
                    value='fish-free'
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='gluten'
                    name='Health'
                    label="Gluten"
                    value='gluten-free'
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='oil'
                    name='Health'
                    label="No oil added"
                    value='No-oil-added'
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='sugar'
                    name='Health'
                    label="No sugar"
                    value='low-sugar'
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='peanuts'
                    name='Health'
                    label="Peanuts"
                    value='peanut-free'
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='prok'
                    name='Health'
                    label="Pork-Free"
                    value='pork-free'
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='redMeat'
                    name='Health'
                    label="Red meat-free"
                    value='red-meat-free'
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='nuts'
                    name='Health'
                    label="Tree Nuts"
                    value='tree-nut-free'
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
                <Form.Check
                    custom
                    type='checkbox'
                    id='wheat'
                    name='Health'
                    label="Wheat-free"
                    value='wheat-free'
                    onChange={this.props.handleChange}
                    className="BodyFontD"
                />
            </Form>
        )
    }
}



/*
                <Form.Check
                    type='radio'
                    name="dp"
                    id='keto'
                    label='Keto (Maximum 7 grams of net carbs per serving)'
                    value="keto-friendly"
                />
                <Form.Check
                    type='radio'
                    name="dp"
                    id='kosher'
                    label='Kosher (contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves)'
                    value="kosher"
                />

                                <Form.Check
                    type='radio'
                    name="dp"
                    id='paleo'
                    label='Paleo (Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils)'
                    value='paleo'
                />
                <Form.Check
                    type='radio'
                    name="dp"
                    id='pescatarian'
                    label='Pescatarian (Does not contain meat or meat based products, can contain dairy and fish)'
                    value='pecatarian'
                />
                <Form.Check
                    type='radio'
                    name="dp"
                    id='vegan'
                    label='Vegan (No meat, poultry, fish, dairy, eggs or honey)'
                    value='vegan'
                />
                <Form.Check
                    type='radio'
                    name="dp"
                    id='vegetarian'
                    label='Vegetarian (No meat, poultry, or fish)'
                    value='vegetarian'
                />



*/