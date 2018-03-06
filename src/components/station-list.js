import React, {Component} from 'react';
import StationListItem from './station-list-item';


class StationList extends Component {

	constructor(props) {
		super(props);

		this.state = {stations: props.stations};
	}

	render() {
		let stationItems = (<div>loading ...</div>);

		if(this.props.stations.length>0) {
			stationItems = this.props.stations.map((station) => {
				return <StationListItem key={station.id} station = {station}/>
			});
		}		 

		return (
			<ul className="col-md-4 station-list">
				{stationItems}
			</ul>
		)
	}
}

export default StationList;