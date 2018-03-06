import React, {Component} from 'react';
import {connect} from 'react-redux';

class StationDetail extends Component {

render() {
	const currentStation = this.props.currentStation;
	if(!currentStation) {
		return <div>Please Select a Station</div>
	}
	return (
		<div className="col-xs-4">
			<img src={currentStation.icon} />
				<h4>{currentStation.name}</h4>				
				<div>
					<span> Address:</span>
					<span>{currentStation.address}</span>
				</div>
		</div>
	)
}

}

const mapStateToProps = (state) => {
	return {
		currentStation: state.currentStation
	}	
}

export default connect(mapStateToProps)(StationDetail);
