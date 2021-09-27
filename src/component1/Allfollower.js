import React, { useState } from 'react'

export const Allfollower = ({ id, img, name1, name2, d }) => {
  const [text, settext] = useState(true)
  const [color, setcolor] = useState(true)

  const change = () => {
    settext(!text)
    setcolor(!color)
  }
  return (
    <div className="items">
      <div className="detail">
        <img src={img} alt="imge" />
        <div className="name">
          <p> {name1} </p> <p> {name2} </p>{' '}
        </div>{' '}
      </div>{' '}
      <button
        onClick={change}
        style={
          color
            ? { backgroundColor: 'black' }
            : { backgroundColor: 'rgb(24, 99, 238)' }
        }
        className="button"
      >
        {' '}
        {text ? 'following' : 'follow'}{' '}
      </button>{' '}
      <div className="remove">
        <p onClick={() => d(id)}> x </p>{' '}
      </div>{' '}
    </div>
  )
}
