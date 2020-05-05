import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, Form } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';

import {connect} from 'react-redux';
import { mealsActions } from '../../Redux/Actions/MealsActions';

import './grocery.css';
import Loading from '../../Components/Loading/Loading';
import CustomFooter from '../../Components/Navigation/Footer';

import { dummyData } from '../../Redux/Reducers/dummy';
import CustomFeedback from '../../Components/Feedback/CustomFeedback';

const data = [
    "potatoes",
    "brown rice",
    "lamb chops",
    "dill",
    "carrots",
    "cabbage",
    "brussel sprouts",
    "banana bread mix",
]

class Grocery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groceryList: dummyData.dummyGrocery,
        }

        this.handleChange = this.handleChange.bind(this);
    }


    componentWillMount() {
        console.log("Entered get grocery")
        this.props.getGrocery()
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
        const groceryList = this.state.groceryList; // this.props.grocery
        if (this.props.isLoading) {
            return (<Loading />)
        } else {
            return (
                <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <Row style={{marginTop: '5%'}}>
                        <Col md={{span: 8, offset: 2}}>
                            <h1 id="grocery-title" className="PageTitleFont">This Week's Grocery List</h1>
                            <ListGroup className="grocery-list-wrapper">
                                { groceryList.map( item => (
                                    <ListGroup.Item className="grocery-list-item" key={item}>
                                        <Form.Check
                                            custom
                                            type='checkbox'
                                            name='groceryList'
                                            id={item}
                                            label={item}
                                            value={item}
                                            style={{marginBottom:5}}
                                            className="BodyFontD grocery-list-checkbox"
                                        />
                                    </ListGroup.Item>
                                    ))
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                
                </Container>
                <CustomFeedback />
                <CustomFooter />
                </div>
            )
        }

    }
}

function mapStateToProps (state) {
    const grocery = state.meals.grocery
    const isLoading = state.meals.getGroceryLoading

    return { grocery, isLoading }
}

const actionCreators = {
    getGrocery: mealsActions.getGrocery,
}

export default connect(mapStateToProps, actionCreators)(Grocery);


