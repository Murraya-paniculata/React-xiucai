import React from 'react';
import NavHeader from '../../components/common/Header'
import NavFooter from '../../components/common/Footer/Footer'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'
import HelpCenterDetail from './HelpCenterDetail'

const articlesTitleList = {
    hot:'热门问题',
    loginR: '注册与登录',
    safety: '账户与安全',
    investment: '投资相关',
    recharge: '充值',
    reflect: '提现',
    coupon: "优惠券与活动",
    transfer: '转让专区',
    other: '其他问题'
}
const articles = [
    {
        id: 1,
        helpTitle: "热门问题",
        path: 'hot'
    },
    {
        id: 2,
        helpTitle: "注册与登录",
        path: 'loginR'
    },
    {
        id: 12,
        helpTitle: "账户与安全",
        path: 'safety'
    },
    {
        id: 13,
        helpTitle: "投资相关",
        path: 'investment'
    },
    {
        id: 3,
        helpTitle: "充值",
        path: 'recharge'
    },
    {
        id: 4,
        helpTitle: "提现",
        path: 'reflect'
    },
    {
        id: 14,
        helpTitle: "优惠券与活动",
        path: 'coupon'
    },
    {
        id: 50,
        helpTitle: "转让专区",
        path: 'transfer'
    },
    {
        id: 15,
        helpTitle: "其他问题",
        path: 'other'
    },
];

class HelpCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeff: ''
        }
    }

    componentWillMount() {
        let types = this.props.location.pathname.split('/')[2]
        this.setState({'typeff': types});
    }
    componentWillReceiveProps(nextProps) {
        let types = nextProps.location.pathname.split('/')[2];
        this.setState({'typeff':  types});
    }

    render() {
        return (
            <main>
                <NavHeader></NavHeader>
                <div className="productDetail-con">
                    <div className="bread-crumb">
                        <div>当前位置：</div>
                        <div>
                            <NavLink to="/"><span>首页</span> <span className="divider">></span></NavLink>
                        </div>
                        <div>
                            <span>帮助中心</span>
                        </div>
                    </div>
                    <div className="help-center">
                        <div className="help-title">帮助中心</div>
                        <div className="help-body">
                            <ul className="floatL">
                                {articles.map((item, index) => {
                                    return (
                                        <li key={index} className="nav-right">
                                            <NavLink className="hover" to={`${this.props.match.path}/`+item.path}>{item.helpTitle}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="right-detail floatR">
                                <div id="helpTitle" className="register-title">{articlesTitleList[this.state.typeff]}</div>
                                <div className="register-detail">
                                    <Switch>
                                        <Route path={`${this.props.match.path}/:type`} component={HelpCenterDetail}/>
                                        <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/hot`}
                                                  exact component={HelpCenterDetail}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{"clear": 'both'}}></div>
                </div>
                <NavFooter></NavFooter>
            </main>
        )
    }
}

export default HelpCenter;
