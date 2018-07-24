import React from 'react';
import './marker.css';

class Marker extends React.Component {
	render() {
		let classes = "marker";
		if (this.props.selected) {
			classes += " selected";
		}
		return (
			<div className = {classes}>
				<div class = "title_text">
					{this.props.text}
				</div>
				<div class = "price">
					₱{this.props.price}
				</div>
				<div class = "imahe">
					<img src={this.props.image}/>
				</div>
			</div>
		);
	}
}

export default Marker;