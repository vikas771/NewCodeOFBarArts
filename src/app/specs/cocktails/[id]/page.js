"use client"

import React from 'react';
import Layout from '../../../component/Layout';
import { useParams } from 'next/navigation';
import Style from '../../Specs.module.css'

import CompleteDetails from '@/app/component/CompleteDetails';
import { CocktailsImg } from '../../../productDetails';

const page = () => {
  const params = useParams()
  const Id = params.id

  return (
    <>
      <Layout>
        <div className={Style.MainSection}>
          <CompleteDetails
            Data={CocktailsImg}
            Id={Id}
          />

        </div>
      </Layout>
    </>
  )
}

export default page