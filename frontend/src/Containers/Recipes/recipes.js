import React, { Component } from 'react'
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { Daily } from '../../Components/Calendar/daily';
import { connect } from 'react-redux';
import Loading from '../../Components/Loading/Loading';


import '../../Components/Styles/styles.css';
import { mealsActions } from '../../Redux/Actions/MealsActions';

const daily = [ {
    uri: '112',
    label: 'Mac & Cheese',
    image: '',
    source: 'All Recipes',
    url: '',
    yield: '6',
    calories: '890',
    totalWeight: '',
    ingredients: '',
    totalNutrients: '',
    totalDaily: '',
    healthLabels: ["Paleo"],
},{
    uri: '112',
    label: 'Mac & Cheese',
    image: '',
    source: 'All Recipes',
    url: '',
    yield: '6',
    calories: '890',
    totalWeight: '',
    ingredients: '',
    totalNutrients: '',
    totalDaily: '',   
    healthLabels: ["Paleo"],     
},{
    uri: '112',
    label: 'Mac & Cheese',
    image: '',
    source: 'All Recipes',
    url: '',
    yield: '6',
    calories: '890',
    totalWeight: '',
    ingredients: '',
    totalNutrients: '',
    totalDaily: '',   
    healthLabels: ["Paleo"],     
}];


class Recipes extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getWeeklyMeals()
    }

    
    

    render() {
        const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } = this.props.weeklyMeals;

        if(this.props.isLoading) {
            return (
                <Loading />
            )
        } else {
            return (
                <div id="home">
                    <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                    <Container id="page-wrap">
                        <NavigationBar />
                        <header>
                            <h2 className="SubheaderFont">My Weekly Meals</h2>
                        </header>
                        <div style={{margin:20}}/>


                        <h3 className="BodyFontB">Sunday</h3>
                        <div style={{margin:10}} />
                        <Row>
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
                        <div style={{margin:10}} />
                        <Daily daily={sunday} />
                        <div style={{margin:50}} />


                        <h3 className="BodyFontB">Monday</h3>
                        <div style={{margin:10}} />
                        <Row>
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
                        <div style={{margin:10}} />
                        <Daily daily={monday} />
                        <div style={{margin:50}} />


                        <h3 className="BodyFontB">Tuesday</h3>
                        <div style={{margin:10}} />
                        <Row>
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
                        <div style={{margin:10}} />
                        <Daily daily={tuesday} />
                        <div style={{margin:50}} />


                        <h3 className="BodyFontB">Wednesday</h3>
                        <div style={{margin:10}} />
                        <Row>
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
                        <div style={{margin:10}} />
                        <Daily daily={wednesday} />
                        <div style={{margin:50}} />


                        <h3 className="BodyFontB">Thursday</h3>
                        <div style={{margin:10}} />
                        <Row>
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
                        <div style={{margin:10}} />
                        <Daily daily={thursday} />
                        <div style={{margin:50}} />


                        <h3 className="BodyFontB">Friday</h3>
                        <div style={{margin:10}} />
                        <Row>
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
                        <div style={{margin:10}} />
                        <Daily daily={friday} />
                        <div style={{margin:50}} />



                        <h3 className="BodyFontB">Saturday</h3>
                        <div style={{margin:10}} />
                        <Row>
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
                        <div style={{margin:10}} />
                        <Daily daily={saturday} />
                        <div style={{margin:50}} />
                    </Container>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    const weeklyMeals = state.meals.weeklyMeals
    const isLoading = state.meals.mealsLoading

    return { weeklyMeals, isLoading }
}

const actionCreators = {
    getWeeklyMeals: mealsActions.getWeeklyMeals,
}

export default connect(mapStateToProps, actionCreators)(Recipes)