import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { Daily } from '../../Components/Calendar/daily';

import '../../Components/Styles/styles.css';

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
                    <Daily daily={daily} />
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
                    <Daily daily={daily} />
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
                    <Daily daily={daily} />
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
                    <Daily daily={daily} />
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
                    <Daily daily={daily} />
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
                    <Daily daily={daily} />
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

                    <Daily daily={daily} />

                    <div style={{margin:50}} />
                </Container>
            </div>
        )
    }
}
