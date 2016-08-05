import React, { PropTypes } from 'react';

const FullBackground = ({image}) => (
	<div 
		style={{
			height: "100vh", 
			background: "url('"+image+"') no-repeat center/cover"}}
	></div>
);

FullBackground.propTypes = {
	image: PropTypes.string.isRequired
};

export default FullBackground;