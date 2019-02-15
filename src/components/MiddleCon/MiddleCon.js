import React from 'react'

class MiddleCon extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			advertisingList: [
				{ //advUrl:"https://xiucai.neafex.com/site/single/article/bankSecurity",
					advUrl: "#/site/single/article/bankSecurity",
					barImg: "https://img.neafex.com/1529583266918_1529583266016_guide.png",
					advName: "安全保障"
				},
				{ //advUrl:"https://xiucai.neafex.com/site/single/article/depositBank",
					advUrl: "#/site/single/article/depositBank",
					barImg: "https://img.neafex.com/1529583250967_1529583250024_safe.png",
					advName: "银行存管"
				},
				{ //advUrl:"https://xiucai.neafex.com/user/recommend",
					advUrl: "#/user/recommend",
					barImg: "https://img.neafex.com/1529583286086_1529583285456_recommend.png",
					advName: "推荐有礼"
				},
				{ //advUrl:"https://xiucai.neafex.com/site/single/article/depositBank",
					advUrl: "#/site/single/article/depositBank",
					barImg: "https://img.neafex.com/1529583296940_1529583296811_bank.png",
					advName: "银行合作"
				}
			]
		}
	}

	render() {
		return (
			<div className="middle-con">
				{this.state.advertisingList.map((advertising,index) => {
					return (<div key={index} className="floatL with25 advertisement" style={{cursor: 'pointer'}}>
						<a href={advertising.advUrl} target="_blank">
							<div className="floatL width80"
								 style={{backgroundImage: `url(${advertising.barImg})`}}>
							</div>
							<div className="floatL">{advertising.advName}</div>
						</a>
					</div>)
				})}
			</div>
		)
	}
}

export default MiddleCon

