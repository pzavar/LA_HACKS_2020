import React, { Component } from 'react'
import { Container, Row, Tab, Button, Nav, InputGroup, Form, FormControl } from 'react-bootstrap';
import DietRestrict from '../../Components/Survey/DietRestrict';
import DietLifestyle from '../../Components/Survey/DietLifestyle';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import {connect} from 'react-redux';
import { usersActions } from '../../Redux/Actions/UserActions';
import CustomFeedback from '../../Components/Feedback/CustomFeedback';

import { history } from '../../Utils/history';

import axios from 'axios';

import './register.css';


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            /* User Meal Pref States Data */
            meals: 3,
            breakfast: true,
            lunch: true,
            dinner: true,
            snack: false,
            snacks: 0,
            budget: '',
            Diet: '',
            exclude: [],

            /* Meal Type Form States */
            mealTypeDisable: true,
            mealTypeNum: 3,

            /* Page Navigation States */
            key: 1,
            currentStep: 1,
            step1: "",
            step2: "",
            step3: "",
            step4: "",
            
            allGood: false,
        }

        /* Update forms functions */
        this.handleChange = this.handleChange.bind(this)
        this.handleMealTypes = this.handleMealTypes.bind(this)
        this.handleExcludeChange = this.handleExcludeChange.bind(this)

        /* Submit button */
        this.handleSubmit = this.handleSubmit.bind(this)

        /* Tab navigation functions */
        this.handleSelect = this.handleSelect.bind(this)
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

    handleMealTypes(e) {
        const name = e.target.name;
        const value = e.target.checked;
        var numMeals = this.state.mealTypeNum;
        const meals = parseInt(this.state.meals)
        var disable = false;

        if (value) {
            numMeals = numMeals + 1;
        } else {
            numMeals = numMeals - 1;
        }
        
        if (numMeals === meals) {
            disable = true;
        }

        this.setState({
            [name]: value,
            mealTypeNum: numMeals,
            mealTypeDisable: disable,
        })
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'budget') {
            this.setState({
                [name]: value,
                allGood: true,
            })
        } else {
            this.setState({
                [name]: value
            })
        }


    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { meals, breakfast, lunch, dinner, snack, snacks, budget, Diet, exclude, allGood} = this.state;
        
        const userData = {
            meals: meals,
            budget: budget,
            breakfast: breakfast,
            lunch: lunch,
            dinner: dinner,
            snack: snack,
            snacks: snacks,
        }

        const searchData = {
            excludeIngredients: exclude, // []: list of strings for allergies
            costPerMeal: budget, // int: budget for day
            diet: Diet, // String: for what type of diet
            breakfast: breakfast, // bool
            lunch: lunch, // bool
            dinner: dinner, // bool
            snack: snack, // bool
            numberOfMeals: meals, // int: number of meals
        }

        axios.get('http://localhost:4000/meals/complex', {searchData})
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })


        // Call user registration redux
        // - meals, budget, snacks

        // Call meal search redux
        // - exclude, diet, breakfast, lunch, dinner, snack


        /*
        if (allGood) {
            // Setup state for userData
            this.props.register(userData);

            // Call backend for search 
            axios.get('http://localhost:4000/meals/complex', {searchData})
            .then((response) => {
                history.push('/meals', {meals: response.data});
            })
            .catch((error) => {
                console.log(error)
            })
        }
        */
    }

    render() {
        const step2 = this.state.step2;
        const step3 = this.state.step3;
        const step4 = this.state.step4;
        const dietRestrictClassName = "reg-diet-restrict-form";
        const dietLifestyleClassName = "reg-diet-lifestyle-form";

        /* Dynamically change number of options for snacks */
        var options = []
        var ops = this.state.meals;
        if (this.state.breakfast) ops = ops - 1;
        if (this.state.lunch) ops = ops - 1;
        if (this.state.dinner) ops = ops - 1;
        for (let i = 0; i < ops; i++) {
            var op = i+1;
            options.push(
                <option key={i}>{op}</option>
            )
        }

        /* Dynamically update meal types checkedbox disabled */
        const snack = parseInt(this.state.snacks);
        var meals =  snack === 0 ? (snack + this.state.mealTypeNum) : (snack + this.state.mealTypeNum - 1);
        var mealTypeDisable = parseInt(this.state.meals) > meals ? false : true;


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
                                    <Form.Row >
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meals"
                                            id='1'
                                            label='1'
                                            value={1}
                                            disabled={meals > 1}
                                            onChange={this.handleChange}
                                            style={{marginLeft: 5, marginRight:20}}
                                            className="BodyFontD"
 
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meals"
                                            id='2'
                                            label='2'
                                            value={2}
                                            disabled={meals > 2}
                                            onChange={this.handleChange}
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meals"
                                            id='3'
                                            label='3'
                                            value={3}
                                            disabled={meals > 3}
                                            onChange={this.handleChange}
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                            defaultChecked={true}
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meals"
                                            id='4'
                                            label='4'
                                            value={4}
                                            disabled={meals > 4}
                                            onChange={this.handleChange}
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meals"
                                            id='5'
                                            label='5'
                                            value={5}
                                            disabled={meals > 5}
                                            onChange={this.handleChange}
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                        />
                                        <Form.Check
                                            custom
                                            type='radio'
                                            name="meals"
                                            id='6'
                                            label='6'
                                            value={6}
                                            disabled={meals > 6}
                                            onChange={this.handleChange}
                                            style={{marginRight:20}}
                                            className="BodyFontD"
                                        />
                                    </Form.Row>

                                    {/* Meal Types */}
                                    <h3 className="title" style={{marginTop: '8%'}}>Meal Types</h3>
                                    <Form.Group controlId="meal-type">
                                        <Form.Row>
                                            <Form.Check
                                                custom
                                                id="breakfast"
                                                name="breakfast"
                                                type="checkbox"
                                                label="Breakfast"
                                                checked={this.state.breakfast}
                                                onChange={this.handleMealTypes}
                                                disabled={this.state.mealTypeDisable && !this.state.breakfast && mealTypeDisable}
                                                style={{marginRight:25}}
                                                className="BodyFontD"
                                            />
                                            <Form.Check
                                                custom
                                                id="lunch"
                                                name="lunch"
                                                type="checkbox"
                                                label="Lunch"
                                                checked={this.state.lunch}
                                                onChange={this.handleMealTypes}
                                                disabled={this.state.mealTypeDisable && !this.state.lunch && mealTypeDisable}
                                                style={{marginRight:25}}
                                                className="BodyFontD"
                                            />
                                            <Form.Check
                                                custom
                                                id="dinner"
                                                name="dinner"
                                                type="checkbox"
                                                label="Dinner"
                                                checked={this.state.dinner}
                                                onChange={this.handleMealTypes}
                                                disabled={this.state.mealTypeDisable && !this.state.dinner && mealTypeDisable}
                                                style={{marginRight:25}}
                                                className="BodyFontD"
                                            />
                                            <Form.Check
                                                custom
                                                id="snack"
                                                name="snack"
                                                type="checkbox"
                                                label="Snacks"
                                                checked={this.state.snack}
                                                onChange={this.handleMealTypes}
                                                disabled={this.state.mealTypeDisable && !this.state.snack && mealTypeDisable}
                                                className="BodyFontD"
                                            />
                                        </Form.Row>
                                        {this.state.snack && 
                                            <Form.Group>
                                                <Form.Label className="BodyFontD">No. of Snacks </Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="snacks"
                                                    value={this.state.snacks}
                                                    onChange={this.handleChange}
                                                >
                                                {options}
                                                </Form.Control>
                                            </Form.Group>
                                        }

                                    </Form.Group>
                                    <Row id="one-button-group">
                                        <Button id="button2 button" onClick={(e) => this.handleSelect(2, "next", e)}>Next</Button>
                                    </Row>
                                </Tab.Pane>

                                {/* Budget */}
                                <Tab.Pane eventKey={2}>
                                    <h3 className="title">Budget</h3>
                                    <Form.Group controlId="budget">
                                    <Form.Label className="BodyFontB">Daily Meal Budget</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="budgetPrepend" className="BodyFontD" style={{paddingTop:3, paddingBottom:3,}}>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control 
                                            type="number"
                                            placeholder="ex. 30.00"
                                            min="0"
                                            name="budget"
                                            value={this.state.budget}
                                            onChange={this.handleChange}
                                            className="BodyFontD"
                                        />
                                        </InputGroup>
                                    </Form.Group>
                                    <Row id="two-button-group">
                                        <Button id="button1 button" onClick={(e) => this.handleSelect(1, "prev", e)}>Previous</Button>
                                        <Button id="button2 button" onClick={(e) => this.handleSelect(3, "next", e)}>Next</Button>
                                    </Row>
                                </Tab.Pane>

                                {/* Diet Preferences */}
                                <Tab.Pane eventKey={3}>
                                    <h3 className="title">Diet Preferences</h3>
                                    <p className="BodyFontF">Please check a box for dietary lifestyles you have (or wish to have).</p>
                                    <DietLifestyle 
                                        handleChange={this.handleChange}
                                        className={dietLifestyleClassName}
                                        type='radio'
                                        api="spoonacular"
                                        />

                                    <Row id="two-button-group">
                                        <Button id="button1 button" onClick={(e) => this.handleSelect(2, "prev", e)}>Previous</Button>
                                        <Button id="button2 button" onClick={(e) => this.handleSelect(4, "next", e)}>Next</Button>
                                    </Row>
                                </Tab.Pane>

                                {/* Diet Restrictions */}
                                <Tab.Pane eventKey={4}>
                                    <h3 className="title">Diet Restrictions</h3>
                                    <p className="BodyFontF">Check any box for dietary restrictions to exclude in meals.</p>
                                        <DietRestrict 
                                            handleChange={this.handleExcludeChange}
                                            className={dietRestrictClassName}
                                            type='checkbox'
                                            api="spoonacular" 
                                        />
                                    { !this.state.allGood &&
                                        <h3 className="BodyFontD" id="reg-error">Error: Enter a budget amount in step 2.</h3>
                                    }
                                    <Row id="two-button-group">
                                        <Button id="button1 button" onClick={(e) => this.handleSelect(3, "prev", e)}>Previous</Button>
                                        <Button variant="success" id="button2" disabled={!this.state.allGood} onClick={this.handleSubmit}>Submit</Button>
                                    </Row>
                                </Tab.Pane>

 
                            </Tab.Content>
                    </Tab.Container>

                </div>
                <CustomFeedback feedback={true}/>
            </Container>
        )
    }
}


function mapStateToProps(state) {
    return (state)
}

const mapDispatchToProps = {
    register: usersActions.userRegistration,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
