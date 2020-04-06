import React, {useState} from 'react';

export default (OriginalComponent) => ({...props}) => {
  const [isOpen, switchOpen] = useState(false);
  const toggleOpenItem = () => {
    switchOpen(!isOpen);
  };
  return(
    <OriginalComponent 
      {...props}
      isOpen = {isOpen}
      toggleOpenItem={toggleOpenItem}
    />
  );
}

