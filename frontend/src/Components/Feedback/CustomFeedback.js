import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';



import './CustomFeedback.css'

export default class CustomFeedback extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
        }
    }

    render() {
        return (
            <div id="custom-feedback-wrapper">
                <div id="custom-feedback-button-wrapper">
                    <Button id="custom-feedback-button" onClick={() => this.setState({show: true})}><FontAwesomeIcon icon={faCommentAlt} id="custom-feedback-icon"/></Button>
                </div>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({show: false})}
                    centered
                >
                <Modal.Header closeButton />
                <Modal.Body>
                    <h1 className="BodyFont" id="custom-feedback-title">We would love to hear feedback from you!</h1>
                    <Form>
                        <Form.Label className="BodyFont" id="custom-feedback-text">Email (optional)</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="Enter email"
                            className="BodyFont"
                            id="custom-feedback-text"
                            style={{marginBottom: '3%'}}
                        />

                        <Form.Label className="BodyFont" id="custom-feedback-text">Comments</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows="3"
                            placeholder="Enter feedback here!"    
                            className="BodyFont"
                            id="custom-feedback-text"
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.setState({show: false})}>Submit</Button>
                </Modal.Footer>
                </Modal>
                
            </div>
        )
    }
}
