import React from 'react'
import {connect} from 'react-redux'

const mapState = (state) => ({
    currentModal: state.modals
})

const ModalManager = () => {
  return (
    <div>
      
    </div>
  )
}

export default connect()(ModalManager)
