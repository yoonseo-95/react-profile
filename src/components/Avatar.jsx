import React from 'react';

export default function Avatar({image, NewTag}) {
  return (
    <div className="avatar">
        <img className="photo" src={image} alt="avatar" />
        {NewTag && <div className="new_tag">New</div>}
    </div>
  );
}

