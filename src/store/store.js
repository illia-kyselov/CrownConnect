import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articlesSlice';
import meetingsReducer from './slices/meetingsSlice';

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        meetings: meetingsReducer,
    },
});
