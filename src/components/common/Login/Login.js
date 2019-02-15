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
                <form action={this.state.siteSet.siteDomain + '/user/login'} method="post"
                      id="loginForm">
                    <div className="login-box">
                        <div className="loginTitle">登录</div>
                        {/*<div className="errorMsg"></div>*/}
                        <input type="tel" placeholder="请输入手机号" name="mobileNumber"
                               className="phoneInput" maxLength="11"/>
                        <input type="password" placeholder="请输入密码" name="password" v-model="login.password"
                               className="pwdInput"
                               maxLength="16"/>
                        <div className="graph-code" style={{marginLeft: `15px`}}>
                            <input type="text" name="verifyCode" className="codeInput" placeholder="图形验证码"/>
                            <div className="codeImg">
                                <img
                                    style={{display: 'block',maxWidth: '100%'}}
                                    id="verifyCode"
                                    src="data:image/png;base64,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"
                                    alt=""/>
                            </div>
                        </div>
                        <input type="button" className="btn loginBtn" value="立即登录"/>
                        <div className="goRegister">
                            {/*<router-link :to="{name:'modifyPassword'}">*/}
                            {/*<a className="floatR">忘记密码</a>*/}
                            {/*</router-link>*/}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login