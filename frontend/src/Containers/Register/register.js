import React, { Component } from 'react'
import { Container, Row, Tab, Button, Nav, InputGroup, Form, FormControl } from 'react-bootstrap';
import UserInfo from '../../Components/Survey/UserInfo';
import DietRestrict from '../../Components/Survey/DietRestrict';
import DietLifestyle from '../../Components/Survey/DietLifestyle';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import { history } from '../../Utils/history';
import {connect} from 'react-redux';
import { usersActions } from '../../Redux/Actions/UserActions';
import CustomFeedback from '../../Components/Feedback/CustomFeedback';


import './register.css';



class Register extends Component {
    constructor(props) {
        super(props)

        console.log(this.props.history.location)

        const historyProps = this.props.history.location.state;

        if(typeof historyProps !== "undefined" && historyProps.populated) {
            this.state = {
                key: 1,
                currentStep: 1,
                email: historyProps.email,
                password: historyProps.password,
                age: '',
                employment: '',
                budget: '',
                Diet: '',
                targetCalories: '',
                exclude: [],
                step1: "",
                step2: "",
                step3: "",
                step4: "",
            }
        } else {
            this.state = {
                key: 1,
                currentStep: 1,
                email: '',
                password: '',
                age: '',
                employment: '',
                budget: '',
                diet: '',
                exclude: [],
                targetCalories: '',
                step1: "",
                step2: "",
                step3: "",
                step4: "",
            }
        }


        this.handleChange = this.handleChange.bind(this)
        this.handleExcludeChange = this.handleExcludeChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLinkVisit = this.handleLinkVisit.bind(this)
    }

    handleLinkVisit(key, e) {
        e.preventDefault()

        switch(key) {
            case 1:
                this.setState({step1: "visited"})
                break;
            case 2:
                this.setState({step2: "visited"})
                break;
            case 3:
                this.setState({step3: "visited"})
                break;
            case 4:
                this.setState({step4: "visited"})
                break;
            default:
                break;
        }
    }

    handleSelect(key, move) {
        console.log(key)
        this.setState({key})

        switch (key) {
            case 1:
                if (move === "prev")
                    this.setState({step2: ""})
                break;
            case 2:
                if (move === "next")
                    this.setState({step2: "visited"})
                else
                    this.setState({step3: ""})
                break;
            case 3:
                if (move === "next")
                    this.setState({step3: "visited"})
                else
                    this.setState({step4: ""})
                break;
            case 4:
                if (move === "next")
                    this.setState({step4: "visited"})
                break;
            default:
                break;
        }
    }

    handleExcludeChange(e) {
        const {value} = e.target

        console.log(value)

        if (this.state.exclude.includes(value)) {
            console.log("item exists")
            const items = this.state.exclude.filter((i) => i !== value)
            this.setState({exclude: items})
        } else {
            var newExclude = this.state.exclude;
            newExclude.push(value)
            this.setState({
                
                exclude: newExclude
            })

        }
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password, budget, diet, exclude, targetCalories, age } = this.state
        
        const data = {
            email: email,
            password: password,
            age: age,
            budget: budget,
            diet: diet,
            exclude: exclude,
            targetCalories: targetCalories,
        }

        history.push('/home');
    }

    render() {
        const step2 = this.state.step2;
        const step3 = this.state.step3;
        const step4 = this.state.step4;
        const dietRestrictClassName = "reg-diet-restrict-form";
        const dietLifestyleClassName = "reg-diet-lifestyle-form";
    
        return (
            <Container>
                <NavBarEntry />
                <div className="tab-wrapper">
                    <h2 className="title-header">Setup your meal plan</h2>
                    <Tab.Container activeKey={this.state.key} onSelect={this.handleSelect} id="registration-survey">
                            <div className="progressbar-container">
                                <Nav fill activeKey={this.state.key} as="ul" className="progressbar">
                                    <Nav.Item className="visited" as="li">
                                        <Nav.Link eventKey={1}>Step 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={step2} as="li">
                                        <Nav.Link eventKey={2} onClick={(e) => this.handleLinkVisit(2, e)}>Step 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={step3} as="li">
                                        <Nav.Link eventKey={3} onClick={(e) => this.handleLinkVisit(3, e)}>Step 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>

                                {/* Meal Plan Pref */}
                                <Tab.Pane eventKey={1}>
                                    {/* Meal Plan Type */}
                                    <h3 className="title">Meal Plan Type</h3>
                                    <Form.Group controlId="meal-plan">
                                        {/* Daily */}
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meal-plan"
                                            id='daily'
                                            label='Daily'
                                            value="weekly"
                                            style={{marginBottom:5}}
                                            className="BodyFontD"
                                            defaultChecked={true}
                                        />
                                        {/* Weekly */}
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meal-plan"
                                            id='weekly'
                                            label='Weekly (feature coming soon)'
                                            value="weekly"
                                            disabled={true}
                                            style={{marginBottom:5}}
                                            className="BodyFontD"
                                        />
                                    </Form.Group>
                                    {/* Meals Per Day */}
                                    <h3 className="title" style={{marginTop: '8%'}}>Meals Per Day</h3>
                                    <Form.Row controlId="meal-per-day">
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meal-per-day"
                                            id='1'
                                            label='1'
                                            value="1"
                                            style={{marginLeft: 5, marginRight:20}}
                                            className="BodyFontD"
 
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meal-per-day"
                                            id='2'
                                            label='2'
                                            value="2"
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meal-per-day"
                                            id='3'
                                            label='3'
                                            value="3"
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                            defaultChecked={true}
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meal-per-day"
                                            id='4'
                                            label='4'
                                            value="4"
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meal-per-day"
                                            id='5'
                                            label='5'
                                            value="5"
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meal-per-day"
                                            id='6'
                                            label='6'
                                            value="6"
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                        />
                                    </Form.Row>

                                    {/* Budget */}
                                    <h3 className="title" style={{marginTop: '8%'}}>Budget</h3>
                                    <Form.Group controlId="budget">
                                        <Form.Label className="BodyFontB">Daily Meal Budget</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="budgetPrepend" className="BodyFontD" style={{paddingTop:3, paddingBottom:3,}}>$</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control 
                                                type="number"
                                                placeholder="0"
                                                min="0"
                                                name="budget"
                                                value={this.state.budget}
                                                onChange={this.handleChange}
                                                className="BodyFontD"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Row id="one-button-group">
                                        <Button id="button2 button" onClick={(e) => this.handleSelect(2, "next", e)}>Next</Button>
                                    </Row>
                                </Tab.Pane>

                                {/* Diet Preferences */}
                                <Tab.Pane eventKey={2}>
                                    <h3 className="title">Diet Preferences</h3>
                                    <p className="BodyFontF">Please check a box for dietary lifestyles you have (or wish to have).</p>
                                    <DietLifestyle 
                                        handleChange={this.handleChange}
                                        className={dietLifestyleClassName}
                                        type='radio'
                                        api="spoonacular"
                                        />

                                    <Row id="two-button-group">
                                        <Button id="button1 button" onClick={(e) => this.handleSelect(1, "prev", e)}>Previous</Button>
                                        <Button id="button2 button" onClick={(e) => this.handleSelect(3, "next", e)}>Next</Button>
                                    </Row>
                                </Tab.Pane>

                                {/* Diet Restrictions */}
                                <Tab.Pane eventKey={3}>
                                    <h3 className="title">Diet Restrictions</h3>
                                    <p className="BodyFontF">Check any box for dietary restrictions to exclude in meals.</p>
                                        <DietRestrict 
                                            handleChange={this.handleExcludeChange}
                                            className={dietRestrictClassName}
                                            type='checkbox'
                                            api="spoonacular" 
                                        />
                                    <Row id="two-button-group">
                                        <Button id="button1 button" onClick={(e) => this.handleSelect(2, "prev", e)}>Previous</Button>
                                        <Button variant="success" id="button2" onClick={this.handleSubmit}>Submit</Button>
                                    </Row>
                                </Tab.Pane>

 
                            </Tab.Content>
                    </Tab.Container>

                </div>
                <CustomFeedback />
            </Container>
        )
    }
}


function mapStateToProps(state) {
    return ("")
}

const mapDispatchToProps = {
    register: usersActions.userRegistration,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)


/*
                               {/* Target Calories }
                               <Tab.Pane eventKey={4}>
                               <h3 className="title">Target Calories</h3>
                               <p className="BodyFontF">Enter a target calorie per day. (optional)</p>
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


                               <Row id="two-button-group">
                                   <Button id="button1 button" onClick={(e) => this.handleSelect(3, "prev", e)}>Previous</Button>
                                   <Button variant="success" id="button2" onClick={this.handleSubmit}>Submit</Button>
                               </Row>
                           </Tab.Pane>



*/