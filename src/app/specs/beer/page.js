"use client"

import React from 'react';
import Style from '../Specs.module.css';
import Layout from '../../component/Layout';
import TopHeading from '../../component/TopHeading';
import { BeerDetails } from '../../productDetails';
import CartDetails from '../../component/CartDetails';

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>
                    {/* heading is pass from here  */}
                    <TopHeading
                        HeadingName="Beer"
                        SearchInputText="Search Beer"
                    />

                    {/* details pass in props from here  */}
                    <CartDetails
                        Data={BeerDetails}
                    />

                </div>
            </Layout>
        </>
    )
}

export default page