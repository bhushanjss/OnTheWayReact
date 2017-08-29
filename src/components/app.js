import React, { Component } from 'react';
import SearchBar from './search-bar';
import MapContainer from './map-container';
import StationList from '../containers/station-list';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {stations: []};
	}

    getStations(data) {
        this.setState({stations: data});
    }

    render() {
        return ( 
        	<div>
            	<SearchBar />
            	<MapContainer onStationUpdate={stations => this.getStations(stations)}/>
                <StationList/>
            </div>

        );
    }
}

export default App;


