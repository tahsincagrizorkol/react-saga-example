import createSagaMiddleware from 'redux-saga';
import todosSlice from './saga/todoSlice';
import { rootReducer, rootSaga } from 'saga-slice';
import { configureStore } from '@reduxjs/toolkit';
import crudTestSlice from './saga/crudTestFile';

const modules = [todosSlice, crudTestSlice];

const sagaMiddleware = createSagaMiddleware();

const appReducer = rootReducer(modules, {});

const store = configureStore({
	reducer: appReducer,
	middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga(modules));

export default store;
