import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import loadingSlice from './loadingSlice';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    loading: loadingSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
