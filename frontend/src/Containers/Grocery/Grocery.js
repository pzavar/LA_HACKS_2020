import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, Form, Button, Modal } from 'react-bootstrap';
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
    "3 potatoes",
    "3 cups brown rice",
    "2 lbs lamb chops",
    "4 sprigs dill",
    "4 carrots",
    "1 cabbage",
    "2 lbs brussel sprouts",
    "1 banana bread mix",
]

class Grocery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groceryList: dummyData.dummyGrocery,
            modalShow: false,
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
                            <h1 id="grocery-title" className="PageTitleFont">Grocery List</h1>

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
                            <div id="grocery-list-brn-wrapper">
                            <Button id="grocery-list-checkout-btn"  onClick={() => this.setState({modalShow: true})}>CHECKOUT WITH INSTACART</Button>

                            <Modal
                            show={this.state.modalShow}
                            onHide={() => this.setState({modalShow: false})}
                            centered
                            >
                                <Modal.Header closeButton />
                                <Modal.Body>
                                    <h1 className="BodyFont" id="custom-feedback-title">Feature coming soon! </h1>
                                    <h1 className="BodyFont" id="custom-feedback-title">Sign up on our waitlist for updates on product release!</h1>
                                    <Form>
                                        <Form.Label className="BodyFont" id="custom-feedback-text">Email</Form.Label>
                                        <Form.Control 
                                            type="email"
                                            placeholder="Enter email"
                                            className="BodyFont"
                                            id="custom-feedback-text"
                                            style={{marginBottom: '3%'}}
                                        />
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => this.setState({modalShow: false})}>Submit</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
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


