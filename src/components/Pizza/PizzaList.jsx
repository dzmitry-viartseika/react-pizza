import React from 'react';
import { PizzaItem } from "../index";
import PropTypes from 'prop-types';

const PizzaList = ({items}) => {
    return (
        <div className="content__items">
            {
                items && items.map((pizza) => {
                    return (
                        <PizzaItem
                            key={pizza.id}
                            {...pizza}
                        />
                    )
                })
            }
        </div>
    )
}

PizzaList.propTypes  = {
    items: PropTypes.array
}

export default PizzaList;
