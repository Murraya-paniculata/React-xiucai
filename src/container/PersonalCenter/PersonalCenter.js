import React from 'react'
import LeftCon from '../../container/PersonalCenter/LeftCon'
import RightCon from '../../container/PersonalCenter/RightCon'

class PersonalCenter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			linkActive: '4',
			userStatusText:"已认证",
			bankCardText:"已绑定"
		}
	}
	render() {
		return (
			<div className="personal-con">
				<LeftCon/>
				<RightCon/>
			</div>
		)
	}
}

export default PersonalCenter