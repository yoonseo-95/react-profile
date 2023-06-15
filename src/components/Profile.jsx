import React from 'react';
import Avatar from './Avatar';

export default function Profile({image, name, title, NewTag}) {
  return (
    <div className="profile">
      <Avatar image={image} NewTag={NewTag} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  )
}

