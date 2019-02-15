import React from 'react'

class WoYaoTouZi extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			transferList: [
				{
					id: "1",
					productId: "1",
					productCode: "SSS23",
					transferProductName: "靖江汽贸三号(11)",
					transferState: 0,
					transferExpectedRate: 0.12,
					tradeAmount: 12345,
					remainingPeriod: 3

				},
				{
					id: "2",
					productId: "3",
					productCode: "SSS2ee3",
					transferProductName: "沪宁城投应收账款七号金融资产交易",
					transferState: 0,
					transferExpectedRate: 0.52,
					tradeAmount: 300000,
					remainingPeriod: 22

				}
			]
		}
	}

	render() {
		return (
			<div className="finance-con">
				<div className="productList-con">
					{this.state.transferList.map((transfer, index) => {
						return (
							<div className="common" key={index}>
								<div className="presell">
									<a href="http://www.baidu.com">中期资产</a>
								</div>
								<div className="popular-con"  style={{textAlign: 'center'}}>
									<div className="popularTop">
										<span className="floatL">{transfer.transferProductName}</span>
									</div>
									<div className="popularBot" style={{overflow: 'hidden'}}>
										<div className="yield-rate floatL">
											<div style={{overflow: 'hidden'}}>
												<div className="floatL" style={{color: '#ff5635'}}>
									<span style={{fontSize: '52px', marginRight: '5px'}}>
										{transfer.transferExpectedRate}
									</span>
													<span style={{fontSize: '28px'}}>%</span>
												</div>
											</div>
											<div className="color-gray">预期年化收益率</div>
										</div>
										<div className="floatR goInvestment">
											<input type="button" className="btn" value="立即投资"/>
										</div>
										<div className="money floatR">
											<div style={{color: "#ff5635"}} className="noBuy">
								<span style={{fontSize: "28px", marginRight: "5px"}}>
									{transfer.tradeAmount}
								</span>
												<span style={{fontSize: "14px"}}>元</span>
											</div>
											<div className="color-gray" style={{marginTop: "16px", marginLeft: "5px"}}>
												起投金额
											</div>
										</div>
										<div className="progressBar floatR">
											<div>
												<div className="lastMon" style={{overflow: 'hidden'}}>
													<span className="floatR">0.6%</span>
												</div>
												<div className="progress">
													<div className="progress-bar progress-bar-info" role="progressbar"
														 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
														 style={{width: '0.6%'}}>
														<span className="sr-only">30% 完成（信息）</span>
													</div>
												</div>
												<div className="color-gray" style={{marginTop: '22px'}}>
													募集进度
												</div>
											</div>
										</div>
										<div className="deadline floatR">
											<div className="noBuy">
										<span style={{
											fontSize: "28px",
											marginRight: "5px"
										}}>{transfer.remainingPeriod}</span>
												<span style={{fontSize: "14px"}}>天</span>
											</div>
											<div className="color-gray" style={{marginTop: "16px"}}>投资期限</div>
										</div>
									</div>
								</div>
							</div>
						)
					})
					}
				</div>
			</div>
		)
	}
}

export default WoYaoTouZi
