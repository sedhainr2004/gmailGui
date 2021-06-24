import React from 'react'
import './Option.css'

function Option({
  Icon,
  title,
  color,
  selected,
}) {
  return (
    <div
      className={`option ${
        selected && 'option--selected'
      }`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
 
      <Icon />
      <h4>{title}</h4>
    </div>
  )
}

export default Option
