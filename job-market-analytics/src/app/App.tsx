import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import FilterContainer from "../features/filter/FilterContainer";
import store from './store';


function App() {
    return (
        <Provider store={store}>
            <main>
                <FilterContainer/>
            </main>
        </Provider>
    );
}

export default App;
