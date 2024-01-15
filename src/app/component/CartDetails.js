import React from 'react'
import Style from '../style/CartDetails.module.css'
import LiquorIcon from '@mui/icons-material/Liquor';
import { useRouter } from 'next/navigation';


const CartDetails = (props) => {
    const Route = useRouter()
    const {Data} = props;

    const GetCompleteDetails = async (id) => {
        Route.push(`/specs/cocktails/${id}`)
        console.log("props", id)
      }

  return (
    <>
        {Data.map((item ) => (
            <div key={item.id}>
              <div className={Style.BoxParent} onClick={() => GetCompleteDetails(item.id)}>
                <div>
                  <div className={Style.ImgParent}>
                    <img src={item.imageUrl} alt='not found' />
                  </div>
                </div>
                <div>
                  <div className={Style.TextAreaParent}>
                    <h3>{item.pname}</h3>
                    <span><LiquorIcon className={Style.IconStyle} /> ABV :  {item.alcoholPersent} </span>
                    <p>{item.paratext}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  )
}

export default CartDetails;