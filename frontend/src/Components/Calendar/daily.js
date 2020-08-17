import React from 'react'
import VerticalMealCards from './verticalMealCard';
import { CardDeck } from 'react-bootstrap';
import './calendar.css';

function populateCards(props) {
    var cards = [];
    for (let i = 0; i < props.length; i++) {
        cards.push(
            <VerticalMealCards
                key={i}
                url={props[i].url}
                image={props[i].image}
                label={props[i].label}
                source={props[i].source}
                summary={props[i].summary}
                pricePerServing={props[i].pricePerServing}
                readyInMinutes={props[i].readyInMinutes}
                servings={props[i].servings}
                calories={props[i].calories}
                carbs={props[i].carbs}
                fat={props[i].fat}
                protein={props[i].protein}
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
