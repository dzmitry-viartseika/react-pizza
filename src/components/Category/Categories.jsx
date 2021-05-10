import React from 'react';
import { CategoriesItem } from "../index";
import PropTypes from "prop-types";

const Categories = React.memo(({ items, onSelectCategory, activeCategoryIndex }) => {
    const activeCategory = (index) => {
        onSelectCategory(index)
    }
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategoryIndex === null ? 'active' : ''}
                    onClick={() => activeCategory(null)}
                >
                    Все
                </li>
                {
                    items.map((name, index) => {
                        return (
                            <CategoriesItem
                                key={`${name}_${index}`}
                                name={name}
                                active={activeCategoryIndex === index}
                                onClick={() => activeCategory(index)}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
});

Categories.propTypes  = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectCategory: PropTypes.func,
    activeCategoryIndex: PropTypes.number,
}

Categories.defaultProps = { activeCategoryIndex: null, items: [] }

export default Categories;
