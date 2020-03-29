import React from 'react';
import { Col, Card, Row, Table } from 'react-bootstrap';
import MealCards from './mealCards';



/*
    props:
        url
        image
        label
        source
        yield
        calories
        healthLabels

*/

function populateCards(props) {
    var cards = [];
    for (let i = 0; i < props.length; i++) {
        cards.push(
            <MealCards
                url={props[i].url}
                image={props[i].image}
                label={props[i].label}
                source={props[i].source}
                yield={props[i].yield}
                calories={props[i].calories}
                healthLabels={props[i].healthLabels}
            />
        );
    }

    return cards;
}

function fillTableRows(props) {
    return(
        <tr>
            {props.map(card => (
                <td>
                    {card}
                </td>
            ))}
        </tr>
    )
}

export function Week(props) {

    const breakfast = populateCards(props.meals.breakfast)
    const lunch = populateCards(props.meals.lunch)
    const dinner = populateCards(props.meals.dinner)

    console.log(JSON.stringify(props.meals.dinner))

    return (
        <Row>
            <header style={{marginBottom: 15, marginTop: 10}}>
                <h2>My Weekly Meals</h2>
            </header>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {fillTableRows(breakfast)}
                    {fillTableRows(lunch)}
                    {fillTableRows(dinner)}
                </tbody>
            </Table>
        </Row>
    )
}

/*

                    
                    


        <div>
            <table className="weekly-calendar">
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tueday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <Card bg={"warning"} style={{width: '10rem'}}>
                                <Card.Body>
                                    <Card.Title>Breakfast</Card.Title>
                                    <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                    <Card.Text>Handomse and creamy mac and cheese.</Card.Text>
                                </Card.Body>
                            </Card>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

*/


/*

  return (
        <Row>
            <header style={{marginBottom: 15, marginTop: 10}}>
                <h2>My Weekly Meals</h2>
            </header>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Card bg={"warning"} text={'white'} style={{width: '8rem'}}>
                                <Card.Body>
                                    <Card.Title>Breakfast</Card.Title>
                                    <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                    <Card.Text>Handomse and creamy mac and cheese.</Card.Text>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                            <Card bg={"warning"} text={'white'} style={{width: '8rem'}}>
                                <Card.Body>
                                    <Card.Title>Breakfast</Card.Title>
                                    <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                    <Card.Text>Handomse and creamy mac and cheese.</Card.Text>
                                </Card.Body>
                            </Card>
                                    </td>
                                    <td>
                                        <Card bg={"warning"} text={'white'} style={{width: '8rem'}}>
                                            <Card.Body>
                                                <Card.Title>Breakfast</Card.Title>
                                                <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                                <Card.Text>Handomse and creamy mac and cheese.</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                    <td>
                                    <Card bg={"warning"} text={'white'} style={{width: '8rem'}}>
                                        <Card.Body>
                                            <Card.Title>Breakfast</Card.Title>
                                            <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                            <Card.Text>Handomse and creamy mac and cheese.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </td>
                                <td>
                                <Card bg={"warning"} text={'white'} style={{width: '8rem'}}>
                                    <Card.Body>
                                        <Card.Title>Breakfast</Card.Title>
                                        <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                        <Card.Text>Handomse and creamy mac and cheese.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </td>
                            <td>
                            <Card bg={"warning"} text={'white'} style={{width: '8rem'}}>
                                <Card.Body>
                                    <Card.Title>Breakfast</Card.Title>
                                    <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                    <Card.Text>Handomse and creamy mac and cheese.</Card.Text>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                        <Card bg={"warning"} text={'white'} style={{width: '8rem'}}>
                            <Card.Body>
                                <Card.Title>Breakfast</Card.Title>
                                <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                <Card.Text>Handomse and creamy mac and cheese.</Card.Text>
                            </Card.Body>
                        </Card>
                    </td>
                    </tr>
                    <tr>
                        <td>
                            <Card bg={"success"} text={'white'} style={{width: '8rem'}}>
                                <Card.Body>
                                    <Card.Title>Breakfast</Card.Title>
                                    <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                    <Card.Text>Handomse and creamy mac and cheese.</Card.Text>
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Row>
    )

*/