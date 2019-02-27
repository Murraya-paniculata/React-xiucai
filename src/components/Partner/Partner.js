import React from 'react'

class Partner extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			siteSet:{
				siteDomain: "https://xiucai.neafex.com"
			},
			cooperateList: [
				{
					cooperateUrl: "https://xwbank.com/",
					cooperateImg: "https://img.neafex.com/partner1.png"
				},
				{
					cooperateUrl: "http://www.bosc.cn/",
					cooperateImg: "https://img.neafex.com/partner2.png"
				},
				{
					cooperateUrl: "http://www.cccb.cn/",
					cooperateImg: "https://img.neafex.com/partner3.png"
				},
				{
					cooperateUrl: "http://www.ccdih.com/",
					cooperateImg: "https://img.neafex.com/partner4.png"
				},
				{
					cooperateUrl: "http://www.ehern.cn/",
					cooperateImg: "https://img.neafex.com/WechatIMG7099.png"
				},
				{
					cooperateUrl: "https://www.tsign.cn/",
					cooperateImg: "https://img.neafex.com/partner6.png"
				}
			]
		}
	}

	render() {
		return (
			<div className="partner">
				<div className="partner-top">
					<div className="floatL partnerIcon">合作伙伴</div>
					<div className="floatR">
						<a href={this.state.siteSet.siteDomain + '/site/aboutus/article/partner'}>查看更多</a>
					</div>
				</div>
				<div className="partner-con">
					{this.state.cooperateList.map((cooperate,index) => {
						return (
							<div key={index} className="floatL">
								<a href={cooperate.cooperateUrl} target="_blank">
									<img src={cooperate.cooperateImg} alt=""/>
								</a>
							</div>)}
						)}
				</div>
			</div>
		)
	}
}

export default Partner