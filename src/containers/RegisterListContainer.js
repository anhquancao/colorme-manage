import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RegisterListComponent from '../components/RegisterListComponent';
import * as registerActions from '../actions/registerActions';
// Import actions here!!

class RegisterListContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.registerActions.loadRegisterListData(1);
  }

  render() {
    return (
      <RegisterListComponent registers={this.props.registers}/>
    )
      ;
  }
}

RegisterListContainer.propTypes = {
  registerActions: PropTypes.object.isRequired,
  registers: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    registers: state.registerList.registers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerActions: bindActionCreators(registerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterListContainer);
