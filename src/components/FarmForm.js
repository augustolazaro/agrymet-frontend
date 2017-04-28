import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import InputField from './common/InputField'
import ReportOption from './ReportOption'

import $ from 'jquery'
import '../stylesheets/css/sidebar.css'

class FarmForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      coords: '',
      eqFarm: '',
      errors: {},
      isLoading: false
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    console.log("New farm submitted")
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { errors, name, coords, eqFarm, isLoading } = this.state
    return(
      <div className='row'>
        <header className='lighten-2'>
          <ul>
            <li><Link to='#' className='button button--square button--square-default'><i className='material-icons'>add</i></Link></li>
            <li><Link to='#' className='button button--rounded button--rounded-primary button--rounded-active'>A</Link></li>
            <li><Link to='#' className='button button--rounded button--rounded-primary'>B</Link></li>
          </ul>
        </header>
        <form onSubmit={ this.onSubmit }>
          <InputField
            name='name'
            label='NOME DA UNIDADE PRODUTORA'
            onChange={ this.onChange }
            value={ name }
            error={ errors.name }
          />
          <InputField
            name='coords'
            label='PONTO A SER ANALISADO'
            value={ coords }
            error={ errors.coords }
            onChange={ this.onChange }
          />
          <div className='col s5'>
            <label>PROFUNDIDADE DO SOLO</label>
          </div>
          <div className='input-field select-field col s7'>
            <select>
              <option value="" disabled selected>mm</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="65">65</option>
              <option value="70">70</option>
            </select>
          </div>
          <InputField
            name='eqFarm'
            label='USAR DADOS DA ESTAÇÃO'
            value={ eqFarm }
            error={ errors.eqFarm }
            onChange={ this.onChange }
          />
        </form>

        <div className='form-divider'>
          <label>SELEÇÃO DE PRODUTOS</label>
        </div>
        <div className='reports row'>
          <ReportOption label='BH-BOX' icon='view_module' />
          <ReportOption label='PRODUTIV.' icon='assessment' />
          <ReportOption label='PRODUTIV.' icon='assessment' disabled />
          <ReportOption label='PRODUTIV.' icon='assessment' disabled />
        </div>
        <footer>
          <Link to='#' className='btn-flat'>CANCELAR</Link>
          <Link to='#' className={ classnames('btn right', { 'disabled': isLoading }) }>ENVIAR</Link>
        </footer>
      </div>
    )
  }
}

export default FarmForm
