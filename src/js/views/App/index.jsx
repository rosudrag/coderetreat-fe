import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
	render() {
		const { children } = this.props;

		return (
			<div className='App'>
				<div className='Page'>
					{ children }
				</div>
			</div>
		);
	}
}

App.PropTypes = {
	children: PropTypes.object.isRequired
};

export default App;
