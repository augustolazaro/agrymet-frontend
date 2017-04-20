import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
  let errors = {}

  if(Validator.isEmpty(data.identifier)) {
    errors.identifier = 'Preencha com seu email'
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Digite sua senha'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
