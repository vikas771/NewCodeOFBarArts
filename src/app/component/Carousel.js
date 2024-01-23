import Style from '../style/CarouselMain.module.css'
import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = (props) => {
    const { carouselData } = props;
    console.log(carouselData)
    const firstBox = useRef(null);

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
            {/* Carousel main section we get here hegiht and set here  */}
            <div className={Style.CarouselMainParent} style={{ height: props.mainCarouselHeight }}>
                {/* set Carousel heading here  */}
                <div className={Style.CarouselHeading}>
                    <div>
                        <h4>{props.CarouselHeading}</h4>
                    </div>
                    {/* Carousel second heading if present */}
                    <div>
                        <h5>{props.CarouselHeadingSecond}</h5>
                    </div>
                </div>

                <div className={Style.CarouselDetailsParent} ref={firstBox}>
                    {/* apply map method at data  */}
                    {carouselData.map((item, index) => (
                        <div key={index} className={Style.CarouselImgTextParent} style={{ backgroundColor: props.backgroundColor , width:props.imgParentWidth}}>
                            {/* Carousel img set here  */}
                            <img src={item.Url} alt='not found' style={{ height: props.imageHeight, width: props.imageWidth }} />
                            {/* Carousel img name set here  */}
                            {item.productname && <h3>{item.productname}</h3>}
                            <h4 style={{ color: props.color, top: props.top, left: props.left }}>{item.pname}</h4>
                            <p>{item.question} {props.subHeading}</p>
                        </div>
                    ))}
                </div>
                {/* Carousel next img button  */}
                <button className={Style.NextBtn} onClick={CarouselNextImg}>
                    <ArrowForwardIosIcon className={Style.PreAndNextIcon} />
                </button>
                {/* Carousel previous img button  */}
                <button className={Style.PreviousBtn} onClick={CarouselPrevImg}>
                    <ArrowBackIosIcon className={Style.PreAndNextIcon} />
                </button>
            </div>
        </>
    );
}

export default Carousel;