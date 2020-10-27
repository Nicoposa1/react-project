import React from 'react'
import { ImgWrapper, Img, Button } from './styles'

import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGES = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGES }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper className="">
          <Img src={src} alt=""/>
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='32px' /> {likes} likes
      </Button>
    </article>
  )
}
