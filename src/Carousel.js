import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({ sliderImgArray, currentImg, setCurrentImg }) => {

    function showPrevImg() {
        if (currentImg === 0) {
            setCurrentImg(sliderImgArray.length - 1);
        } else {
            setCurrentImg(currentImg - 1);
        }
    }

    function showNextImg() {
        if (currentImg === sliderImgArray.length - 1) {
            setCurrentImg(0);
        } else {
            setCurrentImg(currentImg + 1);
        }
    }

    return (
        <div className="carouselDiv">
            <div className="leftBtnDiv" onClick={showPrevImg}>
                <button className="leftBtn">
                    <ArrowBackIosIcon />
                </button>
            </div>
            <div className="rightBtnDiv" onClick={showNextImg}>
                <button className="rightBtn">
                    <ArrowForwardIosIcon />
                </button>
            </div>

            <div className="imgSlider">
                {
                    // eslint-disable-next-line array-callback-return
                    sliderImgArray.map((imgObj, index) => {
                        return (
                            <>
                                {
                                    currentImg === index &&
                                    <div className="imgDiv">
                                        <div className="imgContent">
                                            <p>{imgObj.para}</p>
                                            <button>{imgObj.btnText}</button>
                                        </div>
                                        <img src={imgObj.img} alt="carousel-Img" key={index} />
                                    </div>
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel;