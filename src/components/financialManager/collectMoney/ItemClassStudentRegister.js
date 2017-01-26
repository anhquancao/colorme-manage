/**
 * Created by Phan M Duong on 1/25/2017.
 */
import React, {PropTypes} from 'react';

const ItemClassStudentRegister = ({register, next_code}) => {
  return (
    <tr>
      <td>{register.course}</td>
      <td>{register.class}</td>
      <td>{register.register_time}</td>
      {
        (register.is_paid != 0) ? (
            <td>{register.code}</td>
          ) : (
            <td><input value={next_code} type="text" style={{maxWidth:'100px'}} className="form-control"/></td>
          )}
      {
        (register.is_paid != 0) ? (
            <td>{register.money}</td>
          ) : (
            <td><input value={register.money} type="text" style={{maxWidth:'100px'}} className="form-control"/></td>
          )}
      {
        (register.is_paid != 0) ? (
            <td>{register.note}</td>
          ) : (
            <td><input value={register.note} type="text" style={{maxWidth:'100px'}} className="form-control"/></td>
          )}
      {
        (register.is_paid != 0) ? (
            <td>{register.paid_time}</td>
          ) : (
            <th style={{textAlign: 'center'}}>Chưa nộp</th>
          )}
          <td><button type="button" className="btn btn-success" style={{textAlign: 'center'}}>Nộp đủ</button></td>
    </tr>
  );
};

ItemClassStudentRegister.propTypes = {
  register: PropTypes.object.isRequired,
  next_code: PropTypes.string.isRequired
};


export default ItemClassStudentRegister;
