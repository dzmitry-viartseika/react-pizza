import React, { useState, useMemo} from 'react';
import { CategoriesItem } from "../index";

const Categories = React.memo(({ items, onSelectCategory }) => {
    const [category, setCategory] = useState(null)
    const activeCategory = (name) => {
        setCategory(name);
        onSelectCategory(name)
    }
    return (
        <div className="categories">
            <ul>
                <li
                    className={category === null ? 'active' : ''}
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
                                active={category === name}
                                onClick={() => activeCategory(name)}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
});

export default Categories;
