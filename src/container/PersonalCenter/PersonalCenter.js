import React from 'react'
import LeftCon from '../../container/PersonalCenter/LeftCon'
import RightCon from '../../container/PersonalCenter/RightCon'
// import NavHeader from "../Index";
import NavHeader from '../../components/common/Header'
import NavFooter from '../../components/common/Footer/Footer'

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
			<div>
				<NavHeader/>
				<div className="personal-con">
					<LeftCon/>
					<RightCon/>
				</div>
				<NavFooter/>
			</div>
		)
	}
}

export default PersonalCenter
