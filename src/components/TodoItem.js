import { useDispatch } from 'react-redux';
import { todoActions } from '../saga/todoSlice';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	return (
		<div className='p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl'>
			<h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-blue'>{todo.title}</h1>

			<p className='text-gray-500 dark:text-gray-300'>{todo.body}</p>

			<div>
				<input
					type='checkbox'
					onChange={() =>
						dispatch(
							todoActions.editTodo({
								id: todo._id,
								data: { completed: !todo.completed },
							}),
						)
					}
					checked={todo.completed}
				/>
				<label className='ml-4'>Tamamlandı</label>
			</div>
			<div>
				<button
					className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => dispatch(todoActions.deleteTodo(todo._id))}>
					Sil
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
