import React, {useCallback} from 'react';
import { Categories, SortPopup, PizzaList } from "../components";
import { useDispatch } from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categoryList = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortList = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'abc'}
]

const Home = ({ items }) => {
    const dispatch = useDispatch();

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    // const onSelectSort = useCallback((index) => {
    //     dispatch(setCategory(index))
    // }, [])

    return (
        <div className="wrapper">
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={categoryList}
                                    onSelectCategory={onSelectCategory}
                        />
                        <SortPopup sortList={sortList}/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <PizzaList items={items}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
