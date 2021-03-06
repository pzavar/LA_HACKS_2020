import React, { Component } from 'react';
import { Container, Col, Row, Image} from 'react-bootstrap'
import NavBarEntry from '../../Components/Navigation/navBarEnty';
import CustomFooter from '../../Components/Navigation/Footer';

import John from '../../Assets/john.png';
import Ash from '../../Assets/ash.png';
import Parham from '../../Assets/parham.png';

import './about.css';
import '../../Components/Styles/styles.css';


const aboutPara = "Fork & Spatula was founded by a group of like-minded UCLA students who always seemed to not have enough time to eat good meals at home while on a budget. Being busy with school and work, we imagined a product that could not only help us in the kitchen, but could also handle the budgeting and grocery cost management. Our health is at the core of our values, and we realized that eating at home did not have to be difficult if planned well. This drove us to establish Fork & Spatula as your personal food-assistant presenting a wide range of recipes and their macro calculations, while also finding you the best grocery deals in your area, because we believe that eating well at home does not have to be neither difficult nor expensive!"

export default class About extends Component {
    render() {
        return (
            <Container>
                <NavBarEntry />
                <Row style={{marginTop: '5%', marginBottom: '25%'}}>
                    <Col md={{span: 8, offset: 2}}>
                        <h1 className="PageTitleFont">About</h1>
                            <div className="BodyFontF" id="about-body">
                                {aboutPara}
                            </div>

                        <h1 className="PageTitleFont" style={{marginTop:'10%', marginBottom: '5%'}}>Meet the Team</h1>
                            <Row>
                            <Col>
                                <Image src={Parham} roundedCircle id="about-profile-img"/>
                                <h2 className="BodyFont" id="about-profile-title">Parham Hajzavar</h2>
                                <p className="BodyFont" id="about-profile-subtitle">Co-Founder, CEO</p>
                            </Col>
                            <Col>
                                <Image src={Ash} roundedCircle id="about-profile-img"/>
                                <h2 className="BodyFont" id="about-profile-title">Ashkan Faghihi</h2>
                                <p className="BodyFont" id="about-profile-subtitle">Co-Founder, CTO</p>

                            </Col>
                            <Col>
                                <Image src={John} roundedCircle id="about-profile-img"/>
                                <h2 className="BodyFont" id="about-profile-title">Johnson Chou</h2>
                                <p className="BodyFont" id="about-profile-subtitle">Co-Founder, CFO</p>
                            </Col>
        
                        </Row>
                    </Col>
                </Row>

                <CustomFooter />
            </Container>
        )
    }
}





