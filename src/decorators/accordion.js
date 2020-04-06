import React, { useState } from 'react';

export default (OriginalComponent) => ({...props}) => {
  const [openItemId, setId] = useState(null)
  const toggleOpenItem = ({target}) => {
    setId(openItemId ===  target.id ? null : target.id)
  }

  return(
    <OriginalComponent 
      {...props}
      openItemId={openItemId}
      toggleOpenItem={toggleOpenItem}
    />
  );
}

