import React from 'react';
import Style from '../style/CartDetails.module.css';
import style from '../style/CompleteDetails.module.css';
import LiquorIcon from '@mui/icons-material/Liquor';

const CompleteDetails = (props) => {
  const { Data } = props;

  // take out specific details from id and show
  const CompleteDetails = Data.find((item) => item.id === props.Id);

  console.log("CompleteDetails", CompleteDetails)

  return (
    <>
      <div className={style.HeadingParent}>
        {/* show here maain heading */}
        <h4>{CompleteDetails.pname}</h4>

        {/* first section data here  */}
        <div className={Style.BoxParent} >
          <div>
            <div className={Style.ImgParent}>
              <img src={CompleteDetails.Url} alt='not found' />
            </div>
          </div>
          <div>
            <div className={Style.TextAreaParent}>
              <h3>{CompleteDetails.pname}</h3>
              <span><LiquorIcon className={Style.IconStyle} /> ABV :  {CompleteDetails.persentAlcohol} </span>
              <p>{CompleteDetails.description}</p>
            </div>
          </div>
        </div>

        {/* Ingredients section start here   */}
        {CompleteDetails.Ingredients.length > 0 && (
          <div className={style.MainSection}>
            <h3>Ingredients</h3>
            {CompleteDetails.Ingredients.map((item) => (
              <div key={item.id} className={style.TextHeading}>
                <p>{item.StartingText}</p>
                <p>{item.EndingText}</p>
              </div>
            ))}
          </div>
        )}

        {/* Presentations section start here  */}
        {CompleteDetails.Presentations.length > 0 ? (
          <div className={style.MainSection}>
            <h3>Presentations</h3>
            {CompleteDetails.Presentations.map((item) => (
              <div key={item.id} className={style.TextHeading}>
                <p>{item.StartingText}</p>
                <p>{item.EndingText}</p>
              </div>
            ))}
          </div>
        ) : null}

        {/*  Methods section start here  */}
        {CompleteDetails.Methods.length > 0 ? (
          <div className={style.MainSection}>
            <h3>Methods</h3>
            {CompleteDetails.Methods.map((item => (
              <div key={item.id} className={style.TextHeading}>
                <p>{item.text}</p>
              </div>
            )))}
          </div>
        ) : (null)}


        {/* Details section start here   */}
        {CompleteDetails.Details.length > 0 ? (
          <div className={style.DetailParent}>
            <h3>Detail</h3>
            {CompleteDetails.Details.map((item => (
              <p key={item.id}>{item.description}</p>
            )))}
          </div>
        ) : (null)}

        {/* these details are only show in beer section start here   */}
        {CompleteDetails.SecondDetails.length > 0 ? (
          <div className={style.MainSection}>
            <h3>Details</h3>
            {CompleteDetails.SecondDetails.map((item) => (
              <div key={item.id} className={style.TextHeading}>
                <p>{item.StartingText}</p>
                <p>{item.EndingText}</p>
              </div>
            ))}
          </div>
        ) : null}

        {/* Video section start here  */}
        {CompleteDetails.VideoLink ? (
          <div className={style.VideoParent}>
            <video className={style.VideoChild}>
              <source src={CompleteDetails.VideoLink} />
            </video>
          </div>
        ) : (null)}
      </div>

    </>
  )
}

export default CompleteDetails