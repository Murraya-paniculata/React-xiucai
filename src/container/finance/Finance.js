//资产认购
import React from 'react'

class Finance extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			transferList: [
				{
					id: "1",
					productId: "1",
					productCode: "SSS23",
					transferProductName: "转让产品",
					transferState: 0,
					transferExpectedRate: 0.12,
					tradeAmount: 12345,
					remainingPeriod: 3

				},
				{
					id: "2",
					productId: "3",
					productCode: "SSS2ee3",
					transferProductName: "固定资产",
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
			<div>
				<div className="financeBg">
					<div className="finance-bg">

					</div>
				</div>
				<div className="finance-con">
					<div className="bread-crumb">
						<div>当前位置：</div>
						<div>
							{/*<a href={siteSet.siteDomain+'/index}>首页</a> <span className="divider">></span>*/}
							<a href="http://www.baidu.com">首页</a> <span className="divider">></span>
						</div>
						<div>
							<a href="http://www.baidu.com">转让专区</a>
						</div>
					</div>
					<div className="product-title">
						{/*<form method="post" :action="siteSet.siteDomain+'/fiscal/transfer/list'" id="queryForm">*/}
						<form method="post" id="queryForm">
							<div className="product-status">
								<i className="first">资产状态：</i>
								<span className="all active">全部</span>
								<span>转让中</span>
								<span>已转让</span>
							</div>
							<div className="product-category">
								<i className="first">资产类别：</i>
								<span className="all active">全部</span>
								<span>新手专享</span>
								<span style={{padding: 0}}>可转让</span>
							</div>
							<input type="hidden" name="transferState" id="transferState"/>
							<input type="hidden" name="pageSize" id="pageSize" value="10"/>
							<input type="hidden" name="pageNum" id="pageNum"/>
						</form>
					</div>
					<div className="product-list">
					<span className="floatL listIcon">

					</span>
					<span className="floatL" style={{marginLeft: "11px", fontSize: "18px", lineHeight: "18px", fontWeight: "bold"}}>转让产品</span>
					</div>
					<div className="productList-con" style={{textAlign: 'center'}}>
						{this.state.transferList.map((transfer, index) => {
							return (
								<div key={index} className="popular-con">
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
										<div className="floatR goInvestment"><input type="button" className="btn"
																					value="立即购买"/>
										</div>

										<div className="floatR sell-out">
											<input type="button" className="btn" value="已转让" disabled="disabled"/>
										</div>
										<div className="money floatR">
											<div style={{color: "#ff5635"}} className="noBuy">
								<span style={{fontSize: "28px", marginRight: "5px"}}>
									{transfer.tradeAmount}
								</span>
												<span style={{fontSize: "14px"}}>元</span>
											</div>
											<div className="color-gray" style={{marginTop: "16px", marginLeft: "5px"}}>
												转让价格
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
											<div className="color-gray" style={{marginTop: "16px"}}>剩余期限</div>
										</div>
									</div>
								</div>
							)
						})
						}
					</div>
					<div id="pageid" className="page">

					</div>
				</div>
			</div>
		)
	}
}

export default Finance
