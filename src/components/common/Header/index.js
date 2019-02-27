import React from 'react'
import {NavLink} from "react-router-dom";
// import Index from '../../../container/index/index'

const siteBarList = [
    {
        barUrl: "userCenter",
        barName: "我的账户",
        router: '/PersonalCenter'
    },
    {
        barUrl: "bankSecurity",
        barName: "关于我们",
        router: '/aboutWe'
    },
    {
        barUrl: "transferList",
        barName: "转让专区",
        router: '/finance/transfer'
    },
    {
        barUrl: "productList",
        barName: "我要投资",
        router: '/productList'
    },
    {
        barUrl: "home",
        barName: "首页",
        router: '/'
    }
];
const siteSet = {
    siteDomain: "https://xiucai.neafex.com",
    qrAppUrl: "https://img.neafex.com/WechatIMG9937.jpeg",
    siteName: "东金秀财",
    logoUrl: "https://img.neafex.com/logo.png",
    hotline: "0431-81166897"
};

class NavHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            CustomerServicePhone: '15077882107',
            phoneIcon: false
        }
    }

    render() {
        return (
            <div>
                <div className="top">
                    <div className="top-con">
                        <div className="floatL">客服热线：{siteSet.hotline}</div>
                        <div className="floatR top-right">
                            {/*{this.state.isLogin?logout:login}*/}
                            <NavLink to='/helpCenter'>帮助中心</NavLink>
                            <NavLink to='/helpCenter'>新手指南</NavLink>
                            <a href="http://www.baidu.com" className="phone">手机端</a>
                        </div>
                        <div className="phoneIcon">
                            <div>扫描下载东金秀财app</div>
                        </div>
                    </div>
                </div>
                <div className="navBar">
                    <div className="nav-con">
                        {siteBarList.map((item, index) => {
                            return (
                                <div key={index} className="nav-right floatR">
                                    <NavLink exact to={item.router} className="hover">{item.barName}</NavLink>
                                </div>
                            )
                        })}
                        <div className="nav-left floatL">
                            <NavLink to='/'>
                                <img src={siteSet.logoUrl} alt=""/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavHeader
