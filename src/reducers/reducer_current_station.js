export default (state = null, action) => {
	switch(action.type) {
		case "SELECTED_STATION":
			return action.payload;		
	}
	console.log(action);
	return state;
}