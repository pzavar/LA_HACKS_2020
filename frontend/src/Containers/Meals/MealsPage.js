import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { Card, Col, Row, Container, Button, Jumbotron, Modal } from 'react-bootstrap';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import CustomFeedback from '../../Components/Feedback/CustomFeedback';
import CustomFooter from '../../Components/Navigation/Footer';

import { history } from '../../Utils/history';

import './MealsPage.css';

const dummyMealOptions = {
    breakfast: {
        recipes: [
            {
                type: 'Breakfast',
                image: 'https://www.foodiecrush.com/wp-content/uploads/2018/03/chunkymonkeyporridge.jpg',
                label: 'Chunky Monkey Porridge',
                summary: 'Healthy and flavorful twist to a morning oateal routine. Crunchy texture with nutty and fruity elements add to a wonderful breakfast favorite.',
                pricePerServing: '10'
            }, {
                type: 'Breakfast',
                image: 'https://www.foodiecrush.com/wp-content/uploads/2018/03/chunkymonkeyporridge.jpg',
                label: 'Chunky Monkey Porridge',
                summary: 'Healthy and flavorful twist to a morning oateal routine. Crunchy texture with nutty and fruity elements add to a wonderful breakfast favorite.',
                pricePerServing: '6'
            }, {
                type: 'Breakfast',
                image: 'https://www.foodiecrush.com/wp-content/uploads/2018/03/chunkymonkeyporridge.jpg',
                label: 'Chunky Monkey Porridge',
                summary: 'Healthy and flavorful twist to a morning oateal routine. Crunchy texture with nutty and fruity elements add to a wonderful breakfast favorite.',
                pricePerServing: '6'
            }, {
                type: 'Breakfast',
                image: 'https://www.foodiecrush.com/wp-content/uploads/2018/03/chunkymonkeyporridge.jpg',
                label: 'Chunky Monkey Porridge',
                summary: 'Healthy and flavorful twist to a morning oateal routine. Crunchy texture with nutty and fruity elements add to a wonderful breakfast favorite.',
                pricePerServing: '6'
            }, {
                type: 'Breakfast',
                image: 'https://www.foodiecrush.com/wp-content/uploads/2018/03/chunkymonkeyporridge.jpg',
                label: 'Chunky Monkey Porridge',
                summary: 'Healthy and flavorful twist to a morning oateal routine. Crunchy texture with nutty and fruity elements add to a wonderful breakfast favorite.',
                pricePerServing: '6'
            }
        ],
        macros: [
            {
                calories: '600',            
                carbs: '30',               
                fat: '22',                 
                protein: '8',   
            }, {
                calories: '600',            
                carbs: '30',               
                fat: '22',                 
                protein: '8',   
            }, {
                calories: '600',            
                carbs: '30',               
                fat: '22',                 
                protein: '8',   
            }, {
                calories: '600',            
                carbs: '30',               
                fat: '22',                 
                protein: '8',   
            }, {
                calories: '600',            
                carbs: '30',               
                fat: '22',                 
                protein: '8',   
            },
        ],
        ingredients: [
            {

            }
        ],
    },
    lunch: {
        recipes: [{
            id: '8',
            type: 'Lunch',
            image: 'https://assets.bonappetit.com/photos/5bcf769603dfa83457bf79a5/1:1/w_1600%2Cc_limit/Kedgeree-16x9-12102018.jpg',
            label: 'Rice Bowls with Flaky Cod',
            summary: "Kedgeree often calls for smoked fish, but for a light weeknight meal, we prefer steaming fresh fish right on top of the rice.",
            pricePerServing: '12'
        },{
            id: '8',
            type: 'Lunch',
            image: 'https://assets.bonappetit.com/photos/5bcf769603dfa83457bf79a5/1:1/w_1600%2Cc_limit/Kedgeree-16x9-12102018.jpg',
            label: 'Rice Bowls with Flaky Cod',
            summary: "Kedgeree often calls for smoked fish, but for a light weeknight meal, we prefer steaming fresh fish right on top of the rice.",
            pricePerServing: '12'
        },{
            id: '8',
            type: 'Lunch',
            image: 'https://assets.bonappetit.com/photos/5bcf769603dfa83457bf79a5/1:1/w_1600%2Cc_limit/Kedgeree-16x9-12102018.jpg',
            label: 'Rice Bowls with Flaky Cod',
            summary: "Kedgeree often calls for smoked fish, but for a light weeknight meal, we prefer steaming fresh fish right on top of the rice.",
            pricePerServing: '12'
        },{
            id: '8',
            type: 'Lunch',
            image: 'https://assets.bonappetit.com/photos/5bcf769603dfa83457bf79a5/1:1/w_1600%2Cc_limit/Kedgeree-16x9-12102018.jpg',
            label: 'Rice Bowls with Flaky Cod',
            summary: "Kedgeree often calls for smoked fish, but for a light weeknight meal, we prefer steaming fresh fish right on top of the rice.",
            pricePerServing: '12'
        },{
            id: '8',
            type: 'Lunch',
            image: 'https://assets.bonappetit.com/photos/5bcf769603dfa83457bf79a5/1:1/w_1600%2Cc_limit/Kedgeree-16x9-12102018.jpg',
            label: 'Rice Bowls with Flaky Cod',
            summary: "Kedgeree often calls for smoked fish, but for a light weeknight meal, we prefer steaming fresh fish right on top of the rice.",
            pricePerServing: '12'
        }],
        macros: [{
            calories: '600',            
            carbs: '30',               
            fat: '22',                 
            protein: '8',   
        },{
            calories: '600',            
            carbs: '30',               
            fat: '22',                 
            protein: '8',   
        },{
            calories: '600',            
            carbs: '30',               
            fat: '22',                 
            protein: '8',   
        },{
            calories: '600',            
            carbs: '30',               
            fat: '22',                 
            protein: '8',   
        },{
            calories: '600',            
            carbs: '30',               
            fat: '22',                 
            protein: '8',   
        },],
        ingredients: [],
    },
    dinner: {
        recipes: [],
        macros: [],
        ingredients: [],
    },
    snacks: {
        recipes: [],
        macros: [],
        ingredients: [],
    }
}

const dummyMealOptions2 = {
    option1: {
        price: '38.00-43.00',
        meals: [
            {
                id: '7',
                type: 'Breakfast',
                image: 'https://www.foodiecrush.com/wp-content/uploads/2018/03/chunkymonkeyporridge.jpg',
                label: 'Chunky Monkey Porridge',
                summary: 'Healthy and flavorful twist to a morning oateal routine. Crunchy texture with nutty and fruity elements add to a wonderful breakfast favorite.',
                pricePerServing: '10'
            },{
                id: '8',
                type: 'Lunch',
                image: 'https://assets.bonappetit.com/photos/5bcf769603dfa83457bf79a5/1:1/w_1600%2Cc_limit/Kedgeree-16x9-12102018.jpg',
                label: 'Rice Bowls with Flaky Cod',
                summary: "Kedgeree often calls for smoked fish, but for a light weeknight meal, we prefer steaming fresh fish right on top of the rice.",
                pricePerServing: '12'
            },{
                id: '9',
                type: 'Dinner',
                image: 'https://www.feastingathome.com/wp-content/uploads/2019/02/15-minute-wonton-soup-100-1.jpg',
                label: '15 Minute Wonton Soup!',
                summary: '15 Minute Wonton Soup with flavorful Leek & Ginger Broth – loaded up with healthy vibrant greens – a fast and easy weeknight diner!  Vegan adaptable!',
                pricePerServing: '16'
            }
        ],
    },
    option2: {
        price: '42.00-45.00',
        meals: [
            {
                id: '4',
                type: 'Breakfast',
                image: 'https://www.foodiecrush.com/wp-content/uploads/2018/03/microwaveeggcapresebreakfastcups.jpg',
                label: 'Microwave Egg Caprese Breakfast Cups',
                summary: 'This hot homemade ham, egg and caprese-flavored breakfast can be in yo’ belly in just two minutes thanks to a quick cook in the microwave. Yes, this is how you can easily cook eggs in the microwave.',
                pricePerServing: '7'
            },{
                id: '5',
                type: 'Lunch',
                image: 'https://assets.bonappetit.com/photos/5ca4d3e6cab3b6a496e488dd/1:1/w_1600%2Cc_limit/Vegetarian-Noodles-2.jpg',
                label: 'Peanutty Noodles with Tempeh Crumbles',
                summary: "Tempeh skeptics, this recipe will make a convert of you.",
                pricePerServing: '13'
            },{
                id: '6',
                type: 'Dinner',
                image: 'https://www.feastingathome.com/wp-content/uploads/2017/09/No-Boil-Mushroom-Baked-Ziti-100-4.jpg',
                label: 'Baked Ziti with Mushrooms & Spinach (no boil!)',
                summary: 'This delicious recipe for Baked Ziti with Spinach and Mushrooms– is a “no-boil” version! Meaning there is  no pre-boiling of the pasta- just cook it all in one-pot!  With only 15 minutes of hands-on time before baking in the oven, this is the perfect weeknight dinner the whole family will love!  GF and vegan adaptable! ',
                pricePerServing: '22'
            }
        ],
    },
    option3: {
        price: '34.00-39.00',
        meals: [
            {
                id: '12',
                type: 'Breakfast',
                url: 'https://www.delish.com/cooking/recipe-ideas/a30899293/migas-recipe/',                
                label: 'Best-Ever Migas',               
                image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200212-migas-0104-portrait-pf-1582835980.jpg?crop=1.00xw:0.667xh;0,0.0443xh&resize=980:*',            
                source: 'Delish',             
                summary: "Traditional Mexican breakfast that makes crispy fried tortillas meet scrambled eggs, creating that magical crisp-gone-soggy texture that's irresistibly satisfying.",            
                pricePerServing: '6',     
                readyInMinutes: '40',      
                servings: '2',            
                calories: '600',            
                carbs: '30',               
                fat: '22',                 
                protein: '8',   
            },{
                id: '2',
                type: 'Lunch',
                image: 'https://www.iheartnaptime.net/wp-content/uploads/2018/07/mediterranean-salad.jpg',
                label: 'Mediterranean Salad with Creamy Balsamic Dressing',
                summary: "This Mediterranean salad with creamy balsamic dressing is full of greens, protein and flavor! Comes together super quickly and tastes so fresh and delicious. Plus it’s healthier than most restaurants, too!",
                pricePerServing: '12'
            },{
                id: '3',
                type: 'Dinner',
                image: 'https://www.iheartnaptime.net/wp-content/uploads/2017/02/Sheet-pan-balsamic-chicken-recipe-I-Heart-Naptime-4.jpg',
                label: 'One-Pan Balsamic Chicken and Veggies',
                summary: 'One-Pan Balsamic Chicken And Veggies – A Healthy, EASY And Delicious Dinner Recipe That’s Full Of Flavor! A Meal The Whole Family Will Love!',
                pricePerServing: '16'
            }
        ],
    }
}


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
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.onSelect = this.onSelect.bind(this);
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
    mealCard(meal, macros, index, mealNum, styleId) {
        return (
            <React.Fragment>
            <Card id={styleId} onClick={this.onSelect.bind(this, mealNum, index, meal.pricePerServing)}>
                <Card.Img variant="top" src={meal.image} className="meal-card-img"/>
                <Card.Body>
                    <Card.Title className="meal-card-title" id="meal-options-card-title">{meal.label}</Card.Title>
                        <Card.Text  className="meal-card-text" id="meal-options-card-txt">
                            Price: ${meal.pricePerServing}.00
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
                    <Modal.Title className="BodyFont" id="meals-option-modal-title">{meal.label}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={5} id="meals-option-modal-img-wrapper">
                            <a href={meal.url} id="week-img"><img src={meal.image} id="meals-option-modal-img"/></a>
                        </Col>
                        <Col>
                            <p className="BodyFont" id="meals-option-modal-summary">{meal.summary}</p>
                            <p className="BodyFont" id="meals-option-modal-body">
                                Servings: {meal.servings} <br />
                                Price per Serving: ${meal.pricePerServing} <br/>
                                Time: {meal.readyInMinutes} mins <br/>
                                Calories: {macros.calories} <br/>
                                Carbs: {macros.carbs} <br/>
                                Protein: {macros.protein} <br/>
                                Fat: {macros.fat} <br/>
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
    mealOption(mealSet, macros, mealNum, start) {
        
        // Map meals according to if it is highlighted or not
        var meals = [];
        var sliderMenu = [];
        const selectedStyle = "meal-options-card-selected";
        const nonSelectedStyle = "meal-options-card-reg";

        for (let i =0; i < mealSet.length; i++) {
            if ((i+start) === this.state.mealsState[mealNum].index) {
                meals.push(
                    <Col id="meal-option-col" key={i}>
                        {this.mealCard(mealSet[i], macros[i], i+start, mealNum, selectedStyle)}
                    </Col>
                )
            } else {
                meals.push(
                    <Col id="meal-option-col" key={i}>
                        {this.mealCard(mealSet[i], macros[i], i+start, mealNum, nonSelectedStyle)}
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
                <div>
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
            <Jumbotron id="meals-option-jumbotron">
            <h1 className="BodyFont" id="meal-option-title">Meal Option {mealNumber}: {mealType}</h1>
                {meals}
            </Jumbotron>
        )
    }

 
    onSelect(mealNum, index, mealPrice, e) {
        e.preventDefault();
        let mealsState = [...this.state.mealsState];
        let mealState = {...mealsState[mealNum]};
        let price = parseInt(mealPrice);
        var budget = this.state.budget;

        // If index is equal to current meal number
        // Change state to -1
        // Add meal price to budget
        if (mealState.index === index) {
            budget = budget + mealState.price;
            mealState = {index: -1, price: 0}
        } 
        // Else
        // Add existing meal price to budget
        // Change state to index
        // Remove index meal price from budget
        else {
            budget = budget + mealState.price;
            budget = budget - price;
            mealState = {index: index, price: price}
        }

        mealsState[mealNum] = mealState;
        
        // Update state
        this.setState({
            mealsState: mealsState,
            budget: budget,
        })
    }

    /* Select button */
    handleSelect() {
        // Add functionality to update user's meals in redux

        history.push('/home')
    }

    componentDidMount() {
        // Initialize modal show array state
        const meals = dummyMealOptions.breakfast.recipes.concat(dummyMealOptions.lunch.recipes, dummyMealOptions.dinner.recipes, dummyMealOptions.snacks.recipes);
        const modalInit = meals.map((item, i) => { return false });
        this.setState({modalShowArray: modalInit});
        
        // Initialize meal number state
        const mealsNum = this.props.meals;
        var mealsState = [];

        for (let i=0; i < mealsNum; i++) {
            mealsState.push({index: -1, price: 0})
        }
        this.setState({mealsState: mealsState})

        // Initialize initial budget
        const budget = this.props.budget;
        this.setState({budget: budget});

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



    render() {
        const mealOptions = dummyMealOptions;

        var mealCount = 0;
        var mealOptionNum = 0;
        var renderedMeals = []

        // Setup the meals to render
        // Setup breakfast
        if (this.state.breakfast) {
            var breakfast = this.mealOption(mealOptions.breakfast.recipes, mealOptions.breakfast.macros, mealOptionNum, mealCount);
            renderedMeals.push(this.renderSlider(breakfast, "Breakfast", mealOptionNum+1));
            mealOptionNum += 1;
            mealCount += mealOptions.breakfast.recipes.length;
        }

        // Setup lunch
        if (this.state.lunch) {
            var lunch = this.mealOption(mealOptions.lunch.recipes, mealOptions.lunch.macros, mealOptionNum, mealCount);
            renderedMeals.push(this.renderSlider(lunch, "Lunch", mealOptionNum+1));
            mealOptionNum += 1;
            mealCount += mealOptions.lunch.recipes.length;
        }

        // Setup dinner
        if (this.state.dinner) {
            var dinner = this.mealOption(mealOptions.dinner.recipes, mealOptions.dinner.macros, mealOptionNum, mealCount);
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
                let snackOption = this.mealOption(mealOptions.snacks.recipes, mealOptions.snacks.macros, "Snack", mealOptionNum, mealCount);
                renderedMeals.push(this.renderSlider(snackOption, "snack", mealOptionNum));
                mealOptionNum += 1;
                mealCount += mealOptions.snacks.recipes.length;
            } else if (len % n === 0) {
                size = Math.floor(len / n);
                while (i < len) {
                    let snackOption = this.mealOption(mealOptions.snacks.recipes.slice(i, i += size), mealOptions.snacks.macros.slice(i, i += size), "Snack", mealOptionNum, mealCount);
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
                        <h3 className="BodyFontD" id="meals-budget-txt">Budget: ${this.state.budget}</h3>
                        <Button id="meals-submit-btn">Submit</Button>
                    </div>
                </Row>

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
    } = state.user;

    return ({
        meals,
        budget,
        breakfast,
        lunch,
        dinner,
        snack,
        snacks,
    })
}

// Add function to update meals
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MealsPage);