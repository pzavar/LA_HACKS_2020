import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, Button } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import HorizontalMealCard from '../../Components/Calendar/horizontalMealCard';
import PieChart from 'react-minimal-pie-chart';
import { connect } from 'react-redux';

import { history } from '../../Utils/history';
import CustomFooter from '../../Components/Navigation/Footer';
import './home.css'
import CustomFeedback from '../../Components/Feedback/CustomFeedback';

function MacrosCard(props) {
    const fat = (props.fat * 100).toFixed(1);
    const protein = (props.protein * 100).toFixed(1);
    const carbs = (props.carbs * 100).toFixed(1);

    return (
        <div id="pie-chart-wrapper">
            <h4 className="BodyFont macros-title">{props.title}</h4>
            <Row>
                <Col id="pie-chart-legend">
                    <p className="BodyFont macros-item" style={{color: '#6A2135'}}>Carbs: {carbs}%</p>
                    <p className="BodyFont macros-item" style={{color: '#C13C37'}}>Protein: {protein}%</p>
                    <p className="BodyFont macros-item" style={{color: '#E38627'}}>Fat: {fat}%</p>
                </Col>
                <Col md={8}>
                    <PieChart
                        animate={false}
                        animateDuration={500}
                        cx={50}
                        cy={50}
                        data={[
                            { title: 'Fat', value: props.fat, color: '#E38627'},
                            { title: 'Protein', value: props.protein, color: '#C13C37' },
                            { title: 'Carb', value: props.carbs, color: '#6A2135' },
                        ]}
                        lengthAngle={360}
                        lineWidth={100}
                        onClick={undefined}
                        onMouseOut={undefined}
                        onMouseOver={undefined}
                        paddingAngle={0}
                        radius={50}
                        rounded={false}
                        startAngle={0}
                        viewBoxSize={[
                        100,
                        100
                        ]}
                        className="pie-chart"

                    />
                </Col>
            </Row>
        </div>
    )
}

/*
    NutritionInfoCard Props
    
    title
    calories
    fat
    cholestral
    sodium
    sugar
    protein
    carbs

*/

function NutrionInfoCard(props) {
    return (
        <div className= "nutrition-card-wrapper">
            <header className="nutrient-header">
                <h4 className="BodyFont macros-title">{props.title}</h4>
            </header>
            <ListGroup variant="flush">
                <ListGroup.Item className="BodyFont macros-item"><b>Total Calories:</b> {props.calories}cal</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item"><b>Total Fat:</b> {props.fat}g</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item"><b>Total Cholestral:</b> {props.cholestral}mg</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item"><b>Total Sodium:</b> {props.sodium}mg</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item"><b>Total Sugar:</b> {props.sugar}g</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item"><b>Total Protein:</b> {props.protein}g</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item"><b>Total Carbs:</b> {props.carbs}g</ListGroup.Item>
            </ListGroup>
        </div>
    )
}


class Home extends Component {
    getDay() {
        const date = new Date();
        const day = date.getDay();
        var today = "";
        
        switch(day) {
            case 0:
                today = "Sunday";
                break;
            case 1:
                today = "Monday";
                break;
            case 2:
                today = "Tuesday";
                break;
            case 3:
                today = "Wednesday";
                break;
            case 4:
                today = "Thursday";
                break;
            case 5:
                today = "Friday";
                break;
            case 6:
                today = "Saturday";
                break;
            default:
                break;
        }

        return (today);
    }

    renderMeals(meals) {
        var renderedMeals = [];
        

        for (let i=0; i < meals.length; i++) {
            let calories = parseFloat(meals[i].macros[0].replace(/[^\d.-]/g, ''));
            let fat = parseFloat(meals[i].macros[1].replace(/[^\d.-]/g, ''));
            let cholestral = parseFloat(meals[i].macros[2].replace(/[^\d.-]/g, ''));
            let sodium = parseFloat(meals[i].macros[3].replace(/[^\d.-]/g, ''));
            let sugar = parseFloat(meals[i].macros[4].replace(/[^\d.-]/g, ''));
            let protein = parseFloat(meals[i].macros[5].replace(/[^\d.-]/g, ''));
            let carbs = parseFloat(meals[i].macros[6].replace(/[^\d.-]/g, ''));

            let mealNum = parseInt(meals[i].mealNum) + 1;
            renderedMeals.push(
                <HorizontalMealCard
                    key={i}
                    id="home-meal-card"
                    mealNum={mealNum}
                    mealType={meals[i].mealType}                       
                    label={meals[i].meal.title}
                    summary={meals[i].meal.summary}
                    servings={meals[i].meal.servings}
                    price={meals[i].price}
                    readyInMinutes={meals[i].meal.readyInMinutes}               
                    image={meals[i].meal.image}                  
                    source={meals[i].meal.src}               
                    calories={calories}           
                    carbs={carbs}                 
                    fat={fat}                  
                    protein={protein}    
                    cholestral={cholestral}
                    sodium={sodium}
                    sugar={sugar}            
                />
            );
        }

        return (renderedMeals);
    }
    
    render() {
        const macros = this.props.macros;
        const meals = this.renderMeals(this.props.meals);
        const day = this.getDay()

        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <div style={{margin:20}} />
                    <header>
                        <h3 className="date-header PageTitleFont" >{day}'s Delicious Meals</h3>
                    </header>
                    <div style={{margin:20}} />

                    {meals}

                    <Row className="nutrition-wrapper">
                        <Col md={{span: 5, offset: 1}}>
                            <NutrionInfoCard
                                title="Daily Nutrition Information"
                                calories={macros.calories}
                                fat={macros.fat}
                                cholestral={macros.cholestral}
                                sodium={macros.sodium}
                                sugar={macros.sugar}
                                protein={macros.protein}
                                carbs={macros.carbs}
                            />
                        </Col>
                        <Col md={{span: 5}}>
                            <MacrosCard 
                                title="Daily Macronutrient Information"
                                fat={macros.fatPercent}
                                protein={macros.proteinPercent}
                                carbs={macros.carbsPercent}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Button onClick={() => history.push('/grocery')} id="home-continue-btn">Continue to Groceries</Button>
                    </Row>
                </Container>
                
                <CustomFeedback/>
                <CustomFooter />
            </div>
        )
    }
}

function mapStateToProps (state) {
    const meals = state.meals.mealsData;
    const macros = state.meals.macros;

    return { meals, macros }
}

export default connect(mapStateToProps)(Home);