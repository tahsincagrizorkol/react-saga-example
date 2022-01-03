import { createModule } from 'saga-slice';
import { put } from 'redux-saga/effects';

import { api } from '../api';

const todosSlice = createModule({
	name: 'todos',
	initialState: {
		isTodoFetching: false,
		todoError: null,
		todos: [],
	},
	reducers: {
		fetchTodos: (state) => {
			state.isTodoFetching = true;
		},
		finishFetching: (state) => {
			state.isTodoFetching = false;
			state.todoError = null;
		},
		fetchSuccess: (state, payload) => {
			state.todos = payload;
		},
		fetchError: (state) => {
			state.todoError = 'An error occurred';
		},
		addTodo: (state) => {
			state.isTodoFetching = true;
		},
		updateTodoList: (state, payload) => {
			state.todos = [...state.todos, payload];
		},
		deleteTodo: (state) => {
			state.isTodoFetching = true;
		},
		editTodo: (state) => {
			state.isTodoFetching = true;
		},
	},
	sagas: (A) => ({
		*[A.fetchTodos]() {
			try {
				const { data } = yield api.get('/tasks');
				yield put(A.finishFetching());
				yield put(A.fetchSuccess(data));
			} catch (e) {
				yield put(A.finishFetching());
				yield put(A.fetchError());
			}
		},
		*[A.addTodo]({ payload }) {
			try {
				const newTodo = yield api.post('/tasks', payload);
				yield put(A.finishFetching());
				yield put(A.updateTodoList(newTodo.data));
			} catch (e) {
				yield put(A.finishFetching());
				yield put(A.fetchError());
			}
		},
		*[A.deleteTodo]({ payload }) {
			try {
				yield api.delete(`/tasks/${payload}`);
				yield put(A.fetchTodos());
			} catch (e) {
				yield put(A.finishFetching());
				yield put(A.fetchError());
			}
		},
		*[A.editTodo]({ payload }) {
			try {
				yield api.patch(`/tasks/${payload.id}`, payload.data);
				yield put(A.fetchTodos());
			} catch (e) {
				yield put(A.finishFetching());
				yield put(A.fetchError());
			}
		},
	}),
});

export default todosSlice;
export const todoActions = todosSlice.actions;
