import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';

export default class Settings extends Component {
    render() {
        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <body>
                        <h1>Settings</h1>
                    </body>
                </Container>
            </div>
        )
    }
}
