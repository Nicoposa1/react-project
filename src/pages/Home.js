import React from 'react'
import { ListOfPhotoCard } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Helmet } from 'react-helmet'

export const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de foto de mascotas</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
