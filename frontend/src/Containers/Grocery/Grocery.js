import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, Form } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';

import './grocery.css';

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

export default class Grocery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groceryList: data
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
        const groceryList = this.state.groceryList;
        return (
            <div id="home">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
            <Container id="page-wrap">
                <NavigationBar />
                <Row style={{marginTop: '5%'}}>
                    <Col md={{span: 8, offset: 2}}>
                        <h1 id="grocery-title" className="BodyFontD">This Week's Grocery List</h1>
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
            </div>
        )
    }
}
