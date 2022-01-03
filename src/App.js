import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import { todoActions } from './saga/todoSlice';
import crudTestSlice from './saga/crudTestFile';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

export default function App() {
	const { todos, todoError, isTodoFetching } = useSelector((state) => state.todos);
	const { data: tasks, error, isFetching } = useSelector((state) => state.tasks);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(todoActions.fetchTodos());
		dispatch(crudTestSlice.actions.readAll());
	}, [dispatch]);
	const submitHandler = (data, e) => {
		e.target.reset();
		dispatch(todoActions.addTodo(data));
	};
	return (
		<div className='App'>
			<Form onSubmitHandler={submitHandler} />
			{isTodoFetching && <Loader />}
			{todoError && <h1 className='error-message'>{todoError}</h1>}
			{todos && todos.map((todo, index) => <TodoItem todo={todo} key={todo._id} />)}
		</div>
	);
}
