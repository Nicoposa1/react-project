import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'

import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGES = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGES }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    )
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
      })
  }, [ref])

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper className=''>
                <Img src={src} alt='' />
              </ImgWrapper>
            </a>

            <Button>
              <MdFavoriteBorder size='32px' /> {likes} likes
            </Button>
          </>
      }
    </Article>
  )
}
