import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import '../../Containers/Register/register.css'

export default class DietRestrict extends Component {
    render() {
        const type = this.props.type;
        
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
                    id='gluten2'
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
    
    }
}
