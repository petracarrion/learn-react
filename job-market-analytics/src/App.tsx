import React from 'react';
import './App.css';
import FilterContainer, {FilterContainerProps} from "./components/FilterContainer";

const filterItems: FilterContainerProps = {
    filterItems: [
        {
            name: 'company',
            options: [
                {
                    name: 'Vodafone',
                    weight: '99',
                    checked: false,
                }
            ],
        }
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
