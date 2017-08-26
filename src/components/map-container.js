import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {places: []};
	}

	 componentDidUpdate(prevProps, prevState) {
	    //if (prevProps.google !== this.props.google) {
	      this.loadMap();
	    //}
	  }

	  loadMap() {
	  	  const zoom = 13;
	  	  const lat = 34.008368;
	      const lng = -84.360031;

	     if (this.props && this.props.google) {
	      // google is available
	      const {google} = this.props;
	      const maps = google.maps;

	      const mapRef = this;
	      const node = ReactDOM.findDOMNode(mapRef);	      
	      const center = new maps.LatLng(lat, lng);
	      const mapConfig = Object.assign({}, {
	        center: center,
	        zoom: zoom
	      })
	      this.map = new maps.Map(node, mapConfig);
	      this.searchMap(this.map, lat, lng);
	    }
	  }
	searchMap(map, lat, lng){
			const {google} = this.props;
			var center = {lat: lat, lng: lng};
	        var service = new google.maps.places.PlacesService(map);
	        const request = {
		       location: center,
		       radius: '5000',
		       type: ['gas_station']
			};
			service.nearbySearch(request, (results, status, pagination) => {
		      if (status == google.maps.places.PlacesServiceStatus.OK) {
		        this.pagination = false;//pagination;
		        this.setState({
		          places: results,
		          hasNextPage: pagination.hasNextPage,
		          center: center,
		        });
		        this.props.onStationUpdate(results);

		        for (var i = 0; i < results.length; i++) {
	            //createMarker(results[i]);
		            self.console.log(results[i]);
		        }
		      }
			})
	      }

	render() {    
		return (
			<div className="map-container">
			<Map google={this.props.google} />
			</div>			
		)
	}    
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATzErZCg6C5_h-ieqcUXJXvyOLkDQIEgk"
})(MapContainer)