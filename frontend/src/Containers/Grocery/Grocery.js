import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, Form, Button, Modal, InputGroup, Spinner } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { usersActions } from '../../Redux/Actions/UserActions';

import {connect} from 'react-redux';

import './grocery.css';
import CustomFooter from '../../Components/Navigation/Footer';

import CustomFeedback from '../../Components/Feedback/CustomFeedback';

import InstaCart from '../../Assets/instacart.png';

import { Formik } from 'formik';
import * as Yup from 'yup';


const schema = Yup.object().shape({
    email: Yup.string().email("Please enter an appropiate email.").required("Please enter an appropiate email."),
});

class Grocery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            waitlistModalShow: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    loading() {
        return(
            <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
        )
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
                        <Button id="grocery-list-checkout-btn"  onClick={() => this.setState({waitlistModalShow: true})}><img id="instacart-img" src={InstaCart} alt="Instacart Logo"/></Button>

                        <CustomFeedback/>
                        

                        {/* Waitlist Modal */}
                        <Modal
                        show={this.state.waitlistModalShow}
                        onHide={() => this.setState({waitlistModalShow: false})}
                        centered
                    >
                        <Modal.Header closeButton />
                        <Modal.Body>
                            <h1 className="BodyFont" id="custom-feedback-title">Feature coming soon! </h1>
                            <h1 className="BodyFont" id="custom-feedback-title">Sign up on our waitlist for updates on product release!</h1>
                            <Formik
                            validationSchema={schema}
                            initialValues={{email: ""}}
                            onSubmit={(values) => {
                                this.props.signUp(values.email)
                            }}
                        >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            errors
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <InputGroup>
                                <Form.Control 
                                    type="email"
                                    name="email"
                                    placeholder="Enter email" 
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.email && !errors.email}
                                    className={touched.email && errors.email ? "landing-email-error BodyFontD" : "BodyFontD FormBox" }
                                />
                                <InputGroup.Append>
                                    <Button id="landing-page-email-submit" type="submit" disabled={this.props.emailSignUpLoading}> {this.props.emailSignUpLoading ? (this.loading()) : "Submit"}</Button>
                                </InputGroup.Append>
                                </InputGroup>
                                {touched.email && errors.email ? (
                                    <div id="landing-email-error-msg">{errors.email}</div>
                                ): null}
                                { this.props.emailSignUpSuccess ? (
                                    <div id="landing-email-success-msg">Email added!</div>
                                ) : null
                                }
                                { this.props.emailSignUpError ? (
                                    <div id="landing-email-error-msg">Error adding email. Try again later!</div>
                                ) : null
                                }
                                
                            </Form>
                        )}
                        </Formik>
                        </Modal.Body>
                        <Modal.Footer>
                            <div />
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
    const { emailSignUpLoading, emailSignUpSuccess, emailSignUpError} = state.user;

    return { grocery, emailSignUpLoading, emailSignUpSuccess, emailSignUpError }
}

const actionCreators = {
    signUp: usersActions.signUpWaitlist,
}

export default connect(mapStateToProps, actionCreators)(Grocery);


