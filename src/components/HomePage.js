import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Switch from 'react-bootstrap-switch';


class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }


  componentDidMount() {

  }

  render() {
    return (
      <div id="page-wrapper">

        <div className="container-fluid">

          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">
                Dashboard
                <small>Statistics Overview</small>
              </h1>
              <ol className="breadcrumb">
                <li className="active">
                  <i className="fa fa-dashboard"></i> Dashboard
                </li>
              </ol>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <i className="fa fa-comments fa-3x"></i>
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">{this.props.remain_days}</div>
                      <div>Số ngày còn lại</div>
                    </div>
                  </div>
                </div>
                <a href="#">
                  <div className="panel-footer">
                    <span className="pull-left">View Details</span>
                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                    <div className="clearfix"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-green">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <i className="fa fa-tasks fa-3x"></i>
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">{this.props.total_money}K</div>
                      <div>Tổng tiền</div>
                    </div>
                  </div>
                </div>
                <a href="#">
                  <div className="panel-footer">
                    <span className="pull-left">View Details</span>
                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                    <div className="clearfix"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-yellow">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <i className="fa fa-shopping-cart fa-3x"></i>
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">{this.props.registers_number}</div>
                      <div>Số người đăng kí</div>
                    </div>
                  </div>
                </div>
                <Link to="/register-list">
                  <div className="panel-footer">
                    <span className="pull-left">View Details</span>
                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                    <div className="clearfix"></div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-red">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <i className="fa fa-support fa-3x"></i>
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">{this.props.paid_number}</div>
                      <div>Học viên đóng tiền</div>
                    </div>
                  </div>
                </div>
                <a href="#">
                  <div className="panel-footer">
                    <span className="pull-left">View Details</span>
                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                    <div className="clearfix"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title"><i className="fa fa-bar-chart-o fa-fw"></i> Đăng kí theo ngày</h3>
                </div>
                <div className="panel-body">
                  <canvas id="register-by-date-bar-chart" style={{width: '100%'}}></canvas>
                  <div className="text-right">
                    <a href="#">View Details <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title"><i className="fa fa-bar-chart-o fa-fw"></i> Đăng kí theo giờ</h3>
                </div>
                <div className="panel-body">
                  <canvas id="register-by-hour-bar-chart" style={{width: '100%'}}></canvas>
                  <div className="text-right">
                    <a href="#">View Details <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title"><i className="fa fa-bar-chart-o fa-fw"></i> Doanh thu theo ngày</h3>
                </div>
                <div className="panel-body">
                  <canvas id="money-by-date-bar-chart" style={{width: '100%'}}></canvas>
                  <div className="text-right">
                    <a href="#">View Details <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title"><i className="fa fa-bar-chart-o fa-fw"></i> Số đơn đặt hàng sách trong
                    vòng 28 ngày</h3>
                </div>
                <div className="panel-body">
                  <canvas id="order-by-date-bar-chart" style={{width: '100%'}}></canvas>
                  <div className="text-right">
                    <a href="#">View Details <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title"><i className="fa fa-money fa-fw"></i>Danh sách lớp</h3>
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped">
                      <thead>
                      <tr>
                        <th></th>
                        <th>Lớp</th>
                        <th>Cơ sở</th>
                        <th>Học viên đã nộp tiền</th>
                        <th>Số người đăng kí</th>
                        <th>Thời gian học</th>
                        <th>Ngày khai giảng</th>
                        <th>Trạng thái lớp</th>
                        <th>Kích hoạt</th>
                      </tr>
                      </thead>
                      <tbody>
                      {this.props.classes.map(function (classes, index) {
                        return (
                          <tr key={index}>
                            <td><img src={classes.avatar_url}
                                     style={{width: "40px", height: "40px", borderRadius: "25px"}}/></td>
                            <td>{classes.name}</td>
                            <td>{classes.name}</td>
                            <td>
                              <div>{classes.total_paid + "/" + classes.paid_target}</div>
                              <div className="progress" style={{height: "5px"}}>
                                <div className="progress-bar progress-bar-success" role="progressbar"
                                     style={{width: (classes.total_paid / classes.paid_target) * 100 + "%"}}>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>{classes.total_registers + "/" + classes.register_target}</div>
                              <div className="progress" style={{height: "5px"}}>
                                <div className="progress-bar progress-bar-info" role="progressbar"
                                     style={{width: (classes.total_registers / classes.register_target) * 100 + "%"}}>
                                </div>
                              </div>
                            </td>
                            <td>{classes.study_time}</td>
                            <td>{classes.datestart}</td>
                            <td><Switch bsSize="mini"/></td>
                            <td>
                              <button type="button" className="btn btn-xs btn-success">Success</button>
                            </td>
                          </tr>
                        )
                      })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title"><i className="fa fa-bar-chart-o fa-fw"></i> Area Chart</h3>
                </div>
                <div className="panel-body">
                  <canvas id="campaign-chart" style={{width: '100%'}}></canvas>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }

}

HomePage.propTypes = {
  registers_count: PropTypes.number.isRequired,
  total_money: PropTypes.string.isRequired,
  registers_number: PropTypes.number.isRequired,
  paid_number: PropTypes.number.isRequired,
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

export default HomePage;
