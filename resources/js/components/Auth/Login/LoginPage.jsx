import React from 'react'
import { NavLink } from 'react-router-dom'
import Thumbnail from './Thumbnail'
import CardLogin from './CardLogin'

const LoginPage = () => {
  return (
    <div>
        <Thumbnail />
        <CardLogin />
    </div>
  )
}

export default LoginPage
