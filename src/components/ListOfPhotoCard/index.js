import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Ul } from './styles'

export const ListOfPhotoCard = () => {
  return (
    <Ul>
      {[1, 2, 3, 4].map(id => <PhotoCard key={id} />)}
    </Ul>
  )
}
