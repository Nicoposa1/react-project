import React from 'react'

import { Error, Form, Input, Title } from './styles'
import { SubmitButton } from '../SubmitButton'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handlerSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handlerSubmit}>
        <Input disabled={disabled} placeholder='Email' type='email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='Password' {...password} />
        <SubmitButton>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
