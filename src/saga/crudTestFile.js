import { createModule } from 'saga-slice';
import { crudInitialState, crudReducers, crudSaga } from 'saga-slice-helpers';
import { sagaApi } from '../api';

const name = 'tasks'; // should be rest api endpoint name
const initialState = crudInitialState;
const reducers = crudReducers({
	readAllSuccess: (state, payload) => {
		state.data = payload;
	},
});
const sagas = crudSaga(
	{
		name,
		sagaApi,
		reducers,
	},
	(Action) => ({
		[Action.readAllSuccess]: function* (action) {
			console.log('readAll', action);
		},
	}),
);

const crudTestSlice = createModule({ name, initialState, reducers, sagas });

export default crudTestSlice;
