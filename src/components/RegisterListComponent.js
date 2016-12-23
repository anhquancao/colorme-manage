import React, {PropTypes} from 'react';

class RegisterListComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id="page-wrapper">

        <div className="container-fluid">

          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">
                Danh sách
                <small> đăng kí</small>
              </h1>
            </div>
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                  <tr>
                    <th>Họ tên</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Lớp</th>
                    <th>Ngày đăng kí</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.registers.map(function (register, index) {
                    return (
                      <tr key={index}>
                        <td>{register.name}</td>
                        <td>{register.email}</td>
                        <td>{register.phone}</td>
                        <td>{register.class.name}</td>
                        <td>{register.created_at}</td>
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
    );
  }
}

RegisterListComponent.propTypes = {
  // myProp: PropTypes.string.isRequired
  registers: PropTypes.array.isRequired
};

export default RegisterListComponent;
