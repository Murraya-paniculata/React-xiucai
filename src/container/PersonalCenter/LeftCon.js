import React from 'react'
import alreadyAttestation from '../../assets/img/already-attestation.png'
import notBind from '../../assets/img/not-bind.png'
import message from '../../assets/img/message.png'
import personIcon from '../../assets/img/personIcon.png'

class LeftCon extends React.Component {
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
			<div className="leftBar floatL">
				<div className="bar-top">
					<img src={personIcon} alt="" style={{margin:`0 auto`,marginTop: '28px'}}/>
					<div className="username">
					</div>
					<div className="person-link">
						<div className="attestation-status floatL">
							<img src={alreadyAttestation} alt=""
								 style={{margin:`0 auto`,marginBottom:`12px`}}/>
							<span>{this.state.userStatusText}</span>
						</div>
						<div className="bindCard-status floatL">
							<img src={notBind} alt="" style={{margin:`0 auto`,marginBottom:'12px'}}/>
							<span>{this.state.bankCardText}</span>
						</div>
						<div className="message-status floatL">
							{/*<router-link :to="{name:'userMessage'}">*/}
							<a href="http://www.baidu.com"><img src={message} alt=""
									style={{margin: `0 'auto'`, marginBottom: '12px', cursor: 'pointer'}}/> </a>
							<span className="number badge" id="noread">1</span>
							<span>消息</span>
						</div>
					</div>
				</div>
				<div className="bar-bot">
					<div className="bar-bot-top"><a href="http://www.baidu.com">个人中心</a></div>
				</div>
				<div className="bar-bot-list">
					<ul>
						<li><a href="http://www.baidu.com">我的资产</a></li>
						<li><a href="http://www.baidu.com">银行账户</a></li>
						<li><a href="http://www.baidu.com">交易记录</a></li>
						<li><a href="http://www.baidu.com">我的礼包</a></li>
						<li><a href="http://www.baidu.com">账户安全</a></li>
						<li><a href="http://www.baidu.com">签章授权</a></li>
						<li><a href="http://www.baidu.com">风险评测</a></li>
						<li><a href="http://www.baidu.com">我的推荐</a></li>
						<li><a href="http://www.baidu.com">消息中心</a></li>
					</ul>
				</div>
				<div style={{height: '28px', border: `1px solid #e9e9e9`, borderTop: 0, borderBottom: 0}}>
				</div>
			</div>
		)
	}
}

export default LeftCon
