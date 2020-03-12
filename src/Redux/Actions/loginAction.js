import * as constantTypes from "../constant";
const { LOGIN, LOGOUT } = constantTypes;

export function login(payload) {
	return {
		type: LOGIN,
		payload: payload
	};
}

export function logout() {
	return {
		type: LOGOUT
	};
}
