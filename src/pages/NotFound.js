import React from 'react'
import { Link as LinkRouter } from '@reach/router'

export const NotFound = () => (
  <>
    <h1>Esta página no existe :(</h1>
    <LinkRouter to='/'>Vuelve a la home</LinkRouter>
  </>
)
