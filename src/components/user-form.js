import React, { useState } from 'react';
const UserForm = () => {
  const [value, setValue] = useState('');
  const onChange = event => setValue(event.target.value);
  return(
    <div>
      Username:
      <input value={value} type="text" onChange={onChange} />
    </div>
  );
}

export default UserForm;
