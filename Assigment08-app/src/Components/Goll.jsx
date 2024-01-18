import React from 'react'


const Goll = (props) => {
    const {img_url} = props.card_data;
  return (
    <div>
<img src={img_url} alt="" />


    </div>
  )
}

export {Goll};