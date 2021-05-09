import React from 'react';

const CategoriesItem = ({ name, onClick, active }) => {
    return (
        <li
            onClick={onClick}
            className={
                active ? 'active' : ''
            }
        >
            { name }
        </li>
    )
};

export default CategoriesItem;
