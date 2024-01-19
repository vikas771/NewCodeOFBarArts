import React from 'react';
import { Grid } from '@mui/material';
import Style from '../style/MainBoxSpecs.module.css';
import { useRouter } from 'next/navigation';


const MainBoxSpecs = (props) => {
    const Route = useRouter()
    const { Data } = props;
    console.log(Data)

    // function to redirect at specific details component
    const GetCompleteDetails = (id) => {
        Route.push(`${props.routePath}/${id}`)
    }
    return (
        <>
            <Grid container spacing={2} className={Style.GridSection}>
                {Data.map((item) => (
                    <Grid key={item.id} item xs={4} className={Style.TextImgSection} onClick={() => GetCompleteDetails(item.id)}>
                        <Grid container spacing={2} className={Style.ImgTextChild}>
                            <Grid item xs={4} className={Style.ImgSection}>
                                {/* show here img */}
                                <img src={item.Url} alt="not found" />
                            </Grid>
                            <Grid item xs={8} className={Style.TextHeading}>
                                {/* show here heading */}
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