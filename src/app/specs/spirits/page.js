"use client"

import React from 'react'
import Layout from '@/app/component/Layout'
import Style from '../Specs.module.css';
import TopHeading from '@/app/component/TopHeading';
import MainBoxSpecs from '@/app/component/MainBoxSpecs';
import { SpiritCategory } from '../../productDetails'

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>
                    {/* Top heading show here  */}
                    <TopHeading
                        HeadingName="Spirits"
                        SearchInputText="Search Spirits"
                    />

                    {/* pass data in props to show at ui sprits details */}
                    <MainBoxSpecs
                        Data={SpiritCategory}
                    />
                </div>
            </Layout>
        </>
    )
}

export default page