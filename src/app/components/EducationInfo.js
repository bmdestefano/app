import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';

import AddSchoolIcon from 'material-ui/svg-icons/content/add';

class EducationInfo extends Component{

	render(){
		return(
			<Tabs
				tabItemContainerStyle={{background: "transparent"}}
			>
				<Tab 
					icon={<Avatar 
						src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/University_of_Kansas_Jayhawk_logo.svg/1156px-University_of_Kansas_Jayhawk_logo.svg.png" 
						size={30}
						className="avatar-override"
					/>}
					style={{color:"#555"}}
					label="University of Kansas"
				>
					test
				</Tab>
				<Tab
					icon={<AddSchoolIcon className="authenticate-add-another-school"/>}
					style={{color:"#555"}}
					label="Add Another School"
				>
					test2
				</Tab>
			</Tabs>
		);
	}
}

export default EducationInfo;