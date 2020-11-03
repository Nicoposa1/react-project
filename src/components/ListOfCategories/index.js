import React, { useEffect, useState } from 'react'
import { Category } from '../category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(function(){
    fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])
  
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item> )
      }
    </List>
  )
}
