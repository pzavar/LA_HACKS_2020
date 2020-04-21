import React, { Component } from 'react';
import { Container, Row, } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';


export default class Search extends Component {
    render() {
        return (
            <div id="home">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
            <Container id="page-wrap">
                <Row>
                    <p>Page under construction</p>
                </Row>
            
            </Container>
                
            </div>
        )
    }
}
