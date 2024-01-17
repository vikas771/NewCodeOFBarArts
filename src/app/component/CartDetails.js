import React from 'react'
import Style from '../style/CartDetails.module.css'
import LiquorIcon from '@mui/icons-material/Liquor';
import { useRouter } from 'next/navigation';

const CartDetails = (props) => {
  const Route = useRouter()
  const { Data } = props;

  console.log(Data);

  // function to get all details and redirect to it's own details component 
  const GetCompleteDetails = async (id) => {
    Route.push(`/specs/cocktails/${id}`)
    console.log("props", id)
  }

  return (
    <>
      {Data.map((item) => (
        <div key={item.id}>
          <div className={Style.BoxParent} onClick={() => GetCompleteDetails(item.id)}>
            <div>
              <div className={Style.ImgParent}>
                <img src={item.Url} alt='not found' />
              </div>
            </div>
            <div>
              <div className={Style.TextAreaParent}>
                <h3>{item.pname ? item.pname : item.productname}</h3>
                {/* Added here condiction for LiquorIcon if persentAlcohol is avialble than show otherwise hide  */}
                <span>
                  {item.persentAlcohol && <LiquorIcon className={Style.IconStyle} />}
                  {item.persentAlcohol && ' ABV : '}
                  {item.persentAlcohol && item.persentAlcohol}
                </span>
                 <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CartDetails;