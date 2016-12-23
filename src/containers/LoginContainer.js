import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginComponent from '../components/LoginComponent';
// Import actions here!!
import * as loginActions from '../actions/loginActions';

class LoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateFormData = this.updateFormData.bind(this);
  }

  updateFormData(event) {
    const field = event.target.name;
    let login = this.props.login;
    login[field] = event.target.value;
    console.log(login);
    this.props.loginActions.updateFormData(login);
  }

  render() {
    return (
      <LoginComponent
        updateFormData={this.updateFormData}
        login={this.props.login}/>
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.object.isRequired,
  loginActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    login: Object.assign({}, state.login,{})
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
