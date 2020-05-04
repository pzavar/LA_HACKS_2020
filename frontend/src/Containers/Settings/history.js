import React, { Component } from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';
import { mealsActions } from '../../Redux/Actions/MealsActions';
import { connect } from 'react-redux'

class History extends Component {
    render() {
        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <Col md={{span: 10, offset: 1}} style={{marginTop: '5%'}}>
                        <h1 className="PageTitleFont">History</h1>
                        <div style={{margin:30}}/>
                        <Table>
                            <thead>
                                <tr>
                                    <th className="BodyFontF">Date</th>
                                    <th className="BodyFontF">Meal</th>
                                    <th className="BodyFontF">Source</th>
                                    <th className="BodyFontF">Url</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="BodyFontF">3/12/20</th>
                                    <th className="BodyFontF">Mac & Cheese</th>
                                    <th className="BodyFontF">All Recipes</th>
                                    <th className="BodyFontF"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                                </tr>
                                <tr>
                                    <th className="BodyFontF">3/13/20</th>
                                    <th className="BodyFontF">Lasagna</th>
                                    <th className="BodyFontF">Italian Made Ez</th>
                                    <th className="BodyFontF"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                                </tr>
                                <tr>
                                    <th className="BodyFontF">3/14/20</th>
                                    <th className="BodyFontF">Spanish Ham</th>
                                    <th className="BodyFontF">Meals 4 U</th>
                                    <th className="BodyFontF"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                                </tr>
                                <tr>
                                    <th className="BodyFontF">3/15/20</th>
                                    <th className="BodyFontF">Chinese Vegetable Stir Fry</th>
                                    <th className="BodyFontF">Chinese Wok Express</th>
                                    <th className="BodyFontF"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                                </tr>
                                <tr>
                                    <th className="BodyFontF">3/15/20</th>
                                    <th className="BodyFontF">Hainan Chicken</th>
                                    <th className="BodyFontF">Wok the Talk</th>
                                    <th><a className="BodyFontF" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Container>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const {history} = state.meals;

    return(history)
}

const mapDispatchToProps = {
    getHistoryMeals: mealsActions.getHistoryMeals,
}

export default connect(mapStateToProps, mapDispatchToProps)(History)

