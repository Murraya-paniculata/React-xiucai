import React from 'react'
import Swiper from '../../components/common/Swiper/Swiper'
import Login from '../../components/common/Login/Login'

class Banner extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return (
			<div className="bannerWarp">
				<Swiper/>
				<Login/>
			</div>
		)
	}
}

export default Banner
