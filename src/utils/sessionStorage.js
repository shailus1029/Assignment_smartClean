export default {
	getItem: key => {
		try {
			const value = sessionStorage.getItem(key);
			return JSON.parse(value ? value : JSON.stringify(null));
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	setItem: (key, value) => {
		try {
			return sessionStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	removeItem: key => {
		try {
			return sessionStorage.removeItem(key);
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	clearStorage: () => {
		try {
			return sessionStorage.clear();
		} catch (error) {
			console.log(error);
			return error;
		}
	}
};
