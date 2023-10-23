import React from 'react'

const FeaturesBox = ({img, title, text}) => {
  return (
    <div class="grid-item gi1">
        <img class="features-img" src="images/features/handshake.svg" alt="stylized icon of a handshake" />
        <h3 class="features-h3">{title}</h3>
        <p class="features-text">{text}</p>
        <div class="star1"><i class="fa-duotone fa-plus"></i></div>
        <div class="star2"><i class="fa-duotone fa-plus"></i></div>
        <div class="star3"><i class="fa-duotone fa-plus"></i></div>
    </div>
  )
}

export default FeaturesBox