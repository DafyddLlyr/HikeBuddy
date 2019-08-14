import React from 'react'

const StarRating = ({rating}) => {

  let output = []

  for(let i = 0; i < rating; i++) {
    output.push(
      <i class="fas fa-star"></i>
    )
  }

  for(let i = 0; i < (5 - rating); i++) {
    output.push(
      <i class="far fa-star"></i>
    )
  }

  const style = {
    display: "flex",
    color: "orange",
  }

  return(
    <div style={style}>
      {output}
    </div>
  )

}

export default StarRating;
