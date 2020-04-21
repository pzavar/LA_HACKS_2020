import React, { Component } from 'react'
import { Container, Row, Tab, Button, Nav } from 'react-bootstrap';
import UserInfo from '../../Components/Survey/UserInfo';
import DietPref from '../../Components/Survey/DietPref';
import DietRestrict from '../../Components/Survey/DietRestrict';
import DietLifestyle from '../../Components/Survey/DietLifestyle';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import { history } from '../../Utils/history';
import './register.css';



export default class Register extends Component {
    constructor(props) {
        super(props)

        console.log(this.props.history.location)

        if(this.props.history.location.state.populated) {
            this.state = {
                key: 1,
                currentStep: 1,
                email: this.props.history.location.state.email,
                password: this.props.history.location.state.password,
                age: 0,
                employment: '',
                mealsPerDay: 0,
                budget: 0,
                Diet: '',
                Health: [],
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
                age: 0,
                employment: '',
                mealsPerDay: 0,
                budget: 0,
                Diet: '',
                Health: [],
                step1: "",
                step2: "",
                step3: "",
                step4: "",
            }
        }


        this.handleChange = this.handleChange.bind(this)
        this.handleHealthChange = this.handleHealthChange.bind(this)
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
        console.log(this.state.age)
        console.log(this.state.employment)
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
        const step2 = this.state.step2;
        const step3 = this.state.step3;
        const step4 = this.state.step4;
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
                                    <p> Please enter a diet preference.</p>
                                    <DietPref 
                                        handleChange={this.handleChange}/>
                                    <Row id="two-button-group">
                                        <Button id="button1 button" onClick={(e) => this.handleSelect(1, "prev", e)}>Previous</Button>
                                        <Button id="button2 button" onClick={(e) => this.handleSelect(3, "next", e)}>Next</Button>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={3}>
                                    <h3 className="title">Diet Lifestyles</h3>
                                    <p>Please check any boxes for dietaryy lifestyles you have (or wish to have).</p>
                                    <DietLifestyle 
                                        handleChange={this.handleHealthChange}
                                        />
                                    <Row id="two-button-group">
                                        <Button id="button1 button" onClick={(e) => this.handleSelect(2, "prev", e)}>Previous</Button>
                                        <Button id="button2 button" onClick={(e) => this.handleSelect(4, "next", e)}>Next</Button>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={4}>
                                    <h3 className="title">Diet Restrictions</h3>
                                    <p>Please check any boxes for dietary restrictions you may have.</p>
                                    <DietRestrict 
                                        handleChange={this.handleHealthChange}
                                        />
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
