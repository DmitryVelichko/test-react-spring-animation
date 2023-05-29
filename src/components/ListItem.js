import React from 'react';

const ListItem = ({ color }) => {
  return (
    <div
      style={{
        width: '20vw',
        height: '20vh',
        backgroundColor: color,
        margin: '1vw',
      }}
    />
  );
};

export default ListItem;
