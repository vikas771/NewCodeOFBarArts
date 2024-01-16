import { Grid } from '@mui/material'
import React from 'react'
import { SpiritCategory } from '../productDetails';
import Style from '../style/MainBoxSpecs.module.css'

const MainBoxSpecs = (props) => {
    const {Data} = props;
    console.log(Data)

    const GetCompleteDetails = (id) => {
        console.log(id);
    }
    return (
        <>
                <Grid container spacing={2} className={Style.GridSection}>
                    {Data.map((item) => (
                        <Grid key={item.id} item xs={4} className={Style.TextImgSection} onClick={() => GetCompleteDetails(item.id)}>
                            <Grid container spacing={2} className={Style.ImgTextChild}>
                                <Grid item xs={4} className={Style.ImgSection}>
                                    <img src={item.Url} alt="not found" />
                                </Grid>
                                <Grid item xs={8} className={Style.TextHeading}>
                                    <h4>{item.pname}</h4>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
        </>
    )
}

export default MainBoxSpecs