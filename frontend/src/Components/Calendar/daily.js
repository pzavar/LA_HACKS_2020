import React, { Component } from 'react'
import MealCards from './mealCards';
import { Card, CardDeck } from 'react-bootstrap';

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

export function Daily(props) {
    var todaysMeals = populateCards(props.daily)
    
    return(
        <CardDeck>
            {todaysMeals}
        </CardDeck>
    )

}
