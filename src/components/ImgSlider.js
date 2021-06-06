import styled from "styled-components";
import  'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToShow: 1,
        autoplay: true,
    }
    return(
        <Carosuel {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
        </Carosuel>
    )
}

const Carosuel = styled(Slider)`
  margin-top: 20px;

  & > button {
      opacity:0;
      height: 100%;
      width: 5vh;
      z-index: 1;
  

  &:hover{
      opacity:1;
      transition: opacity 0.2s ease 0s;
  }
}

//Dots under slider
ul li button {
    &:before{
        font-size: 10px;
        color: rgb(150,158,171);
    }
}

li.slick-active button:before {
    color: white;
}

//Upcoming slider

.slick-list {
    overflow: initial;
}


//Left & Right Buttons
 .slick-prev {
     left: -75px;
 }

 .slick-next {
     right: -75px;
 }

`;

export default ImgSlider;