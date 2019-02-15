import React from 'react'

class PopularRecommendCon extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			siteSet:{
				siteDomain: "https://xiucai.neafex.com"
			},
			isLogin: false
		}
	}
	render(){
		return (
			<div className="popularRecommend-con">
				<div className="popular-top">
					<div className="floatL star">热门推荐</div>
					<div className="floatR">
						{this.state.isLogin?<a href={this.state.siteSet.siteDomain+'/fiscal/product/list'}>查看更多</a>:<a href="javascript:;">查看更多</a>}
					</div>
				</div>
			</div>
		)
	}
}

export default PopularRecommendCon