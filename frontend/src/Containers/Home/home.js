import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { Week } from '../../Components/Calendar/week';


export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <body>
                        <Week />  
                    </body>
                </Container>
            </div>
        )
    }
}
