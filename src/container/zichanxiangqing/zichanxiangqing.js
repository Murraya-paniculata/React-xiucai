import React from 'react'

class ChanPinDetail extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return (
			<div className="productDetail-con">
				<div className="bread-crumb">
					<div>当前位置：</div>
					<div>
						<a href="http://www.baidu.com">首页</a> <span className="divider">></span>
					</div>
					<div>
						<a href="http://www.baidu.com">转让专区</a> <span className="divider">></span>
					</div>
					<div>
						<a href="http://www.baidu.com">产品详情 </a>
				</div>
				<div className="productDetail-top">
					<div className="floatL detail-left" style={{position: "relative"}}>
						<div className="whatTransfer" onclick="transferDesc()" style="cursor: pointer"><img src="${themePath}/assets/img/question4.png" alt="">什么是转让产品？</div>
						<div className="title">${transferDetail.transferProductName!}</div>
						<div className="popularBot" style="overflow: hidden;">
							<div className="yield-rate floatL">
								<div style="overflow: hidden;">
									<div className="floatL <#if transferDetail.transferState??&&transferDetail.transferState == 1>noBuy</#if>" style="color:#ff5635;">
                    <span style="font-size: 52px;">
                    ${transferDetail.transferExpectedRate?string("#0.00")}
                    </span>
										<span style="font-size: 28px;">%</span>
									</div>
								</div>
								<div className="color-gray">预期年化收益率</div>
							</div>
							<div className="money floatR">
								<div style="color:#ff5635;margin-top: 28px;" className="<#if transferDetail.transferState??&&transferDetail.transferState == 1>noBuy</#if>">
                <span style="font-size: 28px;margin-right: 5px;">
                ${transferDetail.tradeAmount?string(",##0.00")}
                </span>
									<span style="font-size: 14px;">元</span>
								</div>
								<div className="color-gray" style="margin-top: 15px;">转让价格</div>
							</div>
							<div className="deadline floatR">
								<div className="<#if transferDetail.transferState??&&transferDetail.transferState == 1>noBuy</#if>">
									<span style="font-size: 28px;margin-right: 5px;">${transferDetail.remainingPeriod!}</span>
									<span style="font-size: 14px;">天</span>
								</div>
								<div className="color-gray" style="margin-top: 16px;">剩余期限</div>
							</div>
						</div>
						<div className="carry-interest carry-interest1">
							<span>转让日期：</span>
							<span className="second">${transferDetail.dealTime?string("yyyy-MM-dd")}</span>
						</div>
						<div className="carry-interest">
							<span>起息日期：</span>
							<span className="second">${interestDay?string("yyyy-MM-dd")}</span>
						</div>
						<div className="refund">
							<span>还款方式：</span>
							<span className="second">${transferDetail.repaymentMethodName!}</span>
						</div>

					</div>
					<div className="floatL detail-right">
						<div className="account-balance" >
							<div className="floatL" style="color: #868686;">账户余额：</div>
							<div className="floatR recharge">充值</div>
							<div className="floatR balance"><span>0.00</span>元</div>
						</div>
						<div className="buyMon">
							<div className="floatL" style="color: #868686;">购买金额：</div>
							<div className="floatR"><span>0.00</span>元</div>
						</div>
						<div className="earnings">
							<div className="floatL" style="color: #868686;">预期收益：</div>
							<div className="floatR"><span>0.00</span>元</div>
						</div>
						<input type="button" className="btn buyBtn" value="立即购买" style="margin-top: 80px;"/>
					</div>
				</div>
			</div>
		)
	}
}
                export default ChanPinDetail
