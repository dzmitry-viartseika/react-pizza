import React, { Component } from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import PizzaList from "../Pizza/PizzaList";

const ButtonTemplate = ({ onClick, className, outline, children }) => {
    return (
        <button className={classNames('button',
            className,
            {
            'button--outline': outline,
        },
        )}
            onClick={onClick}
        >
            { children }
        </button>
    )
}

ButtonTemplate.propTypes = {
    onClick: PropTypes.func,
    outline: PropTypes.bool,
    className: PropTypes.string,
}

export default ButtonTemplate;
