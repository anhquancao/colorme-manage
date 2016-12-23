import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomePage from '../components/HomePage';
// Import actions here!!
import * as dashboardActions from '../actions/dashboardActions';

class DashboardContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dashboardActions.loadDashboardData();
  }

  render() {
    return (
      <HomePage registers_count={this.props.registers_count} total_money={this.props.total_money}/>
    );
  }
}

DashboardContainer.propTypes = {
  dashboardActions: PropTypes.object.isRequired,
  registers_count: PropTypes.number.isRequired,
  total_money: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    registers_count: state.dashboard.registers_count,
    total_money: state.dashboard.total_money
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardActions: bindActionCreators(dashboardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
