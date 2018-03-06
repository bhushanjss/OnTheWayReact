export function currenctStation(station) {
	console.log(station);
	return {
		type: "SELECTED_STATION",
		payload: station
	}
}