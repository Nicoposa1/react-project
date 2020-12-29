import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const ErrorMsg = error && 'El usuario y a esta registrado o hubo algun error'
                  return <UserForm disabled={loading} error={ErrorMsg} title='Registrarse' onSubmit={onSubmit} />
                }
              }
            </RegisterMutation>
            <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
