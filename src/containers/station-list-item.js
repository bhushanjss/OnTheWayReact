import React,{Component} from 'react';

export default class StationListItem extends Component {

		render() {
			return (
			<li className="station-list-item">
				<img src={this.props.station.icon} 
				/>
				<h4>{this.props.station.name}</h4>				
				<div>
					<span> Address:</span>
					<span>{this.props.station.address}</span>
				</div>
			</li>)
		}
}
