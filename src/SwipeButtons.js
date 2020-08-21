import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import IconButton from "@material-ui/core/IconButton"

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <h1>Buttons go here</h1>
      <IconButton>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large"/>
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large"/>
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large"/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons

