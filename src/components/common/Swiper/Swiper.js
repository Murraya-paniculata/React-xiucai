import React from 'react'

class Banner extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			bannerList: [
				{
					webBannerUrl: "https://xiucai.neafex.com/site/single/article/XXTXPC",
					webImgUrl: "https://img.neafex.com/1529914199739_1529914199532_PC.jpg"
				}
			],
		}
	}

	render() {
		return (
			<div className="banner">
				<div className="swiper-container" style={{width: '100%', height: '100%'}}>
					<div className="swiper-wrapper" style={{width: '100%', height: '100%'}}>
						{this.state.bannerList.map((banner, index) => {
							return (<div key={index} className='swiper-slide'
										 style={{background:`url(${banner.webImgUrl}) no-repeat center`,height: '400px'}}>
							</div>)
						})}
					</div>
					<div className="swiper-pagination">

					</div>
				</div>
			</div>
		)
	}
}

export default Banner