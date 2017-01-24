import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loading from '../../components/common/Loading';
import Header from '../../components/Header';
import * as searchRegisterActions from '../../actions/searchRegisterActions';
import TextSearchRegisters from '../../components/financialManager/collectMoney/TextSearchRegisters';
import DropdownStudent from '../../components/financialManager/collectMoney/DropdownStudent';
// Import actions here!!

class CollectMoneyContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.textSearchRegistersChange = this.textSearchRegistersChange.bind(this);
  }

  textSearchRegistersChange(text) {
    this.props.searchRegisterActions.loadSearchRegistersData(text);
  }

  render() {
    return (
      <div id="page-wrapper">

        <div className="container-fluid">
          <Header header="Thu tiền học" title="Quản lý tài chính" iconTitle="fa fa-edit"/>
          <p>Mã học viên tiếp theo: <strong>{this.props.next_code}</strong></p>
          <TextSearchRegisters textSearchRegistersChange={this.textSearchRegistersChange}/>
          {this.props.isLoading ? <Loading/> : (
                <ul className="nav">
                  {this.props.users.map(function (user, index) {
                    return <DropdownStudent index={index} key={index} user={user}/>
                  })}
                </ul>
            )
          }
        </div>
      </div>
    );
  }
}

CollectMoneyContainer.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  next_code: PropTypes.string.isRequired,
  searchRegisterActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.searchRegisters.data.users,
    isLoading: state.searchRegisters.isLoading,
    next_code: state.searchRegisters.data.next_code
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchRegisterActions: bindActionCreators(searchRegisterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectMoneyContainer);
