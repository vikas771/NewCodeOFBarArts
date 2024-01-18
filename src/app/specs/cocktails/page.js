"use client"
import React from 'react';
import Layout from '../../component/Layout';
import Style from '../Specs.module.css';
import CartDetails from '../../component/CartDetails';
import TopHeading from '../../component/TopHeading';
import { CocktailsImg } from '../../productDetails'

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>
                    {/* Top heading show here  */}
                    <TopHeading
                        HeadingName="Cocktails"
                        SearchInputText="Search Cocktails"
                    />

                    {/* Cocktails details show here  */}
                    <CartDetails
                        Data={CocktailsImg}
                        routePath = "/specs/cocktails"
                    />
                </div>
            </Layout>
        </>
    )
}

export default page