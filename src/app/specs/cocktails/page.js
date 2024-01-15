"use client"
import React from 'react';
import Layout from '../../component/Layout';
import Style from './Cocktails.module.css';
import CartDetails from '../../component/CartDetails';
import TopHeading from '../../component/TopHeading';
import {CocktailsImg } from '../../productDetails'

const page = () => {
    // create varibale to pass data in form of arrary 

    const CocktailDetails = CocktailsImg.map(item => ({
        id : item.id,
        pname : item.pname,
        imageUrl: item.Url,
        productDetails: item.pname,
        alcoholPersent : item.persentAlcohol,
        paratext : item.paratext,
        videoLink : item.VideoLink,
        ingredients: item.Ingredients,
        presentations: item.Presentations,
        methods: item.Methods,
        detail: item.Detail,
    }));

    return (
        <>
            <Layout>
                <div className={Style.CocktailMainSection}>
                    {/* Top heading show here  */}
                <TopHeading 
                HeadingName = "Cocktails"
                SearchInputText = "Search Cocktails"
                />

                {/* Cocktails details show here  */}

                    <CartDetails
                       Data = {CocktailDetails}
                    />
                </div>
            </Layout>
        </>
    )
}

export default page