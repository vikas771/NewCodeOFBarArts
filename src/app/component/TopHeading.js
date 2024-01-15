import React from 'react'
import Style from '../style/TopHeading.module.css'
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const TopHeading = (props) => {
    return (
        <>
        <div className={Style.HeadingMainSection}>
            <Grid container spacing={2} className='mt-1'>
                <Grid item xs={6} className={Style.HeadingText}>
                    <h4>{props.HeadingName}</h4>
                </Grid>
                <Grid item xs={6} className={Style.SearchParent}>
                    <input
                        type="text"
                        placeholder={props.SearchInputText}
                        className={Style.SearchInput}
                    />
                    <SearchIcon className={Style.SearchIcon} />
                </Grid>
            </Grid>
            </div>
        </>
    )
}

export default TopHeading