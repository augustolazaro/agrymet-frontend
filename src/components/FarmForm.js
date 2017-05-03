import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { connect } from 'react-redux'

import InputField from './common/InputField'
import ReportOption from './ReportOption'

// Styles
import '../stylesheets/css/components/sidebar.css'

// Actions
import { generateReport } from '../actions/reports'

class FarmForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      coords: '',
      eqFarm: '',
      farm: '',
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
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { errors, name, coords, eqFarm, isLoading } = this.state
    return(
      <div className='row'>
        <form className='farmForm' onSubmit={ e => {
          e.preventDefault()
          this.props.generateReport('bhbox') }
        } >
          <header className='lighten-2'>
            <ul>
              <li>
                <Link to='#' className='button button--square button--square-default'><i className='material-icons'>add</i></Link>
              </li>

              <li>
                <input id='farm_A' name='farm' type='radio' value='A' onChange={ this.onChange } checked />
                <label htmlFor='farm_A'>A</label>
              </li>
              <li>
                <input id='farm_B' name='farm' type='radio' value='B' onChange={ this.onChange }/>
                <label htmlFor='farm_B'>B</label>
              </li>
            </ul>
          </header>

          <div className='farmForm--body col s12'>
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
          </div>

          <div className='form-divider col s12'>
            <label>SELEÇÃO DE PRODUTOS</label>
          </div>

          <div className='reports col s12'>
            <ReportOption label='BH-BOX' icon='view_module' />
            <ReportOption label='PRODUTIV.' icon='assessment' />
            <ReportOption label='PRODUTIV.' icon='assessment' disabled />
            <ReportOption label='PRODUTIV.' icon='assessment' disabled />
          </div>
          <footer className='col s12'>
            <Link to='#' className='btn-flat'>CANCELAR</Link>
            <input type='submit' className='btn right' value='ENVIAR' />
          </footer>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { }
}

function mapDispatchToProps(dispatch) {
  return {
    generateReport: (reportType) => {
      dispatch(generateReport(reportType))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FarmForm)
