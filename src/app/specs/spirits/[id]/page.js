"use client"

import React from 'react'
import Layout from '@/app/component/Layout'
import TopHeading from '../../../component/TopHeading';
import Style from '../../../style/Common.module.css';
import CartDetails from '../../../component/CartDetails'
import {GinCategory} from '../../../productDetails';

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>
                    {/* Top heading show here  */}
                    <TopHeading
                        HeadingName="Gin"
                        SearchInputText="Search spirits"
                    />

                    {/* pass data in props to show at ui sprits details */}

                    <CartDetails
                    Data = {GinCategory} 
                    />
                    
                </div>
            </Layout>
        </>
    )
}

export default page