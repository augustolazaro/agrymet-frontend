import React, { Component } from 'react'
import InputField from './common/InputField'
import validateInput from '../shared/validators/login'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state)

    if(!isValid) {
      this.setState({ errors })
    }

    return isValid
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    if(this.isValid()) {
      alert('Form submitted')
    }
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state
    return(
      <div className='row'>
        <div className='col s4 offset-s4'>
          <div className='row'>
            <form onSubmit={ this.onSubmit }>
              <InputField
                name='identifier'
                label='Usuário'
                type='email'
                onChange={ this.onChange }
                value={ identifier }
                error={ errors.identifier }
              />
              <InputField
                name='password'
                label='Senha'
                type='password'
                value={ password }
                error={ errors.password }
                onChange={ this.onChange }
              />
              <div className='col s12'>
                <input type='submit' className='btn wave-light green' value='LOG IN' disabled={ isLoading } />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
