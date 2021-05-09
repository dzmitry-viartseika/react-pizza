import React from 'react';
import { Categories, SortPopup, PizzaList } from "../components";

const Home = ({ items }) => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories items={
                            ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
                        }/>
                        <SortPopup sortList={
                            ['популярности', 'цене', 'алфавиту']
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
