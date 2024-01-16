"use client"

import Layout from '../component/Layout';
import React, { useRef } from 'react';
import Style from './Specs.module.css';
import TopHeading from '../component/TopHeading';
import { CocktailsImg , CoreBeverage , EventPlacement } from '../productDetails';
import Carousel from '../component/Carousel.js';

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.SpecsParent}>

{/* pass here heading name and placeholder of search box */}
                <TopHeading 
                HeadingName = "Specs"
                SearchInputText = "Search Categories"
                />


                    {/* First  Carousel of Cocktails section  */}
                    <div>
                        <Carousel
                            CarouselHeading="Cocktails"
                            CarouselHeadingSecond = "See All"
                            imageHeight="140px"
                            imageWidth = "180px"
                            mainCarouselHeight = "290px"
                            backgroundColor = "white"
                            carouselData={CocktailsImg}
                        />
                    </div>

                    {/* Second  Carousel of Core Beverage section  */}

                    <div>
                        <Carousel
                            CarouselHeading="Core Beverage"
                            mainCarouselHeight = "320px"
                            imageHeight="219px"
                            imageWidth = "330px"
                            carouselData = {CoreBeverage}
                        />
                    </div>

                     {/* Third   Carousel of Event Placement section  */}

                     <div>
                        <Carousel
                            CarouselHeading="Event Placement"
                            mainCarouselHeight = "430px"
                            imageHeight="100%"
                            imageWidth = "212px"
                            carouselData = {EventPlacement}
                        />
                    </div>


                </div>
            </Layout>
        </>
    )
}

export default page