import Layout from '@/app/component/Layout'
import Style from '../../style/Common.module.css'
import React from 'react'

const page = () => {
    return (
        <>
            <Layout>
                <div className={Style.MainSection}>
                    <h1>Hello i am here at flaskcard </h1>
                </div>
            </Layout>
        </>
    )
}

export default page