/*jslint
    white
*/

const APIURL = '/api/todos/';

export async function getTodos() {
	return fetch(APIURL)
		.then(res => {
			if (!res.ok) {
				if (res.status >= 400 && res.status < 500) {
					return res.json().then(data => {
						let err = {errorMessage: data.message};
						throw err;
					})
				} else {
					let err = {errorMessage: "Server issue. Try later."};
					throw err;
				}
			}
			return res.json();
		})
}

export async function createTodo(text) {
	return fetch(APIURL, {
		method: 'post',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({ name: text })
	})
	.then(res => {
		if (!res.ok) {
			if (res.status >= 400 && res.status < 500) {
				return res.json().then(data => {
					let err = {errorMessage: data.message};
					throw err;
				})
			} else {
				let err = {errorMessage: "Server issue. Try later."};
				throw err;
			}
		}
		return res.json();
	})
}

export async function deleteTodo(id) {
	const deleteUrl = APIURL + id;
	return fetch(deleteUrl, {
		method: 'delete'
	})
	.then(res => {
		if (!res.ok) {
			if (res.status >= 400 && res.status < 500) {
				return res.json().then(data => {
					let err = {errorMessage: data.message};
					throw err;
				})
			} else {
				let err = {errorMessage: "Server issue. Try later."};
				throw err;
			}
		}
		return res.json();
	})
}

export async function updateTodo(todo) {
	const updateUrl = APIURL + todo._id;
	return fetch(updateUrl, {
		method: 'put',
		body: JSON.stringify({ completed: !todo.completed })
	})
	.then(res => {
		if (!res.ok) {
			if (res.status >= 400 && res.status < 500) {
				return res.json().then(data => {
					let err = {errorMessage: data.message};
					throw err;
				})
			} else {
				let err = {errorMessage: "Server issue. Try later."};
				throw err;
			}
		}
		return res.json();
	})
}