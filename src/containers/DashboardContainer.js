import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomePage from '../components/HomePage';
import Loading from '../components/common/Loading';
// Import actions here!!
import * as dashboardActions from '../actions/dashboardActions';

class DashboardContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dashboardActions.loadDashboardData(13);
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? (
            <div style={{position: "fixed", width: "100%", height: "100%", background: "white"}}>
              <Loading/>
            </div> ) : (
            <HomePage registers_count={this.props.registers_count} total_money={this.props.total_money}
                      registers_number={this.props.registers_number} paid_number={this.props.paid_number}
                      remain_days={this.props.remain_days}/>
          )}
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  dashboardActions: PropTypes.object.isRequired,
  registers_count: PropTypes.number.isRequired,
  total_money: PropTypes.string.isRequired,
  registers_number: PropTypes.number.isRequired,
  paid_number: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  remain_days: PropTypes.number.isRequired

};

function mapStateToProps(state) {
  return {
    registers_count: state.dashboard.registers_count,
    total_money: state.dashboard.total_money,
    registers_number: state.dashboard.registers_number,
    paid_number: state.dashboard.paid_number,
    isLoading: state.dashboard.isLoading,
    remain_days: state.dashboard.remain_days
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardActions: bindActionCreators(dashboardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
