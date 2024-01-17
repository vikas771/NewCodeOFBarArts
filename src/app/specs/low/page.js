"use client"

import Layout from '@/app/component/Layout'
import React from 'react';
import Style from '../Specs.module.css';
import TopHeading from '@/app/component/TopHeading';
import CartDetails from '../../component/CartDetails';
import { LowNoABV } from '../../productDetails';

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>
                    {/* pass here heading and placeholder of search box */}
                    <TopHeading
                        HeadingName="Low No ABV"
                        SearchInputText="Search Low No Abv"
                    />

                    {/* passed here details which we want to show at ui  */}
                    <CartDetails
                        Data={LowNoABV}
                    />
                </div>
            </Layout>
        </>
    )
}

export default page