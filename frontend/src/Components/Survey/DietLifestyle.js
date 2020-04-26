import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class DietLifestyle extends Component {
    render() {
        const type = this.props.type;

        if (this.props.api == "spoonacular") {
            return (
                <Form className={this.props.className}>
                    <Form.Check
                        custom
                        type={type}
                        name="diet"
                        id='gluten'
                        label='Gluten Free'
                        value="Gluten Free"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                        custom
                        type={type}
                        name="diet"
                        id='keto'
                        label='Keto'
                        value="Ketogenic"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                        custom
                        type={type}
                        name="diet"
                        id='vegetarian'
                        label='Vegetarian'
                        value="Vegetarian"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                        custom
                        type={type}
                        name="diet"
                        id='lacto-vegetarain'
                        label='Lacto-Vegetarian'
                        value="Lacto-Vegetarian"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="diet"
                        id='ovo-vegetarian'
                        label='Ovo-Vegetarian'
                        value="Ovo-Vegetarian"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="diet"
                        id='vegan'
                        label='Vegan'
                        value="Vegan"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="diet"
                        id='pescetarian'
                        label='Pescetarian'
                        value="Pescetarian"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="diet"
                        id='paleo'
                        label='Paleo'
                        value="Paleo"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="diet"
                        id='Primal'
                        label='Primal'
                        value="Primal"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="diet"
                        id='whole30'
                        label='Whole30'
                        value="Whole30"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                </Form>
            )
        }
        else {
            return (
                <Form className={this.props.className}>
                    <Form.Check
                    custom
                        type={type}
                        name="dp"
                        id='keto'
                        label='Keto (Maximum 7 grams of net carbs per serving)'
                        value="keto-friendly"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="dp"
                        id='kosher'
                        label='Kosher (contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves)'
                        value="kosher"
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="dp"
                        id='paleo'
                        label='Paleo (Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils)'
                        value='paleo'
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="dp"
                        id='pescatarian'
                        label='Pescatarian (Does not contain meat or meat based products, can contain dairy and fish)'
                        value='pecatarian'
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="dp"
                        id='vegan'
                        label='Vegan (No meat, poultry, fish, dairy, eggs or honey)'
                        value='vegan'
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                    <Form.Check
                    custom
                        type={type}
                        name="dp"
                        id='vegetarian'
                        label='Vegetarian (No meat, poultry, or fish)'
                        value='vegetarian'
                        onChange={this.props.handleChange}
                        style={{marginBottom:5}}
                        className="BodyFontE"
                    />
                </Form>
            )
        }
    }
}
