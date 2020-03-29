import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class UserInfo extends Component {


    render() {
        return (
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                        type="string" 
                        name="name"
                        placeholder="Enter full name" 
                        value={this.props.name}
                        onChange={this.props.handleChange}/>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name="email"
                        value={this.props.email}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password"
                        name="password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                        />
                </Form.Group>
            </Form>
        )
    }
}
