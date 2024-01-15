"use client"

import Layout from '../component/Layout';
import { Grid } from '@mui/material';
import React, { useRef } from 'react';
import Style from './Specs.module.css';
import TopHeading from '../component/TopHeading';
import { CocktailsImg , CoreBeverage , EventPlacement } from '../productDetails';
import Carousel from '../component/Carousel.js';

const page = () => {

        const cocktailsData = CocktailsImg.map(item => ({
            imageUrl: item.Url,
            productName: item.pname,
        }));

        const CoreBeverageData = CoreBeverage.map(item => ({
            imageUrl: item.Url,
            productDetails: item.pname,
        }));

        const EventPlacementData = EventPlacement.map(item => ({
            imageUrl: item.Url,
            productDetails: item.pname,
        }));

    return (
        <>
            <Layout>
                <div className={Style.SpecsParent}>

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
                            carouselData={cocktailsData}
                        />
                    </div>

                    {/* Second  Carousel of Core Beverage section  */}

                    <div>
                        <Carousel
                            CarouselHeading="Core Beverage"
                            mainCarouselHeight = "320px"
                            imageHeight="219px"
                            imageWidth = "330px"
                            carouselData = {CoreBeverageData}
                        />
                    </div>

                     {/* Third   Carousel of Event Placement section  */}

                     <div>
                        <Carousel
                            CarouselHeading="Event Placement"
                            mainCarouselHeight = "430px"
                            imageHeight="100%"
                            imageWidth = "212px"
                            carouselData = {EventPlacementData}
                        />
                    </div>


                </div>
            </Layout>
        </>
    )
}

export default page