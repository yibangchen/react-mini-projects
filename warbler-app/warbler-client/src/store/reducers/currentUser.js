/*jslint
white*/
import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATAE = {
	isAuthenticated: false,	// true when logged in
	user: {}	// user info after login
}

const currentUser = (state=DEFAULT_STATAE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return { 
				// does user object have keys -> authenticated
				isAuthenticated: !!Object.keys(action.user).length,
				user: action.user 
			};
		default:
			return state;
	}
};

export default currentUser;