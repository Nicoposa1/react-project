import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Ul } from './styles'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const widthPhoto = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`)

const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <Ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </Ul>
  )
}

export const ListOfPhotoCard = widthPhoto(ListOfPhotoCardComponent)
