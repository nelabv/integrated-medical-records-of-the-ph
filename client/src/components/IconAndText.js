import React from 'react';

export default function IconAndText({Icon, description}) {
  return (
    <div className='icon-and-text'>
      <Icon size="2em" />
      <span>{description}</span>
    </div>
  );
}

