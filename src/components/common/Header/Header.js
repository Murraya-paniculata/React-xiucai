import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../../../container/index/index'
class NavHeader extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			isLogin: false,
			CustomerServicePhone: '15077882107',
			siteSet:{
				siteDomain:"https://xiucai.neafex.com",
				qrAppUrl:"https://img.neafex.com/WechatIMG9937.jpeg",
				siteName:"东金秀财",
				logoUrl:"https://img.neafex.com/logo.png",
				hotline:"0431-81166897"
			},
			phoneIcon:false,
			siteBarList:[
				{
					barUrl:"userCenter",
					barName:"我的账户"
				},
				{
					barUrl:"bankSecurity",
					barName:"关于我们"
				},
				{
					barUrl:"transferList",
					barName:"转让专区"
				},
				{
					barUrl:"productList",
					barName:"我要投资"
				},
				{
					barUrl:"home",
					barName:"首页"
				}
			]
		}
	}
	render(){
		const logout = (<div>
			{/*// <router-link :to="{name:'userCenter'}">
								// 	<a>欢迎,{{username|phoneHideMiddle}}</a>
								// </router-link>*/}
					<a href="http://www.baidu.com">[ 安全退出 ]</a>
					</div>)
		const login = (<div>
			{/*<router-link :to="{name:'loginRegister',query:{type:'login'}}"><a>登录</a></router-link>
		<router-link :to="{name:'loginRegister',query:{type:'register'}}"><a>注册</a></router-link>*/}

			<Router>
				<div>
					<Link to='/'>登录</Link>
					{/*<Link to="/reset">注册</Link>*/}
					<Route exact path="/" component={Index} />
					{/*<Route path="/about" component={About} />*/}
					{/*<Route path="/topics" component={Topics} />*/}
				</div>
			</Router>

			</div>)
		return (
			<div>
				<div className="top">
					<div className="top-con">
						<div className="floatL">客服热线：{this.state.siteSet.hotline}</div>
						<div className="floatR top-right">
						{this.state.isLogin?logout:login}
						<a href={`${this.state.siteSet.siteDomain}+/site/help/0`}>帮助中心</a>
						<a href={`${this.state.siteSet.siteDomain}+/site/help/0`}>新手指南</a>
						<a href="http://www.baidu.com" className="phone">手机端</a>
						</div>
						<div className="phoneIcon">
							<div>扫描下载东金秀财app</div>
						</div>
					</div>
				</div>
				<div className="navBar">
					<div className="nav-con">
						{this.state.siteBarList.map((item,index)=>{
							return (
								<div key={index} className="nav-right floatR">
									{/*<router-link :to="{name:siteBar.barUrl}"><li><a>{{siteBar.barName}}</a></li></router-link>*/}
									<a href="http://www.baidu.com" className="hover">{item.barName}</a>
								</div>
							)
						})}
						<div className="nav-left floatL">
							{/*<router-link :to="{name:'home'}"><a> <img :src="siteSet.logoUrl" alt="" style="cursor: pointer;"/></a></router-link>*/}
							<a href="http://www.baidu.com">
								<img src={this.state.siteSet.logoUrl} alt=""/>
							</a>
						</div>
					</div>
				</div>
		</div>
	)}
}
export default NavHeader
