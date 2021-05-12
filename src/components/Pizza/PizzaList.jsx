import React from 'react';
import { PizzaItem } from "../index";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import PizzaPlaceholder from "./PizzaPlaceholder";

const PizzaList = ({items, addToCart}) => {
    const isLoaded = useSelector(state => state.pizza.isLoaded);
    const cartItems = useSelector((state) => state.cart.items);
    return (
        <div className="content__items">
            {
                isLoaded
                    ? items.map((pizza) =>
                        <PizzaItem
                            key={pizza.id}
                            {...pizza}
                            addedPizza={cartItems[pizza.id] && cartItems[pizza.id].length || 0}
                        />)
                    : Array(12).fill(0).map((_, index) => <PizzaPlaceholder key={index} /> )}
        </div>
    )
}

PizzaList.propTypes  = {
    items: PropTypes.array,
    addToCart: PropTypes.func,
}
export default PizzaList;
