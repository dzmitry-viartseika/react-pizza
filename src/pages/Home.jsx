import React, {useCallback, useEffect} from 'react';
import { Categories, SortPopup, PizzaList } from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryList = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortList = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'name'}
]

const Home = () => {
    const dispatch = useDispatch();
    const pizzasList = useSelector(state => state.pizza.pizzas);
    const { category, sortBy } = useSelector(state => state.filter);

    useEffect( () => {
            dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    const onSelectSort = useCallback((index) => {
        dispatch(setSortBy(index))
    }, [])

    return (
        <div className="wrapper">
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={categoryList}
                                    onSelectCategory={onSelectCategory}
                                    activeCategoryIndex={category}
                        />
                        <SortPopup
                            sortList={sortList}
                            activeSortIndex={sortBy}
                            onSelectSort={onSelectSort}
                        />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <PizzaList items={pizzasList} />
                </div>
            </div>
        </div>
    )
}

export default Home;
