import React, {Component} from 'react';//react 상속해서 쓴다.
import img from '../루피.jpg';

class ImgComponent extends Component {
    render() {
        return (
            <img src={img} alt="이미지"></img>
        )
    }    
}

export default ImgComponent;

