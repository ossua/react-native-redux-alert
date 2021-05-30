import { connect } from 'react-redux'
import actions from '../redux/actions'
import Alert from './Alert'

const mapStateToProps = (store) => store.alertReducer

const mapDispatchToProps = (dispatch) => ({
  hide: () => {
    dispatch(actions.clear())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
