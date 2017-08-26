import React, {Component} from 'react';

class StationListItem extends Component {

	constructor(props) {
		super(props);
		this.state = { station: props.station};
	}

	render() {
		return (
			<li className="station-list-item">
				<img src={this.state.station.icon} />
				<h4>{this.state.station.name}</h4>				
				<div>
					<span> Address:</span>
					<span>{this.state.station.vicinity}</span>
				</div>
			</li>
			
		)
	}
}

export default StationListItem;