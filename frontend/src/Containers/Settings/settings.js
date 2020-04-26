import React, { Component, useState } from 'react';
import { Container, Col, Row, FormControl, InputGroup, Card, Accordion, Button } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import UserInfo from '../../Components/Survey/UserInfo';
import DietPref from '../../Components/Survey/DietPref';
import DietRestrict from '../../Components/Survey/DietRestrict';
import DietLifestyle from '../../Components/Survey/DietLifestyle';

import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { history } from '../../Utils/history';
import '../../Components/Styles/styles.css'
import './settings.css';


function CustomToggle({ children, eventKey }) {
    const [open, setOpen] = useState(false);
    const decoratedOnCLick = useAccordionToggle(eventKey, () => setOpen(!open))

    if (!open) {
        return (
            <Card.Header
                className="settings-toggle-header BodyFontD"
                onClick={decoratedOnCLick}
            >
            {children} <FontAwesomeIcon icon={faPlus} id="settings-toggle-icon" />
            </Card.Header>
        )
    } else {
        return (
            <Card.Header
                className="settings-toggle-header BodyFontD"
                onClick={decoratedOnCLick}
            >
            {children} <FontAwesomeIcon icon={faMinus} id="settings-toggle-icon" />
            </Card.Header>
        )
    }

}


export default class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            age: "",
            employment: '',
            mealsPerDay: 0,
            budget: 0,
            diet: '',
            exclude: [],
            targetCalories: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleExcludeChange = this.handleExcludeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleExcludeChange(e) {
        const {value} = e.target

        if (this.state.exclude.includes(value)) {
            console.log("item exists")
            const items = this.state.exclude.filter((i) => i !== value)
            this.setState({exclude: items})
            console.log(this.state.exclude)
        } else {
            this.setState({
                exclude: [...this.state.exlcude, value]
            })
            console.log(this.state.exclude)
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
        const dietRestrictClassName = "settings-diet-restrict-form";
        const dietLifestyleClassName = "settings-diet-lifestyle-form";

        return (
            <div id="home">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
            <Container>
                <NavigationBar />
                <Row style={{marginTop: '5%'}}>   
                    <Col md={{span:8, offset:2}}>
                        <h1 id="settings-title">Settings</h1>
                        <Accordion>
                            <Card className="settings-card-first">
                                <CustomToggle eventKey="0">User Inforomation</CustomToggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="settings-card-body">
                                    <p id="settings-directions">Change your personal information.</p>
                                    <UserInfo 
                                        handleChange={this.handleChange}
                                        name={this.state.name}
                                        email={this.state.email}
                                        password={this.state.password}
                                        age={this.state.age}
                                        mealsPerDay={this.state.mealsPerDay}
                                        budget={this.state.budget}
                                        employment={this.state.employment}
                                        populated={this.state.populated}
                                    />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card className="settings-card">
                                <CustomToggle eventKey="1">Diet Preferences</CustomToggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="settings-card-body">
                                    <p id="settings-directions">Change your diet preference.</p>
                                    <DietLifestyle 
                                        handleChange={this.handleChange}
                                        className={dietLifestyleClassName}
                                        type='radio'
                                        api="spoonacular"
                                    />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card className="settings-card">
                                <CustomToggle eventKey="2">Diet Restrictions</CustomToggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className="settings-card-body">
                                    <p id="settings-directions">Change your diet restrictions.</p>
                                    <DietRestrict 
                                        handleChange={this.handleExcludeChange}
                                        className={dietRestrictClassName}
                                        type='checkbox'
                                        api="spoonacular"
                                    />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card className="settings-card-last">
                                <CustomToggle eventKey="3">Target Calories</CustomToggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className="settings-card-body">
                                        <p id="settings-directions">Change your target calories per day. (optional)</p>
                                        <InputGroup>
                                            <FormControl
                                                type="number"
                                                name="targetCalories"
                                                placeholder="ex. 2000"
                                                value={this.state.targetCalories}
                                                onChange={this.handleChange}
                                                className="BodyFontD"
                                            />
                                        <InputGroup.Append>
                                            <InputGroup.Text className="BodyFontD" style={{paddingTop:3, paddingBottom:3,}}>cal</InputGroup.Text>
                                        </InputGroup.Append>
                                        </InputGroup> 
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <div className="settings-button-wrapper" >
                            <Button id="settings-btn">Cancel</Button>
                            <Button id="settings-btn">Save</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}