import Style from '../style/CarouselMain.module.css'
import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = (props) => {
    const { carouselData } = props;
    const firstBox = useRef(null);

    console.log("imageUrl", props)

    // Carousel button for next img
    const CarouselNextImg = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft + width;
    };

    // Carousel button for previous img
    const CarouselPrevImg = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft - width;
    };

    return (
        <>
            <div className={Style.CarouselMainParent} style={{height: props.mainCarouselHeight}}>
                <div className={Style.CarouselHeading}>
                    <div>
                        <h4>{props.CarouselHeading}</h4>
                    </div>
                    <div>
                        <h5>{props.CarouselHeadingSecond}</h5>
                    </div>
                </div>

                <div className={Style.CarouselDetailsParent} ref={firstBox}>
                    {carouselData.map((item, index) => (
                        <div key={index} className={Style.CarouselImgTextParent} style={{backgroundColor: props.backgroundColor}}>
                            <img src={item.imageUrl} alt='not found' style={{height: props.imageHeight, width: props.imageWidth}}/>
                            {item.productName && <h3>{item.productName}</h3>}
                            <h4>{item.productDetails}</h4>
                        </div>
                    ))}
                </div>
                <button className={Style.NextBtn} onClick={CarouselNextImg}>
                    <ArrowForwardIosIcon className={Style.PreAndNextIcon} />
                </button>
                <button className={Style.PreviousBtn} onClick={CarouselPrevImg}>
                    <ArrowBackIosIcon className={Style.PreAndNextIcon} />
                </button>
            </div>
        </>
    );
}

export default Carousel;
