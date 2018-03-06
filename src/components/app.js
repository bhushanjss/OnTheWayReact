import React, { Component } from 'react';
import SearchBar from './search-bar';
import MapContainer from './map-container';
import StationList from '../containers/station-list';
import StationDetail from '../containers/station-detail';

class App extends Component {

    render() {
        return ( 
        	<div>
            	<SearchBar />
        	    <MapContainer />
                <StationList />
                <StationDetail />
            </div>

        );
    }
}

export default App;


