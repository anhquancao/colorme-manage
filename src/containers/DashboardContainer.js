import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomePage from '../components/HomePage';
import Loading from '../components/common/Loading';
import * as barchartSingleLine from '../js/charts';
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

      let chart = $("#campaign-chart").get(0);
      // if (chart) {
      let pieChartContext = chart.getContext("2d");
      let data = [
        {
          value: 300,
          color: "#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        }
      ];

      // eslint-disable-next-line no-use-before-define
      new Chart(pieChartContext)
        .Pie(data, {
          animateRotate: false
        });
      // }

      let registerByDateBarChartContext = $("#register-by-date-bar-chart").get(0).getContext("2d");
      let registerByDateDataBarChart = {
        labels: this.props.date_array,
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(151,187,205,1)",
            strokeColor: "rgba(151,187,205,1)",
            highlightFill: "rgba(151,187,205,1)",
            highlightStroke: "rgba(151,187,205,1)",
            data: this.props.registers_by_date
          },
          {
            label: "My Second dataset",
            fillColor: "rgba(255,0,100,1)",
            strokeColor: "rgba(255,0,100,1)",
            highlightFill: "rgba(255,0,100,1)",
            highlightStroke: "rgba(255,0,100,1)",
            data: this.props.paid_by_date
          }
        ]
      };

      /* jshint ignore:start*/
      new Chart(registerByDateBarChartContext).Bar(registerByDateDataBarChart);
      /* jshint ignore:end */
      barchartSingleLine.barChartSingleLine("#register-by-hour-bar-chart",
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        this.props.registers_by_hour
      );

      barchartSingleLine.barChartSingleLine("#money-by-date-bar-chart",
        this.props.date_array,
        this.props.money_by_date
      );

      barchartSingleLine.barChartSingleLine("#order-by-date-bar-chart",
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
            <HomePage registers_count={this.props.registers_count} total_money={this.props.total_money}
                      registers_number={this.props.registers_number} paid_number={this.props.paid_number}
                      remain_days={this.props.remain_days} date_array={this.props.date_array}
                      money_by_date={this.props.money_by_date} classes={this.props.classes}
                      registers_by_date={this.props.registers_by_date} paid_by_date={this.props.paid_by_date}
                      registers_by_hour={this.props.registers_by_hour} orders_by_hour={this.props.orders_by_hour}
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
  month_ago: PropTypes.array.isRequired
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
    month_ago: state.dashboard.month_ago
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardActions: bindActionCreators(dashboardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
