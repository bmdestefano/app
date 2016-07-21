import React, {PropTypes} from 'react';

const AuthenticateLargeHeader = ({logoUrl, schoolName}) => {
	return(
		<div>
			<img 
				style={{margin: "0 auto", width: "100px", display: "block"}} 
				src={logoUrl} />
			<p className="authenticate-header">{schoolName}</p>
		</div>
	);
};

AuthenticateLargeHeader.propTypes = {
	logoUrl: PropTypes.string.isRequired,
	schoolName: PropTypes.string.isRequired
};

export default AuthenticateLargeHeader;