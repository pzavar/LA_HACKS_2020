import React, { Component } from 'react'
import { Container, Col, Row, Form, Tab, Tabs, Button } from 'react-bootstrap';
import UserInfo from '../../Components/Survey/UserInfo';
import DietPref from '../../Components/Survey/DietPref';
import DietRestrict from '../../Components/Survey/DietRestrict';
import DietLifestyle from '../../Components/Survey/DietLifestyle';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import { history } from '../../Utils/history';

import './register.css';



export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            key: 1,
            currentStep: 1,
            name: '',
            email: '',
            password: '',
            Diet: '',
            Health: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleHealthChange = this.handleHealthChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSelect(key) {
        console.log(key)
        this.setState({key})
    }

    handleHealthChange(e) {
        const {value} = e.target

        if (this.state.Health.includes(value)) {
            console.log("item exists")
            const health = this.state.Health.filter((i) => i !== value)
            this.setState({Health: health})
            console.log(this.state.Health)
        } else {
            this.setState({
                Health: [...this.state.Health, value]
            })
            console.log(this.state.Health)
        }
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state.Health)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, Diet } = this.state
        alert(`Your registration detail: \n
            Name: ${name} \n
            Email: ${email} \n
            Password: ${password} \n
            Diet: ${Diet} \n
        `)
        
        history.push('/home')
    }

    render() {
        return (
            <Container>
                <NavigationBar />
                <div className="tab-wrapper">
                    <h2 className="title-header">Registration</h2>
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="registration-survey">
                        <Tab eventKey={1} title="1">
                            <h3 className="title">User Information</h3>
                            <p>Please enter your account setup information.</p>
                            <UserInfo 
                                handleChange={this.handleChange}
                                name={this.state.name}
                                email={this.state.email}
                                password={this.state.password}
                            />
                            <Row id="one-button-group">
                                <Button id="next" onClick={(e) => this.handleSelect(2, e)}>Next</Button>
                            </Row>
                            
                        </Tab>
                        <Tab eventKey={2} title="2">
                            <h3 className="title">Diet Preferences</h3>
                            <p> Please enter a diet preference.</p>
                            <DietPref 
                                handleChange={this.handleChange}/>
                            <Row id="two-button-group">
                                <Button id="prev" onClick={(e) => this.handleSelect(1, e)}>Previous</Button>
                                <Button id="button" onClick={(e) => this.handleSelect(3, e)}>Next</Button>
                            </Row>
                        </Tab>
                        <Tab eventKey={3} title="3">
                            <h3 className="title">Diet Lifestyles</h3>
                            <p>Please check any boxes for dietaryy lifestyles you have (or wish to have).</p>
                            <DietLifestyle 
                                handleChange={this.handleHealthChange}
                                />
                            <Row id="two-button-group">
                                <Button id="prev" onClick={(e) => this.handleSelect(2, e)}>Previous</Button>
                                <Button id="button" onClick={(e) => this.handleSelect(4, e)}>Next</Button>
                            </Row>
                        </Tab>
                        <Tab eventKey={4} title="4">
                            <h3 className="title">Diet Restrictions</h3>
                            <p>Please check any boxes for dietary restrictions you may have.</p>
                            <DietRestrict 
                                handleChange={this.handleHealthChange}
                                />
                            <Row id="two-button-group">
                                <Button id="prev" onClick={(e) => this.handleSelect(3, e)}>Previous</Button>
                                <Button variant="success" id="button" onClick={this.handleSubmit}>Submit</Button>
                            </Row>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        )
    }
}
