import React from 'react'

import { Form, Input, Button, Title } from './styles'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handlerSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handlerSubmit}>
        <Input placeholder='Email' type='email' {...email} />
        <Input placeholder='Password' type='Password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
