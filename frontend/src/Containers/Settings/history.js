import React, { Component } from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import SideBar from '../../Components/Navigation/sidebar';

export default class History extends Component {
    render() {
        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                    <h1>History</h1>
                    <Table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Meal</th>
                                <th>Source</th>
                                <th>Url</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>3/12/20</th>
                                <th>Mac & Cheese</th>
                                <th>All Recipes</th>
                                <th><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                            </tr>
                            <tr>
                                <th>3/13/20</th>
                                <th>Lasagna</th>
                                <th>Italian Made Ez</th>
                                <th><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                            </tr>
                            <tr>
                                <th>3/14/20</th>
                                <th>Spanish Ham</th>
                                <th>Meals 4 U</th>
                                <th><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                            </tr>
                            <tr>
                                <th>3/15/20</th>
                                <th>Chinese Vegetable Stir Fry</th>
                                <th>Chinese Wok Express</th>
                                <th><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                            </tr>
                            <tr>
                                <th>3/15/20</th>
                                <th>Hainan Chicken</th>
                                <th>Wok the Talk</th>
                                <th><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjWnvSRrb_oAhULqJ4KHRrUDhcQtwIwAHoECAgQAQ&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F11679%2Fhomemade-mac-and-cheese%2F&usg=AOvVaw3B8O9fexBiY4qZHmzXXKd0">Link</a></th>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
