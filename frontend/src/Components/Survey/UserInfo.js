import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

export default class UserInfo extends Component {


    render() {
        return (
            <Form>
                <Form.Group controlId="email">
                    <Form.Label className="BodyFontB">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name="email"
                        value={this.props.email}
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                </Form.Group>
                <Form.Group controlId="mealsPerWk">
                    <Form.Label className="BodyFontB">No. Meals per Day</Form.Label>
                    <Form.Control 
                        as="select" 
                        custom
                        value={this.props.mealsPerDay}
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="budget">
                    <Form.Label className="BodyFontB">Daily Budget</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="budgetPrepend" className="BodyFontD" style={{paddingTop:3, paddingBottom:3,}}>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                            type="number"
                            placeholder="0"
                            min="0"
                            name="budget"
                            value={this.props.budget}
                            onChange={this.props.handleChange}
                            className="BodyFontD"
                        />
                    </InputGroup>
                </Form.Group>


            </Form>
        )
    }
}


/*
                <Form.Group controlId="name">
                    <Form.Label className="BodyFontB">Full Name</Form.Label>
                    <Form.Control 
                        type="string" 
                        name="name"
                        placeholder="Enter full name" 
                        value={this.props.name}
                        onChange={this.props.handleChange}/>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label className="BodyFontB">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password"
                        name="password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                        />
                </Form.Group>


*/