import React from 'react';
import ajax from '../../Api/Ajax'

class HelpCenterDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recordData: []
        }
    }

    getRecord(type) {
        try {
            ajax().then(res => {
                let helpCenterData = res.data.helpCenterData[type];
                this.setState({recordData: helpCenterData || []})
            })
        } catch {

        }
    }

    componentWillReceiveProps(nextProps) {
        // 判断类型是否重复
        let currenType = this.props.location.pathname.split('/')[2];
        let type = nextProps.location.pathname.split('/')[2];
        if (currenType !== type) {
            this.getRecord(type);
        }
    }

    componentWillMount() {
        let type = this.props.location.pathname.split('/')[2];
        this.getRecord(type);
    }

    render() {
        return (
            <div>
                {this.state.recordData.map((item, index) => {
                    return (
                        <div className="first-con as" key={index}>
                            <div className="color-orange sd">
                                {item.question}
                            </div>
                            <p className="we">
                                {item.anser}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default HelpCenterDetail;
