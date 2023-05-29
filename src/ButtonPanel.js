// ButtonPanel.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from './store/itemsSlice';

const ButtonPanel = () => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addItem());
  };

  const handleRemoveClick = () => {
    dispatch(removeItem());
  };

  return (
    <div>
      <button onClick={handleAddClick}>Добавить</button>
      <button onClick={handleRemoveClick}>Удалить</button>
    </div>
  );
};

export default ButtonPanel;
