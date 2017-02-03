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
    this.clickLogin = this.clickLogin.bind(this);
    this.state = {
      login: {},
    };
  }

  updateFormData(event) {
    const field = event.target.name;
    let login = this.state.login;
    login[field] = event.target.value;
    return this.setState({
      login: login
    });
  }

  clickLogin() {
    this.props.loginActions.updateFormData(this.state.login);
  }

  render() {
    return (
      <LoginComponent
        updateFormData={this.updateFormData}
        login={this.state.login}
        clickLogin={this.clickLogin}
        isLoading={this.props.isLoading}
        token={this.props.token}
      />
    );
  }
}

LoginContainer.propTypes = {
  loginActions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    token: state.login.token,
    isLoading: state.login.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
