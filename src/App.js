import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <div className="">
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard categoryId={2} />
  </div>
)
