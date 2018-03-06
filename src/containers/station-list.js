import React, {Component} from 'react';
import StationListItem from './station-list-item';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import currentStation from '../actions/index';


class StationList extends Component {


	renderList() {
		if(this.props.stations.length>0) {
			return this.props.stations.map((station) => {
				return < StationListItem
				onClick={() => this.props.selectedStation(station)}
				 key={station.name} station={station}
				 />				
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


const mapStateToProps = (state) => {
	return {
		stations: state.stations
	}
} 

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		selectedStation: currentStation
	},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StationList);
