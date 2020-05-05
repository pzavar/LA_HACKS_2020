import React from 'react';
import { Col, Row, Table, Modal, Button } from 'react-bootstrap';

import "../Styles/styles.css";
import "../../Containers/Home/home.css";


/*
                Props
    -------------------------------------
    name                description
    -------------------------------------
    meals               weekly meals list


*/

function parseMealsData(props) {
    var breakfast = [];
    var lunch = [];
    var dinner = [];

    for (let i = 0; i < props.length; i+=3) {
        breakfast.push(props[i])
        lunch.push(props[i+1])
        dinner.push(props[i+2])
    }

    return ({breakfast, lunch, dinner})
}


function MyWeeklyCards(props) {
    const meals = props.meals;

    var cards = [];
    for (let i = 0; i < meals.length; i++) {
        console.log(meals[i])
        cards.push(
            <React.Fragment key={i}>
            <td key={i}>
                <div onClick={props.onShow} className="BodyFontF" id="weekly-menu-item">{meals[i].label}</div>
            </td>
            <Modal
            show={props.modalShow}
            onHide = {props.onHide}
            size="lg"
            animation={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="BodyFont" id="week-title">{meals[i].label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={5} id="week-img-wrapper">
                        <a href={meals[i].url} id="week-img"><img src={meals[i].image} id="week-img"/></a>
                    </Col>
                    <Col>
                        <p className="BodyFont" id="week-summary">{meals[i].summary}</p>
                        <p className="BodyFont" id="week-body">
                            Servings: {meals[i].servings} <br />
                            Price per Serving: ${meals[i].pricePerServing} <br/>
                            Time: {meals[i].readyInMinutes} mins <br/>
                            Calories: {meals[i].calories} <br/>
                            Carbs: {meals[i].carbs} <br/>
                            Protein: {meals[i].protein} <br/>
                            Fat: {meals[i].fat} <br/>
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
            </React.Fragment>
        );
    }

  
    return cards;
}

export function Week(props) {
    const [modalShow, setModalShow] = React.useState(false);
    
    const meals = parseMealsData(props.props)
    return (
        <Row className="weekly-table-wrapper">
            <header style={{ marginBottom: 15, marginTop: 10}}>
                <h2 className="BodyFontG">My Weekly Meals</h2>
            </header>
            <Table responsive>
                <thead>
                    <tr>
                        <th className="BodyFont">Sun</th>
                        <th className="BodyFont">Mon</th>
                        <th className="BodyFont">Tue</th>
                        <th className="BodyFont">Wed</th>
                        <th className="BodyFont">Thu</th>
                        <th className="BodyFont">Fri</th>
                        <th className="BodyFont">Sat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <MyWeeklyCards 
                            meals={meals.breakfast}
                            onHide={() => setModalShow(false)}
                            onShow={() => setModalShow(true)}
                            modalShow={modalShow}
                        />
                    </tr>
                    <tr>
                        <MyWeeklyCards 
                            meals={meals.lunch}
                            onHide={() => setModalShow(false)}
                            onShow={() => setModalShow(true)}
                            modalShow={modalShow}
                        />
                    </tr>
                    <tr>
                        <MyWeeklyCards 
                            meals={meals.dinner}
                            onHide={() => setModalShow(false)}
                            onShow={() => setModalShow(true)}
                            modalShow={modalShow}
                        />
                    </tr>
                </tbody>
            </Table>
        </Row>
    )
}
