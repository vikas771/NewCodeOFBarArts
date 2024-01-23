"use client"

import Layout from '../component/Layout';
import React from 'react';
import Style from '../style/Common.module.css';
import { Flashcards, Quizzes } from '../productDetails';
import TopHeading from '../component/TopHeading';
import Carousel from '../component/Carousel';

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>

                    {/* pass here heading name and placeholder of search box */}
                    <TopHeading
                        HeadingName="Library"
                        SearchInputText="Search library"
                    />

                    {/* First  Carousel of Cocktails section  */}
                    {/* <div>
                        <Carousel
                            CarouselHeading="Videos"
                            mainCarouselHeight="320px"
                            imageHeight="219px"
                            imageWidth="330px"
                            carouselData={Library}
                        />
                    </div> */}

                    {/* Second  Carousel of Quizzes section  */}
                    <div>
                        <Carousel
                            CarouselHeading="Quizzes"
                            mainCarouselHeight="280px"
                            imageHeight="100%"
                            imageWidth="212px"
                            backgroundColor="white"
                            color="black"
                            top="70%"
                            left="1%"
                            subHeading="questions"
                            carouselData={Quizzes}
                        />
                    </div>

                    {/* Third Carousel or Flashcards section start here  */}
                    <div>
                        <Carousel
                            CarouselHeading="Quizzes"
                            mainCarouselHeight="280px"
                            imageHeight="100%"
                            imageWidth="212px"
                            backgroundColor="white"
                            color="black"
                            top="70%"
                            left="1%"
                            subHeading="Flashcards"
                            carouselData={Flashcards}
                        />
                    </div>

                </div>
            </Layout>
        </>
    )
}

export default page