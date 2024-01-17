"use client"

import Layout from '@/app/component/Layout'
import React from 'react';
import Style from '../Specs.module.css';
import TopHeading from '@/app/component/TopHeading';
import MainBoxSpecs from '@/app/component/MainBoxSpecs';
import { WineCategory } from '../../productDetails';

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>

                    {/* Top heading show here  */}
                    <TopHeading
                        HeadingName="Wine"
                        SearchInputText="Search Wine"
                    />

                    {/* pass data in props to show at ui */}
                    <MainBoxSpecs
                        Data={WineCategory}
                    />
                </div>

            </Layout>
        </>
    )
}

export default page