import React from 'react';
import { Categories, SortPopup, PizzaList } from "../components";
import { useDispatch } from "react-redux";

const Home = ({ items }) => {
    const dispatch = useDispatch();



    return (
        <div className="wrapper">
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={
                            ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
                        }/>
                        <SortPopup sortList={
                            [
                                {name: 'популярности', type: 'popular'},
                                {name: 'цене', type: 'price'},
                                {name: 'алфавиту', type: 'abc'}
                            ]
                        }/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <PizzaList items={items}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
