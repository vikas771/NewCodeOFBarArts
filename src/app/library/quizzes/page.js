"use client"

import Layout from '@/app/component/Layout'
import Style from '../../style/Common.module.css'
import React from 'react'
import { QuizzesBourbonHistory, QuizzesCoreBeverage, SignatureCocktails } from '@/app/productDetails'
import TopHeading from '@/app/component/TopHeading'
import Carousel from '@/app/component/Carousel'

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>

                    {/* pass here heading name and placeholder of search box */}
                    <TopHeading
                        HeadingName="Flashcards"
                        SearchInputText="Search Flashcards"
                    />

                    {/* First  Carousel of BourbonHistory section  */}
                    <div>
                        <Carousel
                            CarouselHeading="Bourbon History"
                            mainCarouselHeight="300px"
                            imgParentWidth="224px"
                            imageHeight="100%"
                            imageWidth="224px"
                            subHeading="flashcards"
                            backgroundColor="white"
                            color="black"
                            top="70%"
                            left="1%"
                            carouselData={QuizzesBourbonHistory}
                        />
                    </div>

                     {/*  Second Carousel or Signature Cocktails section start here  */}
                     <div>
                        <Carousel
                            CarouselHeading="Signature Cocktails"
                            mainCarouselHeight="280px"
                            imageHeight="100%"
                            imageWidth="212px"
                            backgroundColor="white"
                            color="black"
                            top="70%"
                            left="1%"
                            subHeading="flashcards"
                            carouselData={SignatureCocktails}
                        />
                    </div>

                    {/* Third  Carousel of Core Beverage section  */}
                    <div>
                        <Carousel
                            CarouselHeading="Core Beverage"
                            mainCarouselHeight="280px"
                            imageHeight="100%"
                            imageWidth="212px"
                            backgroundColor="white"
                            color="black"
                            top="70%"
                            left="1%"
                            subHeading="flashcards"
                            carouselData={QuizzesCoreBeverage}
                        />
                    </div>

                   
                </div>
            </Layout>
        </>
    )
}

export default page