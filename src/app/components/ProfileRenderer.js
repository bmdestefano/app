import React, {Component, PropTypes} from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';



import OpenIcon from 'material-ui/svg-icons/action/open-in-new';




class ProfileRenderer extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {};
	}

	

	

	

	

	
	render(){
		return(
			<div>
				<div className="hero-wrapper">
					{this.props.heroImageMarkup}
					<div className="hero-details-outer-wrapper">
						<div className="hero-details-inner-wrapper" style={{paddingBottom: "4rem"}}>
							<div className="keep-center">
								{this.props.avatarImageMarkup}
								{this.props.userDetails}
							</div>
						</div>
					</div>
				</div>
				<div className="keep-center profile-lower-wrapper">
					<div className="content no-overlay">
						{this.props.tabs}
					</div>
				</div>			
			</div>
		);
	}
}

ProfileRenderer.propTypes = {
	user: PropTypes.object.isRequired,
}

export default ProfileRenderer;