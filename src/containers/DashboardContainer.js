import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomePage from '../components/HomePage';
import Loading from '../components/common/Loading';
import * as charts from '../js/charts';
// Import actions here!!
import * as dashboardActions from '../actions/dashboardActions';

class DashboardContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dashboardActions.loadDashboardData(13);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.isLoading && prevProps.isLoading) {

      charts.pieChart("#campaign-chart", []);

      charts.barChartDoubleLine("#register-by-date-chart", this.props.date_array, this.props.registers_by_date, this.props.paid_by_date);

      // barchartSingleLine.barChartSingleLine("#register-by-hour-chart",
      //   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      //   this.props.registers_by_hour
      // );

      charts.lineChart("#money-by-date-chart", this.props.date_array, this.props.money_by_date);

      // barchartSingleLine.barChartSingleLine("#money-by-date-chart",
      //   this.props.date_array,
      //   this.props.money_by_date
      // );

      charts.barChartSingleLine("#order-by-date-chart",
        this.props.month_ago,
        this.props.orders_by_hour
      );
    }
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? (
            <div style={{position: "fixed", width: "100%", height: "100%", background: "white"}}>
              <Loading/>
            </div> ) : (
            < HomePage registers_count={this.props.registers_count} total_money={this.props.total_money}
                       registers_number={this.props.registers_number} paid_number={this.props.paid_number}
                       remain_days={this.props.remain_days} date_array={this.props.date_array}
                       money_by_date={this.props.money_by_date} classes={this.props.classes}
                       registers_by_date={this.props.registers_by_date} paid_by_date={this.props.paid_by_date}
                       registers_by_hour={this.props.registers_by_hour} orders_by_hour={this.props.orders_by_hour}
                       uncalled_number={this.props.uncalled_number}
                       zero_paid_num={this.props.zero_paid_num}
                       total_classes={this.props.total_classes}
                       month_ago={this.props.month_ago}

            />
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
  remain_days: PropTypes.number.isRequired,
  date_array: PropTypes.array.isRequired,
  money_by_date: PropTypes.array.isRequired,
  classes: PropTypes.array.isRequired,
  registers_by_date: PropTypes.array.isRequired,
  paid_by_date: PropTypes.array.isRequired,
  registers_by_hour: PropTypes.array.isRequired,
  orders_by_hour: PropTypes.array.isRequired,
  month_ago: PropTypes.array.isRequired,
  uncalled_number: PropTypes.number.isRequired,
  zero_paid_num: PropTypes.number.isRequired,
  total_classes: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    registers_count: state.dashboard.registers_count,
    total_money: state.dashboard.total_money,
    registers_number: state.dashboard.registers_number,
    paid_number: state.dashboard.paid_number,
    isLoading: state.dashboard.isLoading,
    remain_days: state.dashboard.remain_days,
    date_array: state.dashboard.date_array,
    money_by_date: state.dashboard.money_by_date,
    classes: state.dashboard.classes,
    registers_by_date: state.dashboard.registers_by_date,
    paid_by_date: state.dashboard.paid_by_date,
    registers_by_hour: state.dashboard.registers_by_hour,
    orders_by_hour: state.dashboard.orders_by_hour,
    month_ago: state.dashboard.month_ago,
    uncalled_number: state.dashboard.uncalled_number,
    zero_paid_num: state.dashboard.zero_paid_num,
    total_classes: state.dashboard.total_classes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardActions: bindActionCreators(dashboardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
