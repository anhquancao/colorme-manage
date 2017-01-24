import React from 'react';
import ItemClassStudentRegister from './ItemClassStudentRegister';

const DropdownStudent = ({index, user}) => {
  return (
    <li>
      <a href="javascript:;" data-toggle="collapse"
         data-target={"#" + index}>{user.name + " (" + user.phone + ") (" + user.email + ")" }</a>
      <ul id={index} className="collapse">
        <li>dsadsadsadsa</li>
        {user.registers.map(function (register, index) {
          console.log(register.course);
          <li key={index}>{register.course}</li>
          {/*<ItemClassStudentRegister register={register}/>*/
          }
        })}
      </ul>
    </li>
  );
}

export default DropdownStudent;
