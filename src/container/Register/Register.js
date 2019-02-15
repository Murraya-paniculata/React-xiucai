import React from "react"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginErrorMsg: "",
            isLogin: false,
            siteSet: {
                siteDomain: "https://xiucai.neafex.com"
            },
            activeTab: 1,
            isCodeDisabled: true,
            registerCode: "https://xiucai.neafex.com/verifyCode/captcha?_=" + new Date().getTime() + "/verifyCode/captcha?_=" + new Date().getTime()
        }
    }

    login() {
        alert('登录成功!')
    }

    getCodeImg() {
        this.setState({
            registerCode: this.state.siteSet.siteDomain + "/verifyCode/captcha?_=" + new Date().getTime()
        })
    }

    render() {
        return (
            <div className="login-con">
                <div className="login-box">
                    <ul id="myTab" className="nav nav-tabs nav-login">
                        <a href="http://www.baidu.com" data-toggle="tab" className="col-grey tab-a login-a active-tab"
                           onClick="this.state.activeTab = 1"
                           style={{borderRight: `1px solid #f0f0f0`}} dataName="登录">登录
                        </a>
                        <a href="http://www.baidu.com" className="col-grey tab-a register-a active-tab"
                           dataToggle="tab" data-name="注册">注册
                        </a>
                    </ul>
                    <div id="myTabContent" className="tab-content">
                        <div id="login" className="tab-pane,active">
                            <form>
                                <div className="login-box">
                                    <div className="loginTitle">登录</div>
                                    <div className="errorMsg">{this.state.loginErrorMsg}</div>
                                    <input type="tel" placeholder="请输入手机号" name="mobileNumber" className="phoneInput"
                                           style={{marginTop: "6px"}} maxLength="11"/>
                                    <input type="password" placeholder="请输入密码" name="password" className="pwdInput"
                                           maxLength="16"/>
                                    <div className="graph-code" style={{marginLeft: '15px'}}>
                                        <input type="text" className="codeInput" name="verifyCode" placeholder="图形验证码"/>
                                        <div className="codeImg">
                                            <img src={this.state.siteSet.siteDomain + '/verifyCode/captcha'}
                                                 id="verifyCode"/>
                                        </div>
                                    </div>
                                    <input type="hidden" name="loginFrom" value="index"/>
                                    <input type="submit" className="btn loginBtn" value="立即登录"
                                           onClick={() => this.login()}/>
                                    <div className="goRegister">
                                        {/*<router-link :to="{name:'modifyPassword'}">*/}
                                        <a href="http://www.baidu.com" className="floatL">忘记密码</a>
                                        {/*</router-link>*/}
                                        {/*<router-link :to="{name:'loginRegister'}">*/}
                                        <a href="http://www.baidu.com" className="floatR">立即注册</a>
                                        {/*</router-link>*/}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane active" id="register">
                            <form action={this.state.siteSet.siteDomain + '/register/user'} method="post"
                                  id="registerForm">
                                <div className="errorMsg"></div>
                                <input type="tel" placeholder="请输入手机号" name="mobileNumber"
                                       className="phoneInput" maxLength="11"/>
                                <div className="graph-code" style={{marginLeft: '15px'}}>
                                    <input type="text" name="verifyCode" className="codeInput"
                                           placeholder="图形验证码" maxLength="4" style={{"marginBottom": "10px"}}/>
                                    <div className="codeImg">
                                        <img id="registerCodeImg" src={this.state.registerCode} alt="" title=""
                                             onClick={() => this.getCodeImg()}/>
                                    </div>
                                </div>
                                <input type="tel" placeholder="请输入短信验证码" name="smsCode"
                                       className="note-code floatL" maxLength="6"/>
                                <input type="button" style={{borderRadius: 0}} className="identifyCode btn floatL"
                                       disabled="this.state.isCodeDisabled" v-model="codeText"/>
                                <input type="password" name="password" placeholder="6-16位字母和数字组合密码" className="pwdInput"
                                       maxLength="16"/>
                                <input type="button" className="btn registerBtn" value="立即注册"/>
                                <div className="deal">
                                    <p style={{overflow: 'hidden', padding: `0 16px`}}>
                                        <span className="check-box floatL" id="checkbox"></span>
                                        <span className="floatL"></span>
                                        <span className="bluebtn">我已经阅读并同意
                                            {/*<router-link :to="{name:'home'}"><a TARGET="_blank">《用户服务协议》</a></router-link>*/}
                                            {/*<router-link :to="{name:'home'}">*/}
                                            <a href={this.state.siteSet.siteDomain + '/site/single/article/FXJSS'}
                                               target="_blank">《风险揭示书》</a>
                                            {/*</router-link>*/}
				                        </span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
