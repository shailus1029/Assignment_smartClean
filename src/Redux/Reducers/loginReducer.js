import sessionStorage from "../../utils/sessionStorage";
import * as constantTypes from "../constant";
const { LOGIN, LOGOUT } = constantTypes;

const initialState = {
	isUserLoggedIn: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			sessionStorage.setItem("isUserLoggedIn", true);
			return Object.assign({}, state, {
				isUserLoggedIn: action.payload.isUserLoggedIn
			});

		case LOGOUT:
			sessionStorage.removeItem("isUserLoggedIn");
			return Object.assign({}, state, {
				isUserLoggedIn: false
			});
		default:
			return state;
	}
};
