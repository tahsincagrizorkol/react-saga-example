import React from 'react';

import { useForm } from 'react-hook-form';

const Form = ({ onSubmitHandler }) => {
	const { register, handleSubmit } = useForm();

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
			<div className='mb-4'>
				<label className='block text-gray-700 text-sm font-bold mb-2'>Başlık</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					{...register('title')}
				/>
			</div>
			<div className='mb-4'>
				<label className='block text-gray-700 text-sm font-bold mb-2'>Açıklama</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					{...register('body')}
				/>
			</div>

			<div className='mb-4'>
				<input type='checkbox' {...register('completed')} />
				<label className='iblock text-gray-700 text-sm font-bold ml-4'>Tamamlandı</label>
			</div>
			<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>
				Ekle
			</button>
		</form>
	);
};

export default Form;
