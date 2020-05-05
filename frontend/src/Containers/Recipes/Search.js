import React, { Component, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Form, Accordion, Card, } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import CustomFooter from '../../Components/Navigation/Footer';
import SideBar from '../../Components/Navigation/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import HorizontalMealCard from '../../Components/Calendar/horizontalMealCard';

import Cusine from '../../Components/Survey/Cusine';
import DietLifestyle from '../../Components/Survey/DietLifestyle';
import DietRestrict from '../../Components/Survey/DietRestrict';
import MealType from '../../Components/Survey/MealType';

import { connect } from 'react-redux';
import { mealsActions } from '../../Redux/Actions/MealsActions';

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


class Search extends Component {
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
            show: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.populateSearchCards = this.populateSearchCards.bind(this);
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

    handleSearch(e) {
        e.preventDefault()
        this.setState({show: true})
    }

    populateSearchCards() {
        var favCards = []
        const list = this.props.searchList

        

        for( let i = 0; i < list.length; i++) {
            favCards.push(
                <Row>
                    <HorizontalMealCard
                        className="search-meal-card"
                        type="SEARCH"
                        label={list[i].label}
                        image={list[i].image}
                        source={list[i].source}
                        calories={list[i].calories}
                        carbs={list[i].carbs}
                        protein={list[i].protein}
                        fat={list[i].fat}
                        removeFavMeal={this.props.removeFav}
                    />
                </Row>
            )
        }
        
        return (favCards)
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
                            <Button onClick={this.handleSearch}>
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
                                <Button onClick={this.handleSearch} className="advanced-search-btn">
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
                    {this.state.show 
                        ? this.populateSearchCards()
                        : null
                    }
                </Col>

                
            </Container>
            <CustomFooter />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchList: state.meals.favorites,
})

const mapDispatchToProps = {
    getFavorites: mealsActions.getFavMeals,
    removeFav: mealsActions.removeFavMeal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
