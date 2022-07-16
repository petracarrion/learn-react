import React from 'react';
import './App.css';
import FilterContainer, {FilterContainerProps} from "../features/filter/FilterContainer";

const filterItems: FilterContainerProps = {
    filterItems: [
        {
            name: 'company',
            options: [
                {
                    name: 'Vodafone',
                    weight: '99',
                    checked: false,
                },
                {
                    name: 'O2',
                    weight: '99',
                    checked: false,
                },
                {
                    name: 'Telekom',
                    weight: '99',
                    checked: false,
                },
            ],
        },
        {
            name: 'city',
            options: [
                {
                    name: 'Berlin',
                    weight: '99',
                    checked: false,
                },
                {
                    name: 'Hamburg',
                    weight: '99',
                    checked: false,
                },
                {
                    name: 'Heilbronn',
                    weight: '99',
                    checked: false,
                },
            ],
        },
    ],
};

function App() {
    return (
        <div>
            <main>
                <FilterContainer
                    filterItems={filterItems.filterItems}
                />
            </main>
        </div>
    );
}

export default App;
