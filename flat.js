import React from "react";
import "./flat.css";

//const flat = {
//	name = "Great flat",
//	price = 100,
//}
//<Flat flat = {flat} />

class Flat extends React.Component {
	handleClick = () => {
		this.props.selectFlat(this.props.flat);
	}

	render() {
		const title = this.props.flat.price
		+ this.props.flat.priceCurrency +
		 " - " + this.props.flat.name;

		const styles = {
			backgroundImage: `url('${this.props.flat.imageUrl}')`
		};
 
		return (
			<div className = "flat" onClick = {this.handleClick} >
				<div className = "flat-picture" style = {styles}></div>
				<div className = "flat-title">
					{title}
				</div>
			</div>
			);
	}
}

export default Flat;