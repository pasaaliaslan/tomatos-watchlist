import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import WatchlistScreen from './WatchlistScreen';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import watchlistReducer from './redux/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const store = configureStore({
    reducer: {
        watchlist: watchlistReducer,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/watchlist" element={<WatchlistScreen />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
