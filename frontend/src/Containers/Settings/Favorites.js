import React, { Component } from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import { NavigationBar } from '../../Components/Navigation/navigationBar';
import CustomFooter from '../../Components/Navigation/Footer';
import SideBar from '../../Components/Navigation/sidebar';
import { mealsActions } from '../../Redux/Actions/MealsActions';
import { connect } from 'react-redux'
import HorizontalMealCard from '../../Components/Calendar/horizontalMealCard';
import CustomFeedback from '../../Components/Feedback/CustomFeedback';

export class Favorites extends Component {
    constructor(props) {
        super(props)

        this.populateFavCards = this.populateFavCards.bind(this)
    }

    componentWillMount() {
        //this.props.getFavorites();
    }

    populateFavCards() {
        var favCards = []
        const list = this.props.favList

        console.log(this.props.favList)

        for( let i = 0; i < list.length; i++) {
            favCards.push(
                <Row>
                    <HorizontalMealCard
                        className="favorites-card"
                        type="FAVORITES"
                        label={list[i].label}
                        image={list[i].image}
                        source={list[i].source}
                        calories={list[i].calories}
                        carbs={list[i].carbs}
                        protein={list[i].protein}
                        fat={list[i].fat}
                        removeFavMeal={this.props.removeFav}
                    />
                </Row>
            )
        }
        
        return (favCards)
    }
    render() {
        return (
            <div id="home">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"home"}/>
                <Container id="page-wrap">
                    <NavigationBar />
                        
                        <Col md={{span: 8, offset: 2}} style={{marginTop: '5%'}}>
                            <h1 className="PageTitleFont" id="fav-title">My Favorites</h1>
                            {this.populateFavCards()}
                        </Col>
                
                </Container>
                <CustomFeedback />
                <CustomFooter />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    favList: state.meals.favorites,
})

const mapDispatchToProps = {
    getFavorites: mealsActions.getFavMeals,
    removeFav: mealsActions.removeFavMeal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
