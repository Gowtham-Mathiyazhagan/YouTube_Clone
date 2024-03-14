import React from 'react'
import { useParams } from 'react-router-dom'

const CurrentPlaying = () => {
  const {id} = useParams()
  return (
	<div>CurrentPlaying {id}</div>
  )
}

export default CurrentPlaying