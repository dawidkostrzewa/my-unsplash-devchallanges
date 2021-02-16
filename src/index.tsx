import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'Styles/app.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import popupReducer from 'Features/popupSlice';
import spinnerReducer from 'Features/spinnerSlice';
import { SLICES } from 'Features/slices';

const store = configureStore({
    reducer: {
        [SLICES.POPUP]: popupReducer,
        [SLICES.SPINNER]: spinnerReducer
    }
});

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
