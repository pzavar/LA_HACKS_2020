import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row, Container, Button, Jumbotron, Modal } from 'react-bootstrap';
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import CustomFeedback from '../../Components/Feedback/CustomFeedback';
import CustomFooter from '../../Components/Navigation/Footer';

import { history } from '../../Utils/history';

import './MealsPage.css';


const dummyMealOptions = {
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
        }

        this.handleSelect = this.handleSelect.bind(this);
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
    mealCard(meal, index) {
        return (
            <React.Fragment>
            <Card id="meal-options-card" onClick={this.onShow.bind(this, index)}>
                <Card.Img variant="top" src={meal.image} className="meal-card-img"/>
                <Card.Body>
                    <Card.Title className="meal-card-title">{meal.label}</Card.Title>
                        <Card.Text  className="meal-card-text" id="meal-options-card-txt">
                            Price: ${meal.pricePerServing}.00
                        </Card.Text>
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
                                Calories: {meal.calories} <br/>
                                Carbs: {meal.carbs} <br/>
                                Protein: {meal.protein} <br/>
                                Fat: {meal.fat} <br/>
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
    mealOption(mealSet, start) {
        var meals = [];

        for (let i =0; i < mealSet.length; i++) {
            meals.push(
                <Col id="meal-option-col" key={i}>
                    <h2 className="BodyFont">{mealSet[i].type}</h2>
                    {this.mealCard(mealSet[i], i+start)}
                </Col>
            )
        }
        
        return (
            <Row id="meal-option-row">
                {meals}
            </Row>
        )
    }

    /* Select button */
    handleSelect() {
        // Add functionality to update user's meals

        history.push('/home')
    }

    componentDidMount() {
        const mealOptions = dummyMealOptions;
        const meals = mealOptions.option1.meals.concat(mealOptions.option2.meals, mealOptions.option3.meals);
        const modalInit = meals.map((item, i) => { return false })

        this.setState({modalShowArray: modalInit})
    }


    render() {
        const mealOptions = dummyMealOptions;

        const op2Index = mealOptions.option1.meals.length;
        const op3Index = mealOptions.option1.meals.length + mealOptions.option2.meals.length;

        const mealOptionOne = this.mealOption(mealOptions.option1.meals, 0);
        const mealOptionTwo = this.mealOption(mealOptions.option2.meals, op2Index);
        const mealOptionThree = this.mealOption(mealOptions.option3.meals, op3Index);

        return (
            <Container>
                <NavBarEntry />
                <h1 className="PageTitleFont" id="meal-options-page-title">Meal Options</h1>

                {/* Option 1 */}
                <Jumbotron id="meals-option-jumbotron">
                    <h1 className="BodyFont" id="meal-option-title">Meals Option 1: ${mealOptions.option1.price}</h1>
                    <h1 className="BodyFont" id="meal-option-title">Number of people: 4</h1>
                    {mealOptionOne}
                    <div id="meal-option-btn-wrapper">
                        <Button id="meals-option-select-btn" onClick={this.handleSelect}>SELECT</Button>
                    </div>
                </Jumbotron>
                
                

                {/* Option 2 */}
                <Jumbotron id="meals-option-jumbotron">
                    <h1 className="BodyFont" id="meal-option-title">Meals Option 2: ${mealOptions.option2.price}</h1>
                    <h1 className="BodyFont" id="meal-option-title">Number of people: 4</h1>
                    {mealOptionTwo}
                    <div id="meal-option-btn-wrapper">
                        <Button id="meals-option-select-btn" onClick={this.handleSelect}>SELECT</Button>
                    </div>
                </Jumbotron>
                
                

                {/* Option 3 */}
                <Jumbotron id="meals-option-jumbotron">
                    <h1 className="BodyFont" id="meal-option-title">Meals Option 3: ${mealOptions.option3.price}</h1>
                    <h1 className="BodyFont" id="meal-option-title">Number of people: 4</h1>
                    {mealOptionThree}
                    <div id="meal-option-btn-wrapper">
                        <Button id="meals-option-select-btn" onClick={this.handleSelect}>SELECT</Button>
                    </div>
                </Jumbotron>
                
                <CustomFeedback />
                <CustomFooter />
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}



export default connect(mapStateToProps, mapDispatchToProps)(MealsPage)
