import './intro.scss';
import { init } from 'ityped';
import { Component } from 'react';

import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

export default class Intro extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false,
                             strings: [ 'Developer', 'Designer', 'Content Creator' ],
                             backDelay: 1500,
                             backSpeed: 60,
     })
    }

    render(){
        return (
            <div className='intro' id='intro'>
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/man.png" className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="right my-5">
                    <div className="wrapper">
                        <h2>Hi There, I'm</h2>
                        <h1>Cahan George</h1>
                        <h3>Freelance <span id='myElement'></span></h3>
                    </div>
                    <a href="#portofolio">
                        <ArrowForwardIosRoundedIcon className='arrow-down' />
                    </a>
                </div>
            </div>
        )
    }
}
