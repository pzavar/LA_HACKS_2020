import React, { Component } from 'react';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { Daily } from '../../Components/Calendar/daily';
import PieChart from 'react-minimal-pie-chart';
import Loading from '../../Components/Loading/Loading';
import {connect} from 'react-redux';
import { mealsActions } from '../../Redux/Actions/MealsActions';

import './home.css'


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

        const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = weeklyMeals;
    
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
        const fat = 20;
        const protein = 40;
        const carbs = 40;
        const day = this.getDay()

        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <div style={{margin:20}} />
                    <header>
                        <h3 className="date-header" className="BodyFontC" >{day}'s Delicious Meals</h3>
                    </header>
                    <div style={{margin:20}} />
                    <Row className="meals-wrapper">
                        <Col>
                            <h4 className="BodyFont">Breakfast</h4>
                        </Col>
                        <Col>
                            <h4 className="BodyFont">Lunch</h4>
                        </Col>
                        <Col>
                            <h4 className="BodyFont">Dinner</h4>
                        </Col>
                    </Row>
                    <div className="meals-wrapper">

                    {isLoading ? <Loading /> : this.getTodaysMeals(weeklyMeals) }

                    </div>

                    <div style={{margin:70}} />
                    <Row>
                        <Col>
                            <header className="nutrient-header">
                                <h4 className="BodyFont">Daily Nutrient Intake</h4>
                            </header>
                            <div className="nutrient-info-wrapper">
                            <ListGroup variant="flush">
                                <ListGroup.Item className="BodyFont macros-item">Total Calories: </ListGroup.Item>
                                <ListGroup.Item className="BodyFont macros-item">Total Fat: </ListGroup.Item>
                                <ListGroup.Item className="BodyFont macros-item">Total Cholestral: </ListGroup.Item>
                                <ListGroup.Item className="BodyFont macros-item">Total Sodium: </ListGroup.Item>
                                <ListGroup.Item className="BodyFont macros-item">Total Sugar: </ListGroup.Item>
                                <ListGroup.Item className="BodyFont macros-item">Total Protein: </ListGroup.Item>
                                <ListGroup.Item className="BodyFont macros-item">Total Carbs: </ListGroup.Item>
                            </ListGroup>
                            </div>
                        </Col>
                        <Col>
                            <header>
                                <h4 className="BodyFont">Daily Macros</h4>
                            </header>    
                            <div className="macros-wrapper">                 
                            <div className="pie-chart-wrapper">
                            <PieChart
                                animate={false}
                                animateDuration={500}
                                cx={50}
                                cy={50}
                                data={[
                                    { title: 'Fat', value: 10, color: '#E38627'},
                                    { title: 'Protein', value: 15, color: '#C13C37' },
                                    { title: 'Carb', value: 20, color: '#6A2135' },
                                ]}
                                label={true}
                                labelPosition={50}
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
                                style={{width:'50%', marginLeft:'25%', marginTop:'10%'}}
                            />
                            </div>
                            <div style={{margin:30}}/>
                            <ListGroup variant="flush" className="macros-list">
                                <ListGroup.Item  className="BodyFont macros-item" style={{color: '#E38627'}}>Fat: {fat} %</ListGroup.Item>
                                <ListGroup.Item  className="BodyFont macros-item" style={{color: '#C13C37'}}>Protein: {protein} %</ListGroup.Item>
                                <ListGroup.Item  className="BodyFont macros-item" style={{color: '#6A2135'}}>Carbs: {carbs} %</ListGroup.Item>
                            </ListGroup>
                            </div>   
                        </Col>
                    </Row>
                    <div style={{margin:50}} />
                </Container>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const weeklyMeals = state.meals.weeklyMeals
    const isLoading = state.meals.mealsLoading

    return { weeklyMeals, isLoading }
}

const actionCreators = {
    getWeeklyMeals: mealsActions.getWeeklyMeals,
}

export default connect(mapStateToProps, actionCreators)(Home);