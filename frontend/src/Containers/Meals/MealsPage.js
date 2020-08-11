import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { Card, Col, Row, Container, Button, Jumbotron, Modal, Alert, InputGroup, Form, Spinner } from 'react-bootstrap';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import CustomFeedback from '../../Components/Feedback/CustomFeedback';
import CustomFooter from '../../Components/Navigation/Footer';
import { mealsActions } from '../../Redux/Actions/MealsActions';
import { usersActions } from '../../Redux/Actions/UserActions';
import { history } from '../../Utils/history';

import { Formik } from 'formik';
import * as Yup from 'yup';

import './MealsPage.css';


/*
    Function Call Order

    Home
        --> mealOption(mealSet, macros, ingredients, mealNum, mealType, start) 
            --> mealCard(meal, macros, ingredients, index, mealNum, mealType, styleId) 
            --> onSelect(mealNum, mealType, index, mealPrice, meal, macros, ingredients, e)
        --> renderSlider(meals, mealType, mealNumber)
        --> handleSubmit(e)

*/

const schema = Yup.object().shape({
    email: Yup.string().email("Please enter an appropiate email.").required("Please enter an appropiate email."),
});

export class MealsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShowArray: [],
            budget: 0,
            breakfast: false,
            lunch: false,
            dinner: false,
            snack: false,
            mealsState: [],
            numSelectedMeals: 0,
            errorAlert: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {
        // Initialize modal show array state
        const spoonacularData = this.props.searchData;
            
        console.log(spoonacularData)
        const meals = spoonacularData.breakfast.recipes.concat(spoonacularData.lunch.recipes, spoonacularData.dinner.recipes);
        
        //const meals = spoonacularData.breakfast.recipes.concat(spoonacularData.lunch.recipes, spoonacularData.dinner.recipes, spoonacularData.snacks.recipes);
        const modalInit = meals.map(() => { return false });
        this.setState({modalShowArray: modalInit});


        
        // Initialize meal number state
        const mealsNum = this.props.meals;
        var mealsState = [];

        for (let i=0; i < mealsNum; i++) {
            mealsState.push({
                index: -1, 
                price: 0, 
                mealNum: -1, 
                mealType: "", 
                meal: {}, 
                macros: {}, 
                ingredients: {},
                waitlistModalShow: false,
            })
        }
        this.setState({mealsState: mealsState})


        // Initialize meal type boolean
        const breakfast = this.props.breakfast;
        const lunch = this.props.lunch;
        const dinner = this.props.dinner;
        const snack = this.props.snack;
        const snacks = this.props.snacks;
        this.setState({
            breakfast: breakfast,
            lunch: lunch,
            dinner: dinner,
            snack: snack,
            snacks: snacks,
        })
    }

    // Loading spinner for email modal
    loading() {
        return(
            <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
        )
    }

    // Strip HTML tags from any string
    removeTags(str) {
        if ((str === null) || (str === '')) {
            return false;
        }
        else {
            str = str.toString();
            return str.replace( /(<([^>]+)>)/ig, '');
        }
    }

    /* Modal Show */
    onShow(i) {
        this.setState(state => {
            const modalShowArray = state.modalShowArray.map((item, j) => {
                if (j === i) {
                    return true;
                } else {
                    return item;
                }
            });
            return {modalShowArray,}

            
        });
    }

    /* Modal Hide */
    onHide(i) {
        this.setState(state => {
            const modalShowArray = state.modalShowArray.map((item, j) => {
                if (j === i) {
                    return false;
                } else {
                    return item;
                }
            });
            return {modalShowArray,}
        });
    };


    /* Fills out a meal card */
    mealCard(meal, macros, ingredients, index, mealNum, mealType, styleId) {
        var price = ((meal.pricePerServing / 100) * meal.servings).toFixed(2);

        return (
            <React.Fragment>
            <Card id={styleId} className="meal-option-card" onClick={this.onSelect.bind(this, mealNum, mealType, index, price, meal, macros, ingredients)}>
                <Card.Img variant="top" src={meal.image} className="meal-card-img" alt="MealImage"/>
                <Card.Body>
                    <Card.Title className="meal-card-title" id="meal-options-card-title">{meal.title}</Card.Title>
                        <Card.Text  className="meal-card-text" id="meal-options-card-txt">
                            Servings: {meal.servings} <br />
                            Price: ${price}
                        </Card.Text>
                        <div id="meal-options-card-btn-wrapper">
                         <Button  onClick={this.onShow.bind(this, index)} id="meals-option-details-btn">Details</Button>
                        </div>
                </Card.Body>
                
            </Card>

            <Modal
                show={this.state.modalShowArray[index]}
                onHide = {this.onHide.bind(this, index)}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="BodyFont" id="meals-option-modal-title">{meal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={5} id="meals-option-modal-img-wrapper">
                            <a href={meal.url} id="week-img"><img src={meal.image} id="meals-option-modal-img" alt="Meal Pic"/></a>
                        </Col>
                        <Col>
                            <p className="BodyFont" id="meals-option-modal-summary">{this.removeTags(meal.summary)}</p>
                            <p className="BodyFont" id="meals-option-modal-body">
                                Servings: {meal.servings} <br />
                                Price per Serving: ${meal.pricePerServing} <br/>
                                Time: {meal.readyInMinutes} mins <br/>
                                {macros[0]} <br/> {/* calories */}
                                {macros[6]} <br/> {/* carbs */}
                                {macros[5]} <br/> {/* protein */}
                                {macros[1]} <br/> {/* fat */}
                            </p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onHide.bind(this, index)}>Close</Button>
                </Modal.Footer>
            </Modal>

            </React.Fragment>
        )
    }

    /* Displays meal option cards in a row */
    mealOption(mealSet, macros, ingredients, mealNum, mealType, start) {
        
        // Map meals according to if it is highlighted or not
        var meals = [];
        var sliderMenu = [];
        const selectedStyle = "meal-options-card-selected";
        const nonSelectedStyle = "meal-options-card-reg";

        for (let i =0; i < mealSet.length; i++) {
            if ((i+start) === this.state.mealsState[mealNum].index) {
                meals.push(
                    <Col id="meal-option-col" key={i}>
                        {this.mealCard(mealSet[i], macros[i], ingredients[i], i+start, mealNum, mealType, selectedStyle)}
                    </Col>
                )
            } else {
                meals.push(
                    <Col id="meal-option-col" key={i}>
                        {this.mealCard(mealSet[i], macros[i],  ingredients[i], i+start, mealNum, mealType, nonSelectedStyle)}
                    </Col>
                )
            }

        }
        
        // Make partition of 3 meals into Slider component
        for (let i=0; i < meals.length; i += 3) {
            let set = [];

            set.push(meals[i]);
            
            if ((i+1) < meals.length) {
                set.push(meals[i+1])
            }

            if ((i+2) < meals.length) {
                set.push(meals[i+2])
            }

            sliderMenu.push(
                <div key={i}>
                    <Row id="meal-option-row">
                        {set}
                    </Row>
                </div>
            )
        }

        // Slider settings
        var settings = {
            dots: true,
        }

        return (
            <Slider {...settings} id="meal-options-slider">
                {sliderMenu}
            </Slider>      
        )
    }

    // Render slider meal menu
    renderSlider(meals, mealType, mealNumber) {
        
        return (
            <Jumbotron id="meals-option-jumbotron" key={mealNumber}>
            <h1 className="BodyFont" id="meal-option-title">Meal Option {mealNumber}: {mealType}</h1>
                {meals}
            </Jumbotron>
        )
    }

 
    /* For selecting meal a meal */
    onSelect(mealNum, mealType, index, mealPrice, meal, macros, ingredients, e) {
        e.preventDefault();
        let mealsState = [...this.state.mealsState];
        let mealState = {...mealsState[mealNum]};
        let price = parseInt(mealPrice);
        let numSelectedMeals = this.state.numSelectedMeals;
        var budget = this.state.budget;
        

        

        // If index is equal to current meal number
        // Change state to -1
        // Add meal price to budget
        if (mealState.index === index) {
            budget = budget - mealState.price;
            mealState = {
                index: -1, 
                price: 0, 
                mealNum: 0, 
                mealType: "", 
                meal: {}, 
                macros: {}, 
                ingredients: {}
            }
            numSelectedMeals --;
        } 
        // Else
        // Add existing meal price to budget
        // Change state to index
        // Remove index meal price from budget
        else {
            budget = budget - mealState.price;
            budget = budget + price;
            mealState = {
                    index: index, 
                    price: price, 
                    mealNum: mealNum, 
                    mealType: mealType, 
                    meal: meal, 
                    macros: macros, 
                    ingredients: ingredients,
            }

            if (mealNum != this.state.mealsState[mealNum].mealNum) 
                numSelectedMeals++;
        }

        mealsState[mealNum] = mealState;
        
        // Update state
        this.setState({
            mealsState: mealsState,
            budget: budget,
            numSelectedMeals: numSelectedMeals,
        })
    }

    /* Submit button */
    handleSubmit(e) {
        e.preventDefault();
        let userSelectedMeals = this.state.numSelectedMeals;
        let totalMeals = parseInt(this.props.meals);

        if(userSelectedMeals === totalMeals) {
            const meals = this.state.mealsState;
            let userMeals = [];
            let userMacros = [];
            let userIngredients = [];
    
            for(let i=0; i < meals.length; i++) {
                let meal = {
                    mealNum: meals[i].mealNum,
                    mealType: meals[i].mealType,
                    price: meals[i].price,
                    meal: meals[i].meal,
                    macros: meals[i].macros,
                }
                userMeals.push(meal);
                userMacros.push(meals[i].macros);
                userIngredients.push(meals[i].ingredients);
            }
    
            this.props.setMeals(userMeals);
            this.props.setMacros(userMacros);
            this.props.setGrocery(userIngredients);
    
            history.push('/home')
        } else {
            this.setState({errorAlert: true})
        }


    }

    



    render() {
        var mealOptions = this.props.searchData;

        var mealCount = 0;
        var mealOptionNum = 0;
        var renderedMeals = []

        // Setup the meals to render
        // Setup breakfast
        if (this.state.breakfast) {
            var breakfast = this.mealOption(mealOptions.breakfast.recipes, mealOptions.breakfast.macros, mealOptions.breakfast.ingredients, mealOptionNum, "Breakfast", mealCount);
            renderedMeals.push(this.renderSlider(breakfast, "Breakfast", mealOptionNum+1));
            mealOptionNum += 1;
            mealCount += mealOptions.breakfast.recipes.length;
        }

        // Setup lunch
        if (this.state.lunch) {
            var lunch = this.mealOption(mealOptions.lunch.recipes, mealOptions.lunch.macros, mealOptions.lunch.ingredients, mealOptionNum, "Lunch", mealCount);
            renderedMeals.push(this.renderSlider(lunch, "Lunch", mealOptionNum+1));
            mealOptionNum += 1;
            mealCount += mealOptions.lunch.recipes.length;
        }

        // Setup dinner
        if (this.state.dinner) {
            var dinner = this.mealOption(mealOptions.dinner.recipes, mealOptions.dinner.macros, mealOptions.dinner.ingredients, mealOptionNum, "Dinner", mealCount);
            renderedMeals.push(this.renderSlider(dinner, "Dinner", mealOptionNum+1));
            mealOptionNum += 1;
            mealCount += mealOptions.dinner.recipes.length;
        }

        // Setup snacks
        if (this.state.snack) {
            let n = this.state.snacks;
            let len = mealOptions.snacks.recipes; 
            let i = 0, size;

            if(n < 2) {
                let snackOption = this.mealOption(mealOptions.snacks.recipes, mealOptions.snacks.macros, "Snack", mealOptionNum, "Snack", mealCount);
                renderedMeals.push(this.renderSlider(snackOption, "snack", mealOptionNum));
                mealOptionNum += 1;
                mealCount += mealOptions.snacks.recipes.length;
            } else if (len % n === 0) {
                size = Math.floor(len / n);
                while (i < len) {
                    let snackOption = this.mealOption(mealOptions.snacks.recipes.slice(i, i += size), mealOptions.snacks.macros.slice(i, i += size), "Snack", mealOptionNum, "Snack", mealCount);
                    renderedMeals.push(this.renderSlider(snackOption, "snack", mealOptionNum));
                    mealOptionNum += 1;
                    mealCount += mealOptions.snacks.recipes.slice(i, i += size).length;
                }
            } else {
                n--;
                size = Math.floor(len / n);
                if(len % n === 0) {
                    size--;
                }
                while(i < size * n) {
                    let snackOption = this.mealOption(mealOptions.snacks.recipes.slice(i, i += size), mealOptions.snacks.macros.slice(i, i += size), "Snack", mealOptionNum, mealCount);
                    renderedMeals.push(this.renderSlider(snackOption, "snack", mealOptionNum));
                    mealOptionNum += 1;
                    mealCount += mealOptions.snacks.recipes.slice(i, i += size).length;
                }
                let snackOption = this.mealOption(mealOptions.snacks.recipes.slice(size * n), mealOptions.snacks.macros.slice(size * n), "Snack", mealOptionNum, mealCount);
                renderedMeals.push(this.renderSlider(snackOption, "snack", mealOptionNum));
                mealOptionNum += 1;
                mealCount += mealOptions.snacks.recipes.slice(size * n).length;
            }

        }

        return (
            <Container>
                <NavBarEntry />
                <h1 className="PageTitleFont" id="meal-options-page-title">Meal Options</h1>
                <h3 className="BodyFont" id="meal-options-page-subtitle">Select a meal for each meal option.</h3>

                    {renderedMeals}
                
                <Row id="submit-bar-row">
                    <div id="submit-bar-wrapper">
                        <Col>
                            <h3 className="BodyFontD" id="meals-footer-bar-txt">Selected Meals Price: ${this.state.budget}</h3>
                            <h3 className="BodyFontD" id="meals-footer-bar-txt">Budget: ${this.props.budget}</h3>
                        </Col>
                        <Col>
                            <h3 className="BodyFontD" id="meals-footer-bar-txt">Selected Meals: {this.state.numSelectedMeals}</h3>
                            <h3 className="BodyFontD" id="meals-footer-bar-txt">Meals: {this.props.meals}</h3>
                        </Col>
                        
                        <Col>
                        {this.state.errorAlert 
                            ? (<Alert variant="danger" onClose={() => this.setState({errorAlert: false})} dismissible>
                                <Alert.Heading>Error</Alert.Heading>
                                <p>Make sure to select a meal in each meal option!</p>
                            </Alert>)
                        
                            : (
                                <React.Fragment>
                                    <Row>
                                        <Button id="meals-submit-btn" onClick={() => {this.setState({waitlistModalShow: true})}}>Auto Select</Button>
                                    </Row>
                                    <Row>
                                        <Button id="meals-submit-btn" onClick={this.handleSubmit}>Submit</Button>
                                    </Row>
                                </React.Fragment>
                            )
                        }
                        </Col>
                    </div>
                </Row>

                {/* Waitlist Modal */}
                <Modal
                    show={this.state.waitlistModalShow}
                    onHide={() => this.setState({waitlistModalShow: false})}
                    centered
                >
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <h1 className="BodyFont" id="custom-feedback-title">Feature coming soon! </h1>
                        <h1 className="BodyFont" id="custom-feedback-title">Sign up on our waitlist for updates on product release!</h1>
                        <Formik
                        validationSchema={schema}
                        initialValues={{email: ""}}
                        onSubmit={(values) => {
                            this.props.signUp(values.email)
                        }}
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        errors
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <InputGroup>
                            <Form.Control 
                                type="email"
                                name="email"
                                placeholder="Enter email" 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.email && !errors.email}
                                className={touched.email && errors.email ? "landing-email-error BodyFontD" : "BodyFontD FormBox" }
                            />
                            <InputGroup.Append>
                                <Button id="landing-page-email-submit" type="submit" disabled={this.props.emailSignUpLoading}> {this.props.emailSignUpLoading ? (this.loading()) : "Submit"}</Button>
                            </InputGroup.Append>
                            </InputGroup>
                            {touched.email && errors.email ? (
                                <div id="landing-email-error-msg">{errors.email}</div>
                            ): null}
                            { this.props.emailSignUpSuccess ? (
                                <div id="landing-email-success-msg">Email added!</div>
                            ) : null
                            }
                            { this.props.emailSignUpError ? (
                                <div id="landing-email-error-msg">Error adding email. Try again later!</div>
                            ) : null
                            }
                            
                        </Form>
                    )}
                    </Formik>
                    </Modal.Body>
                    <Modal.Footer>
                        <div />
                    </Modal.Footer>
                </Modal>
                <CustomFeedback />
                <CustomFooter />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    const {
        meals,
        budget,
        breakfast,
        lunch,
        dinner,
        snack,
        snacks,
        emailSignUpLoading, 
        emailSignUpSuccess, 
        emailSignUpError,
    } = state.user;

    const {
        searchData,
        searchError,
        searchLoading,
        
    } = state.meals;

    return ({
        meals,
        budget,
        breakfast,
        lunch,
        dinner,
        snack,
        snacks,
        searchLoading,
        searchData,
        searchError,
        emailSignUpLoading, 
        emailSignUpSuccess, 
        emailSignUpError,
    })
}

// Add function to update meals
const mapDispatchToProps = {
    setMeals: mealsActions.setMeals,
    setGrocery: mealsActions.setGroceryList,
    setMacros: mealsActions.setMacros,
}

export default connect(mapStateToProps, mapDispatchToProps)(MealsPage);