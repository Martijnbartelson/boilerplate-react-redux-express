import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import SampleComponent from './SampleComponent'


class SampleComponentContainer extends PureComponent {



  render() {

    const {products} = this.props

    return (
      products ? < SampleComponent/> : 'Loading'
    )
  }
}

const mapStateToProps = function (state) {
  return {
    products: state.sampleReducer
  }
}

export default connect(mapStateToProps)(SampleComponentContainer)
