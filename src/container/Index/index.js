import React from 'react'
import NavHeader from '../../components/common/Header/index'
import NavFooter from '../../components/common/Footer/Footer'
import Banner from '../../components/Banner/Banner'

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <NavHeader></NavHeader>
                <Banner></Banner>
                <NavFooter></NavFooter>
            </div>
        )
    }

}

export default Index;
