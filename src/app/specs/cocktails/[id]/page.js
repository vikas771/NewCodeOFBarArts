import React from 'react';
import Layout from '../../../component/Layout';
import Style from './DynamicCocktail.module.css'
import ViewMoreDetails from '@/app/component/ViewMoreDetails';

const page = () => {
  return (
    <>
    <Layout>
        <div className={Style.CocktailInnerSection}>
        <ViewMoreDetails />
        <h1>heloo i am </h1>

        </div>
        </Layout>


    </>
  )
}

export default page