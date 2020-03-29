import React from 'react';
import { Col, Card, Row, Table } from 'react-bootstrap';
import "../Styles/styles.css"

function populateCards(props) {

}

function fillTableRows(props) {

}

export function Week(props) {
    return (
        <Row>
            <header style={{ marginBottom: 15, marginTop: 10}}>
                <h2 className="BodyFont">My Weekly Meals</h2>
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
                        <td>
                            <Card bg={"warning"} text={'white'} style={{width: '8rem'}}>
                                <Card.Body>
                                    <Card.Title className="BodyFont2">Breakfast</Card.Title>
                                    <Card.Subtitle>Macoroni & Cheese</Card.Subtitle>
                                    <Card.Text>Handsom and creamy mac and cheese.</Card.Text>
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