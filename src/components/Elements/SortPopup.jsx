import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from 'prop-types';

const SortPopup = React.memo(({ sortList, activeSortIndex, onSelectSort }) => {
    const [isVisiblePopup, setVisiblePopup] = useState(false);
    const activeLabel = sortList.find((item) => item.type === activeSortIndex).name;
    const selectSortItem = (type) => {
        setVisiblePopup(false)
        onSelectSort(type)
    }

    const showPopup = () => {
        setVisiblePopup(true);
    }

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setVisiblePopup(false)
            }}
        >
            <div className="sort"
            >
                <div className="sort__label">
                    <svg
                        className={ !isVisiblePopup ? 'rotated' : ''}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b>Сортировка по:</b>
                    <span onClick={showPopup}>
                    { activeLabel }
                </span>
                </div>
                {
                    isVisiblePopup ?
                        <div className="sort__popup">
                            <ul>
                                {
                                    sortList.map((item, index) => {
                                        return (
                                            <li
                                                key={`${item}_${index}`}
                                                className={
                                                    activeSortIndex === item.type ? 'active' : ''
                                                }
                                                onClick={() => selectSortItem(item.type)}
                                            >{ item.name }</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        : null
                }
            </div>
        </OutsideClickHandler>
    )
})


SortPopup.propTypes = {
    activeSortIndex: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelectSort: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
    items: [],
};

export default SortPopup;
