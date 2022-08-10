import React from 'react';

const NewsSearch = ({ handleChange, handleClick }) => {
  return (
    <div>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default NewsSearch