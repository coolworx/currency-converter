import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import currencyActions from '../../actions/currency'

import Home from './component'


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  // const currency = bindActionCreators(currencyActions, dispatch);

  return {
    // onSplitterMoved: (data) => {
    //   ui.mainSplitterMoved(data)
    // },
    // onWindowResize: (data) => {
    //   ui.setDocking(data)
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
