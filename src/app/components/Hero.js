import React, {Component} from 'react';

const Hero = ({image, details}) => {
	return(
		<div className="hero-wrapper">
			<div className="hero-image-wrapper">
				<img src={image} />
				<div className="overlay"></div>
			</div>
			<div className="hero-details-outer-wrapper">
				<div className="hero-details-inner-wrapper">
					<div className="keep-center">
						<div className="hero-details-align">
							{(details && typeof details.title != "undefined" && 
								<div className="hero-details-title">{details.title}</div>
							)}
							{(details && typeof details.primaryText != "undefined" && 
								<div className="hero-details-primary">{details.primaryText}</div>
							)}
							{(details && typeof details.secondaryText != "undefined" && 
								<div className="hero-details-secondary">{details.secondaryText}</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;