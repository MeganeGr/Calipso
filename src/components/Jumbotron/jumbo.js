import React, { Component } from 'react';
import './jumbo.scss';
import fond from '../Images/resto.jpeg';

const divStyle = {
	backgroundImage: `url(${fond})`,
	
};
class Jumbotron extends Component {
	render() {
		return (
			<div className="JumbotronResto">
				<div className="styleImag" style={divStyle}>
					<h1 className="TitreJumbotron">BAISERS DE FRAMBOISES</h1>
					<h2 className="SousTitreJumbotron">PARFUMÉS À LA FRAISE</h2>
				</div>
			</div>
		);
	}
}

export default Jumbotron;