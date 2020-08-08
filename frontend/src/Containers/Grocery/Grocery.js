import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, Form, Button, Modal } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';

import {connect} from 'react-redux';

import './grocery.css';
import CustomFooter from '../../Components/Navigation/Footer';

import CustomFeedback from '../../Components/Feedback/CustomFeedback';

import InstaCart from '../../Assets/instacart.png';

class Grocery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
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
        const groceryList = this.props.grocery;
        
        return (
            <div id="home">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
            <Container id="page-wrap">
                <NavigationBar />
                <Row style={{marginTop: '5%'}}>
                    <Col md={{span: 8, offset: 2}}>
                        <h1 id="grocery-title" className="PageTitleFont">Grocery List</h1>

                        <h1 className="BodyFont PageTitleFont" style={{fontSize: 16, marginBottom: 30}}>Select items to add to Instacart.</h1>
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
                        <div id="grocery-list-btn-wrapper">
                        <Button id="grocery-list-checkout-btn"  onClick={() => this.setState({modalShow: true})}><img id="instacart-img" src={InstaCart} alt="Instacart Logo"/></Button>

                        <CustomFeedback feedback={false} />
                        
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
            <CustomFeedback feedback={true}/>
            <CustomFooter />
            </div>
        )
    }

}

function mapStateToProps (state) {
    const grocery = state.meals.groceryList;

    return { grocery }
}

export default connect(mapStateToProps)(Grocery);


