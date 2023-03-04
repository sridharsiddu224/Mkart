import React from 'react'

function Rating(props) {
  const {rating, numReviews} = props
 
    return <>
        
        <span>
            <i className={rating>=1?"fa fa-star":"fa fa-star-half"} aria-hidden="true"></i>
            <i className={rating>=2?"fa fa-star":"fa fa-star-half"} aria-hidden="true"></i>
            <i className={rating>=3?"fa fa-star":"fa fa-star-half"} aria-hidden="true"></i>
            <i className={rating>=4?"fa fa-star":"fa fa-star-half"} aria-hidden="true"></i>
            <i className={rating>=5?"fa fa-star":"fa fa-star-half"} aria-hidden="true"></i>
        </span>
        <span>{rating}</span>
        <span className='ms-3'>{numReviews} rating</span>
        <hr/>
        
    </>
}

export default Rating