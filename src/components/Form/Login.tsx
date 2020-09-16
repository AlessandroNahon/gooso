import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { TextField, Button } from '@material-ui/core'

import { fetchLogin } from '../../api/auth'
import { UserActionTypes, AuthCredsType } from '../../types/user'
import { ADD_AUTHED_USER } from '../../store/types'

import './styles.scss'

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const [creds, setCreds] = useState({})
  const [hasError, setHasError] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  const onSubmit = (data: AuthCredsType) => async (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault()
    const user = await fetchLogin(data)

    dispatch<UserActionTypes>({
      type: ADD_AUTHED_USER,
      user: user.data
    })

    if (user.error) setHasError(true)
    if (user.data) history.push('/dashboard')
  }

  return (
    <form className='form form__login' onSubmit={onSubmit(creds)}>
      <TextField
        className='input'
        required
        label='Email'
        name='email'
        type='email'
        onChange={onChangeHandler}
        error={hasError}
        helperText={hasError && 'Incorrect entry.'}
      />
      <TextField
        className='input'
        required
        label='Password'
        name='password'
        type='password'
        onChange={onChangeHandler}
        error={hasError}
        helperText={hasError && 'Incorrect entry.'}
      />
      <div>
        <Button
          className='button'
          variant='contained'
          onClick={onSubmit(creds)}
          type='submit'
        >
          Log in
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
