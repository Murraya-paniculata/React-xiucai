import React from 'react'

class RightCon extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userInfo: {
				riskName: 'rrrrr'
			},
			record: {
				productName: '2121'
			},
			project:{
				productExpectedRate: 'ewwe'
			},
			recommendList: [
				{
					id: 1,
					productId: 1,
					productName: "圆通优享计划1号（3）",
					productExpectedRate: "6.5",
					productTerm: 107
				},
				{
					id: 2,
					productId: 2,
					productName: "圆通优享计划1号（3）",
					productExpectedRate: "6.5",
					productTerm: 107
				},
				{
					id: 3,
					productId: 4,
					productName: "圆通优享计划1号（3）",
					productExpectedRate: "6.5",
					productTerm: 107
				}
			],
			list:[
				{
					id: 1,
					productId: 1,
					productName:"圆通优享计划1号（3）",
					dealTime:"2018-12-23",
					productExpectedRate: "6.5",
					transferState:6,//募集期
					productState:8,//
					// transferState:1,
					productTerm:107,
					transactionAmount:1234322
				},
				{
					id: 2,
					productId: 2,
					productName:"申通优享计划1号（3）",
					dealTime:"2028-02-01",
					productExpectedRate: "6.5",
					transferState:6,//募集期
					productState:8,//
					// transferState:1,
					productTerm:107,
					transactionAmount:1234322
				},
				{
					id: 2,
					productId: 2,
					productName:"顺丰优享计划2号",
					dealTime:"2019-08-23",
					productExpectedRate: "6.5",
					transferState:6,//募集期
					productState:8,//
					// transferState:1,
					productTerm:107,
					transactionAmount:1234322
				}
			]
		}
	}

	render() {
		return (
			<div className="rightCon floatR">
				<div className="initial-top">
					<div className="initial-top-top">
						<div className="account-money floatL">
							<span className="floatL" style={{color: '#333'}}>可用余额：</span>
							<span className="moneyNum floatL">0.00</span>
							<span className="floatL">元</span>
						</div>
						<div className="operation floatR">
							<input type="button" value="提现" className="rechargeBtn btn"/>
							<input type="button" name="" id="" value="充值" className="withdrawBtn btn"/>
						</div>
					</div>
					<div className="initial-top-bot" style={{overflow: 'hidden'}}>
						<div className="floatL width33">
							<div>总资产（元）</div>
							<span className="usable-account">0.00</span>
						</div>
						<div className="floatL width33">
							<div>当月收益（元）</div>
							<span className="monthly-earnings">0.00</span>
						</div>
						<div className="floatL width33">
							<div>累计收益（元）</div>
							<span className="total-earnings">0.00</span>
						</div>
					</div>
				</div>
				<div className="initial-middle-first">
					<div className="floatL width23">
						<div className="first">剩余可用红包</div>
						<div className="sumRed">0元</div>
					</div>
					<div className="floatR width25 riskCon"
						 style={{background: `url(../../../../assets/img/risk.png) noRepeat 40px top`}}>
						<div className="first">风险测评<span>{this.state.userInfo.riskName}</span></div>
						{/*<div><router-link :to="{name:'userRisk'}"><a>立即测评></a></router-link></div>*/}
						<div><a href="http://www.baidu.com">立即测评></a></div>
					</div>
					<div className="floatR width25"
						 style={{background: `url(../../../../assets/img/recommendBg.png) no-repeat 40px top;width: 28%`}}>
						<div className="first">推荐有礼</div>
						{/*<div className="inviteIcon"><span>0</span>人<router-link :to="{name:'userRecommend'}"><a style="margin-left: 15px;">立即邀请></a></router-link></div>*/}
						<div className="inviteIcon"><span>0</span>人<a href="http://www.baidu.com" style={{marginLeft: '15px'}}>立即邀请></a></div>
					</div>
				</div>
				<div className="initial-investment-record">
					<div className="initial-investment-title"
						 style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
						<span>投资记录</span>
						<a href="http://www.baidu.com" className="hover" style={{color: '#333', fontSize: '14px'}}>查看更多></a>
						{/*<router-link :to="{name:'userProperty'}"><a style="color:#333;font-size: 14px;">查看更多></a></router-link>*/}
					</div>
					<table className="table table-striped">
						<thead>
						<tr>
							<th>资产名称</th>
							<th>认购日期</th>
							<th>年化收益率</th>
							<th>资产状态</th>
							<th>交易存续期</th>
							<th>认购金额</th>
							<th>操作</th>
						</tr>
						</thead>
						<tbody>
						{this.state.list.map((record,index)=>{
							return (
								<tr key={index}>
									<td>{record.productName}</td>
									<td>{record.dealTime}</td>
									<td>{record.productExpectedRate}%</td>
									{/*<td className="bid" v-if="this.state.record.productState == 6">募集期</td>*/}
									<td className="bid">募集期</td>
									{/*<td className="bid" v-else-if="this.state.record.productState == 8"><span v-if="this.state.record.transferState == 1">转让中</span><span v-else>计息中</span></td>*/}
									{/*<td className="bid"><span>转让中</span><span>计息中</span></td>*/}
									{/*<td className="bid" v-else-if="this.state.record.productState == 11"><span v-if="this.state.record.transferState == 2">已转让</span><span v-else>已完结</span></td>*/}
									{/*<td className="bid"><span>已转让</span><span>已完结</span></td>*/}
									<td>{record.productTerm}天</td>
									<td className="buy">{record.transactionAmount}元</td>
									{/*<td className="last"><router-link :to="{name:'userProperty'}"><router-link :to="{name:'userPropertyDetail',query:{'id':this.state.record.id,'productId':this.state.record.productId}}"><a>查看详情</a></router-link></router-link></td>*/}
									<td className="last hover"><a href="http://www.baidu.com">查看详情</a></td>
								</tr>
							)
						})}
						</tbody>
					</table>
				</div>
				<div className="recommend-pro">
					<div className="recommend-pro-title">推荐资产</div>
					{this.state.recommendList.map((project,index)=>{
						return (
							<div key={index} className="recommend-pro-con">
								<div style={{
									fontSize: '16px',
									lineHeight: '16px',
									margin: `19px 0 8px 0`}}>{project.productName}</div>
								<div>
									<div className="yield-rate floatL">
										<div style={{color: '#ff5635'}}>
									<span style={{
										fontSize: '48px',
										fontWeight: 'bold'
									}}> {project.productExpectedRate}</span>
											<span style={{fontSize: '18px'}}>%</span>
										</div>
										<div className="color-gray">预期年化</div>
									</div>
									<div className="deadline floatR">
										<div>
											<span style={{fontSize: '18px'}}>{project.productTerm}</span>
											<span style={{fontSize: '18px'}}>天</span>
										</div>
										<div className="color-gray" style={{marginTop: '15px!important'}}>交易存续期</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}


export default RightCon
