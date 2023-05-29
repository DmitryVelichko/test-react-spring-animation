import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTransition, animated } from 'react-spring';
import { addItem, removeItem } from '../store/listSlice';
import ListItem from './ListItem';
import './list.css'

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  const handleAddItem = () => {
    const color = getRandomColor();
    dispatch(addItem(color));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  const transitions = useTransition(list, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
  });

  return (
    <div>
      <div className='btnContainer'>
        <button className='btn' onClick={handleAddItem}>Добавить</button>
        <button className='btn' onClick={handleRemoveItem}>Удалить</button>
      </div>
      <div className='mainList'>
        {transitions((style, item) => (
          <animated.div style={style}>
            <ListItem key={item.id} color={item.color} />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

const getRandomColor = () => {
  const colors = ['#0DECF7', '#2AF70D', '#0D35F7', '#790DF7', '#F70D3C', '#F7A80D'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default List;
