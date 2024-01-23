import React from 'react';
import Layout from '../component/Layout';
import Style from '../style/Common.module.css';
import style from './checklist.module.css'
import { CheckList } from '../productDetails';
import TopHeading from '../component/TopHeading';
import { Grid } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import LinearProgress from '@mui/material/LinearProgress';

const page = () => {
  return (
    <>
      <Layout>
        <div className={Style.MainSection}>

          {/* pass here heading name and placeholder of search box */}
          <TopHeading
            HeadingName="Checklist"
            SearchInputText="Search Checklist"
          />

          <div>
            {CheckList.map((item) => (
              <div className={style.parent_checklist}>
                <Grid container spacing={2} className={style.GridParent}>
                  <Grid item xs={10} className={style.IconAndText}>
                    <DescriptionIcon className={style.Iconstyle} />
                    <h5>{item.description}</h5>
                  </Grid>
                  <Grid item xs={2} className={style.ProgressParent}>
                    <div className={style.ProgressText}>
                      <p>03/06</p>
                      <span> In Progress</span>
                    </div>

                    <div>
                      <LinearProgress
                        className={style.ProgessBar}
                        variant="determinate"
                        value="25"
                        sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'rgba(255,131,65,255)' } }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            ))}
          </div>


        </div>
      </Layout>
    </>
  )
}

export default page
