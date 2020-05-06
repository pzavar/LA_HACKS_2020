import React, { Component } from 'react';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { Daily } from '../../Components/Calendar/daily';
import PieChart from 'react-minimal-pie-chart';
import Loading from '../../Components/Loading/Loading';
import { mealsActions } from '../../Redux/Actions/MealsActions';
import { connect } from 'react-redux';
import Week from '../../Components/Calendar/week';


import CustomFooter from '../../Components/Navigation/Footer';


import './home.css'
import { dummyData } from '../../Redux/Reducers/dummy';
import CustomFeedback from '../../Components/Feedback/CustomFeedback';


const daily = {
    dailyCalories: "2500 cal",
    dailyFat: "25g",
    dailyCholestral: "10g",
    dailySodium: "150mg",
    dailySugar: "5g",
    dailyProtein: "15g",
    dailyCarbs: "150g"
}


const weekly = {
    weeklyCalories: "7200 cal",
    weeklyFat: "125g",
    weeklyCholestral: "120g",
    weeklySodium: "5000mg",
    weeklySugar: "55g",
    weeklyProtein: "150g",
    weeklyCarbs: "750g"
}

/*

    Macros Card Props

    title


*/
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
                <ListGroup.Item className="BodyFont macros-item">Total Calories: {props.calories}</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item">Total Fat: {props.fat}</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item">Total Cholestral: {props.cholestral}</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item">Total Sodium: {props.sodium}</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item">Total Sugar: {props.sugar}</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item">Total Protein: {props.protein}</ListGroup.Item>
                <ListGroup.Item className="BodyFont macros-item">Total Carbs: {props.carbs}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}


class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getWeeklyMeals()
    }

    getDay() {
        const date = new Date();
        const day = date.getDay();
        switch(day) {
            case 0:
                return ("Sunday")
            case 1:
                return ("Monday")
                break;
            case 2:
                return ("Tuesday")
                break;
            case 3:
                return ("Wednesday")
                break;
            case 4:
                return ("Thursday")
                break;
            case 5:
                return ("Friday")
                break;
            case 6:
                return ("Saturday")
                break;
            default:
                break;
        }
    }

    

    getTodaysMeals(weeklyMeals) { 
        var weekMeals = {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
        };

    var i, j, chunk = 3;

    // Parse data from backend to meals day of the week
    for (i=0, j=weeklyMeals.length; i < j; i+=chunk) {
        switch(i) {
            // Sunday
            case 0:
                weekMeals.sunday = weeklyMeals.slice(i, i+chunk);
                break;

            // Monday
            case 3:
                weekMeals.monday = weeklyMeals.slice(i, i+chunk);
                break;

            // Tuesday
            case 6:
                weekMeals.tuesday = weeklyMeals.slice(i, i+chunk);
                break;

            // Wednesday
            case 9:
                weekMeals.wednesday = weeklyMeals.slice(i, i+chunk);
                break;

            // Thursday
            case 12:
                weekMeals.thursday = weeklyMeals.slice(i, i+chunk);
                break;

            // Friday
            case 15:
                weekMeals.friday = weeklyMeals.slice(i, i+chunk);
                break;

            // Saturday
            case 18:
                weekMeals.saturday = weeklyMeals.slice(i, i+chunk);
                break;

            default:
                break;
        }
    }


        const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = weekMeals


    
        const date = new Date();
        const day = date.getDay();
        var meals = []

        switch(day) {
            case 0:
                meals = sunday
                break;
            case 1:
                meals = monday
                break;
            case 2:
                meals = tuesday
                break;
            case 3:
                meals = wednesday
                break;
            case 4:
                meals = thursday
                break;
            case 5:
                meals = friday
                break;
            case 6:
                meals = saturday
                break;
            default:
                break;
        }

        console.log(meals)

        return (
            <Daily daily={meals} />
        )
    }


    render() {
        const {isLoading, weeklyMeals} = this.props

        const dFat = 25 / 190;
        const dProtein = 15 / 190;
        const dCarbs = 150 / 190;

        const wFat = 125 / 1025;
        const wProtein = 150 / 1025;
        const wCarbs = 750 / 1025;
        const day = this.getDay()

        const { dailyCalories, dailyFat, dailyCholestral, dailySodium, dailySugar, dailyProtein, dailyCarbs } = daily;
        const { weeklyCalories, weeklyFat, weeklyCholestral, weeklySodium, weeklySugar, weeklyProtein, weeklyCarbs } = weekly;



        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <div style={{margin:20}} />
                    <header>
                        <h3 className="date-header" className="BodyFontG" >{day}'s Delicious Meals</h3>
                    </header>
                    <div style={{margin:20}} />
                    <Row className="meals-wrapper">
                        <Col>
                            <h4 className="BodyFont macros-title">Breakfast</h4>
                        </Col>
                        <Col>
                            <h4 className="BodyFont macros-title">Lunch</h4>
                        </Col>
                        <Col>
                            <h4 className="BodyFont macros-title">Dinner</h4>
                        </Col>
                    </Row>
                    <div className="meals-wrapper">
                        {isLoading ? <Loading /> : this.getTodaysMeals(weeklyMeals) }
                    </div>

                    <Row className="nutrition-wrapper">
                        <Col md={{span: 5, offset: 1}}>
                            <NutrionInfoCard
                                title="Daily Nutrition Information"
                                calories={dailyCalories}
                                fat={dailyFat}
                                cholestral={dailyCholestral}
                                sodium={dailySodium}
                                sugar={dailySugar}
                                protein={dailyProtein}
                                carbs={dailyCarbs}
                            />
                        </Col>
                        <Col md={{span: 5}}>
                            <MacrosCard 
                                title="Daily Macronutrient Information"
                                fat={dFat}
                                protein={dProtein}
                                carbs={dCarbs}
                            />
                        </Col>
                    </Row>

                    <div id="week-wrapper">
                        <Week props={weeklyMeals} />
                    </div>

                    <Row className="nutrition-wrapper">
                        <Col md={{span: 5, offset: 1}}>
                            <MacrosCard 
                                title="Weekly Macronutrient Information"
                                fat={wFat}
                                protein={wProtein}
                                carbs={wCarbs}
                                />
                        </Col>
                        <Col md={{span: 5}}>
                            <NutrionInfoCard
                                title="Weekly Nutrition Information"
                                calories={weeklyCalories}
                                fat={weeklyFat}
                                cholestral={weeklyCholestral}
                                sodium={weeklySodium}
                                sugar={weeklySugar}
                                protein={weeklyProtein}
                                carbs={weeklyCarbs}
                            />
                        </Col>
                    </Row>
                   
                </Container>
                <CustomFooter />
                <CustomFeedback />
            </div>
        )
    }
}

function mapStateToProps (state) {
    const weeklyMeals = dummyData.dummyMeals
    const isLoading = state.meals.mealsLoading

    return { weeklyMeals, isLoading }
}

const actionCreators = {
    getWeeklyMeals: mealsActions.getWeeklyMeals,
}

export default connect(mapStateToProps, actionCreators)(Home);