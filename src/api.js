import { createApis } from 'saga-slice-helpers';

export const { api, sagaApi } = createApis({
	baseURL: 'https://kovach-todo-api.herokuapp.com/',
	headers: {
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDVlYzE1ZjU3MzM4ZTAwMTczMTFkMjUiLCJpYXQiOjE1NjY0OTA5NzV9.GGeVPjBOhcy71lpJWBKB_f92KXlU2hV9AcHQKLMgwRk',
	},
});
