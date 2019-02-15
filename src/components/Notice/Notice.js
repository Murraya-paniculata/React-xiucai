import React from 'react'

class Notice extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			noticeList: [
				{
					id: "5",
					noticeTitle: "关于东金秀财银行升级维护的公告",
					createDate: "2018-09-29"
				},
				{
					id: "1",
					noticeTitle: '关于东金秀卡平台更名为"东金秀财"的公告',
					createDate: "2018-09-29"
				},
				{
					id: "2",
					noticeTitle: "关于东金秀财上线电子合同存证的公告",
					createDate: "2018-09-29"
				},
				{
					id: "4",
					noticeTitle: "关于暂停四家银行快捷支付的公告",
					createDate: "2018-09-29"
				}
			],
			siteSet: {
				siteDomain: "https://xiucai.neafex.com"
			}
		}
	}

	render() {
		return (
			<div className="advertisement">
				<div className="advertisement-con">
					<div className="advertisement-left floatL">
						<div className="floatL notice">【通知公告】</div>
						<div className="floatL notice-con">
							{this.state.noticeList.map((notice, index) => {
								return (
									<ul key={index}>
										<li className="wordMove">
											<a href={this.state.siteSet.siteDomain + '/site/notice/detail/' + notice.id}>
												{notice.noticeTitle}&nbsp;
												{notice.createDate}
											</a>
										</li>
									</ul>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Notice