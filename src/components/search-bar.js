import React, {Component} from 'react';

class SearchBar extends Component {

constructor(props) {
	super(props);

	this.state = {term: ""};
}
	render() {
		return (
		<div className="search-bar">
			<input type="text" placeholder="Enter Destination" onChange={
			(event) => this.setState({term: event.target.value})
			}/><br/>
			<label>{this.state.term}</label>

		</div>
		);
	}
}

export default SearchBar;
