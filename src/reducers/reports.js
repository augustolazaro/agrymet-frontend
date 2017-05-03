import { GENERATE_REPORT } from '../actions/reports'

const initialState = {
  reportType: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GENERATE_REPORT:
      console.log('GENERATE_REPORT')
      return {
        reportType: action.reportType
      }

    default:
      return state
  }
}
