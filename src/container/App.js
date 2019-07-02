import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import GridControls from '../components/GridControls'
import Grid, { GridShape } from '../components/Grid'
import * as GridActions from '../actions/grid'

const App = (props) => (
  <div>
    <GridControls
      actions={props.actions}
      profiler={props.profiler}
    />
    <div>
      <Grid
        data={props.grid}
        toggle={props.actions.toggle}
      />
    </div>
  </div>
)

App.propTypes = {
  grid: GridShape.isRequired,
  profiler: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({ actions: bindActionCreators(GridActions, dispatch) })
)(App)