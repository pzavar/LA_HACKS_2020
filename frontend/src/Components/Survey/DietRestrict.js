import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import '../../Containers/Register/register.css'

export default class DietRestrict extends Component {
    render() {
        const type = this.props.type;
        
        if (this.props.api == "spoonacular") {
            return (
                <Form className={this.props.className}>
                    <Form.Check
                        custom
                        type={type}
                        id='dairy'
                        name="exclude"
                        label="Dairy"
                        value="Dairy"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='egg'
                        name="exclude"
                        label="Egg"
                        value="Egg"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='gluten'
                        name="exclude"
                        label="Gluten"
                        value="Gluten"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='grain'
                        name="exclude"
                        label="Grain"
                        value="Grain"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='peanut'
                        name="exclude"
                        label="Peanut"
                        value="Peanut"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='seafood'
                        name="exclude"
                        label="Seafood"
                        value="Seafood"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='seasame'
                        name="exclude"
                        label="Seasame"
                        value="Seasame"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='shellfish'
                        name="exclude"
                        label="Shellfish"
                        value="Shellfish"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='soy'
                        name="exclude"
                        label="Soy"
                        value="Soy"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='sulfite'
                        name="exclude"
                        label="Sulfite"
                        value="Sulfite"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='tree-nut'
                        name="exclude"
                        label="Tree Nut"
                        value="Tree Nut"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='wheat'
                        name="exclude"
                        label="Wheat"
                        value="Wheat"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                </Form>
            )
        } else {
            return (
                <Form className={this.props.className}>
                    <Form.Check
                        custom
                        type={type}
                        id='alcohol'
                        name="Health"
                        label="Alcohol-free"
                        value="alcohol-free"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='dairy'
                        name="Health"
                        label="Dairy"
                        value="dairy-free"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='crustecean'
                        name="Health"
                        label="Crustcean-free"
                        value="crustacean-free"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='eggs'
                        name='Health'
                        label="Eggs"
                        value="egg-free"
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />    
                    <Form.Check
                        custom
                        type={type}
                        id='fish'
                        name='Health'
                        label="Fish"
                        value='fish-free'
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='gluten2'
                        name='Health'
                        label="Gluten"
                        value='gluten-free'
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='oil'
                        name='Health'
                        label="No oil added"
                        value='No-oil-added'
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='sugar'
                        name='Health'
                        label="No sugar"
                        value='low-sugar'
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='peanuts'
                        name='Health'
                        label="Peanuts"
                        value='peanut-free'
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='prok'
                        name='Health'
                        label="Pork-Free"
                        value='pork-free'
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='redMeat'
                        name='Health'
                        label="Red meat-free"
                        value='red-meat-free'
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
                        id='nuts'
                        name='Health'
                        label="Tree Nuts"
                        value='tree-nut-free'
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                    <Form.Check
                        custom
                        type={type}
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