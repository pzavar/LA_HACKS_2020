import React, { Component } from 'react'
import { Container, Row, Tab, Button, Nav, InputGroup, FormControl } from 'react-bootstrap';
import UserInfo from '../../Components/Survey/UserInfo';
import DietRestrict from '../../Components/Survey/DietRestrict';
import DietLifestyle from '../../Components/Survey/DietLifestyle';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import { history } from '../../Utils/history';
import {connect} from 'react-redux';
import { usersActions } from '../../Redux/Actions/UserActions';


import './register.css';



class Register extends Component {
    constructor(props) {
        super(props)

        console.log(this.props.history.location)

        const historyProps = this.props.history.location.state;

        if(typeof historyProps !== "undefined" && historyProps.populated) {
            console.log("entered")
            this.state = {
                key: 1,
                currentStep: 1,
                email: historyProps.email,
                password: historyProps.password,
                age: '',
                employment: '',
                budget: -1,
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
                budget: -1,
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

        this.props.register(data)
    }

    render() {
        const step2 = this.state.step2;
        const step3 = this.state.step3;
        const step4 = this.state.step4;
        const dietRestrictClassName = "reg-diet-restrict-form";
        const dietLifestyleClassName = "reg-diet-lifestyle-form";
        const dietPrefClassName = "reg-diet-pref-form";
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
                                    <Nav.Item className={step4} as="li">
                                        <Nav.Link eventKey={4} onClick={(e) => this.handleLinkVisit(4, e)}>Step 4</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey={1}>
                                    <h3 className="title" >User Information</h3>
                                    {/*<p>Enter your email to subscribe to updates.</p>*/}
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
                                    <Row id="one-button-group">
                                        <Button id="button2 button" onClick={(e) => this.handleSelect(2, "next", e)}>Next</Button>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={2}>
                                    <h3 className="title">Diet Preferences</h3>
                                    <p className="BodyFontF">Please check any boxes for dietaryy lifestyles you have (or wish to have).</p>
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
                                <Tab.Pane eventKey={3}>
                                    <h3 className="title">Diet Restrictions</h3>
                                    <p className="BodyFontF">Check any dietary restrictions to exclude in meals.</p>
                                        <DietRestrict 
                                            handleChange={this.handleExcludeChange}
                                            className={dietRestrictClassName}
                                            type='checkbox'
                                            api="spoonacular"
                                        />
                                    <Row id="two-button-group">
                                        <Button id="button1 button" onClick={(e) => this.handleSelect(2, "prev", e)}>Previous</Button>
                                        <Button id="button2 button" onClick={(e) => this.handleSelect(4, "next", e)}>Next</Button>
                                    </Row>
                                </Tab.Pane>
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
                            </Tab.Content>
                    </Tab.Container>

                </div>
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
