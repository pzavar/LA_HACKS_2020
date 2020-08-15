import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'
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
                    <h1 className="BodyFont" id="custom-feedback-title">We would love to hear your feedback!</h1>
                    <div style={{margin:50}}/>
                    <Button id="feedback-submit-button" href="https://www.surveymonkey.com/r/GFTLRLJ">Take Survey Here</Button>

                </Modal.Body>
                </Modal>
                
            </div>
        )
    }
}

/*  <a style="font: 12px Helvetica, sans-serif; color: #999; text-decoration: none;" href=www.surveymonkey.com> Create your own user feedback survey </a> */


/*
                    <script
                        src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdwDJB9xmyTMSURmUFHu_2B7D2a7ylelTVP3WOxKIiNL1Jk.js"
                        type="text/javascript"
                    />

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
*/


/*

<script>(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdwDJB9xmyTMSURmUFHu_2B7D2a7ylelTVP3WOxKIiNL1Jk.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");</script><a style="font: 12px Helvetica, sans-serif; color: #999; text-decoration: none;" href=www.surveymonkey.com> Create your own user feedback survey </a>


*/