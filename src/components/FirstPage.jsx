import React from 'react'

const FirstPage = () => {
    return (
        <div>
            <div className='FirstPage-container' 
            >
                <div className='hero-left'>
                    <h1 className='hero-left-title'><span>P</span>remium <br /> car rental <br /> in New Yor<span>k</span></h1>
                    <p className='hero-left-para'> Don't deny yourself the pleasure of <br />driving the best premium cars from <br /> around the world here and now</p>
                </div>

                <div className="hero-right">
                    <img className='hero-right-image' width={700} src={require("../components/assets/red_car-removebg-preview.png")} alt="" />
                </div>
            </div>
            {/* <div className="carlogo">
                <div className="leftcarlogo">
                    <img height={70} width={120} src="https://th.bing.com/th/id/OIP.rBk19h_qlexuFjPZVxMnOgHaEK?rs=1&pid=ImgDetMain" alt="" />

                    <img height={70} width={100} src="https://th.bing.com/th/id/R.d45479756a9d282b98cbb989c5465471?rik=6w1MsZS1pekLOQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f05%2fLogo-Of-BMW.png&ehk=80VGTDIukdAFsBp64eEKUyPmyOJR4dQWRTpi5qAWSDE%3d&risl=&pid=ImgRaw&r=0" alt="" /> &nbsp; &nbsp;
                    <img height={50} width={120} src="https://th.bing.com/th/id/OIP.cqoE9rX31cn-3pCIs1NfUQHaCS?rs=1&pid=ImgDetMain" alt="" />
                    <img height={60} width={90} src="https://th.bing.com/th/id/R.9b56abdfcf6da4438014dd4d4eeaeabf?rik=3c8iKsPVIfLYJw&riu=http%3a%2f%2fpngimg.com%2fuploads%2ftesla_logo%2ftesla_logo_PNG19.png&ehk=v42J%2bn3aTLzgJo0Kgz9SBWcAdW1HniRPVfXzKUTDh3c%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className="rightcarlogo">
                    <img height={60} width={190} src="https://th.bing.com/th/id/OIP.8Au800Hb3gTZqU66xvJ3nwHaEK?rs=1&pid=ImgDetMain" alt="" />

                    <img height={70} width={90} src="https://th.bing.com/th/id/OIP.yLeDEARUVyb5y_yxHrA8BAHaHJ?rs=1&pid=ImgDetMain" alt="" />

                    <img height={60} width={80} src="https://th.bing.com/th/id/OIP.rOirwJpUcHxo8LjnKiZZuwAAAA?rs=1&pid=ImgDetMain" alt="" />

                    <img height={60} width={90} src="https://th.bing.com/th/id/OIP.g6FXQIC1BY2kI1-c8SiZxwHaEK?rs=1&pid=ImgDetMain" alt="" />
                </div>
            </div> */}
        </div>
    )
}

export default FirstPage
