import React, { Component } from 'react';
import { Form, InputGroup, Col, Row } from 'react-bootstrap';

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

                <Form.Group controlId="password">
                    <Form.Label className="BodyFontB">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password"
                        name="password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                        className="BodyFontD"
                    />
                </Form.Group>

                <Form.Group controlId="passwordConfirm">
                    <Form.Label className="BodyFontB">Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm password"
                        name="password"
                        value={this.props.password}
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

                <Row style={{marginTop: '5%',}}>
                    <Col>
                        <Form.Group controlId="age-range">
                            <Form.Label className="BodyFontB">Age</Form.Label>
                            <Form.Check
                                custom
                                type='radio'
                                name='age'
                                id="18-24"
                                label='18-24 years old'
                                value="18-24"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="age"
                                id="25-40"
                                label='25-40 years old'
                                value="25-40"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="age"
                                id="41-64"
                                label='41-64 years old'
                                value="41-64"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="age"
                                id="65+"
                                label='65+ years old'
                                value="65+"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="age"
                                id="undisclosed"
                                label='undisclosed'
                                value="undisclosed"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />

                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="occupation">
                            <Form.Label className="BodyFontB">Employment Status</Form.Label>
                            <Form.Check
                                custom
                                type='radio'
                                name="employment"
                                id="employed"
                                label='Employed for wages'
                                value="employed"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="employment"
                                id="self-employed"
                                label='Self-employed'
                                value="self-employed"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="employment"
                                id="homemaker"
                                label='Homemaker'
                                value="homemaker"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="employment"
                                id="student"
                                label='Student'
                                value="student"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="employment"
                                id="military"
                                label='Military'
                                value="military"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="employment"
                                id="retired"
                                label='Retired'
                                value="retired"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />
                            <Form.Check
                                custom
                                type='radio'
                                name="employment"
                                id="other"
                                label='Other'
                                value="other"
                                onChange={this.props.handleChange}
                                style={{marginBottom:5}}
                                className="BodyFontD"
                            />


                    
                        </Form.Group>
                    </Col>
                </Row>




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