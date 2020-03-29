import React, { Component } from 'react';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { Daily } from '../../Components/Calendar/daily';
import PieChart from 'react-minimal-pie-chart';

import { meals } from './data';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

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

export default class Home extends Component {

    render() {
        const fat = 20;
        const protein = 40;
        const carbs = 40;
        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <header>
                        <h3>Today's Delicious Meals</h3>
                    </header>
                    <div style={{margin:20}} />
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

                    <div style={{margin:70}} />
                    <Row>
                        <Col>
                            <div className="nutrient-info-wrapper">
                            <header>
                                <h4>Daily Nutrient Intake</h4>
                            </header>
                            <div style={{margin:'10%'}} />
                            <ListGroup variant="flush" style={{width:'70%'}}>
                                <ListGroup.Item>Total Calories: </ListGroup.Item>
                                <ListGroup.Item>Total Fat: </ListGroup.Item>
                                <ListGroup.Item>Total Cholestral: </ListGroup.Item>
                                <ListGroup.Item>Total Sodium: </ListGroup.Item>
                                <ListGroup.Item>Total Sugar: </ListGroup.Item>
                                <ListGroup.Item>Total Protein: </ListGroup.Item>
                                <ListGroup.Item>Total Carbs: </ListGroup.Item>
                            </ListGroup>
                            </div>
                        </Col>
                        <Col>
                            <div className="pie-chart-wrapper">
                            <header>
                                <h4>Macros</h4>
                            </header>
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
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{color: '#E38627'}}>Fat: {fat} %</ListGroup.Item>
                                <ListGroup.Item style={{color: '#C13C37'}}>Protein: {protein} %</ListGroup.Item>
                                <ListGroup.Item style={{color: '#6A2135'}}>Carbs: {carbs} %</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <div style={{margin:50}} />
                </Container>
            </div>
        )
    }
}
