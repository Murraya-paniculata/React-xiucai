import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import logoImg from './assets/img/1.png'
// import NavHeader from './components/common/Header/Header'
// import NavFooter from './components/common/Footer/Footer'
// import MiddleCon from './components/MiddleCon/MiddleCon'
// import Notice from './components/Notice/Notice'
// import PopularRecommendCon from './components/PopularRecommendCon/PopularRecommendCon'
// import Partner from './components/Partner/Partner'
// import Banner from './components/Banner/Banner'
// import PersonalCenter from './container/PersonalCenter/PersonalCenter'
// import Finance from './container/finance/Finance'
// import WoYaoTouZi from './container/woyaotouzi/woyaotouzi'
// import AboutWe from './container/AboutWe/AboutWe'
import Index from './container/Index/index'

class App extends Component {
	constructor(props){
	    super(props)
        this.state = {
            msg: '老子天下第一'
        }
        console.log('01构造函数')
    }
    componentWillMount(){
	    console.log('02组件即将挂在')
    }
    componentDidMount() {
	    /*dom操作、 ajax请求数据*/
	    console.log('04组件已经挂载')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
	    console.log('01是否更新数据',nextProps,nextState,nextContext)
	    return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('02数据即将更新',nextProps,nextState,nextContext)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('03数据已经更新',prevProps,prevState,snapshot)
    }

    componentWillUnmount() {
	    //组件即将销毁时
    }

    changeMsg(){
	    this.setState({
            msg: '退一步海阔天空'
        })
    }

    render() {
        console.log('03数据渲染');
        return (
            <div className="App">
                <Index></Index>
                {/*<button onClick={()=>this.changeMsg()}>改变msg的值</button>*/}
                {/*<h2>{this.state.msg}</h2>*/}
                {/*<header className="App-header">*/}
                {/*<img this.state.project={logo} className="App-logo" alt="logo" />*/}
                {/*<h2>卡卡卡卡</h2>*/}
                {/*<img this.state.project={logoImg} alt="ss"/>*/}
                {/*<p>*/}
                {/*Edit <code>this.state.project/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*className="App-link"*/}
                {/*href="https://reactjs.org"*/}
                {/*target="_blank"*/}
                {/*rel="noopener noreferrer"*/}
                {/*>*/}
                {/*Learn React*/}
                {/*</a>*/}
                {/*</header>*/}
                {/*<NavHeader/>*/}
                {/*<Banner/>*/}
                {/*<Notice/>*/}
                {/*<MiddleCon/>*/}
                {/*<PopularRecommendCon/>*/}
                {/*<Partner/>*/}
                {/*<NavFooter/>*/}
                {/*<PersonalCenter/>*/}
                {/*<Finance/>*/}
                {/*<WoYaoTouZi/>*/}
                {/*<AboutWe/>*/}
            </div>
        );
    }
}

export default App;
