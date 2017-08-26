import React, {Component} from 'react';

class SearchBar extends Component {

constructor(props) {
	super(props);

	this.state = {term: {
		name: "Quick Trip",
		imgUrl: "",
		address: "317 Palm Beach, FL 20101"
	}};
}
	render() {
		return (
		<div className="search-bar">
			<input type="text" placeholder="Enter Destination" onChange={
			event => this.setState({term: event.target.value})
			}/>

		</div>
		);
	}
}

export default SearchBar;
