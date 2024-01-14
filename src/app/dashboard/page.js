"use client"

import React from 'react';
import Layout from '../component/Layout'
import Style from './Dashboard.module.css'
import ArticleIcon from '@mui/icons-material/Article';
import { ResponsiveContainer } from 'recharts';
import { Grid, List, ListItem, Paper } from '@mui/material'
import { PieChart, Pie, Cell } from 'recharts';

const pieChartData = [
  { name: 'Step 1', value: 25 },
  { name: 'Step 2', value: 25 },
  { name: 'Step 3', value: 25 },
  { name: 'Step 4', value: 25 },
];

const COLORS = ['#f44336', '#2196f3', '#4caf50', '#ff9800'];

const page = () => {
  return (
    <>
      <Layout >
      <div className={Style.DashboardSection}>

<div className={Style.FirstParent}>
  <h2>Welcome Back, Aria</h2>
  <p>We are grateful to have you on the Marriott International BarArts team.</p>
  <Grid container spacing={1}>
    <Grid item xs={6}>
      <div className={`${Style.GraphParent} ${Style.HeadingStyleText}`}>
        <div className={Style.HeadingText}>
          <h4>This Week</h4>
          <h6>Select Week</h6>
        </div>
        <div className={Style.graphImg}>
          <img src='/barchart.webp' alt='not found' />
        </div>
      </div>
    </Grid>
    <Grid item xs={3}>
      <div className={`${Style.PieGraphParent} ${Style.HeadingStyleText}`}>
        <h4>Your Status</h4>
        <div className={Style.ProgressBarChild}>

          <div className={Style.StatusParent}>
            <div className={Style.ProgressStatus}>
              <h6>68%</h6>
              <p>Complete</p>
            </div>
          </div>

          <div className={Style.endSection}>
            <div className={Style.SquarePareent}>
              <div className={Style.firstSquare}></div>
              <p>Completed</p>
            </div>
            <div className={Style.SquarePareent}>
              <div className={Style.secondSquare}></div>
              <p>Remaining</p>
            </div>
          </div>
        </div>

      </div>
    </Grid>
    <Grid item xs={3}>
      <div className={`${Style.Progress} ${Style.HeadingStyleText}`}>
        <h4>Your Progress</h4>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={5}>
            <div className={Style.BoxesParent}>
              <div className={Style.SquareBoxFirst}>
                <div className={Style.InnerFirst}></div>
                <h6>Flashcards</h6>
              </div>

              <div className={Style.SquareBoxFirst}>
                <div className={Style.SquareBoxSecond}></div>
                <h6>Quizzes</h6>
              </div>

              <div className={Style.SquareBoxFirst}>
                <div className={Style.SquareBoxThird}></div>
                <h6>Courses</h6>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </Grid>
</div>

<div className={Style.SecondParent}>
  <Grid container spacing={1}>
    <Grid item xs={4}>
      <div className={Style.FlashcardParent}>
        <div className={`${Style.FirstCircle} ${Style.HeadingStyleText}`}>
          <div>
            <h4>Flashcard Progress</h4>
            <p>just a step away to get certificate</p>
          </div>
          <div className={Style.progressbar}>
            <p>54%</p>
          </div>
        </div>

        <div className={Style.scrollContainer}>
          <List >
            <ListItem className={Style.ListItem}>
              <div>
                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Distilling Whiskey</h6>
                    <p>10 Flashcards</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Warehouse and Barrels</h6>
                    <p>10 Flashcards</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Whiskeys From Around the World</h6>
                    <p>10 Flashcards</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Manhattan</h6>
                    <p>0 Flashcards</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Whiskey Sour</h6>
                    <p>3 Flashcards</p>
                  </div>
                </div>

              </div>
            </ListItem>
          </List>
        </div>
      </div>

    </Grid>

    <Grid item xs={4}>
      <div className={Style.FlashcardParent}>
        <div className={`${Style.FirstCircle} ${Style.HeadingStyleText}`}>
          <div>
            <h4>Quizzes  Progress</h4>
            <p>just a step away to get certificate</p>
          </div>
          <div className={Style.progressbar}>
            <p>54%</p>
          </div>
        </div>

        <div className={Style.scrollContainer}>
          <List >
            <ListItem className={Style.ListItem}>
              <div>
                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Distilling Whiskey</h6>
                    <p>10 Flashcards</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Warehouse and Barrels</h6>
                    <p>10 Flashcards</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Whiskeys From Around the World</h6>
                    <p>10 Flashcards</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Manhattan</h6>
                    <p>7 Flashcards</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Whiskey Sour</h6>
                    <p>4 Flashcards</p>
                  </div>
                </div>

              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </Grid>
    <Grid item xs={4}>
      <div className={Style.FlashcardParent}>

        <div className={`${Style.FirstCircle} ${Style.HeadingStyleText}`}>
          <div>
            <h4>Flashcard Progress</h4>
            <p>just a step away to get certificate</p>
          </div>
          <div className={Style.progressbar}>
            <p>54%</p>
          </div>
        </div>

        <div className={Style.scrollContainer}>
          <List >
            <ListItem className={Style.ListItem}>
              <div>
                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Manhattan</h6>
                    <p>Complete Course to Earn Certificate</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Whiskey Sour</h6>
                    <p>Complete Course to Earn Certificate</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Mint-Julep</h6>
                    <p>Complete Course to Earn Certificate</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Boulevardie</h6>
                    <p>Complete Course to Earn Certificate</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Sazerac</h6>
                    <p>Complete Course to Earn Certificate</p>
                  </div>
                </div>

                <div className={Style.IconParent}>
                  <ArticleIcon className={Style.iconStyle} />
                  <div className={Style.IconText}>
                    <h6>Old Fashioned</h6>
                    <p>Complete Course to Earn Certificate</p>
                  </div>
                </div>
              </div>
            </ListItem>
          </List>
        </div>

      </div>
    </Grid>
  </Grid>
</div>
</div>
      </Layout >
    </>
  )
}

export default page