import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { Daily } from '../../Components/Calendar/daily';

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


export default class Recipes extends Component {
    render() {
        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <header>
                        <h2>My Weekly Meals</h2>
                    </header>
                    <div style={{margin:20}}/>


                    <h3>Sunday</h3>
                    <div style={{margin:10}} />
                    <Row>
                        <Col>
                            <h4>Breakfast</h4>
                        </Col>
                        <Col>
                            <h4>Lunch</h4>
                        </Col>
                        <Col>
                            <h4>Dinner</h4>
                        </Col>
                    </Row>
                    <div style={{margin:10}} />
                    <Daily daily={daily} />
                    <div style={{margin:50}} />


                    <h3>Monday</h3>
                    <div style={{margin:10}} />
                    <Row>
                        <Col>
                            <h4>Breakfast</h4>
                        </Col>
                        <Col>
                            <h4>Lunch</h4>
                        </Col>
                        <Col>
                            <h4>Dinner</h4>
                        </Col>
                    </Row>
                    <div style={{margin:10}} />
                    <Daily daily={daily} />
                    <div style={{margin:50}} />


                    <h3>Tuesday</h3>
                    <div style={{margin:10}} />
                    <Row>
                        <Col>
                            <h4>Breakfast</h4>
                        </Col>
                        <Col>
                            <h4>Lunch</h4>
                        </Col>
                        <Col>
                            <h4>Dinner</h4>
                        </Col>
                    </Row>
                    <div style={{margin:10}} />
                    <Daily daily={daily} />
                    <div style={{margin:50}} />


                    <h3>Wednesday</h3>
                    <div style={{margin:10}} />
                    <Row>
                        <Col>
                            <h4>Breakfast</h4>
                        </Col>
                        <Col>
                            <h4>Lunch</h4>
                        </Col>
                        <Col>
                            <h4>Dinner</h4>
                        </Col>
                    </Row>
                    <div style={{margin:10}} />
                    <Daily daily={daily} />
                    <div style={{margin:50}} />


                    <h3>Thursday</h3>
                    <div style={{margin:10}} />
                    <Row>
                        <Col>
                            <h4>Breakfast</h4>
                        </Col>
                        <Col>
                            <h4>Lunch</h4>
                        </Col>
                        <Col>
                            <h4>Dinner</h4>
                        </Col>
                    </Row>
                    <div style={{margin:10}} />
                    <Daily daily={daily} />
                    <div style={{margin:50}} />


                    <h3>Friday</h3>
                    <div style={{margin:10}} />
                    <Row>
                        <Col>
                            <h4>Breakfast</h4>
                        </Col>
                        <Col>
                            <h4>Lunch</h4>
                        </Col>
                        <Col>
                            <h4>Dinner</h4>
                        </Col>
                    </Row>
                    <div style={{margin:10}} />
                    <Daily daily={daily} />
                    <div style={{margin:50}} />



                    <h3>Saturday</h3>
                    <div style={{margin:10}} />
                    <Row>
                        <Col>
                            <h4>Breakfast</h4>
                        </Col>
                        <Col>
                            <h4>Lunch</h4>
                        </Col>
                        <Col>
                            <h4>Dinner</h4>
                        </Col>
                    </Row>
                    <div style={{margin:10}} />

                    <Daily daily={daily} />

                    <div style={{margin:50}} />
                </Container>
            </div>
        )
    }
}
