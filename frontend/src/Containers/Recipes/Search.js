import React, { Component, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Form, Accordion, Card, } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import HorizontalMealCard from '../../Components/Calendar/horizontalMealCard';

import Cusine from '../../Components/Survey/Cusine';
import DietLifestyle from '../../Components/Survey/DietLifestyle';
import DietRestrict from '../../Components/Survey/DietRestrict';
import MealType from '../../Components/Survey/MealType';

import './search.css';

function CustomToggle({ children, eventKey }) {
    const [open, setOpen] = useState(false);
    const decoratedOnCLick = useAccordionToggle(eventKey, () => setOpen(!open))

    if (!open) {
        return (
            <Card.Header
                className="advanced-search-toggle-text"
                onClick={decoratedOnCLick}
            >
            {children} <FontAwesomeIcon icon={faChevronDown} id="toggle-icon" />
            </Card.Header>
        )
    } else {
        return (
            <Card.Header
                className="advanced-search-toggle-text BodyFontD"
                onClick={decoratedOnCLick}
            >
            {children} <FontAwesomeIcon icon={faChevronUp} id="toggle-icon" />
            </Card.Header>
        )
    }

}


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            advanceSearch: false,
            cusine: [],
            diet: [],
            intolerances: [],
            type: [],
            maxCarbs: 0,
            maxFat: 0,
            maxProtein: 0,
            maxCalories: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        const {name, value} = e.target;

        if (this.state[name].includes(value)) {
            console.log("item exists")
            const items = this.state[name].filter((i) => i !== value)
            this.setState({[name]: items})
        } else {
            this.setState({
                [name]: [...this.state[name], value]
            })
            
        }
    }


    render() {

        return (
            <div id="home">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
            <Container id="page-wrap">
                <NavigationBar />
                <h3 className="page-title PageTitleFont">Find a Recipe</h3>
                <Row >
                    <Col md={{ span: 8, offset: 2 }} >
                    <InputGroup className="search-wrapper">
                        <FormControl
                            placeholder="Search"
                            type="text"
                            className="search-field"
                        />
                        <InputGroup.Append>
                            <Button>
                                <FontAwesomeIcon icon={faSearch} id="search-icon" />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <Accordion>
                        <Card className="advanced-search-card">
                            <CustomToggle eventKey="0">Advanced Search</CustomToggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="advanced-serch-card-body">
                                
                                <Form.Label id="form-label">Cusine</Form.Label>
                                <Cusine 
                                    className="advanced-search-form-cusine"
                                    handleChange={this.handleChange}
                                />

                                <Form.Label id="form-label">Lifestyle</Form.Label>
                                <DietLifestyle 
                                    api="spoonacular" 
                                    className="advanced-search-form-generic"
                                    type='checkbox'
                                    handleChange={this.handleChange}
                                />

                                <Form.Label id="form-label">Intolerances</Form.Label>
                                <DietRestrict 
                                    api="spoonacular"
                                    className="advanced-search-form-generic"
                                    type='checkbox'
                                    handleChange={this.handleChange}
                                />

                                <Form.Label id="form-label">Meal Type</Form.Label>
                                <MealType
                                    api="spoonacular"
                                    className="advanced-search-form-type"
                                    type='checkbox'
                                    handleChange={this.handleChange}
                                />
                                <Row>
                                <Col>
                                <Form.Label id="form-label">Max Carbs</Form.Label>
                                <InputGroup>
                                    <FormControl
                                        type="number"
                                        placeholder="Carbs"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text>g</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                </Col>
                                <Col>
                                <Form.Label id="form-label">Max Fat</Form.Label>
                                <InputGroup>
                                    <FormControl
                                        type="number"
                                        placeholder="Fat"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text>g</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                </Col>
                                <Col>
                                <Form.Label id="form-label">Max Protein</Form.Label>
                                <InputGroup>
                                    <FormControl
                                        type="number"
                                        placeholder="Protein"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text>g</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md={{span: 4, offset: 4}}>
                                <Form.Label id="form-label">Max Calories</Form.Label>
                                <InputGroup>
                                    <FormControl
                                        type="number"
                                        placeholder="Cal"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text>cal</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup> 
                                </Col>
                                </Row>

                                <Row>
                                <Button className="advanced-search-btn">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                                </Row>

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </Col>
                </Row>
            
                <Col md={{ span: 8, offset: 2 }} style={{marginTop: '5%'}}>
                    <HorizontalMealCard 
                        label="Mac and Cheese"
                        image="//placehold.it/150"
                        calories={500}
                        carbs={30}
                        fat={15}
                        protein={40}
                        className="search-meal-card"
                    />
                </Col>

            </Container>
                
            </div>
        )
    }
}
