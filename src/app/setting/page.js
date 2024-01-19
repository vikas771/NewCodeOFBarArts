"use client"

import Layout from '@/app/component/Layout'
import React from 'react';
import TopHeading from '@/app/component/TopHeading';
import Style from '../style/Common.module.css'
const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>
                    {/* pass here heading and placeholder of search box */}
                    <TopHeading
                        HeadingName="Setting"
                        SearchInputText="Search Setting"
                    />

                </div>
            </Layout>
        </>
    )
}

export default page