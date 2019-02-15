import React from 'react'
import '../../assets/css/style.css'
import safe_01 from '../../assets/img/safe_01.jpg'
import safe_02 from '../../assets/img/safe_02.jpg'
import safe_03 from '../../assets/img/safe_03.jpg'
import safe_04 from '../../assets/img/safe_04.jpg'
import safe_05 from '../../assets/img/safe_05.jpg'

class AboutWe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="bankSecurity">
                <img src={safe_01} alt=""/>
                <img src={safe_02} alt=""/>
                <img src={safe_03} alt=""/>
                <img src={safe_04} alt=""/>
                <img src={safe_05} alt=""/>
            </div>
        )
    }
}

export default AboutWe