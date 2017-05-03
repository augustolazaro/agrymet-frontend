import React from 'react'
import classnames from 'classnames'

const InputField = ({ name, value, label, error, type, onChange }) => {
  return(
    <div className="input-field col s12">
      <input
        name={ name }
        value={ value }
        onChange={ onChange }
        type={ type }
        className={ classnames("validate", { 'invalid': error }) }
        id={ name }
      />
      <label htmlFor={ name } data-error={ error } >{ label }</label>
    </div>
  )
}

InputField.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func
}

InputField.defaultProps = {
  type: 'text'
}

export default InputField
