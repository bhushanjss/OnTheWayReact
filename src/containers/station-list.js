import React, {Component} from 'react';
import StationListItem from '../components/station-list-item';
import {connect} from 'react-redux';

class StationList extends Component {

	renderList() {
		if(this.props.stations.length>0) {
			return this.props.stations.map((station) => {
				return <StationListItem key={station.id} station = {station}/>
			});
		} else {
			return <div>loading ...</div>
		}
	}

	render() {				 

		return (
			<ul className="col-md-4 station-list">
				{this.renderList()}
			</ul>
		)
	}
}


const mapStateToprops = (state) => {
	return {
		stations: state.stations
	}
} 

export default connect(mapStateToprops)(StationList);
