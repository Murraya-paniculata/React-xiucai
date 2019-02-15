import React from 'react'

class NavFooter extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			siteSet: {
				qr1Url: "https://img.neafex.com/WechatIMG9937.jpeg",
				siteName: "东金秀财",
				qr2Url: "https://img.neafex.com/wxgzh.jpeg",
				hotline: "0431-81166897",
				workdayTime: "9:00-18:00",
				bsetCopyright: "吉林东北亚创新金融资产交易中心有限公司 版权所有 备案/许可证号：吉ICP备15007119号"
			},
			helpCenter: [
				'热门问题',
				'注册与登录',
				'账户与安全',
				'投资相关'
			]
		}
	}
	render() {
		return (
			<div>
				<div className="foot">
					<div className="foot-con">
						<div className="floatL Link">
							<ul className="floatL width33">
								<li className="first">帮助中心</li>
								{this.state.helpCenter.map((item, index) => {
									return <li key={index}><a href="http://www.baidu.com">{item}</a></li>
								})}
							</ul>
							<ul className="floatL width33">
								<li className="first">关于我们</li>
								<li><a href="http://www.baidu.com" rel="noopener noreferrer">公司介绍</a></li>
								<li><a href="http://www.baidu.com" rel="noopener noreferrer">公司资质</a></li>
							</ul>
							<ul className="floatL width33">
								<li className="first">友情链接</li>
								<li><a href="http://www.baidu.com" rel="noopener noreferrer">新网银行</a></li>
							</ul>
						</div>
						<div className="client floatL">
							<img src={this.state.siteSet.qr1Url} style={{height: 140 + 'px', width: 140 + 'px'}}
								 alt={this.state.siteSet.siteName} title={this.state.siteSet.siteName} id="qr1Img"/>
							<div style={{marginTop: 14 + 'px'}} id="qr1Label">扫描下载{this.state.siteSet.siteName}APP
							</div>
					</div>
					<div className="vipcn floatL">
						<img src={this.state.siteSet.qr2Url} style={{height: 140+'px',width: 140+'px'}} alt="
								 官方二维码" title=" 官方二维码" id=" qr2Img"/>
					<div style={{marginTop: 14+'px'}} id=" qr2Label">关注{this.state.siteSet.siteName}微信公号</div>
				</div>
				<div className="hotline floatL">
					<div>客服热线</div>
					<div style={{fontSize: 28+'px',marginTop:'8px',marginBottom:'25px'}} id=" hotline">{this.state.siteSet.hotline}</div>
					<div style={{color: '#e3e3e3',marginBottom: 10+'px'}} id=" workday">工作日：{this.state.siteSet.workdayTime}</div>
				</div>
			</div>
	</div>
		<div className=" copyright">
			<div className=" copyright-con">{this.state.siteSet.bsetCopyright}}</div>
		</div>
	</div>
		)
	}
}

export default NavFooter
