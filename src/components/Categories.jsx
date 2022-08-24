import React from 'react'


import {useGlobalContext} from '../utils/context'
const Categories = () => {
  const {setsearchItem} = useGlobalContext();

  const ChangeSearch = (item) => {
    setsearchItem(item);
  }

  return (
    <div className="btn-container">
      <button onClick={() => ChangeSearch('business')}>
        business
      </button>
      <button onClick={() => ChangeSearch('education')}>
        education
      </button>
      <button onClick={() => ChangeSearch('tech')}>
        tech
      </button>
      <button onClick={() => ChangeSearch('nature')}>
        nature
      </button>
      <button onClick={() => ChangeSearch('sports')}>
        sports
      </button>
      <button onClick={() => ChangeSearch('gadgets')}>
        gadgets
      </button>
      <button onClick={() => ChangeSearch('health')}>
        health
      </button>

    </div>
  );
};

export default Categories;