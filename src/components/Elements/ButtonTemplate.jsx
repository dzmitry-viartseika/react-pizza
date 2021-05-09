import React, { Component } from 'react';
import classNames from "classnames";

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

export default ButtonTemplate;
